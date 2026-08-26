<script setup lang="ts">
import { useBuilder } from '~/composables/useBuilder'
import { useCodeGenerator } from '~/composables/useCodeGenerator'

const props = defineProps<{
	modelValue: boolean
}>()

const emit = defineEmits<{
	'update:modelValue': [val: boolean]
}>()

const { elements } = useBuilder()
const { generateFullSfcCode, generateNuxtContentMarkdown } = useCodeGenerator()

const activeTab = ref<'code' | 'mdc'>('code')
const copiedCode = ref(false)
const copiedMdc = ref(false)

const generatedCode = computed(() => {
	return generateFullSfcCode(elements.value)
})

const generatedMdc = computed(() => {
	return generateNuxtContentMarkdown(elements.value)
})

const copyCodeToClipboard = async () => {
	try {
		await navigator.clipboard.writeText(generatedCode.value)
		copiedCode.value = true
		setTimeout(() => {
			copiedCode.value = false
		}, 2000)
	} catch (e) {
		console.error('Failed to copy', e)
	}
}

const copyMdcToClipboard = async () => {
	try {
		await navigator.clipboard.writeText(generatedMdc.value)
		copiedMdc.value = true
		setTimeout(() => {
			copiedMdc.value = false
		}, 2000)
	} catch (e) {
		console.error('Failed to copy', e)
	}
}

const downloadVueFile = () => {
	const blob = new Blob([generatedCode.value], { type: 'text/plain;charset=utf-8' })
	const url = URL.createObjectURL(blob)
	const link = document.createElement('a')
	link.href = url
	link.download = 'index.vue'
	link.click()
	URL.revokeObjectURL(url)
}

const downloadMdcFile = () => {
	const blob = new Blob([generatedMdc.value], { type: 'text/markdown;charset=utf-8' })
	const url = URL.createObjectURL(blob)
	const link = document.createElement('a')
	link.href = url
	link.download = 'index.md'
	link.click()
	URL.revokeObjectURL(url)
}
</script>

<template>
	<UModal
		:open="modelValue"
		title="Export Code"
		description="Export ready-to-use Vue 4 SFC template (.vue) or Nuxt Content Markdown document (.md)."
		@update:open="emit('update:modelValue', $event)"
	>
		<template #body>
			<div class="space-y-4">
				<!-- Navigation Tabs (Vue SFC & Nuxt Content .md) -->
				<div class="flex border-b border-neutral-200 dark:border-neutral-800 gap-2">
					<button
						class="pb-2.5 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5"
						:class="activeTab === 'code' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
						@click="activeTab = 'code'"
					>
						<UIcon name="lucide:file-code-2" class="w-4 h-4" />
						<span>Vue SFC (.vue)</span>
					</button>

					<button
						class="pb-2.5 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5"
						:class="activeTab === 'mdc' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
						@click="activeTab = 'mdc'"
					>
						<UIcon name="lucide:file-text" class="w-4 h-4" />
						<span>Nuxt Content (.md)</span>
					</button>
				</div>

				<!-- ================= TAB 1: VUE SFC CODE ================= -->
				<div v-if="activeTab === 'code'" class="space-y-3">
					<div class="flex items-center justify-between">
						<span class="text-xs text-neutral-500">Save as <code>pages/index.vue</code> or in <code>app/components/</code></span>
						<div class="flex items-center gap-2">
							<UButton
								size="xs"
								color="neutral"
								variant="outline"
								icon="lucide:download"
								label="Download .vue"
								@click="downloadVueFile"
							/>
							<UButton
								size="xs"
								:color="copiedCode ? 'success' : 'primary'"
								:icon="copiedCode ? 'lucide:check' : 'lucide:copy'"
								:label="copiedCode ? 'Copied!' : 'Copy Code'"
								@click="copyCodeToClipboard"
							/>
						</div>
					</div>

					<div class="relative rounded-lg bg-neutral-950 text-neutral-100 p-4 font-mono text-xs overflow-x-auto max-h-[380px] border border-neutral-800 select-text leading-relaxed">
						<pre><code>{{ generatedCode }}</code></pre>
					</div>
				</div>

				<!-- ================= TAB 2: NUXT CONTENT (.md / MDC) ================= -->
				<div v-else-if="activeTab === 'mdc'" class="space-y-3">
					<div class="flex items-center justify-between">
						<span class="text-xs text-neutral-500">Save as <code>content/index.md</code> for <code>@nuxt/content</code></span>
						<div class="flex items-center gap-2">
							<UButton
								size="xs"
								color="neutral"
								variant="outline"
								icon="lucide:download"
								label="Download .md"
								@click="downloadMdcFile"
							/>
							<UButton
								size="xs"
								:color="copiedMdc ? 'success' : 'primary'"
								:icon="copiedMdc ? 'lucide:check' : 'lucide:copy'"
								:label="copiedMdc ? 'Copied!' : 'Copy Markdown'"
								@click="copyMdcToClipboard"
							/>
						</div>
					</div>

					<div class="relative rounded-lg bg-neutral-950 text-neutral-100 p-4 font-mono text-xs overflow-x-auto max-h-[380px] border border-neutral-800 select-text leading-relaxed">
						<pre><code>{{ generatedMdc }}</code></pre>
					</div>
				</div>
			</div>
		</template>
	</UModal>
</template>

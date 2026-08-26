<script setup lang="ts">
import { useBuilder } from '~/composables/useBuilder'
import { useCodeGenerator } from '~/composables/useCodeGenerator'

const props = defineProps<{
	modelValue: boolean
}>()

const emit = defineEmits<{
	'update:modelValue': [val: boolean]
}>()

const { elements, importFromJSON, exportToJSON } = useBuilder()
const { generateFullSfcCode, generateNuxtContentMarkdown, generateNuxtContentYaml } = useCodeGenerator()

const activeTab = ref<'code' | 'mdc' | 'yaml' | 'exportJson' | 'importJson'>('code')
const copiedCode = ref(false)
const copiedMdc = ref(false)
const copiedYaml = ref(false)
const copiedJson = ref(false)
const importInput = ref('')
const importError = ref('')

const generatedCode = computed(() => {
	return generateFullSfcCode(elements.value)
})

const generatedMdc = computed(() => {
	return generateNuxtContentMarkdown(elements.value)
})

const generatedYaml = computed(() => {
	return generateNuxtContentYaml(elements.value)
})

const generatedJson = computed(() => {
	return exportToJSON()
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

const copyYamlToClipboard = async () => {
	try {
		await navigator.clipboard.writeText(generatedYaml.value)
		copiedYaml.value = true
		setTimeout(() => {
			copiedYaml.value = false
		}, 2000)
	} catch (e) {
		console.error('Failed to copy', e)
	}
}

const copyJsonToClipboard = async () => {
	try {
		await navigator.clipboard.writeText(generatedJson.value)
		copiedJson.value = true
		setTimeout(() => {
			copiedJson.value = false
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

const downloadYamlFile = () => {
	const blob = new Blob([generatedYaml.value], { type: 'text/yaml;charset=utf-8' })
	const url = URL.createObjectURL(blob)
	const link = document.createElement('a')
	link.href = url
	link.download = 'index.yml'
	link.click()
	URL.revokeObjectURL(url)
}

const downloadJsonFile = () => {
	const blob = new Blob([generatedJson.value], { type: 'application/json;charset=utf-8' })
	const url = URL.createObjectURL(blob)
	const link = document.createElement('a')
	link.href = url
	link.download = 'nuxtui-schema.json'
	link.click()
	URL.revokeObjectURL(url)
}

const handleImport = () => {
	importError.value = ''
	if (!importInput.value.trim()) {
		importError.value = 'Please paste valid JSON schema text.'
		return
	}
	const success = importFromJSON(importInput.value.trim())
	if (success) {
		importInput.value = ''
		emit('update:modelValue', false)
	} else {
		importError.value = 'Invalid builder JSON schema format. Please verify the structure.'
	}
}
</script>

<template>
	<UModal
		:open="modelValue"
		title="Export & Share Code"
		description="Export ready-to-use Vue 4 SFC pages, Nuxt Content Markdown (.md) or YAML (.yml) templates matching nuxt-ui-templates."
		@update:open="emit('update:modelValue', $event)"
	>
		<template #body>
			<div class="space-y-4">
				<!-- Navigation Tabs -->
				<div class="flex border-b border-neutral-200 dark:border-neutral-800 gap-2 overflow-x-auto pb-1">
					<button
						class="pb-2 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap"
						:class="activeTab === 'code' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
						@click="activeTab = 'code'"
					>
						<UIcon name="lucide:file-code-2" class="w-4 h-4" />
						<span>Vue SFC (.vue)</span>
					</button>

					<button
						class="pb-2 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap"
						:class="activeTab === 'mdc' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
						@click="activeTab = 'mdc'"
					>
						<UIcon name="lucide:file-text" class="w-4 h-4" />
						<span>Nuxt Content (.md)</span>
					</button>

					<button
						class="pb-2 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap"
						:class="activeTab === 'yaml' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
						@click="activeTab = 'yaml'"
					>
						<UIcon name="lucide:file-cog" class="w-4 h-4" />
						<span>Nuxt Content (.yml)</span>
					</button>

					<button
						class="pb-2 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap"
						:class="activeTab === 'exportJson' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
						@click="activeTab = 'exportJson'"
					>
						<UIcon name="lucide:file-json" class="w-4 h-4" />
						<span>JSON Schema</span>
					</button>

					<button
						class="pb-2 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap"
						:class="activeTab === 'importJson' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
						@click="activeTab = 'importJson'"
					>
						<UIcon name="lucide:upload" class="w-4 h-4" />
						<span>Import JSON</span>
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
						<span class="text-xs text-neutral-500">Save as <code>content/index.md</code> for <code>@nuxt/content</code> & MDC</span>
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

				<!-- ================= TAB 3: NUXT CONTENT (.yml / YAML) ================= -->
				<div v-else-if="activeTab === 'yaml'" class="space-y-3">
					<div class="flex items-center justify-between">
						<span class="text-xs text-neutral-500">Save as <code>content/index.yml</code> as used in <code>nuxt-ui-templates/landing</code></span>
						<div class="flex items-center gap-2">
							<UButton
								size="xs"
								color="neutral"
								variant="outline"
								icon="lucide:download"
								label="Download .yml"
								@click="downloadYamlFile"
							/>
							<UButton
								size="xs"
								:color="copiedYaml ? 'success' : 'primary'"
								:icon="copiedYaml ? 'lucide:check' : 'lucide:copy'"
								:label="copiedYaml ? 'Copied!' : 'Copy YAML'"
								@click="copyYamlToClipboard"
							/>
						</div>
					</div>

					<div class="relative rounded-lg bg-neutral-950 text-neutral-100 p-4 font-mono text-xs overflow-x-auto max-h-[380px] border border-neutral-800 select-text leading-relaxed">
						<pre><code>{{ generatedYaml }}</code></pre>
					</div>
				</div>

				<!-- ================= TAB 4: JSON SCHEMA EXPORT ================= -->
				<div v-else-if="activeTab === 'exportJson'" class="space-y-3">
					<div class="flex items-center justify-between">
						<span class="text-xs text-neutral-500">Save complete design structure to restore or share with team</span>
						<div class="flex items-center gap-2">
							<UButton
								size="xs"
								color="neutral"
								variant="outline"
								icon="lucide:download"
								label="Download JSON"
								@click="downloadJsonFile"
							/>
							<UButton
								size="xs"
								:color="copiedJson ? 'success' : 'primary'"
								:icon="copiedJson ? 'lucide:check' : 'lucide:copy'"
								:label="copiedJson ? 'Copied!' : 'Copy JSON'"
								@click="copyJsonToClipboard"
							/>
						</div>
					</div>

					<div class="relative rounded-lg bg-neutral-950 text-neutral-100 p-4 font-mono text-xs overflow-x-auto max-h-[380px] border border-neutral-800 select-text leading-relaxed">
						<pre><code>{{ generatedJson }}</code></pre>
					</div>
				</div>

				<!-- ================= TAB 5: IMPORT JSON ================= -->
				<div v-else-if="activeTab === 'importJson'" class="space-y-3">
					<p class="text-xs text-neutral-500">
						Paste a previously exported JSON schema to load the project onto the canvas.
					</p>

					<UTextarea
						v-model="importInput"
						placeholder="Paste your JSON array here..."
						:rows="10"
						class="font-mono text-xs"
					/>

					<p v-if="importError" class="text-xs text-red-500 font-medium">
						{{ importError }}
					</p>

					<div class="flex justify-end gap-2 pt-2">
						<UButton
							size="sm"
							color="neutral"
							variant="ghost"
							label="Cancel"
							@click="emit('update:modelValue', false)"
						/>
						<UButton
							size="sm"
							color="primary"
							icon="lucide:upload"
							label="Load into Canvas"
							@click="handleImport"
						/>
					</div>
				</div>
			</div>
		</template>
	</UModal>
</template>

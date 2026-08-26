<script setup lang="ts">
import { TEMPLATE_PRESETS } from '~/composables/useTemplates'
import { useBuilder } from '~/composables/useBuilder'

const props = defineProps<{
	modelValue: boolean
}>()

const emit = defineEmits<{
	'update:modelValue': [val: boolean]
}>()

const { loadTemplate } = useBuilder()

const handleSelect = (templateId: string) => {
	loadTemplate(templateId)
	emit('update:modelValue', false)
}
</script>

<template>
	<UModal
		:open="modelValue"
		title="Page & Section Templates"
		description="Jumpstart your website with professionally crafted Nuxt UI templates."
		@update:open="emit('update:modelValue', $event)"
	>
		<template #body>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div
					v-for="tpl in TEMPLATE_PRESETS"
					:key="tpl.id"
					class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-primary-500 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
					@click="handleSelect(tpl.id)"
				>
					<div>
						<div class="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-950/60 flex items-center justify-center text-primary-500 mb-3 group-hover:scale-105 transition-transform">
							<UIcon :name="tpl.thumbnailIcon" class="w-5 h-5" />
						</div>
						<span class="text-[10px] font-semibold uppercase tracking-wider text-primary-500">{{ tpl.category }}</span>
						<h3 class="text-sm font-bold text-neutral-900 dark:text-white mt-1 mb-2">{{ tpl.title }}</h3>
						<p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
							{{ tpl.description }}
						</p>
					</div>

					<UButton
						size="sm"
						color="primary"
						variant="soft"
						label="Use Template"
						icon="lucide:arrow-right"
						trailing
						block
					/>
				</div>
			</div>
		</template>
	</UModal>
</template>

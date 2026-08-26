<script setup lang="ts">
import { useBuilder } from '~/composables/useBuilder'
import { COMPONENT_REGISTRY } from '~/composables/useComponentRegistry'
import type { BuilderElementStyles } from '~/types/builder'

const {
	selectedElement,
	selectedElementId,
	showRightSidebar,
	updateElementProps,
	updateElementStyles,
	removeElement,
	duplicateElement,
	selectElement
} = useBuilder()

const activeTab = ref<'props' | 'styles' | 'advanced'>('props')

const compDef = computed(() => {
	if (!selectedElement.value) return null
	return COMPONENT_REGISTRY.find((c) => c.type === selectedElement.value?.type)
})

const handlePropChange = (key: string, val: any) => {
	if (!selectedElement.value) return
	updateElementProps(selectedElement.value.id, { [key]: val })
}

const handleStyleChange = (key: keyof BuilderElementStyles, val: any) => {
	if (!selectedElement.value) return
	updateElementStyles(selectedElement.value.id, { [key]: val })
}

// Preset style options
const paddingOptions = ['', 'p-2', 'p-4', 'p-6', 'p-8', 'py-4 px-6', 'py-8 px-4', 'py-12 px-6', 'py-16 px-4', 'py-20 px-6']
const marginOptions = ['', 'm-2', 'm-4', 'my-2', 'my-4', 'my-6', 'mb-2', 'mb-4', 'mb-6', 'mx-auto']
const gapOptions = ['', 'gap-2', 'gap-3', 'gap-4', 'gap-6', 'gap-8', 'gap-10']
const radiusOptions = ['', 'rounded-none', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full']
const shadowOptions = ['', 'shadow-none', 'shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl']
const maxWidthOptions = ['', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-6xl', 'max-w-7xl', 'max-w-full']
const widthOptions = ['', 'w-full', 'w-auto', 'w-1/2', 'w-1/3', 'w-2/3', 'w-1/4', 'w-3/4']
const bgOptions = [
	{ label: 'None', value: '' },
	{ label: 'White / Dark', value: 'bg-white dark:bg-neutral-900' },
	{ label: 'Muted Gray', value: 'bg-neutral-50 dark:bg-neutral-900/60' },
	{ label: 'Primary Subtle', value: 'bg-primary-50/50 dark:bg-primary-950/30' },
	{ label: 'Neutral Dark', value: 'bg-neutral-900 text-white' }
]
</script>

<template>
	<aside class="w-80 border-l border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col h-full shrink-0 select-none">
		<!-- Header of Inspector -->
		<div class="p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
			<div v-if="selectedElement" class="flex items-center gap-2 min-w-0">
				<div class="p-1 rounded bg-primary-50 dark:bg-primary-950 text-primary-500">
					<UIcon :name="compDef?.icon || 'lucide:sliders'" class="w-4 h-4" />
				</div>
				<div class="truncate">
					<h3 class="text-xs font-bold text-neutral-900 dark:text-white capitalize truncate">
						{{ compDef?.name || selectedElement.type }}
					</h3>
					<p class="text-[10px] text-neutral-400 font-mono truncate">#{{ selectedElement.id }}</p>
				</div>
			</div>
			<div v-else class="flex items-center gap-2 text-xs font-bold text-neutral-400">
				<UIcon name="lucide:sliders" class="w-4 h-4" />
				<span>Inspector</span>
			</div>

			<!-- Actions: Deselect & Collapse Inspector -->
			<div class="flex items-center gap-1">
				<button
					v-if="selectedElement"
					title="Deselect Element"
					class="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
					@click="selectElement(null)"
				>
					<UIcon name="lucide:x" class="w-3.5 h-3.5" />
				</button>
				<button
					title="Close Inspector"
					class="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
					@click="showRightSidebar = false"
				>
					<UIcon name="lucide:panel-right-close" class="w-3.5 h-3.5" />
				</button>
			</div>
		</div>

		<!-- When No Element is Selected -->
		<div
			v-if="!selectedElement"
			class="flex-1 flex flex-col items-center justify-center p-6 text-center text-neutral-400 space-y-3"
		>
			<div class="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
				<UIcon name="lucide:mouse-pointer" class="w-6 h-6" />
			</div>
			<div>
				<h4 class="text-xs font-semibold text-neutral-700 dark:text-neutral-300">No element selected</h4>
				<p class="text-[11px] text-neutral-400 mt-1">Click any element on the canvas to configure its props and styles.</p>
			</div>
		</div>

		<!-- When Element IS Selected -->
		<div v-else class="flex-1 flex flex-col min-h-0">
			<!-- Sub Tabs -->
			<div class="flex border-b border-neutral-200 dark:border-neutral-800 px-3 pt-2 gap-2 bg-neutral-50/50 dark:bg-neutral-900/50">
				<button
					class="pb-2 text-xs font-medium border-b-2 transition-all"
					:class="activeTab === 'props' ? 'border-primary-500 text-primary-600 dark:text-primary-400 font-semibold' : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-white'"
					@click="activeTab = 'props'"
				>
					Properties
				</button>
				<button
					class="pb-2 text-xs font-medium border-b-2 transition-all"
					:class="activeTab === 'styles' ? 'border-primary-500 text-primary-600 dark:text-primary-400 font-semibold' : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-white'"
					@click="activeTab = 'styles'"
				>
					Layout & Styles
				</button>
				<button
					class="pb-2 text-xs font-medium border-b-2 transition-all"
					:class="activeTab === 'advanced' ? 'border-primary-500 text-primary-600 dark:text-primary-400 font-semibold' : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-white'"
					@click="activeTab = 'advanced'"
				>
					Custom CSS
				</button>
			</div>

			<!-- Tab Content Body -->
			<div class="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
				<!-- ================= TAB 1: PROPS ================= -->
				<div v-if="activeTab === 'props'" class="space-y-3.5">
					<template v-if="compDef?.propsSchema && compDef.propsSchema.length > 0">
						<div
							v-for="prop in compDef.propsSchema"
							:key="prop.name"
							class="space-y-1"
						>
							<div class="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
								<label :for="`prop-${prop.name}`" class="font-medium text-[11px]">{{ prop.label }}</label>
								<span class="text-[10px] text-neutral-400 font-mono">{{ prop.name }}</span>
							</div>

							<!-- String Input -->
							<UInput
								v-if="prop.type === 'string' || prop.type === 'icon'"
								:id="`prop-${prop.name}`"
								:model-value="selectedElement.props[prop.name] ?? prop.default ?? ''"
								size="sm"
								:placeholder="prop.label"
								@update:model-value="handlePropChange(prop.name, $event)"
							/>

							<!-- Number Input -->
							<UInput
								v-else-if="prop.type === 'number'"
								:id="`prop-${prop.name}`"
								type="number"
								:model-value="selectedElement.props[prop.name] ?? prop.default ?? 0"
								size="sm"
								@update:model-value="handlePropChange(prop.name, Number($event))"
							/>

							<!-- Textarea Input -->
							<UTextarea
								v-else-if="prop.type === 'textarea'"
								:id="`prop-${prop.name}`"
								:model-value="selectedElement.props[prop.name] ?? prop.default ?? ''"
								:rows="3"
								size="sm"
								@update:model-value="handlePropChange(prop.name, $event)"
							/>

							<!-- Boolean Switch -->
							<div v-else-if="prop.type === 'boolean'" class="pt-1">
								<USwitch
									:id="`prop-${prop.name}`"
									:model-value="Boolean(selectedElement.props[prop.name] ?? prop.default)"
									size="sm"
									color="primary"
									@update:model-value="handlePropChange(prop.name, $event)"
								/>
							</div>

							<!-- Select Dropdown -->
							<div v-else-if="prop.type === 'select'" class="relative">
								<select
									:id="`prop-${prop.name}`"
									:value="selectedElement.props[prop.name] ?? prop.default ?? ''"
									class="w-full h-8 px-2.5 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
									@change="handlePropChange(prop.name, ($event.target as HTMLSelectElement).value)"
								>
									<option v-for="opt in prop.options" :key="opt" :value="opt">
										{{ opt }}
									</option>
								</select>
							</div>
						</div>
					</template>
					<div v-else class="py-6 text-center text-neutral-400 text-xs">
						No specific component props configured. Check Layout & Styles.
					</div>
				</div>

				<!-- ================= TAB 2: LAYOUT & STYLES ================= -->
				<div v-else-if="activeTab === 'styles'" class="space-y-4">
					<!-- Padding -->
					<div class="space-y-1">
						<label class="font-medium text-[11px] text-neutral-700 dark:text-neutral-300">Padding</label>
						<select
							:value="selectedElement.styles.padding || ''"
							class="w-full h-8 px-2.5 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
							@change="handleStyleChange('padding', ($event.target as HTMLSelectElement).value)"
						>
							<option v-for="opt in paddingOptions" :key="opt" :value="opt">
								{{ opt || 'None (default)' }}
							</option>
						</select>
					</div>

					<!-- Margin -->
					<div class="space-y-1">
						<label class="font-medium text-[11px] text-neutral-700 dark:text-neutral-300">Margin</label>
						<select
							:value="selectedElement.styles.margin || ''"
							class="w-full h-8 px-2.5 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
							@change="handleStyleChange('margin', ($event.target as HTMLSelectElement).value)"
						>
							<option v-for="opt in marginOptions" :key="opt" :value="opt">
								{{ opt || 'None' }}
							</option>
						</select>
					</div>

					<!-- Gap -->
					<div class="space-y-1">
						<label class="font-medium text-[11px] text-neutral-700 dark:text-neutral-300">Gap</label>
						<select
							:value="selectedElement.styles.gap || ''"
							class="w-full h-8 px-2.5 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
							@change="handleStyleChange('gap', ($event.target as HTMLSelectElement).value)"
						>
							<option v-for="opt in gapOptions" :key="opt" :value="opt">
								{{ opt || 'None' }}
							</option>
						</select>
					</div>

					<!-- Max Width -->
					<div class="space-y-1">
						<label class="font-medium text-[11px] text-neutral-700 dark:text-neutral-300">Max Width</label>
						<select
							:value="selectedElement.styles.maxWidth || ''"
							class="w-full h-8 px-2.5 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
							@change="handleStyleChange('maxWidth', ($event.target as HTMLSelectElement).value)"
						>
							<option v-for="opt in maxWidthOptions" :key="opt" :value="opt">
								{{ opt || 'Auto' }}
							</option>
						</select>
					</div>

					<!-- Text Alignment -->
					<div class="space-y-1">
						<label class="font-medium text-[11px] text-neutral-700 dark:text-neutral-300">Text Align</label>
						<div class="grid grid-cols-3 gap-1">
							<button
								type="button"
								class="p-1.5 rounded border text-center flex items-center justify-center transition-all"
								:class="selectedElement.styles.textAlign === 'left' || !selectedElement.styles.textAlign ? 'bg-primary-50 dark:bg-primary-950/50 border-primary-500 text-primary-600 dark:text-primary-400' : 'border-neutral-200 dark:border-neutral-800 text-neutral-500'"
								@click="handleStyleChange('textAlign', 'left')"
							>
								<UIcon name="lucide:align-left" class="w-4 h-4" />
							</button>
							<button
								type="button"
								class="p-1.5 rounded border text-center flex items-center justify-center transition-all"
								:class="selectedElement.styles.textAlign === 'center' ? 'bg-primary-50 dark:bg-primary-950/50 border-primary-500 text-primary-600 dark:text-primary-400' : 'border-neutral-200 dark:border-neutral-800 text-neutral-500'"
								@click="handleStyleChange('textAlign', 'center')"
							>
								<UIcon name="lucide:align-center" class="w-4 h-4" />
							</button>
							<button
								type="button"
								class="p-1.5 rounded border text-center flex items-center justify-center transition-all"
								:class="selectedElement.styles.textAlign === 'right' ? 'bg-primary-50 dark:bg-primary-950/50 border-primary-500 text-primary-600 dark:text-primary-400' : 'border-neutral-200 dark:border-neutral-800 text-neutral-500'"
								@click="handleStyleChange('textAlign', 'right')"
							>
								<UIcon name="lucide:align-right" class="w-4 h-4" />
							</button>
						</div>
					</div>

					<!-- Rounded Border Radius -->
					<div class="space-y-1">
						<label class="font-medium text-[11px] text-neutral-700 dark:text-neutral-300">Border Radius</label>
						<select
							:value="selectedElement.styles.borderRadius || ''"
							class="w-full h-8 px-2.5 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
							@change="handleStyleChange('borderRadius', ($event.target as HTMLSelectElement).value)"
						>
							<option v-for="opt in radiusOptions" :key="opt" :value="opt">
								{{ opt || 'Default' }}
							</option>
						</select>
					</div>

					<!-- Shadow -->
					<div class="space-y-1">
						<label class="font-medium text-[11px] text-neutral-700 dark:text-neutral-300">Box Shadow</label>
						<select
							:value="selectedElement.styles.shadow || ''"
							class="w-full h-8 px-2.5 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
							@change="handleStyleChange('shadow', ($event.target as HTMLSelectElement).value)"
						>
							<option v-for="opt in shadowOptions" :key="opt" :value="opt">
								{{ opt || 'None' }}
							</option>
						</select>
					</div>

					<!-- Background Preset -->
					<div class="space-y-1">
						<label class="font-medium text-[11px] text-neutral-700 dark:text-neutral-300">Background</label>
						<select
							:value="selectedElement.styles.backgroundColor || ''"
							class="w-full h-8 px-2.5 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
							@change="handleStyleChange('backgroundColor', ($event.target as HTMLSelectElement).value)"
						>
							<option v-for="opt in bgOptions" :key="opt.value" :value="opt.value">
								{{ opt.label }}
							</option>
						</select>
					</div>
				</div>

				<!-- ================= TAB 3: ADVANCED / CUSTOM CLASSES ================= -->
				<div v-else-if="activeTab === 'advanced'" class="space-y-3">
					<div class="space-y-1">
						<label class="font-medium text-[11px] text-neutral-700 dark:text-neutral-300">Custom Tailwind Classes</label>
						<UInput
							:model-value="selectedElement.styles.customClass || ''"
							placeholder="e.g. border-2 border-primary-500/20 backdrop-blur-md"
							size="sm"
							@update:model-value="handleStyleChange('customClass', $event)"
						/>
						<p class="text-[10px] text-neutral-400 mt-1">Any valid Tailwind CSS v4 utility classes.</p>
					</div>
				</div>
			</div>

			<!-- Inspector Bottom Action Bar -->
			<div class="p-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900 flex items-center gap-2">
				<UButton
					size="xs"
					color="neutral"
					variant="outline"
					icon="lucide:copy"
					label="Duplicate"
					class="flex-1"
					@click="duplicateElement(selectedElement.id)"
				/>
				<UButton
					size="xs"
					color="error"
					variant="subtle"
					icon="lucide:trash-2"
					label="Delete"
					class="flex-1"
					@click="removeElement(selectedElement.id)"
				/>
			</div>
		</div>
	</aside>
</template>

<script setup lang="ts">
import { COMPONENT_REGISTRY } from '~/composables/useComponentRegistry'
import { TEMPLATE_PRESETS } from '~/composables/useTemplates'
import { useBuilder } from '~/composables/useBuilder'
import type { ComponentCategory, ComponentDefinition } from '~/types/builder'

const emit = defineEmits<{
	openTemplatesModal: []
}>()

const {
	elements,
	selectedElementId,
	showLeftSidebar,
	addElement,
	loadTemplate
} = useBuilder()

const activeTab = ref<'components' | 'layers' | 'templates'>('components')
const searchQuery = ref('')
const selectedCategory = ref<string>('all')

const categories: { id: string; label: string; icon: string }[] = [
	{ id: 'all', label: 'All', icon: 'lucide:layout-grid' },
	{ id: 'page', label: 'Pages & Pro', icon: 'lucide:layout-template' },
	{ id: 'layout', label: 'Layout', icon: 'lucide:box-select' },
	{ id: 'typography', label: 'Type', icon: 'lucide:heading' },
	{ id: 'element', label: 'Elements', icon: 'lucide:mouse-pointer-click' },
	{ id: 'form', label: 'Forms', icon: 'lucide:text-cursor-input' },
	{ id: 'data', label: 'Data', icon: 'lucide:trending-up' },
	{ id: 'compound', label: 'Blocks', icon: 'lucide:layers' }
]

const filteredComponents = computed(() => {
	return COMPONENT_REGISTRY.filter((c) => {
		const matchCat = selectedCategory.value === 'all' || c.category === selectedCategory.value
		const matchQuery = !searchQuery.value || 
			c.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
			c.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
			c.type.toLowerCase().includes(searchQuery.value.toLowerCase())
		return matchCat && matchQuery
	})
})

// Drag Start for component palette
const handleDragStart = (e: DragEvent, comp: ComponentDefinition) => {
	if (e.dataTransfer) {
		e.dataTransfer.setData('application/json', JSON.stringify({
			isNew: true,
			type: comp.type
		}))
		e.dataTransfer.effectAllowed = 'copy'
	}
}

const handleComponentClick = (comp: ComponentDefinition) => {
	// If a container is selected, add inside it, otherwise at root
	addElement(comp.type, selectedElementId.value)
}
</script>

<template>
	<aside class="w-80 border-r border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col h-full shrink-0 select-none">
		<!-- Sidebar Tab Headers -->
		<div class="flex items-center border-b border-neutral-200 dark:border-neutral-800 p-2 gap-1 bg-white dark:bg-neutral-900">
			<button
				class="flex-1 py-1.5 px-2 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
				:class="activeTab === 'components' ? 'bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 shadow-xs' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
				@click="activeTab = 'components'"
			>
				<UIcon name="lucide:puzzle" class="w-3.5 h-3.5" />
				<span>Components</span>
			</button>

			<button
				class="flex-1 py-1.5 px-2 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
				:class="activeTab === 'layers' ? 'bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 shadow-xs' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
				@click="activeTab = 'layers'"
			>
				<UIcon name="lucide:layers" class="w-3.5 h-3.5" />
				<span>Layers</span>
				<UBadge
					v-if="elements.length > 0"
					size="xs"
					color="neutral"
					variant="subtle"
					:label="String(elements.length)"
					class="px-1 py-0 text-[10px]"
				/>
			</button>

			<button
				class="flex-1 py-1.5 px-2 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
				:class="activeTab === 'templates' ? 'bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 shadow-xs' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
				@click="activeTab = 'templates'"
			>
				<UIcon name="lucide:layout-template" class="w-3.5 h-3.5" />
				<span>Presets</span>
			</button>

			<div class="h-4 w-px bg-neutral-200 dark:bg-neutral-800 mx-0.5" />

			<button
				title="Close Sidebar"
				class="p-1 rounded-md text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
				@click="showLeftSidebar = false"
			>
				<UIcon name="lucide:panel-left-close" class="w-3.5 h-3.5" />
			</button>
		</div>

		<!-- ==================== TAB 1: COMPONENTS PALETTE ==================== -->
		<div v-if="activeTab === 'components'" class="flex flex-col flex-1 min-h-0">
			<!-- Search Bar -->
			<div class="p-3 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
				<UInput
					v-model="searchQuery"
					placeholder="Search components..."
					icon="lucide:search"
					size="sm"
					variant="outline"
				/>

				<!-- Category Pills -->
				<div class="flex items-center gap-1 mt-2.5 overflow-x-auto pb-1 no-scrollbar">
					<button
						v-for="cat in categories"
						:key="cat.id"
						class="px-2 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all flex items-center gap-1"
						:class="selectedCategory === cat.id ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'"
						@click="selectedCategory = cat.id"
					>
						<UIcon :name="cat.icon" class="w-3 h-3" />
						<span>{{ cat.label }}</span>
					</button>
				</div>
			</div>

			<!-- Components List -->
			<div class="flex-1 overflow-y-auto p-3 space-y-2">
				<div class="grid grid-cols-2 gap-2">
					<div
						v-for="comp in filteredComponents"
						:key="comp.type"
						draggable="true"
						class="p-2.5 rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 hover:border-primary-500/60 dark:hover:border-primary-500/60 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all flex flex-col items-center text-center group"
						@dragstart="handleDragStart($event, comp)"
						@click="handleComponentClick(comp)"
					>
						<div class="w-8 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-1.5 text-neutral-600 dark:text-neutral-300 group-hover:text-primary-500 group-hover:bg-primary-50 dark:group-hover:bg-primary-950/40 transition-colors">
							<UIcon :name="comp.icon" class="w-4 h-4" />
						</div>
						<span class="text-xs font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-primary-500 truncate w-full">
							{{ comp.name }}
						</span>
						<span class="text-[10px] text-neutral-400 dark:text-neutral-500 truncate w-full mt-0.5">
							{{ comp.category }}
						</span>
					</div>
				</div>

				<div
					v-if="filteredComponents.length === 0"
					class="py-12 text-center text-xs text-neutral-400"
				>
					<UIcon name="lucide:search-x" class="w-8 h-8 mx-auto mb-2 opacity-50" />
					<p>No components match "{{ searchQuery }}"</p>
				</div>
			</div>

			<!-- Bottom Help Hint -->
			<div class="p-2.5 border-t border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-400 bg-white dark:bg-neutral-900 flex items-center gap-1.5">
				<UIcon name="lucide:info" class="w-3.5 h-3.5 text-primary-500 shrink-0" />
				<span>Drag into canvas or click to append</span>
			</div>
		</div>

		<!-- ==================== TAB 2: LAYERS TREE ==================== -->
		<div v-else-if="activeTab === 'layers'" class="flex flex-col flex-1 min-h-0">
			<div class="p-3 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300">
				<span>Component Hierarchy</span>
				<span class="text-[11px] text-neutral-400">{{ elements.length }} root items</span>
			</div>

			<div class="flex-1 overflow-y-auto p-2 space-y-1">
				<template v-if="elements.length > 0">
					<BuilderTreeItem
						v-for="el in elements"
						:key="el.id"
						:element="el"
						:depth="0"
					/>
				</template>
				<div
					v-else
					class="py-12 text-center text-xs text-neutral-400"
				>
					<UIcon name="lucide:layers" class="w-8 h-8 mx-auto mb-2 opacity-40" />
					<p>Canvas is currently empty</p>
				</div>
			</div>
		</div>

		<!-- ==================== TAB 3: TEMPLATES ==================== -->
		<div v-else-if="activeTab === 'templates'" class="flex flex-col flex-1 min-h-0 p-3 space-y-3 overflow-y-auto">
			<div
				v-for="tpl in TEMPLATE_PRESETS"
				:key="tpl.id"
				class="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-primary-500 transition-all flex flex-col justify-between group"
			>
				<div>
					<div class="flex items-center gap-2 mb-1.5">
						<div class="p-1.5 rounded bg-primary-50 dark:bg-primary-950 text-primary-500">
							<UIcon :name="tpl.thumbnailIcon" class="w-4 h-4" />
						</div>
						<h4 class="text-xs font-bold text-neutral-900 dark:text-white">{{ tpl.title }}</h4>
					</div>
					<p class="text-[11px] text-neutral-500 dark:text-neutral-400 mb-3 leading-relaxed">
						{{ tpl.description }}
					</p>
				</div>
				<UButton
					size="xs"
					color="primary"
					variant="subtle"
					label="Load Template"
					icon="lucide:sparkles"
					block
					@click="loadTemplate(tpl.id)"
				/>
			</div>
		</div>
	</aside>
</template>

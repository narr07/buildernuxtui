<script setup lang="ts">
import type { BuilderElement } from '~/types/builder'
import { useBuilder } from '~/composables/useBuilder'
import { COMPONENT_REGISTRY } from '~/composables/useComponentRegistry'

const props = defineProps<{
	element: BuilderElement
	depth?: number
}>()

const {
	selectedElementId,
	hoveredElementId,
	selectElement,
	hoverElement,
	removeElement,
	duplicateElement
} = useBuilder()

const isSelected = computed(() => selectedElementId.value === props.element.id)
const isHovered = computed(() => hoveredElementId.value === props.element.id)
const isExpanded = ref(true)

const reg = computed(() => COMPONENT_REGISTRY.find((c) => c.type === props.element.type))
const hasChildren = computed(() => props.element.children && props.element.children.length > 0)

const handleClick = (e: MouseEvent) => {
	e.stopPropagation()
	selectElement(props.element.id)
}
</script>

<template>
	<div class="select-none text-xs">
		<div
			class="flex items-center justify-between py-1.5 px-2 rounded-md cursor-pointer transition-all group"
			:class="[
				isSelected ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium' : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60',
				isHovered && !isSelected ? 'bg-neutral-100 dark:bg-neutral-800/40' : ''
			]"
			:style="{ paddingLeft: `${(depth || 0) * 14 + 8}px` }"
			@click="handleClick"
			@mouseenter="hoverElement(element.id)"
			@mouseleave="hoverElement(null)"
		>
			<div class="flex items-center gap-1.5 min-w-0 flex-1">
				<button
					v-if="hasChildren"
					class="p-0.5 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-400"
					@click.stop="isExpanded = !isExpanded"
				>
					<UIcon
						:name="isExpanded ? 'lucide:chevron-down' : 'lucide:chevron-right'"
						class="w-3 h-3"
					/>
				</button>
				<span v-else class="w-3 h-3 inline-block" />

				<UIcon
					:name="reg?.icon || 'lucide:box'"
					class="w-3.5 h-3.5 shrink-0"
					:class="isSelected ? 'text-primary-500' : 'text-neutral-400'"
				/>

				<span class="truncate">{{ reg?.name || element.type }}</span>
			</div>

			<!-- Quick Actions in Layer Tree -->
			<div class="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
				<button
					title="Duplicate"
					class="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded text-neutral-400 hover:text-neutral-700 dark:hover:text-white"
					@click.stop="duplicateElement(element.id)"
				>
					<UIcon name="lucide:copy" class="w-3 h-3" />
				</button>
				<button
					title="Delete"
					class="p-1 hover:bg-red-100 dark:hover:bg-red-950/50 rounded text-neutral-400 hover:text-red-500"
					@click.stop="removeElement(element.id)"
				>
					<UIcon name="lucide:trash-2" class="w-3 h-3" />
				</button>
			</div>
		</div>

		<!-- Nested Children -->
		<div v-if="hasChildren && isExpanded" class="relative">
			<div
				class="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 ml-3"
				:style="{ left: `${(depth || 0) * 14 + 12}px` }"
			/>
			<BuilderTreeItem
				v-for="child in element.children"
				:key="child.id"
				:element="child"
				:depth="(depth || 0) + 1"
			/>
		</div>
	</div>
</template>

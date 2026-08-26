<script setup lang="ts">
import type { BuilderElement } from '~/types/builder'
import { useBuilder } from '~/composables/useBuilder'
import { COMPONENT_REGISTRY } from '~/composables/useComponentRegistry'

const props = defineProps<{
	element: BuilderElement
	parentId?: string | null
	index: number
}>()

const {
	selectedElementId,
	hoveredElementId,
	previewMode,
	viewport,
	selectElement,
	hoverElement,
	removeElement,
	duplicateElement,
	moveElement,
	addElement,
	moveElementTo,
	findElementAndParent
} = useBuilder()

const isMobile = computed(() => viewport.value === 'mobile')
const isTablet = computed(() => viewport.value === 'tablet')

const isSelected = computed(() => selectedElementId.value === props.element.id)
const isHovered = computed(() => hoveredElementId.value === props.element.id && !isSelected.value && !previewMode.value)

const isContainer = computed(() => {
	const reg = COMPONENT_REGISTRY.find((c) => c.type === props.element.type)
	return !!reg?.isContainer
})

const isDragOver = ref(false)

const handleClick = (e: MouseEvent) => {
	if (previewMode.value) return
	e.stopPropagation()
	selectElement(props.element.id)
}

const handleMouseEnter = (e: MouseEvent) => {
	if (previewMode.value) return
	e.stopPropagation()
	hoverElement(props.element.id)
}

const handleMouseLeave = () => {
	if (previewMode.value) return
	if (hoveredElementId.value === props.element.id) {
		hoverElement(null)
	}
}

// Drag & Drop handlers
const handleDragStart = (e: DragEvent) => {
	if (previewMode.value) return
	e.stopPropagation()
	if (e.dataTransfer) {
		e.dataTransfer.setData('application/json', JSON.stringify({
			isExisting: true,
			id: props.element.id,
			parentId: props.parentId,
			index: props.index
		}))
		e.dataTransfer.effectAllowed = 'move'
	}
}

const handleDragOver = (e: DragEvent) => {
	if (previewMode.value) return
	e.preventDefault()
	e.stopPropagation()
	isDragOver.value = true
}

const handleDragLeave = (e: DragEvent) => {
	e.stopPropagation()
	isDragOver.value = false
}

const handleDrop = (e: DragEvent) => {
	if (previewMode.value) return
	e.preventDefault()
	e.stopPropagation()
	isDragOver.value = false

	const rawData = e.dataTransfer?.getData('application/json')
	if (!rawData) return

	try {
		const payload = JSON.parse(rawData)
		if (payload.isExisting) {
			// Existing element moved
			if (payload.id === props.element.id) return
			if (isContainer.value) {
				moveElementTo(payload.id, props.element.id, props.element.children?.length || 0)
			} else {
				moveElementTo(payload.id, props.parentId || null, props.index + 1)
			}
		} else if (payload.isNew && payload.type) {
			// New element added from sidebar
			if (isContainer.value) {
				addElement(payload.type, props.element.id)
			} else {
				addElement(payload.type, props.parentId || null, props.index + 1)
			}
		}
	} catch (err) {
		console.error('Drop error', err)
	}
}

const selectParent = (e: MouseEvent) => {
	e.stopPropagation()
	if (props.parentId) {
		selectElement(props.parentId)
	}
}

const insertBelow = (type: string = 'container') => {
	addElement(type, props.parentId || null, props.index + 1)
}

const styleClasses = computed(() => {
	const s = props.element.styles || {}
	const classes: string[] = []

	if (s.display === 'flex') {
		classes.push('flex')
		if (s.flexDirection === 'col') classes.push('flex-col')
		if (s.flexDirection === 'col-reverse') classes.push('flex-col-reverse')
		if (s.flexDirection === 'row-reverse') classes.push('flex-row-reverse')
		if (s.alignItems === 'center') classes.push('items-center')
		if (s.alignItems === 'start') classes.push('items-start')
		if (s.alignItems === 'end') classes.push('items-end')
		if (s.justifyContent === 'center') classes.push('justify-center')
		if (s.justifyContent === 'between') classes.push('justify-between')
		if (s.justifyContent === 'start') classes.push('justify-start')
		if (s.justifyContent === 'end') classes.push('justify-end')
	} else if (s.display === 'grid') {
		classes.push('grid')
		if (s.gridCols) classes.push(s.gridCols)
	}

	if (s.gap) classes.push(s.gap)
	if (s.padding) classes.push(s.padding)
	if (s.margin) classes.push(s.margin)
	if (s.width) classes.push(s.width)
	if (s.maxWidth) classes.push(s.maxWidth)
	if (s.textAlign === 'center') classes.push('text-center')
	if (s.textAlign === 'right') classes.push('text-right')
	if (s.borderRadius) classes.push(s.borderRadius)
	if (s.shadow) classes.push(s.shadow)
	if (s.backgroundColor) classes.push(s.backgroundColor)
	if (s.customClass) classes.push(s.customClass)

	return classes.join(' ')
})

const splitFeatures = computed(() => {
	if (!props.element.props.features) return []
	return String(props.element.props.features).split(',').map((f) => f.trim()).filter(Boolean)
})
</script>

<template>
	<div
		:id="`rendered-${element.id}`"
		class="relative transition-all duration-150 group"
		:class="[
			!previewMode ? 'cursor-pointer' : '',
			isSelected && !previewMode ? 'builder-element-selected ring-2 ring-primary ring-offset-2 ring-offset-neutral-900 rounded-md z-10' : '',
			isHovered ? 'builder-element-hover rounded-md' : '',
			isDragOver ? 'builder-drop-target' : ''
		]"
		:draggable="!previewMode"
		@click="handleClick"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
		@dragstart="handleDragStart"
		@dragover="handleDragOver"
		@dragleave="handleDragLeave"
		@drop="handleDrop"
	>
		<!-- Floating Element Toolbar (When selected in edit mode) -->
		<div
			v-if="isSelected && !previewMode"
			class="absolute -top-9 left-0 flex items-center gap-1 bg-neutral-900 text-white px-2 py-1 rounded-md shadow-xl text-xs z-30 border border-neutral-700 select-none animate-in fade-in zoom-in-95 duration-100"
			@click.stop
		>
			<span class="font-semibold text-primary-400 capitalize mr-1 flex items-center gap-1">
				<UIcon name="lucide:layers" class="w-3.5 h-3.5" />
				{{ element.type }}
			</span>

			<button
				v-if="parentId"
				title="Select Parent"
				class="p-1 hover:bg-neutral-800 rounded text-neutral-300 hover:text-white"
				@click="selectParent"
			>
				<UIcon name="lucide:corner-left-up" class="w-3.5 h-3.5" />
			</button>

			<div class="h-3 w-px bg-neutral-700 mx-0.5" />

			<button
				title="Add section below"
				class="p-1 px-1.5 hover:bg-neutral-800 rounded text-primary-400 hover:text-primary-300 flex items-center gap-1 font-medium text-[11px]"
				@click="insertBelow('container')"
			>
				<UIcon name="lucide:plus" class="w-3.5 h-3.5" />
				<span>Add Below</span>
			</button>

			<div class="h-3 w-px bg-neutral-700 mx-0.5" />

			<button
				title="Move Up"
				class="p-1 hover:bg-neutral-800 rounded text-neutral-300 hover:text-white"
				@click="moveElement(element.id, 'up')"
			>
				<UIcon name="lucide:chevron-up" class="w-3.5 h-3.5" />
			</button>

			<button
				title="Move Down"
				class="p-1 hover:bg-neutral-800 rounded text-neutral-300 hover:text-white"
				@click="moveElement(element.id, 'down')"
			>
				<UIcon name="lucide:chevron-down" class="w-3.5 h-3.5" />
			</button>

			<button
				title="Duplicate"
				class="p-1 hover:bg-neutral-800 rounded text-neutral-300 hover:text-white"
				@click="duplicateElement(element.id)"
			>
				<UIcon name="lucide:copy" class="w-3.5 h-3.5" />
			</button>

			<button
				title="Delete Element"
				class="p-1 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded"
				@click="removeElement(element.id)"
			>
				<UIcon name="lucide:trash-2" class="w-3.5 h-3.5" />
			</button>
		</div>

		<!-- ==================== RENDER COMPONENT TYPES ==================== -->

		<!-- CONTAINER -->
		<div
			v-if="element.type === 'container'"
			:class="['w-full transition-all min-h-[60px]', styleClasses]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-6 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-1 min-h-[90px] bg-neutral-50/50 dark:bg-neutral-900/30"
			>
				<UIcon name="lucide:plus-circle" class="w-5 h-5 text-neutral-400" />
				<span>Drop components into this Container</span>
			</div>
		</div>

		<!-- GRID -->
		<div
			v-else-if="element.type === 'grid'"
			:class="['transition-all min-h-[60px]', styleClasses]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="col-span-full border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-6 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-1 min-h-[90px]"
			>
				<UIcon name="lucide:grid" class="w-5 h-5 text-neutral-400" />
				<span>Drop components into this Grid</span>
			</div>
		</div>

		<!-- FLEX -->
		<div
			v-else-if="element.type === 'flex'"
			:class="['transition-all min-h-[50px]', styleClasses]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="flex-1 border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-4 text-center text-xs text-neutral-400"
			>
				<span>Drop components into Flex</span>
			</div>
		</div>

		<!-- UCARD -->
		<UCard
			v-else-if="element.type === 'card'"
			:variant="element.props.variant || 'outline'"
			:class="styleClasses"
		>
			<template v-if="element.props.showHeader" #header>
				<h3 class="font-semibold text-lg">{{ element.props.headerText || 'Card Title' }}</h3>
			</template>

			<div class="space-y-4">
				<template v-if="element.children && element.children.length > 0">
					<BuilderComponentRenderer
						v-for="(child, cIdx) in element.children"
						:key="child.id"
						:element="child"
						:parent-id="element.id"
						:index="cIdx"
					/>
				</template>
				<div
					v-else-if="!previewMode"
					class="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded p-4 text-center text-xs text-neutral-400"
				>
					<span>Drop elements into Card</span>
				</div>
			</div>

			<template v-if="element.props.showFooter && element.props.footerText" #footer>
				<p class="text-xs text-neutral-400">{{ element.props.footerText }}</p>
			</template>
		</UCard>

		<!-- SEPARATOR -->
		<USeparator
			v-else-if="element.type === 'separator'"
			:label="element.props.label"
			:icon="element.props.icon"
			:color="element.props.color || 'neutral'"
			:type="element.props.type || 'solid'"
			:class="styleClasses"
		/>

		<!-- HEADING -->
		<component
			:is="element.props.level || 'h2'"
			v-else-if="element.type === 'heading'"
			:class="[
				element.props.level === 'h1' ? 'text-4xl md:text-5xl font-extrabold tracking-tight' : '',
				element.props.level === 'h2' ? 'text-3xl font-bold tracking-tight' : '',
				element.props.level === 'h3' ? 'text-2xl font-semibold' : '',
				!element.props.level || element.props.level === 'h4' ? 'text-xl font-medium' : '',
				element.props.gradient ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-600' : 'text-neutral-900 dark:text-white',
				styleClasses
			]"
		>
			{{ element.props.text || 'Heading Title' }}
		</component>

		<!-- PARAGRAPH -->
		<p
			v-else-if="element.type === 'paragraph'"
			:class="[
				element.props.size || 'text-base',
				element.props.color === 'muted' ? 'text-neutral-500 dark:text-neutral-400' : '',
				element.props.color === 'primary' ? 'text-primary-600 dark:text-primary-400' : '',
				!element.props.color || element.props.color === 'default' ? 'text-neutral-700 dark:text-neutral-200' : '',
				'leading-relaxed break-words',
				styleClasses
			]"
		>
			{{ element.props.text || 'Paragraph text content' }}
		</p>

		<!-- LEAD -->
		<p
			v-else-if="element.type === 'lead'"
			:class="[
				'text-xl font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed break-words',
				styleClasses
			]"
		>
			{{ element.props.text || 'Lead text introduction content.' }}
		</p>

		<!-- BLOCKQUOTE -->
		<blockquote
			v-else-if="element.type === 'blockquote'"
			:class="[
				'relative pl-5 py-2 border-l-4 border-primary-500 text-left my-4 italic text-neutral-700 dark:text-neutral-300 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-r-lg',
				styleClasses
			]"
		>
			<p class="text-base mb-2">"{{ element.props.quote || 'Quote text' }}"</p>
			<footer v-if="element.props.author" class="text-xs font-semibold not-italic text-neutral-500 dark:text-neutral-400">
				— {{ element.props.author }} <span v-if="element.props.role" class="opacity-75">({{ element.props.role }})</span>
			</footer>
		</blockquote>

		<!-- LIST -->
		<div
			v-else-if="element.type === 'list'"
			:class="['text-left my-3', styleClasses]"
		>
			<ul v-if="element.props.type === 'unordered'" class="space-y-2 list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300">
				<li v-for="(item, iIdx) in (element.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)" :key="iIdx" class="break-words">
					{{ item }}
				</li>
			</ul>
			<ol v-else-if="element.props.type === 'ordered'" class="space-y-2 list-decimal list-inside text-sm text-neutral-700 dark:text-neutral-300">
				<li v-for="(item, iIdx) in (element.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)" :key="iIdx" class="break-words">
					{{ item }}
				</li>
			</ol>
			<ul v-else class="space-y-2.5 text-sm text-neutral-700 dark:text-neutral-300">
				<li v-for="(item, iIdx) in (element.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)" :key="iIdx" class="flex items-start gap-2 break-words">
					<UIcon :name="element.props.icon || 'lucide:check-circle-2'" class="w-4 h-4 text-primary shrink-0 mt-0.5" />
					<span>{{ item }}</span>
				</li>
			</ul>
		</div>

		<!-- TABLE -->
		<div
			v-else-if="element.type === 'table'"
			:class="['border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-x-auto shadow-sm my-4 text-left text-xs max-w-full', styleClasses]"
		>
			<table class="w-full">
				<caption v-if="element.props.caption" class="p-2 text-[11px] text-neutral-400 text-left bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 font-medium">
					{{ element.props.caption }}
				</caption>
				<thead class="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
					<tr>
						<th class="p-3 font-semibold">Prop</th>
						<th class="p-3 font-semibold">Type</th>
						<th class="p-3 font-semibold">Default</th>
						<th class="p-3 font-semibold">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-neutral-200 dark:divide-neutral-800 font-mono text-[11px]">
					<tr>
						<td class="p-3 font-bold text-primary">color</td>
						<td class="p-3 text-neutral-500">string</td>
						<td class="p-3 text-neutral-400">'primary'</td>
						<td class="p-3 font-sans text-neutral-600 dark:text-neutral-300">Color scheme identifier.</td>
					</tr>
					<tr>
						<td class="p-3 font-bold text-primary">size</td>
						<td class="p-3 text-neutral-500">'sm' | 'md' | 'lg'</td>
						<td class="p-3 text-neutral-400">'md'</td>
						<td class="p-3 font-sans text-neutral-600 dark:text-neutral-300">Size variant for the component.</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- IMAGE & EMBED -->
		<figure
			v-else-if="element.type === 'image'"
			:class="['my-4 text-left max-w-full', styleClasses]"
		>
			<div class="rounded-xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800">
				<img :src="element.props.src" :alt="element.props.alt" class="w-full h-auto object-cover max-h-[400px]" />
			</div>
			<figcaption v-if="element.props.caption" class="text-xs text-neutral-500 mt-2 text-center italic">
				{{ element.props.caption }}
			</figcaption>
		</figure>

		<!-- INLINE CODE -->
		<code
			v-else-if="element.type === 'code'"
			:class="['px-1.5 py-0.5 rounded font-mono text-xs bg-neutral-100 dark:bg-neutral-800 text-primary-600 dark:text-primary-400 border border-neutral-200 dark:border-neutral-700/60 inline-block', styleClasses]"
		>
			{{ element.props.code || 'code' }}
		</code>

		<!-- CODE BLOCK -->
		<div
			v-else-if="element.type === 'code-block'"
			:class="['rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 text-neutral-100 text-left font-mono text-xs my-4 shadow-xl max-w-full', styleClasses]"
		>
			<div class="h-8 px-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 select-none">
				<span class="flex items-center gap-1.5">
					<UIcon name="lucide:file-code" class="w-3.5 h-3.5 text-primary" />
					<span>{{ element.props.filename || element.props.language || 'code' }}</span>
				</span>
				<UIcon name="lucide:copy" class="w-3.5 h-3.5 hover:text-white cursor-pointer" />
			</div>
			<pre class="p-4 overflow-x-auto select-text leading-relaxed"><code>{{ element.props.code || '' }}</code></pre>
		</div>

		<!-- CODE GROUP -->
		<div
			v-else-if="element.type === 'code-group'"
			:class="['rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 text-neutral-100 text-left font-mono text-xs my-4 shadow-xl max-w-full', styleClasses]"
		>
			<div class="h-8 px-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-[11px] select-none">
				<div class="flex items-center gap-2">
					<span class="px-2 py-0.5 rounded bg-primary/20 text-primary font-semibold">pnpm</span>
					<span class="px-2 py-0.5 text-neutral-400">npm</span>
					<span class="px-2 py-0.5 text-neutral-400">bun</span>
				</div>
				<UIcon name="lucide:copy" class="w-3.5 h-3.5 text-neutral-400 hover:text-white cursor-pointer" />
			</div>
			<pre class="p-4 overflow-x-auto select-text"><code>{{ element.props.pnpm || element.props.npm || 'pnpm add @nuxt/ui' }}</code></pre>
		</div>

		<!-- CODE COLLAPSE -->
		<div
			v-else-if="element.type === 'code-collapse'"
			:class="['rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 text-left font-mono text-xs my-4 shadow-xl overflow-hidden max-w-full', styleClasses]"
		>
			<div class="h-9 px-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-300 cursor-pointer select-none">
				<span class="flex items-center gap-2">
					<UIcon name="lucide:chevron-down" class="w-4 h-4 text-primary" />
					<span class="font-sans font-medium">{{ element.props.title || 'View Code' }}</span>
				</span>
				<UIcon name="lucide:copy" class="w-3.5 h-3.5 text-neutral-400 hover:text-white" />
			</div>
			<pre class="p-4 overflow-x-auto select-text leading-relaxed"><code>{{ element.props.code || '' }}</code></pre>
		</div>

		<!-- CODE PREVIEW -->
		<div
			v-else-if="element.type === 'code-preview'"
			:class="['rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden text-left my-4 shadow-sm max-w-full', styleClasses]"
		>
			<div class="p-6 flex items-center justify-center bg-neutral-50/60 dark:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
				<UButton color="primary" icon="lucide:sparkles" label="Interactive Action" />
			</div>
			<div class="p-3 bg-neutral-950 text-neutral-100 font-mono text-xs flex items-center justify-between">
				<span>{{ element.props.code || '<UButton color="primary" label="Action" />' }}</span>
				<UIcon name="lucide:copy" class="w-3.5 h-3.5 text-neutral-400 hover:text-white cursor-pointer" />
			</div>
		</div>

		<!-- CODE TREE -->
		<div
			v-else-if="element.type === 'code-tree'"
			:class="['rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-4 text-left font-mono text-xs my-4 shadow-sm max-w-full', styleClasses]"
		>
			<div class="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-800 font-sans font-bold text-neutral-800 dark:text-neutral-200">
				<UIcon name="lucide:folder-tree" class="w-4 h-4 text-primary" />
				<span>{{ element.props.title || 'Project Structure' }}</span>
			</div>
			<pre class="overflow-x-auto text-neutral-700 dark:text-neutral-300 leading-relaxed select-text"><code>{{ element.props.tree || 'app/\n├── pages/\n└── app.vue' }}</code></pre>
		</div>

		<!-- PROMPT -->
		<div
			v-else-if="element.type === 'prompt'"
			:class="['flex items-center justify-between gap-3 p-3.5 rounded-xl bg-neutral-950 text-neutral-100 font-mono text-xs border border-neutral-800 my-3 shadow-lg max-w-full', styleClasses]"
		>
			<div class="flex items-center gap-2 overflow-x-auto">
				<span class="text-primary font-bold">$</span>
				<span class="select-text whitespace-nowrap">{{ element.props.command || 'npx nuxi init' }}</span>
			</div>
			<UIcon name="lucide:copy" class="w-4 h-4 text-neutral-400 hover:text-white cursor-pointer shrink-0" />
		</div>

		<!-- CALLOUT -->
		<div
			v-else-if="element.type === 'callout'"
			:class="[
				'p-4 rounded-xl border text-left my-4 flex items-start gap-3 shadow-sm max-w-full',
				element.props.type === 'tip' ? 'bg-primary-50/50 dark:bg-primary-950/30 border-primary-500/30 text-primary-950 dark:text-primary-100' :
				element.props.type === 'warning' ? 'bg-amber-50/50 dark:bg-amber-950/30 border-amber-500/30 text-amber-950 dark:text-amber-100' :
				element.props.type === 'caution' ? 'bg-red-50/50 dark:bg-red-950/30 border-red-500/30 text-red-950 dark:text-red-100' :
				'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white',
				styleClasses
			]"
		>
			<UIcon :name="element.props.icon || 'lucide:info'" class="w-5 h-5 shrink-0 mt-0.5 text-primary" />
			<div class="flex-1">
				<h4 class="text-sm font-bold mb-1 break-words">{{ element.props.title || 'Note' }}</h4>
				<p class="text-xs opacity-90 leading-relaxed break-words">{{ element.props.description || '' }}</p>
			</div>
		</div>

		<!-- CARD GROUP CONTAINER -->
		<div
			v-else-if="element.type === 'card-group'"
			:class="[
				'grid gap-4 my-4 max-w-full',
				element.props.columns === '3' ? 'grid-cols-1 md:grid-cols-3' :
				element.props.columns === '4' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2',
				styleClasses
			]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="col-span-full border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-6 text-center text-xs text-neutral-400"
			>
				<span>CardGroup: Drop cards inside</span>
			</div>
		</div>

		<!-- COLLAPSIBLE CONTAINER -->
		<div
			v-else-if="element.type === 'collapsible'"
			:class="['border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden my-3 text-left max-w-full', styleClasses]"
		>
			<div class="p-3.5 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-between font-medium text-xs text-neutral-900 dark:text-white cursor-pointer select-none">
				<span>{{ element.props.title || 'Expand details' }}</span>
				<UIcon name="lucide:chevron-down" class="w-4 h-4 text-neutral-400" />
			</div>
			<div class="p-4 space-y-3 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
				<template v-if="element.children && element.children.length > 0">
					<BuilderComponentRenderer
						v-for="(child, cIdx) in element.children"
						:key="child.id"
						:element="child"
						:parent-id="element.id"
						:index="cIdx"
					/>
				</template>
				<p v-else class="text-xs text-neutral-500">Collapsible content panel.</p>
			</div>
		</div>

		<!-- FIELD -->
		<div
			v-else-if="element.type === 'field'"
			:class="['p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 text-left my-2 text-xs max-w-full bg-white dark:bg-neutral-900', styleClasses]"
		>
			<div class="flex items-center gap-2 mb-1">
				<span class="font-mono font-bold text-primary">{{ element.props.name || 'prop' }}</span>
				<span class="font-mono text-[10px] text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">{{ element.props.type || 'string' }}</span>
				<UBadge v-if="element.props.required" color="error" variant="subtle" size="xs" label="Required" />
			</div>
			<p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">{{ element.props.description || '' }}</p>
		</div>

		<!-- FIELD GROUP CONTAINER -->
		<div
			v-else-if="element.type === 'field-group'"
			:class="['border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 text-left my-4 space-y-3 bg-neutral-50/50 dark:bg-neutral-900/30 max-w-full', styleClasses]"
		>
			<h4 class="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2">{{ element.props.title || 'Properties' }}</h4>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="border border-dashed border-neutral-300 dark:border-neutral-700 rounded p-4 text-center text-xs text-neutral-400"
			>
				<span>FieldGroup: Drop field elements inside</span>
			</div>
		</div>

		<!-- STEPS -->
		<div
			v-else-if="element.type === 'steps'"
			:class="['text-left my-4 space-y-4 max-w-full', styleClasses]"
		>
			<div
				v-for="(step, sIdx) in (element.props.steps || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
				:key="sIdx"
				class="flex items-start gap-3.5"
			>
				<div class="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ring-2 ring-primary-500/20">
					{{ sIdx + 1 }}
				</div>
				<div class="flex-1">
					<p class="text-sm font-medium text-neutral-800 dark:text-neutral-200 break-words">{{ step }}</p>
				</div>
			</div>
		</div>

		<!-- TABS CONTAINER -->
		<div
			v-else-if="element.type === 'tabs'"
			:class="['border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden my-4 text-left max-w-full', styleClasses]"
		>
			<div class="flex border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 pt-2 gap-4 text-xs font-medium select-none">
				<span class="pb-2 border-b-2 border-primary text-primary font-semibold cursor-pointer">{{ element.props.tab1 || 'Overview' }}</span>
				<span class="pb-2 text-neutral-400 hover:text-neutral-700 cursor-pointer">{{ element.props.tab2 || 'Usage' }}</span>
				<span v-if="element.props.tab3" class="pb-2 text-neutral-400 hover:text-neutral-700 cursor-pointer">{{ element.props.tab3 }}</span>
			</div>
			<div class="p-4 space-y-3 bg-white dark:bg-neutral-950">
				<template v-if="element.children && element.children.length > 0">
					<BuilderComponentRenderer
						v-for="(child, cIdx) in element.children"
						:key="child.id"
						:element="child"
						:parent-id="element.id"
						:index="cIdx"
					/>
				</template>
				<p v-else class="text-xs text-neutral-500">Active tab content area.</p>
			</div>
		</div>

		<!-- ACCORDION -->
		<div
			v-else-if="element.type === 'accordion'"
			:class="['border border-neutral-200 dark:border-neutral-800 rounded-xl divide-y divide-neutral-200 dark:divide-neutral-800 my-4 text-left overflow-hidden max-w-full', styleClasses]"
		>
			<div
				v-for="(item, aIdx) in (element.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
				:key="aIdx"
				class="p-4 bg-white dark:bg-neutral-950"
			>
				<div class="flex items-center justify-between font-bold text-xs text-neutral-900 dark:text-white cursor-pointer mb-1.5">
					<span>{{ item.split(':')[0] || item }}</span>
					<UIcon name="lucide:chevron-down" class="w-4 h-4 text-neutral-400" />
				</div>
				<p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{{ item.split(':')[1] || 'Expandable panel description content.' }}</p>
			</div>
		</div>

		<!-- UKBD -->
		<UKbd
			v-else-if="element.type === 'kbd'"
			:size="element.props.size || 'md'"
			:class="styleClasses"
		>
			{{ element.props.value || '⌘K' }}
		</UKbd>

		<!-- UBUTTON -->
		<UButton
			v-else-if="element.type === 'button'"
			:label="element.props.label"
			:color="element.props.color || 'primary'"
			:variant="element.props.variant || 'solid'"
			:size="element.props.size || 'md'"
			:icon="element.props.icon"
			:trailing="element.props.trailing"
			:block="element.props.block"
			:disabled="element.props.disabled"
			:class="styleClasses"
		/>

		<!-- UBADGE -->
		<UBadge
			v-else-if="element.type === 'badge'"
			:label="element.props.label"
			:color="element.props.color || 'primary'"
			:variant="element.props.variant || 'subtle'"
			:size="element.props.size || 'md'"
			:icon="element.props.icon"
			:class="styleClasses"
		/>

		<!-- UAVATAR -->
		<UAvatar
			v-else-if="element.type === 'avatar'"
			:src="element.props.src"
			:alt="element.props.alt"
			:text="element.props.text"
			:size="element.props.size || 'md'"
			:chip="element.props.chip ? (element.props.chipColor || 'success') : undefined"
			:class="styleClasses"
		/>

		<!-- UAVATAR GROUP -->
		<div
			v-else-if="element.type === 'avatar-group'"
			:class="['flex items-center -space-x-2 overflow-hidden py-1', styleClasses]"
		>
			<UAvatar
				v-for="(url, aIdx) in (element.props.avatars || '').split(',').map((s: string) => s.trim()).filter(Boolean).slice(0, element.props.max || 3)"
				:key="aIdx"
				:src="url"
				:size="element.props.size || 'md'"
				class="ring-2 ring-white dark:ring-neutral-900"
			/>
			<div
				v-if="(element.props.avatars || '').split(',').length > (element.props.max || 3)"
				class="flex items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-bold text-xs ring-2 ring-white dark:ring-neutral-900 h-8 w-8"
			>
				+{{ (element.props.avatars || '').split(',').length - (element.props.max || 3) }}
			</div>
		</div>

		<!-- UBANNER -->
		<div
			v-else-if="element.type === 'banner'"
			:class="[
				'px-4 py-2.5 rounded-xl border flex items-center justify-between text-xs font-medium shadow-sm my-2 max-w-full',
				element.props.color === 'primary' ? 'bg-primary-500/10 border-primary-500/30 text-primary-900 dark:text-primary-200' :
				element.props.color === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-900 dark:text-green-200' :
				'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200',
				styleClasses
			]"
		>
			<div class="flex items-center gap-2 overflow-hidden">
				<UIcon :name="element.props.icon || 'lucide:sparkles'" class="w-4 h-4 shrink-0 text-primary" />
				<span class="truncate">{{ element.props.title || 'Announcement banner message' }}</span>
			</div>
			<button v-if="element.props.close" class="p-1 hover:opacity-75 rounded shrink-0">
				<UIcon name="lucide:x" class="w-3.5 h-3.5" />
			</button>
		</div>

		<!-- UCALENDAR -->
		<div
			v-else-if="element.type === 'calendar'"
			:class="['p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs shadow-md max-w-full my-3 inline-block', styleClasses]"
		>
			<div class="flex items-center justify-between font-bold mb-3">
				<span class="text-neutral-900 dark:text-white">August 2026</span>
				<div class="flex items-center gap-1 text-neutral-400">
					<UIcon name="lucide:chevron-left" class="w-4 h-4 cursor-pointer hover:text-white" />
					<UIcon name="lucide:chevron-right" class="w-4 h-4 cursor-pointer hover:text-white" />
				</div>
			</div>
			<div class="grid grid-cols-7 gap-1 text-center font-medium text-neutral-400 mb-1">
				<span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
			</div>
			<div class="grid grid-cols-7 gap-1 text-center font-mono">
				<span class="p-1.5 text-neutral-400">28</span><span class="p-1.5 text-neutral-400">29</span><span class="p-1.5 text-neutral-400">30</span><span class="p-1.5 text-neutral-400">31</span>
				<span class="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">1</span>
				<span class="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">2</span>
				<span class="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">3</span>
				<span class="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">4</span>
				<span class="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">5</span>
				<span class="p-1.5 rounded-full bg-primary text-white font-bold">6</span>
				<span class="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">7</span>
				<span class="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">8</span>
			</div>
		</div>

		<!-- UCHIP -->
		<UChip
			v-else-if="element.type === 'chip'"
			:text="element.props.text"
			:color="element.props.color || 'error'"
			:position="element.props.position || 'top-right'"
			:class="styleClasses"
		>
			<UButton icon="lucide:bell" color="neutral" variant="subtle" />
		</UChip>

		<!-- UICON -->
		<UIcon
			v-else-if="element.type === 'icon'"
			:name="element.props.name || 'lucide:sparkles'"
			:class="[element.props.size || 'h-8 w-8', element.props.color || 'text-primary', styleClasses]"
		/>

		<!-- UPROGRESS GROUP -->
		<div
			v-else-if="element.type === 'progress-group'"
			:class="['space-y-3 w-full my-3 text-left', styleClasses]"
		>
			<div
				v-for="(it, pIdx) in (element.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
				:key="pIdx"
				class="space-y-1"
			>
				<div class="flex justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300">
					<span>{{ it.split(':')[0] || it }}</span>
					<span class="font-mono text-primary">{{ it.split(':')[1] || '50' }}%</span>
				</div>
				<UProgress :model-value="Number(it.split(':')[1] || 50)" :color="element.props.color || 'primary'" size="sm" />
			</div>
		</div>

		<!-- USKELETON -->
		<div
			v-else-if="element.type === 'skeleton'"
			:class="['my-2 max-w-full', styleClasses]"
		>
			<div v-if="element.props.shape === 'circle'" class="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
			<div v-else-if="element.props.shape === 'avatar-text'" class="flex items-center gap-3">
				<div class="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse shrink-0" />
				<div class="space-y-2 flex-1">
					<div class="h-3.5 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3 animate-pulse" />
					<div class="h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2 animate-pulse" />
				</div>
			</div>
			<div v-else :class="[element.props.height || 'h-6', element.props.width || 'w-full', 'rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse']" />
		</div>

		<!-- UFORM CONTAINER -->
		<form
			v-else-if="element.type === 'form'"
			:class="['p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 shadow-sm text-left my-4 space-y-4 max-w-full', styleClasses]"
			@submit.prevent
		>
			<div v-if="element.props.title" class="border-b border-neutral-200 dark:border-neutral-800 pb-3">
				<h3 class="font-bold text-sm text-neutral-900 dark:text-white">{{ element.props.title }}</h3>
			</div>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-6 text-center text-xs text-neutral-400"
			>
				<span>Drop form inputs & fields here</span>
			</div>
			<div class="pt-2">
				<UButton type="button" :label="element.props.submitText || 'Save Changes'" color="primary" block />
			</div>
		</form>

		<!-- UFORM FIELD CONTAINER -->
		<div
			v-else-if="element.type === 'form-field'"
			:class="['space-y-1.5 text-left my-2.5 max-w-full', styleClasses]"
		>
			<div class="flex items-center justify-between">
				<label class="font-medium text-xs text-neutral-800 dark:text-neutral-200">
					{{ element.props.label || 'Field Label' }}
					<span v-if="element.props.required" class="text-red-500 font-bold ml-0.5">*</span>
				</label>
			</div>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<UInput v-else placeholder="Enter text..." color="primary" />
			<p v-if="element.props.description" class="text-[11px] text-neutral-500 dark:text-neutral-400">{{ element.props.description }}</p>
			<p v-if="element.props.error" class="text-[11px] text-red-500 font-medium">{{ element.props.error }}</p>
		</div>

		<!-- UINPUT -->
		<UInput
			v-else-if="element.type === 'input'"
			:placeholder="element.props.placeholder"
			:icon="element.props.icon"
			:type="element.props.type || 'text'"
			:color="element.props.color || 'primary'"
			:variant="element.props.variant || 'outline'"
			:size="element.props.size || 'md'"
			:class="styleClasses"
		/>

		<!-- UINPUT NUMBER -->
		<div
			v-else-if="element.type === 'input-number'"
			:class="['flex items-center border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-900 w-36 my-2', styleClasses]"
		>
			<button class="px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 text-xs font-bold">-</button>
			<span class="flex-1 text-center font-mono text-xs font-bold text-neutral-800 dark:text-white">{{ element.props.value || 1 }}</span>
			<button class="px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 text-xs font-bold">+</button>
		</div>

		<!-- UINPUT DATE -->
		<UInput
			v-else-if="element.type === 'input-date'"
			:placeholder="element.props.placeholder || 'Select date...'"
			:icon="element.props.icon || 'lucide:calendar'"
			:color="element.props.color || 'primary'"
			:class="styleClasses"
		/>

		<!-- UINPUT TIME -->
		<UInput
			v-else-if="element.type === 'input-time'"
			:placeholder="element.props.placeholder || 'Select time...'"
			:icon="element.props.icon || 'lucide:clock'"
			:color="element.props.color || 'primary'"
			:class="styleClasses"
		/>

		<!-- UINPUT MENU / AUTOCOMPLETE -->
		<div
			v-else-if="element.type === 'input-menu'"
			:class="['relative text-left my-2 w-full', styleClasses]"
		>
			<UInput :placeholder="element.props.placeholder || 'Search options...'" icon="lucide:search" trailing-icon="lucide:chevron-down" />
		</div>

		<!-- UINPUT TAGS -->
		<div
			v-else-if="element.type === 'input-tags'"
			:class="['p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-wrap items-center gap-1.5 my-2 w-full', styleClasses]"
		>
			<UBadge
				v-for="(tag, tIdx) in (element.props.tags || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
				:key="tIdx"
				:label="tag"
				color="primary"
				variant="subtle"
				size="xs"
			/>
			<input type="text" :placeholder="element.props.placeholder || 'Add tag...'" class="flex-1 bg-transparent border-none text-xs outline-none min-w-[80px] p-1 text-neutral-700 dark:text-neutral-200" />
		</div>

		<!-- UINPUT RATING -->
		<div
			v-else-if="element.type === 'input-rating'"
			:class="['flex items-center gap-1 my-2', styleClasses]"
		>
			<UIcon
				v-for="star in (element.props.max || 5)"
				:key="star"
				name="lucide:star"
				:class="[
					'w-5 h-5 cursor-pointer',
					star <= (element.props.value || 4) ? 'text-amber-400 fill-amber-400' : 'text-neutral-300 dark:text-neutral-700'
				]"
			/>
		</div>

		<!-- UPIN INPUT -->
		<div
			v-else-if="element.type === 'pin-input'"
			:class="['flex items-center gap-2 my-2 justify-center', styleClasses]"
		>
			<input
				v-for="p in (element.props.length || 4)"
				:key="p"
				type="text"
				maxlength="1"
				class="w-10 h-11 text-center font-mono font-bold text-base rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary outline-none"
				:value="p === 1 ? '7' : p === 2 ? '4' : ''"
			/>
		</div>

		<!-- UCOLOR PICKER -->
		<div
			v-else-if="element.type === 'color-picker'"
			:class="['flex items-center gap-3 p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 w-fit my-2', styleClasses]"
		>
			<div class="w-8 h-8 rounded-lg border shadow-inner" :style="{ backgroundColor: element.props.value || '#10b981' }" />
			<span class="font-mono text-xs font-semibold uppercase">{{ element.props.value || '#10b981' }}</span>
		</div>

		<!-- UFILE UPLOAD -->
		<div
			v-else-if="element.type === 'file-upload'"
			:class="['border-2 border-dashed border-neutral-300 dark:border-neutral-700 hover:border-primary-500/60 rounded-2xl p-6 text-center text-xs flex flex-col items-center justify-center gap-2 bg-neutral-50/50 dark:bg-neutral-900/30 cursor-pointer my-3 w-full', styleClasses]"
		>
			<div class="p-3 rounded-full bg-primary-50 dark:bg-primary-950/40 text-primary">
				<UIcon :name="element.props.icon || 'lucide:upload-cloud'" class="w-6 h-6" />
			</div>
			<div class="space-y-0.5">
				<p class="font-medium text-neutral-800 dark:text-neutral-200">{{ element.props.label || 'Click or drag files here to upload' }}</p>
				<p class="text-[11px] text-neutral-400">{{ element.props.hint || 'PNG, JPG, PDF up to 10MB' }}</p>
			</div>
		</div>

		<!-- UTEXTAREA -->
		<UTextarea
			v-else-if="element.type === 'textarea'"
			:placeholder="element.props.placeholder"
			:rows="element.props.rows || 4"
			:variant="element.props.variant || 'outline'"
			:class="styleClasses"
		/>

		<!-- USELECT -->
		<div
			v-else-if="element.type === 'select'"
			:class="['relative text-left my-2 w-full', styleClasses]"
		>
			<div class="flex items-center justify-between p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs text-neutral-700 dark:text-neutral-200">
				<span>{{ element.props.placeholder || 'Select option...' }}</span>
				<UIcon name="lucide:chevron-down" class="w-4 h-4 text-neutral-400" />
			</div>
		</div>

		<!-- USELECT MENU -->
		<div
			v-else-if="element.type === 'select-menu'"
			:class="['relative text-left my-2 w-full', styleClasses]"
		>
			<div class="flex items-center justify-between p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs text-neutral-700 dark:text-neutral-200">
				<span class="flex items-center gap-2">
					<UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="xs" />
					<span>Alexandre Rochon</span>
				</span>
				<UIcon name="lucide:chevrons-up-down" class="w-4 h-4 text-neutral-400" />
			</div>
		</div>

		<!-- ULISTBOX -->
		<div
			v-else-if="element.type === 'listbox'"
			:class="['border border-neutral-200 dark:border-neutral-800 rounded-xl divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-neutral-900 text-left my-2 w-full overflow-hidden text-xs shadow-sm', styleClasses]"
		>
			<div
				v-for="(item, lIdx) in (element.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
				:key="lIdx"
				class="p-2.5 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer"
			>
				<span>{{ item }}</span>
				<UIcon v-if="lIdx === 0" name="lucide:check" class="w-4 h-4 text-primary" />
			</div>
		</div>

		<!-- URADIO GROUP -->
		<div
			v-else-if="element.type === 'radio-group'"
			:class="[
				'my-2.5 text-left',
				element.props.orientation === 'horizontal' ? 'flex flex-wrap gap-4' : 'space-y-2',
				styleClasses
			]"
		>
			<label
				v-for="(item, rIdx) in (element.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
				:key="rIdx"
				class="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer"
			>
				<input type="radio" :name="`radio-${element.id}`" :checked="rIdx === 0" class="accent-primary" />
				<span>{{ item }}</span>
			</label>
		</div>

		<!-- UCHECKBOX GROUP -->
		<div
			v-else-if="element.type === 'checkbox-group'"
			:class="[
				'my-2.5 text-left',
				element.props.orientation === 'horizontal' ? 'flex flex-wrap gap-4' : 'space-y-2',
				styleClasses
			]"
		>
			<label
				v-for="(item, cIdx) in (element.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
				:key="cIdx"
				class="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer"
			>
				<input type="checkbox" :checked="cIdx === 0" class="accent-primary rounded" />
				<span>{{ item }}</span>
			</label>
		</div>

		<!-- USWITCH -->
		<USwitch
			v-else-if="element.type === 'switch'"
			:label="element.props.label"
			:description="element.props.description"
			:color="element.props.color || 'primary'"
			:model-value="element.props.checked"
			:class="styleClasses"
		/>

		<!-- UCHECKBOX -->
		<UCheckbox
			v-else-if="element.type === 'checkbox'"
			:label="element.props.label"
			:color="element.props.color || 'primary'"
			:model-value="element.props.checked"
			:class="styleClasses"
		/>

		<!-- USLIDER -->
		<USlider
			v-else-if="element.type === 'slider'"
			:model-value="element.props.value || 60"
			:color="element.props.color || 'primary'"
			:size="element.props.size || 'md'"
			:class="styleClasses"
		/>

		<!-- UALERT -->
		<UAlert
			v-else-if="element.type === 'alert'"
			:title="element.props.title"
			:description="element.props.description"
			:icon="element.props.icon"
			:color="element.props.color || 'primary'"
			:variant="element.props.variant || 'subtle'"
			:class="styleClasses"
		/>

		<!-- UPROGRESS -->
		<UProgress
			v-else-if="element.type === 'progress'"
			:model-value="element.props.value || 70"
			:color="element.props.color || 'primary'"
			:size="element.props.size || 'md'"
			:status="element.props.status"
			:class="styleClasses"
		/>

		<!-- UCAROUSEL -->
		<div
			v-else-if="element.type === 'carousel'"
			:class="['relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 my-4 shadow-md max-w-full', styleClasses]"
		>
			<img :src="(element.props.items || '').split(',')[0] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'" class="w-full h-48 object-cover" />
			<button v-if="element.props.arrows" class="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70">
				<UIcon name="lucide:chevron-left" class="w-4 h-4" />
			</button>
			<button v-if="element.props.arrows" class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70">
				<UIcon name="lucide:chevron-right" class="w-4 h-4" />
			</button>
			<div v-if="element.props.dots" class="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
				<div class="w-2 h-2 rounded-full bg-white" />
				<div class="w-2 h-2 rounded-full bg-white/50" />
				<div class="w-2 h-2 rounded-full bg-white/50" />
			</div>
		</div>

		<!-- UEMPTY -->
		<div
			v-else-if="element.type === 'empty'"
			:class="['p-8 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 text-center flex flex-col items-center justify-center gap-3 my-4 bg-neutral-50/50 dark:bg-neutral-900/30 max-w-full', styleClasses]"
		>
			<div class="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400">
				<UIcon :name="element.props.icon || 'lucide:folder-plus'" class="w-8 h-8" />
			</div>
			<div class="space-y-1">
				<h4 class="font-bold text-sm text-neutral-900 dark:text-white">{{ element.props.title || 'No Data' }}</h4>
				<p class="text-xs text-neutral-500 dark:text-neutral-400 max-w-xs">{{ element.props.description || '' }}</p>
			</div>
			<UButton v-if="element.props.actionText" :label="element.props.actionText" color="primary" size="sm" />
		</div>

		<!-- UMARQUEE -->
		<div
			v-else-if="element.type === 'marquee'"
			:class="['overflow-hidden py-3 border-y border-neutral-200 dark:border-neutral-800 my-4 max-w-full', styleClasses]"
		>
			<div class="flex items-center gap-8 whitespace-nowrap animate-pulse">
				<span
					v-for="(it, mIdx) in (element.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
					:key="mIdx"
					class="font-semibold text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-2"
				>
					<UIcon name="lucide:sparkles" class="w-3.5 h-3.5 text-primary" />
					{{ it }}
				</span>
			</div>
		</div>

		<!-- USCROLL AREA -->
		<div
			v-else-if="element.type === 'scroll-area'"
			:class="['border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-y-auto p-4 text-left my-3 max-w-full bg-neutral-50/50 dark:bg-neutral-900/40', element.props.height || 'h-48', styleClasses]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div v-else class="space-y-3 text-xs text-neutral-500">
				<p>ScrollArea allows smooth scrolling for tall content within restricted height.</p>
				<p>Line 1 of scrollable content.</p>
				<p>Line 2 of scrollable content.</p>
				<p>Line 3 of scrollable content.</p>
				<p>Line 4 of scrollable content.</p>
				<p>Line 5 of scrollable content.</p>
			</div>
		</div>

		<!-- UTIMELINE -->
		<div
			v-else-if="element.type === 'timeline'"
			:class="['space-y-4 text-left my-4 max-w-full pl-2', styleClasses]"
		>
			<div
				v-for="(it, tIdx) in (element.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
				:key="tIdx"
				class="relative pl-6 border-l-2 border-primary-500/40 pb-2"
			>
				<div class="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-white dark:ring-neutral-900" />
				<span class="font-bold text-xs text-primary">{{ it.split(':')[0] || 'Year' }}</span>
				<p class="text-xs text-neutral-600 dark:text-neutral-300 mt-0.5">{{ it.split(':')[1] || it }}</p>
			</div>
		</div>

		<!-- UTREE -->
		<div
			v-else-if="element.type === 'tree'"
			:class="['p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-left text-xs my-3 shadow-sm max-w-full', styleClasses]"
		>
			<div class="font-bold mb-2 flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200">
				<UIcon name="lucide:folder" class="w-4 h-4 text-primary" />
				<span>{{ element.props.title || 'Tree Navigator' }}</span>
			</div>
			<div class="pl-4 space-y-1.5 border-l border-neutral-200 dark:border-neutral-800 font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
				<div class="flex items-center gap-1.5"><UIcon name="lucide:file-text" class="w-3.5 h-3.5" /><span>Getting Started</span></div>
				<div class="flex items-center gap-1.5"><UIcon name="lucide:file-text" class="w-3.5 h-3.5" /><span>Installation</span></div>
				<div class="flex items-center gap-1.5"><UIcon name="lucide:file-text" class="w-3.5 h-3.5" /><span>Configuration</span></div>
			</div>
		</div>

		<!-- UUSER -->
		<div
			v-else-if="element.type === 'user'"
			:class="['p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center gap-3 text-left my-2 shadow-sm max-w-full', styleClasses]"
		>
			<UAvatar :src="element.props.avatar || 'https://avatars.githubusercontent.com/u/739984?v=4'" size="md" />
			<div class="flex-1 overflow-hidden">
				<h4 class="font-bold text-xs text-neutral-900 dark:text-white truncate">{{ element.props.name || 'User Name' }}</h4>
				<p class="text-[11px] text-neutral-500 truncate">{{ element.props.description || 'user@example.com' }}</p>
			</div>
			<UIcon name="lucide:external-link" class="w-4 h-4 text-neutral-400 hover:text-white cursor-pointer" />
		</div>

		<!-- STAT CARD -->
		<UCard
			v-else-if="element.type === 'stat-card'"
			:class="styleClasses"
		>
			<div class="flex items-center justify-between">
				<span class="text-sm font-medium text-neutral-500">{{ element.props.title || 'Metric' }}</span>
				<div class="p-2 rounded-lg bg-primary-50 dark:bg-primary-950/40">
					<UIcon :name="element.props.icon || 'lucide:trending-up'" class="w-5 h-5 text-primary" />
				</div>
			</div>
			<div class="mt-2 flex items-baseline gap-2">
				<span class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{{ element.props.value || '0' }}</span>
				<span
					v-if="element.props.change"
					class="text-xs font-semibold px-1.5 py-0.5 rounded"
					:class="element.props.changeType === 'negative' ? 'bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400' : 'bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400'"
				>
					{{ element.props.change }}
				</span>
			</div>
		</UCard>

		<!-- UPageHero SECTION -->
		<section
			v-else-if="element.type === 'hero-section'"
			:class="[
				'relative overflow-hidden',
				isMobile ? 'py-8 px-4' : 'py-16 px-6 lg:py-24',
				styleClasses
			]"
		>
			<div
				class="max-w-7xl mx-auto flex flex-col"
				:class="[
					isMobile ? 'gap-6 text-center items-center' :
					(element.props.orientation === 'horizontal'
						? (element.props.reverse ? 'lg:flex-row-reverse lg:items-center lg:justify-between gap-10' : 'lg:flex-row lg:items-center lg:justify-between gap-10')
						: (element.props.reverse ? 'flex-col-reverse items-center text-center gap-10' : 'items-center text-center gap-10'))
				]"
			>
				<!-- Main Text Content & Headline & Links -->
				<div
					class="flex flex-col w-full"
					:class="[
						isMobile ? 'gap-3.5 items-center text-center' :
						(element.props.orientation === 'horizontal'
							? 'lg:max-w-xl text-left items-start gap-5'
							: 'max-w-3xl items-center text-center mx-auto gap-5')
					]"
				>
					<!-- Headline Slot / Badge -->
					<div v-if="element.props.headline || element.props.badgeText">
						<UBadge
							variant="subtle"
							:size="isMobile ? 'sm' : 'lg'"
							icon="lucide:sparkles"
							:label="element.props.headline || element.props.badgeText"
							class="font-semibold"
						/>
					</div>

					<!-- Title -->
					<h1
						:class="[
							'font-extrabold tracking-tight text-neutral-900 dark:text-white break-words max-w-full',
							isMobile ? 'text-2xl leading-tight' : 'text-4xl sm:text-6xl leading-[1.1]'
						]"
					>
						{{ element.props.title || 'Ultimate Vue UI Library' }}
					</h1>

					<!-- Description -->
					<p
						:class="[
							'text-neutral-600 dark:text-neutral-300 leading-relaxed break-words max-w-full',
							isMobile ? 'text-sm px-1' : 'text-lg sm:text-xl'
						]"
					>
						{{ element.props.description || element.props.subtitle || 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible components.' }}
					</p>

					<!-- Links / Action Buttons -->
					<div
						:class="[
							'w-full pt-2',
							isMobile ? 'flex flex-col gap-2.5 px-2' : 'flex flex-wrap items-center gap-3.5'
						]"
					>
						<UButton
							v-if="element.props.primaryBtnText"
							:size="isMobile ? 'md' : 'xl'"
							:block="isMobile"
							:color="element.props.primaryBtnColor || 'primary'"
							:variant="element.props.primaryBtnVariant || 'solid'"
							:label="element.props.primaryBtnText"
							:icon="element.props.primaryBtnIcon || 'lucide:arrow-right'"
							trailing
						/>
						<UButton
							v-if="element.props.secondaryBtnText"
							:size="isMobile ? 'md' : 'xl'"
							:block="isMobile"
							:color="element.props.secondaryBtnColor || 'neutral'"
							:variant="element.props.secondaryBtnVariant || 'outline'"
							:label="element.props.secondaryBtnText"
							:icon="element.props.secondaryBtnIcon || 'lucide:book-open'"
						/>
					</div>
				</div>

				<!-- Default Slot: Dropped Children Components or Illustration / Screenshot -->
				<div
					v-if="(element.children && element.children.length > 0) || element.props.showIllustration || !previewMode"
					class="w-full flex-1 transition-all"
					:class="isMobile ? 'max-w-full mt-4' : (element.props.orientation === 'horizontal' ? 'lg:max-w-xl' : 'max-w-4xl mx-auto w-full mt-6')"
				>
					<template v-if="element.children && element.children.length > 0">
						<div class="space-y-4 w-full">
							<BuilderComponentRenderer
								v-for="(child, cIdx) in element.children"
								:key="child.id"
								:element="child"
								:parent-id="element.id"
								:index="cIdx"
							/>
						</div>
					</template>
					<div
						v-else-if="element.props.showIllustration"
						class="rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 ring-1 ring-neutral-900/5 dark:ring-white/10"
					>
						<img
							:src="element.props.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000'"
							alt="App screenshot"
							class="w-full h-auto object-cover"
						/>
					</div>
					<div
						v-else-if="!previewMode"
						class="border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-xl p-8 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-2 bg-neutral-50/50 dark:bg-neutral-900/30"
					>
						<UIcon name="lucide:image-plus" class="w-6 h-6 text-neutral-400" />
						<span>Drop an illustration, screenshot card, or components into the Hero Default Slot</span>
					</div>
				</div>
			</div>
		</section>

		<!-- FEATURE CARD -->
		<UCard
			v-else-if="element.type === 'feature-card'"
			:class="styleClasses"
		>
			<div class="p-2.5 w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/60 flex items-center justify-center mb-4 ring-1 ring-primary/20">
				<UIcon :name="element.props.icon || 'lucide:sparkles'" class="w-6 h-6 text-primary" />
			</div>
			<h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-2">{{ element.props.title || 'Feature Title' }}</h3>
			<p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{{ element.props.description || '' }}</p>
		</UCard>

		<!-- PRICING CARD -->
		<UCard
			v-else-if="element.type === 'pricing-card'"
			:class="[
				'relative flex flex-col justify-between h-full transition-all',
				element.props.featured ? 'ring-2 ring-primary shadow-xl shadow-primary/10' : '',
				styleClasses
			]"
		>
			<div>
				<div class="flex items-center justify-between mb-3">
					<h3 class="text-lg font-bold text-neutral-900 dark:text-white">{{ element.props.plan || 'Plan' }}</h3>
					<UBadge
						v-if="element.props.badge"
						color="primary"
						variant="subtle"
						:label="element.props.badge"
					/>
				</div>
				<p class="text-xs text-neutral-500 mb-6">{{ element.props.description || '' }}</p>
				<div class="flex items-baseline gap-1 mb-6">
					<span class="text-4xl font-extrabold text-neutral-900 dark:text-white">{{ element.props.price || '$0' }}</span>
					<span class="text-sm text-neutral-400">{{ element.props.period || '/month' }}</span>
				</div>
				<ul class="space-y-3 mb-8">
					<li
						v-for="(feat, fIdx) in splitFeatures"
						:key="fIdx"
						class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300"
					>
						<UIcon name="lucide:check" class="w-4 h-4 text-primary shrink-0" />
						<span>{{ feat }}</span>
					</li>
				</ul>
			</div>
			<UButton
				block
				size="lg"
				:color="element.props.featured ? 'primary' : 'neutral'"
				:variant="element.props.featured ? 'solid' : 'outline'"
				:label="element.props.buttonText || 'Subscribe'"
			/>
		</UCard>

		<!-- TESTIMONIAL CARD -->
		<UCard
			v-else-if="element.type === 'testimonial-card'"
			:class="styleClasses"
		>
			<div class="flex items-center gap-1 text-amber-400 mb-4">
				<UIcon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 fill-current" />
			</div>
			<p class="text-sm italic text-neutral-700 dark:text-neutral-200 mb-6 leading-relaxed">
				"{{ element.props.quote || '' }}"
			</p>
			<div class="flex items-center gap-3">
				<UAvatar :src="element.props.avatarUrl" :alt="element.props.author" size="md" />
				<div>
					<h4 class="text-sm font-semibold text-neutral-900 dark:text-white">{{ element.props.author || 'Author' }}</h4>
					<p class="text-xs text-neutral-400">{{ element.props.role || '' }}</p>
				</div>
			</div>
		</UCard>

		<!-- FOOTER SECTION -->
		<footer
			v-else-if="element.type === 'footer-section'"
			:class="['border-t border-neutral-200 dark:border-neutral-800', styleClasses]"
		>
			<div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
				<div class="text-center sm:text-left">
					<h4 class="text-lg font-bold text-primary">{{ element.props.brandName || 'Brand' }}</h4>
					<p class="text-xs text-neutral-500 mt-1">{{ element.props.tagline || '' }}</p>
				</div>
				<p class="text-xs text-neutral-400">{{ element.props.copyright || '© 2026' }}</p>
			</div>
		</footer>

		<!-- ================= PAGE & PRO COMPONENTS ================= -->

		<!-- UAuthForm -->
		<UCard
			v-else-if="element.type === 'auth-form'"
			:class="['w-full shadow-xl border border-neutral-200 dark:border-neutral-800', styleClasses]"
		>
			<div class="text-center mb-6">
				<div class="inline-flex p-3 rounded-2xl bg-primary-50 dark:bg-primary-950/60 text-primary mb-3">
					<UIcon :name="element.props.icon || 'lucide:lock'" class="w-6 h-6" />
				</div>
				<h2 class="text-xl font-bold text-neutral-900 dark:text-white">{{ element.props.title || 'Welcome back' }}</h2>
				<p class="text-xs text-neutral-500 mt-1">{{ element.props.description || '' }}</p>
			</div>

			<div v-if="element.props.showProviders" class="grid grid-cols-2 gap-2 mb-4">
				<UButton color="neutral" variant="outline" size="sm" icon="lucide:globe" label="Google" block />
				<UButton color="neutral" variant="outline" size="sm" icon="lucide:github" label="GitHub" block />
			</div>

			<div v-if="element.props.showProviders" class="relative my-4">
				<div class="absolute inset-0 flex items-center"><span class="w-full border-t border-neutral-200 dark:border-neutral-800" /></div>
				<div class="relative flex justify-center text-[10px] uppercase"><span class="bg-white dark:bg-neutral-900 px-2 text-neutral-400">or continue with</span></div>
			</div>

			<div class="space-y-3">
				<div>
					<label class="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email address</label>
					<UInput placeholder="you@example.com" icon="lucide:mail" class="w-full" />
				</div>
				<div>
					<label class="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Password</label>
					<UInput type="password" placeholder="••••••••" icon="lucide:key" class="w-full" />
				</div>
				<UButton block color="primary" size="lg" :label="element.props.submitBtnText || 'Continue with Email'" class="mt-4" />
			</div>
		</UCard>

		<!-- UBlogPost -->
		<UCard
			v-else-if="element.type === 'blog-post'"
			:class="[
				'overflow-hidden group hover:shadow-xl transition-all duration-300',
				element.props.orientation === 'horizontal' ? 'flex flex-col md:flex-row' : '',
				styleClasses
			]"
		>
			<div
				v-if="element.props.image"
				:class="element.props.orientation === 'horizontal' ? 'md:w-2/5 shrink-0 overflow-hidden' : 'h-48 overflow-hidden -mx-6 -mt-6 mb-4'"
			>
				<img
					:src="element.props.image"
					:alt="element.props.title"
					class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
			</div>
			<div class="flex flex-col justify-between flex-1">
				<div>
					<div class="flex items-center gap-2 mb-3">
						<UBadge v-if="element.props.badge" color="primary" variant="subtle" size="xs" :label="element.props.badge" />
						<span class="text-xs text-neutral-400">{{ element.props.date || 'Recent' }}</span>
					</div>
					<h3 class="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors mb-2">
						{{ element.props.title || 'Blog Post Title' }}
					</h3>
					<p class="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
						{{ element.props.description || '' }}
					</p>
				</div>
				<div class="flex items-center gap-2.5 mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
					<UAvatar :src="element.props.authorAvatar" :alt="element.props.authorName" size="xs" />
					<div class="text-left">
						<h4 class="text-xs font-semibold text-neutral-900 dark:text-white">{{ element.props.authorName || 'Author' }}</h4>
						<p class="text-[10px] text-neutral-400">{{ element.props.authorRole || '' }}</p>
					</div>
				</div>
			</div>
		</UCard>

		<!-- UBlogPosts Container -->
		<div
			v-else-if="element.type === 'blog-posts'"
			:class="[
				'grid gap-6',
				element.props.orientation === 'horizontal' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
				styleClasses
			]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="col-span-full border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-xl p-8 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-2"
			>
				<UIcon name="lucide:newspaper" class="w-6 h-6 text-neutral-400" />
				<span>Drop UBlogPost cards here</span>
			</div>
		</div>

		<!-- UChangelogVersion -->
		<div
			v-else-if="element.type === 'changelog-version'"
			:class="['relative pl-8 pb-8 border-l border-neutral-200 dark:border-neutral-800 text-left', styleClasses]"
		>
			<div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary-500 ring-4 ring-white dark:ring-neutral-900 flex items-center justify-center">
				<div class="w-2 h-2 rounded-full bg-white" />
			</div>
			<div class="flex items-center gap-2.5 mb-1.5">
				<span class="font-mono text-sm font-bold text-neutral-900 dark:text-white">{{ element.props.version || 'v1.0.0' }}</span>
				<UBadge v-if="element.props.badge" color="primary" variant="subtle" size="xs" :label="element.props.badge" />
				<span class="text-xs text-neutral-400">{{ element.props.date || '' }}</span>
			</div>
			<h3 class="text-base font-bold text-neutral-900 dark:text-white mb-2">{{ element.props.title || 'Version Release Title' }}</h3>
			<p class="text-xs text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">{{ element.props.description || '' }}</p>
			
			<div v-if="element.children && element.children.length > 0" class="space-y-3">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</div>
		</div>

		<!-- UChangelogVersions Container -->
		<div
			v-else-if="element.type === 'changelog-versions'"
			:class="['max-w-3xl mx-auto space-y-4 py-8', styleClasses]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-xl p-8 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-2"
			>
				<UIcon name="lucide:git-commit" class="w-6 h-6 text-neutral-400" />
				<span>Drop UChangelogVersion entries into this timeline</span>
			</div>
		</div>

		<!-- UPage Root Layout -->
		<div
			v-else-if="element.type === 'page'"
			:class="['w-full max-w-7xl mx-auto flex flex-col gap-6', styleClasses]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-xl p-8 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-2"
			>
				<UIcon name="lucide:app-window" class="w-6 h-6 text-neutral-400" />
				<span>UPage Root Layout: Drop UPageHeader, UPageBody, or sections inside</span>
			</div>
		</div>

		<!-- UPageHeader -->
		<div
			v-else-if="element.type === 'page-header'"
			:class="[
				'border-b border-neutral-200 dark:border-neutral-800 text-left',
				isMobile ? 'pb-4 px-1' : 'pb-8',
				styleClasses
			]"
		>
			<div class="flex items-center gap-2 mb-2">
				<UBadge v-if="element.props.headline" color="primary" variant="subtle" :size="isMobile ? 'xs' : 'sm'" :label="element.props.headline" />
				<UIcon v-if="element.props.icon" :name="element.props.icon" :class="isMobile ? 'w-4 h-4 text-primary' : 'w-5 h-5 text-primary'" />
			</div>
			<h1
				:class="[
					'font-extrabold text-neutral-900 dark:text-white tracking-tight break-words max-w-full mb-2',
					isMobile ? 'text-2xl' : 'text-3xl sm:text-4xl mb-3'
				]"
			>
				{{ element.props.title || 'Page Title' }}
			</h1>
			<p
				:class="[
					'text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed break-words',
					isMobile ? 'text-xs mb-4' : 'text-base mb-6'
				]"
			>
				{{ element.props.description || '' }}
			</p>
			<div
				v-if="element.props.primaryBtnText || element.props.secondaryBtnText"
				:class="[
					'w-full',
					isMobile ? 'flex flex-col gap-2' : 'flex items-center gap-3'
				]"
			>
				<UButton v-if="element.props.primaryBtnText" color="primary" :size="isMobile ? 'sm' : 'md'" :block="isMobile" :label="element.props.primaryBtnText" />
				<UButton v-if="element.props.secondaryBtnText" color="neutral" variant="outline" :size="isMobile ? 'sm' : 'md'" :block="isMobile" :label="element.props.secondaryBtnText" />
			</div>
		</div>

		<!-- UPageBody -->
		<div
			v-else-if="element.type === 'page-body'"
			:class="[
				'w-full max-w-full overflow-hidden',
				element.props.prose ? 'prose dark:prose-invert max-w-none' : '',
				styleClasses
			]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-xl p-8 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-2"
			>
				<UIcon name="lucide:align-left" class="w-6 h-6 text-neutral-400" />
				<span>UPageBody: Drop documentation or content components here</span>
			</div>
		</div>

		<!-- UPageAside -->
		<aside
			v-else-if="element.type === 'page-aside'"
			:class="['border-r border-neutral-200 dark:border-neutral-800 text-left', styleClasses]"
		>
			<h4 class="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">{{ element.props.title || 'Navigation' }}</h4>
			<div class="space-y-3">
				<template v-if="element.children && element.children.length > 0">
					<BuilderComponentRenderer
						v-for="(child, cIdx) in element.children"
						:key="child.id"
						:element="child"
						:parent-id="element.id"
						:index="cIdx"
					/>
				</template>
				<div
					v-else-if="!previewMode"
					class="border border-dashed border-neutral-300 dark:border-neutral-700 rounded p-4 text-center text-xs text-neutral-400"
				>
					<span>Drop Aside Navigation Links</span>
				</div>
			</div>
		</aside>

		<!-- UPageAnchors -->
		<div
			v-else-if="element.type === 'page-anchors'"
			:class="['border-l border-neutral-200 dark:border-neutral-800 pl-4 text-left', styleClasses]"
		>
			<h4 class="text-xs font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-1.5">
				<UIcon name="lucide:list-tree" class="w-3.5 h-3.5 text-primary" />
				<span>{{ element.props.title || 'On this page' }}</span>
			</h4>
			<ul class="space-y-2 text-xs">
				<li
					v-for="(item, aIdx) in (element.props.links || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
					:key="aIdx"
					class="text-neutral-500 hover:text-primary cursor-pointer transition-colors"
				>
					{{ item }}
				</li>
			</ul>
		</div>

		<!-- UPageGrid -->
		<div
			v-else-if="element.type === 'page-grid'"
			:class="[
				'grid',
				isMobile ? 'grid-cols-1 gap-4' :
				(element.props.columns === '2' ? 'grid-cols-1 md:grid-cols-2 gap-6' :
				element.props.columns === '4' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'),
				styleClasses
			]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="col-span-full border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-xl p-8 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-2"
			>
				<UIcon name="lucide:layout-grid" class="w-6 h-6 text-neutral-400" />
				<span>UPageGrid: Drop cards or feature items here</span>
			</div>
		</div>

		<!-- UPageColumns -->
		<div
			v-else-if="element.type === 'page-columns'"
			:class="[
				isMobile ? 'columns-1 gap-4 space-y-4' : 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6',
				styleClasses
			]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-xl p-8 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-2"
			>
				<UIcon name="lucide:columns-3" class="w-6 h-6 text-neutral-400" />
				<span>UPageColumns: Drop staggered cards or testimonials</span>
			</div>
		</div>

		<!-- UPageCard -->
		<UCard
			v-else-if="element.type === 'page-card'"
			:variant="element.props.variant || 'outline'"
			:class="[
				'group relative hover:shadow-xl transition-all duration-300 max-w-full',
				element.props.highlight ? 'ring-1 ring-primary-500/30' : '',
				styleClasses
			]"
		>
			<div
				class="flex flex-col gap-4"
				:class="element.props.orientation === 'horizontal' && !isMobile ? 'md:flex-row md:items-center' : ''"
			>
				<div
					v-if="element.props.icon"
					class="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/60 flex items-center justify-center text-primary shrink-0 ring-1 ring-primary/20"
				>
					<UIcon :name="element.props.icon" class="w-6 h-6" />
				</div>
				<div class="flex-1 text-left">
					<h3 class="text-base font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors mb-1.5 break-words">
						{{ element.props.title || 'Card Title' }}
					</h3>
					<p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed break-words">
						{{ element.props.description || '' }}
					</p>
					<div v-if="element.children && element.children.length > 0" class="mt-4">
						<BuilderComponentRenderer
							v-for="(child, cIdx) in element.children"
							:key="child.id"
							:element="child"
							:parent-id="element.id"
							:index="cIdx"
						/>
					</div>
				</div>
			</div>
		</UCard>

		<!-- UPageFeature -->
		<div
			v-else-if="element.type === 'page-feature'"
			:class="[
				'flex gap-3 text-left max-w-full',
				element.props.orientation === 'vertical' || isMobile ? 'flex-col items-start' : 'items-start',
				styleClasses
			]"
		>
			<div class="p-2 rounded-lg bg-primary-50 dark:bg-primary-950/60 text-primary shrink-0 ring-1 ring-primary/20">
				<UIcon :name="element.props.icon || 'lucide:sparkles'" class="w-5 h-5" />
			</div>
			<div class="max-w-full">
				<h4 class="text-sm font-bold text-neutral-900 dark:text-white mb-1 break-words">{{ element.props.title || 'Feature' }}</h4>
				<p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed break-words">{{ element.props.description || '' }}</p>
			</div>
		</div>

		<!-- UPageSection -->
		<section
			v-else-if="element.type === 'page-section'"
			:class="[
				'relative',
				isMobile ? 'py-8 px-4' : 'py-16 px-6 lg:py-24',
				styleClasses
			]"
		>
			<div
				class="max-w-7xl mx-auto flex flex-col"
				:class="[
					isMobile ? 'gap-6 text-center items-center' :
					(element.props.orientation === 'horizontal'
						? (element.props.reverse ? 'lg:flex-row-reverse lg:items-center gap-10' : 'lg:flex-row lg:items-center gap-10')
						: 'text-center items-center gap-10')
				]"
			>
				<div
					class="flex flex-col w-full"
					:class="[
						isMobile ? 'gap-3.5 items-center text-center' :
						(element.props.orientation === 'horizontal' ? 'lg:max-w-xl text-left items-start gap-4' : 'max-w-3xl mx-auto items-center text-center gap-4')
					]"
				>
					<UBadge v-if="element.props.headline" color="primary" variant="subtle" :size="isMobile ? 'xs' : 'md'" :label="element.props.headline" />
					<UIcon v-if="element.props.icon" :name="element.props.icon" :class="isMobile ? 'w-6 h-6 text-primary' : 'w-8 h-8 text-primary'" />
					<h2
						:class="[
							'font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight break-words max-w-full',
							isMobile ? 'text-2xl' : 'text-3xl sm:text-5xl'
						]"
					>
						{{ element.props.title || 'Section Title' }}
					</h2>
					<p
						:class="[
							'text-neutral-600 dark:text-neutral-300 leading-relaxed break-words max-w-full',
							isMobile ? 'text-sm' : 'text-base'
						]"
					>
						{{ element.props.description || '' }}
					</p>
					<div
						v-if="element.props.primaryBtnText || element.props.secondaryBtnText"
						:class="[
							'w-full pt-1',
							isMobile ? 'flex flex-col gap-2' : 'flex flex-wrap items-center gap-3 pt-2'
						]"
					>
						<UButton v-if="element.props.primaryBtnText" color="primary" :size="isMobile ? 'md' : 'lg'" :block="isMobile" :label="element.props.primaryBtnText" />
						<UButton v-if="element.props.secondaryBtnText" color="neutral" variant="outline" :size="isMobile ? 'md' : 'lg'" :block="isMobile" :label="element.props.secondaryBtnText" />
					</div>
				</div>

				<div
					v-if="(element.children && element.children.length > 0) || element.props.showIllustration || !previewMode"
					class="w-full flex-1"
					:class="isMobile ? 'max-w-full mt-4' : (element.props.orientation === 'horizontal' ? 'lg:max-w-xl' : 'max-w-5xl mx-auto w-full mt-6')"
				>
					<template v-if="element.children && element.children.length > 0">
						<div class="space-y-4 w-full">
							<BuilderComponentRenderer
								v-for="(child, cIdx) in element.children"
								:key="child.id"
								:element="child"
								:parent-id="element.id"
								:index="cIdx"
							/>
						</div>
					</template>
					<div
						v-else-if="element.props.showIllustration"
						class="rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
					>
						<img :src="element.props.imageUrl" alt="Section Illustration" class="w-full h-auto object-cover" />
					</div>
					<div
						v-else-if="!previewMode"
						class="border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-xl p-8 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-2"
					>
						<UIcon name="lucide:layout-panel-top" class="w-6 h-6 text-neutral-400" />
						<span>UPageSection Default Slot: Drop Cards, Grids or Content</span>
					</div>
				</div>
			</div>
		</section>

		<!-- UPageCTA -->
		<section
			v-else-if="element.type === 'page-cta'"
			:class="[
				'relative overflow-hidden text-center max-w-full',
				isMobile ? 'py-8 px-4 rounded-2xl my-3' : 'py-16 px-6 rounded-3xl my-6',
				element.props.variant === 'solid' ? 'bg-primary text-inverted' : 'bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800',
				styleClasses
			]"
		>
			<div class="max-w-3xl mx-auto flex flex-col items-center gap-4">
				<UBadge v-if="element.props.headline" color="primary" variant="subtle" :size="isMobile ? 'xs' : 'sm'" :label="element.props.headline" />
				<h2
					:class="[
						'font-extrabold tracking-tight break-words max-w-full',
						isMobile ? 'text-2xl' : 'text-3xl sm:text-5xl'
					]"
				>
					{{ element.props.title || 'CTA Title' }}
				</h2>
				<p
					:class="[
						'text-neutral-500 dark:text-neutral-400 max-w-xl break-words',
						isMobile ? 'text-sm' : 'text-base'
					]"
				>
					{{ element.props.description || '' }}
				</p>
				<div
					:class="[
						'w-full pt-1',
						isMobile ? 'flex flex-col gap-2' : 'flex flex-wrap items-center justify-center gap-3 pt-2'
					]"
				>
					<UButton v-if="element.props.primaryBtnText" color="primary" :size="isMobile ? 'md' : 'xl'" :block="isMobile" :label="element.props.primaryBtnText" />
					<UButton v-if="element.props.secondaryBtnText" color="neutral" variant="outline" :size="isMobile ? 'md' : 'xl'" :block="isMobile" :label="element.props.secondaryBtnText" />
				</div>
				<div v-if="element.children && element.children.length > 0" class="mt-6 w-full">
					<BuilderComponentRenderer
						v-for="(child, cIdx) in element.children"
						:key="child.id"
						:element="child"
						:parent-id="element.id"
						:index="cIdx"
					/>
				</div>
			</div>
		</section>

		<!-- UPageLogos -->
		<section
			v-else-if="element.type === 'page-logos'"
			:class="[
				'text-center border-y border-neutral-100 dark:border-neutral-900',
				isMobile ? 'py-6 px-3' : 'py-12 px-6',
				styleClasses
			]"
		>
			<p class="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4 sm:mb-8">{{ element.props.title || 'Trusted by leaders' }}</p>
			<div
				class="max-w-6xl mx-auto flex flex-wrap items-center justify-center opacity-75 grayscale hover:grayscale-0 transition-all"
				:class="isMobile ? 'gap-4 text-sm' : 'gap-8 md:gap-16 text-lg'"
			>
				<div
					v-for="(logo, lIdx) in (element.props.logos || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
					:key="lIdx"
					class="font-extrabold tracking-tight text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5"
				>
					<UIcon name="lucide:sparkles" class="w-3.5 h-3.5 text-primary" />
					<span>{{ logo }}</span>
				</div>
			</div>
		</section>

		<!-- UPageList -->
		<div
			v-else-if="element.type === 'page-list'"
			:class="[
				'text-left max-w-4xl mx-auto space-y-4',
				isMobile ? 'py-6 px-2' : 'py-10',
				styleClasses
			]"
		>
			<h3
				:class="[
					'font-bold text-neutral-900 dark:text-white break-words',
					isMobile ? 'text-xl' : 'text-2xl'
				]"
			>
				{{ element.props.title || 'Frequently Asked Questions' }}
			</h3>
			<p class="text-xs sm:text-sm text-neutral-500 mb-6 break-words">{{ element.props.description || '' }}</p>
			<div class="space-y-4">
				<template v-if="element.children && element.children.length > 0">
					<BuilderComponentRenderer
						v-for="(child, cIdx) in element.children"
						:key="child.id"
						:element="child"
						:parent-id="element.id"
						:index="cIdx"
					/>
				</template>
				<div
					v-else-if="!previewMode"
					class="border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-xl p-8 text-center text-xs text-neutral-400"
				>
					<span>UPageList: Drop list items, cards or accordions</span>
				</div>
			</div>
		</div>

		<!-- UPageLinks -->
		<div
			v-else-if="element.type === 'page-links'"
			:class="['text-left p-4 space-y-3 max-w-full', styleClasses]"
		>
			<h4 class="text-xs font-bold text-neutral-400 uppercase tracking-wider">{{ element.props.title || 'Resources' }}</h4>
			<ul class="space-y-2 text-xs">
				<li
					v-for="(link, lIdx) in (element.props.links || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
					:key="lIdx"
					class="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-primary cursor-pointer transition-colors break-words"
				>
					<UIcon name="lucide:external-link" class="w-3.5 h-3.5 text-primary shrink-0" />
					<span>{{ link }}</span>
				</li>
			</ul>
		</div>

		<!-- UPricingPlan -->
		<UCard
			v-else-if="element.type === 'pricing-plan'"
			:class="[
				'relative flex flex-col justify-between h-full transition-all text-left max-w-full',
				element.props.highlight ? 'ring-2 ring-primary shadow-2xl shadow-primary/10' : '',
				styleClasses
			]"
		>
			<div>
				<div class="flex items-center justify-between mb-3">
					<h3 class="text-xl font-bold text-neutral-900 dark:text-white break-words">{{ element.props.title || 'Plan' }}</h3>
					<UBadge v-if="element.props.badge" color="primary" variant="subtle" size="sm" :label="element.props.badge" />
				</div>
				<p class="text-xs text-neutral-500 mb-6 leading-relaxed break-words">{{ element.props.description || '' }}</p>
				<div class="flex items-baseline gap-1 mb-6">
					<span class="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">{{ element.props.price || '$0' }}</span>
					<span class="text-xs sm:text-sm text-neutral-400">{{ element.props.billingPeriod || '/month' }}</span>
				</div>
				<ul class="space-y-3 mb-8">
					<li
						v-for="(feat, fIdx) in (element.props.features || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
						:key="fIdx"
						class="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 break-words"
					>
						<UIcon name="lucide:check" class="w-4 h-4 text-primary shrink-0" />
						<span>{{ feat }}</span>
					</li>
				</ul>
			</div>
			<UButton
				block
				:size="isMobile ? 'md' : 'lg'"
				:color="element.props.highlight ? 'primary' : 'neutral'"
				:variant="element.props.highlight ? 'solid' : 'outline'"
				:label="element.props.buttonText || 'Subscribe'"
			/>
		</UCard>

		<!-- UPricingPlans Container -->
		<div
			v-else-if="element.type === 'pricing-plans'"
			:class="[
				'grid max-w-7xl mx-auto items-stretch',
				isMobile ? 'grid-cols-1 gap-4 py-6 px-2' : 'grid-cols-1 md:grid-cols-3 gap-8 py-12',
				styleClasses
			]"
		>
			<template v-if="element.children && element.children.length > 0">
				<BuilderComponentRenderer
					v-for="(child, cIdx) in element.children"
					:key="child.id"
					:element="child"
					:parent-id="element.id"
					:index="cIdx"
				/>
			</template>
			<div
				v-else-if="!previewMode"
				class="col-span-full border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-xl p-8 text-center text-xs text-neutral-400 flex flex-col items-center justify-center gap-2"
			>
				<UIcon name="lucide:table-properties" class="w-6 h-6 text-neutral-400" />
				<span>UPricingPlans: Drop UPricingPlan cards into this multi-column grid</span>
			</div>
		</div>

		<!-- UPricingTable -->
		<div
			v-else-if="element.type === 'pricing-table'"
			:class="[
				'max-w-6xl mx-auto text-left space-y-6 max-w-full overflow-hidden',
				isMobile ? 'py-6 px-2' : 'py-12',
				styleClasses
			]"
		>
			<div class="text-center max-w-2xl mx-auto mb-8">
				<h2
					:class="[
						'font-extrabold text-neutral-900 dark:text-white break-words',
						isMobile ? 'text-2xl' : 'text-3xl'
					]"
				>
					{{ element.props.title || 'Compare Features' }}
				</h2>
				<p class="text-xs text-neutral-500 mt-2 break-words">{{ element.props.description || '' }}</p>
			</div>
			<div class="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-x-auto shadow-sm max-w-full">
				<table class="w-full text-xs text-left min-w-[320px]">
					<thead class="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
						<tr>
							<th class="p-3 sm:p-4 font-bold">Feature</th>
							<th class="p-3 sm:p-4 font-bold text-center">Starter</th>
							<th class="p-3 sm:p-4 font-bold text-center text-primary">Pro</th>
							<th class="p-3 sm:p-4 font-bold text-center">Enterprise</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-neutral-200 dark:divide-neutral-800">
						<tr>
							<td class="p-3 sm:p-4 font-medium">Visual Builder Canvas</td>
							<td class="p-3 sm:p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
							<td class="p-3 sm:p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
							<td class="p-3 sm:p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
						</tr>
						<tr>
							<td class="p-3 sm:p-4 font-medium">Vue 4 SFC & MDC Export</td>
							<td class="p-3 sm:p-4 text-center text-neutral-400">-</td>
							<td class="p-3 sm:p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
							<td class="p-3 sm:p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
						</tr>
						<tr>
							<td class="p-3 sm:p-4 font-medium">Custom Theme Engine</td>
							<td class="p-3 sm:p-4 text-center text-neutral-400">-</td>
							<td class="p-3 sm:p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
							<td class="p-3 sm:p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- FALLBACK -->
		<div
			v-else
			class="p-4 border border-dashed border-amber-500/50 rounded bg-amber-50/10 text-amber-500 text-xs"
		>
			Unknown component: {{ element.type }}
		</div>
	</div>
</template>

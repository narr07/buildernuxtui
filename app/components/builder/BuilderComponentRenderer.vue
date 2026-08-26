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
	selectElement,
	hoverElement,
	removeElement,
	duplicateElement,
	moveElement,
	addElement,
	moveElementTo,
	findElementAndParent
} = useBuilder()

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
				styleClasses
			]"
		>
			{{ element.props.text || 'Paragraph text content' }}
		</p>

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

		<!-- UINPUT -->
		<UInput
			v-else-if="element.type === 'input'"
			:placeholder="element.props.placeholder"
			:icon="element.props.icon"
			:color="element.props.color || 'primary'"
			:variant="element.props.variant || 'outline'"
			:size="element.props.size || 'md'"
			:class="styleClasses"
		/>

		<!-- UTEXTAREA -->
		<UTextarea
			v-else-if="element.type === 'textarea'"
			:placeholder="element.props.placeholder"
			:rows="element.props.rows || 4"
			:variant="element.props.variant || 'outline'"
			:class="styleClasses"
		/>

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

		<!-- HERO SECTION -->
		<section
			v-else-if="element.type === 'hero-section'"
			:class="['relative overflow-hidden', styleClasses]"
		>
			<div
				class="max-w-4xl flex flex-col gap-6"
				:class="element.props.align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'"
			>
				<UBadge
					v-if="element.props.badgeText"
					variant="subtle"
					size="lg"
					icon="lucide:sparkles"
					:label="element.props.badgeText"
				/>
				<h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
					{{ element.props.title || 'Hero Title' }}
				</h1>
				<p class="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl">
					{{ element.props.subtitle || 'Hero Subtitle Description' }}
				</p>
				<div class="flex flex-wrap gap-4 pt-2">
					<UButton
						v-if="element.props.primaryBtnText"
						size="xl"
						color="primary"
						:label="element.props.primaryBtnText"
						:icon="element.props.primaryBtnIcon || 'lucide:arrow-right'"
						trailing
					/>
					<UButton
						v-if="element.props.secondaryBtnText"
						size="xl"
						color="neutral"
						variant="outline"
						:label="element.props.secondaryBtnText"
						:icon="element.props.secondaryBtnIcon || 'lucide:book-open'"
					/>
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

		<!-- FALLBACK -->
		<div
			v-else
			class="p-4 border border-dashed border-amber-500/50 rounded bg-amber-50/10 text-amber-500 text-xs"
		>
			Unknown component: {{ element.type }}
		</div>
	</div>
</template>

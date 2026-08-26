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

		<!-- UPageHero SECTION -->
		<section
			v-else-if="element.type === 'hero-section'"
			:class="[
				'relative overflow-hidden py-16 px-6 lg:py-24',
				styleClasses
			]"
		>
			<div
				class="max-w-7xl mx-auto flex flex-col gap-10"
				:class="[
					element.props.orientation === 'horizontal'
						? (element.props.reverse ? 'lg:flex-row-reverse lg:items-center lg:justify-between' : 'lg:flex-row lg:items-center lg:justify-between')
						: (element.props.reverse ? 'flex-col-reverse items-center text-center' : 'items-center text-center')
				]"
			>
				<!-- Main Text Content & Headline & Links -->
				<div
					class="flex flex-col gap-5"
					:class="[
						element.props.orientation === 'horizontal'
							? 'lg:max-w-xl text-left items-start'
							: 'max-w-3xl items-center text-center mx-auto'
					]"
				>
					<!-- Headline Slot / Badge -->
					<div v-if="element.props.headline || element.props.badgeText">
						<UBadge
							variant="subtle"
							size="lg"
							icon="lucide:sparkles"
							:label="element.props.headline || element.props.badgeText"
							class="font-semibold"
						/>
					</div>

					<!-- Title -->
					<h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
						{{ element.props.title || 'Ultimate Vue UI Library' }}
					</h1>

					<!-- Description -->
					<p class="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
						{{ element.props.description || element.props.subtitle || 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible components.' }}
					</p>

					<!-- Links / Action Buttons -->
					<div class="flex flex-wrap items-center gap-3.5 pt-2">
						<UButton
							v-if="element.props.primaryBtnText"
							size="xl"
							:color="element.props.primaryBtnColor || 'primary'"
							:variant="element.props.primaryBtnVariant || 'solid'"
							:label="element.props.primaryBtnText"
							:icon="element.props.primaryBtnIcon || 'lucide:arrow-right'"
							trailing
						/>
						<UButton
							v-if="element.props.secondaryBtnText"
							size="xl"
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
					:class="element.props.orientation === 'horizontal' ? 'lg:max-w-xl' : 'max-w-4xl mx-auto w-full mt-6'"
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
			:class="['border-b border-neutral-200 dark:border-neutral-800 pb-8 text-left', styleClasses]"
		>
			<div class="flex items-center gap-2 mb-2">
				<UBadge v-if="element.props.headline" color="primary" variant="subtle" size="sm" :label="element.props.headline" />
				<UIcon v-if="element.props.icon" :name="element.props.icon" class="w-5 h-5 text-primary" />
			</div>
			<h1 class="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3">
				{{ element.props.title || 'Page Title' }}
			</h1>
			<p class="text-base text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed mb-6">
				{{ element.props.description || '' }}
			</p>
			<div v-if="element.props.primaryBtnText || element.props.secondaryBtnText" class="flex items-center gap-3">
				<UButton v-if="element.props.primaryBtnText" color="primary" size="md" :label="element.props.primaryBtnText" />
				<UButton v-if="element.props.secondaryBtnText" color="neutral" variant="outline" size="md" :label="element.props.secondaryBtnText" />
			</div>
		</div>

		<!-- UPageBody -->
		<div
			v-else-if="element.type === 'page-body'"
			:class="[
				'w-full',
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
				'grid gap-6',
				element.props.columns === '2' ? 'grid-cols-1 md:grid-cols-2' :
				element.props.columns === '4' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
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
			:class="['columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6', styleClasses]"
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
				'group relative hover:shadow-xl transition-all duration-300',
				element.props.highlight ? 'ring-1 ring-primary-500/30' : '',
				styleClasses
			]"
		>
			<div
				class="flex flex-col gap-4"
				:class="element.props.orientation === 'horizontal' ? 'md:flex-row md:items-center' : ''"
			>
				<div
					v-if="element.props.icon"
					class="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/60 flex items-center justify-center text-primary shrink-0 ring-1 ring-primary/20"
				>
					<UIcon :name="element.props.icon" class="w-6 h-6" />
				</div>
				<div class="flex-1 text-left">
					<h3 class="text-base font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors mb-1.5">
						{{ element.props.title || 'Card Title' }}
					</h3>
					<p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
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
				'flex gap-3 text-left',
				element.props.orientation === 'vertical' ? 'flex-col items-start' : 'items-start',
				styleClasses
			]"
		>
			<div class="p-2 rounded-lg bg-primary-50 dark:bg-primary-950/60 text-primary shrink-0 ring-1 ring-primary/20">
				<UIcon :name="element.props.icon || 'lucide:sparkles'" class="w-5 h-5" />
			</div>
			<div>
				<h4 class="text-sm font-bold text-neutral-900 dark:text-white mb-1">{{ element.props.title || 'Feature' }}</h4>
				<p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{{ element.props.description || '' }}</p>
			</div>
		</div>

		<!-- UPageSection -->
		<section
			v-else-if="element.type === 'page-section'"
			:class="['relative py-16 px-6 lg:py-24', styleClasses]"
		>
			<div
				class="max-w-7xl mx-auto flex flex-col gap-10"
				:class="element.props.orientation === 'horizontal' ? (element.props.reverse ? 'lg:flex-row-reverse lg:items-center' : 'lg:flex-row lg:items-center') : 'text-center items-center'"
			>
				<div
					class="flex flex-col gap-4"
					:class="element.props.orientation === 'horizontal' ? 'lg:max-w-xl text-left items-start' : 'max-w-3xl mx-auto items-center text-center'"
				>
					<UBadge v-if="element.props.headline" color="primary" variant="subtle" size="md" :label="element.props.headline" />
					<UIcon v-if="element.props.icon" :name="element.props.icon" class="w-8 h-8 text-primary" />
					<h2 class="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
						{{ element.props.title || 'Section Title' }}
					</h2>
					<p class="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
						{{ element.props.description || '' }}
					</p>
					<div v-if="element.props.primaryBtnText || element.props.secondaryBtnText" class="flex flex-wrap items-center gap-3 pt-2">
						<UButton v-if="element.props.primaryBtnText" color="primary" size="lg" :label="element.props.primaryBtnText" />
						<UButton v-if="element.props.secondaryBtnText" color="neutral" variant="outline" size="lg" :label="element.props.secondaryBtnText" />
					</div>
				</div>

				<div
					v-if="(element.children && element.children.length > 0) || element.props.showIllustration || !previewMode"
					class="w-full flex-1"
					:class="element.props.orientation === 'horizontal' ? 'lg:max-w-xl' : 'max-w-5xl mx-auto w-full mt-6'"
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
				'relative py-16 px-6 rounded-3xl overflow-hidden text-center my-6',
				element.props.variant === 'solid' ? 'bg-primary text-inverted' : 'bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800',
				styleClasses
			]"
		>
			<div class="max-w-3xl mx-auto flex flex-col items-center gap-4">
				<UBadge v-if="element.props.headline" color="primary" variant="subtle" size="sm" :label="element.props.headline" />
				<h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight">{{ element.props.title || 'CTA Title' }}</h2>
				<p class="text-base text-neutral-500 dark:text-neutral-400 max-w-xl">{{ element.props.description || '' }}</p>
				<div class="flex flex-wrap items-center gap-3 pt-2">
					<UButton v-if="element.props.primaryBtnText" color="primary" size="xl" :label="element.props.primaryBtnText" />
					<UButton v-if="element.props.secondaryBtnText" color="neutral" variant="outline" size="xl" :label="element.props.secondaryBtnText" />
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
			:class="['py-12 px-6 text-center border-y border-neutral-100 dark:border-neutral-900', styleClasses]"
		>
			<p class="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-8">{{ element.props.title || 'Trusted by leaders' }}</p>
			<div class="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all">
				<div
					v-for="(logo, lIdx) in (element.props.logos || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
					:key="lIdx"
					class="font-extrabold text-lg tracking-tight text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5"
				>
					<UIcon name="lucide:sparkles" class="w-4 h-4 text-primary" />
					<span>{{ logo }}</span>
				</div>
			</div>
		</section>

		<!-- UPageList -->
		<div
			v-else-if="element.type === 'page-list'"
			:class="['text-left max-w-4xl mx-auto py-10 space-y-4', styleClasses]"
		>
			<h3 class="text-2xl font-bold text-neutral-900 dark:text-white">{{ element.props.title || 'Frequently Asked Questions' }}</h3>
			<p class="text-sm text-neutral-500 mb-6">{{ element.props.description || '' }}</p>
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
			:class="['text-left p-4 space-y-3', styleClasses]"
		>
			<h4 class="text-xs font-bold text-neutral-400 uppercase tracking-wider">{{ element.props.title || 'Resources' }}</h4>
			<ul class="space-y-2 text-xs">
				<li
					v-for="(link, lIdx) in (element.props.links || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
					:key="lIdx"
					class="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-primary cursor-pointer transition-colors"
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
				'relative flex flex-col justify-between h-full transition-all text-left',
				element.props.highlight ? 'ring-2 ring-primary shadow-2xl shadow-primary/10' : '',
				styleClasses
			]"
		>
			<div>
				<div class="flex items-center justify-between mb-3">
					<h3 class="text-xl font-bold text-neutral-900 dark:text-white">{{ element.props.title || 'Plan' }}</h3>
					<UBadge v-if="element.props.badge" color="primary" variant="subtle" size="sm" :label="element.props.badge" />
				</div>
				<p class="text-xs text-neutral-500 mb-6 leading-relaxed">{{ element.props.description || '' }}</p>
				<div class="flex items-baseline gap-1 mb-6">
					<span class="text-4xl font-extrabold text-neutral-900 dark:text-white">{{ element.props.price || '$0' }}</span>
					<span class="text-sm text-neutral-400">{{ element.props.billingPeriod || '/month' }}</span>
				</div>
				<ul class="space-y-3 mb-8">
					<li
						v-for="(feat, fIdx) in (element.props.features || '').split(',').map((s: string) => s.trim()).filter(Boolean)"
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
				:color="element.props.highlight ? 'primary' : 'neutral'"
				:variant="element.props.highlight ? 'solid' : 'outline'"
				:label="element.props.buttonText || 'Subscribe'"
			/>
		</UCard>

		<!-- UPricingPlans Container -->
		<div
			v-else-if="element.type === 'pricing-plans'"
			:class="['grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-12 items-stretch', styleClasses]"
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
			:class="['max-w-6xl mx-auto py-12 text-left space-y-6', styleClasses]"
		>
			<div class="text-center max-w-2xl mx-auto mb-8">
				<h2 class="text-3xl font-extrabold text-neutral-900 dark:text-white">{{ element.props.title || 'Compare Features' }}</h2>
				<p class="text-xs text-neutral-500 mt-2">{{ element.props.description || '' }}</p>
			</div>
			<div class="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm">
				<table class="w-full text-xs text-left">
					<thead class="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
						<tr>
							<th class="p-4 font-bold">Feature</th>
							<th class="p-4 font-bold text-center">Starter</th>
							<th class="p-4 font-bold text-center text-primary">Pro</th>
							<th class="p-4 font-bold text-center">Enterprise</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-neutral-200 dark:divide-neutral-800">
						<tr>
							<td class="p-4 font-medium">Visual Builder Canvas</td>
							<td class="p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
							<td class="p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
							<td class="p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
						</tr>
						<tr>
							<td class="p-4 font-medium">Vue 4 SFC & MDC Export</td>
							<td class="p-4 text-center text-neutral-400">-</td>
							<td class="p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
							<td class="p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
						</tr>
						<tr>
							<td class="p-4 font-medium">Custom Theme Engine</td>
							<td class="p-4 text-center text-neutral-400">-</td>
							<td class="p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
							<td class="p-4 text-center"><UIcon name="lucide:check" class="w-4 h-4 text-primary inline" /></td>
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

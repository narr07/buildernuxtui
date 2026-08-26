<script setup lang="ts">
import { useBuilder } from '~/composables/useBuilder'

const {
	elements,
	selectedElementId,
	viewport,
	zoom,
	previewMode,
	showGrid,
	selectElement,
	addElement,
	moveElementTo,
	loadTemplate
} = useBuilder()

const isCanvasDragOver = ref(false)

const viewportClass = computed(() => {
	switch (viewport.value) {
		case 'mobile':
			return 'w-[375px] my-6 rounded-2xl shadow-2xl ring-1 ring-neutral-300 dark:ring-neutral-700 min-h-[667px]'
		case 'tablet':
			return 'w-[768px] my-6 rounded-2xl shadow-2xl ring-1 ring-neutral-300 dark:ring-neutral-700 min-h-[800px]'
		case 'laptop':
			return 'w-[1024px] my-6 rounded-xl shadow-2xl ring-1 ring-neutral-300 dark:ring-neutral-700 min-h-[800px]'
		case 'desktop':
		default:
			return 'w-full min-h-full'
	}
})

const handleCanvasClick = (e: MouseEvent) => {
	if (previewMode.value) return
	selectElement(null)
}

const handleCanvasDragOver = (e: DragEvent) => {
	if (previewMode.value) return
	e.preventDefault()
	isCanvasDragOver.value = true
}

const handleCanvasDragLeave = () => {
	isCanvasDragOver.value = false
}

const handleCanvasDrop = (e: DragEvent) => {
	if (previewMode.value) return
	e.preventDefault()
	isCanvasDragOver.value = false

	const rawData = e.dataTransfer?.getData('application/json')
	if (!rawData) return

	try {
		const payload = JSON.parse(rawData)
		if (payload.isExisting) {
			moveElementTo(payload.id, null, elements.value.length)
		} else if (payload.isNew && payload.type) {
			addElement(payload.type, null)
		}
	} catch (err) {
		console.error('Canvas root drop error', err)
	}
}
</script>

<template>
	<main
		class="flex-1 overflow-auto relative bg-neutral-100/90 dark:bg-neutral-950 flex flex-col items-center select-none"
		:class="[
			showGrid && !previewMode ? 'builder-canvas-grid' : '',
			previewMode ? 'p-0' : 'p-4 md:p-8'
		]"
		@click="handleCanvasClick"
		@dragover="handleCanvasDragOver"
		@dragleave="handleCanvasDragLeave"
		@drop="handleCanvasDrop"
	>
		<!-- Device Viewport Container Frame -->
		<div
			class="bg-white dark:bg-neutral-900 transition-all duration-200 overflow-hidden flex flex-col relative"
			:class="[
				viewportClass,
				isCanvasDragOver ? 'ring-2 ring-primary-500 ring-offset-2' : ''
			]"
			@click.stop
		>
			<!-- Device Bar Header (when mobile/tablet/laptop simulation) -->
			<div
				v-if="viewport !== 'desktop' && !previewMode"
				class="h-6 bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-300 dark:border-neutral-700 flex items-center justify-between px-3 text-[10px] text-neutral-500 font-mono select-none"
			>
				<span class="flex items-center gap-1.5">
					<span class="w-2 h-2 rounded-full bg-red-400" />
					<span class="w-2 h-2 rounded-full bg-amber-400" />
					<span class="w-2 h-2 rounded-full bg-green-400" />
				</span>
				<span>{{ viewport.toUpperCase() }} PREVIEW</span>
				<span>100%</span>
			</div>

			<!-- Canvas Elements List -->
			<div class="flex-1 flex flex-col min-h-[600px]">
				<template v-if="elements.length > 0">
					<BuilderComponentRenderer
						v-for="(el, idx) in elements"
						:key="el.id"
						:element="el"
						:parent-id="null"
						:index="idx"
					/>
				</template>

				<!-- Empty State with Quick Starters -->
				<div
					v-else
					class="flex-1 flex flex-col items-center justify-center p-12 text-center"
				>
					<div class="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-950/60 flex items-center justify-center text-primary-500 mb-4 ring-1 ring-primary/20">
						<UIcon name="lucide:layout" class="w-8 h-8" />
					</div>
					<h3 class="text-base font-bold text-neutral-900 dark:text-white">Your Canvas is Ready</h3>
					<p class="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm mt-1 mb-6 leading-relaxed">
						Drag components from the sidebar or choose a pre-built template to start crafting your website.
					</p>

					<div class="flex flex-wrap items-center justify-center gap-2">
						<UButton
							size="sm"
							color="primary"
							variant="solid"
							icon="lucide:sparkles"
							label="Load SaaS Template"
							@click="loadTemplate('saas-landing')"
						/>
						<UButton
							size="sm"
							color="neutral"
							variant="outline"
							icon="lucide:credit-card"
							label="Load Pricing Page"
							@click="loadTemplate('pricing-page')"
						/>
						<UButton
							size="sm"
							color="neutral"
							variant="ghost"
							icon="lucide:plus"
							label="Add Hero Section"
							@click="addElement('hero-section')"
						/>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

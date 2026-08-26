<script setup lang="ts">
const {
	elements,
	viewport,
	previewMode,
	showGrid,
	selectElement,
	addElement,
	moveElementTo,
	loadTemplate,
} = useBuilder()

const isCanvasDragOver = ref(false)
const isBottomDragOver = ref(false)

const viewportClass = computed(() => {
	switch (viewport.value) {
		case 'mobile':
			return 'w-[375px] max-w-full my-6 rounded-3xl shadow-2xl ring-1 ring-neutral-300 dark:ring-neutral-700 min-h-[667px] overflow-x-hidden'
		case 'tablet':
			return 'w-[768px] max-w-full my-6 rounded-2xl shadow-2xl ring-1 ring-neutral-300 dark:ring-neutral-700 min-h-[800px] overflow-x-hidden'
		case 'laptop':
			return 'w-[1024px] max-w-full my-6 rounded-xl shadow-2xl ring-1 ring-neutral-300 dark:ring-neutral-700 min-h-[800px] overflow-x-hidden'
		case 'desktop':
		default:
			return 'w-full min-h-full overflow-x-hidden'
	}
})

const handleCanvasClick = () => {
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
		}
		else if (payload.isNew && payload.type) {
			addElement(payload.type, null)
		}
	}
	catch (err) {
		console.error('Canvas root drop error', err)
	}
}

const handleBottomDrop = (e: DragEvent) => {
	if (previewMode.value) return
	e.preventDefault()
	e.stopPropagation()
	isBottomDragOver.value = false

	const rawData = e.dataTransfer?.getData('application/json')
	if (!rawData) return

	try {
		const payload = JSON.parse(rawData)
		if (payload.isExisting) {
			moveElementTo(payload.id, null, elements.value.length)
		}
		else if (payload.isNew && payload.type) {
			addElement(payload.type, null)
		}
	}
	catch (err) {
		console.error('Bottom drop error', err)
	}
}
</script>

<template>
	<main
		class="flex-1 w-full h-full overflow-y-auto overflow-x-hidden relative bg-neutral-100/90 dark:bg-neutral-950 flex flex-col items-center select-none"
		:class="[
			showGrid && !previewMode ? 'builder-canvas-grid' : '',
			previewMode ? 'p-0' : 'p-4 md:p-8 pb-48',
		]"
		@click="handleCanvasClick"
		@dragover="handleCanvasDragOver"
		@dragleave="handleCanvasDragLeave"
		@drop="handleCanvasDrop"
	>
		<!-- Device Viewport Container Frame -->
		<div
			class="bg-white dark:bg-neutral-900 transition-all duration-200 flex flex-col relative shrink-0"
			:class="[
				viewportClass,
				isCanvasDragOver ? 'ring-2 ring-primary-500 ring-offset-2' : '',
			]"
			@click.stop
		>
			<!-- Device Bar Header (when mobile/tablet/laptop simulation) -->
			<div
				v-if="viewport !== 'desktop' && !previewMode"
				class="h-7 bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-300 dark:border-neutral-700 flex items-center justify-between px-3 text-[10px] text-neutral-500 font-mono select-none shrink-0"
			>
				<span class="flex items-center gap-1.5">
					<span class="w-2.5 h-2.5 rounded-full bg-red-400" />
					<span class="w-2.5 h-2.5 rounded-full bg-amber-400" />
					<span class="w-2.5 h-2.5 rounded-full bg-green-400" />
				</span>
				<span class="font-bold">{{ viewport.toUpperCase() }} PREVIEW</span>
				<span>100%</span>
			</div>

			<!-- Canvas Elements List -->
			<div class="flex-1 flex flex-col min-h-125">
				<template v-if="elements.length > 0">
					<BuilderComponentRenderer
						v-for="(el, idx) in elements"
						:key="el.id"
						:element="el"
						:parent-id="null"
						:index="idx"
					/>

					<!-- Interactive Bottom Drop Zone & Quick Inserter -->
					<div
						v-if="!previewMode"
						class="m-6 p-6 border-2 border-dashed rounded-xl text-center transition-all flex flex-col items-center justify-center gap-3 select-none"
						:class="isBottomDragOver
							? 'border-primary-500 bg-primary-50/40 dark:bg-primary-950/40 scale-[1.01]'
							: 'border-neutral-300 dark:border-neutral-700/80 bg-neutral-50/60 dark:bg-neutral-900/40 hover:border-primary-500/60'"
						@dragover.prevent="isBottomDragOver = true"
						@dragleave="isBottomDragOver = false"
						@drop="handleBottomDrop"
					>
						<div class="flex items-center gap-2 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
							<UIcon
								name="lucide:plus-circle"
								class="w-4 h-4 text-primary-500"
							/>
							<span>Drag components here to add at the bottom</span>
						</div>

						<div class="flex flex-wrap items-center justify-center gap-2 pt-1">
							<UButton
								size="xs"
								color="neutral"
								variant="outline"
								icon="lucide:box-select"
								label="Container"
								@click="addElement('container')"
							/>
							<UButton
								size="xs"
								color="neutral"
								variant="outline"
								icon="lucide:grid-2x2"
								label="Grid"
								@click="addElement('grid')"
							/>
							<UButton
								size="xs"
								color="neutral"
								variant="outline"
								icon="lucide:panel-top"
								label="Card"
								@click="addElement('card')"
							/>
							<UButton
								size="xs"
								color="neutral"
								variant="outline"
								icon="lucide:layers"
								label="Feature Card"
								@click="addElement('feature-card')"
							/>
							<UButton
								size="xs"
								color="neutral"
								variant="outline"
								icon="lucide:credit-card"
								label="Pricing Plan"
								@click="addElement('pricing-card')"
							/>
							<UButton
								size="xs"
								color="neutral"
								variant="outline"
								icon="lucide:panel-bottom"
								label="Footer"
								@click="addElement('footer-section')"
							/>
						</div>
					</div>
				</template>

				<!-- Empty State with Quick Starters -->
				<div
					v-else
					class="flex-1 flex flex-col items-center justify-center p-12 text-center"
				>
					<div class="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-950/60 flex items-center justify-center text-primary-500 mb-4 ring-1 ring-primary/20">
						<UIcon
							name="lucide:layout"
							class="w-8 h-8"
						/>
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

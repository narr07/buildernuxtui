<script setup lang="ts">
const emit = defineEmits<{
	'open-export': []
	'open-templates': []
}>()

const {
	viewport,
	previewMode,
	showGrid,
	canUndo,
	canRedo,
	undo,
	redo,
	clearCanvas,
} = useBuilder()

const colorMode = useColorMode()

const toggleColorMode = () => {
	colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const viewports: { mode: ViewportMode, icon: string, label: string }[] = [
	{ mode: 'desktop', icon: 'lucide:monitor', label: 'Desktop (100%)' },
	{ mode: 'laptop', icon: 'lucide:laptop', label: 'Laptop (1024px)' },
	{ mode: 'tablet', icon: 'lucide:tablet', label: 'Tablet (768px)' },
	{ mode: 'mobile', icon: 'lucide:smartphone', label: 'Mobile (375px)' },
]

const handleClear = () => {
	if (confirm('Are you sure you want to clear all canvas elements?')) {
		clearCanvas()
	}
}
</script>

<template>
	<header class="h-14 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur px-4 flex items-center justify-between shrink-0 z-40">
		<!-- Left: Brand, Sidebar Toggle & Template Picker -->
		<div class="flex items-center gap-2">
			<!-- Toggle Left Sidebar Button -->

			<div class="flex items-center gap-2.5">
				<img
					src="/logo.svg"
					alt="Builder Nuxt UI Logo"
					class="h-8 w-8 object-contain"
				/>
				<div>
					<span class="font-bold text-sm tracking-tight text-neutral-900 dark:text-white flex items-center gap-1.5">
						Builder <span class="text-primary-500">Nuxt UI</span>
						<UBadge
							color="primary"
							variant="subtle"
							size="xs"
							label="v4"
						/>
					</span>
				</div>
			</div>

			<div class="h-5 w-px bg-neutral-200 dark:border-neutral-700 mx-1 hidden sm:block" />

			<UButton
				color="neutral"
				variant="ghost"
				size="sm"
				icon="lucide:layout-template"
				label="Templates"
				class="hidden sm:inline-flex"
				@click="emit('open-templates')"
			/>
		</div>

		<!-- Center: Viewport & Undo/Redo & Zoom Controls -->
		<div class="flex items-center gap-2">
			<!-- Device Viewport Switcher -->
			<div class="flex items-center bg-neutral-100 dark:bg-neutral-800 p-0.5 rounded-lg border border-neutral-200 dark:border-neutral-700/60">
				<button
					v-for="v in viewports"
					:key="v.mode"
					:title="v.label"
					class="p-1.5 rounded-md transition-all text-xs"
					:class="viewport === v.mode ? 'bg-white dark:bg-neutral-700 text-primary-500 shadow-xs' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'"
					@click="viewport = v.mode"
				>
					<UIcon
						:name="v.icon"
						class="w-4 h-4"
					/>
				</button>
			</div>

			<div class="h-4 w-px bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

			<!-- Undo / Redo -->
			<div class="flex items-center gap-0.5">
				<UButton
					color="neutral"
					variant="ghost"
					size="sm"
					icon="lucide:undo"
					:disabled="!canUndo"
					title="Undo (Ctrl+Z)"
					@click="undo"
				/>
				<UButton
					color="neutral"
					variant="ghost"
					size="sm"
					icon="lucide:redo"
					:disabled="!canRedo"
					title="Redo (Ctrl+Y)"
					@click="redo"
				/>
			</div>

			<div class="h-4 w-px bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

			<!-- Grid Toggle -->
			<UButton
				color="neutral"
				:variant="showGrid ? 'subtle' : 'ghost'"
				size="sm"
				icon="lucide:grid-3x3"
				title="Toggle Canvas Grid"
				class="hidden md:inline-flex"
				@click="showGrid = !showGrid"
			/>
		</div>

		<!-- Right: Theme Customizer, Right Inspector Toggle, Preview, Clear, Theme, Export -->
		<div class="flex items-center gap-2">
			<!-- Official Nuxt UI ThemePicker Popover -->
			<ThemePicker />

			<UButton
				:color="previewMode ? 'primary' : 'neutral'"
				:variant="previewMode ? 'solid' : 'outline'"
				size="sm"
				:icon="previewMode ? 'lucide:pencil' : 'lucide:eye'"
				:label="previewMode ? 'Edit Mode' : 'Preview'"
				@click="previewMode = !previewMode"
			/>

			<UButton
				color="neutral"
				variant="ghost"
				size="sm"
				icon="lucide:trash-2"
				title="Clear Canvas"
				class="text-neutral-500 hover:text-red-500"
				@click="handleClear"
			/>

			<UButton
				color="neutral"
				variant="ghost"
				size="sm"
				:icon="colorMode.value === 'dark' ? 'lucide:moon' : 'lucide:sun'"
				title="Toggle Dark / Light Theme"
				@click="toggleColorMode"
			/>

			<UButton
				color="primary"
				variant="solid"
				size="sm"
				icon="lucide:code"
				label="Export Code"
				@click="emit('open-export')"
			/>
		</div>
	</header>
</template>

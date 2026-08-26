<script setup lang="ts">
useSeoMeta({
	title: 'Builder Nuxt UI - Visual Drag & Drop Builder for Nuxt 4 & Nuxt UI',
	description: 'Create responsive, high-converting websites and dashboards visually with Nuxt UI v4 components and export clean Vue SFC code.',
	ogTitle: 'Builder Nuxt UI - Visual Drag & Drop Builder for Nuxt 4 & Nuxt UI',
	ogDescription: 'Create responsive, high-converting websites and dashboards visually with Nuxt UI v4 components and export clean Vue SFC code.',
	ogUrl: 'https://buildernuxtui.permadi.dev/',
	ogImage: 'https://buildernuxtui.permadi.dev/icon-512.png',
	twitterCard: 'summary_large_image',
	twitterTitle: 'Builder Nuxt UI',
	twitterDescription: 'Visual Drag & Drop Page Builder for Nuxt UI v4 and Nuxt Content',
	twitterImage: 'https://buildernuxtui.permadi.dev/icon-512.png',
})

const {
	selectedElementId,
	previewMode,
	showLeftSidebar,
	showRightSidebar,
	undo,
	redo,
	removeElement,
	selectElement,
} = useBuilder()

// Initialize live theme
useTheme()

const showExportModal = ref(false)
const showTemplateModal = ref(false)

// Global keyboard shortcuts (Ctrl+Z, Ctrl+Y, Delete, Esc)
onMounted(() => {
	const handleKeyDown = (e: KeyboardEvent) => {
		// Ignore shortcuts when typing inside form inputs
		const target = e.target as HTMLElement
		if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
			return
		}

		if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
			if (e.shiftKey) {
				e.preventDefault()
				redo()
			}
			else {
				e.preventDefault()
				undo()
			}
		}
		else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
			e.preventDefault()
			redo()
		}
		else if ((e.key === 'Delete' || e.key === 'Backspace') && selectedElementId.value) {
			e.preventDefault()
			removeElement(selectedElementId.value)
		}
		else if (e.key === 'Escape') {
			selectElement(null)
		}
	}

	window.addEventListener('keydown', handleKeyDown)
	onUnmounted(() => {
		window.removeEventListener('keydown', handleKeyDown)
	})
})
</script>

<template>
	<div class="h-screen w-screen flex flex-col overflow-hidden bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased">
		<!-- Header Top Bar -->
		<BuilderHeader
			@open-export="showExportModal = true"
			@open-templates="showTemplateModal = true"
			@open-theme="showThemeModal = true"
		/>

		<!-- Studio Main Workspace Area -->
		<div class="flex-1 flex overflow-hidden min-h-0 relative">
			<!-- Left Floating Reopen Button (when hidden) -->
			<button
				v-if="!showLeftSidebar && !previewMode"
				title="Show Left Sidebar"
				class="absolute left-2.5 top-3 z-30 p-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md text-neutral-600 dark:text-neutral-300 hover:text-primary-500 hover:border-primary-500/50 transition-all flex items-center gap-1 text-xs"
				@click="showLeftSidebar = true"
			>
				<UIcon
					name="lucide:panel-left-open"
					class="w-4 h-4 text-primary-500"
				/>
			</button>

			<!-- Left Component Palette & Hierarchy Dock -->
			<BuilderSidebar
				v-show="!previewMode && showLeftSidebar"
				@open-templates-modal="showTemplateModal = true"
			/>

			<!-- Center Interactive Canvas Viewport -->
			<BuilderCanvas />

			<!-- Right Floating Reopen Button (when hidden) -->
			<button
				v-if="!showRightSidebar && !previewMode"
				title="Show Right Inspector"
				class="absolute right-2.5 top-3 z-30 p-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md text-neutral-600 dark:text-neutral-300 hover:text-primary-500 hover:border-primary-500/50 transition-all flex items-center gap-1 text-xs"
				@click="showRightSidebar = true"
			>
				<UIcon
					name="lucide:panel-right-open"
					class="w-4 h-4 text-primary-500"
				/>
			</button>

			<!-- Right Properties & Styling Inspector Dock -->
			<BuilderInspector
				v-show="!previewMode && showRightSidebar"
			/>
		</div>

		<!-- Export Code & Nuxt Content (.md) Modal -->
		<ExportModal
			v-model="showExportModal"
		/>

		<!-- Template Picker Modal -->
		<TemplatePicker
			v-model="showTemplateModal"
		/>
	</div>
</template>

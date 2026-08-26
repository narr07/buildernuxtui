<script setup lang="ts">
import { useBuilder } from '~/composables/useBuilder'
import BuilderHeader from '~/components/builder/BuilderHeader.vue'
import BuilderSidebar from '~/components/builder/BuilderSidebar.vue'
import BuilderCanvas from '~/components/builder/BuilderCanvas.vue'
import BuilderInspector from '~/components/builder/BuilderInspector.vue'
import ExportModal from '~/components/builder/ExportModal.vue'
import TemplatePicker from '~/components/builder/TemplatePicker.vue'

useSeoMeta({
	title: 'NuxtUI Studio - Visual Drag & Drop Builder for Nuxt 4 & Nuxt UI',
	description: 'Create responsive, high-converting websites and dashboards visually with Nuxt UI v4 components and export clean Vue SFC code.'
})

const {
	selectedElementId,
	previewMode,
	undo,
	redo,
	removeElement,
	selectElement
} = useBuilder()

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
			} else {
				e.preventDefault()
				undo()
			}
		} else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
			e.preventDefault()
			redo()
		} else if ((e.key === 'Delete' || e.key === 'Backspace') && selectedElementId.value) {
			e.preventDefault()
			removeElement(selectedElementId.value)
		} else if (e.key === 'Escape') {
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
		/>

		<!-- Studio Main Workspace Area -->
		<div class="flex-1 flex overflow-hidden min-h-0 relative">
			<!-- Left Component Palette & Hierarchy Dock -->
			<BuilderSidebar
				v-show="!previewMode"
				@open-templates-modal="showTemplateModal = true"
			/>

			<!-- Center Interactive Canvas Viewport -->
			<BuilderCanvas />

			<!-- Right Properties & Styling Inspector Dock -->
			<BuilderInspector
				v-show="!previewMode"
			/>
		</div>

		<!-- Export Code & JSON Schema Modal -->
		<ExportModal
			v-model="showExportModal"
		/>

		<!-- Template Picker Modal -->
		<TemplatePicker
			v-model="showTemplateModal"
		/>
	</div>
</template>

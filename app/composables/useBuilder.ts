import type { BuilderElement, BuilderElementStyles, ViewportMode } from '~/types/builder'
import { COMPONENT_REGISTRY } from '~/composables/useComponentRegistry'
import { TEMPLATE_PRESETS } from '~/composables/useTemplates'

const STORAGE_KEY = 'nuxtui_builder_elements_v1'

export const useBuilder = () => {
	const elements = useState<BuilderElement[]>('builder-elements', () => [])
	const selectedElementId = useState<string | null>('builder-selected-id', () => null)
	const hoveredElementId = useState<string | null>('builder-hovered-id', () => null)
	const viewport = useState<ViewportMode>('builder-viewport', () => 'desktop')
	const zoom = useState<number>('builder-zoom', () => 100)
	const previewMode = useState<boolean>('builder-preview-mode', () => false)
	const showLayers = useState<boolean>('builder-show-layers', () => false)
	const showGrid = useState<boolean>('builder-show-grid', () => true)
	const showLeftSidebar = useState<boolean>('builder-show-left-sidebar', () => true)
	const showRightSidebar = useState<boolean>('builder-show-right-sidebar', () => true)
	const showExportModal = useState<boolean>('builder-show-export-modal', () => false)
	const showTemplateModal = useState<boolean>('builder-show-template-modal', () => false)

	const toggleLeftSidebar = () => {
		showLeftSidebar.value = !showLeftSidebar.value
	}

	const toggleRightSidebar = () => {
		showRightSidebar.value = !showRightSidebar.value
	}

	// History snapshots for Undo / Redo
	const history = useState<string[]>('builder-history', () => [])
	const historyIndex = useState<number>('builder-history-index', () => -1)

	// Initialize default template if empty
	onMounted(() => {
		if (import.meta.client) {
			const saved = localStorage.getItem(STORAGE_KEY)
			if (saved) {
				try {
					const parsed = JSON.parse(saved)
					if (Array.isArray(parsed) && parsed.length > 0) {
						elements.value = parsed
						pushHistorySnapshot()
						return
					}
				}
				catch (e) {
					console.error('Failed to parse saved state', e)
				}
			}
			// Load default landing template if empty
			if (elements.value.length === 0 && TEMPLATE_PRESETS[0]) {
				elements.value = JSON.parse(JSON.stringify(TEMPLATE_PRESETS[0].elements))
				pushHistorySnapshot()
			}
		}
	})

	// Watch changes to persist in localStorage
	if (import.meta.client) {
		watch(
			elements,
			(val) => {
				try {
					localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
				}
				catch (e) {
					console.error('Failed to save to localStorage', e)
				}
			},
			{ deep: true },
		)
	}

	const pushHistorySnapshot = () => {
		const snapshot = JSON.stringify(elements.value)
		// Truncate future if branched
		if (historyIndex.value < history.value.length - 1) {
			history.value = history.value.slice(0, historyIndex.value + 1)
		}
		history.value.push(snapshot)
		// Keep maximum 40 steps
		if (history.value.length > 40) {
			history.value.shift()
		}
		historyIndex.value = history.value.length - 1
	}

	const undo = () => {
		if (historyIndex.value > 0) {
			historyIndex.value--
			elements.value = JSON.parse(history.value[historyIndex.value])
		}
	}

	const redo = () => {
		if (historyIndex.value < history.value.length - 1) {
			historyIndex.value++
			elements.value = JSON.parse(history.value[historyIndex.value])
		}
	}

	const canUndo = computed(() => historyIndex.value > 0)
	const canRedo = computed(() => historyIndex.value < history.value.length - 1)

	// Helper to find element anywhere in the tree
	const findElement = (id: string, list: BuilderElement[] = elements.value): BuilderElement | null => {
		for (const el of list) {
			if (el.id === id) return el
			if (el.children && el.children.length > 0) {
				const found = findElement(id, el.children)
				if (found) return found
			}
		}
		return null
	}

	// Helper to find element and its direct parent
	const findElementAndParent = (
		id: string,
		list: BuilderElement[] = elements.value,
		parent: BuilderElement | null = null,
	): { element: BuilderElement, parent: BuilderElement | null, index: number, list: BuilderElement[] } | null => {
		for (let i = 0; i < list.length; i++) {
			const el = list[i]
			if (el.id === id) {
				return { element: el, parent, index: i, list }
			}
			if (el.children && el.children.length > 0) {
				const found = findElementAndParent(id, el.children, el)
				if (found) return found
			}
		}
		return null
	}

	const selectedElement = computed(() => {
		if (!selectedElementId.value) return null
		return findElement(selectedElementId.value)
	})

	const selectElement = (id: string | null) => {
		selectedElementId.value = id
	}

	const hoverElement = (id: string | null) => {
		hoveredElementId.value = id
	}

	const createElement = (type: string): BuilderElement => {
		const reg = COMPONENT_REGISTRY.find(c => c.type === type)
		const id = `el-${type}-${Math.random().toString(36).substring(2, 9)}`

		return {
			id,
			type,
			props: JSON.parse(JSON.stringify(reg?.defaultProps || {})),
			styles: JSON.parse(JSON.stringify(reg?.defaultStyles || {})),
			children: reg?.isContainer ? (reg?.defaultChildren ? JSON.parse(JSON.stringify(reg.defaultChildren)) : []) : undefined,
		}
	}

	const addElement = (type: string, parentId: string | null = null, targetIndex?: number): BuilderElement => {
		const newEl = createElement(type)

		if (!parentId) {
			if (targetIndex !== undefined) {
				elements.value.splice(targetIndex, 0, newEl)
			}
			else {
				elements.value.push(newEl)
			}
		}
		else {
			const parent = findElement(parentId)
			if (parent) {
				if (!parent.children) parent.children = []
				if (targetIndex !== undefined) {
					parent.children.splice(targetIndex, 0, newEl)
				}
				else {
					parent.children.push(newEl)
				}
			}
			else {
				elements.value.push(newEl)
			}
		}

		selectedElementId.value = newEl.id
		pushHistorySnapshot()
		return newEl
	}

	const removeElement = (id: string) => {
		const res = findElementAndParent(id)
		if (res) {
			res.list.splice(res.index, 1)
			if (selectedElementId.value === id) {
				selectedElementId.value = res.parent ? res.parent.id : null
			}
			pushHistorySnapshot()
		}
	}

	const duplicateElement = (id: string) => {
		const res = findElementAndParent(id)
		if (res) {
			const clone = JSON.parse(JSON.stringify(res.element)) as BuilderElement
			const assignNewIds = (el: BuilderElement) => {
				el.id = `el-${el.type}-${Math.random().toString(36).substring(2, 9)}`
				if (el.children) {
					el.children.forEach(assignNewIds)
				}
			}
			assignNewIds(clone)
			res.list.splice(res.index + 1, 0, clone)
			selectedElementId.value = clone.id
			pushHistorySnapshot()
		}
	}

	const moveElement = (id: string, direction: 'up' | 'down') => {
		const res = findElementAndParent(id)
		if (res) {
			const newIdx = direction === 'up' ? res.index - 1 : res.index + 1
			if (newIdx >= 0 && newIdx < res.list.length) {
				const [moved] = res.list.splice(res.index, 1)
				res.list.splice(newIdx, 0, moved)
				pushHistorySnapshot()
			}
		}
	}

	const moveElementTo = (elementId: string, targetParentId: string | null, targetIndex: number) => {
		const sourceRes = findElementAndParent(elementId)
		if (!sourceRes) return

		// Prevent dropping into self or child
		const targetIsChild = (targetId: string | null, root: BuilderElement): boolean => {
			if (!targetId) return false
			if (root.id === targetId) return true
			if (root.children) {
				return root.children.some(c => targetIsChild(targetId, c))
			}
			return false
		}

		if (targetParentId && targetIsChild(targetParentId, sourceRes.element)) {
			console.warn('Cannot drop an element into its own descendant')
			return
		}

		// Remove from source
		const [moved] = sourceRes.list.splice(sourceRes.index, 1)

		// Insert into destination
		if (!targetParentId) {
			const safeIndex = Math.min(Math.max(0, targetIndex), elements.value.length)
			elements.value.splice(safeIndex, 0, moved)
		}
		else {
			const targetParent = findElement(targetParentId)
			if (targetParent) {
				if (!targetParent.children) targetParent.children = []
				const safeIndex = Math.min(Math.max(0, targetIndex), targetParent.children.length)
				targetParent.children.splice(safeIndex, 0, moved)
			}
			else {
				elements.value.push(moved)
			}
		}

		selectedElementId.value = moved.id
		pushHistorySnapshot()
	}

	const updateElementProps = (id: string, newProps: Record<string, any>) => {
		const el = findElement(id)
		if (el) {
			el.props = { ...el.props, ...newProps }
			pushHistorySnapshot()
		}
	}

	const updateElementStyles = (id: string, newStyles: Partial<BuilderElementStyles>) => {
		const el = findElement(id)
		if (el) {
			el.styles = { ...el.styles, ...newStyles }
			pushHistorySnapshot()
		}
	}

	const loadTemplate = (templateId: string) => {
		const preset = TEMPLATE_PRESETS.find(t => t.id === templateId)
		if (preset) {
			elements.value = JSON.parse(JSON.stringify(preset.elements))
			selectedElementId.value = null
			pushHistorySnapshot()
		}
	}

	const clearCanvas = () => {
		elements.value = []
		selectedElementId.value = null
		pushHistorySnapshot()
	}

	const importFromJSON = (jsonStr: string) => {
		try {
			const parsed = JSON.parse(jsonStr)
			if (Array.isArray(parsed)) {
				elements.value = parsed
				selectedElementId.value = null
				pushHistorySnapshot()
				return true
			}
		}
		catch (e) {
			console.error('Invalid JSON import', e)
			return false
		}
		return false
	}

	const exportToJSON = (): string => {
		return JSON.stringify(elements.value, null, 2)
	}

	return {
		elements,
		selectedElementId,
		selectedElement,
		hoveredElementId,
		viewport,
		zoom,
		previewMode,
		showLayers,
		showGrid,
		showLeftSidebar,
		showRightSidebar,
		showExportModal,
		showTemplateModal,
		toggleLeftSidebar,
		toggleRightSidebar,
		canUndo,
		canRedo,
		undo,
		redo,
		selectElement,
		hoverElement,
		addElement,
		removeElement,
		duplicateElement,
		moveElement,
		moveElementTo,
		updateElementProps,
		updateElementStyles,
		findElement,
		findElementAndParent,
		loadTemplate,
		clearCanvas,
		importFromJSON,
		exportToJSON,
		pushHistorySnapshot,
	}
}

export type ComponentCategory
	= | 'layout'
		| 'navigation'
		| 'page'
		| 'typography'
		| 'element'
		| 'form'
		| 'data'
		| 'compound'

export interface ComponentPropDefinition {
	name: string
	label: string
	type: 'string' | 'number' | 'boolean' | 'select' | 'color' | 'icon' | 'textarea'
	options?: string[]
	default?: any
	description?: string
}

export interface ComponentDefinition {
	type: string
	name: string
	category: ComponentCategory
	icon: string
	description: string
	isContainer?: boolean
	defaultProps?: Record<string, any>
	defaultStyles?: BuilderElementStyles
	defaultChildren?: BuilderElement[]
	propsSchema?: ComponentPropDefinition[]
	allowedChildren?: string[]
}

export interface BuilderElementStyles {
	padding?: string
	margin?: string
	width?: string
	height?: string
	maxWidth?: string
	textAlign?: 'left' | 'center' | 'right' | 'justify'
	display?: 'block' | 'flex' | 'grid'
	flexDirection?: 'row' | 'row-reverse' | 'col' | 'col-reverse'
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
	alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
	gap?: string
	gridCols?: string
	backgroundColor?: string
	borderRadius?: string
	borderWidth?: string
	borderColor?: string
	shadow?: string
	customClass?: string
}

export interface BuilderElement {
	id: string
	type: string
	props: Record<string, any>
	styles: BuilderElementStyles
	children?: BuilderElement[]
	slotName?: string
	locked?: boolean
	hidden?: boolean
}

export type ViewportMode = 'desktop' | 'laptop' | 'tablet' | 'mobile'

export interface BuilderState {
	elements: BuilderElement[]
	selectedElementId: string | null
	hoveredElementId: string | null
	viewport: ViewportMode
	zoom: number
	previewMode: boolean
	showLayers: boolean
	showGrid: boolean
	historyIndex: number
	history: BuilderElement[][]
}

export interface TemplatePreset {
	id: string
	title: string
	description: string
	category: string
	thumbnailIcon: string
	elements: BuilderElement[]
}

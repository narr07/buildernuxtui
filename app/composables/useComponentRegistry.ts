import type { ComponentDefinition } from '~/types/builder'

export const COMPONENT_REGISTRY: ComponentDefinition[] = [
	// -------------------------------------------------------------
	// LAYOUT & CONTAINERS
	// -------------------------------------------------------------
	{
		type: 'container',
		name: 'Container',
		category: 'layout',
		icon: 'lucide:box-select',
		description: 'Main responsive wrapper with max-width centering',
		isContainer: true,
		defaultProps: {},
		defaultStyles: {
			maxWidth: 'max-w-7xl',
			padding: 'p-6',
			margin: 'mx-auto',
			display: 'flex',
			flexDirection: 'col',
			gap: 'gap-6'
		},
		propsSchema: []
	},
	{
		type: 'grid',
		name: 'Grid Layout',
		category: 'layout',
		icon: 'lucide:grid-2x2',
		description: 'CSS Grid responsive multi-column layout',
		isContainer: true,
		defaultProps: {},
		defaultStyles: {
			display: 'grid',
			gridCols: 'grid-cols-1 md:grid-cols-3',
			gap: 'gap-6',
			padding: 'p-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'gridCols',
				label: 'Grid Columns',
				type: 'select',
				options: [
					'grid-cols-1',
					'grid-cols-1 md:grid-cols-2',
					'grid-cols-1 md:grid-cols-3',
					'grid-cols-1 md:grid-cols-4',
					'grid-cols-2 md:grid-cols-4',
					'grid-cols-1 md:grid-cols-6'
				],
				default: 'grid-cols-1 md:grid-cols-3'
			}
		]
	},
	{
		type: 'flex',
		name: 'Flex Box',
		category: 'layout',
		icon: 'lucide:layout-template',
		description: 'Flexible row or column layout container',
		isContainer: true,
		defaultProps: {},
		defaultStyles: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'between',
			gap: 'gap-4',
			padding: 'p-4',
			width: 'w-full'
		},
		propsSchema: []
	},
	{
		type: 'card',
		name: 'UCard',
		category: 'layout',
		icon: 'lucide:panel-top',
		description: 'Nuxt UI surface card container with header, body and footer',
		isContainer: true,
		defaultProps: {
			variant: 'outline',
			headerText: 'Card Title',
			footerText: '',
			showHeader: true,
			showFooter: false
		},
		defaultStyles: {
			padding: 'p-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'variant',
				label: 'Variant',
				type: 'select',
				options: ['outline', 'soft', 'subtle', 'solid'],
				default: 'outline'
			},
			{
				name: 'showHeader',
				label: 'Show Header',
				type: 'boolean',
				default: true
			},
			{
				name: 'headerText',
				label: 'Header Title',
				type: 'string',
				default: 'Card Title'
			},
			{
				name: 'showFooter',
				label: 'Show Footer',
				type: 'boolean',
				default: false
			},
			{
				name: 'footerText',
				label: 'Footer Text',
				type: 'string',
				default: ''
			}
		]
	},
	{
		type: 'separator',
		name: 'USeparator',
		category: 'layout',
		icon: 'lucide:minus',
		description: 'Visual divider with optional label or icon',
		isContainer: false,
		defaultProps: {
			label: '',
			icon: '',
			orientation: 'horizontal',
			color: 'neutral',
			type: 'solid'
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'label',
				label: 'Center Label',
				type: 'string',
				default: ''
			},
			{
				name: 'icon',
				label: 'Center Icon',
				type: 'icon',
				default: ''
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'error'],
				default: 'neutral'
			},
			{
				name: 'type',
				label: 'Style Type',
				type: 'select',
				options: ['solid', 'dashed', 'dotted'],
				default: 'solid'
			}
		]
	},

	// -------------------------------------------------------------
	// TYPOGRAPHY & DOCUMENTATION COMPONENTS
	// -------------------------------------------------------------
	{
		type: 'heading',
		name: 'Heading',
		category: 'typography',
		icon: 'lucide:heading',
		description: 'Page and section titles from H1 to H6',
		isContainer: false,
		defaultProps: {
			text: 'Create Stunning Web Experiences',
			level: 'h2',
			gradient: false
		},
		defaultStyles: {
			textAlign: 'left',
			margin: 'mb-2'
		},
		propsSchema: [
			{
				name: 'text',
				label: 'Heading Text',
				type: 'string',
				default: 'Create Stunning Web Experiences'
			},
			{
				name: 'level',
				label: 'Tag Level',
				type: 'select',
				options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
				default: 'h2'
			},
			{
				name: 'gradient',
				label: 'Gradient Text',
				type: 'boolean',
				default: false
			}
		]
	},
	{
		type: 'paragraph',
		name: 'Paragraph',
		category: 'typography',
		icon: 'lucide:align-left',
		description: 'Body text with configurable size and color',
		isContainer: false,
		defaultProps: {
			text: 'Nuxt UI v4 provides high quality, accessible Vue components built on Tailwind CSS v4 and Reka UI with modern interactive features.',
			size: 'text-base',
			color: 'muted'
		},
		defaultStyles: {
			textAlign: 'left',
			margin: 'mb-2'
		},
		propsSchema: [
			{
				name: 'text',
				label: 'Paragraph Content',
				type: 'textarea',
				default: 'Nuxt UI v4 provides high quality, accessible Vue components.'
			},
			{
				name: 'size',
				label: 'Font Size',
				type: 'select',
				options: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl'],
				default: 'text-base'
			},
			{
				name: 'color',
				label: 'Text Color Style',
				type: 'select',
				options: ['default', 'muted', 'primary', 'secondary'],
				default: 'muted'
			}
		]
	},
	{
		type: 'lead',
		name: 'Lead Text',
		category: 'typography',
		icon: 'lucide:type',
		description: 'Prominent introductory lead paragraph',
		isContainer: false,
		defaultProps: {
			text: 'A modern, modular design system crafted specifically for Nuxt 4 and Vue 3 applications.'
		},
		defaultStyles: {
			textAlign: 'left',
			margin: 'mb-4'
		},
		propsSchema: [
			{
				name: 'text',
				label: 'Lead Text Content',
				type: 'textarea',
				default: 'A modern, modular design system crafted specifically for Nuxt 4 and Vue 3 applications.'
			}
		]
	},
	{
		type: 'blockquote',
		name: 'Blockquote',
		category: 'typography',
		icon: 'lucide:quote',
		description: 'Styled blockquote with author attribution',
		isContainer: false,
		defaultProps: {
			quote: 'Nuxt UI combines the flexibility of headless primitives with stunning default styles out of the box.',
			author: 'Alexandre Rochon',
			role: 'Nuxt UI Maintainer'
		},
		defaultStyles: {
			margin: 'my-4'
		},
		propsSchema: [
			{
				name: 'quote',
				label: 'Quote Text',
				type: 'textarea',
				default: 'Nuxt UI combines the flexibility of headless primitives with stunning default styles.'
			},
			{
				name: 'author',
				label: 'Author Name',
				type: 'string',
				default: 'Alexandre Rochon'
			},
			{
				name: 'role',
				label: 'Author Role / Source',
				type: 'string',
				default: 'Nuxt UI Maintainer'
			}
		]
	},
	{
		type: 'list',
		name: 'List',
		category: 'typography',
		icon: 'lucide:list',
		description: 'Unordered or ordered list with custom icons',
		isContainer: false,
		defaultProps: {
			items: 'Full TypeScript type safety, Seamless dark and light mode, Zero-config Nuxt 4 integration, Accessible Reka UI primitives',
			type: 'unordered',
			icon: 'lucide:check-circle-2'
		},
		defaultStyles: {
			margin: 'my-3'
		},
		propsSchema: [
			{
				name: 'items',
				label: 'List Items (Comma separated)',
				type: 'textarea',
				default: 'Full TypeScript type safety, Seamless dark and light mode, Zero-config Nuxt 4 integration'
			},
			{
				name: 'type',
				label: 'List Style Type',
				type: 'select',
				options: ['unordered', 'ordered', 'icon'],
				default: 'unordered'
			},
			{
				name: 'icon',
				label: 'Custom Bullet Icon',
				type: 'icon',
				default: 'lucide:check-circle-2'
			}
		]
	},
	{
		type: 'table',
		name: 'Table',
		category: 'typography',
		icon: 'lucide:table',
		description: 'Content prose documentation table',
		isContainer: false,
		defaultProps: {
			caption: 'Component Props Reference'
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'caption',
				label: 'Table Caption',
				type: 'string',
				default: 'Component Props Reference'
			}
		]
	},
	{
		type: 'image',
		name: 'Image & Embed',
		category: 'typography',
		icon: 'lucide:image',
		description: 'Documentation image with caption and zoom',
		isContainer: false,
		defaultProps: {
			src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000',
			alt: 'Dashboard Screenshot',
			caption: 'Figure 1: Nuxt UI interactive dashboard overview.'
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'src',
				label: 'Image URL',
				type: 'string',
				default: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000'
			},
			{
				name: 'alt',
				label: 'Alt Text',
				type: 'string',
				default: 'Dashboard Screenshot'
			},
			{
				name: 'caption',
				label: 'Caption',
				type: 'string',
				default: 'Figure 1: Nuxt UI interactive dashboard overview.'
			}
		]
	},
	{
		type: 'code',
		name: 'Inline Code',
		category: 'typography',
		icon: 'lucide:code',
		description: 'Inline formatted code tag',
		isContainer: false,
		defaultProps: {
			code: 'npx nuxi init my-app'
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'code',
				label: 'Code Text',
				type: 'string',
				default: 'npx nuxi init my-app'
			}
		]
	},
	{
		type: 'code-block',
		name: 'CodeBlock',
		category: 'typography',
		icon: 'lucide:terminal-square',
		description: 'Syntax-highlighted code block with copy button and filename',
		isContainer: false,
		defaultProps: {
			filename: 'app.config.ts',
			language: 'typescript',
			code: `export default defineAppConfig({
  ui: {
    primary: 'emerald',
    neutral: 'zinc'
  }
})`
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'filename',
				label: 'File Name',
				type: 'string',
				default: 'app.config.ts'
			},
			{
				name: 'language',
				label: 'Language',
				type: 'select',
				options: ['typescript', 'javascript', 'vue', 'bash', 'json', 'css', 'html'],
				default: 'typescript'
			},
			{
				name: 'code',
				label: 'Source Code',
				type: 'textarea',
				default: `export default defineAppConfig({
  ui: {
    primary: 'emerald'
  }
})`
			}
		]
	},
	{
		type: 'code-group',
		name: 'CodeGroup',
		category: 'typography',
		icon: 'lucide:folder-code',
		description: 'Tabbed code snippet switcher (pnpm, npm, yarn, bun)',
		isContainer: false,
		defaultProps: {
			pnpm: 'pnpm add @nuxt/ui',
			npm: 'npm install @nuxt/ui',
			yarn: 'yarn add @nuxt/ui',
			bun: 'bun add @nuxt/ui'
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'pnpm',
				label: 'pnpm command',
				type: 'string',
				default: 'pnpm add @nuxt/ui'
			},
			{
				name: 'npm',
				label: 'npm command',
				type: 'string',
				default: 'npm install @nuxt/ui'
			},
			{
				name: 'bun',
				label: 'bun command',
				type: 'string',
				default: 'bun add @nuxt/ui'
			}
		]
	},
	{
		type: 'code-collapse',
		name: 'CodeCollapse',
		category: 'typography',
		icon: 'lucide:fold-vertical',
		description: 'Collapsible code block for lengthy implementation examples',
		isContainer: false,
		defaultProps: {
			title: 'View full component setup',
			code: `<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <UButton @click="count++">Clicked {{ count }} times</UButton>
</template>`
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Accordion Title',
				type: 'string',
				default: 'View full component setup'
			},
			{
				name: 'code',
				label: 'Code snippet',
				type: 'textarea',
				default: '<script setup lang="ts">\nconst count = ref(0)\n</script>'
			}
		]
	},
	{
		type: 'code-preview',
		name: 'CodePreview',
		category: 'typography',
		icon: 'lucide:play-circle',
		description: 'Interactive live preview with code source tab',
		isContainer: false,
		defaultProps: {
			title: 'Interactive Button Demo',
			code: `<UButton color="primary" icon="lucide:sparkles" label="Interactive Action" />`
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Preview Title',
				type: 'string',
				default: 'Interactive Button Demo'
			},
			{
				name: 'code',
				label: 'Source Code',
				type: 'textarea',
				default: '<UButton color="primary" label="Action" />'
			}
		]
	},
	{
		type: 'code-tree',
		name: 'CodeTree',
		category: 'typography',
		icon: 'lucide:folder-tree',
		description: 'Directory file hierarchy tree diagram',
		isContainer: false,
		defaultProps: {
			title: 'Project Structure',
			tree: `app/
├── components/
│   ├── Header.vue
│   └── Footer.vue
├── composables/
│   └── useTheme.ts
├── pages/
│   └── index.vue
└── app.vue`
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Tree Title',
				type: 'string',
				default: 'Project Structure'
			},
			{
				name: 'tree',
				label: 'Folder Hierarchy',
				type: 'textarea',
				default: 'app/\n├── components/\n├── pages/\n└── app.vue'
			}
		]
	},
	{
		type: 'prompt',
		name: 'Prompt',
		category: 'typography',
		icon: 'lucide:terminal',
		description: 'CLI command line prompt box with one-click copy',
		isContainer: false,
		defaultProps: {
			command: 'npx nuxi@latest init my-nuxt-app'
		},
		defaultStyles: {
			margin: 'my-3',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'command',
				label: 'CLI Command',
				type: 'string',
				default: 'npx nuxi@latest init my-nuxt-app'
			}
		]
	},
	{
		type: 'callout',
		name: 'Callout',
		category: 'typography',
		icon: 'lucide:info',
		description: 'Documentation alert callout (Tip, Note, Warning, Caution)',
		isContainer: false,
		defaultProps: {
			type: 'tip',
			title: 'Pro Tip',
			description: 'Nuxt UI v4 automatically imports all components and icons without manual registration.',
			icon: 'lucide:sparkles'
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'type',
				label: 'Callout Type',
				type: 'select',
				options: ['tip', 'note', 'warning', 'important', 'caution'],
				default: 'tip'
			},
			{
				name: 'title',
				label: 'Callout Title',
				type: 'string',
				default: 'Pro Tip'
			},
			{
				name: 'description',
				label: 'Message',
				type: 'textarea',
				default: 'Nuxt UI v4 automatically imports all components and icons.'
			},
			{
				name: 'icon',
				label: 'Icon',
				type: 'icon',
				default: 'lucide:sparkles'
			}
		]
	},
	{
		type: 'card-group',
		name: 'CardGroup',
		category: 'typography',
		icon: 'lucide:grid-2x2',
		description: 'Grid group container for documentation cards',
		isContainer: true,
		defaultProps: {
			columns: '2'
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'columns',
				label: 'Columns',
				type: 'select',
				options: ['2', '3', '4'],
				default: '2'
			}
		]
	},
	{
		type: 'collapsible',
		name: 'Collapsible',
		category: 'typography',
		icon: 'lucide:chevron-down',
		description: 'Expandable toggle section for detailed content',
		isContainer: true,
		defaultProps: {
			title: 'Click to expand details',
			defaultOpen: false
		},
		defaultStyles: {
			margin: 'my-3',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Header Title',
				type: 'string',
				default: 'Click to expand details'
			},
			{
				name: 'defaultOpen',
				label: 'Expanded by Default',
				type: 'boolean',
				default: false
			}
		]
	},
	{
		type: 'field',
		name: 'Field',
		category: 'typography',
		icon: 'lucide:text-cursor',
		description: 'API prop/field documentation item',
		isContainer: false,
		defaultProps: {
			name: 'color',
			type: 'string',
			required: false,
			description: 'The color palette theme applied to the component.'
		},
		defaultStyles: {
			margin: 'my-2',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'name',
				label: 'Prop / Field Name',
				type: 'string',
				default: 'color'
			},
			{
				name: 'type',
				label: 'TypeScript Type',
				type: 'string',
				default: 'string'
			},
			{
				name: 'required',
				label: 'Required',
				type: 'boolean',
				default: false
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'The color palette theme applied to the component.'
			}
		]
	},
	{
		type: 'field-group',
		name: 'FieldGroup',
		category: 'typography',
		icon: 'lucide:list-collapse',
		description: 'Group container for API prop fields',
		isContainer: true,
		defaultProps: {
			title: 'Component Properties'
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Group Title',
				type: 'string',
				default: 'Component Properties'
			}
		]
	},
	{
		type: 'steps',
		name: 'Steps',
		category: 'typography',
		icon: 'lucide:list-ordered',
		description: 'Numbered step-by-step tutorial guide',
		isContainer: false,
		defaultProps: {
			steps: 'Install dependencies with bun add @nuxt/ui, Register the module in nuxt.config.ts, Build your pages with Nuxt UI components'
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'steps',
				label: 'Steps (Comma separated)',
				type: 'textarea',
				default: 'Install dependencies with bun add @nuxt/ui, Register the module in nuxt.config.ts, Build your pages with Nuxt UI components'
			}
		]
	},
	{
		type: 'tabs',
		name: 'Tabs',
		category: 'typography',
		icon: 'lucide:table-cells-split',
		description: 'Multi-tab content switcher',
		isContainer: true,
		defaultProps: {
			tab1: 'Overview',
			tab2: 'Usage',
			tab3: 'API'
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'tab1',
				label: 'Tab 1 Label',
				type: 'string',
				default: 'Overview'
			},
			{
				name: 'tab2',
				label: 'Tab 2 Label',
				type: 'string',
				default: 'Usage'
			},
			{
				name: 'tab3',
				label: 'Tab 3 Label',
				type: 'string',
				default: 'API'
			}
		]
	},
	{
		type: 'accordion',
		name: 'UAccordion',
		category: 'typography',
		icon: 'lucide:chevrons-up-down',
		description: 'Stacked set of interactive collapsible panels',
		isContainer: false,
		defaultProps: {
			items: 'How do I install Nuxt UI?:Run bun add @nuxt/ui and add it to modules in nuxt.config.ts.,Does it support SSR?:Yes Nuxt UI is built specifically for full Nuxt SSR hydration.,Can I customize colors?:Yes with 18 Tailwind color schemes and CSS variables.'
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'items',
				label: 'Items (Question:Answer separated by comma)',
				type: 'textarea',
				default: 'How do I install Nuxt UI?:Run bun add @nuxt/ui.,Does it support SSR?:Yes Nuxt UI is built for SSR.'
			}
		]
	},
	{
		type: 'badge',
		name: 'UBadge',
		category: 'typography',
		icon: 'lucide:badge',
		description: 'Short tag label to represent a status or category',
		isContainer: false,
		defaultProps: {
			label: 'Nuxt 4 Ready',
			color: 'primary',
			variant: 'subtle',
			size: 'md',
			icon: 'lucide:sparkles'
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'label',
				label: 'Badge Text',
				type: 'string',
				default: 'Nuxt 4 Ready'
			},
			{
				name: 'color',
				label: 'Color Scheme',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error', 'info'],
				default: 'primary'
			},
			{
				name: 'variant',
				label: 'Variant',
				type: 'select',
				options: ['solid', 'outline', 'soft', 'subtle'],
				default: 'subtle'
			},
			{
				name: 'size',
				label: 'Size',
				type: 'select',
				options: ['xs', 'sm', 'md', 'lg'],
				default: 'md'
			},
			{
				name: 'icon',
				label: 'Icon',
				type: 'icon',
				default: 'lucide:sparkles'
			}
		]
	},
	{
		type: 'icon',
		name: 'UIcon',
		category: 'typography',
		icon: 'lucide:smile',
		description: 'Icon component powered by @nuxt/icon and Iconify',
		isContainer: false,
		defaultProps: {
			name: 'lucide:sparkles',
			size: 'w-6 h-6',
			color: 'text-primary'
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'name',
				label: 'Icon Identifier',
				type: 'icon',
				default: 'lucide:sparkles'
			},
			{
				name: 'size',
				label: 'Size Class',
				type: 'select',
				options: ['w-4 h-4', 'w-5 h-5', 'w-6 h-6', 'w-8 h-8', 'w-10 h-10', 'w-12 h-12'],
				default: 'w-6 h-6'
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['text-primary', 'text-neutral-500', 'text-neutral-900 dark:text-white', 'text-green-500', 'text-amber-500', 'text-red-500'],
				default: 'text-primary'
			}
		]
	},
	{
		type: 'kbd',
		name: 'UKbd',
		category: 'typography',
		icon: 'lucide:keyboard',
		description: 'Keyboard shortcut badge indicator',
		isContainer: false,
		defaultProps: {
			value: '⌘K',
			size: 'md',
			variant: 'outline'
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'value',
				label: 'Key Text',
				type: 'string',
				default: '⌘K'
			},
			{
				name: 'size',
				label: 'Size',
				type: 'select',
				options: ['sm', 'md', 'lg'],
				default: 'md'
			}
		]
	},

	// -------------------------------------------------------------
	// ELEMENT COMPONENTS
	// -------------------------------------------------------------
	{
		type: 'alert',
		name: 'UAlert',
		category: 'element',
		icon: 'lucide:alert-circle',
		description: 'Callout alert banner to draw the user attention',
		isContainer: false,
		defaultProps: {
			title: 'Update Available',
			description: 'A new version of Nuxt UI v4 is now available for download.',
			icon: 'lucide:info',
			color: 'primary',
			variant: 'subtle',
			close: false
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Alert Title',
				type: 'string',
				default: 'Update Available'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'A new version is now available for download.'
			},
			{
				name: 'icon',
				label: 'Icon',
				type: 'icon',
				default: 'lucide:info'
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error', 'info'],
				default: 'primary'
			},
			{
				name: 'variant',
				label: 'Variant',
				type: 'select',
				options: ['solid', 'outline', 'soft', 'subtle'],
				default: 'subtle'
			}
		]
	},
	{
		type: 'avatar',
		name: 'UAvatar',
		category: 'element',
		icon: 'lucide:circle-user-round',
		description: 'User avatar with image, initials or fallback icon',
		isContainer: false,
		defaultProps: {
			src: 'https://avatars.githubusercontent.com/u/739984?v=4',
			alt: 'Anthony Fu',
			text: 'AF',
			size: 'md',
			chip: true,
			chipColor: 'success'
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'src',
				label: 'Image URL',
				type: 'string',
				default: 'https://avatars.githubusercontent.com/u/739984?v=4'
			},
			{
				name: 'alt',
				label: 'Alt Text',
				type: 'string',
				default: 'Avatar'
			},
			{
				name: 'text',
				label: 'Fallback Initials',
				type: 'string',
				default: 'AF'
			},
			{
				name: 'size',
				label: 'Size',
				type: 'select',
				options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
				default: 'md'
			},
			{
				name: 'chip',
				label: 'Status Dot',
				type: 'boolean',
				default: true
			},
			{
				name: 'chipColor',
				label: 'Status Color',
				type: 'select',
				options: ['success', 'warning', 'error', 'neutral', 'primary'],
				default: 'success'
			}
		]
	},
	{
		type: 'avatar-group',
		name: 'UAvatarGroup',
		category: 'element',
		icon: 'lucide:users-round',
		description: 'Stack multiple avatars in an overlapping group',
		isContainer: false,
		defaultProps: {
			size: 'md',
			max: 3,
			avatars: 'https://avatars.githubusercontent.com/u/739984?v=4, https://avatars.githubusercontent.com/u/904724?v=4, https://avatars.githubusercontent.com/u/28706372?v=4, https://avatars.githubusercontent.com/u/6492061?v=4'
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'size',
				label: 'Size',
				type: 'select',
				options: ['xs', 'sm', 'md', 'lg', 'xl'],
				default: 'md'
			},
			{
				name: 'max',
				label: 'Max Visible',
				type: 'number',
				default: 3
			},
			{
				name: 'avatars',
				label: 'Avatar URLs (Comma separated)',
				type: 'textarea',
				default: 'https://avatars.githubusercontent.com/u/739984?v=4, https://avatars.githubusercontent.com/u/904724?v=4, https://avatars.githubusercontent.com/u/28706372?v=4'
			}
		]
	},
	{
		type: 'badge',
		name: 'UBadge',
		category: 'element',
		icon: 'lucide:tag',
		description: 'Small status or tag label badge',
		isContainer: false,
		defaultProps: {
			label: 'New Feature',
			color: 'primary',
			variant: 'subtle',
			size: 'md',
			icon: 'lucide:sparkles'
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'label',
				label: 'Badge Label',
				type: 'string',
				default: 'New Feature'
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error', 'info'],
				default: 'primary'
			},
			{
				name: 'variant',
				label: 'Variant',
				type: 'select',
				options: ['solid', 'outline', 'soft', 'subtle'],
				default: 'subtle'
			},
			{
				name: 'size',
				label: 'Size',
				type: 'select',
				options: ['xs', 'sm', 'md', 'lg'],
				default: 'md'
			},
			{
				name: 'icon',
				label: 'Icon',
				type: 'icon',
				default: 'lucide:sparkles'
			}
		]
	},
	{
		type: 'banner',
		name: 'UBanner',
		category: 'element',
		icon: 'lucide:flag',
		description: 'Top-level announcement banner bar',
		isContainer: false,
		defaultProps: {
			title: 'Nuxt UI v4 is now officially released! Check out the migration guide.',
			icon: 'lucide:sparkles',
			color: 'primary',
			close: true
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Banner Text',
				type: 'string',
				default: 'Nuxt UI v4 is now officially released!'
			},
			{
				name: 'icon',
				label: 'Icon',
				type: 'icon',
				default: 'lucide:sparkles'
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error', 'info'],
				default: 'primary'
			},
			{
				name: 'close',
				label: 'Show Close Button',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'button',
		name: 'UButton',
		category: 'element',
		icon: 'lucide:mouse-pointer-click',
		description: 'Nuxt UI Button with variants, icons and loading states',
		isContainer: false,
		defaultProps: {
			label: 'Get Started',
			color: 'primary',
			variant: 'solid',
			size: 'md',
			icon: 'lucide:arrow-right',
			trailing: true,
			block: false,
			disabled: false
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'label',
				label: 'Button Label',
				type: 'string',
				default: 'Get Started'
			},
			{
				name: 'color',
				label: 'Color Scheme',
				type: 'select',
				options: ['primary', 'neutral', 'secondary', 'success', 'warning', 'error', 'info'],
				default: 'primary'
			},
			{
				name: 'variant',
				label: 'Style Variant',
				type: 'select',
				options: ['solid', 'outline', 'soft', 'subtle', 'ghost', 'link'],
				default: 'solid'
			},
			{
				name: 'size',
				label: 'Size',
				type: 'select',
				options: ['xs', 'sm', 'md', 'lg', 'xl'],
				default: 'md'
			},
			{
				name: 'icon',
				label: 'Icon (Lucide / Iconify)',
				type: 'icon',
				default: 'lucide:arrow-right'
			},
			{
				name: 'trailing',
				label: 'Icon at End',
				type: 'boolean',
				default: true
			},
			{
				name: 'block',
				label: 'Full Width',
				type: 'boolean',
				default: false
			}
		]
	},
	{
		type: 'calendar',
		name: 'UCalendar',
		category: 'element',
		icon: 'lucide:calendar',
		description: 'Interactive date selection calendar grid',
		isContainer: false,
		defaultProps: {
			color: 'primary',
			size: 'md'
		},
		defaultStyles: {
			margin: 'my-3'
		},
		propsSchema: [
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error'],
				default: 'primary'
			},
			{
				name: 'size',
				label: 'Size',
				type: 'select',
				options: ['sm', 'md', 'lg'],
				default: 'md'
			}
		]
	},
	{
		type: 'chip',
		name: 'UChip',
		category: 'element',
		icon: 'lucide:bell-dot',
		description: 'Notification badge wrapper indicator',
		isContainer: true,
		defaultProps: {
			text: '9',
			color: 'error',
			size: 'md',
			position: 'top-right'
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'text',
				label: 'Chip Text/Number',
				type: 'string',
				default: '9'
			},
			{
				name: 'color',
				label: 'Chip Color',
				type: 'select',
				options: ['error', 'primary', 'success', 'warning', 'neutral'],
				default: 'error'
			},
			{
				name: 'position',
				label: 'Position',
				type: 'select',
				options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
				default: 'top-right'
			}
		]
	},
	{
		type: 'icon',
		name: 'UIcon',
		category: 'element',
		icon: 'lucide:shapes',
		description: 'Standalone Icon with customizable size and color',
		isContainer: false,
		defaultProps: {
			name: 'lucide:sparkles',
			size: 'h-8 w-8',
			color: 'text-primary'
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'name',
				label: 'Icon Identifier',
				type: 'icon',
				default: 'lucide:sparkles'
			},
			{
				name: 'size',
				label: 'Icon Size',
				type: 'select',
				options: ['h-4 w-4', 'h-5 w-5', 'h-6 w-6', 'h-8 w-8', 'h-10 w-10', 'h-12 w-12'],
				default: 'h-8 w-8'
			},
			{
				name: 'color',
				label: 'Icon Color',
				type: 'select',
				options: ['text-primary', 'text-neutral-500', 'text-success-500', 'text-warning-500', 'text-error-500', 'text-neutral-900 dark:text-white'],
				default: 'text-primary'
			}
		]
	},
	{
		type: 'progress',
		name: 'UProgress',
		category: 'element',
		icon: 'lucide:loader',
		description: 'Progress bar with status value or indeterminate mode',
		isContainer: false,
		defaultProps: {
			value: 75,
			max: 100,
			color: 'primary',
			size: 'md',
			status: true
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'value',
				label: 'Progress Value',
				type: 'number',
				default: 75
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error'],
				default: 'primary'
			},
			{
				name: 'size',
				label: 'Size',
				type: 'select',
				options: ['xs', 'sm', 'md', 'lg', 'xl'],
				default: 'md'
			},
			{
				name: 'status',
				label: 'Show Percentage Text',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'progress-group',
		name: 'UProgressGroup',
		category: 'element',
		icon: 'lucide:layers-2',
		description: 'Multi-bar grouped progress indicators',
		isContainer: false,
		defaultProps: {
			items: 'Design:85, Development:60, Testing:40',
			color: 'primary',
			size: 'md'
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-3'
		},
		propsSchema: [
			{
				name: 'items',
				label: 'Items (Label:Percentage comma separated)',
				type: 'textarea',
				default: 'Design:85, Development:60, Testing:40'
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error'],
				default: 'primary'
			}
		]
	},
	{
		type: 'skeleton',
		name: 'USkeleton',
		category: 'element',
		icon: 'lucide:scan',
		description: 'Placeholder loading skeleton animation shape',
		isContainer: false,
		defaultProps: {
			shape: 'rectangle',
			height: 'h-6',
			width: 'w-full'
		},
		defaultStyles: {
			margin: 'my-2'
		},
		propsSchema: [
			{
				name: 'shape',
				label: 'Shape',
				type: 'select',
				options: ['rectangle', 'circle', 'card', 'avatar-text'],
				default: 'rectangle'
			},
			{
				name: 'height',
				label: 'Height',
				type: 'select',
				options: ['h-4', 'h-6', 'h-8', 'h-12', 'h-24', 'h-36'],
				default: 'h-6'
			},
			{
				name: 'width',
				label: 'Width',
				type: 'select',
				options: ['w-1/4', 'w-1/2', 'w-3/4', 'w-full', 'w-12'],
				default: 'w-full'
			}
		]
	},

	// -------------------------------------------------------------
	// FORMS & INPUTS
	// -------------------------------------------------------------
	{
		type: 'form',
		name: 'UForm',
		category: 'form',
		icon: 'lucide:file-input',
		description: 'Form container wrapper with validation and submit handler',
		isContainer: true,
		defaultProps: {
			title: 'User Profile Form',
			submitText: 'Save Changes'
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-4'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Form Title',
				type: 'string',
				default: 'User Profile Form'
			},
			{
				name: 'submitText',
				label: 'Submit Button Text',
				type: 'string',
				default: 'Save Changes'
			}
		]
	},
	{
		type: 'form-field',
		name: 'UFormField',
		category: 'form',
		icon: 'lucide:form-input',
		description: 'Form field container with label, description, help and error message',
		isContainer: true,
		defaultProps: {
			label: 'Email Address',
			description: 'We will never share your email with third parties.',
			help: '',
			required: true,
			error: ''
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-3'
		},
		propsSchema: [
			{
				name: 'label',
				label: 'Field Label',
				type: 'string',
				default: 'Email Address'
			},
			{
				name: 'description',
				label: 'Help Description',
				type: 'string',
				default: 'We will never share your email.'
			},
			{
				name: 'required',
				label: 'Required Indicator',
				type: 'boolean',
				default: true
			},
			{
				name: 'error',
				label: 'Error Message (Optional)',
				type: 'string',
				default: ''
			}
		]
	},
	{
		type: 'input',
		name: 'UInput',
		category: 'form',
		icon: 'lucide:text-cursor-input',
		description: 'Text input field with icons, sizes and states',
		isContainer: false,
		defaultProps: {
			placeholder: 'Enter your email...',
			icon: 'lucide:mail',
			color: 'primary',
			variant: 'outline',
			size: 'md',
			type: 'text',
			disabled: false
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'placeholder',
				label: 'Placeholder',
				type: 'string',
				default: 'Enter your email...'
			},
			{
				name: 'icon',
				label: 'Leading Icon',
				type: 'icon',
				default: 'lucide:mail'
			},
			{
				name: 'type',
				label: 'Input Type',
				type: 'select',
				options: ['text', 'email', 'password', 'url', 'tel'],
				default: 'text'
			},
			{
				name: 'color',
				label: 'Focus Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error'],
				default: 'primary'
			},
			{
				name: 'variant',
				label: 'Variant',
				type: 'select',
				options: ['outline', 'soft', 'subtle', 'ghost', 'none'],
				default: 'outline'
			},
			{
				name: 'size',
				label: 'Size',
				type: 'select',
				options: ['xs', 'sm', 'md', 'lg', 'xl'],
				default: 'md'
			}
		]
	},
	{
		type: 'input-number',
		name: 'UInputNumber',
		category: 'form',
		icon: 'lucide:binary',
		description: 'Numeric step counter input with up/down controls',
		isContainer: false,
		defaultProps: {
			value: 1,
			min: 0,
			max: 100,
			step: 1,
			color: 'primary',
			size: 'md'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'value',
				label: 'Initial Value',
				type: 'number',
				default: 1
			},
			{
				name: 'min',
				label: 'Minimum',
				type: 'number',
				default: 0
			},
			{
				name: 'max',
				label: 'Maximum',
				type: 'number',
				default: 100
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error'],
				default: 'primary'
			}
		]
	},
	{
		type: 'input-date',
		name: 'UInputDate',
		category: 'form',
		icon: 'lucide:calendar-days',
		description: 'Date picker input dropdown field',
		isContainer: false,
		defaultProps: {
			placeholder: 'Select a date...',
			icon: 'lucide:calendar',
			color: 'primary',
			size: 'md'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'placeholder',
				label: 'Placeholder',
				type: 'string',
				default: 'Select a date...'
			},
			{
				name: 'icon',
				label: 'Icon',
				type: 'icon',
				default: 'lucide:calendar'
			}
		]
	},
	{
		type: 'input-time',
		name: 'UInputTime',
		category: 'form',
		icon: 'lucide:clock',
		description: 'Time selection input field',
		isContainer: false,
		defaultProps: {
			placeholder: 'Select time...',
			icon: 'lucide:clock',
			color: 'primary',
			size: 'md'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'placeholder',
				label: 'Placeholder',
				type: 'string',
				default: 'Select time...'
			}
		]
	},
	{
		type: 'input-menu',
		name: 'UInputMenu',
		category: 'form',
		icon: 'lucide:list-filter',
		description: 'Autocomplete dropdown menu input',
		isContainer: false,
		defaultProps: {
			placeholder: 'Search frameworks...',
			items: 'Nuxt, Vue, Next, React, Svelte, Astro',
			color: 'primary',
			size: 'md'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'placeholder',
				label: 'Placeholder',
				type: 'string',
				default: 'Search frameworks...'
			},
			{
				name: 'items',
				label: 'Options (Comma separated)',
				type: 'textarea',
				default: 'Nuxt, Vue, Next, React, Svelte, Astro'
			}
		]
	},
	{
		type: 'input-tags',
		name: 'UInputTags',
		category: 'form',
		icon: 'lucide:tags',
		description: 'Multi-tag pill badge creator input',
		isContainer: false,
		defaultProps: {
			placeholder: 'Add tags...',
			tags: 'Vue 3, Nuxt 4, Tailwind CSS, TypeScript',
			color: 'primary'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'placeholder',
				label: 'Placeholder',
				type: 'string',
				default: 'Add tags...'
			},
			{
				name: 'tags',
				label: 'Initial Tags (Comma separated)',
				type: 'textarea',
				default: 'Vue 3, Nuxt 4, Tailwind CSS, TypeScript'
			}
		]
	},
	{
		type: 'input-rating',
		name: 'UInputRating',
		category: 'form',
		icon: 'lucide:star',
		description: 'Star score rating input control',
		isContainer: false,
		defaultProps: {
			value: 4,
			max: 5,
			color: 'warning',
			icon: 'lucide:star'
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'value',
				label: 'Rating Value',
				type: 'number',
				default: 4
			},
			{
				name: 'max',
				label: 'Maximum Stars',
				type: 'number',
				default: 5
			}
		]
	},
	{
		type: 'pin-input',
		name: 'UPinInput',
		category: 'form',
		icon: 'lucide:key-round',
		description: 'OTP / Security PIN digit input boxes',
		isContainer: false,
		defaultProps: {
			length: 4,
			placeholder: '○',
			color: 'primary',
			size: 'md'
		},
		defaultStyles: {
			margin: 'my-3'
		},
		propsSchema: [
			{
				name: 'length',
				label: 'Number of Digits',
				type: 'number',
				default: 4
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error'],
				default: 'primary'
			}
		]
	},
	{
		type: 'color-picker',
		name: 'UColorPicker',
		category: 'form',
		icon: 'lucide:palette',
		description: 'Hex / RGBA color palette picker',
		isContainer: false,
		defaultProps: {
			value: '#10b981',
			format: 'hex'
		},
		defaultStyles: {
			margin: 'my-2'
		},
		propsSchema: [
			{
				name: 'value',
				label: 'Hex Color Value',
				type: 'color',
				default: '#10b981'
			}
		]
	},
	{
		type: 'file-upload',
		name: 'UFileUpload',
		category: 'form',
		icon: 'lucide:upload-cloud',
		description: 'Drag & Drop file upload dropzone',
		isContainer: false,
		defaultProps: {
			label: 'Click or drag files here to upload',
			hint: 'PNG, JPG, PDF up to 10MB',
			icon: 'lucide:upload-cloud',
			multiple: true
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-3'
		},
		propsSchema: [
			{
				name: 'label',
				label: 'Dropzone Label',
				type: 'string',
				default: 'Click or drag files here to upload'
			},
			{
				name: 'hint',
				label: 'Supported file types hint',
				type: 'string',
				default: 'PNG, JPG, PDF up to 10MB'
			},
			{
				name: 'multiple',
				label: 'Allow Multiple',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'textarea',
		name: 'UTextarea',
		category: 'form',
		icon: 'lucide:file-text',
		description: 'Multi-line text area input',
		isContainer: false,
		defaultProps: {
			placeholder: 'Write your message...',
			rows: 4,
			color: 'primary',
			variant: 'outline'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'placeholder',
				label: 'Placeholder',
				type: 'string',
				default: 'Write your message...'
			},
			{
				name: 'rows',
				label: 'Rows',
				type: 'number',
				default: 4
			},
			{
				name: 'variant',
				label: 'Variant',
				type: 'select',
				options: ['outline', 'soft', 'subtle', 'none'],
				default: 'outline'
			}
		]
	},
	{
		type: 'select',
		name: 'USelect',
		category: 'form',
		icon: 'lucide:chevron-down-square',
		description: 'Standard native dropdown selection select',
		isContainer: false,
		defaultProps: {
			placeholder: 'Select a country...',
			options: 'United States, Indonesia, United Kingdom, Japan, Germany',
			color: 'primary',
			size: 'md'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'placeholder',
				label: 'Placeholder',
				type: 'string',
				default: 'Select a country...'
			},
			{
				name: 'options',
				label: 'Options (Comma separated)',
				type: 'textarea',
				default: 'United States, Indonesia, United Kingdom, Japan, Germany'
			}
		]
	},
	{
		type: 'select-menu',
		name: 'USelectMenu',
		category: 'form',
		icon: 'lucide:chevrons-up-down',
		description: 'Custom rich select dropdown with search and avatars',
		isContainer: false,
		defaultProps: {
			placeholder: 'Select team member...',
			items: 'Alexandre Rochon, Sébastien Chopin, Anthony Fu, Benjamin Canac',
			searchable: true,
			color: 'primary',
			size: 'md'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'placeholder',
				label: 'Placeholder',
				type: 'string',
				default: 'Select team member...'
			},
			{
				name: 'items',
				label: 'Items (Comma separated)',
				type: 'textarea',
				default: 'Alexandre Rochon, Sébastien Chopin, Anthony Fu, Benjamin Canac'
			},
			{
				name: 'searchable',
				label: 'Searchable Filter',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'listbox',
		name: 'UListbox',
		category: 'form',
		icon: 'lucide:check-check',
		description: 'Accessible listbox option picker',
		isContainer: false,
		defaultProps: {
			placeholder: 'Choose role...',
			items: 'Administrator, Editor, Contributor, Viewer',
			color: 'primary'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'placeholder',
				label: 'Placeholder',
				type: 'string',
				default: 'Choose role...'
			},
			{
				name: 'items',
				label: 'Items (Comma separated)',
				type: 'textarea',
				default: 'Administrator, Editor, Contributor, Viewer'
			}
		]
	},
	{
		type: 'radio-group',
		name: 'URadioGroup',
		category: 'form',
		icon: 'lucide:circle-dot',
		description: 'Radio button choice group',
		isContainer: false,
		defaultProps: {
			items: 'Startup ($19/mo), Business ($49/mo), Enterprise ($99/mo)',
			orientation: 'vertical',
			color: 'primary'
		},
		defaultStyles: {
			margin: 'my-3'
		},
		propsSchema: [
			{
				name: 'items',
				label: 'Items (Comma separated)',
				type: 'textarea',
				default: 'Startup ($19/mo), Business ($49/mo), Enterprise ($99/mo)'
			},
			{
				name: 'orientation',
				label: 'Orientation',
				type: 'select',
				options: ['vertical', 'horizontal'],
				default: 'vertical'
			}
		]
	},
	{
		type: 'checkbox-group',
		name: 'UCheckboxGroup',
		category: 'form',
		icon: 'lucide:list-checks',
		description: 'Group of multiple checkbox choices',
		isContainer: false,
		defaultProps: {
			items: 'Email Notifications, SMS Alerts, Weekly Summary Digest',
			orientation: 'vertical',
			color: 'primary'
		},
		defaultStyles: {
			margin: 'my-3'
		},
		propsSchema: [
			{
				name: 'items',
				label: 'Items (Comma separated)',
				type: 'textarea',
				default: 'Email Notifications, SMS Alerts, Weekly Summary Digest'
			},
			{
				name: 'orientation',
				label: 'Orientation',
				type: 'select',
				options: ['vertical', 'horizontal'],
				default: 'vertical'
			}
		]
	},
	{
		type: 'switch',
		name: 'USwitch',
		category: 'form',
		icon: 'lucide:toggle-left',
		description: 'Toggle switch input for binary settings',
		isContainer: false,
		defaultProps: {
			label: 'Enable Email Notifications',
			description: 'Receive real-time updates directly to your inbox',
			color: 'primary',
			size: 'md',
			checked: true
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'label',
				label: 'Switch Label',
				type: 'string',
				default: 'Enable Email Notifications'
			},
			{
				name: 'description',
				label: 'Helper Description',
				type: 'string',
				default: 'Receive real-time updates directly'
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error'],
				default: 'primary'
			},
			{
				name: 'checked',
				label: 'Initial State',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'checkbox',
		name: 'UCheckbox',
		category: 'form',
		icon: 'lucide:check-square',
		description: 'Checkbox input for agreements and choices',
		isContainer: false,
		defaultProps: {
			label: 'I accept the terms and privacy policy',
			color: 'primary',
			checked: true
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'label',
				label: 'Label',
				type: 'string',
				default: 'I accept the terms and privacy policy'
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error'],
				default: 'primary'
			},
			{
				name: 'checked',
				label: 'Checked',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'slider',
		name: 'USlider',
		category: 'form',
		icon: 'lucide:sliders-horizontal',
		description: 'Range slider input for numeric values',
		isContainer: false,
		defaultProps: {
			min: 0,
			max: 100,
			step: 1,
			value: 65,
			color: 'primary',
			size: 'md'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'value',
				label: 'Value',
				type: 'number',
				default: 65
			},
			{
				name: 'color',
				label: 'Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error'],
				default: 'primary'
			},
			{
				name: 'size',
				label: 'Size',
				type: 'select',
				options: ['xs', 'sm', 'md', 'lg', 'xl'],
				default: 'md'
			}
		]
	},

	// -------------------------------------------------------------
	// DATA & DISPLAY COMPONENTS
	// -------------------------------------------------------------
	{
		type: 'table',
		name: 'UTable',
		category: 'data',
		icon: 'lucide:table-2',
		description: 'Interactive data table with sort, paginate and row selection',
		isContainer: false,
		defaultProps: {
			caption: 'Users Directory'
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-4'
		},
		propsSchema: [
			{
				name: 'caption',
				label: 'Table Title',
				type: 'string',
				default: 'Users Directory'
			}
		]
	},
	{
		type: 'carousel',
		name: 'UCarousel',
		category: 'data',
		icon: 'lucide:gallery-horizontal',
		description: 'Interactive multi-slide image / card carousel slider',
		isContainer: false,
		defaultProps: {
			items: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800, https://images.unsplash.com/photo-1558655146-d09347e92766?w=800, https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800',
			arrows: true,
			dots: true
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-4'
		},
		propsSchema: [
			{
				name: 'items',
				label: 'Image URLs (Comma separated)',
				type: 'textarea',
				default: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800, https://images.unsplash.com/photo-1558655146-d09347e92766?w=800'
			},
			{
				name: 'arrows',
				label: 'Show Navigation Arrows',
				type: 'boolean',
				default: true
			},
			{
				name: 'dots',
				label: 'Show Indicator Dots',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'empty',
		name: 'UEmpty',
		category: 'data',
		icon: 'lucide:inbox',
		description: 'Empty state illustration with call-to-action button',
		isContainer: false,
		defaultProps: {
			title: 'No Projects Found',
			description: 'Get started by creating a new project or importing from GitHub.',
			icon: 'lucide:folder-plus',
			actionText: 'Create New Project'
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-6',
			padding: 'p-8'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Title',
				type: 'string',
				default: 'No Projects Found'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'Get started by creating a new project.'
			},
			{
				name: 'icon',
				label: 'Icon',
				type: 'icon',
				default: 'lucide:folder-plus'
			},
			{
				name: 'actionText',
				label: 'Button Label',
				type: 'string',
				default: 'Create New Project'
			}
		]
	},
	{
		type: 'marquee',
		name: 'UMarquee',
		category: 'data',
		icon: 'lucide:move-horizontal',
		description: 'Infinite animated scrolling ticker for logos and partner badges',
		isContainer: false,
		defaultProps: {
			items: 'Nuxt, Vue.js, Tailwind CSS, Vite, TypeScript, Nitro, Pinia',
			speed: 25,
			pauseOnHover: true
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-4'
		},
		propsSchema: [
			{
				name: 'items',
				label: 'Items (Comma separated)',
				type: 'textarea',
				default: 'Nuxt, Vue.js, Tailwind CSS, Vite, TypeScript, Nitro, Pinia'
			},
			{
				name: 'pauseOnHover',
				label: 'Pause on Mouse Hover',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'scroll-area',
		name: 'UScrollArea',
		category: 'data',
		icon: 'lucide:scroll',
		description: 'Custom scrollbar container with smooth track overflow',
		isContainer: true,
		defaultProps: {
			height: 'h-48'
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-3'
		},
		propsSchema: [
			{
				name: 'height',
				label: 'Height Class',
				type: 'select',
				options: ['h-32', 'h-48', 'h-64', 'h-96'],
				default: 'h-48'
			}
		]
	},
	{
		type: 'timeline',
		name: 'UTimeline',
		category: 'data',
		icon: 'lucide:git-commit-horizontal',
		description: 'Vertical chronological milestones timeline',
		isContainer: false,
		defaultProps: {
			items: '2024: Nuxt UI v4 launch with Reka UI, 2023: Nuxt UI v2 release, 2022: Initial alpha release'
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-4'
		},
		propsSchema: [
			{
				name: 'items',
				label: 'Timeline Items (Year: Description comma separated)',
				type: 'textarea',
				default: '2024: Nuxt UI v4 launch, 2023: Nuxt UI v2 release, 2022: Initial alpha'
			}
		]
	},
	{
		type: 'tree',
		name: 'UTree',
		category: 'data',
		icon: 'lucide:network',
		description: 'Interactive expandable tree view navigator',
		isContainer: false,
		defaultProps: {
			title: 'Documentation Tree',
			items: 'Getting Started: Installation, Configuration, Theming | Components: Button, Input, Table, Modal'
		},
		defaultStyles: {
			width: 'w-full',
			margin: 'my-3'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Tree Title',
				type: 'string',
				default: 'Documentation Tree'
			}
		]
	},
	{
		type: 'user',
		name: 'UUser',
		category: 'data',
		icon: 'lucide:user-check',
		description: 'User card row with avatar, name, email and action',
		isContainer: false,
		defaultProps: {
			name: 'Alexandre Rochon',
			description: 'Core Maintainer @ NuxtLabs',
			avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
			to: 'https://github.com/alexandrerf'
		},
		defaultStyles: {
			margin: 'my-2'
		},
		propsSchema: [
			{
				name: 'name',
				label: 'User Name',
				type: 'string',
				default: 'Alexandre Rochon'
			},
			{
				name: 'description',
				label: 'Description / Email',
				type: 'string',
				default: 'Core Maintainer @ NuxtLabs'
			},
			{
				name: 'avatar',
				label: 'Avatar URL',
				type: 'string',
				default: 'https://avatars.githubusercontent.com/u/739984?v=4'
			}
		]
	},
	{
		type: 'stat-card',
		name: 'Stat Card',
		category: 'data',
		icon: 'lucide:trending-up',
		description: 'Metric counter card with change rate indicator',
		isContainer: false,
		defaultProps: {
			title: 'Total Active Users',
			value: '48.5K',
			change: '+18.2%',
			changeType: 'positive',
			icon: 'lucide:users',
			iconColor: 'primary'
		},
		defaultStyles: {
			padding: 'p-5',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Metric Label',
				type: 'string',
				default: 'Total Active Users'
			},
			{
				name: 'value',
				label: 'Value',
				type: 'string',
				default: '48.5K'
			},
			{
				name: 'change',
				label: 'Change Text',
				type: 'string',
				default: '+18.2%'
			},
			{
				name: 'changeType',
				label: 'Change Type',
				type: 'select',
				options: ['positive', 'negative', 'neutral'],
				default: 'positive'
			},
			{
				name: 'icon',
				label: 'Metric Icon',
				type: 'icon',
				default: 'lucide:users'
			}
		]
	},

	// -------------------------------------------------------------
	// COMPOUND SECTIONS
	// -------------------------------------------------------------
	{
		type: 'hero-section',
		name: 'UPageHero',
		category: 'compound',
		icon: 'lucide:sparkle',
		description: 'Nuxt UI PageHero with title, description, headline, links, and illustration slot',
		isContainer: true,
		defaultProps: {
			headline: 'New release',
			title: 'Build Lightning Fast Web Apps with Nuxt UI',
			description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.',
			orientation: 'vertical',
			reverse: false,
			primaryBtnText: 'Get Started',
			primaryBtnIcon: 'lucide:arrow-right',
			primaryBtnColor: 'primary',
			primaryBtnVariant: 'solid',
			secondaryBtnText: 'Learn More',
			secondaryBtnIcon: 'lucide:book-open',
			secondaryBtnColor: 'neutral',
			secondaryBtnVariant: 'outline',
			showIllustration: false,
			imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000'
		},
		defaultStyles: {
			padding: 'py-20 px-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'headline',
				label: 'Headline / Badge',
				type: 'string',
				default: 'New release'
			},
			{
				name: 'title',
				label: 'Hero Title',
				type: 'string',
				default: 'Build Lightning Fast Web Apps with Nuxt UI'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components.'
			},
			{
				name: 'orientation',
				label: 'Orientation',
				type: 'select',
				options: ['vertical', 'horizontal'],
				default: 'vertical'
			},
			{
				name: 'reverse',
				label: 'Reverse Order',
				type: 'boolean',
				default: false
			},
			{
				name: 'primaryBtnText',
				label: 'Primary Button Label',
				type: 'string',
				default: 'Get Started'
			},
			{
				name: 'primaryBtnIcon',
				label: 'Primary Button Icon',
				type: 'icon',
				default: 'lucide:arrow-right'
			},
			{
				name: 'primaryBtnColor',
				label: 'Primary Button Color',
				type: 'select',
				options: ['primary', 'neutral', 'success', 'warning', 'error'],
				default: 'primary'
			},
			{
				name: 'primaryBtnVariant',
				label: 'Primary Button Variant',
				type: 'select',
				options: ['solid', 'outline', 'soft', 'subtle', 'ghost'],
				default: 'solid'
			},
			{
				name: 'secondaryBtnText',
				label: 'Secondary Button Label',
				type: 'string',
				default: 'Learn More'
			},
			{
				name: 'secondaryBtnIcon',
				label: 'Secondary Button Icon',
				type: 'icon',
				default: 'lucide:book-open'
			},
			{
				name: 'secondaryBtnColor',
				label: 'Secondary Button Color',
				type: 'select',
				options: ['neutral', 'primary', 'secondary'],
				default: 'neutral'
			},
			{
				name: 'secondaryBtnVariant',
				label: 'Secondary Button Variant',
				type: 'select',
				options: ['outline', 'solid', 'soft', 'subtle', 'ghost'],
				default: 'outline'
			},
			{
				name: 'showIllustration',
				label: 'Show Image / Screenshot',
				type: 'boolean',
				default: false
			},
			{
				name: 'imageUrl',
				label: 'Image URL',
				type: 'string',
				default: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000'
			}
		]
	},
	{
		type: 'feature-card',
		name: 'Feature Card',
		category: 'compound',
		icon: 'lucide:layers',
		description: 'Feature highlight card with icon container, title and text',
		isContainer: false,
		defaultProps: {
			title: 'Instant Code Generation',
			description: 'Every visual edit automatically compiles into clean, type-safe Nuxt 4 SFC template code ready for production.',
			icon: 'lucide:code-2',
			iconColor: 'primary'
		},
		defaultStyles: {
			padding: 'p-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Feature Title',
				type: 'string',
				default: 'Instant Code Generation'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'Every visual edit compiles into clean Nuxt 4 SFC code.'
			},
			{
				name: 'icon',
				label: 'Icon',
				type: 'icon',
				default: 'lucide:code-2'
			}
		]
	},
	{
		type: 'pricing-card',
		name: 'Pricing Card',
		category: 'compound',
		icon: 'lucide:credit-card',
		description: 'High-converting pricing plan card with features list and CTA',
		isContainer: false,
		defaultProps: {
			plan: 'Pro Plan',
			badge: 'Most Popular',
			price: '$29',
			period: '/month',
			description: 'Ideal for fast-growing startups and creative agencies.',
			buttonText: 'Get Started Now',
			featured: true,
			features: 'Unlimited projects,Nuxt 4 code export,Priority support,Team collaboration,Custom themes'
		},
		defaultStyles: {
			padding: 'p-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'plan',
				label: 'Plan Name',
				type: 'string',
				default: 'Pro Plan'
			},
			{
				name: 'badge',
				label: 'Badge Text',
				type: 'string',
				default: 'Most Popular'
			},
			{
				name: 'price',
				label: 'Price',
				type: 'string',
				default: '$29'
			},
			{
				name: 'period',
				label: 'Billing Period',
				type: 'string',
				default: '/month'
			},
			{
				name: 'description',
				label: 'Plan Description',
				type: 'textarea',
				default: 'Ideal for fast-growing startups and agencies.'
			},
			{
				name: 'buttonText',
				label: 'Button Label',
				type: 'string',
				default: 'Get Started Now'
			},
			{
				name: 'featured',
				label: 'Featured Highlight',
				type: 'boolean',
				default: true
			},
			{
				name: 'features',
				label: 'Features (comma separated)',
				type: 'textarea',
				default: 'Unlimited projects,Nuxt 4 code export,Priority support,Custom themes'
			}
		]
	},
	{
		type: 'testimonial-card',
		name: 'Testimonial Card',
		category: 'compound',
		icon: 'lucide:message-square-quote',
		description: 'Customer review and quote card with avatar',
		isContainer: false,
		defaultProps: {
			quote: 'Nuxt UI Builder cut our landing page development time from days to minutes. The generated Vue code is remarkably clean!',
			author: 'Sarah Jenkins',
			role: 'VP of Product at TechFlow',
			avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
			rating: 5
		},
		defaultStyles: {
			padding: 'p-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'quote',
				label: 'Quote Text',
				type: 'textarea',
				default: 'Nuxt UI Builder cut our landing page development time from days to minutes.'
			},
			{
				name: 'author',
				label: 'Author Name',
				type: 'string',
				default: 'Sarah Jenkins'
			},
			{
				name: 'role',
				label: 'Author Role / Company',
				type: 'string',
				default: 'VP of Product at TechFlow'
			},
			{
				name: 'avatarUrl',
				label: 'Avatar URL',
				type: 'string',
				default: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
			}
		]
	},
	{
		type: 'footer-section',
		name: 'Footer Section',
		category: 'compound',
		icon: 'lucide:panel-bottom',
		description: 'Modern multi-column website footer with branding and links',
		isContainer: false,
		defaultProps: {
			brandName: 'NuxtUI Builder',
			tagline: 'Visual UI builder for the Vue and Nuxt ecosystem.',
			copyright: '© 2026 NuxtUI Builder. All rights reserved.'
		},
		defaultStyles: {
			padding: 'py-12 px-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'brandName',
				label: 'Brand Name',
				type: 'string',
				default: 'NuxtUI Builder'
			},
			{
				name: 'tagline',
				label: 'Tagline',
				type: 'string',
				default: 'Visual UI builder for the Vue and Nuxt ecosystem.'
			},
			{
				name: 'copyright',
				label: 'Copyright Notice',
				type: 'string',
				default: '© 2026 NuxtUI Builder. All rights reserved.'
			}
		]
	},

	// -------------------------------------------------------------
	// OFFICIAL NUXT UI PAGE & PRO COMPONENTS
	// -------------------------------------------------------------
	{
		type: 'auth-form',
		name: 'UAuthForm',
		category: 'page',
		icon: 'lucide:log-in',
		description: 'Complete authentication login / register form with social providers and fields',
		isContainer: false,
		defaultProps: {
			title: 'Welcome back',
			description: 'Enter your credentials to access your account.',
			icon: 'lucide:lock',
			submitBtnText: 'Continue with Email',
			showProviders: true,
			showEmail: true,
			showPassword: true
		},
		defaultStyles: {
			maxWidth: 'max-w-md',
			margin: 'mx-auto',
			padding: 'p-8'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Title',
				type: 'string',
				default: 'Welcome back'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'string',
				default: 'Enter your credentials to access your account.'
			},
			{
				name: 'icon',
				label: 'Header Icon',
				type: 'icon',
				default: 'lucide:lock'
			},
			{
				name: 'submitBtnText',
				label: 'Submit Button Label',
				type: 'string',
				default: 'Continue with Email'
			},
			{
				name: 'showProviders',
				label: 'Show Social Providers',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'blog-post',
		name: 'UBlogPost',
		category: 'page',
		icon: 'lucide:newspaper',
		description: 'Blog post card with image cover, date badge, author avatar and reading time',
		isContainer: false,
		defaultProps: {
			title: 'Building Modern Full-Stack Vue Apps with Nuxt 4',
			description: 'Learn how the latest features of Nuxt 4 and Nuxt UI v4 streamline developer productivity and UI composition.',
			date: 'Feb 26, 2026',
			badge: 'Tutorial',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
			authorName: 'Sarah Jenkins',
			authorRole: 'Core Developer',
			authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
			orientation: 'vertical'
		},
		defaultStyles: {
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Article Title',
				type: 'string',
				default: 'Building Modern Full-Stack Vue Apps with Nuxt 4'
			},
			{
				name: 'description',
				label: 'Summary / Description',
				type: 'textarea',
				default: 'Learn how the latest features of Nuxt 4 streamline developer productivity.'
			},
			{
				name: 'date',
				label: 'Publish Date',
				type: 'string',
				default: 'Feb 26, 2026'
			},
			{
				name: 'badge',
				label: 'Category Badge',
				type: 'string',
				default: 'Tutorial'
			},
			{
				name: 'image',
				label: 'Cover Image URL',
				type: 'string',
				default: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'
			},
			{
				name: 'authorName',
				label: 'Author Name',
				type: 'string',
				default: 'Sarah Jenkins'
			},
			{
				name: 'authorRole',
				label: 'Author Role',
				type: 'string',
				default: 'Core Developer'
			},
			{
				name: 'orientation',
				label: 'Card Orientation',
				type: 'select',
				options: ['vertical', 'horizontal'],
				default: 'vertical'
			}
		]
	},
	{
		type: 'blog-posts',
		name: 'UBlogPosts',
		category: 'page',
		icon: 'lucide:library',
		description: 'Container grid or list for blog post articles',
		isContainer: true,
		defaultProps: {
			orientation: 'vertical'
		},
		defaultStyles: {
			width: 'w-full',
			padding: 'py-8'
		},
		propsSchema: [
			{
				name: 'orientation',
				label: 'Layout Orientation',
				type: 'select',
				options: ['vertical', 'horizontal'],
				default: 'vertical'
			}
		]
	},
	{
		type: 'changelog-version',
		name: 'UChangelogVersion',
		category: 'page',
		icon: 'lucide:git-commit',
		description: 'Product release version card with timeline indicator and markdown body',
		isContainer: true,
		defaultProps: {
			version: 'v4.2.0',
			date: 'February 26, 2026',
			badge: 'Latest',
			title: 'Nuxt UI v4 Studio Release & Performance Upgrades',
			description: 'Introduced visual drag and drop, code export, Theme Picker, and zero-config styling.'
		},
		defaultStyles: {
			width: 'w-full',
			padding: 'py-6'
		},
		propsSchema: [
			{
				name: 'version',
				label: 'Version Tag',
				type: 'string',
				default: 'v4.2.0'
			},
			{
				name: 'date',
				label: 'Release Date',
				type: 'string',
				default: 'February 26, 2026'
			},
			{
				name: 'badge',
				label: 'Badge Status',
				type: 'string',
				default: 'Latest'
			},
			{
				name: 'title',
				label: 'Release Title',
				type: 'string',
				default: 'Nuxt UI v4 Studio Release'
			},
			{
				name: 'description',
				label: 'Summary',
				type: 'textarea',
				default: 'Introduced visual drag and drop, code export, Theme Picker, and zero-config styling.'
			}
		]
	},
	{
		type: 'changelog-versions',
		name: 'UChangelogVersions',
		category: 'page',
		icon: 'lucide:history',
		description: 'Vertical timeline list container for product releases and changelogs',
		isContainer: true,
		defaultProps: {},
		defaultStyles: {
			width: 'w-full',
			padding: 'py-12'
		},
		propsSchema: []
	},
	{
		type: 'page',
		name: 'UPage',
		category: 'page',
		icon: 'lucide:app-window',
		description: 'Root page container wrapping header, aside, body and footer',
		isContainer: true,
		defaultProps: {},
		defaultStyles: {
			width: 'w-full',
			padding: 'py-6 px-4'
		},
		propsSchema: []
	},
	{
		type: 'page-header',
		name: 'UPageHeader',
		category: 'page',
		icon: 'lucide:heading-1',
		description: 'Documentation or dashboard page title header with headline, subtitle and action links',
		isContainer: false,
		defaultProps: {
			headline: 'Documentation',
			title: 'Getting Started with Nuxt UI',
			description: 'A comprehensive guide to building beautiful Vue 3 and Nuxt applications with accessible components.',
			icon: 'lucide:book-open',
			primaryBtnText: 'Quickstart',
			secondaryBtnText: 'GitHub'
		},
		defaultStyles: {
			padding: 'py-8 px-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'headline',
				label: 'Headline',
				type: 'string',
				default: 'Documentation'
			},
			{
				name: 'title',
				label: 'Page Title',
				type: 'string',
				default: 'Getting Started with Nuxt UI'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'A comprehensive guide to building beautiful Vue 3 applications.'
			},
			{
				name: 'icon',
				label: 'Header Icon',
				type: 'icon',
				default: 'lucide:book-open'
			},
			{
				name: 'primaryBtnText',
				label: 'Primary Action',
				type: 'string',
				default: 'Quickstart'
			},
			{
				name: 'secondaryBtnText',
				label: 'Secondary Action',
				type: 'string',
				default: 'GitHub'
			}
		]
	},
	{
		type: 'page-body',
		name: 'UPageBody',
		category: 'page',
		icon: 'lucide:align-left',
		description: 'Main page content wrapper optimized for documentation and prose reading',
		isContainer: true,
		defaultProps: {
			prose: true
		},
		defaultStyles: {
			width: 'w-full',
			padding: 'py-4'
		},
		propsSchema: [
			{
				name: 'prose',
				label: 'Prose Typography Styling',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'page-aside',
		name: 'UPageAside',
		category: 'page',
		icon: 'lucide:panel-left-dashed',
		description: 'Documentation side navigation sidebar panel',
		isContainer: true,
		defaultProps: {
			title: 'Navigation'
		},
		defaultStyles: {
			width: 'w-64',
			padding: 'p-4'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Aside Title',
				type: 'string',
				default: 'Navigation'
			}
		]
	},
	{
		type: 'page-anchors',
		name: 'UPageAnchors',
		category: 'page',
		icon: 'lucide:list-tree',
		description: 'Table of contents / "On this page" quick jump navigation list',
		isContainer: false,
		defaultProps: {
			title: 'On this page',
			links: 'Installation,Usage,Props,Slots,Examples'
		},
		defaultStyles: {
			width: 'w-60',
			padding: 'p-4'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Title',
				type: 'string',
				default: 'On this page'
			},
			{
				name: 'links',
				label: 'Links (comma separated)',
				type: 'textarea',
				default: 'Installation,Usage,Props,Slots,Examples'
			}
		]
	},
	{
		type: 'page-grid',
		name: 'UPageGrid',
		category: 'page',
		icon: 'lucide:layout-grid',
		description: 'Responsive multi-column card grid wrapper for page sections',
		isContainer: true,
		defaultProps: {
			columns: '3'
		},
		defaultStyles: {
			width: 'w-full',
			padding: 'py-8'
		},
		propsSchema: [
			{
				name: 'columns',
				label: 'Grid Columns',
				type: 'select',
				options: ['2', '3', '4'],
				default: '3'
			}
		]
	},
	{
		type: 'page-columns',
		name: 'UPageColumns',
		category: 'page',
		icon: 'lucide:columns-3',
		description: 'Masonry / column layout container for testimonials and cards',
		isContainer: true,
		defaultProps: {},
		defaultStyles: {
			width: 'w-full',
			padding: 'py-8'
		},
		propsSchema: []
	},
	{
		type: 'page-card',
		name: 'UPageCard',
		category: 'page',
		icon: 'lucide:square-dashed-bottom-code',
		description: 'Versatile feature and resource card with icon, highlight gradient and link action',
		isContainer: true,
		defaultProps: {
			title: 'Customizable Theming',
			description: 'Tailor colors, fonts, radius and dark mode with real-time feedback and export.',
			icon: 'lucide:palette',
			variant: 'outline',
			highlight: true,
			orientation: 'vertical'
		},
		defaultStyles: {
			padding: 'p-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Card Title',
				type: 'string',
				default: 'Customizable Theming'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'Tailor colors, fonts, radius and dark mode with real-time feedback.'
			},
			{
				name: 'icon',
				label: 'Card Icon',
				type: 'icon',
				default: 'lucide:palette'
			},
			{
				name: 'variant',
				label: 'Variant',
				type: 'select',
				options: ['outline', 'subtle', 'soft', 'solid'],
				default: 'outline'
			},
			{
				name: 'highlight',
				label: 'Gradient Highlight Glow',
				type: 'boolean',
				default: true
			},
			{
				name: 'orientation',
				label: 'Orientation',
				type: 'select',
				options: ['vertical', 'horizontal'],
				default: 'vertical'
			}
		]
	},
	{
		type: 'page-feature',
		name: 'UPageFeature',
		category: 'page',
		icon: 'lucide:sparkles',
		description: 'Horizontal or vertical feature item with icon badge and description',
		isContainer: false,
		defaultProps: {
			title: 'Zero Configuration',
			description: 'Instant setup with automatic Nuxt 4 module registration and TypeScript typing.',
			icon: 'lucide:zap',
			orientation: 'horizontal'
		},
		defaultStyles: {
			padding: 'p-4',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Feature Title',
				type: 'string',
				default: 'Zero Configuration'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'Instant setup with automatic Nuxt 4 module registration.'
			},
			{
				name: 'icon',
				label: 'Feature Icon',
				type: 'icon',
				default: 'lucide:zap'
			},
			{
				name: 'orientation',
				label: 'Orientation',
				type: 'select',
				options: ['horizontal', 'vertical'],
				default: 'horizontal'
			}
		]
	},
	{
		type: 'page-section',
		name: 'UPageSection',
		category: 'page',
		icon: 'lucide:layout-panel-top',
		description: 'Full-width responsive section with headline, title, description, links, and illustration slot',
		isContainer: true,
		defaultProps: {
			headline: 'Features',
			title: 'Everything You Need to Build Modern Vue Web Apps',
			description: 'Nuxt UI provides a comprehensive suite of accessible components, composables, and theming tools.',
			icon: 'lucide:rocket',
			orientation: 'vertical',
			reverse: false,
			primaryBtnText: 'Get Started',
			secondaryBtnText: 'Explore Components',
			showIllustration: false,
			imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000'
		},
		defaultStyles: {
			padding: 'py-20 px-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'headline',
				label: 'Headline',
				type: 'string',
				default: 'Features'
			},
			{
				name: 'title',
				label: 'Section Title',
				type: 'string',
				default: 'Everything You Need to Build Modern Vue Web Apps'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'Nuxt UI provides a comprehensive suite of accessible components.'
			},
			{
				name: 'icon',
				label: 'Leading Icon',
				type: 'icon',
				default: 'lucide:rocket'
			},
			{
				name: 'orientation',
				label: 'Orientation',
				type: 'select',
				options: ['vertical', 'horizontal'],
				default: 'vertical'
			},
			{
				name: 'reverse',
				label: 'Reverse Order',
				type: 'boolean',
				default: false
			},
			{
				name: 'primaryBtnText',
				label: 'Primary Button',
				type: 'string',
				default: 'Get Started'
			},
			{
				name: 'secondaryBtnText',
				label: 'Secondary Button',
				type: 'string',
				default: 'Explore Components'
			},
			{
				name: 'showIllustration',
				label: 'Show Illustration / Image',
				type: 'boolean',
				default: false
			},
			{
				name: 'imageUrl',
				label: 'Image URL',
				type: 'string',
				default: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000'
			}
		]
	},
	{
		type: 'page-cta',
		name: 'UPageCTA',
		category: 'page',
		icon: 'lucide:megaphone',
		description: 'High-converting Call To Action section with headline, title, and action buttons',
		isContainer: true,
		defaultProps: {
			headline: 'Ready to ship?',
			title: 'Start Building Your Next Nuxt Project Today',
			description: 'Join thousands of developers creating blazing-fast web applications with Nuxt UI v4.',
			primaryBtnText: 'Get Started for Free',
			secondaryBtnText: 'Contact Sales',
			variant: 'subtle',
			orientation: 'vertical'
		},
		defaultStyles: {
			padding: 'py-16 px-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'headline',
				label: 'Headline',
				type: 'string',
				default: 'Ready to ship?'
			},
			{
				name: 'title',
				label: 'CTA Title',
				type: 'string',
				default: 'Start Building Your Next Nuxt Project Today'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'Join thousands of developers creating blazing-fast web applications.'
			},
			{
				name: 'primaryBtnText',
				label: 'Primary Button',
				type: 'string',
				default: 'Get Started for Free'
			},
			{
				name: 'secondaryBtnText',
				label: 'Secondary Button',
				type: 'string',
				default: 'Contact Sales'
			},
			{
				name: 'variant',
				label: 'Visual Variant',
				type: 'select',
				options: ['subtle', 'outline', 'solid', 'naked'],
				default: 'subtle'
			},
			{
				name: 'orientation',
				label: 'Orientation',
				type: 'select',
				options: ['vertical', 'horizontal'],
				default: 'vertical'
			}
		]
	},
	{
		type: 'page-logos',
		name: 'UPageLogos',
		category: 'page',
		icon: 'lucide:gallery-horizontal',
		description: 'Social proof partner and client logo showcase section',
		isContainer: false,
		defaultProps: {
			title: 'Trusted by engineering teams and innovators worldwide',
			logos: 'Vue.js,Nuxt,Vite,TailwindCSS,TypeScript,Nitro'
		},
		defaultStyles: {
			padding: 'py-12 px-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Section Heading',
				type: 'string',
				default: 'Trusted by engineering teams and innovators worldwide'
			},
			{
				name: 'logos',
				label: 'Logos / Brands (comma separated)',
				type: 'textarea',
				default: 'Vue.js,Nuxt,Vite,TailwindCSS,TypeScript,Nitro'
			}
		]
	},
	{
		type: 'page-list',
		name: 'UPageList',
		category: 'page',
		icon: 'lucide:list',
		description: 'Structured list section for resources, faq or content summaries',
		isContainer: true,
		defaultProps: {
			title: 'Frequently Asked Questions',
			description: 'Everything you need to know about Nuxt UI Studio.'
		},
		defaultStyles: {
			padding: 'py-12 px-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Title',
				type: 'string',
				default: 'Frequently Asked Questions'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'Everything you need to know about Nuxt UI Studio.'
			}
		]
	},
	{
		type: 'page-links',
		name: 'UPageLinks',
		category: 'page',
		icon: 'lucide:link-2',
		description: 'Navigation link group with icons for resources and external links',
		isContainer: false,
		defaultProps: {
			title: 'Resources',
			links: 'GitHub Repository,Nuxt UI Documentation,Discord Community,Figma UI Kit'
		},
		defaultStyles: {
			width: 'w-60',
			padding: 'p-4'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Title',
				type: 'string',
				default: 'Resources'
			},
			{
				name: 'links',
				label: 'Links (comma separated)',
				type: 'textarea',
				default: 'GitHub Repository,Nuxt UI Documentation,Discord Community,Figma UI Kit'
			}
		]
	},
	{
		type: 'pricing-plan',
		name: 'UPricingPlan',
		category: 'page',
		icon: 'lucide:credit-card',
		description: 'Official Nuxt UI Pricing Plan card with features, pricing badge and CTA',
		isContainer: false,
		defaultProps: {
			title: 'Pro Plan',
			description: 'Ideal for fast-growing startups and agencies building high-impact products.',
			price: '$29',
			billingPeriod: '/month',
			badge: 'Most Popular',
			buttonText: 'Start 14-Day Free Trial',
			highlight: true,
			features: 'Unlimited projects,Nuxt 4 code export,Nuxt Content MDC support,Priority support,Custom themes'
		},
		defaultStyles: {
			padding: 'p-8',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Plan Title',
				type: 'string',
				default: 'Pro Plan'
			},
			{
				name: 'description',
				label: 'Plan Description',
				type: 'textarea',
				default: 'Ideal for fast-growing startups and agencies.'
			},
			{
				name: 'price',
				label: 'Price',
				type: 'string',
				default: '$29'
			},
			{
				name: 'billingPeriod',
				label: 'Billing Period',
				type: 'string',
				default: '/month'
			},
			{
				name: 'badge',
				label: 'Highlight Badge',
				type: 'string',
				default: 'Most Popular'
			},
			{
				name: 'buttonText',
				label: 'Button Label',
				type: 'string',
				default: 'Start 14-Day Free Trial'
			},
			{
				name: 'highlight',
				label: 'Highlighted / Featured',
				type: 'boolean',
				default: true
			},
			{
				name: 'features',
				label: 'Features List (comma separated)',
				type: 'textarea',
				default: 'Unlimited projects,Nuxt 4 code export,Nuxt Content MDC support,Priority support,Custom themes'
			}
		]
	},
	{
		type: 'pricing-plans',
		name: 'UPricingPlans',
		category: 'page',
		icon: 'lucide:table-properties',
		description: 'Multi-column grid container for UPricingPlan cards',
		isContainer: true,
		defaultProps: {
			scale: true
		},
		defaultStyles: {
			padding: 'py-16 px-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'scale',
				label: 'Scale Featured Plan',
				type: 'boolean',
				default: true
			}
		]
	},
	{
		type: 'pricing-table',
		name: 'UPricingTable',
		category: 'page',
		icon: 'lucide:table',
		description: 'Feature comparison matrix table across pricing tiers',
		isContainer: false,
		defaultProps: {
			title: 'Compare All Plan Features',
			description: 'Find the plan that matches your project requirements and team scale.'
		},
		defaultStyles: {
			padding: 'py-16 px-6',
			width: 'w-full'
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Table Title',
				type: 'string',
				default: 'Compare All Plan Features'
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'Find the plan that matches your project requirements.'
			}
		]
	}
]

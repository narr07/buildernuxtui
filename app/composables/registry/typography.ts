import type { ComponentDefinition } from '~/types/builder'

export const typographyComponents: ComponentDefinition[] = [
	{
		type: 'heading',
		name: 'Heading',
		category: 'typography',
		icon: 'lucide:heading',
		description: 'Prose headings from H1 to H6 with anchor links and gradient options',
		isContainer: false,
		defaultProps: {
			text: 'Create Stunning Web Experiences',
			level: 'h2',
			gradient: false,
		},
		defaultStyles: {
			textAlign: 'left',
			margin: 'mb-2',
		},
		propsSchema: [
			{
				name: 'text',
				label: 'Heading Text',
				type: 'string',
				default: 'Create Stunning Web Experiences',
			},
			{
				name: 'level',
				label: 'Tag Level',
				type: 'select',
				options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
				default: 'h2',
			},
			{
				name: 'gradient',
				label: 'Gradient Accent',
				type: 'boolean',
				default: false,
			},
		],
	},
	{
		type: 'paragraph',
		name: 'Paragraph',
		category: 'typography',
		icon: 'lucide:align-left',
		description: 'Formatted body paragraph with typography sizing and colors',
		isContainer: false,
		defaultProps: {
			text: 'Nuxt UI provides a comprehensive collection of Vue components, composables and utilities for building modern, accessible applications with consistent design and enhanced user experience.',
			size: 'text-base',
			color: 'muted',
		},
		defaultStyles: {
			textAlign: 'left',
			margin: 'mb-2',
		},
		propsSchema: [
			{
				name: 'text',
				label: 'Paragraph Content',
				type: 'textarea',
				default: 'Nuxt UI provides a comprehensive collection of Vue components, composables and utilities.',
			},
			{
				name: 'size',
				label: 'Font Size',
				type: 'select',
				options: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl'],
				default: 'text-base',
			},
			{
				name: 'color',
				label: 'Text Color',
				type: 'select',
				options: ['default', 'muted', 'primary', 'secondary'],
				default: 'muted',
			},
		],
	},
	{
		type: 'lead',
		name: 'Lead Text',
		category: 'typography',
		icon: 'lucide:type',
		description: 'Prominent introductory lead paragraph for chapter headers',
		isContainer: false,
		defaultProps: {
			text: 'A modern, modular design system crafted specifically for Nuxt 4 and Vue 3 applications.',
		},
		defaultStyles: {
			textAlign: 'left',
			margin: 'mb-4',
		},
		propsSchema: [
			{
				name: 'text',
				label: 'Lead Text Content',
				type: 'textarea',
				default: 'A modern, modular design system crafted specifically for Nuxt 4 and Vue 3 applications.',
			},
		],
	},
	{
		type: 'blockquote',
		name: 'Blockquote',
		category: 'typography',
		icon: 'lucide:quote',
		description: 'Styled blockquote with author attribution and accent border',
		isContainer: false,
		defaultProps: {
			quote: 'Nuxt UI combines the flexibility of headless primitives with stunning default styles out of the box.',
			author: 'Alexandre Rochon',
			role: 'Nuxt UI Maintainer',
		},
		defaultStyles: {
			margin: 'my-4',
		},
		propsSchema: [
			{
				name: 'quote',
				label: 'Quote Text',
				type: 'textarea',
				default: 'Nuxt UI combines the flexibility of headless primitives with stunning default styles out of the box.',
			},
			{
				name: 'author',
				label: 'Author Name',
				type: 'string',
				default: 'Alexandre Rochon',
			},
			{
				name: 'role',
				label: 'Author Role / Citation',
				type: 'string',
				default: 'Nuxt UI Maintainer',
			},
		],
	},
	{
		type: 'list',
		name: 'List',
		category: 'typography',
		icon: 'lucide:list',
		description: 'Unordered, ordered or custom bullet icon prose list',
		isContainer: false,
		defaultProps: {
			items: 'Full TypeScript type safety, Seamless dark and light mode, Zero-config Nuxt 4 integration, Accessible Reka UI primitives',
			type: 'unordered',
			icon: 'lucide:check-circle-2',
		},
		defaultStyles: {
			margin: 'my-3',
		},
		propsSchema: [
			{
				name: 'items',
				label: 'List Items (Comma separated)',
				type: 'textarea',
				default: 'Full TypeScript type safety, Seamless dark and light mode, Zero-config Nuxt 4 integration, Accessible Reka UI primitives',
			},
			{
				name: 'type',
				label: 'List Style Type',
				type: 'select',
				options: ['unordered', 'ordered', 'icon'],
				default: 'unordered',
			},
			{
				name: 'icon',
				label: 'Custom Bullet Icon',
				type: 'icon',
				default: 'lucide:check-circle-2',
			},
		],
	},
	{
		type: 'table-doc',
		name: 'Table Doc',
		category: 'typography',
		icon: 'lucide:table',
		description: 'Prose content documentation table for APIs and properties',
		isContainer: false,
		defaultProps: {
			caption: 'Component Props Reference',
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'caption',
				label: 'Table Caption',
				type: 'string',
				default: 'Component Props Reference',
			},
		],
	},
	{
		type: 'image',
		name: 'Image & Embed',
		category: 'typography',
		icon: 'lucide:image',
		description: 'Documentation image with zoom overlay and caption',
		isContainer: false,
		defaultProps: {
			src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000',
			alt: 'Dashboard Screenshot',
			caption: 'Figure 1: Nuxt UI interactive dashboard overview.',
			zoom: true,
			width: 'full',
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'src',
				label: 'Image URL',
				type: 'string',
				default: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000',
			},
			{
				name: 'alt',
				label: 'Alt Text',
				type: 'string',
				default: 'Dashboard Screenshot',
			},
			{
				name: 'caption',
				label: 'Caption',
				type: 'string',
				default: 'Figure 1: Nuxt UI interactive dashboard overview.',
			},
			{
				name: 'zoom',
				label: 'Enable Zoom Modal',
				type: 'boolean',
				default: true,
			},
			{
				name: 'width',
				label: 'Width Format',
				type: 'select',
				options: ['full', '300', '400', '600', '800'],
				default: 'full',
			},
		],
	},
	{
		type: 'code',
		name: 'Inline Code',
		category: 'typography',
		icon: 'lucide:code',
		description: 'Inline formatted code tag with language syntax and theme color',
		isContainer: false,
		defaultProps: {
			code: 'npx nuxi init my-app',
			color: 'neutral',
			lang: 'ts',
		},
		defaultStyles: {},
		propsSchema: [
			{
				name: 'code',
				label: 'Code Text',
				type: 'string',
				default: 'npx nuxi init my-app',
			},
			{
				name: 'color',
				label: 'Color Theme',
				type: 'select',
				options: ['neutral', 'primary', 'secondary', 'success', 'info', 'warning', 'error'],
				default: 'neutral',
			},
			{
				name: 'lang',
				label: 'Language Syntax',
				type: 'string',
				default: 'ts',
			},
		],
	},
	{
		type: 'code-block',
		name: 'CodeBlock',
		category: 'typography',
		icon: 'lucide:terminal-square',
		description: 'Shiki syntax-highlighted code block with filename and copy button',
		isContainer: false,
		defaultProps: {
			filename: 'app.config.ts',
			language: 'typescript',
			copy: true,
			code: `export default defineAppConfig({
  ui: {
    primary: 'emerald',
    neutral: 'zinc'
  }
})`,
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'filename',
				label: 'File Name',
				type: 'string',
				default: 'app.config.ts',
			},
			{
				name: 'language',
				label: 'Language',
				type: 'select',
				options: ['typescript', 'javascript', 'vue', 'bash', 'json', 'css', 'html', 'diff', 'mdc'],
				default: 'typescript',
			},
			{
				name: 'copy',
				label: 'Show Copy Button',
				type: 'boolean',
				default: true,
			},
			{
				name: 'code',
				label: 'Source Code',
				type: 'textarea',
				default: `export default defineAppConfig({
  ui: {
    primary: 'emerald'
  }
})`,
			},
		],
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
			bun: 'bun add @nuxt/ui',
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'pnpm',
				label: 'pnpm command',
				type: 'string',
				default: 'pnpm add @nuxt/ui',
			},
			{
				name: 'npm',
				label: 'npm command',
				type: 'string',
				default: 'npm install @nuxt/ui',
			},
			{
				name: 'bun',
				label: 'bun command',
				type: 'string',
				default: 'bun add @nuxt/ui',
			},
		],
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
</template>`,
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Accordion Title',
				type: 'string',
				default: 'View full component setup',
			},
			{
				name: 'code',
				label: 'Code snippet',
				type: 'textarea',
				default: '<script setup lang="ts">\nconst count = ref(0)\n</script>',
			},
		],
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
			code: `<UButton color="primary" icon="lucide:sparkles" label="Interactive Action" />`,
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Preview Title',
				type: 'string',
				default: 'Interactive Button Demo',
			},
			{
				name: 'code',
				label: 'Source Code',
				type: 'textarea',
				default: '<UButton color="primary" label="Action" />',
			},
		],
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
└── app.vue`,
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Tree Title',
				type: 'string',
				default: 'Project Structure',
			},
			{
				name: 'tree',
				label: 'Folder Hierarchy',
				type: 'textarea',
				default: 'app/\n├── components/\n├── pages/\n└── app.vue',
			},
		],
	},
	{
		type: 'collapsible',
		name: 'Collapsible',
		category: 'typography',
		icon: 'lucide:chevron-down',
		description: 'Expandable toggle section for detailed prose content',
		isContainer: true,
		defaultProps: {
			title: 'Click to expand details',
			defaultOpen: false,
		},
		defaultStyles: {
			margin: 'my-3',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Header Title',
				type: 'string',
				default: 'Click to expand details',
			},
			{
				name: 'defaultOpen',
				label: 'Expanded by Default',
				type: 'boolean',
				default: false,
			},
		],
	},
	{
		type: 'prompt',
		name: 'Prompt',
		category: 'typography',
		icon: 'lucide:terminal',
		description: 'CLI command line prompt box with one-click copy',
		isContainer: false,
		defaultProps: {
			command: 'npx nuxi@latest init my-nuxt-app',
		},
		defaultStyles: {
			margin: 'my-3',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'command',
				label: 'CLI Command',
				type: 'string',
				default: 'npx nuxi@latest init my-nuxt-app',
			},
		],
	},
	{
		type: 'callout',
		name: 'Callout',
		category: 'typography',
		icon: 'lucide:info',
		description: 'Documentation alert callout (Tip, Note, Warning, Important, Caution)',
		isContainer: false,
		defaultProps: {
			type: 'tip',
			title: 'Pro Tip',
			description: 'Nuxt UI v4 automatically imports all components and icons without manual registration.',
			icon: 'lucide:sparkles',
			to: '',
			target: '_self',
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'type',
				label: 'Callout Type',
				type: 'select',
				options: ['tip', 'note', 'warning', 'important', 'caution'],
				default: 'tip',
			},
			{
				name: 'title',
				label: 'Callout Title',
				type: 'string',
				default: 'Pro Tip',
			},
			{
				name: 'description',
				label: 'Message',
				type: 'textarea',
				default: 'Nuxt UI v4 automatically imports all components and icons without manual registration.',
			},
			{
				name: 'icon',
				label: 'Icon',
				type: 'icon',
				default: 'lucide:sparkles',
			},
			{
				name: 'to',
				label: 'Link Target URL (Optional)',
				type: 'string',
				default: '',
			},
		],
	},
	{
		type: 'card-group',
		name: 'CardGroup',
		category: 'typography',
		icon: 'lucide:grid-2x2',
		description: 'Grid group container for documentation cards',
		isContainer: true,
		defaultProps: {
			columns: '2',
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'columns',
				label: 'Columns',
				type: 'select',
				options: ['2', '3', '4'],
				default: '2',
			},
		],
	},
	{
		type: 'field',
		name: 'Field',
		category: 'typography',
		icon: 'lucide:text-cursor',
		description: 'API prop/field documentation item with type and default value',
		isContainer: false,
		defaultProps: {
			name: 'color',
			type: 'string',
			required: false,
			default: '\'primary\'',
			description: 'The color palette theme applied to the component.',
		},
		defaultStyles: {
			margin: 'my-2',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'name',
				label: 'Prop / Field Name',
				type: 'string',
				default: 'color',
			},
			{
				name: 'type',
				label: 'TypeScript Type',
				type: 'string',
				default: 'string',
			},
			{
				name: 'default',
				label: 'Default Value',
				type: 'string',
				default: '\'primary\'',
			},
			{
				name: 'required',
				label: 'Required',
				type: 'boolean',
				default: false,
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				default: 'The color palette theme applied to the component.',
			},
		],
	},
	{
		type: 'field-group',
		name: 'FieldGroup',
		category: 'typography',
		icon: 'lucide:list-collapse',
		description: 'Group container for API prop fields',
		isContainer: true,
		defaultProps: {
			title: 'Component Properties',
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'title',
				label: 'Group Title',
				type: 'string',
				default: 'Component Properties',
			},
		],
	},
	{
		type: 'steps',
		name: 'Steps',
		category: 'typography',
		icon: 'lucide:list-ordered',
		description: 'Numbered step-by-step tutorial prose guide',
		isContainer: false,
		defaultProps: {
			steps: 'Install dependencies with bun add @nuxt/ui, Register the module in nuxt.config.ts, Build your pages with Nuxt UI components',
		},
		defaultStyles: {
			margin: 'my-4',
			width: 'w-full',
		},
		propsSchema: [
			{
				name: 'steps',
				label: 'Steps (Comma separated)',
				type: 'textarea',
				default: 'Install dependencies with bun add @nuxt/ui, Register the module in nuxt.config.ts, Build your pages with Nuxt UI components',
			},
		],
	},
]

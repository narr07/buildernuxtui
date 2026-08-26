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
	// TYPOGRAPHY
	// -------------------------------------------------------------
	{
		type: 'heading',
		name: 'Heading',
		category: 'typography',
		icon: 'lucide:heading',
		description: 'Page and section titles from H1 to H4',
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
			size: 'base',
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
	// ELEMENTS & ACTIONS
	// -------------------------------------------------------------
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
		type: 'avatar',
		name: 'UAvatar',
		category: 'element',
		icon: 'lucide:circle-user-round',
		description: 'User avatar with image, initials or icon',
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

	// -------------------------------------------------------------
	// FORMS & INPUTS
	// -------------------------------------------------------------
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
	// DATA & FEEDBACK
	// -------------------------------------------------------------
	{
		type: 'alert',
		name: 'UAlert',
		category: 'data',
		icon: 'lucide:alert-circle',
		description: 'Callout notification banner with title and description',
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
		type: 'progress',
		name: 'UProgress',
		category: 'data',
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
	}
]

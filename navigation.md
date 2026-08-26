Navigation
Breadcrumb
FooterColumns
NavigationMenu
Pagination
Stepper
Tabs

---

title: "Breadcrumb"
description: "A hierarchy of links to navigate through a website."
canonical_url: "https://ui.nuxt.com/docs/components/breadcrumb"

---

# Breadcrumb

> A hierarchy of links to navigate through a website.

## Usage

Use the Breadcrumb component to show the current page's location in your site's hierarchy.

```vue
<script setup lang="ts">
	import type { BreadcrumbItem } from '@nuxt/ui';

	const items = ref<BreadcrumbItem[]>([
		{
			label: 'Docs',
			icon: 'i-lucide-book-open',
			to: '/docs',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
		},
		{
			label: 'Breadcrumb',
			icon: 'i-lucide-link',
			to: '/docs/components/breadcrumb',
		},
	]);
</script>

<template>
	<UBreadcrumb :items="items" />
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- `icon?: string`
- `avatar?: AvatarProps`
- [`slot?: string`](#with-custom-slot)
- `class?: any`
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`

You can pass any property from the [Link](/docs/components/link#props) component such as `to`, `target`, etc.

```vue
<script setup lang="ts">
	import type { BreadcrumbItem } from '@nuxt/ui';

	const items = ref<BreadcrumbItem[]>([
		{
			label: 'Docs',
			icon: 'i-lucide-book-open',
			to: '/docs',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
		},
		{
			label: 'Breadcrumb',
			icon: 'i-lucide-link',
			to: '/docs/components/breadcrumb',
		},
	]);
</script>

<template>
	<UBreadcrumb :items="items" />
</template>
```

> [!NOTE]
>
> A `span` is rendered instead of a link when the `to` property is not defined.

### Separator Icon

Use the `separator-icon` prop to customize the [Icon](/docs/components/icon) between each item. Defaults to `i-lucide-chevron-right`.

```vue
<script setup lang="ts">
	import type { BreadcrumbItem } from '@nuxt/ui';

	const items = ref<BreadcrumbItem[]>([
		{
			label: 'Docs',
			icon: 'i-lucide-book-open',
			to: '/docs',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
		},
		{
			label: 'Breadcrumb',
			icon: 'i-lucide-link',
			to: '/docs/components/breadcrumb',
		},
	]);
</script>

<template>
	<UBreadcrumb
		separator-icon="i-lucide-arrow-right"
		:items="items"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronRight` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronRight` key.

### Color `4.8+`

Use the `color` prop to change the color of the active Breadcrumb.

```vue
<script setup lang="ts">
	import type { BreadcrumbItem } from '@nuxt/ui';

	const items = ref<BreadcrumbItem[]>([
		{
			label: 'Docs',
			icon: 'i-lucide-book-open',
			to: '/docs',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
		},
		{
			label: 'Breadcrumb',
			icon: 'i-lucide-link',
			to: '/docs/components/breadcrumb',
		},
	]);
</script>

<template>
	<UBreadcrumb
		color="secondary"
		:items="items"
	/>
</template>
```

## Examples

### With separator slot

Use the `#separator` slot to customize the separator between each item.

```vue [BreadcrumbSeparatorSlotExample.vue]
<script setup lang="ts">
	import type { BreadcrumbItem } from '@nuxt/ui';

	const items: BreadcrumbItem[] = [
		{
			label: 'Docs',
			to: '/docs',
		},
		{
			label: 'Components',
			to: '/docs/components',
		},
		{
			label: 'Breadcrumb',
			to: '/docs/components/breadcrumb',
		},
	];
</script>

<template>
	<UBreadcrumb :items="items">
		<template #separator>
			<span class="mx-2 text-muted">/</span>
		</template>
	</UBreadcrumb>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`
- `#{{ item.slot }}-leading`
- `#{{ item.slot }}-label`
- `#{{ item.slot }}-trailing`

```vue [BreadcrumbCustomSlotExample.vue]
<script setup lang="ts">
	import type { BreadcrumbItem } from '@nuxt/ui';

	const items = [
		{
			label: 'Home',
			to: '/',
		},
		{
			slot: 'dropdown' as const,
			icon: 'i-lucide-ellipsis',
			children: [
				{
					label: 'Documentation',
					to: '/docs',
				},
				{
					label: 'Themes',
				},
				{
					label: 'GitHub',
				},
			],
		},
		{
			label: 'Components',
			to: '/docs/components',
		},
		{
			label: 'Breadcrumb',
			to: '/docs/components/breadcrumb',
		},
	] satisfies BreadcrumbItem[];
</script>

<template>
	<UBreadcrumb :items="items">
		<template #dropdown="{ item }">
			<UDropdownMenu :items="item.children">
				<UButton
					:icon="item.icon"
					color="neutral"
					variant="link"
					class="p-0.5"
				/>
			</UDropdownMenu>
		</template>
	</UBreadcrumb>
</template>
```

> [!TIP]
> See: #slots
>
> You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items.

## API

### Props

```ts
/**
 * Props for the Breadcrumb component
 */
interface BreadcrumbProps {
	/**
	 * The element or component this component should render as.
	 * @default 'nav'
	 */
	as?: any;
	items?: T[] | undefined;
	/**
	 * The icon to use as a separator.
	 * @default appConfig.ui.icons.chevronRight
	 */
	separatorIcon?: any;
	/**
	 * @default 'primary'
	 */
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'error'
		| 'neutral'
		| undefined;
	/**
	 * The key used to get the label from the item.
	 * @default 'label'
	 */
	labelKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	ui?:
		| {
				root?: SlotClass;
				list?: SlotClass;
				item?: SlotClass;
				link?: SlotClass;
				linkLeadingIcon?: SlotClass;
				linkLeadingAvatar?: SlotClass;
				linkLeadingAvatarSize?: SlotClass;
				linkLabel?: SlotClass;
				separator?: SlotClass;
				separatorIcon?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the Breadcrumb component
 */
interface BreadcrumbSlots {
  item(): any;
  item-leading(): any;
  item-label(): any;
  item-trailing(): any;
  separator(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		breadcrumb: {
			slots: {
				root: 'relative min-w-0',
				list: 'flex items-center gap-1.5',
				item: 'flex min-w-0',
				link: 'group relative flex items-center gap-1.5 text-sm min-w-0 rounded-md',
				linkLeadingIcon: 'shrink-0 size-5',
				linkLeadingAvatar: 'shrink-0',
				linkLeadingAvatarSize: '2xs',
				linkLabel: 'truncate',
				separator: 'flex',
				separatorIcon: 'shrink-0 size-5 text-muted',
			},
			variants: {
				active: {
					true: {
						link: 'font-semibold',
					},
					false: {
						link: 'text-muted font-medium',
					},
				},
				disabled: {
					true: {
						link: 'cursor-not-allowed opacity-75',
					},
				},
				to: {
					true: '',
				},
				color: {
					primary: {
						link: 'outline-primary/25 focus-visible:outline-3',
					},
					secondary: {
						link: 'outline-secondary/25 focus-visible:outline-3',
					},
					success: {
						link: 'outline-success/25 focus-visible:outline-3',
					},
					info: {
						link: 'outline-info/25 focus-visible:outline-3',
					},
					warning: {
						link: 'outline-warning/25 focus-visible:outline-3',
					},
					error: {
						link: 'outline-error/25 focus-visible:outline-3',
					},
					neutral: {
						link: 'outline-inverted/25 focus-visible:outline-3',
					},
				},
			},
			compoundVariants: [
				{
					disabled: false,
					active: false,
					to: true,
					class: {
						link: ['hover:text-default', 'transition-colors'],
					},
				},
				{
					color: 'primary',
					active: true,
					class: {
						link: 'text-primary',
					},
				},
				{
					color: 'secondary',
					active: true,
					class: {
						link: 'text-secondary',
					},
				},
				{
					color: 'success',
					active: true,
					class: {
						link: 'text-success',
					},
				},
				{
					color: 'info',
					active: true,
					class: {
						link: 'text-info',
					},
				},
				{
					color: 'warning',
					active: true,
					class: {
						link: 'text-warning',
					},
				},
				{
					color: 'error',
					active: true,
					class: {
						link: 'text-error',
					},
				},
				{
					color: 'neutral',
					active: true,
					class: {
						link: 'text-highlighted',
					},
				},
			],
			defaultVariants: {
				color: 'primary',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Breadcrumb.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/breadcrumb.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "FooterColumns"
description: "A list of links as columns to display in your Footer."
canonical_url: "https://ui.nuxt.com/docs/components/footer-columns"

---

# FooterColumns

> A list of links as columns to display in your Footer.

## Usage

The FooterColumns component renders a list of columns to display in your Footer.

Use it in the `top` slot of the [Footer](/docs/components/footer) component:

```vue
<template>
	<UFooter>
		<template #top>
			<UContainer>
				<UFooterColumns />
			</UContainer>
		</template>
	</UFooter>
</template>
```

### Columns

Use the `columns` prop as an array of objects with the following properties:

- `label: string`
- `children?: FooterColumnLink[]`

Each column contains a `children` array of objects that define the links. Each link can have the following properties:

- `label?: string`
- `icon?: string`
- `class?: any`
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`

You can pass any property from the [Link](/docs/components/link#props) component such as `to`, `target`, etc.

```vue [FooterColumnsExample.vue]
<script setup lang="ts">
	import type { FooterColumn } from '@nuxt/ui';

	const columns: FooterColumn[] = [
		{
			label: 'Community',
			children: [
				{
					label: 'Nuxters',
					to: 'https://nuxters.nuxt.com',
					target: '_blank',
				},
				{
					label: 'Video Courses',
					to: 'https://masteringnuxt.com/nuxt3?ref=nuxt',
					target: '_blank',
				},
				{
					label: 'Nuxt on GitHub',
					to: 'https://github.com/nuxt',
					target: '_blank',
				},
			],
		},
		{
			label: 'Solutions',
			children: [
				{
					label: 'Nuxt Content',
					to: 'https://content.nuxt.com/',
					target: '_blank',
				},
				{
					label: 'Nuxt DevTools',
					to: 'https://devtools.nuxt.com/',
					target: '_blank',
				},
				{
					label: 'Nuxt Image',
					to: 'https://image.nuxt.com/',
					target: '_blank',
				},
				{
					label: 'Nuxt UI',
					to: 'https://ui.nuxt.com/',
					target: '_blank',
				},
			],
		},
	];
</script>

<template>
	<UFooterColumns :columns="columns">
		<template #right>
			<UFormField
				name="email"
				label="Subscribe to our newsletter"
				size="lg"
			>
				<UInput
					type="email"
					class="w-full"
				>
					<template #trailing>
						<UButton
							type="submit"
							size="xs"
							color="neutral"
							label="Subscribe"
						/>
					</template>
				</UInput>
			</UFormField>
		</template>
	</UFooterColumns>
</template>
```

## API

### Props

```ts
/**
 * Props for the FooterColumns component
 */
interface FooterColumnsProps {
	/**
	 * The element or component this component should render as.
	 * @default 'nav'
	 */
	as?: any;
	columns?: FooterColumn<T>[] | undefined;
	ui?:
		| {
				root?: SlotClass;
				left?: SlotClass;
				center?: SlotClass;
				right?: SlotClass;
				label?: SlotClass;
				list?: SlotClass;
				item?: SlotClass;
				link?: SlotClass;
				linkLeadingIcon?: SlotClass;
				linkLabel?: SlotClass;
				linkLabelExternalIcon?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the FooterColumns component
 */
interface FooterColumnsSlots {
  left(): any;
  default(): any;
  right(): any;
  column-label(): any;
  link(): any;
  link-leading(): any;
  link-label(): any;
  link-trailing(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		footerColumns: {
			slots: {
				root: 'xl:grid xl:grid-cols-3 xl:gap-8',
				left: 'mb-10 xl:mb-0',
				center:
					'flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2',
				right: 'mt-10 xl:mt-0',
				label: 'text-sm font-semibold',
				list: 'mt-6 space-y-4',
				item: 'relative',
				link: 'group text-sm flex items-center gap-1.5 rounded-sm outline-primary/25 focus-visible:outline-3',
				linkLeadingIcon: 'size-5 shrink-0',
				linkLabel: 'truncate',
				linkLabelExternalIcon: 'size-3 absolute top-0 text-dimmed inline-block',
			},
			variants: {
				active: {
					true: {
						link: 'text-primary font-medium',
					},
					false: {
						link: ['text-muted hover:text-default', 'transition-colors'],
					},
				},
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/FooterColumns.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/footer-columns.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "NavigationMenu"
description: "A list of links that can be displayed horizontally or vertically."
canonical_url: "https://ui.nuxt.com/docs/components/navigation-menu"

---

# NavigationMenu

> A list of links that can be displayed horizontally or vertically.

## Usage

Use the NavigationMenu component to display a list of links horizontally or vertically.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[]>([
		{
			label: 'Guide',
			icon: 'i-lucide-book-open',
			to: '/docs/getting-started',
			children: [
				{
					label: 'Introduction',
					description: 'Fully styled and customizable components for Nuxt.',
					icon: 'i-lucide-house',
				},
				{
					label: 'Installation',
					description:
						'Learn how to install and configure Nuxt UI in your application.',
					icon: 'i-lucide-cloud-download',
				},
				{
					label: 'Icons',
					icon: 'i-lucide-smile',
					description:
						'You have nothing to do, @nuxt/icon will handle it automatically.',
				},
				{
					label: 'Colors',
					icon: 'i-lucide-swatch-book',
					description:
						'Choose a primary and a neutral color from your Tailwind CSS theme.',
				},
				{
					label: 'Theme',
					icon: 'i-lucide-cog',
					description:
						'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
				},
			],
		},
		{
			label: 'Composables',
			icon: 'i-lucide-database',
			to: '/docs/composables',
			children: [
				{
					label: 'defineShortcuts',
					icon: 'i-lucide-file-text',
					description: 'Define shortcuts for your application.',
					to: '/docs/composables/define-shortcuts',
				},
				{
					label: 'useOverlay',
					icon: 'i-lucide-file-text',
					description: 'Display a modal/slideover within your application.',
					to: '/docs/composables/use-overlay',
				},
				{
					label: 'useToast',
					icon: 'i-lucide-file-text',
					description: 'Display a toast within your application.',
					to: '/docs/composables/use-toast',
				},
			],
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
			active: true,
			children: [
				{
					label: 'Link',
					icon: 'i-lucide-file-text',
					description: 'Use NuxtLink with superpowers.',
					to: '/docs/components/link',
				},
				{
					label: 'Modal',
					icon: 'i-lucide-file-text',
					description: 'Display a modal within your application.',
					to: '/docs/components/modal',
				},
				{
					label: 'NavigationMenu',
					icon: 'i-lucide-file-text',
					description: 'Display a list of links.',
					to: '/docs/components/navigation-menu',
				},
				{
					label: 'Pagination',
					icon: 'i-lucide-file-text',
					description: 'Display a list of pages.',
					to: '/docs/components/pagination',
				},
				{
					label: 'Popover',
					icon: 'i-lucide-file-text',
					description:
						'Display a non-modal dialog that floats around a trigger element.',
					to: '/docs/components/popover',
				},
				{
					label: 'Progress',
					icon: 'i-lucide-file-text',
					description: 'Show a horizontal bar to indicate task progression.',
					to: '/docs/components/progress',
				},
			],
		},
		{
			label: 'GitHub',
			icon: 'i-simple-icons-github',
			badge: '6k',
			to: 'https://github.com/nuxt/ui',
			target: '_blank',
		},
		{
			label: 'Help',
			icon: 'i-lucide-circle-help',
			disabled: true,
		},
	]);
</script>

<template>
	<UNavigationMenu :items="items" />
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- `icon?: string`
- `avatar?: AvatarProps`
- `badge?: string | number | BadgeProps`
- [`chip?: boolean | ChipProps`](#with-chip-in-items)
- [`tooltip?: TooltipProps`](#with-tooltip-in-items)
- [`popover?: PopoverProps`](#with-popover-in-items)
- `trailingIcon?: string`
- `type?: 'label' | 'trigger' | 'link'`
- `defaultOpen?: boolean`
- `open?: boolean`
- `value?: string`
- `disabled?: boolean`
- [`slot?: string`](#with-custom-slot)
- `onSelect?: (e: Event) => void`
- `children?: NavigationMenuChildItem[]`
- `class?: any`
- `ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`

You can pass any property from the [Link](/docs/components/link#props) component such as `to`, `target`, etc.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[]>([
		{
			label: 'Guide',
			icon: 'i-lucide-book-open',
			to: '/docs/getting-started',
			children: [
				{
					label: 'Introduction',
					description: 'Fully styled and customizable components for Nuxt.',
					icon: 'i-lucide-house',
				},
				{
					label: 'Installation',
					description:
						'Learn how to install and configure Nuxt UI in your application.',
					icon: 'i-lucide-cloud-download',
				},
				{
					label: 'Icons',
					icon: 'i-lucide-smile',
					description:
						'You have nothing to do, @nuxt/icon will handle it automatically.',
				},
				{
					label: 'Colors',
					icon: 'i-lucide-swatch-book',
					description:
						'Choose a primary and a neutral color from your Tailwind CSS theme.',
				},
				{
					label: 'Theme',
					icon: 'i-lucide-cog',
					description:
						'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
				},
			],
		},
		{
			label: 'Composables',
			icon: 'i-lucide-database',
			to: '/docs/composables',
			children: [
				{
					label: 'defineShortcuts',
					icon: 'i-lucide-file-text',
					description: 'Define shortcuts for your application.',
					to: '/docs/composables/define-shortcuts',
				},
				{
					label: 'useOverlay',
					icon: 'i-lucide-file-text',
					description: 'Display a modal/slideover within your application.',
					to: '/docs/composables/use-overlay',
				},
				{
					label: 'useToast',
					icon: 'i-lucide-file-text',
					description: 'Display a toast within your application.',
					to: '/docs/composables/use-toast',
				},
			],
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
			active: true,
			children: [
				{
					label: 'Link',
					icon: 'i-lucide-file-text',
					description: 'Use NuxtLink with superpowers.',
					to: '/docs/components/link',
				},
				{
					label: 'Modal',
					icon: 'i-lucide-file-text',
					description: 'Display a modal within your application.',
					to: '/docs/components/modal',
				},
				{
					label: 'NavigationMenu',
					icon: 'i-lucide-file-text',
					description: 'Display a list of links.',
					to: '/docs/components/navigation-menu',
				},
				{
					label: 'Pagination',
					icon: 'i-lucide-file-text',
					description: 'Display a list of pages.',
					to: '/docs/components/pagination',
				},
				{
					label: 'Popover',
					icon: 'i-lucide-file-text',
					description:
						'Display a non-modal dialog that floats around a trigger element.',
					to: '/docs/components/popover',
				},
				{
					label: 'Progress',
					icon: 'i-lucide-file-text',
					description: 'Show a horizontal bar to indicate task progression.',
					to: '/docs/components/progress',
				},
			],
		},
		{
			label: 'GitHub',
			icon: 'i-simple-icons-github',
			badge: '6k',
			to: 'https://github.com/nuxt/ui',
			target: '_blank',
		},
		{
			label: 'Help',
			icon: 'i-lucide-circle-help',
			disabled: true,
		},
	]);
</script>

<template>
	<UNavigationMenu
		:items="items"
		class="w-full justify-center"
	/>
</template>
```

> [!NOTE]
>
> You can also pass an array of arrays to the `items` prop to display groups of items.

> [!TIP]
>
> Each item can take a `children` array of objects with the following properties to create submenus:
>
> - `label: string`
> - `description?: string`
> - `icon?: string`
> - `onSelect?: (e: Event) => void`
> - `class?: any`

### Orientation

Use the `orientation` prop to change the orientation of the NavigationMenu.

> [!NOTE]
>
> When orientation is `vertical`, an [Accordion](/docs/components/accordion) component is used to display each group. You can control the open state of each item using the `open` and `defaultOpen` properties and change the behavior using the [`collapsible`](/docs/components/accordion#collapsible) and [`type`](/docs/components/accordion#multiple) props.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'Links',
				type: 'label',
			},
			{
				label: 'Guide',
				icon: 'i-lucide-book-open',
				children: [
					{
						label: 'Introduction',
						description: 'Fully styled and customizable components for Nuxt.',
						icon: 'i-lucide-house',
					},
					{
						label: 'Installation',
						description:
							'Learn how to install and configure Nuxt UI in your application.',
						icon: 'i-lucide-cloud-download',
					},
					{
						label: 'Icons',
						icon: 'i-lucide-smile',
						description:
							'You have nothing to do, @nuxt/icon will handle it automatically.',
					},
					{
						label: 'Colors',
						icon: 'i-lucide-swatch-book',
						description:
							'Choose a primary and a neutral color from your Tailwind CSS theme.',
					},
					{
						label: 'Theme',
						icon: 'i-lucide-cog',
						description:
							'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
					},
				],
			},
			{
				label: 'Composables',
				icon: 'i-lucide-database',
				children: [
					{
						label: 'defineShortcuts',
						icon: 'i-lucide-file-text',
						description: 'Define shortcuts for your application.',
						to: '/docs/composables/define-shortcuts',
					},
					{
						label: 'useOverlay',
						icon: 'i-lucide-file-text',
						description: 'Display a modal/slideover within your application.',
						to: '/docs/composables/use-overlay',
					},
					{
						label: 'useToast',
						icon: 'i-lucide-file-text',
						description: 'Display a toast within your application.',
						to: '/docs/composables/use-toast',
					},
				],
			},
			{
				label: 'Components',
				icon: 'i-lucide-box',
				to: '/docs/components',
				type: 'trigger',
				active: true,
				defaultOpen: true,
				children: [
					{
						label: 'Link',
						icon: 'i-lucide-file-text',
						description: 'Use NuxtLink with superpowers.',
						to: '/docs/components/link',
					},
					{
						label: 'Modal',
						icon: 'i-lucide-file-text',
						description: 'Display a modal within your application.',
						to: '/docs/components/modal',
					},
					{
						label: 'NavigationMenu',
						icon: 'i-lucide-file-text',
						description: 'Display a list of links.',
						to: '/docs/components/navigation-menu',
					},
					{
						label: 'Pagination',
						icon: 'i-lucide-file-text',
						description: 'Display a list of pages.',
						to: '/docs/components/pagination',
					},
					{
						label: 'Popover',
						icon: 'i-lucide-file-text',
						description:
							'Display a non-modal dialog that floats around a trigger element.',
						to: '/docs/components/popover',
					},
					{
						label: 'Progress',
						icon: 'i-lucide-file-text',
						description: 'Show a horizontal bar to indicate task progression.',
						to: '/docs/components/progress',
					},
				],
			},
		],
		[
			{
				label: 'GitHub',
				icon: 'i-simple-icons-github',
				badge: '6k',
				to: 'https://github.com/nuxt/ui',
				target: '_blank',
			},
			{
				label: 'Help',
				icon: 'i-lucide-circle-help',
				disabled: true,
			},
		],
	]);
</script>

<template>
	<UNavigationMenu
		orientation="vertical"
		:items="items"
		class="data-[orientation=vertical]:w-48"
	/>
</template>
```

> [!NOTE]
>
> Groups will be spaced when orientation is `horizontal` and separated when orientation is `vertical`.

### Collapsed

In `vertical` orientation, use the `collapsed` prop to collapse the NavigationMenu, this can be useful in a sidebar for example.

> [!NOTE]
>
> You can use the [`tooltip`](#with-tooltip-in-items) and [`popover`](#with-popover-in-items) props to display more information on the collapsed items.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'Links',
				type: 'label',
			},
			{
				label: 'Guide',
				icon: 'i-lucide-book-open',
				children: [
					{
						label: 'Introduction',
						description: 'Fully styled and customizable components for Nuxt.',
						icon: 'i-lucide-house',
					},
					{
						label: 'Installation',
						description:
							'Learn how to install and configure Nuxt UI in your application.',
						icon: 'i-lucide-cloud-download',
					},
					{
						label: 'Icons',
						icon: 'i-lucide-smile',
						description:
							'You have nothing to do, @nuxt/icon will handle it automatically.',
					},
					{
						label: 'Colors',
						icon: 'i-lucide-swatch-book',
						description:
							'Choose a primary and a neutral color from your Tailwind CSS theme.',
					},
					{
						label: 'Theme',
						icon: 'i-lucide-cog',
						description:
							'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
					},
				],
			},
			{
				label: 'Composables',
				icon: 'i-lucide-database',
				children: [
					{
						label: 'defineShortcuts',
						icon: 'i-lucide-file-text',
						description: 'Define shortcuts for your application.',
						to: '/docs/composables/define-shortcuts',
					},
					{
						label: 'useOverlay',
						icon: 'i-lucide-file-text',
						description: 'Display a modal/slideover within your application.',
						to: '/docs/composables/use-overlay',
					},
					{
						label: 'useToast',
						icon: 'i-lucide-file-text',
						description: 'Display a toast within your application.',
						to: '/docs/composables/use-toast',
					},
				],
			},
			{
				label: 'Components',
				icon: 'i-lucide-box',
				to: '/docs/components',
				active: true,
				children: [
					{
						label: 'Link',
						icon: 'i-lucide-file-text',
						description: 'Use NuxtLink with superpowers.',
						to: '/docs/components/link',
					},
					{
						label: 'Modal',
						icon: 'i-lucide-file-text',
						description: 'Display a modal within your application.',
						to: '/docs/components/modal',
					},
					{
						label: 'NavigationMenu',
						icon: 'i-lucide-file-text',
						description: 'Display a list of links.',
						to: '/docs/components/navigation-menu',
					},
					{
						label: 'Pagination',
						icon: 'i-lucide-file-text',
						description: 'Display a list of pages.',
						to: '/docs/components/pagination',
					},
					{
						label: 'Popover',
						icon: 'i-lucide-file-text',
						description:
							'Display a non-modal dialog that floats around a trigger element.',
						to: '/docs/components/popover',
					},
					{
						label: 'Progress',
						icon: 'i-lucide-file-text',
						description: 'Show a horizontal bar to indicate task progression.',
						to: '/docs/components/progress',
					},
				],
			},
		],
		[
			{
				label: 'GitHub',
				icon: 'i-simple-icons-github',
				badge: '6k',
				to: 'https://github.com/nuxt/ui',
				target: '_blank',
			},
			{
				label: 'Help',
				icon: 'i-lucide-circle-help',
				disabled: true,
			},
		],
	]);
</script>

<template>
	<UNavigationMenu
		collapsed
		:tooltip="false"
		:popover="false"
		orientation="vertical"
		:items="items"
	/>
</template>
```

### Highlight

Use the `highlight` prop to display a highlighted border for the active item.

Use the `highlight-color` prop to change the color of the border. It defaults to the `color` prop.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'Guide',
				icon: 'i-lucide-book-open',
				children: [
					{
						label: 'Introduction',
						description: 'Fully styled and customizable components for Nuxt.',
						icon: 'i-lucide-house',
					},
					{
						label: 'Installation',
						description:
							'Learn how to install and configure Nuxt UI in your application.',
						icon: 'i-lucide-cloud-download',
					},
					{
						label: 'Icons',
						icon: 'i-lucide-smile',
						description:
							'You have nothing to do, @nuxt/icon will handle it automatically.',
					},
					{
						label: 'Colors',
						icon: 'i-lucide-swatch-book',
						description:
							'Choose a primary and a neutral color from your Tailwind CSS theme.',
					},
					{
						label: 'Theme',
						icon: 'i-lucide-cog',
						description:
							'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
					},
				],
			},
			{
				label: 'Composables',
				icon: 'i-lucide-database',
				children: [
					{
						label: 'defineShortcuts',
						icon: 'i-lucide-file-text',
						description: 'Define shortcuts for your application.',
						to: '/docs/composables/define-shortcuts',
					},
					{
						label: 'useOverlay',
						icon: 'i-lucide-file-text',
						description: 'Display a modal/slideover within your application.',
						to: '/docs/composables/use-overlay',
					},
					{
						label: 'useToast',
						icon: 'i-lucide-file-text',
						description: 'Display a toast within your application.',
						to: '/docs/composables/use-toast',
					},
				],
			},
			{
				label: 'Components',
				icon: 'i-lucide-box',
				to: '/docs/components',
				active: true,
				defaultOpen: true,
				children: [
					{
						label: 'Link',
						icon: 'i-lucide-file-text',
						description: 'Use NuxtLink with superpowers.',
						to: '/docs/components/link',
					},
					{
						label: 'Modal',
						icon: 'i-lucide-file-text',
						description: 'Display a modal within your application.',
						to: '/docs/components/modal',
					},
					{
						label: 'NavigationMenu',
						icon: 'i-lucide-file-text',
						description: 'Display a list of links.',
						to: '/docs/components/navigation-menu',
					},
					{
						label: 'Pagination',
						icon: 'i-lucide-file-text',
						description: 'Display a list of pages.',
						to: '/docs/components/pagination',
					},
					{
						label: 'Popover',
						icon: 'i-lucide-file-text',
						description:
							'Display a non-modal dialog that floats around a trigger element.',
						to: '/docs/components/popover',
					},
					{
						label: 'Progress',
						icon: 'i-lucide-file-text',
						description: 'Show a horizontal bar to indicate task progression.',
						to: '/docs/components/progress',
					},
				],
			},
		],
		[
			{
				label: 'GitHub',
				icon: 'i-simple-icons-github',
				badge: '6k',
				to: 'https://github.com/nuxt/ui',
				target: '_blank',
			},
			{
				label: 'Help',
				icon: 'i-lucide-circle-help',
				disabled: true,
			},
		],
	]);
</script>

<template>
	<UNavigationMenu
		highlight
		highlight-color="primary"
		orientation="horizontal"
		:items="items"
		class="data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
	/>
</template>
```

> [!NOTE]
>
> In this example, the `border-b` class is applied to display a border in `horizontal` orientation, this is not done by default to let you have a clean slate to work with.

> [!CAUTION]
>
> In `vertical` orientation, the `highlight` prop only highlights the border of active children.

### Color

Use the `color` prop to change the color of the NavigationMenu.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'Guide',
				icon: 'i-lucide-book-open',
				to: '/docs/getting-started',
			},
			{
				label: 'Composables',
				icon: 'i-lucide-database',
				to: '/docs/composables',
			},
			{
				label: 'Components',
				icon: 'i-lucide-box',
				to: '/docs/components',
				active: true,
			},
		],
		[
			{
				label: 'GitHub',
				icon: 'i-simple-icons-github',
				badge: '6k',
				to: 'https://github.com/nuxt/ui',
				target: '_blank',
			},
		],
	]);
</script>

<template>
	<UNavigationMenu
		color="neutral"
		:items="items"
		class="w-full"
	/>
</template>
```

### Variant

Use the `variant` prop to change the variant of the NavigationMenu.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'Guide',
				icon: 'i-lucide-book-open',
				to: '/docs/getting-started',
			},
			{
				label: 'Composables',
				icon: 'i-lucide-database',
				to: '/docs/composables',
			},
			{
				label: 'Components',
				icon: 'i-lucide-box',
				to: '/docs/components',
				active: true,
			},
		],
		[
			{
				label: 'GitHub',
				icon: 'i-simple-icons-github',
				badge: '6k',
				to: 'https://github.com/nuxt/ui',
				target: '_blank',
			},
		],
	]);
</script>

<template>
	<UNavigationMenu
		color="neutral"
		variant="link"
		:highlight="false"
		:items="items"
		class="w-full"
	/>
</template>
```

> [!NOTE]
>
> The `highlight` prop changes the `pill` variant active item style. Try it out to see the difference.

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/docs/components/icon) of each item. Defaults to `i-lucide-chevron-down`. This icon is only displayed when an item has children.

> [!TIP]
>
> You can also set an icon for a specific item by using the `trailingIcon` property in the item object.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[]>([
		{
			label: 'Guide',
			icon: 'i-lucide-book-open',
			to: '/docs/getting-started',
			children: [
				{
					label: 'Introduction',
					description: 'Fully styled and customizable components for Nuxt.',
					icon: 'i-lucide-house',
				},
				{
					label: 'Installation',
					description:
						'Learn how to install and configure Nuxt UI in your application.',
					icon: 'i-lucide-cloud-download',
				},
				{
					label: 'Icons',
					icon: 'i-lucide-smile',
					description:
						'You have nothing to do, @nuxt/icon will handle it automatically.',
				},
				{
					label: 'Colors',
					icon: 'i-lucide-swatch-book',
					description:
						'Choose a primary and a neutral color from your Tailwind CSS theme.',
				},
				{
					label: 'Theme',
					icon: 'i-lucide-cog',
					description:
						'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
				},
			],
		},
		{
			label: 'Composables',
			icon: 'i-lucide-database',
			to: '/docs/composables',
			children: [
				{
					label: 'defineShortcuts',
					icon: 'i-lucide-file-text',
					description: 'Define shortcuts for your application.',
					to: '/docs/composables/define-shortcuts',
				},
				{
					label: 'useOverlay',
					icon: 'i-lucide-file-text',
					description: 'Display a modal/slideover within your application.',
					to: '/docs/composables/use-overlay',
				},
				{
					label: 'useToast',
					icon: 'i-lucide-file-text',
					description: 'Display a toast within your application.',
					to: '/docs/composables/use-toast',
				},
			],
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
			active: true,
			children: [
				{
					label: 'Link',
					icon: 'i-lucide-file-text',
					description: 'Use NuxtLink with superpowers.',
					to: '/docs/components/link',
				},
				{
					label: 'Modal',
					icon: 'i-lucide-file-text',
					description: 'Display a modal within your application.',
					to: '/docs/components/modal',
				},
				{
					label: 'NavigationMenu',
					icon: 'i-lucide-file-text',
					description: 'Display a list of links.',
					to: '/docs/components/navigation-menu',
				},
				{
					label: 'Pagination',
					icon: 'i-lucide-file-text',
					description: 'Display a list of pages.',
					to: '/docs/components/pagination',
				},
				{
					label: 'Popover',
					icon: 'i-lucide-file-text',
					description:
						'Display a non-modal dialog that floats around a trigger element.',
					to: '/docs/components/popover',
				},
				{
					label: 'Progress',
					icon: 'i-lucide-file-text',
					description: 'Show a horizontal bar to indicate task progression.',
					to: '/docs/components/progress',
				},
			],
		},
	]);
</script>

<template>
	<UNavigationMenu
		trailing-icon="i-lucide-arrow-down"
		:items="items"
		class="w-full justify-center"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronDown` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronDown` key.

### Arrow

Use the `arrow` prop to display an arrow on the NavigationMenu content when items have children.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[]>([
		{
			label: 'Guide',
			icon: 'i-lucide-book-open',
			to: '/docs/getting-started',
			children: [
				{
					label: 'Introduction',
					description: 'Fully styled and customizable components for Nuxt.',
					icon: 'i-lucide-house',
				},
				{
					label: 'Installation',
					description:
						'Learn how to install and configure Nuxt UI in your application.',
					icon: 'i-lucide-cloud-download',
				},
				{
					label: 'Icons',
					icon: 'i-lucide-smile',
					description:
						'You have nothing to do, @nuxt/icon will handle it automatically.',
				},
				{
					label: 'Colors',
					icon: 'i-lucide-swatch-book',
					description:
						'Choose a primary and a neutral color from your Tailwind CSS theme.',
				},
				{
					label: 'Theme',
					icon: 'i-lucide-cog',
					description:
						'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
				},
			],
		},
		{
			label: 'Composables',
			icon: 'i-lucide-database',
			to: '/docs/composables',
			children: [
				{
					label: 'defineShortcuts',
					icon: 'i-lucide-file-text',
					description: 'Define shortcuts for your application.',
					to: '/docs/composables/define-shortcuts',
				},
				{
					label: 'useOverlay',
					icon: 'i-lucide-file-text',
					description: 'Display a modal/slideover within your application.',
					to: '/docs/composables/use-overlay',
				},
				{
					label: 'useToast',
					icon: 'i-lucide-file-text',
					description: 'Display a toast within your application.',
					to: '/docs/composables/use-toast',
				},
			],
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
			active: true,
			children: [
				{
					label: 'Link',
					icon: 'i-lucide-file-text',
					description: 'Use NuxtLink with superpowers.',
					to: '/docs/components/link',
				},
				{
					label: 'Modal',
					icon: 'i-lucide-file-text',
					description: 'Display a modal within your application.',
					to: '/docs/components/modal',
				},
				{
					label: 'NavigationMenu',
					icon: 'i-lucide-file-text',
					description: 'Display a list of links.',
					to: '/docs/components/navigation-menu',
				},
				{
					label: 'Pagination',
					icon: 'i-lucide-file-text',
					description: 'Display a list of pages.',
					to: '/docs/components/pagination',
				},
				{
					label: 'Popover',
					icon: 'i-lucide-file-text',
					description:
						'Display a non-modal dialog that floats around a trigger element.',
					to: '/docs/components/popover',
				},
				{
					label: 'Progress',
					icon: 'i-lucide-file-text',
					description: 'Show a horizontal bar to indicate task progression.',
					to: '/docs/components/progress',
				},
			],
		},
	]);
</script>

<template>
	<UNavigationMenu
		arrow
		:items="items"
		class="w-full justify-center"
	/>
</template>
```

> [!NOTE]
>
> The arrow is animated to follow the active item.

### Content Orientation

Use the `content-orientation` prop to change the orientation of the content.

> [!WARNING]
>
> This prop only works when `orientation` is `horizontal`.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[]>([
		{
			label: 'Guide',
			icon: 'i-lucide-book-open',
			to: '/docs/getting-started',
			children: [
				{
					label: 'Introduction',
					description: 'Fully styled and customizable components for Nuxt.',
					icon: 'i-lucide-house',
				},
				{
					label: 'Installation',
					description:
						'Learn how to install and configure Nuxt UI in your application.',
					icon: 'i-lucide-cloud-download',
				},
				{
					label: 'Icons',
					icon: 'i-lucide-smile',
					description:
						'You have nothing to do, @nuxt/icon will handle it automatically.',
				},
			],
		},
		{
			label: 'Composables',
			icon: 'i-lucide-database',
			to: '/docs/composables',
			children: [
				{
					label: 'defineShortcuts',
					icon: 'i-lucide-file-text',
					description: 'Define shortcuts for your application.',
					to: '/docs/composables/define-shortcuts',
				},
				{
					label: 'useOverlay',
					icon: 'i-lucide-file-text',
					description: 'Display a modal/slideover within your application.',
					to: '/docs/composables/use-overlay',
				},
				{
					label: 'useToast',
					icon: 'i-lucide-file-text',
					description: 'Display a toast within your application.',
					to: '/docs/composables/use-toast',
				},
			],
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
			active: true,
			children: [
				{
					label: 'Link',
					icon: 'i-lucide-file-text',
					description: 'Use NuxtLink with superpowers.',
					to: '/docs/components/link',
				},
				{
					label: 'Modal',
					icon: 'i-lucide-file-text',
					description: 'Display a modal within your application.',
					to: '/docs/components/modal',
				},
				{
					label: 'NavigationMenu',
					icon: 'i-lucide-file-text',
					description: 'Display a list of links.',
					to: '/docs/components/navigation-menu',
				},
				{
					label: 'Pagination',
					icon: 'i-lucide-file-text',
					description: 'Display a list of pages.',
					to: '/docs/components/pagination',
				},
			],
		},
	]);
</script>

<template>
	<UNavigationMenu
		arrow
		content-orientation="vertical"
		:items="items"
		class="w-full justify-center"
	/>
</template>
```

### Unmount

Use the `unmount-on-hide` prop to control the content unmounting behavior. Defaults to `true`.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[]>([
		{
			label: 'Guide',
			icon: 'i-lucide-book-open',
			to: '/docs/getting-started',
			children: [
				{
					label: 'Introduction',
					description: 'Fully styled and customizable components for Nuxt.',
					icon: 'i-lucide-house',
				},
				{
					label: 'Installation',
					description:
						'Learn how to install and configure Nuxt UI in your application.',
					icon: 'i-lucide-cloud-download',
				},
				{
					label: 'Icons',
					icon: 'i-lucide-smile',
					description:
						'You have nothing to do, @nuxt/icon will handle it automatically.',
				},
				{
					label: 'Colors',
					icon: 'i-lucide-swatch-book',
					description:
						'Choose a primary and a neutral color from your Tailwind CSS theme.',
				},
				{
					label: 'Theme',
					icon: 'i-lucide-cog',
					description:
						'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
				},
			],
		},
		{
			label: 'Composables',
			icon: 'i-lucide-database',
			to: '/docs/composables',
			children: [
				{
					label: 'defineShortcuts',
					icon: 'i-lucide-file-text',
					description: 'Define shortcuts for your application.',
					to: '/docs/composables/define-shortcuts',
				},
				{
					label: 'useOverlay',
					icon: 'i-lucide-file-text',
					description: 'Display a modal/slideover within your application.',
					to: '/docs/composables/use-overlay',
				},
				{
					label: 'useToast',
					icon: 'i-lucide-file-text',
					description: 'Display a toast within your application.',
					to: '/docs/composables/use-toast',
				},
			],
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
			active: true,
			children: [
				{
					label: 'Link',
					icon: 'i-lucide-file-text',
					description: 'Use NuxtLink with superpowers.',
					to: '/docs/components/link',
				},
				{
					label: 'Modal',
					icon: 'i-lucide-file-text',
					description: 'Display a modal within your application.',
					to: '/docs/components/modal',
				},
				{
					label: 'NavigationMenu',
					icon: 'i-lucide-file-text',
					description: 'Display a list of links.',
					to: '/docs/components/navigation-menu',
				},
				{
					label: 'Pagination',
					icon: 'i-lucide-file-text',
					description: 'Display a list of pages.',
					to: '/docs/components/pagination',
				},
				{
					label: 'Popover',
					icon: 'i-lucide-file-text',
					description:
						'Display a non-modal dialog that floats around a trigger element.',
					to: '/docs/components/popover',
				},
				{
					label: 'Progress',
					icon: 'i-lucide-file-text',
					description: 'Show a horizontal bar to indicate task progression.',
					to: '/docs/components/progress',
				},
			],
		},
	]);
</script>

<template>
	<UNavigationMenu
		:unmount-on-hide="false"
		:items="items"
		class="w-full justify-center"
	/>
</template>
```

> [!NOTE]
>
> You can inspect the DOM to see each item's content being rendered.

## Examples

### Control active item

You can control the active item(s) by using the `default-value` prop or the `v-model` directive with the `value` of the item. If no `value` is provided, it defaults to `item-${index}` for top-level items or `item-${level}-${index}` for nested items.

```vue [NavigationMenuModelValueExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items: NavigationMenuItem[] = [
		{
			label: 'Guide',
			icon: 'i-lucide-book-open',
			children: [
				{
					label: 'Introduction',
					description: 'Fully styled and customizable components for Nuxt.',
					icon: 'i-lucide-house',
				},
				{
					label: 'Installation',
					description:
						'Learn how to install and configure Nuxt UI in your application.',
					icon: 'i-lucide-cloud-download',
				},
				{
					label: 'Icons',
					icon: 'i-lucide-smile',
					description:
						'You have nothing to do, @nuxt/icon will handle it automatically.',
				},
				{
					label: 'Colors',
					icon: 'i-lucide-swatch-book',
					description:
						'Choose a primary and a neutral color from your Tailwind CSS theme.',
				},
				{
					label: 'Theme',
					icon: 'i-lucide-cog',
					description:
						'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
				},
			],
		},
		{
			label: 'Composables',
			icon: 'i-lucide-database',
			children: [
				{
					label: 'defineShortcuts',
					icon: 'i-lucide-file-text',
					description: 'Define shortcuts for your application.',
				},
				{
					label: 'useOverlay',
					icon: 'i-lucide-file-text',
					description: 'Display a modal/slideover within your application.',
				},
				{
					label: 'useToast',
					icon: 'i-lucide-file-text',
					description: 'Display a toast within your application.',
				},
			],
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			children: [
				{
					label: 'Link',
					icon: 'i-lucide-file-text',
					description: 'Use NuxtLink with superpowers.',
				},
				{
					label: 'Modal',
					icon: 'i-lucide-file-text',
					description: 'Display a modal within your application.',
				},
				{
					label: 'NavigationMenu',
					icon: 'i-lucide-file-text',
					description: 'Display a list of links.',
				},
				{
					label: 'Pagination',
					icon: 'i-lucide-file-text',
					description: 'Display a list of pages.',
				},
				{
					label: 'Popover',
					icon: 'i-lucide-file-text',
					description:
						'Display a non-modal dialog that floats around a trigger element.',
				},
				{
					label: 'Progress',
					icon: 'i-lucide-file-text',
					description: 'Show a horizontal bar to indicate task progression.',
				},
			],
		},
	];

	const active = ref();

	defineShortcuts({
		1: () => {
			active.value = 'item-0';
		},
		2: () => {
			active.value = 'item-1';
		},
		3: () => {
			active.value = 'item-2';
		},
	});
</script>

<template>
	<UNavigationMenu
		v-model="active"
		:items="items"
		class="w-full justify-center"
	/>
</template>
```

> [!TIP]
>
> Use the `value-key` prop to change the key used to match items when a `v-model` or `default-value` is provided.

> [!NOTE]
>
> In this example, leveraging [`defineShortcuts`](/docs/composables/define-shortcuts), you can switch the active item by pressing <kbd value="1">
>
> </kbd>
>
> , <kbd value="2">
>
> </kbd>
>
> , or <kbd value="3">
>
> </kbd>
>
> .

### With tooltip in items

When orientation is `vertical` and the menu is `collapsed`, you can set the `tooltip` prop to `true` to display a [Tooltip](/docs/components/tooltip) around items with their label but you can also use the `tooltip` property on each item to override the default tooltip. In `horizontal` orientation, you can use the `tooltip` property on each item to display a [Tooltip](/docs/components/tooltip) around items.

> [!NOTE]
>
> The `tooltip` property on an item will always display a tooltip regardless of the global `tooltip` prop.

You can pass any property from the [Tooltip](/docs/components/tooltip) component globally or on each item.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'Links',
				type: 'label',
			},
			{
				label: 'Guide',
				icon: 'i-lucide-book-open',
				children: [
					{
						label: 'Introduction',
						description: 'Fully styled and customizable components for Nuxt.',
						icon: 'i-lucide-house',
					},
					{
						label: 'Installation',
						description:
							'Learn how to install and configure Nuxt UI in your application.',
						icon: 'i-lucide-cloud-download',
					},
					{
						label: 'Icons',
						icon: 'i-lucide-smile',
						description:
							'You have nothing to do, @nuxt/icon will handle it automatically.',
					},
					{
						label: 'Colors',
						icon: 'i-lucide-swatch-book',
						description:
							'Choose a primary and a neutral color from your Tailwind CSS theme.',
					},
					{
						label: 'Theme',
						icon: 'i-lucide-cog',
						description:
							'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
					},
				],
			},
			{
				label: 'Composables',
				icon: 'i-lucide-database',
				children: [
					{
						label: 'defineShortcuts',
						icon: 'i-lucide-file-text',
						description: 'Define shortcuts for your application.',
						to: '/docs/composables/define-shortcuts',
					},
					{
						label: 'useOverlay',
						icon: 'i-lucide-file-text',
						description: 'Display a modal/slideover within your application.',
						to: '/docs/composables/use-overlay',
					},
					{
						label: 'useToast',
						icon: 'i-lucide-file-text',
						description: 'Display a toast within your application.',
						to: '/docs/composables/use-toast',
					},
				],
			},
			{
				label: 'Components',
				icon: 'i-lucide-box',
				to: '/docs/components',
				active: true,
				children: [
					{
						label: 'Link',
						icon: 'i-lucide-file-text',
						description: 'Use NuxtLink with superpowers.',
						to: '/docs/components/link',
					},
					{
						label: 'Modal',
						icon: 'i-lucide-file-text',
						description: 'Display a modal within your application.',
						to: '/docs/components/modal',
					},
					{
						label: 'NavigationMenu',
						icon: 'i-lucide-file-text',
						description: 'Display a list of links.',
						to: '/docs/components/navigation-menu',
					},
					{
						label: 'Pagination',
						icon: 'i-lucide-file-text',
						description: 'Display a list of pages.',
						to: '/docs/components/pagination',
					},
					{
						label: 'Popover',
						icon: 'i-lucide-file-text',
						description:
							'Display a non-modal dialog that floats around a trigger element.',
						to: '/docs/components/popover',
					},
					{
						label: 'Progress',
						icon: 'i-lucide-file-text',
						description: 'Show a horizontal bar to indicate task progression.',
						to: '/docs/components/progress',
					},
				],
			},
		],
		[
			{
				label: 'GitHub',
				icon: 'i-simple-icons-github',
				badge: '6k',
				to: 'https://github.com/nuxt/ui',
				target: '_blank',
				tooltip: {
					text: 'Open on GitHub',
					kbds: ['6k'],
				},
			},
			{
				label: 'Help',
				icon: 'i-lucide-circle-help',
				disabled: true,
			},
		],
	]);
</script>

<template>
	<UNavigationMenu
		tooltip
		collapsed
		orientation="vertical"
		:items="items"
	/>
</template>
```

### With popover in items

When orientation is `vertical` and the menu is `collapsed`, you can set the `popover` prop to `true` to display a [Popover](/docs/components/popover) around items with their children but you can also use the `popover` property on each item to override the default popover.

> [!NOTE]
>
> The `popover` property on an item will always display a popover regardless of the global `popover` prop.

You can pass any property from the [Popover](/docs/components/popover) component globally or on each item.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'Links',
				type: 'label',
			},
			{
				label: 'Guide',
				icon: 'i-lucide-book-open',
				children: [
					{
						label: 'Introduction',
						description: 'Fully styled and customizable components for Nuxt.',
						icon: 'i-lucide-house',
					},
					{
						label: 'Installation',
						description:
							'Learn how to install and configure Nuxt UI in your application.',
						icon: 'i-lucide-cloud-download',
					},
					{
						label: 'Icons',
						icon: 'i-lucide-smile',
						description:
							'You have nothing to do, @nuxt/icon will handle it automatically.',
					},
					{
						label: 'Colors',
						icon: 'i-lucide-swatch-book',
						description:
							'Choose a primary and a neutral color from your Tailwind CSS theme.',
					},
					{
						label: 'Theme',
						icon: 'i-lucide-cog',
						description:
							'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
					},
				],
			},
			{
				label: 'Composables',
				icon: 'i-lucide-database',
				popover: {
					mode: 'click',
				},
				children: [
					{
						label: 'defineShortcuts',
						icon: 'i-lucide-file-text',
						description: 'Define shortcuts for your application.',
						to: '/docs/composables/define-shortcuts',
					},
					{
						label: 'useOverlay',
						icon: 'i-lucide-file-text',
						description: 'Display a modal/slideover within your application.',
						to: '/docs/composables/use-overlay',
					},
					{
						label: 'useToast',
						icon: 'i-lucide-file-text',
						description: 'Display a toast within your application.',
						to: '/docs/composables/use-toast',
					},
				],
			},
			{
				label: 'Components',
				icon: 'i-lucide-box',
				to: '/docs/components',
				active: true,
				children: [
					{
						label: 'Link',
						icon: 'i-lucide-file-text',
						description: 'Use NuxtLink with superpowers.',
						to: '/docs/components/link',
					},
					{
						label: 'Modal',
						icon: 'i-lucide-file-text',
						description: 'Display a modal within your application.',
						to: '/docs/components/modal',
					},
					{
						label: 'NavigationMenu',
						icon: 'i-lucide-file-text',
						description: 'Display a list of links.',
						to: '/docs/components/navigation-menu',
					},
					{
						label: 'Pagination',
						icon: 'i-lucide-file-text',
						description: 'Display a list of pages.',
						to: '/docs/components/pagination',
					},
					{
						label: 'Popover',
						icon: 'i-lucide-file-text',
						description:
							'Display a non-modal dialog that floats around a trigger element.',
						to: '/docs/components/popover',
					},
					{
						label: 'Progress',
						icon: 'i-lucide-file-text',
						description: 'Show a horizontal bar to indicate task progression.',
						to: '/docs/components/progress',
					},
				],
			},
		],
		[
			{
				label: 'GitHub',
				icon: 'i-simple-icons-github',
				badge: '6k',
				to: 'https://github.com/nuxt/ui',
				target: '_blank',
				tooltip: {
					text: 'Open on GitHub',
					kbds: ['6k'],
				},
			},
			{
				label: 'Help',
				icon: 'i-lucide-circle-help',
				disabled: true,
			},
		],
	]);
</script>

<template>
	<UNavigationMenu
		popover
		collapsed
		orientation="vertical"
		:items="items"
	/>
</template>
```

> [!TIP]
> See: #with-content-slot
>
> You can use the `#content` slot to customize the content of the popover in the `vertical` orientation.

### With chip in items `4.5+`

Use the `chip` property to display a [Chip](/docs/components/chip) around the icon of the items, you can pass any of its props.

```vue
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'Guide',
				icon: 'i-lucide-book-open',
				chip: {
					color: 'error',
				},
			},
			{
				label: 'Composables',
				icon: 'i-lucide-database',
				chip: {
					color: 'info',
					text: 3,
				},
			},
			{
				label: 'Components',
				icon: 'i-lucide-box',
				to: '/docs/components',
				active: true,
				chip: true,
			},
		],
		[
			{
				label: 'GitHub',
				icon: 'i-simple-icons-github',
				to: 'https://github.com/nuxt/ui',
				target: '_blank',
			},
			{
				label: 'Help',
				icon: 'i-lucide-circle-help',
				disabled: true,
			},
		],
	]);
</script>

<template>
	<UNavigationMenu
		collapsed
		orientation="vertical"
		:items="items"
	/>
</template>
```

### With bottom tab bar

Use the `ui` prop to transform the NavigationMenu into a mobile-style bottom tab bar with icons and small labels, similar to YouTube or Instagram.

```vue [NavigationMenuBottomTabBarExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items: NavigationMenuItem[] = [
		{
			label: 'Home',
			icon: 'i-lucide-house',
			active: true,
		},
		{
			label: 'Samples',
			icon: 'i-lucide-circle-play',
		},
		{
			label: 'Explore',
			icon: 'i-lucide-compass',
		},
		{
			label: 'Library',
			icon: 'i-lucide-bookmark',
		},
	];
</script>

<template>
	<UNavigationMenu
		:items="items"
		:ui="{
			root: 'justify-around border-t border-default py-2',
			item: 'py-0',
			link: 'flex-col gap-1 px-3',
			linkLeadingIcon: 'size-5',
			linkLabel: 'text-[10px]/3 font-normal',
		}"
		class="w-full"
	/>
</template>
```

### With collapsed labels

Use the `ui` prop to display a label underneath each icon when collapsed.

```vue [NavigationMenuCollapsedLabelExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items: NavigationMenuItem[] = [
		{
			label: 'Home',
			icon: 'i-lucide-house',
		},
		{
			label: 'Search',
			icon: 'i-lucide-search',
		},
		{
			label: 'Users',
			icon: 'i-lucide-users',
			active: true,
		},
		{
			label: 'Settings',
			icon: 'i-lucide-cog',
		},
	];
</script>

<template>
	<UNavigationMenu
		collapsed
		orientation="vertical"
		:items="items"
		:ui="{
			link: 'flex-col gap-1',
			linkLabel: 'block text-[10px]/3 text-center',
		}"
	/>
</template>
```

> [!TIP]
>
> You can also do this globally through the `app.config.ts` using [`compoundVariants`](/docs/getting-started/theme/components#compound-variants):
>
> ```ts [app/app.config.ts]
> export default defineAppConfig({
> 	ui: {
> 		navigationMenu: {
> 			compoundVariants: [
> 				{
> 					orientation: 'vertical',
> 					collapsed: true,
> 					class: {
> 						link: 'flex-col',
> 						linkLabel: 'block text-[10px]/3 text-center',
> 					},
> 				},
> 			],
> 		},
> 	},
> });
> ```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`
- `#{{ item.slot }}-leading`
- `#{{ item.slot }}-label`
- `#{{ item.slot }}-trailing`
- `#{{ item.slot }}-content`

```vue [NavigationMenuCustomSlotExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem, DropdownMenuItem } from '@nuxt/ui';

	const items = [
		{
			label: 'Guide',
			icon: 'i-lucide-book-open',
			to: '/docs/getting-started',
		},
		{
			label: 'Composables',
			icon: 'i-lucide-database',
			to: '/docs/composables',
			class: 'hidden',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			to: '/docs/components',
			class: 'hidden',
		},
		{
			slot: 'more' as const,
			as: 'span',
			class: 'p-0',
			content: {
				align: 'start' as const,
			},
			items: [
				{
					label: 'Composables',
					icon: 'i-lucide-database',
					to: '/docs/composables',
				},
				{
					label: 'Components',
					icon: 'i-lucide-box',
					to: '/docs/components',
				},
			] satisfies DropdownMenuItem[],
		},
		{
			label: 'GitHub',
			icon: 'i-simple-icons-github',
			to: 'https://github.com/nuxt/ui',
			target: '_blank',
			slot: 'github' as const,
		},
	] satisfies NavigationMenuItem[];
</script>

<template>
	<UNavigationMenu
		:items="items"
		class="w-full justify-center"
	>
		<template #more="{ item }">
			<UDropdownMenu
				:content="item.content"
				:items="item.items"
			>
				<UButton
					icon="i-lucide-ellipsis"
					color="neutral"
					variant="link"
				/>
			</UDropdownMenu>
		</template>

		<template #github-trailing>
			<UBadge
				label="6k+"
				color="neutral"
				variant="subtle"
				size="sm"
			/>
		</template>
	</UNavigationMenu>
</template>
```

> [!TIP]
> See: #slots
>
> You can also use the `#item`, `#item-leading`, `#item-label`, `#item-trailing` and `#item-content` slots to customize all items.

### With trailing slot

Use the `#item-trailing` slot or the `slot` property (`#{{ item.slot }}-trailing`) to add a [DropdownMenu](/docs/components/dropdown-menu) that appears on hover, similar to Notion or Linear.

```vue [NavigationMenuTrailingSlotExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem, DropdownMenuItem } from '@nuxt/ui';

	const items: NavigationMenuItem[][] = [
		[
			{
				label: 'Personal',
				type: 'label',
				slot: 'personal-label' as const,
			},
			{
				label: 'Design System',
				icon: 'i-lucide-folder',
				active: true,
			},
			{
				label: 'Travel',
				icon: 'i-lucide-folder',
			},
		],
		[
			{
				label: 'Teams',
				type: 'label',
				slot: 'teams-label' as const,
			},
			{
				label: 'Engineering',
				icon: 'i-lucide-folder',
			},
			{
				label: 'Marketing',
				icon: 'i-lucide-folder',
			},
		],
	];

	const dropdownItems: DropdownMenuItem[][] = [
		[
			{ label: 'View Project', icon: 'i-lucide-folder-open' },
			{ label: 'Share Project', icon: 'i-lucide-share' },
		],
		[{ label: 'Delete Project', icon: 'i-lucide-trash', color: 'error' }],
	];
</script>

<template>
	<UNavigationMenu
		orientation="vertical"
		:items="items"
		:ui="{
			link: 'overflow-hidden has-data-[state=open]:before:bg-elevated/50',
		}"
		class="w-48"
	>
		<template #personal-label-trailing>
			<UButton
				icon="i-lucide-plus"
				color="neutral"
				variant="ghost"
				size="xs"
			/>
		</template>

		<template #teams-label-trailing>
			<UButton
				icon="i-lucide-plus"
				color="neutral"
				variant="ghost"
				size="xs"
			/>
		</template>

		<template #item-trailing>
			<div
				class="flex -mr-1.5 -my-0.5 translate-x-full group-hover:translate-x-0 has-data-[state=open]:translate-x-0 transition-transform"
			>
				<UDropdownMenu
					:items="dropdownItems"
					:content="{ align: 'start' }"
					:modal="false"
					size="xs"
				>
					<UButton
						as="div"
						icon="i-lucide-ellipsis"
						color="neutral"
						variant="ghost"
						size="xs"
						class="text-muted hover:text-highlighted hover:bg-accented/50 data-[state=open]:bg-accented/50 mr-1.5"
					/>
				</UDropdownMenu>
			</div>
		</template>
	</UNavigationMenu>
</template>
```

### With content slot

Use the `#item-content` slot or the `slot` property (`#{{ item.slot }}-content`) to customize the content of a specific item.

```vue [NavigationMenuContentSlotExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = [
		{
			label: 'Docs',
			icon: 'i-lucide-book-open',
			slot: 'docs' as const,
			children: [
				{
					label: 'Icons',
					description:
						'You have nothing to do, @nuxt/icon will handle it automatically.',
				},
				{
					label: 'Colors',
					description:
						'Choose a primary and a neutral color from your Tailwind CSS theme.',
				},
				{
					label: 'Theme',
					description:
						'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
				},
			],
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			slot: 'components' as const,
			children: [
				{
					label: 'Link',
					description: 'Use NuxtLink with superpowers.',
				},
				{
					label: 'Modal',
					description: 'Display a modal within your application.',
				},
				{
					label: 'NavigationMenu',
					description: 'Display a list of links.',
				},
				{
					label: 'Pagination',
					description: 'Display a list of pages.',
				},
				{
					label: 'Popover',
					description:
						'Display a non-modal dialog that floats around a trigger element.',
				},
				{
					label: 'Progress',
					description: 'Show a horizontal bar to indicate task progression.',
				},
			],
		},
		{
			label: 'GitHub',
			icon: 'i-simple-icons-github',
		},
	] satisfies NavigationMenuItem[];
</script>

<template>
	<UNavigationMenu
		:items="items"
		:ui="{
			viewport: 'sm:w-(--reka-navigation-menu-viewport-width)',
			content: 'sm:w-auto',
			childList: 'sm:w-96',
			childLinkDescription: 'text-balance line-clamp-2',
		}"
		class="w-full justify-center"
	>
		<template #docs-content="{ item }">
			<ul
				class="grid gap-2 p-4 lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
			>
				<li class="row-span-3">
					<Placeholder class="size-full min-h-48" />
				</li>

				<li
					v-for="child in item.children"
					:key="child.label"
				>
					<ULink
						class="text-sm text-left rounded-md p-3 transition-colors hover:bg-elevated/50"
					>
						<p class="font-medium text-highlighted">
							{{ child.label }}
						</p>
						<p class="text-muted line-clamp-2">
							{{ child.description }}
						</p>
					</ULink>
				</li>
			</ul>
		</template>
	</UNavigationMenu>
</template>
```

> [!NOTE]
>
> In this example, we add the `sm:w-(--reka-navigation-menu-viewport-width)` class on the `viewport` to have a dynamic width. This requires to set a width on the content's first child.

## API

### Props

```ts
/**
 * Props for the NavigationMenu component
 */
interface NavigationMenuProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * Determines whether a "single" or "multiple" items can be selected at a time.
	 *
	 * Only works when `orientation` is `vertical`.
	 * @default 'multiple'
	 */
	type?: K | undefined;
	/**
	 * The controlled value of the active item(s).
	 * - In horizontal orientation: always `string`
	 * - In vertical orientation with `type="single"`: `string`
	 * - In vertical orientation with `type="multiple"`: `string[]`
	 *
	 * Use this when you need to control the state of the items. Can be binded with `v-model`
	 */
	modelValue?: NavigationMenuModelValue<K, O> | undefined;
	/**
	 * The default active value of the item(s).
	 * - In horizontal orientation: always `string`
	 * - In vertical orientation with `type="single"`: `string`
	 * - In vertical orientation with `type="multiple"`: `string[]`
	 *
	 * Use when you do not need to control the state of the item(s).
	 */
	defaultValue?: NavigationMenuModelValue<K, O> | undefined;
	/**
	 * The icon displayed to open the menu.
	 * @default appConfig.ui.icons.chevronDown
	 */
	trailingIcon?: any;
	/**
	 * The icon displayed when the item is an external link.
	 * Set to `false` to hide the external icon.
	 * @default true
	 */
	externalIcon?: any;
	items?: T | undefined;
	/**
	 * @default 'primary'
	 */
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'error'
		| 'neutral'
		| undefined;
	/**
	 * @default 'pill'
	 */
	variant?: 'pill' | 'link' | undefined;
	/**
	 * The orientation of the menu.
	 * @default 'horizontal'
	 */
	orientation?: O | undefined;
	/**
	 * Collapse the navigation menu to only show icons.
	 * Only works when `orientation` is `vertical`.
	 * @default false
	 */
	collapsed?: boolean | undefined;
	/**
	 * Display a tooltip on the items with the label of the item.
	 * Only works when `orientation` is `vertical` and `collapsed` is `true`.
	 * `{ delayDuration: 0, content: { side: 'right' } }`{lang="ts-type"}
	 * @default false
	 */
	tooltip?: boolean | TooltipProps | undefined;
	/**
	 * Display a popover on the items when the menu is collapsed with the children list.
	 * `{ mode: 'hover', content: { side: 'right', align: 'start', alignOffset: 2 } }`{lang="ts-type"}
	 * @default false
	 */
	popover?: boolean | PopoverProps<PopoverMode> | undefined;
	/**
	 * Display a line next to the active item.
	 */
	highlight?: boolean | undefined;
	/**
	 * @default 'primary'
	 */
	highlightColor?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'error'
		| 'neutral'
		| undefined;
	/**
	 * The content of the menu.
	 */
	content?:
		| (Omit<NavigationMenuContentProps, 'as' | 'asChild' | 'forceMount'> &
				Partial<EmitsToProps<DismissableLayerEmits>>)
		| undefined;
	/**
	 * The orientation of the content.
	 * Only works when `orientation` is `horizontal`.
	 * @default 'horizontal'
	 */
	contentOrientation?: 'horizontal' | 'vertical' | undefined;
	/**
	 * Display an arrow alongside the menu.
	 * @default false
	 */
	arrow?: boolean | undefined;
	/**
	 * The key used to get the value from the item.
	 * @default 'value'
	 */
	valueKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	/**
	 * The key used to get the label from the item.
	 * @default 'label'
	 */
	labelKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	ui?:
		| {
				root?: SlotClass;
				list?: SlotClass;
				label?: SlotClass;
				item?: SlotClass;
				link?: SlotClass;
				linkLeadingIcon?: SlotClass;
				linkLeadingAvatar?: SlotClass;
				linkLeadingAvatarSize?: SlotClass;
				linkLeadingChipSize?: SlotClass;
				linkTrailing?: SlotClass;
				linkTrailingBadge?: SlotClass;
				linkTrailingBadgeSize?: SlotClass;
				linkTrailingIcon?: SlotClass;
				linkLabel?: SlotClass;
				linkLabelExternalIcon?: SlotClass;
				childList?: SlotClass;
				childLabel?: SlotClass;
				childItem?: SlotClass;
				childLink?: SlotClass;
				childLinkWrapper?: SlotClass;
				childLinkIcon?: SlotClass;
				childLinkLabel?: SlotClass;
				childLinkLabelExternalIcon?: SlotClass;
				childLinkDescription?: SlotClass;
				separator?: SlotClass;
				viewportWrapper?: SlotClass;
				viewport?: SlotClass;
				content?: SlotClass;
				indicator?: SlotClass;
				arrow?: SlotClass;
		  }
		| undefined;
	/**
	 * The duration from when the pointer enters the trigger until the tooltip gets opened.
	 * @default 0
	 */
	delayDuration?: number | undefined;
	/**
	 * If `true`, menu cannot be open by click on trigger
	 * @default false
	 */
	disableClickTrigger?: boolean | undefined;
	/**
	 * If `true`, menu cannot be open by hover on trigger
	 * @default false
	 */
	disableHoverTrigger?: boolean | undefined;
	/**
	 * How much time a user has to enter another trigger without incurring a delay again.
	 * @default 300
	 */
	skipDelayDuration?: number | undefined;
	/**
	 * If `true`, menu will not close during pointer leave event
	 * @default false
	 */
	disablePointerLeaveClose?: boolean | undefined;
	/**
	 * When `true`, the element will be unmounted on closed state.
	 * @default true
	 */
	unmountOnHide?: boolean | undefined;
	/**
	 * When `true`, prevents the user from interacting with the accordion and all its items
	 * @default false
	 */
	disabled?: boolean | undefined;
	/**
	 * When type is "single", allows closing content when clicking trigger for an open item.
	 * When type is "multiple", this prop has no effect.
	 * @default true
	 */
	collapsible?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the NavigationMenu component
 */
interface NavigationMenuSlots {
  item(): any;
  item-leading(): any;
  item-label(): any;
  item-trailing(): any;
  item-content(): any;
  list-leading(): any;
  list-trailing(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the NavigationMenu component
 */
interface NavigationMenuEmits {
  update:modelValue: (payload: [value: NavigationMenuModelValue<K, O> | undefined]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		navigationMenu: {
			slots: {
				root: 'relative flex gap-1.5 [&>div]:min-w-0',
				list: 'isolate min-w-0',
				label:
					'w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5',
				item: 'min-w-0',
				link: 'group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:outline-3',
				linkLeadingIcon: 'shrink-0 size-5',
				linkLeadingAvatar: 'shrink-0',
				linkLeadingAvatarSize: '2xs',
				linkLeadingChipSize: 'sm',
				linkTrailing: 'group ms-auto inline-flex gap-1.5 items-center',
				linkTrailingBadge: 'shrink-0',
				linkTrailingBadgeSize: 'sm',
				linkTrailingIcon:
					'size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200 ease-out motion-reduce:transition-none',
				linkLabel: 'truncate',
				linkLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
				childList: 'isolate',
				childLabel: 'text-xs text-highlighted',
				childItem: '',
				childLink:
					'group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:outline-3',
				childLinkWrapper: 'min-w-0',
				childLinkIcon: 'size-5 shrink-0',
				childLinkLabel: 'truncate',
				childLinkLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
				childLinkDescription: 'text-muted',
				separator: 'px-2 h-px bg-border',
				viewportWrapper: 'absolute top-full start-0 flex w-full',
				viewport:
					'relative overflow-hidden bg-default shadow-lg rounded-md ring ring-default h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left,right] duration-200 ease-out motion-reduce:transition-none origin-[top_center] data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)] z-1',
				content: '',
				indicator:
					'absolute left-0 data-[state=visible]:animate-[fade-in_100ms_var(--ease-out)] data-[state=hidden]:animate-[fade-out_100ms_var(--ease-out)] data-[state=hidden]:opacity-0 bottom-0 z-2 w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200 ease-out motion-reduce:transition-none',
				arrow:
					'relative top-[50%] size-2.5 rotate-45 border border-default bg-default z-1 rounded-xs',
			},
			variants: {
				color: {
					primary: {
						link: 'before:outline-primary/25',
						childLink: 'before:outline-primary/25',
					},
					secondary: {
						link: 'before:outline-secondary/25',
						childLink: 'before:outline-secondary/25',
					},
					success: {
						link: 'before:outline-success/25',
						childLink: 'before:outline-success/25',
					},
					info: {
						link: 'before:outline-info/25',
						childLink: 'before:outline-info/25',
					},
					warning: {
						link: 'before:outline-warning/25',
						childLink: 'before:outline-warning/25',
					},
					error: {
						link: 'before:outline-error/25',
						childLink: 'before:outline-error/25',
					},
					neutral: {
						link: 'before:outline-inverted/25',
						childLink: 'before:outline-inverted/25',
					},
				},
				highlightColor: {
					primary: '',
					secondary: '',
					success: '',
					info: '',
					warning: '',
					error: '',
					neutral: '',
				},
				variant: {
					pill: '',
					link: '',
				},
				orientation: {
					horizontal: {
						root: 'items-center justify-between',
						list: 'flex items-center',
						item: 'py-2',
						link: 'px-2.5 py-1.5 before:inset-x-px before:inset-y-0',
						childList: 'grid p-2',
						childLink: 'px-3 py-2 gap-2 before:inset-x-px before:inset-y-0',
						childLinkLabel: 'font-medium',
						content:
							'absolute top-0 start-0 w-full max-h-[70vh] overflow-y-auto',
					},
					vertical: {
						root: 'flex-col',
						link: 'flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0',
						childLabel: 'px-1.5 py-0.5',
						childLink: 'p-1.5 gap-1.5 before:inset-y-px before:inset-x-0',
					},
				},
				contentOrientation: {
					horizontal: {
						viewportWrapper: 'justify-center',
						content:
							'data-[motion=from-start]:animate-[enter-from-left_200ms_var(--ease-out)] data-[motion=from-end]:animate-[enter-from-right_200ms_var(--ease-out)] data-[motion=to-start]:animate-[exit-to-left_200ms_var(--ease-out)] data-[motion=to-end]:animate-[exit-to-right_200ms_var(--ease-out)]',
					},
					vertical: {
						viewport:
							'sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left) rtl:left-auto rtl:right-[calc(100%-var(--reka-navigation-menu-viewport-left)-var(--reka-navigation-menu-viewport-width))]',
					},
				},
				active: {
					true: {
						childLink: 'before:bg-elevated text-highlighted',
						childLinkIcon: 'text-default',
					},
					false: {
						link: 'text-muted',
						linkLeadingIcon: 'text-dimmed',
						childLink: [
							'hover:before:bg-elevated/50 text-default hover:text-highlighted',
							'transition-colors before:transition-colors',
						],
						childLinkIcon: [
							'text-dimmed group-hover:text-default',
							'transition-colors',
						],
					},
				},
				disabled: {
					true: {
						link: 'cursor-not-allowed opacity-75',
					},
				},
				highlight: {
					true: '',
				},
				level: {
					true: '',
				},
				collapsed: {
					true: '',
				},
			},
			compoundVariants: [
				{
					orientation: 'horizontal',
					contentOrientation: 'horizontal',
					class: {
						childList: 'grid-cols-2 gap-2',
					},
				},
				{
					orientation: 'horizontal',
					contentOrientation: 'vertical',
					class: {
						childList: 'gap-1',
						content: 'w-60',
					},
				},
				{
					orientation: 'vertical',
					collapsed: false,
					class: {
						childList: 'ms-5 border-s border-default',
						childItem: 'ps-1.5 -ms-px',
						content:
							'data-[state=open]:animate-[collapsible-down_200ms_var(--ease-out)] data-[state=closed]:animate-[collapsible-up_200ms_var(--ease-out)] data-[state=closed]:overflow-hidden',
					},
				},
				{
					orientation: 'vertical',
					collapsed: true,
					class: {
						link: 'px-1.5',
						linkLabel: 'hidden',
						linkTrailing: 'hidden',
						content: 'shadow-sm rounded-sm min-h-6 p-1',
					},
				},
				{
					orientation: 'horizontal',
					highlight: true,
					class: {
						link: [
							'after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full',
							'after:transition-colors',
						],
					},
				},
				{
					orientation: 'vertical',
					highlight: true,
					level: true,
					class: {
						link: [
							'after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full',
							'after:transition-colors',
						],
					},
				},
				{
					disabled: false,
					active: false,
					variant: 'pill',
					class: {
						link: [
							'hover:text-highlighted hover:before:bg-elevated/50',
							'transition-colors before:transition-colors',
						],
						linkLeadingIcon: ['group-hover:text-default', 'transition-colors'],
					},
				},
				{
					disabled: false,
					active: false,
					variant: 'pill',
					orientation: 'horizontal',
					class: {
						link: 'data-[state=open]:text-highlighted',
						linkLeadingIcon: 'group-data-[state=open]:text-default',
					},
				},
				{
					disabled: false,
					variant: 'pill',
					highlight: true,
					orientation: 'horizontal',
					class: {
						link: 'data-[state=open]:before:bg-elevated/50',
					},
				},
				{
					disabled: false,
					variant: 'pill',
					highlight: false,
					active: false,
					orientation: 'horizontal',
					class: {
						link: 'data-[state=open]:before:bg-elevated/50',
					},
				},
				{
					color: 'primary',
					variant: 'pill',
					active: true,
					class: {
						link: 'text-primary',
						linkLeadingIcon:
							'text-primary group-data-[state=open]:text-primary',
					},
				},
				{
					color: 'secondary',
					variant: 'pill',
					active: true,
					class: {
						link: 'text-secondary',
						linkLeadingIcon:
							'text-secondary group-data-[state=open]:text-secondary',
					},
				},
				{
					color: 'success',
					variant: 'pill',
					active: true,
					class: {
						link: 'text-success',
						linkLeadingIcon:
							'text-success group-data-[state=open]:text-success',
					},
				},
				{
					color: 'info',
					variant: 'pill',
					active: true,
					class: {
						link: 'text-info',
						linkLeadingIcon: 'text-info group-data-[state=open]:text-info',
					},
				},
				{
					color: 'warning',
					variant: 'pill',
					active: true,
					class: {
						link: 'text-warning',
						linkLeadingIcon:
							'text-warning group-data-[state=open]:text-warning',
					},
				},
				{
					color: 'error',
					variant: 'pill',
					active: true,
					class: {
						link: 'text-error',
						linkLeadingIcon: 'text-error group-data-[state=open]:text-error',
					},
				},
				{
					color: 'neutral',
					variant: 'pill',
					active: true,
					class: {
						link: 'text-highlighted',
						linkLeadingIcon:
							'text-highlighted group-data-[state=open]:text-highlighted',
					},
				},
				{
					variant: 'pill',
					active: true,
					highlight: false,
					class: {
						link: 'before:bg-elevated',
					},
				},
				{
					variant: 'pill',
					active: true,
					highlight: true,
					disabled: false,
					class: {
						link: ['hover:before:bg-elevated/50', 'before:transition-colors'],
					},
				},
				{
					disabled: false,
					active: false,
					variant: 'link',
					class: {
						link: ['hover:text-highlighted', 'transition-colors'],
						linkLeadingIcon: ['group-hover:text-default', 'transition-colors'],
					},
				},
				{
					disabled: false,
					active: false,
					variant: 'link',
					orientation: 'horizontal',
					class: {
						link: 'data-[state=open]:text-highlighted',
						linkLeadingIcon: 'group-data-[state=open]:text-default',
					},
				},
				{
					color: 'primary',
					variant: 'link',
					active: true,
					class: {
						link: 'text-primary',
						linkLeadingIcon:
							'text-primary group-data-[state=open]:text-primary',
					},
				},
				{
					color: 'secondary',
					variant: 'link',
					active: true,
					class: {
						link: 'text-secondary',
						linkLeadingIcon:
							'text-secondary group-data-[state=open]:text-secondary',
					},
				},
				{
					color: 'success',
					variant: 'link',
					active: true,
					class: {
						link: 'text-success',
						linkLeadingIcon:
							'text-success group-data-[state=open]:text-success',
					},
				},
				{
					color: 'info',
					variant: 'link',
					active: true,
					class: {
						link: 'text-info',
						linkLeadingIcon: 'text-info group-data-[state=open]:text-info',
					},
				},
				{
					color: 'warning',
					variant: 'link',
					active: true,
					class: {
						link: 'text-warning',
						linkLeadingIcon:
							'text-warning group-data-[state=open]:text-warning',
					},
				},
				{
					color: 'error',
					variant: 'link',
					active: true,
					class: {
						link: 'text-error',
						linkLeadingIcon: 'text-error group-data-[state=open]:text-error',
					},
				},
				{
					color: 'neutral',
					variant: 'link',
					active: true,
					class: {
						link: 'text-highlighted',
						linkLeadingIcon:
							'text-highlighted group-data-[state=open]:text-highlighted',
					},
				},
				{
					highlightColor: 'primary',
					highlight: true,
					level: true,
					active: true,
					class: {
						link: 'after:bg-primary',
					},
				},
				{
					highlightColor: 'secondary',
					highlight: true,
					level: true,
					active: true,
					class: {
						link: 'after:bg-secondary',
					},
				},
				{
					highlightColor: 'success',
					highlight: true,
					level: true,
					active: true,
					class: {
						link: 'after:bg-success',
					},
				},
				{
					highlightColor: 'info',
					highlight: true,
					level: true,
					active: true,
					class: {
						link: 'after:bg-info',
					},
				},
				{
					highlightColor: 'warning',
					highlight: true,
					level: true,
					active: true,
					class: {
						link: 'after:bg-warning',
					},
				},
				{
					highlightColor: 'error',
					highlight: true,
					level: true,
					active: true,
					class: {
						link: 'after:bg-error',
					},
				},
				{
					highlightColor: 'neutral',
					highlight: true,
					level: true,
					active: true,
					class: {
						link: 'after:bg-inverted',
					},
				},
			],
			defaultVariants: {
				color: 'primary',
				highlightColor: 'primary',
				variant: 'pill',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/NavigationMenu.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/navigation-menu.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Pagination"
description: "A list of buttons or links to navigate through pages."
canonical_url: "https://ui.nuxt.com/docs/components/pagination"

---

# Pagination

> A list of buttons or links to navigate through pages.

## Usage

Use the `default-page` prop or the `v-model:page` directive to control the current page.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		:total="100"
	/>
</template>
```

> [!NOTE]
>
> The Pagination component uses some [`Button`](/docs/components/button) to display the pages, use [`color`](#color), [`variant`](#variant) and [`size`](#size) props to style them.

### Total

Use the `total` prop to set the total number of items in the list.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		:total="100"
	/>
</template>
```

### Items Per Page

Use the `items-per-page` prop to set the number of items per page. Defaults to `10`.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		:items-per-page="20"
		:total="100"
	/>
</template>
```

### Sibling Count

Use the `sibling-count` prop to set the number of siblings to show. Defaults to `2`.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		:sibling-count="1"
		:total="100"
	/>
</template>
```

### Show Edges

Use the `show-edges` prop to always show the ellipsis, first and last pages. Defaults to `false`.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		show-edges
		:sibling-count="1"
		:total="100"
	/>
</template>
```

### Show Controls

Use the `show-controls` prop to show the first, prev, next and last buttons. Defaults to `true`.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		:show-controls="false"
		show-edges
		:total="100"
	/>
</template>
```

### Color

Use the `color` prop to set the color of the inactive controls. Defaults to `neutral`.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		color="primary"
		:total="100"
	/>
</template>
```

### Variant

Use the `variant` prop to set the variant of the inactive controls. Defaults to `outline`.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		color="neutral"
		variant="subtle"
		:total="100"
	/>
</template>
```

### Active Color

Use the `active-color` prop to set the color of the active control. Defaults to `primary`.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		active-color="neutral"
		:total="100"
	/>
</template>
```

### Active Variant

Use the `active-variant` prop to set the variant of the active control. Defaults to `solid`.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		active-color="primary"
		active-variant="subtle"
		:total="100"
	/>
</template>
```

### Size

Use the `size` prop to set the size of the controls. Defaults to `md`.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		size="xl"
		:total="100"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the pagination controls.

```vue
<script setup lang="ts">
	const page = ref(5);
</script>

<template>
	<UPagination
		v-model:page="page"
		:total="100"
		disabled
	/>
</template>
```

## Examples

### With links

Use the `to` prop to transform buttons into links. Pass a function that receives the page number and returns a route destination.

```vue [PaginationLinksExample.vue]
<script setup lang="ts">
	const page = ref(5);

	function to(page: number) {
		return {
			query: {
				page,
			},
			hash: '#with-links',
		};
	}
</script>

<template>
	<UPagination
		v-model:page="page"
		:total="100"
		:to="to"
		:sibling-count="1"
		show-edges
	/>
</template>
```

> [!NOTE]
>
> In this example we're adding the `#with-links` hash to avoid going to the top of the page.

## API

### Props

```ts
/**
 * Props for the Pagination component
 */
interface PaginationProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  /**
   * The icon to use for the first page control.
   * @default appConfig.ui.icons.chevronDoubleLeft
   */
  firstIcon?: any;
  /**
   * The icon to use for the previous page control.
   * @default appConfig.ui.icons.chevronLeft
   */
  prevIcon?: any;
  /**
   * The icon to use for the next page control.
   * @default appConfig.ui.icons.chevronRight
   */
  nextIcon?: any;
  /**
   * The icon to use for the last page control.
   * @default appConfig.ui.icons.chevronDoubleRight
   */
  lastIcon?: any;
  /**
   * The icon to use for the ellipsis control.
   * @default appConfig.ui.icons.ellipsis
   */
  ellipsisIcon?: any;
  /**
   * The color of the pagination controls.
   * @default 'neutral'
   */
  color?: "error" | "neutral" | "primary" | "secondary" | "success" | "info" | "warning" | undefined;
  /**
   * The variant of the pagination controls.
   * @default 'outline'
   */
  variant?: "outline" | "solid" | "soft" | "subtle" | "ghost" | "link" | undefined;
  /**
   * The color of the active pagination control.
   * @default 'primary'
   */
  activeColor?: "error" | "neutral" | "primary" | "secondary" | "success" | "info" | "warning" | undefined;
  /**
   * The variant of the active pagination control.
   * @default 'solid'
   */
  activeVariant?: "outline" | "solid" | "soft" | "subtle" | "ghost" | "link" | undefined;
  /**
   * Whether to show the first, previous, next, and last controls.
   * @default true
   */
  showControls?: boolean | undefined;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  /**
   * A function to render page controls as links.
   */
  to?: (page: number): string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined | undefined;
  ui?: { root?: SlotClass; list?: SlotClass; ellipsis?: SlotClass; label?: SlotClass; first?: SlotClass; prev?: SlotClass; item?: SlotClass; next?: SlotClass; last?: SlotClass; } | undefined;
  /**
   * The value of the page that should be active when initially rendered.
   *
   * Use when you do not need to control the value state.
   */
  defaultPage?: number | undefined;
  /**
   * When `true`, prevents the user from interacting with item
   */
  disabled?: boolean | undefined;
  /**
   * Number of items per page
   * @default 10
   */
  itemsPerPage?: number | undefined;
  /**
   * The controlled value of the current page. Can be binded as `v-model:page`.
   */
  page?: number | undefined;
  /**
   * When `true`, always show first page, last page, and ellipsis
   * @default false
   */
  showEdges?: boolean | undefined;
  /**
   * Number of sibling should be shown around the current page
   * @default 2
   */
  siblingCount?: number | undefined;
  /**
   * Number of items in your list
   * @default 0
   */
  total?: number | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Pagination component
 */
interface PaginationSlots {
	first(): any;
	prev(): any;
	next(): any;
	last(): any;
	ellipsis(): any;
	item(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Pagination component
 */
interface PaginationEmits {
  update:page: (payload: [value: number]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		pagination: {
			slots: {
				root: '',
				list: 'flex items-center gap-1',
				ellipsis: 'pointer-events-none',
				label: 'min-w-5 text-center',
				first: '',
				prev: '',
				item: '',
				next: '',
				last: '',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Pagination.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/pagination.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Stepper"
description: "A set of steps that are used to indicate progress through a multi-step process."
canonical_url: "https://ui.nuxt.com/docs/components/stepper"

---

# Stepper

> A set of steps that are used to indicate progress through a multi-step process.

## Usage

Use the Stepper component to display a list of items in a stepper.

```vue
<script setup lang="ts">
	import type { StepperItem } from '@nuxt/ui';

	const items = ref<StepperItem[]>([
		{
			title: 'Address',
			description: 'Add your address here',
			icon: 'i-lucide-house',
		},
		{
			title: 'Shipping',
			description: 'Set your preferred shipping method',
			icon: 'i-lucide-truck',
		},
		{
			title: 'Checkout',
			description: 'Confirm your order',
		},
	]);
</script>

<template>
	<UStepper :items="items" />
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `title?: string`
- `description?: AvatarProps`
- `content?: string`
- `icon?: string`
- `value?: string | number`
- `disabled?: boolean`
- [`slot?: string`](#with-custom-slot)
- `class?: any`
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`

```vue
<script setup lang="ts">
	import type { StepperItem } from '@nuxt/ui';

	const items = ref<StepperItem[]>([
		{
			title: 'Address',
			description: 'Add your address here',
			icon: 'i-lucide-house',
		},
		{
			title: 'Shipping',
			description: 'Set your preferred shipping method',
			icon: 'i-lucide-truck',
		},
		{
			title: 'Checkout',
			description: 'Confirm your order',
		},
	]);
</script>

<template>
	<UStepper
		:items="items"
		class="w-full"
	/>
</template>
```

> [!NOTE]
>
> Click on the items to navigate through the steps.

### Color

Use the `color` prop to change the color of the Stepper.

```vue
<script setup lang="ts">
	import type { StepperItem } from '@nuxt/ui';

	const items = ref<StepperItem[]>([
		{
			title: 'Address',
			description: 'Add your address here',
			icon: 'i-lucide-house',
		},
		{
			title: 'Shipping',
			description: 'Set your preferred shipping method',
			icon: 'i-lucide-truck',
		},
		{
			title: 'Checkout',
			description: 'Confirm your order',
		},
	]);
</script>

<template>
	<UStepper
		color="neutral"
		:items="items"
		class="w-full"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Stepper.

```vue
<script setup lang="ts">
	import type { StepperItem } from '@nuxt/ui';

	const items = ref<StepperItem[]>([
		{
			title: 'Address',
			description: 'Add your address here',
			icon: 'i-lucide-house',
		},
		{
			title: 'Shipping',
			description: 'Set your preferred shipping method',
			icon: 'i-lucide-truck',
		},
		{
			title: 'Checkout',
			description: 'Confirm your order',
		},
	]);
</script>

<template>
	<UStepper
		size="xl"
		:items="items"
		class="w-full"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Stepper. Defaults to `horizontal`.

```vue
<script setup lang="ts">
	import type { StepperItem } from '@nuxt/ui';

	const items = ref<StepperItem[]>([
		{
			title: 'Address',
			description: 'Add your address here',
			icon: 'i-lucide-house',
		},
		{
			title: 'Shipping',
			description: 'Set your preferred shipping method',
			icon: 'i-lucide-truck',
		},
		{
			title: 'Checkout',
			description: 'Confirm your order',
		},
	]);
</script>

<template>
	<UStepper
		orientation="vertical"
		:items="items"
		class="w-full"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable navigation through the steps.

```vue
<script setup lang="ts">
	import type { StepperItem } from '@nuxt/ui';

	const items = ref<StepperItem[]>([
		{
			title: 'Address',
			description: 'Add your address here',
			icon: 'i-lucide-house',
		},
		{
			title: 'Shipping',
			description: 'Set your preferred shipping method',
			icon: 'i-lucide-truck',
		},
		{
			title: 'Checkout',
			description: 'Confirm your order',
		},
	]);
</script>

<template>
	<UStepper
		disabled
		:items="items"
	/>
</template>
```

> [!NOTE]
> See: #with-controls
>
> This can be useful when you want to force navigation with controls.

## Examples

### With controls

You can add additional controls for the stepper using buttons.

```vue [StepperWithControlsExample.vue]
<script setup lang="ts">
	import type { StepperItem } from '@nuxt/ui';

	const items: StepperItem[] = [
		{
			title: 'Address',
			description: 'Add your address here',
			icon: 'i-lucide-house',
		},
		{
			title: 'Shipping',
			description: 'Set your preferred shipping method',
			icon: 'i-lucide-truck',
		},
		{
			title: 'Checkout',
			description: 'Confirm your order',
		},
	];

	const stepper = useTemplateRef('stepper');
</script>

<template>
	<div class="w-full">
		<UStepper
			ref="stepper"
			:items="items"
		>
			<template #content="{ item }">
				<Placeholder class="aspect-video">
					{{ item.title }}
				</Placeholder>
			</template>
		</UStepper>

		<div class="flex gap-2 justify-between mt-4">
			<UButton
				leading-icon="i-lucide-arrow-left"
				:disabled="!stepper?.hasPrev"
				@click="stepper?.prev()"
			>
				Prev
			</UButton>

			<UButton
				trailing-icon="i-lucide-arrow-right"
				:disabled="!stepper?.hasNext"
				@click="stepper?.next()"
			>
				Next
			</UButton>
		</div>
	</div>
</template>
```

### Control active item

You can control the active item by using the `default-value` prop or the `v-model` directive with the `value` of the item. If no `value` is provided, it defaults to the index.

```vue [StepperModelValueExample.vue]
<script setup lang="ts">
	import type { StepperItem } from '@nuxt/ui';
	import { onMounted, ref } from 'vue';

	const items: StepperItem[] = [
		{
			title: 'Address',
			description: 'Add your address here',
			icon: 'i-lucide-house',
		},
		{
			title: 'Shipping',
			description: 'Set your preferred shipping method',
			icon: 'i-lucide-truck',
		},
		{
			title: 'Checkout',
			description: 'Confirm your order',
		},
	];

	const active = ref(0);

	// Note: This is for demonstration purposes only. Don't do this at home.
	onMounted(() => {
		setInterval(() => {
			active.value = (active.value + 1) % items.length;
		}, 2000);
	});
</script>

<template>
	<UStepper
		v-model="active"
		:items="items"
		class="w-full"
	>
		<template #content="{ item }">
			<Placeholder class="aspect-video">
				This is the {{ item?.title }} step.
			</Placeholder>
		</template>
	</UStepper>
</template>
```

> [!TIP]
>
> Use the `value-key` prop to change the key used to match items when a `v-model` or `default-value` is provided.

### With content slot

Use the `#content` slot to customize the content of each item.

```vue [StepperContentSlotExample.vue]
<script setup lang="ts">
	import type { StepperItem } from '@nuxt/ui';

	const items: StepperItem[] = [
		{
			title: 'Address',
			description: 'Add your address here',
			icon: 'i-lucide-house',
		},
		{
			title: 'Shipping',
			description: 'Set your preferred shipping method',
			icon: 'i-lucide-truck',
		},
		{
			title: 'Checkout',
			description: 'Confirm your order',
		},
	];
</script>

<template>
	<UStepper
		ref="stepper"
		:items="items"
		class="w-full"
	>
		<template #content="{ item }">
			<Placeholder class="aspect-video">
				This is the {{ item?.title }} step.
			</Placeholder>
		</template>
	</UStepper>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`

```vue [StepperCustomSlotExample.vue]
<script setup lang="ts">
	import type { StepperItem } from '@nuxt/ui';

	const items = [
		{
			slot: 'address' as const,
			title: 'Address',
			description: 'Add your address here',
			icon: 'i-lucide-house',
		},
		{
			slot: 'shipping' as const,
			title: 'Shipping',
			description: 'Set your preferred shipping method',
			icon: 'i-lucide-truck',
		},
		{
			slot: 'checkout' as const,
			title: 'Checkout',
			description: 'Confirm your order',
		},
	] satisfies StepperItem[];
</script>

<template>
	<UStepper
		:items="items"
		class="w-full"
	>
		<template #address>
			<Placeholder class="aspect-video"> Address </Placeholder>
		</template>

		<template #shipping>
			<Placeholder class="aspect-video"> Shipping </Placeholder>
		</template>

		<template #checkout>
			<Placeholder class="aspect-video"> Checkout </Placeholder>
		</template>
	</UStepper>
</template>
```

## API

### Props

```ts
/**
 * Props for the Stepper component
 */
interface StepperProps {
	items: T[];
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * @default 'primary'
	 */
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'error'
		| 'neutral'
		| undefined;
	/**
	 * The orientation of the stepper.
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical' | undefined;
	/**
	 * The key used to get the value from the item.
	 * @default 'value'
	 */
	valueKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	/**
	 * The value of the step that should be active when initially rendered. Use when you do not need to control the state of the steps.
	 */
	defaultValue?: string | number | undefined;
	disabled?: boolean | undefined;
	ui?:
		| {
				root?: SlotClass;
				header?: SlotClass;
				item?: SlotClass;
				container?: SlotClass;
				trigger?: SlotClass;
				indicator?: SlotClass;
				icon?: SlotClass;
				separator?: SlotClass;
				wrapper?: SlotClass;
				title?: SlotClass;
				description?: SlotClass;
				content?: SlotClass;
		  }
		| undefined;
	/**
	 * Whether or not the steps must be completed in order.
	 * @default true
	 */
	linear?: boolean | undefined;
	modelValue?: string | number | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Stepper component
 */
interface StepperSlots {
	indicator(): any;
	wrapper(): any;
	title(): any;
	description(): any;
	content(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Stepper component
 */
interface StepperEmits {
  next: (payload: [value: T]) => void;
  prev: (payload: [value: T]) => void;
  update:modelValue: (payload: [value: string | number | undefined]) => void;
}
```

### Expose

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
	const stepper = useTemplateRef('stepper');
</script>

<template>
	<UStepper ref="stepper" />
</template>
```

This will give you access to the following:

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          next
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sMK4o">
          ()
        </span>
        
        <span class="spNyl">
          =>
        </span>
        
        <span class="sBMFI">
          void
        </span>
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          prev
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sMK4o">
          ()
        </span>
        
        <span class="spNyl">
          =>
        </span>
        
        <span class="sBMFI">
          void
        </span>
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          hasNext
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Ref
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          boolean
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          hasPrev
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Ref
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          boolean
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
    </td>
  </tr>
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		stepper: {
			slots: {
				root: 'flex gap-4',
				header: 'flex',
				item: 'group text-center relative w-full',
				container: 'relative',
				trigger:
					'rounded-full font-medium text-center align-middle flex items-center justify-center font-semibold group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted bg-elevated focus-visible:outline-3',
				indicator: 'flex items-center justify-center size-full',
				icon: 'shrink-0',
				separator:
					'absolute rounded-full group-data-[disabled]:opacity-75 bg-accented',
				wrapper: '',
				title: 'font-medium text-default',
				description: 'text-muted text-wrap',
				content: 'size-full',
			},
			variants: {
				orientation: {
					horizontal: {
						root: 'flex-col',
						container: 'flex justify-center',
						separator: 'top-[calc(50%-2px)] h-0.5',
						wrapper: 'mt-1',
					},
					vertical: {
						header: 'flex-col gap-4',
						item: 'flex text-start',
						separator: 'start-[calc(50%-1px)] -bottom-[10px] w-0.5',
					},
				},
				size: {
					xs: {
						trigger: 'size-6 text-xs',
						icon: 'size-3',
						title: 'text-xs',
						description: 'text-xs',
						wrapper: 'mt-1.5',
					},
					sm: {
						trigger: 'size-8 text-sm',
						icon: 'size-4',
						title: 'text-xs',
						description: 'text-xs',
						wrapper: 'mt-2',
					},
					md: {
						trigger: 'size-10 text-base',
						icon: 'size-5',
						title: 'text-sm',
						description: 'text-sm',
						wrapper: 'mt-2.5',
					},
					lg: {
						trigger: 'size-12 text-lg',
						icon: 'size-6',
						title: 'text-base',
						description: 'text-base',
						wrapper: 'mt-3',
					},
					xl: {
						trigger: 'size-14 text-xl',
						icon: 'size-7',
						title: 'text-lg',
						description: 'text-lg',
						wrapper: 'mt-3.5',
					},
				},
				color: {
					primary: {
						trigger:
							'group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary outline-primary/25',
						separator: 'group-data-[state=completed]:bg-primary',
					},
					secondary: {
						trigger:
							'group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary outline-secondary/25',
						separator: 'group-data-[state=completed]:bg-secondary',
					},
					success: {
						trigger:
							'group-data-[state=completed]:bg-success group-data-[state=active]:bg-success outline-success/25',
						separator: 'group-data-[state=completed]:bg-success',
					},
					info: {
						trigger:
							'group-data-[state=completed]:bg-info group-data-[state=active]:bg-info outline-info/25',
						separator: 'group-data-[state=completed]:bg-info',
					},
					warning: {
						trigger:
							'group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning outline-warning/25',
						separator: 'group-data-[state=completed]:bg-warning',
					},
					error: {
						trigger:
							'group-data-[state=completed]:bg-error group-data-[state=active]:bg-error outline-error/25',
						separator: 'group-data-[state=completed]:bg-error',
					},
					neutral: {
						trigger:
							'group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted outline-inverted/25',
						separator: 'group-data-[state=completed]:bg-inverted',
					},
				},
			},
			compoundVariants: [
				{
					orientation: 'horizontal',
					size: 'xs',
					class: {
						separator: 'start-[calc(50%+16px)] end-[calc(-50%+16px)]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'sm',
					class: {
						separator: 'start-[calc(50%+20px)] end-[calc(-50%+20px)]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'md',
					class: {
						separator: 'start-[calc(50%+28px)] end-[calc(-50%+28px)]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'lg',
					class: {
						separator: 'start-[calc(50%+32px)] end-[calc(-50%+32px)]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'xl',
					class: {
						separator: 'start-[calc(50%+36px)] end-[calc(-50%+36px)]',
					},
				},
				{
					orientation: 'vertical',
					size: 'xs',
					class: {
						separator: 'top-[30px]',
						item: 'gap-1.5',
					},
				},
				{
					orientation: 'vertical',
					size: 'sm',
					class: {
						separator: 'top-[38px]',
						item: 'gap-2',
					},
				},
				{
					orientation: 'vertical',
					size: 'md',
					class: {
						separator: 'top-[46px]',
						item: 'gap-2.5',
					},
				},
				{
					orientation: 'vertical',
					size: 'lg',
					class: {
						separator: 'top-[54px]',
						item: 'gap-3',
					},
				},
				{
					orientation: 'vertical',
					size: 'xl',
					class: {
						separator: 'top-[62px]',
						item: 'gap-3.5',
					},
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Stepper.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/stepper.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Tabs"
description: "A set of tab panels that are displayed one at a time."
canonical_url: "https://ui.nuxt.com/docs/components/tabs"

---

# Tabs

> A set of tab panels that are displayed one at a time.

## Usage

Use the Tabs component to display a list of items in tabs.

```vue [TabsExample.vue]
<script setup lang="ts">
	const items = [
		{
			label: 'Account',
			icon: 'i-lucide-user',
			slot: 'account',
		},
		{
			label: 'Password',
			icon: 'i-lucide-lock',
			slot: 'password',
		},
	];

	const state = reactive({
		name: 'Benjamin Canac',
		username: 'benjamincanac',
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
</script>

<template>
	<UTabs :items="items">
		<template #account>
			<UForm
				:state="state"
				class="flex flex-col gap-4"
			>
				<UFormField
					label="Name"
					name="name"
				>
					<UInput
						v-model="state.name"
						class="w-full"
					/>
				</UFormField>
				<UFormField
					label="Username"
					name="username"
				>
					<UInput
						v-model="state.username"
						class="w-full"
					/>
				</UFormField>
			</UForm>
		</template>

		<template #password>
			<UForm
				:state="state"
				class="flex flex-col gap-4"
			>
				<UFormField
					label="Current Password"
					name="current"
					required
				>
					<UInput
						v-model="state.currentPassword"
						type="password"
						required
						class="w-full"
					/>
				</UFormField>
				<UFormField
					label="New Password"
					name="new"
					required
				>
					<UInput
						v-model="state.newPassword"
						type="password"
						required
						class="w-full"
					/>
				</UFormField>
				<UFormField
					label="Confirm Password"
					name="confirm"
					required
				>
					<UInput
						v-model="state.confirmPassword"
						type="password"
						required
						class="w-full"
					/>
				</UFormField>
			</UForm>
		</template>
	</UTabs>
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- `icon?: string`
- `avatar?: AvatarProps`
- `badge?: string | number | BadgeProps`
- `content?: string`
- `value?: string | number`
- `disabled?: boolean`
- [`slot?: string`](#with-custom-slot)
- `class?: any`
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`

```vue
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items = ref<TabsItem[]>([
		{
			label: 'Account',
			icon: 'i-lucide-user',
			content: 'This is the account content.',
		},
		{
			label: 'Password',
			icon: 'i-lucide-lock',
			content: 'This is the password content.',
		},
	]);
</script>

<template>
	<UTabs
		:items="items"
		class="w-full"
	/>
</template>
```

### Content

Set the `content` prop to `false` to render the triggers without any panels. Defaults to `true`.

```vue
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items = ref<TabsItem[]>([
		{
			label: 'Account',
			icon: 'i-lucide-user',
			content: 'This is the account content.',
		},
		{
			label: 'Password',
			icon: 'i-lucide-lock',
			content: 'This is the password content.',
		},
	]);
</script>

<template>
	<UTabs
		:content="false"
		:items="items"
		class="w-full"
	/>
</template>
```

### Unmount

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the Tabs is collapsed. Defaults to `true`.

```vue
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items = ref<TabsItem[]>([
		{
			label: 'Account',
			icon: 'i-lucide-user',
			content: 'This is the account content.',
		},
		{
			label: 'Password',
			icon: 'i-lucide-lock',
			content: 'This is the password content.',
		},
	]);
</script>

<template>
	<UTabs
		:unmount-on-hide="false"
		:items="items"
		class="w-full"
	/>
</template>
```

> [!NOTE]
>
> You can inspect the DOM to see each item's content being rendered.

### Color

Use the `color` prop to change the color of the Tabs.

```vue
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items = ref<TabsItem[]>([
		{
			label: 'Account',
		},
		{
			label: 'Password',
		},
	]);
</script>

<template>
	<UTabs
		color="neutral"
		:content="false"
		:items="items"
		class="w-full"
	/>
</template>
```

### Variant

Use the `variant` prop to change the variant of the Tabs.

```vue
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items = ref<TabsItem[]>([
		{
			label: 'Account',
		},
		{
			label: 'Password',
		},
	]);
</script>

<template>
	<UTabs
		color="neutral"
		variant="link"
		:content="false"
		:items="items"
		class="w-full"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Tabs.

```vue
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items = ref<TabsItem[]>([
		{
			label: 'Account',
		},
		{
			label: 'Password',
		},
	]);
</script>

<template>
	<UTabs
		size="md"
		variant="pill"
		:content="false"
		:items="items"
		class="w-full"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Tabs. Defaults to `horizontal`.

```vue
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items = ref<TabsItem[]>([
		{
			label: 'Account',
		},
		{
			label: 'Password',
		},
	]);
</script>

<template>
	<UTabs
		orientation="vertical"
		variant="pill"
		:content="false"
		:items="items"
		class="w-full"
	/>
</template>
```

## Examples

### Control active item

You can control the active item by using the `default-value` prop or the `v-model` directive with the `value` of the item. If no `value` is provided, it defaults to the index **as a string**.

```vue [TabsModelValueExample.vue]
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items: TabsItem[] = [
		{
			label: 'Account',
			icon: 'i-lucide-user',
		},
		{
			label: 'Password',
			icon: 'i-lucide-lock',
		},
	];

	const active = ref('0');

	// Note: This is for demonstration purposes only. Don't do this at home.
	onMounted(() => {
		setInterval(() => {
			active.value = String((Number(active.value) + 1) % items.length);
		}, 2000);
	});
</script>

<template>
	<UTabs
		v-model="active"
		:content="false"
		:items="items"
		class="w-full"
	/>
</template>
```

> [!TIP]
>
> Use the `value-key` prop to change the key used to match items when a `v-model` or `default-value` is provided.

### With route query

You can control the active item by a URL query parameter, using `route.query.tab` as the `value` of the item.

```vue [TabsRouteQueryExample.vue]
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const route = useRoute();
	const router = useRouter();

	const items: TabsItem[] = [
		{
			label: 'Account',
			icon: 'i-lucide-user',
			value: 'account',
		},
		{
			label: 'Password',
			icon: 'i-lucide-lock',
			value: 'password',
		},
	];

	const active = computed({
		get() {
			return (route.query.tab as string) || 'account';
		},
		set(tab) {
			// Hash is specified here to prevent the page from scrolling to the top
			router.push({
				path: '/docs/components/tabs',
				query: { tab },
				hash: '#with-route-query',
			});
		},
	});
</script>

<template>
	<UTabs
		v-model="active"
		:content="false"
		:items="items"
		class="w-full"
	/>
</template>
```

### With content slot

Use the `#content` slot to customize the content of each item.

```vue [TabsContentSlotExample.vue]
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items: TabsItem[] = [
		{
			label: 'Account',
			icon: 'i-lucide-user',
		},
		{
			label: 'Password',
			icon: 'i-lucide-lock',
		},
	];
</script>

<template>
	<UTabs
		:items="items"
		class="w-full"
	>
		<template #content="{ item }">
			<p>This is the {{ item.label }} tab.</p>
		</template>
	</UTabs>
</template>
```

### With bottom tab bar

Use the `ui` prop to transform the Tabs into a mobile-style bottom tab bar with icons and small labels, similar to YouTube or Instagram.

```vue [TabsBottomTabBarExample.vue]
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items: TabsItem[] = [
		{
			label: 'Home',
			icon: 'i-lucide-house',
		},
		{
			label: 'Activity',
			icon: 'i-lucide-activity',
		},
		{
			label: 'Settings',
			icon: 'i-lucide-settings',
		},
		{
			label: 'Profile',
			icon: 'i-lucide-user',
		},
	];
</script>

<template>
	<UTabs
		:items="items"
		:content="false"
		:ui="{
			list: 'justify-around w-full',
			trigger: 'grow flex-col gap-1 py-1',
			label: 'text-[10px]/3',
		}"
		class="w-full"
	/>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`

```vue [TabsCustomSlotExample.vue]
<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui';

	const items = [
		{
			label: 'Account',
			description:
				"Make changes to your account here. Click save when you're done.",
			icon: 'i-lucide-user',
			slot: 'account' as const,
		},
		{
			label: 'Password',
			description:
				"Change your password here. After saving, you'll be logged out.",
			icon: 'i-lucide-lock',
			slot: 'password' as const,
		},
	] satisfies TabsItem[];

	const state = reactive({
		name: 'Benjamin Canac',
		username: 'benjamincanac',
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
</script>

<template>
	<UTabs
		:items="items"
		variant="link"
		:ui="{ trigger: 'grow' }"
		class="gap-4 w-full"
	>
		<template #account="{ item }">
			<p class="text-muted mb-4">
				{{ item.description }}
			</p>

			<UForm
				:state="state"
				class="flex flex-col gap-4"
			>
				<UFormField
					label="Name"
					name="name"
				>
					<UInput
						v-model="state.name"
						class="w-full"
					/>
				</UFormField>
				<UFormField
					label="Username"
					name="username"
				>
					<UInput
						v-model="state.username"
						class="w-full"
					/>
				</UFormField>

				<UButton
					label="Save changes"
					type="submit"
					variant="soft"
					class="self-end"
				/>
			</UForm>
		</template>

		<template #password="{ item }">
			<p class="text-muted mb-4">
				{{ item.description }}
			</p>

			<UForm
				:state="state"
				class="flex flex-col gap-4"
			>
				<UFormField
					label="Current Password"
					name="current"
					required
				>
					<UInput
						v-model="state.currentPassword"
						type="password"
						required
						class="w-full"
					/>
				</UFormField>
				<UFormField
					label="New Password"
					name="new"
					required
				>
					<UInput
						v-model="state.newPassword"
						type="password"
						required
						class="w-full"
					/>
				</UFormField>
				<UFormField
					label="Confirm Password"
					name="confirm"
					required
				>
					<UInput
						v-model="state.confirmPassword"
						type="password"
						required
						class="w-full"
					/>
				</UFormField>

				<UButton
					label="Change password"
					type="submit"
					variant="soft"
					class="self-end"
				/>
			</UForm>
		</template>
	</UTabs>
</template>
```

## API

### Props

```ts
/**
 * Props for the Tabs component
 */
interface TabsProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	items?: T[] | undefined;
	/**
	 * @default 'primary'
	 */
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'error'
		| 'neutral'
		| undefined;
	/**
	 * @default 'pill'
	 */
	variant?: 'pill' | 'link' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'sm' | 'xs' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * The orientation of the tabs.
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical' | undefined;
	/**
	 * The content of the tabs, can be disabled to prevent rendering the content.
	 * @default true
	 */
	content?: boolean | undefined;
	/**
	 * The key used to get the value from the item.
	 * @default 'value'
	 */
	valueKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	/**
	 * The key used to get the label from the item.
	 * @default 'label'
	 */
	labelKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	ui?:
		| {
				root?: SlotClass;
				list?: SlotClass;
				indicator?: SlotClass;
				trigger?: SlotClass;
				leadingIcon?: SlotClass;
				leadingAvatar?: SlotClass;
				leadingAvatarSize?: SlotClass;
				label?: SlotClass;
				trailingBadge?: SlotClass;
				trailingBadgeSize?: SlotClass;
				content?: SlotClass;
		  }
		| undefined;
	/**
	 * The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs
	 * @default '0'
	 */
	defaultValue?: string | number | undefined;
	/**
	 * The controlled value of the tab to activate. Can be bind as `v-model`.
	 */
	modelValue?: string | number | undefined;
	/**
	 * Whether a tab is activated automatically (on focus) or manually (on click).
	 * @default automatic
	 */
	activationMode?: 'automatic' | 'manual' | undefined;
	/**
	 * When `true`, the element will be unmounted on closed state.
	 * @default true
	 */
	unmountOnHide?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Tabs component
 */
interface TabsSlots {
  leading(): any;
  default(): any;
  trailing(): any;
  content(): any;
  list-leading(): any;
  list-trailing(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Tabs component
 */
interface TabsEmits {
  update:modelValue: (payload: [payload: string | number]) => void;
}
```

### Expose

When accessing the component via a template ref, you can use the following:

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          triggersRef
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Ref
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          ComponentPublicInstance
        </span>
        
        <span class="sTEyZ">
          []
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
    </td>
  </tr>
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		tabs: {
			slots: {
				root: 'flex items-center gap-2',
				list: 'relative flex p-1 group',
				indicator:
					'absolute transition-[translate,width] duration-200 ease-out motion-reduce:transition-none',
				trigger: [
					'group relative inline-flex items-center min-w-0 data-[state=inactive]:text-muted hover:data-[state=inactive]:not-disabled:text-default font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-75',
					'transition-colors',
				],
				leadingIcon: 'shrink-0',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				label: 'truncate',
				trailingBadge: 'shrink-0',
				trailingBadgeSize: 'sm',
				content: 'w-full rounded-md focus-visible:outline-3',
			},
			variants: {
				color: {
					primary: {
						content: 'outline-primary/25',
					},
					secondary: {
						content: 'outline-secondary/25',
					},
					success: {
						content: 'outline-success/25',
					},
					info: {
						content: 'outline-info/25',
					},
					warning: {
						content: 'outline-warning/25',
					},
					error: {
						content: 'outline-error/25',
					},
					neutral: {
						content: 'outline-inverted/25',
					},
				},
				variant: {
					pill: {
						list: 'bg-elevated rounded-lg',
						trigger: [
							'grow',
							"in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:content-[''] in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:absolute in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:inset-0 in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:rounded-md in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:shadow-xs in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:-z-10 in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:isolate",
						],
						indicator: 'rounded-md shadow-xs',
					},
					link: {
						list: 'border-default',
						indicator: 'rounded-full',
						trigger:
							"in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:content-[''] in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:absolute in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:rounded-full",
					},
				},
				orientation: {
					horizontal: {
						root: 'flex-col',
						list: 'w-full',
						indicator:
							'left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)',
						trigger: 'justify-center',
					},
					vertical: {
						list: 'flex-col',
						indicator:
							'top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)',
					},
				},
				size: {
					xs: {
						trigger: 'px-2 py-1 text-xs gap-1',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
					},
					sm: {
						trigger: 'px-2.5 py-1.5 text-xs gap-1.5',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
					},
					md: {
						trigger: 'px-3 py-1.5 text-sm gap-1.5',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
					},
					lg: {
						trigger: 'px-3 py-2 text-sm gap-2',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
					},
					xl: {
						trigger: 'px-3 py-2 text-base gap-2',
						leadingIcon: 'size-6',
						leadingAvatarSize: 'xs',
					},
				},
			},
			compoundVariants: [
				{
					orientation: 'horizontal',
					variant: 'pill',
					class: {
						indicator: 'inset-y-1',
					},
				},
				{
					orientation: 'horizontal',
					variant: 'link',
					class: {
						list: 'border-b -mb-px',
						indicator: '-bottom-px h-px',
						trigger:
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:inset-x-0 in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:-bottom-[calc(var(--spacing)+1px)] in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:h-px',
					},
				},
				{
					orientation: 'vertical',
					variant: 'pill',
					class: {
						indicator: 'inset-x-1',
						list: 'items-center',
						trigger: 'w-full justify-center',
					},
				},
				{
					orientation: 'vertical',
					variant: 'link',
					class: {
						list: 'border-s -ms-px',
						indicator: '-start-px w-px',
						trigger:
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:inset-y-0 in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:-start-[calc(var(--spacing)+1px)] in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:w-px',
					},
				},
				{
					color: 'primary',
					variant: 'pill',
					class: {
						indicator: 'bg-primary',
						trigger: [
							'data-[state=active]:text-inverted outline-primary/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-primary',
						],
					},
				},
				{
					color: 'secondary',
					variant: 'pill',
					class: {
						indicator: 'bg-secondary',
						trigger: [
							'data-[state=active]:text-inverted outline-secondary/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-secondary',
						],
					},
				},
				{
					color: 'success',
					variant: 'pill',
					class: {
						indicator: 'bg-success',
						trigger: [
							'data-[state=active]:text-inverted outline-success/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-success',
						],
					},
				},
				{
					color: 'info',
					variant: 'pill',
					class: {
						indicator: 'bg-info',
						trigger: [
							'data-[state=active]:text-inverted outline-info/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-info',
						],
					},
				},
				{
					color: 'warning',
					variant: 'pill',
					class: {
						indicator: 'bg-warning',
						trigger: [
							'data-[state=active]:text-inverted outline-warning/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-warning',
						],
					},
				},
				{
					color: 'error',
					variant: 'pill',
					class: {
						indicator: 'bg-error',
						trigger: [
							'data-[state=active]:text-inverted outline-error/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-error',
						],
					},
				},
				{
					color: 'neutral',
					variant: 'pill',
					class: {
						indicator: 'bg-inverted',
						trigger: [
							'data-[state=active]:text-inverted outline-inverted/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-inverted',
						],
					},
				},
				{
					color: 'primary',
					variant: 'link',
					class: {
						indicator: 'bg-primary',
						trigger: [
							'data-[state=active]:text-primary outline-primary/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-primary',
						],
					},
				},
				{
					color: 'secondary',
					variant: 'link',
					class: {
						indicator: 'bg-secondary',
						trigger: [
							'data-[state=active]:text-secondary outline-secondary/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-secondary',
						],
					},
				},
				{
					color: 'success',
					variant: 'link',
					class: {
						indicator: 'bg-success',
						trigger: [
							'data-[state=active]:text-success outline-success/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-success',
						],
					},
				},
				{
					color: 'info',
					variant: 'link',
					class: {
						indicator: 'bg-info',
						trigger: [
							'data-[state=active]:text-info outline-info/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-info',
						],
					},
				},
				{
					color: 'warning',
					variant: 'link',
					class: {
						indicator: 'bg-warning',
						trigger: [
							'data-[state=active]:text-warning outline-warning/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-warning',
						],
					},
				},
				{
					color: 'error',
					variant: 'link',
					class: {
						indicator: 'bg-error',
						trigger: [
							'data-[state=active]:text-error outline-error/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-error',
						],
					},
				},
				{
					color: 'neutral',
					variant: 'link',
					class: {
						indicator: 'bg-inverted',
						trigger: [
							'data-[state=active]:text-highlighted outline-inverted/25 focus-visible:outline-3',
							'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-inverted',
						],
					},
				},
			],
			defaultVariants: {
				color: 'primary',
				variant: 'pill',
				size: 'md',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Tabs.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/tabs.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

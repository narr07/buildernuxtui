Element
Alert
Avatar
AvatarGroup
Badge
Banner
Button
Calendar
Card
Chip
Collapsible
FieldGroup
Icon
Kbd
Progress
ProgressGroup
New
Separator
Skeleton

---

title: "Alert"
description: "A callout to draw the user's attention."
canonical_url: "https://ui.nuxt.com/docs/components/alert"

---

# Alert

> A callout to draw the user's attention.

## Usage

### Title

Use the `title` prop to set the title of the Alert.

```vue
<template>
	<UAlert title="Heads up!" />
</template>
```

### Description

Use the `description` prop to set the description of the Alert.

```vue
<template>
	<UAlert
		title="Heads up!"
		description="You can change the primary color in your app config."
	/>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon).

```vue
<template>
	<UAlert
		title="Heads up!"
		description="You can change the primary color in your app config."
		icon="i-lucide-terminal"
	/>
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar).

```vue
<template>
	<UAlert
		title="Heads up!"
		description="You can change the primary color in your app config."
		:avatar="{
			src: 'https://github.com/nuxt.png',
		}"
	/>
</template>
```

### Color

Use the `color` prop to change the color of the Alert.

```vue
<template>
	<UAlert
		color="neutral"
		title="Heads up!"
		description="You can change the primary color in your app config."
		icon="i-lucide-terminal"
	/>
</template>
```

### Variant

Use the `variant` prop to change the variant of the Alert.

```vue
<template>
	<UAlert
		color="neutral"
		variant="subtle"
		title="Heads up!"
		description="You can change the primary color in your app config."
		icon="i-lucide-terminal"
	/>
</template>
```

### Close

Use the `close` prop to display a [Button](/docs/components/button) to dismiss the Alert.

> [!TIP]
>
> An `update:open` event will be emitted when the close button is clicked.

```vue
<template>
	<UAlert
		title="Heads up!"
		description="You can change the primary color in your app config."
		color="neutral"
		variant="outline"
		close
	/>
</template>
```

You can pass any property from the [Button](/docs/components/button) component to customize it.

```vue
<template>
	<UAlert
		title="Heads up!"
		description="You can change the primary color in your app config."
		color="neutral"
		variant="outline"
		:close="{
			color: 'primary',
			variant: 'outline',
			class: 'rounded-full',
		}"
	/>
</template>
```

### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/docs/components/icon). Defaults to `i-lucide-x`.

```vue
<template>
	<UAlert
		title="Heads up!"
		description="You can change the primary color in your app config."
		color="neutral"
		variant="outline"
		close
		close-icon="i-lucide-arrow-right"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.close` key.

### Actions

Use the `actions` prop to add some [Button](/docs/components/button) actions to the Alert.

```vue
<template>
	<UAlert
		title="Heads up!"
		description="You can change the primary color in your app config."
		color="neutral"
		variant="outline"
		:actions="[
			{
				label: 'Action 1',
			},
			{
				label: 'Action 2',
				color: 'neutral',
				variant: 'subtle',
			},
		]"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Alert.

```vue
<template>
	<UAlert
		title="Heads up!"
		description="You can change the primary color in your app config."
		color="neutral"
		variant="outline"
		orientation="horizontal"
		:actions="[
			{
				label: 'Action 1',
			},
			{
				label: 'Action 2',
				color: 'neutral',
				variant: 'subtle',
			},
		]"
	/>
</template>
```

## Examples

### `class` prop

Use the `class` prop to override the base styles of the Alert.

```vue
<template>
	<UAlert
		title="Heads up!"
		description="You can change the primary color in your app config."
		class="rounded-none"
	/>
</template>
```

### `ui` prop

Use the `ui` prop to override the slots styles of the Alert.

```vue
<template>
	<UAlert
		title="Heads up!"
		description="You can change the primary color in your app config."
		icon="i-lucide-rocket"
		:ui="{
			icon: 'size-11',
		}"
	/>
</template>
```

## API

### Props

```ts
/**
 * Props for the Alert component
 */
interface AlertProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	title?: string | undefined;
	description?: string | undefined;
	icon?: any;
	avatar?: AvatarProps | undefined;
	/**
	 * @default 'primary'
	 */
	color?:
		| 'error'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'neutral'
		| undefined;
	/**
	 * @default 'solid'
	 */
	variant?: 'solid' | 'outline' | 'soft' | 'subtle' | undefined;
	/**
	 * The orientation between the content and the actions.
	 * @default 'vertical'
	 */
	orientation?: 'vertical' | 'horizontal' | undefined;
	/**
	 * Display a list of actions:
	 * - under the title and description when orientation is `vertical`
	 * - next to the close button when orientation is `horizontal`
	 * `{ size: 'xs' }`{lang="ts-type"}
	 */
	actions?: ButtonProps[] | undefined;
	/**
	 * Display a close button to dismiss the alert.
	 * `{ size: 'md', color: 'neutral', variant: 'link' }`{lang="ts-type"}
	 * @default false
	 */
	close?: boolean | Omit<ButtonProps, LinkPropsKeys> | undefined;
	/**
	 * The icon displayed in the close button.
	 * @default appConfig.ui.icons.close
	 */
	closeIcon?: any;
	ui?:
		| {
				root?: SlotClass;
				wrapper?: SlotClass;
				title?: SlotClass;
				description?: SlotClass;
				icon?: SlotClass;
				avatar?: SlotClass;
				avatarSize?: SlotClass;
				actions?: SlotClass;
				close?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the Alert component
 */
interface AlertSlots {
	leading(): any;
	title(): any;
	description(): any;
	actions(): any;
	close(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Alert component
 */
interface AlertEmits {
  update:open: (payload: [value: boolean]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		alert: {
			slots: {
				root: 'relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5',
				wrapper: 'min-w-0 flex-1 flex flex-col',
				title: 'text-sm font-medium',
				description: 'text-sm opacity-90',
				icon: 'shrink-0 size-5',
				avatar: 'shrink-0',
				avatarSize: '2xl',
				actions: 'flex flex-wrap gap-1.5 shrink-0',
				close: 'p-0',
			},
			variants: {
				color: {
					primary: '',
					secondary: '',
					success: '',
					info: '',
					warning: '',
					error: '',
					neutral: '',
				},
				variant: {
					solid: '',
					outline: '',
					soft: '',
					subtle: '',
				},
				orientation: {
					horizontal: {
						root: 'items-center',
						actions: 'items-center',
					},
					vertical: {
						root: 'items-start',
						actions: 'items-start mt-2.5',
					},
				},
				title: {
					true: {
						description: 'mt-1',
					},
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: 'solid',
					class: {
						root: 'bg-primary text-inverted',
					},
				},
				{
					color: 'secondary',
					variant: 'solid',
					class: {
						root: 'bg-secondary text-inverted',
					},
				},
				{
					color: 'success',
					variant: 'solid',
					class: {
						root: 'bg-success text-inverted',
					},
				},
				{
					color: 'info',
					variant: 'solid',
					class: {
						root: 'bg-info text-inverted',
					},
				},
				{
					color: 'warning',
					variant: 'solid',
					class: {
						root: 'bg-warning text-inverted',
					},
				},
				{
					color: 'error',
					variant: 'solid',
					class: {
						root: 'bg-error text-inverted',
					},
				},
				{
					color: 'primary',
					variant: 'outline',
					class: {
						root: 'text-primary ring ring-inset ring-primary/25',
					},
				},
				{
					color: 'secondary',
					variant: 'outline',
					class: {
						root: 'text-secondary ring ring-inset ring-secondary/25',
					},
				},
				{
					color: 'success',
					variant: 'outline',
					class: {
						root: 'text-success ring ring-inset ring-success/25',
					},
				},
				{
					color: 'info',
					variant: 'outline',
					class: {
						root: 'text-info ring ring-inset ring-info/25',
					},
				},
				{
					color: 'warning',
					variant: 'outline',
					class: {
						root: 'text-warning ring ring-inset ring-warning/25',
					},
				},
				{
					color: 'error',
					variant: 'outline',
					class: {
						root: 'text-error ring ring-inset ring-error/25',
					},
				},
				{
					color: 'primary',
					variant: 'soft',
					class: {
						root: 'bg-primary/10 text-primary',
					},
				},
				{
					color: 'secondary',
					variant: 'soft',
					class: {
						root: 'bg-secondary/10 text-secondary',
					},
				},
				{
					color: 'success',
					variant: 'soft',
					class: {
						root: 'bg-success/10 text-success',
					},
				},
				{
					color: 'info',
					variant: 'soft',
					class: {
						root: 'bg-info/10 text-info',
					},
				},
				{
					color: 'warning',
					variant: 'soft',
					class: {
						root: 'bg-warning/10 text-warning',
					},
				},
				{
					color: 'error',
					variant: 'soft',
					class: {
						root: 'bg-error/10 text-error',
					},
				},
				{
					color: 'primary',
					variant: 'subtle',
					class: {
						root: 'bg-primary/10 text-primary ring ring-inset ring-primary/25',
					},
				},
				{
					color: 'secondary',
					variant: 'subtle',
					class: {
						root: 'bg-secondary/10 text-secondary ring ring-inset ring-secondary/25',
					},
				},
				{
					color: 'success',
					variant: 'subtle',
					class: {
						root: 'bg-success/10 text-success ring ring-inset ring-success/25',
					},
				},
				{
					color: 'info',
					variant: 'subtle',
					class: {
						root: 'bg-info/10 text-info ring ring-inset ring-info/25',
					},
				},
				{
					color: 'warning',
					variant: 'subtle',
					class: {
						root: 'bg-warning/10 text-warning ring ring-inset ring-warning/25',
					},
				},
				{
					color: 'error',
					variant: 'subtle',
					class: {
						root: 'bg-error/10 text-error ring ring-inset ring-error/25',
					},
				},
				{
					color: 'neutral',
					variant: 'solid',
					class: {
						root: 'text-inverted bg-inverted',
					},
				},
				{
					color: 'neutral',
					variant: 'outline',
					class: {
						root: 'text-highlighted bg-default ring ring-inset ring-default',
					},
				},
				{
					color: 'neutral',
					variant: 'soft',
					class: {
						root: 'text-highlighted bg-elevated/50',
					},
				},
				{
					color: 'neutral',
					variant: 'subtle',
					class: {
						root: 'text-highlighted bg-elevated/50 ring ring-inset ring-accented',
					},
				},
			],
			defaultVariants: {
				color: 'primary',
				variant: 'solid',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Alert.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/alert.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Avatar"
description: "An img element with fallback and Nuxt Image support."
canonical_url: "https://ui.nuxt.com/docs/components/avatar"

---

# Avatar

> An img element with fallback and Nuxt Image support.

## Usage

The Avatar uses the `<NuxtImg>` component when [`@nuxt/image`](https://github.com/nuxt/image) is installed, falling back to `img` otherwise.

```vue
<template>
	<UAvatar src="https://github.com/benjamincanac.png" />
</template>
```

> [!NOTE]
>
> You can pass any property from the HTML `<img>` element such as `alt`, `loading`, etc.

> [!TIP]
>
> To opt-out of `@nuxt/image`, use the `as` prop: `:as="{ img: 'img' }"`.

### Src

Use the `src` prop to set the image URL.

```vue
<template>
	<UAvatar
		src="https://github.com/benjamincanac.png"
		loading="lazy"
	/>
</template>
```

### Size

Use the `size` prop to set the size of the Avatar.

```vue
<template>
	<UAvatar
		src="https://github.com/benjamincanac.png"
		size="xl"
		loading="lazy"
	/>
</template>
```

> [!NOTE]
>
> The `<img>` element's `width` and `height` are automatically set based on the `size` prop.

### Icon

Use the `icon` prop to display a fallback [Icon](/docs/components/icon).

```vue
<template>
	<UAvatar
		icon="i-lucide-image"
		size="md"
	/>
</template>
```

### Text

Use the `text` prop to display a fallback text.

```vue
<template>
	<UAvatar
		text="+1"
		size="md"
	/>
</template>
```

### Alt

When no icon or text is provided, the **initials** of the `alt` prop is used as fallback.

```vue
<template>
	<UAvatar
		alt="Benjamin Canac"
		size="md"
	/>
</template>
```

> [!NOTE]
>
> The `alt` prop is passed to the `img` element as the `alt` attribute.

### Color `4.8+`

Use the `color` prop to change the color of the Avatar.

```vue
<template>
	<UAvatar
		color="primary"
		alt="Benjamin Canac"
	/>
</template>
```

### Chip

Use the `chip` prop to display a chip around the Avatar.

```vue
<template>
	<UAvatar
		src="https://github.com/benjamincanac.png"
		loading="lazy"
		:chip="{
			inset: true,
		}"
	/>
</template>
```

## Examples

### With tooltip

You can use a [Tooltip](/docs/components/tooltip) component to display a tooltip when hovering the Avatar.

```vue [AvatarTooltipExample.vue]
<template>
	<UTooltip text="Benjamin Canac">
		<UAvatar
			src="https://github.com/benjamincanac.png"
			alt="Benjamin Canac"
			loading="lazy"
		/>
	</UTooltip>
</template>
```

### With mask

You can use a CSS mask to display an Avatar with a custom shape instead of a simple circle.

```vue [AvatarMaskExample.vue]
<template>
	<UAvatar
		class="rounded-none squircle"
		src="https://avatars.githubusercontent.com/u/739984?v=4"
		alt="Benjamin Canac"
		loading="lazy"
	/>
</template>

<style>
	.squircle {
		mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e");
		mask-size: contain;
		mask-position: center;
		mask-repeat: no-repeat;
	}
</style>
```

## API

### Props

```ts
/**
 * Props for the Avatar component
 */
interface AvatarProps {
	/**
	 * The element or component this component should render as.
	 * @default 'span'
	 */
	as?: any;
	src?: string | undefined;
	alt?: string | undefined;
	icon?: any;
	text?: string | undefined;
	/**
	 * @default 'md'
	 */
	size?:
		| 'md'
		| 'xs'
		| 'sm'
		| 'lg'
		| 'xl'
		| '3xs'
		| '2xs'
		| '2xl'
		| '3xl'
		| undefined;
	/**
	 * @default 'neutral'
	 */
	color?:
		| 'error'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'neutral'
		| undefined;
	chip?: boolean | ChipProps | undefined;
	ui?:
		| {
				root?: SlotClass;
				image?: SlotClass;
				fallback?: SlotClass;
				icon?: SlotClass;
		  }
		| undefined;
	loading?: 'lazy' | 'eager' | undefined;
	referrerpolicy?:
		| ''
		| 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'origin'
		| 'origin-when-cross-origin'
		| 'same-origin'
		| 'strict-origin'
		| 'strict-origin-when-cross-origin'
		| 'unsafe-url'
		| undefined;
	decoding?: 'async' | 'auto' | 'sync' | undefined;
	height?: string | number | undefined;
	sizes?: string | undefined;
	srcset?: string | undefined;
	usemap?: string | undefined;
	width?: string | number | undefined;
	crossorigin?: 'anonymous' | 'use-credentials' | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes
>
> This component also supports all native `<img>` HTML attributes.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		avatar: {
			slots: {
				root: 'inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle',
				image: 'h-full w-full rounded-[inherit] object-cover',
				fallback: 'font-medium truncate',
				icon: 'shrink-0',
			},
			variants: {
				color: {
					primary: {
						root: 'bg-primary/10',
						fallback: 'text-primary',
						icon: 'text-primary',
					},
					secondary: {
						root: 'bg-secondary/10',
						fallback: 'text-secondary',
						icon: 'text-secondary',
					},
					success: {
						root: 'bg-success/10',
						fallback: 'text-success',
						icon: 'text-success',
					},
					info: {
						root: 'bg-info/10',
						fallback: 'text-info',
						icon: 'text-info',
					},
					warning: {
						root: 'bg-warning/10',
						fallback: 'text-warning',
						icon: 'text-warning',
					},
					error: {
						root: 'bg-error/10',
						fallback: 'text-error',
						icon: 'text-error',
					},
					neutral: {
						root: 'bg-elevated',
						fallback: 'text-muted',
						icon: 'text-muted',
					},
				},
				size: {
					'3xs': {
						root: 'size-4 text-[8px]',
					},
					'2xs': {
						root: 'size-5 text-[10px]',
					},
					xs: {
						root: 'size-6 text-xs',
					},
					sm: {
						root: 'size-7 text-sm',
					},
					md: {
						root: 'size-8 text-base',
					},
					lg: {
						root: 'size-9 text-lg',
					},
					xl: {
						root: 'size-10 text-xl',
					},
					'2xl': {
						root: 'size-11 text-[22px]',
					},
					'3xl': {
						root: 'size-12 text-2xl',
					},
				},
			},
			defaultVariants: {
				size: 'md',
				color: 'neutral',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Avatar.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/avatar.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "AvatarGroup"
description: "Stack multiple avatars in a group."
canonical_url: "https://ui.nuxt.com/docs/components/avatar-group"

---

# AvatarGroup

> Stack multiple avatars in a group.

## Usage

Wrap multiple [Avatar](/docs/components/avatar) within an AvatarGroup to stack them.

```vue
<template>
	<UAvatarGroup>
		<UAvatar
			src="https://github.com/benjamincanac.png"
			alt="Benjamin Canac"
		/>
		<UAvatar
			src="https://github.com/romhml.png"
			alt="Romain Hamel"
		/>
		<UAvatar
			src="https://github.com/noook.png"
			alt="Neil Richter"
		/>
	</UAvatarGroup>
</template>
```

### Size

Use the `size` prop to change the size of all the avatars.

```vue
<template>
	<UAvatarGroup size="xl">
		<UAvatar
			src="https://github.com/benjamincanac.png"
			alt="Benjamin Canac"
			loading="lazy"
		/>
		<UAvatar
			src="https://github.com/romhml.png"
			alt="Romain Hamel"
			loading="lazy"
		/>
		<UAvatar
			src="https://github.com/noook.png"
			alt="Neil Richter"
			loading="lazy"
		/>
	</UAvatarGroup>
</template>
```

### Max

Use the `max` prop to limit the number of avatars displayed. The rest is displayed as an `+X` avatar.

```vue
<template>
	<UAvatarGroup :max="2">
		<UAvatar
			src="https://github.com/benjamincanac.png"
			alt="Benjamin Canac"
			loading="lazy"
		/>
		<UAvatar
			src="https://github.com/romhml.png"
			alt="Romain Hamel"
			loading="lazy"
		/>
		<UAvatar
			src="https://github.com/noook.png"
			alt="Neil Richter"
			loading="lazy"
		/>
	</UAvatarGroup>
</template>
```

### Color `4.8+`

Use the `color` prop to change the color of all the avatars.

```vue
<template>
	<UAvatarGroup color="primary">
		<UAvatar alt="Benjamin Canac" />
		<UAvatar alt="Romain Hamel" />
		<UAvatar alt="Neil Richter" />
	</UAvatarGroup>
</template>
```

## Examples

### With tooltip

Wrap each avatar with a [Tooltip](/docs/components/tooltip) to display a tooltip on hover.

```vue [AvatarGroupTooltipExample.vue]
<template>
	<UAvatarGroup>
		<UTooltip text="benjamincanac">
			<UAvatar
				src="https://github.com/benjamincanac.png"
				alt="Benjamin Canac"
				loading="lazy"
			/>
		</UTooltip>

		<UTooltip text="romhml">
			<UAvatar
				src="https://github.com/romhml.png"
				alt="Romain Hamel"
				loading="lazy"
			/>
		</UTooltip>

		<UTooltip text="noook">
			<UAvatar
				src="https://github.com/noook.png"
				alt="Neil Richter"
				loading="lazy"
			/>
		</UTooltip>
	</UAvatarGroup>
</template>
```

### With chip

Wrap each avatar with a [Chip](/docs/components/chip) to display a chip around the avatar.

```vue [AvatarGroupChipExample.vue]
<template>
	<UAvatarGroup>
		<UAvatar
			src="https://github.com/benjamincanac.png"
			alt="Benjamin Canac"
			loading="lazy"
			:chip="{ inset: true, color: 'success' }"
		/>

		<UAvatar
			src="https://github.com/romhml.png"
			alt="Romain Hamel"
			loading="lazy"
			:chip="{ inset: true, color: 'warning' }"
		/>

		<UAvatar
			src="https://github.com/noook.png"
			alt="Neil Richter"
			loading="lazy"
			:chip="{ inset: true, color: 'error' }"
		/>
	</UAvatarGroup>
</template>
```

### With link

Wrap each avatar with a [Link](/docs/components/link) to make them clickable.

```vue [AvatarGroupLinkExample.vue]
<template>
	<UAvatarGroup>
		<ULink
			to="https://github.com/benjamincanac"
			target="_blank"
			class="hover:ring-primary transition"
			raw
		>
			<UAvatar
				src="https://github.com/benjamincanac.png"
				alt="Benjamin Canac"
				loading="lazy"
			/>
		</ULink>

		<ULink
			to="https://github.com/romhml"
			target="_blank"
			class="hover:ring-primary transition"
			raw
		>
			<UAvatar
				src="https://github.com/romhml.png"
				alt="Romain Hamel"
				loading="lazy"
			/>
		</ULink>

		<ULink
			to="https://github.com/noook"
			target="_blank"
			class="hover:ring-primary transition"
			raw
		>
			<UAvatar
				src="https://github.com/noook.png"
				alt="Neil Richter"
				loading="lazy"
			/>
		</ULink>
	</UAvatarGroup>
</template>
```

### With mask

Wrap an avatar with a CSS mask to display it with a custom shape.

```vue [AvatarGroupMaskExample.vue]
<template>
	<UAvatarGroup :ui="{ base: 'rounded-none squircle' }">
		<UAvatar
			src="https://github.com/benjamincanac.png"
			alt="Benjamin Canac"
			loading="lazy"
			class="rounded-none squircle"
		/>

		<UAvatar
			src="https://github.com/romhml.png"
			alt="Romain Hamel"
			loading="lazy"
			class="rounded-none squircle"
		/>

		<UAvatar
			src="https://github.com/noook.png"
			alt="Neil Richter"
			loading="lazy"
			class="rounded-none squircle"
		/>
	</UAvatarGroup>
</template>

<style>
	.squircle {
		mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e");
		mask-size: contain;
		mask-position: center;
		mask-repeat: no-repeat;
	}
</style>
```

> [!WARNING]
>
> The `chip` prop does not work correctly when using a mask. Chips may be cut depending on the mask shape.

## API

### Props

```ts
/**
 * Props for the AvatarGroup component
 */
interface AvatarGroupProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * @default 'md'
	 */
	size?:
		| 'md'
		| 'xs'
		| 'sm'
		| 'lg'
		| 'xl'
		| '3xs'
		| '2xs'
		| '2xl'
		| '3xl'
		| undefined;
	/**
	 * @default 'neutral'
	 */
	color?:
		| 'error'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'neutral'
		| undefined;
	/**
	 * The maximum number of avatars to display.
	 */
	max?: string | number | undefined;
	ui?: { root?: SlotClass; base?: SlotClass } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the AvatarGroup component
 */
interface AvatarGroupSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		avatarGroup: {
			slots: {
				root: 'inline-flex flex-row-reverse justify-end',
				base: 'relative rounded-full ring-bg first:me-0',
			},
			variants: {
				size: {
					'3xs': {
						base: 'ring -me-0.5',
					},
					'2xs': {
						base: 'ring -me-0.5',
					},
					xs: {
						base: 'ring -me-0.5',
					},
					sm: {
						base: 'ring-2 -me-1.5',
					},
					md: {
						base: 'ring-2 -me-1.5',
					},
					lg: {
						base: 'ring-2 -me-1.5',
					},
					xl: {
						base: 'ring-3 -me-2',
					},
					'2xl': {
						base: 'ring-3 -me-2',
					},
					'3xl': {
						base: 'ring-3 -me-2',
					},
				},
				color: {
					primary: '',
					secondary: '',
					success: '',
					info: '',
					warning: '',
					error: '',
					neutral: '',
				},
			},
			defaultVariants: {
				size: 'md',
				color: 'neutral',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/AvatarGroup.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/avatar-group.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Badge"
description: "A short text to represent a status or a category."
canonical_url: "https://ui.nuxt.com/docs/components/badge"

---

# Badge

> A short text to represent a status or a category.

## Usage

Use the default slot to set the label of the Badge.

```vue
<template>
	<UBadge> Badge </UBadge>
</template>
```

### Label

Use the `label` prop to set the label of the Badge.

```vue
<template>
	<UBadge label="Badge" />
</template>
```

### Color

Use the `color` prop to change the color of the Badge.

```vue
<template>
	<UBadge color="neutral"> Badge </UBadge>
</template>
```

### Variant

Use the `variant` props to change the variant of the Badge.

```vue
<template>
	<UBadge
		color="neutral"
		variant="outline"
	>
		Badge
	</UBadge>
</template>
```

### Size

Use the `size` prop to change the size of the Badge.

```vue
<template>
	<UBadge size="xl"> Badge </UBadge>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the Badge.

```vue
<template>
	<UBadge
		icon="i-lucide-rocket"
		size="md"
		color="primary"
		variant="solid"
	>
		Badge
	</UBadge>
</template>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

```vue
<template>
	<UBadge
		trailing-icon="i-lucide-arrow-right"
		size="md"
	>
		Badge
	</UBadge>
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the Badge.

```vue
<template>
	<UBadge
		:avatar="{
			src: 'https://github.com/nuxt.png',
			loading: 'lazy',
		}"
		size="md"
		color="neutral"
		variant="outline"
	>
		Badge
	</UBadge>
</template>
```

## Examples

### `class` prop

Use the `class` prop to override the base styles of the Badge.

```vue
<template>
	<UBadge class="font-bold rounded-full"> Badge </UBadge>
</template>
```

## API

### Props

```ts
/**
 * Props for the Badge component
 */
interface BadgeProps {
	/**
	 * The element or component this component should render as.
	 * @default 'span'
	 */
	as?: any;
	label?: string | number | undefined;
	/**
	 * @default 'primary'
	 */
	color?:
		| 'error'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'neutral'
		| undefined;
	/**
	 * @default 'solid'
	 */
	variant?: 'solid' | 'outline' | 'soft' | 'subtle' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * Render the badge with equal padding on all sides.
	 */
	square?: boolean | undefined;
	ui?:
		| {
				base?: SlotClass;
				label?: SlotClass;
				leadingIcon?: SlotClass;
				leadingAvatar?: SlotClass;
				leadingAvatarSize?: SlotClass;
				trailingIcon?: SlotClass;
		  }
		| undefined;
	/**
	 * Display an icon based on the `leading` and `trailing` props.
	 */
	icon?: any;
	/**
	 * Display an avatar on the left side.
	 */
	avatar?: AvatarProps | undefined;
	/**
	 * When `true`, the icon will be displayed on the left side.
	 */
	leading?: boolean | undefined;
	/**
	 * Display an icon on the left side.
	 */
	leadingIcon?: any;
	/**
	 * When `true`, the icon will be displayed on the right side.
	 */
	trailing?: boolean | undefined;
	/**
	 * Display an icon on the right side.
	 */
	trailingIcon?: any;
}
```

### Slots

```ts
/**
 * Slots for the Badge component
 */
interface BadgeSlots {
	leading(): any;
	default(): any;
	trailing(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		badge: {
			slots: {
				base: 'font-medium inline-flex items-center',
				label: 'truncate',
				leadingIcon: 'shrink-0',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailingIcon: 'shrink-0',
			},
			variants: {
				fieldGroup: {
					horizontal:
						'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
					vertical:
						'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
				},
				color: {
					primary: '',
					secondary: '',
					success: '',
					info: '',
					warning: '',
					error: '',
					neutral: '',
				},
				variant: {
					solid: '',
					outline: '',
					soft: '',
					subtle: '',
				},
				size: {
					xs: {
						base: 'text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm',
						leadingIcon: 'size-3',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-3',
					},
					sm: {
						base: 'text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm',
						leadingIcon: 'size-3',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-3',
					},
					md: {
						base: 'text-xs px-2 py-1 gap-1 rounded-md',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
					},
					lg: {
						base: 'text-sm px-2 py-1 gap-1.5 rounded-md',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
					},
					xl: {
						base: 'text-base px-2.5 py-1 gap-1.5 rounded-md',
						leadingIcon: 'size-6',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-6',
					},
				},
				square: {
					true: '',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: 'solid',
					class: 'bg-primary text-inverted',
				},
				{
					color: 'secondary',
					variant: 'solid',
					class: 'bg-secondary text-inverted',
				},
				{
					color: 'success',
					variant: 'solid',
					class: 'bg-success text-inverted',
				},
				{
					color: 'info',
					variant: 'solid',
					class: 'bg-info text-inverted',
				},
				{
					color: 'warning',
					variant: 'solid',
					class: 'bg-warning text-inverted',
				},
				{
					color: 'error',
					variant: 'solid',
					class: 'bg-error text-inverted',
				},
				{
					color: 'primary',
					variant: 'outline',
					class: 'text-primary ring ring-inset ring-primary/50',
				},
				{
					color: 'secondary',
					variant: 'outline',
					class: 'text-secondary ring ring-inset ring-secondary/50',
				},
				{
					color: 'success',
					variant: 'outline',
					class: 'text-success ring ring-inset ring-success/50',
				},
				{
					color: 'info',
					variant: 'outline',
					class: 'text-info ring ring-inset ring-info/50',
				},
				{
					color: 'warning',
					variant: 'outline',
					class: 'text-warning ring ring-inset ring-warning/50',
				},
				{
					color: 'error',
					variant: 'outline',
					class: 'text-error ring ring-inset ring-error/50',
				},
				{
					color: 'primary',
					variant: 'soft',
					class: 'bg-primary/10 text-primary',
				},
				{
					color: 'secondary',
					variant: 'soft',
					class: 'bg-secondary/10 text-secondary',
				},
				{
					color: 'success',
					variant: 'soft',
					class: 'bg-success/10 text-success',
				},
				{
					color: 'info',
					variant: 'soft',
					class: 'bg-info/10 text-info',
				},
				{
					color: 'warning',
					variant: 'soft',
					class: 'bg-warning/10 text-warning',
				},
				{
					color: 'error',
					variant: 'soft',
					class: 'bg-error/10 text-error',
				},
				{
					color: 'primary',
					variant: 'subtle',
					class: 'bg-primary/10 text-primary ring ring-inset ring-primary/25',
				},
				{
					color: 'secondary',
					variant: 'subtle',
					class:
						'bg-secondary/10 text-secondary ring ring-inset ring-secondary/25',
				},
				{
					color: 'success',
					variant: 'subtle',
					class: 'bg-success/10 text-success ring ring-inset ring-success/25',
				},
				{
					color: 'info',
					variant: 'subtle',
					class: 'bg-info/10 text-info ring ring-inset ring-info/25',
				},
				{
					color: 'warning',
					variant: 'subtle',
					class: 'bg-warning/10 text-warning ring ring-inset ring-warning/25',
				},
				{
					color: 'error',
					variant: 'subtle',
					class: 'bg-error/10 text-error ring ring-inset ring-error/25',
				},
				{
					color: 'neutral',
					variant: 'solid',
					class: 'text-inverted bg-inverted',
				},
				{
					color: 'neutral',
					variant: 'outline',
					class: 'ring ring-inset ring-accented text-default bg-default',
				},
				{
					color: 'neutral',
					variant: 'soft',
					class: 'text-default bg-elevated',
				},
				{
					color: 'neutral',
					variant: 'subtle',
					class: 'ring ring-inset ring-accented text-default bg-elevated',
				},
				{
					size: 'xs',
					square: true,
					class: 'p-0.5',
				},
				{
					size: 'sm',
					square: true,
					class: 'p-1',
				},
				{
					size: 'md',
					square: true,
					class: 'p-1',
				},
				{
					size: 'lg',
					square: true,
					class: 'p-1',
				},
				{
					size: 'xl',
					square: true,
					class: 'p-1',
				},
			],
			defaultVariants: {
				color: 'primary',
				variant: 'solid',
				size: 'md',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Badge.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/badge.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Badge"
description: "A short text to represent a status or a category."
canonical_url: "https://ui.nuxt.com/docs/components/badge"

---

# Badge

> A short text to represent a status or a category.

## Usage

Use the default slot to set the label of the Badge.

```vue
<template>
	<UBadge> Badge </UBadge>
</template>
```

### Label

Use the `label` prop to set the label of the Badge.

```vue
<template>
	<UBadge label="Badge" />
</template>
```

### Color

Use the `color` prop to change the color of the Badge.

```vue
<template>
	<UBadge color="neutral"> Badge </UBadge>
</template>
```

### Variant

Use the `variant` props to change the variant of the Badge.

```vue
<template>
	<UBadge
		color="neutral"
		variant="outline"
	>
		Badge
	</UBadge>
</template>
```

### Size

Use the `size` prop to change the size of the Badge.

```vue
<template>
	<UBadge size="xl"> Badge </UBadge>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the Badge.

```vue
<template>
	<UBadge
		icon="i-lucide-rocket"
		size="md"
		color="primary"
		variant="solid"
	>
		Badge
	</UBadge>
</template>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

```vue
<template>
	<UBadge
		trailing-icon="i-lucide-arrow-right"
		size="md"
	>
		Badge
	</UBadge>
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the Badge.

```vue
<template>
	<UBadge
		:avatar="{
			src: 'https://github.com/nuxt.png',
			loading: 'lazy',
		}"
		size="md"
		color="neutral"
		variant="outline"
	>
		Badge
	</UBadge>
</template>
```

## Examples

### `class` prop

Use the `class` prop to override the base styles of the Badge.

```vue
<template>
	<UBadge class="font-bold rounded-full"> Badge </UBadge>
</template>
```

## API

### Props

```ts
/**
 * Props for the Badge component
 */
interface BadgeProps {
	/**
	 * The element or component this component should render as.
	 * @default 'span'
	 */
	as?: any;
	label?: string | number | undefined;
	/**
	 * @default 'primary'
	 */
	color?:
		| 'error'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| 'neutral'
		| undefined;
	/**
	 * @default 'solid'
	 */
	variant?: 'solid' | 'outline' | 'soft' | 'subtle' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * Render the badge with equal padding on all sides.
	 */
	square?: boolean | undefined;
	ui?:
		| {
				base?: SlotClass;
				label?: SlotClass;
				leadingIcon?: SlotClass;
				leadingAvatar?: SlotClass;
				leadingAvatarSize?: SlotClass;
				trailingIcon?: SlotClass;
		  }
		| undefined;
	/**
	 * Display an icon based on the `leading` and `trailing` props.
	 */
	icon?: any;
	/**
	 * Display an avatar on the left side.
	 */
	avatar?: AvatarProps | undefined;
	/**
	 * When `true`, the icon will be displayed on the left side.
	 */
	leading?: boolean | undefined;
	/**
	 * Display an icon on the left side.
	 */
	leadingIcon?: any;
	/**
	 * When `true`, the icon will be displayed on the right side.
	 */
	trailing?: boolean | undefined;
	/**
	 * Display an icon on the right side.
	 */
	trailingIcon?: any;
}
```

### Slots

```ts
/**
 * Slots for the Badge component
 */
interface BadgeSlots {
	leading(): any;
	default(): any;
	trailing(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		badge: {
			slots: {
				base: 'font-medium inline-flex items-center',
				label: 'truncate',
				leadingIcon: 'shrink-0',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailingIcon: 'shrink-0',
			},
			variants: {
				fieldGroup: {
					horizontal:
						'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
					vertical:
						'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
				},
				color: {
					primary: '',
					secondary: '',
					success: '',
					info: '',
					warning: '',
					error: '',
					neutral: '',
				},
				variant: {
					solid: '',
					outline: '',
					soft: '',
					subtle: '',
				},
				size: {
					xs: {
						base: 'text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm',
						leadingIcon: 'size-3',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-3',
					},
					sm: {
						base: 'text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm',
						leadingIcon: 'size-3',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-3',
					},
					md: {
						base: 'text-xs px-2 py-1 gap-1 rounded-md',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
					},
					lg: {
						base: 'text-sm px-2 py-1 gap-1.5 rounded-md',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
					},
					xl: {
						base: 'text-base px-2.5 py-1 gap-1.5 rounded-md',
						leadingIcon: 'size-6',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-6',
					},
				},
				square: {
					true: '',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: 'solid',
					class: 'bg-primary text-inverted',
				},
				{
					color: 'secondary',
					variant: 'solid',
					class: 'bg-secondary text-inverted',
				},
				{
					color: 'success',
					variant: 'solid',
					class: 'bg-success text-inverted',
				},
				{
					color: 'info',
					variant: 'solid',
					class: 'bg-info text-inverted',
				},
				{
					color: 'warning',
					variant: 'solid',
					class: 'bg-warning text-inverted',
				},
				{
					color: 'error',
					variant: 'solid',
					class: 'bg-error text-inverted',
				},
				{
					color: 'primary',
					variant: 'outline',
					class: 'text-primary ring ring-inset ring-primary/50',
				},
				{
					color: 'secondary',
					variant: 'outline',
					class: 'text-secondary ring ring-inset ring-secondary/50',
				},
				{
					color: 'success',
					variant: 'outline',
					class: 'text-success ring ring-inset ring-success/50',
				},
				{
					color: 'info',
					variant: 'outline',
					class: 'text-info ring ring-inset ring-info/50',
				},
				{
					color: 'warning',
					variant: 'outline',
					class: 'text-warning ring ring-inset ring-warning/50',
				},
				{
					color: 'error',
					variant: 'outline',
					class: 'text-error ring ring-inset ring-error/50',
				},
				{
					color: 'primary',
					variant: 'soft',
					class: 'bg-primary/10 text-primary',
				},
				{
					color: 'secondary',
					variant: 'soft',
					class: 'bg-secondary/10 text-secondary',
				},
				{
					color: 'success',
					variant: 'soft',
					class: 'bg-success/10 text-success',
				},
				{
					color: 'info',
					variant: 'soft',
					class: 'bg-info/10 text-info',
				},
				{
					color: 'warning',
					variant: 'soft',
					class: 'bg-warning/10 text-warning',
				},
				{
					color: 'error',
					variant: 'soft',
					class: 'bg-error/10 text-error',
				},
				{
					color: 'primary',
					variant: 'subtle',
					class: 'bg-primary/10 text-primary ring ring-inset ring-primary/25',
				},
				{
					color: 'secondary',
					variant: 'subtle',
					class:
						'bg-secondary/10 text-secondary ring ring-inset ring-secondary/25',
				},
				{
					color: 'success',
					variant: 'subtle',
					class: 'bg-success/10 text-success ring ring-inset ring-success/25',
				},
				{
					color: 'info',
					variant: 'subtle',
					class: 'bg-info/10 text-info ring ring-inset ring-info/25',
				},
				{
					color: 'warning',
					variant: 'subtle',
					class: 'bg-warning/10 text-warning ring ring-inset ring-warning/25',
				},
				{
					color: 'error',
					variant: 'subtle',
					class: 'bg-error/10 text-error ring ring-inset ring-error/25',
				},
				{
					color: 'neutral',
					variant: 'solid',
					class: 'text-inverted bg-inverted',
				},
				{
					color: 'neutral',
					variant: 'outline',
					class: 'ring ring-inset ring-accented text-default bg-default',
				},
				{
					color: 'neutral',
					variant: 'soft',
					class: 'text-default bg-elevated',
				},
				{
					color: 'neutral',
					variant: 'subtle',
					class: 'ring ring-inset ring-accented text-default bg-elevated',
				},
				{
					size: 'xs',
					square: true,
					class: 'p-0.5',
				},
				{
					size: 'sm',
					square: true,
					class: 'p-1',
				},
				{
					size: 'md',
					square: true,
					class: 'p-1',
				},
				{
					size: 'lg',
					square: true,
					class: 'p-1',
				},
				{
					size: 'xl',
					square: true,
					class: 'p-1',
				},
			],
			defaultVariants: {
				color: 'primary',
				variant: 'solid',
				size: 'md',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Badge.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/badge.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Button"
description: "A button element that can act as a link or trigger an action."
canonical_url: "https://ui.nuxt.com/docs/components/button"

---

# Button

> A button element that can act as a link or trigger an action.

## Usage

Use the default slot to set the label of the Button.

```vue
<template>
	<UButton> Button </UButton>
</template>
```

### Label

Use the `label` prop to set the label of the Button.

```vue
<template>
	<UButton label="Button" />
</template>
```

### Color

Use the `color` prop to change the color of the Button.

```vue
<template>
	<UButton color="neutral"> Button </UButton>
</template>
```

### Variant

Use the `variant` prop to change the variant of the Button.

```vue
<template>
	<UButton
		color="neutral"
		variant="outline"
	>
		Button
	</UButton>
</template>
```

### Size

Use the `size` prop to change the size of the Button.

```vue
<template>
	<UButton size="xl"> Button </UButton>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the Button.

```vue
<template>
	<UButton
		icon="i-lucide-rocket"
		size="md"
		color="primary"
		variant="solid"
	>
		Button
	</UButton>
</template>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

```vue
<template>
	<UButton
		trailing-icon="i-lucide-arrow-right"
		size="md"
	>
		Button
	</UButton>
</template>
```

The `label` as prop or slot is optional so you can use the Button as an icon-only button.

```vue
<template>
	<UButton
		icon="i-lucide-search"
		size="md"
		color="primary"
		variant="solid"
	/>
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the Button.

```vue
<template>
	<UButton
		:avatar="{
			src: 'https://github.com/nuxt.png',
			loading: 'lazy',
		}"
		size="md"
		color="neutral"
		variant="outline"
	>
		Button
	</UButton>
</template>
```

The `label` as prop or slot is optional so you can use the Button as an avatar-only button.

```vue
<template>
	<UButton
		:avatar="{
			src: 'https://github.com/nuxt.png',
			loading: 'lazy',
		}"
		size="md"
		color="neutral"
		variant="outline"
	/>
</template>
```

### Link

You can pass any property from the [Link](/docs/components/link#props) component such as `to`, `target`, etc.

```vue
<template>
	<UButton
		to="https://github.com/nuxt/ui"
		target="_blank"
	>
		Button
	</UButton>
</template>
```

When the Button is a link or when using the `active` prop, you can use the `active-color` and `active-variant` props to customize the active state.

```vue
<template>
	<UButton
		active
		color="neutral"
		variant="outline"
		active-color="primary"
		active-variant="solid"
	>
		Button
	</UButton>
</template>
```

You can also use the `active-class` and `inactive-class` props to customize the active state.

```vue
<template>
	<UButton
		active
		active-class="font-bold"
		inactive-class="font-light"
	>
		Button
	</UButton>
</template>
```

> [!TIP]
>
> You can configure these styles globally in your `app.config.ts` file under the `ui.button.variants.active` key.
>
> ```ts
> export default defineAppConfig({
> 	ui: {
> 		button: {
> 			variants: {
> 				active: {
> 					true: {
> 						base: 'font-bold',
> 					},
> 				},
> 			},
> 		},
> 	},
> });
> ```

### Loading

Use the `loading` prop to show a loading icon and disable the Button.

```vue
<template>
	<UButton
		loading
		:trailing="false"
	>
		Button
	</UButton>
</template>
```

Use the `loading-auto` prop to show the loading icon automatically while the `@click` promise is pending.

```vue [ButtonLoadingAutoExample.vue]
<script setup lang="ts">
	async function onClick() {
		return new Promise<void>((res) => setTimeout(res, 1000));
	}
</script>

<template>
	<UButton
		loading-auto
		@click="onClick"
	>
		Button
	</UButton>
</template>
```

This also works with the [Form](/docs/components/form) component.

```vue [ButtonLoadingAutoFormExample.vue]
<script setup lang="ts">
	const state = reactive({ fullName: '' });

	async function onSubmit() {
		return new Promise<void>((res) => setTimeout(res, 1000));
	}

	async function validate(data: Partial<typeof state>) {
		if (!data.fullName?.length)
			return [{ name: 'fullName', message: 'Required' }];
		return [];
	}
</script>

<template>
	<UForm
		:state="state"
		:validate="validate"
		@submit="onSubmit"
	>
		<UFormField
			name="fullName"
			label="Full name"
		>
			<UInput v-model="state.fullName" />
		</UFormField>
		<UButton
			type="submit"
			class="mt-2"
			loading-auto
		>
			Submit
		</UButton>
	</UForm>
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<template>
	<UButton
		loading
		loading-icon="i-lucide-loader"
	>
		Button
	</UButton>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.

### Disabled

Use the `disabled` prop to disable the Button.

```vue
<template>
	<UButton disabled> Button </UButton>
</template>
```

## Examples

### `class` prop

Use the `class` prop to override the base styles of the Button.

```vue
<template>
	<UButton class="font-bold rounded-full"> Button </UButton>
</template>
```

### `ui` prop

Use the `ui` prop to override the slots styles of the Button.

```vue
<template>
	<UButton
		icon="i-lucide-rocket"
		color="neutral"
		variant="outline"
		:ui="{
			leadingIcon: 'text-primary',
		}"
	>
		Button
	</UButton>
</template>
```

## API

### Props

```ts
/**
 * Props for the Button component
 */
interface ButtonProps {
  label?: string | undefined;
  /**
   * @default 'primary'
   */
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  activeColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  /**
   * @default 'solid'
   */
  variant?: "solid" | "outline" | "soft" | "subtle" | "ghost" | "link" | undefined;
  activeVariant?: "solid" | "outline" | "soft" | "subtle" | "ghost" | "link" | undefined;
  /**
   * @default 'md'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  /**
   * Render the button with equal padding on all sides.
   */
  square?: boolean | undefined;
  /**
   * Render the button full width.
   */
  block?: boolean | undefined;
  /**
   * Set loading state automatically based on the `@click` promise state
   */
  loadingAuto?: boolean | undefined;
  onClick?: (event: MouseEvent): void | ((event: MouseEvent) => void)[] | undefined;
  ui?: { base?: SlotClass; label?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailingIcon?: SlotClass; } | undefined;
  /**
   * Display an icon based on the `leading` and `trailing` props.
   */
  icon?: any;
  /**
   * Display an avatar on the left side.
   */
  avatar?: AvatarProps | undefined;
  /**
   * When `true`, the icon will be displayed on the left side.
   */
  leading?: boolean | undefined;
  /**
   * Display an icon on the left side.
   */
  leadingIcon?: any;
  /**
   * When `true`, the icon will be displayed on the right side.
   */
  trailing?: boolean | undefined;
  /**
   * Display an icon on the right side.
   */
  trailingIcon?: any;
  /**
   * When `true`, the loading icon will be displayed.
   */
  loading?: boolean | undefined;
  /**
   * The icon when the `loading` prop is `true`.
   * @default appConfig.ui.icons.loading
   */
  loadingIcon?: any;
  /**
   * Class to apply when the link is exact active
   */
  exactActiveClass?: string | undefined;
  /**
   * Pass the returned promise of `router.push()` to `document.startViewTransition()` if supported.
   */
  viewTransition?: boolean | undefined;
  autofocus?: false | true | "true" | "false" | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  formaction?: string | undefined;
  formenctype?: string | undefined;
  formmethod?: string | undefined;
  formnovalidate?: false | true | "true" | "false" | undefined;
  formtarget?: string | undefined;
  name?: string | undefined;
  /**
   * The type of the button when not a link.
   * @default 'button'
   */
  type?: "reset" | "submit" | "button" | undefined;
  /**
   * The element or component this component should render as when not a link.
   * @default 'button'
   */
  as?: any;
  /**
   * Force the link to be active independent of the current route.
   */
  active?: boolean | undefined;

  // Props inherited from the Link component: https://ui.nuxt.com/docs/components/link
  /**
   * Route Location the link should navigate to when clicked on.
   */
  to?: string | it | et | undefined;
  /**
   * Class to apply when the link is active
   */
  activeClass?: string | undefined;
  /**
   * Value passed to the attribute `aria-current` when the link is exact active.
   * @default `'page'`
   */
  ariaCurrentValue?: "page" | "step" | "location" | "date" | "time" | "true" | "false" | undefined;
  /**
   * Calls `router.replace` instead of `router.push`.
   */
  replace?: boolean | undefined;
  download?: any;
  /**
   * An alias for `to`. If used with `to`, `href` will be ignored
   */
  href?: string | it | et | undefined;
  hreflang?: string | undefined;
  media?: string | undefined;
  ping?: string | undefined;
  /**
   * A rel attribute value to apply on the link. Defaults to "noopener noreferrer" for external links.
   */
  rel?: null | "noopener" | "noreferrer" | "nofollow" | "sponsored" | "ugc" | string & {} | undefined;
  /**
   * Where to display the linked URL, as the name for a browsing context.
   */
  target?: null | string & {} | "_blank" | "_parent" | "_self" | "_top" | undefined;
  referrerpolicy?: "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
  /**
   * Will only be active if the current route is an exact match.
   */
  exact?: boolean | undefined;
  /**
   * Allows controlling how the current route query sets the link as active.
   */
  exactQuery?: boolean | "partial" | undefined;
  /**
   * Will only be active if the current route hash is an exact match.
   */
  exactHash?: boolean | undefined;
  /**
   * The class to apply when the link is inactive.
   */
  inactiveClass?: string | undefined;
  /**
   * Control i18n auto-localization when `@nuxtjs/i18n` is installed.
   * - `undefined` / `true` (default): auto-localizes to the current locale using `$localePath`.
   *   Paths already carrying a locale prefix (from e.g. `switchLocalePath()`) are detected
   *   and left untouched to prevent double-prefixing.
   * - `false`: explicitly disables auto-localization.
   * - `string`: localizes to a specific locale (e.g. `'fr'`).
   */
  locale?: string | false | true | undefined;
  /**
   * Forces the link to be considered as external (true) or internal (false). This is helpful to handle edge-cases
   */
  external?: boolean | undefined;
  /**
   * If set to true, no rel attribute will be added to the link
   */
  noRel?: boolean | undefined;
  /**
   * A class to apply to links that have been prefetched.
   */
  prefetchedClass?: string | undefined;
  /**
   * When enabled will prefetch middleware, layouts and payloads of links in the viewport.
   */
  prefetch?: boolean | undefined;
  /**
   * Allows controlling when to prefetch links. By default, prefetch is triggered only on visibility.
   */
  prefetchOn?: "visibility" | "interaction" | Partial<{ visibility: boolean; interaction: boolean; }> | undefined;
  /**
   * Escape hatch to disable `prefetch` attribute.
   */
  noPrefetch?: boolean | undefined;
  /**
   * An option to either add or remove trailing slashes in the `href` for this specific link.
   * Overrides the global `trailingSlash` option if provided.
   */
  trailingSlash?: "remove" | "append" | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
>
> This component also supports all native `<button>` HTML attributes.

> [!NOTE]
> See: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13
>
> The `Button` component extends the `Link` component. Check out the source code on GitHub.

### Slots

```ts
/**
 * Slots for the Button component
 */
interface ButtonSlots {
	leading(): any;
	default(): any;
	trailing(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		button: {
			slots: {
				base: [
					'rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75',
					'transition-colors',
				],
				label: 'truncate',
				leadingIcon: 'shrink-0',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailingIcon: 'shrink-0',
			},
			variants: {
				fieldGroup: {
					horizontal:
						'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
					vertical:
						'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
				},
				color: {
					primary: '',
					secondary: '',
					success: '',
					info: '',
					warning: '',
					error: '',
					neutral: '',
				},
				variant: {
					solid: '',
					outline: '',
					soft: '',
					subtle: '',
					ghost: '',
					link: '',
				},
				size: {
					xs: {
						base: 'px-2 py-1 text-xs gap-1',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
					},
					sm: {
						base: 'px-2.5 py-1.5 text-xs gap-1.5',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
					},
					md: {
						base: 'px-2.5 py-1.5 text-sm gap-1.5',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
					},
					lg: {
						base: 'px-3 py-2 text-sm gap-2',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
					},
					xl: {
						base: 'px-3 py-2 text-base gap-2',
						leadingIcon: 'size-6',
						leadingAvatarSize: 'xs',
						trailingIcon: 'size-6',
					},
				},
				block: {
					true: {
						base: 'w-full justify-center',
						trailingIcon: 'ms-auto',
					},
				},
				square: {
					true: '',
				},
				leading: {
					true: '',
				},
				trailing: {
					true: '',
				},
				loading: {
					true: '',
				},
				active: {
					true: {
						base: '',
					},
					false: {
						base: '',
					},
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: 'solid',
					class:
						'text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary outline-primary/25 focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: 'solid',
					class:
						'text-inverted bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary outline-secondary/25 focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: 'solid',
					class:
						'text-inverted bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success aria-disabled:bg-success outline-success/25 focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: 'solid',
					class:
						'text-inverted bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info aria-disabled:bg-info outline-info/25 focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: 'solid',
					class:
						'text-inverted bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning outline-warning/25 focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: 'solid',
					class:
						'text-inverted bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error aria-disabled:bg-error outline-error/25 focus-visible:outline-3',
				},
				{
					color: 'primary',
					variant: 'outline',
					class:
						'ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: 'outline',
					class:
						'ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: 'outline',
					class:
						'ring ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-success/25 focus-visible:outline-3 focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: 'outline',
					class:
						'ring ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-info/25 focus-visible:outline-3 focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: 'outline',
					class:
						'ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: 'outline',
					class:
						'ring ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-error/25 focus-visible:outline-3 focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: 'soft',
					class:
						'text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 outline-primary/25 focus-visible:outline-3 disabled:bg-primary/10 aria-disabled:bg-primary/10',
				},
				{
					color: 'secondary',
					variant: 'soft',
					class:
						'text-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 outline-secondary/25 focus-visible:outline-3 disabled:bg-secondary/10 aria-disabled:bg-secondary/10',
				},
				{
					color: 'success',
					variant: 'soft',
					class:
						'text-success bg-success/10 hover:bg-success/15 active:bg-success/15 outline-success/25 focus-visible:outline-3 disabled:bg-success/10 aria-disabled:bg-success/10',
				},
				{
					color: 'info',
					variant: 'soft',
					class:
						'text-info bg-info/10 hover:bg-info/15 active:bg-info/15 outline-info/25 focus-visible:outline-3 disabled:bg-info/10 aria-disabled:bg-info/10',
				},
				{
					color: 'warning',
					variant: 'soft',
					class:
						'text-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 outline-warning/25 focus-visible:outline-3 disabled:bg-warning/10 aria-disabled:bg-warning/10',
				},
				{
					color: 'error',
					variant: 'soft',
					class:
						'text-error bg-error/10 hover:bg-error/15 active:bg-error/15 outline-error/25 focus-visible:outline-3 disabled:bg-error/10 aria-disabled:bg-error/10',
				},
				{
					color: 'primary',
					variant: 'subtle',
					class:
						'text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: 'subtle',
					class:
						'text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: 'subtle',
					class:
						'text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 outline-success/25 focus-visible:outline-3 focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: 'subtle',
					class:
						'text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 outline-info/25 focus-visible:outline-3 focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: 'subtle',
					class:
						'text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: 'subtle',
					class:
						'text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 outline-error/25 focus-visible:outline-3 focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: 'ghost',
					class:
						'text-primary hover:bg-primary/10 active:bg-primary/10 outline-primary/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				},
				{
					color: 'secondary',
					variant: 'ghost',
					class:
						'text-secondary hover:bg-secondary/10 active:bg-secondary/10 outline-secondary/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				},
				{
					color: 'success',
					variant: 'ghost',
					class:
						'text-success hover:bg-success/10 active:bg-success/10 outline-success/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				},
				{
					color: 'info',
					variant: 'ghost',
					class:
						'text-info hover:bg-info/10 active:bg-info/10 outline-info/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				},
				{
					color: 'warning',
					variant: 'ghost',
					class:
						'text-warning hover:bg-warning/10 active:bg-warning/10 outline-warning/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				},
				{
					color: 'error',
					variant: 'ghost',
					class:
						'text-error hover:bg-error/10 active:bg-error/10 outline-error/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				},
				{
					color: 'primary',
					variant: 'link',
					class:
						'text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary outline-primary/25 focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: 'link',
					class:
						'text-secondary hover:text-secondary/75 active:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary outline-secondary/25 focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: 'link',
					class:
						'text-success hover:text-success/75 active:text-success/75 disabled:text-success aria-disabled:text-success outline-success/25 focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: 'link',
					class:
						'text-info hover:text-info/75 active:text-info/75 disabled:text-info aria-disabled:text-info outline-info/25 focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: 'link',
					class:
						'text-warning hover:text-warning/75 active:text-warning/75 disabled:text-warning aria-disabled:text-warning outline-warning/25 focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: 'link',
					class:
						'text-error hover:text-error/75 active:text-error/75 disabled:text-error aria-disabled:text-error outline-error/25 focus-visible:outline-3',
				},
				{
					color: 'neutral',
					variant: 'solid',
					class:
						'text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted outline-inverted/25 focus-visible:outline-3',
				},
				{
					color: 'neutral',
					variant: 'outline',
					class:
						'ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: 'soft',
					class:
						'text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 outline-inverted/25 focus-visible:outline-3 disabled:bg-elevated aria-disabled:bg-elevated',
				},
				{
					color: 'neutral',
					variant: 'subtle',
					class:
						'ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: 'ghost',
					class:
						'text-default hover:bg-elevated active:bg-elevated outline-inverted/25 focus-visible:outline-3 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent',
				},
				{
					color: 'neutral',
					variant: 'link',
					class:
						'text-muted hover:text-default active:text-default disabled:text-muted aria-disabled:text-muted outline-inverted/25 focus-visible:outline-3',
				},
				{
					size: 'xs',
					square: true,
					class: 'p-1',
				},
				{
					size: 'sm',
					square: true,
					class: 'p-1.5',
				},
				{
					size: 'md',
					square: true,
					class: 'p-1.5',
				},
				{
					size: 'lg',
					square: true,
					class: 'p-2',
				},
				{
					size: 'xl',
					square: true,
					class: 'p-2',
				},
				{
					loading: true,
					leading: true,
					class: {
						leadingIcon: 'animate-spin',
					},
				},
				{
					loading: true,
					leading: false,
					trailing: true,
					class: {
						trailingIcon: 'animate-spin',
					},
				},
			],
			defaultVariants: {
				color: 'primary',
				variant: 'solid',
				size: 'md',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Button.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/button.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Calendar"
description: "A calendar component for selecting single dates, multiple dates or date ranges."
canonical_url: "https://ui.nuxt.com/docs/components/calendar"

---

# Calendar

> A calendar component for selecting single dates, multiple dates or date ranges.

## Usage

Use the `v-model` directive to control the selected date.

```vue
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const value = shallowRef(new CalendarDate(2022, 2, 3));
</script>

<template>
	<UCalendar v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const defaultValue = shallowRef(new CalendarDate(2022, 2, 6));
</script>

<template>
	<UCalendar :default-value="defaultValue" />
</template>
```

**Nuxt:**

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/nuxt#locale
>
> This component uses the `@internationalized/date` package for locale-aware formatting. The date format is determined by the `locale` prop of the App component.

**Vue:**

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/vue#locale
>
> This component uses the `@internationalized/date` package for locale-aware formatting. The date format is determined by the `locale` prop of the App component.

### Type `4.9+`

Use the `type` prop to change what the calendar selects. Defaults to `date`.

When using `date`, click the heading to switch from the day view to a month then year view for quick navigation, then drill back down to pick a date.

```vue
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const value = shallowRef(new CalendarDate(2022, 2, 1));
</script>

<template>
	<UCalendar
		type="month"
		v-model="value"
	/>
</template>
```

Use `type="year"` to render a standalone year picker.

```vue
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const value = shallowRef(new CalendarDate(2022, 1, 1));
</script>

<template>
	<UCalendar
		type="year"
		v-model="value"
	/>
</template>
```

### Multiple

Use the `multiple` prop to allow multiple selections.

```vue
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const value = shallowRef([
		new CalendarDate(2022, 2, 4),
		new CalendarDate(2022, 2, 6),
		new CalendarDate(2022, 2, 8),
	]);
</script>

<template>
	<UCalendar
		multiple
		v-model="value"
	/>
</template>
```

### Range

Use the `range` prop to select a range of dates.

```vue
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const value = shallowRef({
		start: new CalendarDate(2022, 2, 3),
		end: new CalendarDate(2022, 2, 20),
	});
</script>

<template>
	<UCalendar
		range
		v-model="value"
	/>
</template>
```

The `range` prop also works with `type="month"` and `type="year"`, letting you select a range of months or years.

```vue
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const value = shallowRef({
		start: new CalendarDate(2022, 2, 1),
		end: new CalendarDate(2022, 6, 1),
	});
</script>

<template>
	<UCalendar
		type="month"
		range
		v-model="value"
	/>
</template>
```

### Number Of Months

Use the `numberOfMonths` prop to change the number of months in the calendar.

```vue
<template>
	<UCalendar :number-of-months="3" />
</template>
```

### Month Controls

Use the `month-controls` prop to show the month controls. Defaults to `true`.

```vue
<template>
	<UCalendar :month-controls="false" />
</template>
```

Use the `prev-month` and `next-month` props to override the month buttons.

```vue
<template>
	<UCalendar
		:prev-month="{
			color: 'primary',
			variant: 'soft',
		}"
		:next-month="{
			color: 'primary',
			variant: 'soft',
		}"
	/>
</template>
```

### Year Controls

Use the `year-controls` prop to show the year controls. Defaults to `true`.

```vue
<template>
	<UCalendar :year-controls="false" />
</template>
```

Use the `prev-year` and `next-year` props to override the year buttons.

```vue
<template>
	<UCalendar
		:prev-year="{
			color: 'primary',
			variant: 'soft',
		}"
		:next-year="{
			color: 'primary',
			variant: 'soft',
		}"
	/>
</template>
```

### View Control `4.9+`

Use the `view-control` prop to make the heading a button that switches between the day, month and year views. Defaults to `true`.

```vue
<template>
	<UCalendar :view-control="false" />
</template>
```

Set the `view-control` prop to an object to override the heading button.

```vue
<template>
	<UCalendar
		:view-control="{
			color: 'primary',
			variant: 'soft',
		}"
	/>
</template>
```

### Fixed Weeks

Use the `fixed-weeks` prop to display the calendar with fixed weeks.

```vue
<template>
	<UCalendar :fixed-weeks="false" />
</template>
```

### Week Numbers `4.4+`

Use the `week-numbers` prop to display week numbers in the calendar.

```vue
<template>
	<UCalendar
		week-numbers
		fixed-weeks
	/>
</template>
```

### Color

Use the `color` prop to change the color of the calendar.

```vue
<template>
	<UCalendar color="neutral" />
</template>
```

### Variant

Use the `variant` prop to change the variant of the calendar.

```vue
<template>
	<UCalendar variant="subtle" />
</template>
```

### Size

Use the `size` prop to change the size of the calendar.

```vue
<template>
	<UCalendar size="xl" />
</template>
```

### Disabled

Use the `disabled` prop to disable the calendar.

```vue
<template>
	<UCalendar disabled />
</template>
```

## Examples

### With chip events

Use the [Chip](/docs/components/chip) component to add events to specific days.

```vue [CalendarEventsExample.vue]
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const modelValue = shallowRef(new CalendarDate(2022, 1, 10));

	function getColorByDate(date: Date) {
		const isWeekend = date.getDay() % 6 == 0;
		const isDayMeeting = date.getDay() % 3 == 0;

		if (isWeekend) {
			return undefined;
		}

		if (isDayMeeting) {
			return 'error';
		}

		return 'success';
	}
</script>

<template>
	<UCalendar v-model="modelValue">
		<template #day="{ day }">
			<UChip
				:show="!!getColorByDate(day.toDate('UTC'))"
				:color="getColorByDate(day.toDate('UTC'))"
				size="2xs"
			>
				{{ day.day }}
			</UChip>
		</template>
	</UCalendar>
</template>
```

### With disabled dates

Use the `is-date-disabled` prop with a function to mark specific dates as disabled. When using `type="month"` or `type="year"`, use the `is-month-disabled` or `is-year-disabled` prop instead.

```vue [CalendarDisabledDatesExample.vue]
<script setup lang="ts">
	import type { DateValue } from '@internationalized/date';
	import { CalendarDate } from '@internationalized/date';

	const modelValue = shallowRef({
		start: new CalendarDate(2022, 1, 1),
		end: new CalendarDate(2022, 1, 9),
	});

	const isDateDisabled = (date: DateValue) => {
		return date.day >= 10 && date.day <= 16;
	};
</script>

<template>
	<UCalendar
		v-model="modelValue"
		:is-date-disabled="isDateDisabled"
		range
	/>
</template>
```

### With unavailable dates

Use the `is-date-unavailable` prop with a function to mark specific dates as unavailable. When using `type="month"` or `type="year"`, use the `is-month-unavailable` or `is-year-unavailable` prop instead.

```vue [CalendarUnavailableDatesExample.vue]
<script setup lang="ts">
	import type { DateValue } from '@internationalized/date';
	import { CalendarDate } from '@internationalized/date';

	const modelValue = shallowRef({
		start: new CalendarDate(2022, 1, 1),
		end: new CalendarDate(2022, 1, 9),
	});

	const isDateUnavailable = (date: DateValue) => {
		return date.day >= 10 && date.day <= 16;
	};
</script>

<template>
	<UCalendar
		v-model="modelValue"
		:is-date-unavailable="isDateUnavailable"
		range
	/>
</template>
```

### With min/max dates

Use the `min-value` and `max-value` props to limit the dates.

```vue [CalendarMinMaxDatesExample.vue]
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const modelValue = shallowRef(new CalendarDate(2023, 9, 10));
	const minDate = new CalendarDate(2023, 9, 1);
	const maxDate = new CalendarDate(2023, 9, 30);
</script>

<template>
	<UCalendar
		v-model="modelValue"
		:min-value="minDate"
		:max-value="maxDate"
	/>
</template>
```

### With other calendar systems

You can use other calenders from `@internationalized/date` to implement a different calendar system.

```vue [CalendarOtherSystemExample.vue]
<script lang="ts" setup>
	import { CalendarDate, HebrewCalendar } from '@internationalized/date';

	const hebrewDate = shallowRef(
		new CalendarDate(new HebrewCalendar(), 5781, 1, 1),
	);
</script>

<template>
	<UCalendar v-model="hebrewDate" />
</template>
```

> [!NOTE]
> See: https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations
>
> You can check all the available calendars on `@internationalized/date` docs.

### With external controls

You can control the calendar with external controls by manipulating the date passed in the `v-model`.

```vue [CalendarExternalControlsExample.vue]
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const date = shallowRef(new CalendarDate(2025, 4, 2));
</script>

<template>
	<div class="flex flex-col gap-4">
		<UCalendar
			v-model="date"
			:month-controls="false"
			:year-controls="false"
		/>

		<div class="flex justify-between gap-4">
			<UButton
				color="neutral"
				variant="outline"
				@click="date = date.subtract({ months: 1 })"
			>
				Prev
			</UButton>

			<UButton
				color="neutral"
				variant="outline"
				@click="date = date.add({ months: 1 })"
			>
				Next
			</UButton>
		</div>
	</div>
</template>
```

### With today's date

Use the `today` function from `@internationalized/date` with `getLocalTimeZone` to set the value to the current date.

```vue [CalendarTodayExample.vue]
<script setup lang="ts">
	import { getLocalTimeZone, today } from '@internationalized/date';

	const date = shallowRef(today(getLocalTimeZone()));
</script>

<template>
	<div class="flex flex-col gap-4">
		<UCalendar v-model="date" />

		<UButton
			color="neutral"
			variant="outline"
			class="justify-center"
			@click="date = today(getLocalTimeZone())"
		>
			Today
		</UButton>
	</div>
</template>
```

### As a date picker

Use a [Button](/docs/components/button) and a [Popover](/docs/components/popover) component to create a date picker.

```vue [CalendarDatePickerExample.vue]
<script setup lang="ts">
	import {
		CalendarDate,
		DateFormatter,
		getLocalTimeZone,
	} from '@internationalized/date';

	const df = new DateFormatter('en-US', {
		dateStyle: 'medium',
	});

	const modelValue = shallowRef(new CalendarDate(2022, 1, 10));
</script>

<template>
	<UPopover>
		<UButton
			color="neutral"
			variant="subtle"
			icon="i-lucide-calendar"
		>
			{{
				modelValue
					? df.format(modelValue.toDate(getLocalTimeZone()))
					: 'Select a date'
			}}
		</UButton>

		<template #content>
			<UCalendar
				v-model="modelValue"
				class="p-2"
			/>
		</template>
	</UPopover>
</template>
```

### As a date range picker

Use a [Button](/docs/components/button) and a [Popover](/docs/components/popover) component to create a date range picker with preset ranges.

```vue [CalendarDateRangePickerExample.vue]
<script setup lang="ts">
	import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
	import {
		DateFormatter,
		getLocalTimeZone,
		today,
	} from '@internationalized/date';

	const df = new DateFormatter('en-US', { dateStyle: 'medium' });
	const tz = getLocalTimeZone();
	const breakpoints = useBreakpoints(breakpointsTailwind);
	const isDesktop = breakpoints.greaterOrEqual('sm');

	const ranges = [
		{ label: 'Last 7 days', days: 7 },
		{ label: 'Last 14 days', days: 14 },
		{ label: 'Last 30 days', days: 30 },
		{ label: 'Last 3 months', months: 3 },
		{ label: 'Last 6 months', months: 6 },
		{ label: 'Last year', years: 1 },
	];

	const initialEnd = today(tz);
	const modelValue = shallowRef({
		start: initialEnd.subtract({ days: 14 }),
		end: initialEnd,
	});

	const label = computed(() => {
		const { start, end } = modelValue.value;
		if (!start) return 'Pick a date';
		if (!end) return df.format(start.toDate(tz));
		return `${df.format(start.toDate(tz))} - ${df.format(end.toDate(tz))}`;
	});

	function computeStart(range: (typeof ranges)[number]) {
		const end = today(tz);
		return {
			start: end.subtract({
				days: range.days,
				months: range.months,
				years: range.years,
			}),
			end,
		};
	}

	function isRangeSelected(range: (typeof ranges)[number]) {
		if (!modelValue.value?.start || !modelValue.value?.end) return false;
		const { start, end } = computeStart(range);
		return (
			modelValue.value.start.compare(start) === 0 &&
			modelValue.value.end.compare(end) === 0
		);
	}

	function selectRange(range: (typeof ranges)[number]) {
		modelValue.value = computeStart(range);
	}
</script>

<template>
	<UPopover :content="{ align: 'center' }">
		<UButton
			color="neutral"
			variant="subtle"
			icon="i-lucide-calendar"
		>
			{{ label }}
		</UButton>

		<template #content>
			<div class="flex items-stretch divide-x divide-(--ui-border)">
				<div class="hidden sm:flex flex-col justify-center py-2">
					<UButton
						v-for="(range, index) in ranges"
						:key="index"
						:label="range.label"
						color="neutral"
						variant="ghost"
						class="rounded-none px-4"
						:class="[
							isRangeSelected(range) ? 'bg-elevated' : 'hover:bg-elevated/50',
						]"
						truncate
						@click="selectRange(range)"
					/>
				</div>

				<UCalendar
					v-model="modelValue"
					class="p-2"
					:number-of-months="isDesktop ? 2 : 1"
					range
				/>
			</div>
		</template>
	</UPopover>
</template>
```

## API

### Props

```ts
/**
 * Props for the Calendar component
 */
interface CalendarProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  /**
   * The type of picker.
   * - `date` renders a day calendar whose heading can switch to a month then year view.
   * - `month` renders a standalone month picker.
   * - `year` renders a standalone year picker.
   * @default 'date'
   */
  type?: "date" | "month" | "year" | undefined;
  /**
   * The icon to use for the next year control.
   * @default appConfig.ui.icons.chevronDoubleRight
   */
  nextYearIcon?: any;
  /**
   * Configure the next year button.
   * `{ color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
   */
  nextYear?: Omit<ButtonProps, LinkPropsKeys> | undefined;
  /**
   * The icon to use for the next month control.
   * @default appConfig.ui.icons.chevronRight
   */
  nextMonthIcon?: any;
  /**
   * Configure the next month button.
   * `{ color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
   */
  nextMonth?: Omit<ButtonProps, LinkPropsKeys> | undefined;
  /**
   * The icon to use for the previous year control.
   * @default appConfig.ui.icons.chevronDoubleLeft
   */
  prevYearIcon?: any;
  /**
   * Configure the prev year button.
   * `{ color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
   */
  prevYear?: Omit<ButtonProps, LinkPropsKeys> | undefined;
  /**
   * The icon to use for the previous month control.
   * @default appConfig.ui.icons.chevronLeft
   */
  prevMonthIcon?: any;
  /**
   * Configure the prev month button.
   * `{ color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
   */
  prevMonth?: Omit<ButtonProps, LinkPropsKeys> | undefined;
  /**
   * Whether to make the heading a button that switches between the day, month and year views.
   * Has no effect when `type` is `year`. Can be an object to override the button props.
   * `{ color: 'neutral', variant: 'ghost', block: true }`{lang="ts-type"}
   * @default true
   */
  viewControl?: boolean | Omit<ButtonProps, LinkPropsKeys> | undefined;
  /**
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined;
  /**
   * @default 'solid'
   */
  variant?: "solid" | "outline" | "soft" | "subtle" | undefined;
  /**
   * @default 'md'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  /**
   * Whether or not a range of dates can be selected
   */
  range?: R | undefined;
  /**
   * Whether or not multiple dates can be selected
   */
  multiple?: M | undefined;
  /**
   * Show month controls
   * @default true
   */
  monthControls?: boolean | undefined;
  /**
   * Show year controls
   * @default true
   */
  yearControls?: boolean | undefined;
  defaultValue?: CalendarDate | CalendarDateTime | ZonedDateTime | DateRange | DateValue[];
  modelValue?: null | CalendarDate | CalendarDateTime | ZonedDateTime | DateRange | DateValue[];
  weekNumbers?: boolean | undefined;
  ui?: { root?: SlotClass; header?: SlotClass; body?: SlotClass; heading?: SlotClass; headingLabel?: SlotClass; grid?: SlotClass; gridRow?: SlotClass; gridWeekDaysRow?: SlotClass; gridBody?: SlotClass; headCell?: SlotClass; headCellWeek?: SlotClass; cell?: SlotClass; cellTrigger?: SlotClass; cellWeek?: SlotClass; } | undefined;
  defaultPlaceholder?: CalendarDate | CalendarDateTime | ZonedDateTime;
  placeholder?: CalendarDate | CalendarDateTime | ZonedDateTime;
  /**
   * When combined with `isDateUnavailable`, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected.
   */
  allowNonContiguousRanges?: boolean | undefined;
  /**
   * This property causes the previous and next buttons to navigate by the number of months displayed at once, rather than one month
   */
  pagedNavigation?: boolean | undefined;
  /**
   * Whether or not to prevent the user from deselecting a date without selecting another date first
   */
  preventDeselect?: boolean | undefined;
  /**
   * The maximum number of days that can be selected in a range
   */
  maximumDays?: number | undefined;
  /**
   * The day of the week to start the calendar on
   */
  weekStartsOn?: 0 | 1 | 2 | 4 | 5 | 3 | 6 | undefined;
  /**
   * The format to use for the weekday strings provided via the weekdays slot prop
   */
  weekdayFormat?: "narrow" | "short" | "long" | undefined;
  /**
   * Whether or not to always display 6 weeks in the calendar
   * @default true
   */
  fixedWeeks?: boolean | undefined;
  maxValue?: CalendarDate | CalendarDateTime | ZonedDateTime;
  minValue?: CalendarDate | CalendarDateTime | ZonedDateTime;
  /**
   * The locale to use for formatting dates
   */
  locale?: string | undefined;
  /**
   * The number of months to display at once
   */
  numberOfMonths?: number | undefined;
  /**
   * Whether or not the calendar is disabled
   */
  disabled?: boolean | undefined;
  /**
   * Whether or not the calendar is readonly
   */
  readonly?: boolean | undefined;
  /**
   * If true, the calendar will focus the selected day, today, or the first day of the month depending on what is visible when the calendar is mounted
   */
  initialFocus?: boolean | undefined;
  /**
   * A function that returns whether or not a date is disabled
   */
  isDateDisabled?: (date: DateValue): boolean | undefined;
  /**
   * A function that returns whether or not a date is unavailable
   */
  isDateUnavailable?: (date: DateValue): boolean | undefined;
  /**
   * A function that returns whether or not a date is hightable
   */
  isDateHighlightable?: (date: DateValue): boolean | undefined;
  /**
   * A function that returns the next page of the calendar. It receives the current placeholder as an argument inside the component.
   */
  nextPage?: (placeholder: DateValue): DateValue | undefined;
  /**
   * A function that returns the previous page of the calendar. It receives the current placeholder as an argument inside the component.
   */
  prevPage?: (placeholder: DateValue): DateValue | undefined;
  /**
   * Whether or not to disable days outside the current view.
   */
  disableDaysOutsideCurrentView?: boolean | undefined;
  /**
   * Which part of the range should be fixed
   */
  fixedDate?: "start" | "end" | undefined;
  /**
   * A function that returns whether or not a month is disabled
   */
  isMonthDisabled?: (date: DateValue): boolean | undefined;
  /**
   * A function that returns whether or not a month is unavailable
   */
  isMonthUnavailable?: (date: DateValue): boolean | undefined;
  /**
   * A function that returns whether or not a year is disabled
   */
  isYearDisabled?: (date: DateValue): boolean | undefined;
  /**
   * A function that returns whether or not a year is unavailable
   */
  isYearUnavailable?: (date: DateValue): boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Calendar component
 */
interface CalendarSlots {
  heading(): any;
  day(): any;
  week-day(): any;
  month-cell(): any;
  year-cell(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Calendar component
 */
interface CalendarEmits {
  update:modelValue: (payload: [value: CalendarModelValue<R, M>]) => void;
  update:placeholder: (payload: [date: DateValue]) => void;
  update:validModelValue: (payload: [date: DateRange]) => void;
  update:startValue: (payload: [date: DateValue | undefined]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		calendar: {
			slots: {
				root: '',
				header: 'flex items-center justify-between',
				body: 'flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0',
				heading: 'flex-1 min-w-0 text-center',
				headingLabel: 'font-medium block truncate p-1.5',
				grid: 'w-full border-collapse select-none space-y-1 focus:outline-none',
				gridRow: 'grid',
				gridWeekDaysRow: 'mb-1 grid w-full grid-cols-7',
				gridBody: 'grid',
				headCell: 'rounded-md',
				headCellWeek: 'rounded-md text-muted',
				cell: 'relative text-center',
				cellTrigger: [
					'm-0.5 relative flex items-center justify-center whitespace-nowrap focus-visible:outline-3 data-disabled:text-muted data-unavailable:line-through data-unavailable:text-muted data-unavailable:pointer-events-none data-today:font-semibold',
					'transition',
				],
				cellWeek: 'relative text-center text-muted',
			},
			variants: {
				color: {
					primary: {
						headCell: 'text-primary',
						cellTrigger: 'outline-primary/25',
					},
					secondary: {
						headCell: 'text-secondary',
						cellTrigger: 'outline-secondary/25',
					},
					success: {
						headCell: 'text-success',
						cellTrigger: 'outline-success/25',
					},
					info: {
						headCell: 'text-info',
						cellTrigger: 'outline-info/25',
					},
					warning: {
						headCell: 'text-warning',
						cellTrigger: 'outline-warning/25',
					},
					error: {
						headCell: 'text-error',
						cellTrigger: 'outline-error/25',
					},
					neutral: {
						headCell: 'text-highlighted',
						cellTrigger: 'outline-inverted/25',
					},
				},
				variant: {
					solid: '',
					outline: '',
					soft: '',
					subtle: '',
				},
				size: {
					xs: {
						headingLabel: 'text-xs',
						cell: 'text-xs',
						cellWeek: 'text-xs',
						headCell: 'text-[10px]',
						headCellWeek: 'text-[10px]',
						body: 'space-y-2 pt-2',
					},
					sm: {
						headingLabel: 'text-xs',
						headCell: 'text-xs',
						headCellWeek: 'text-xs',
						cellWeek: 'text-xs',
						cell: 'text-xs',
					},
					md: {
						headingLabel: 'text-sm',
						headCell: 'text-xs',
						headCellWeek: 'text-xs',
						cellWeek: 'text-xs',
						cell: 'text-sm',
					},
					lg: {
						headingLabel: 'text-base',
						headCell: 'text-base',
						headCellWeek: 'text-base',
						cellWeek: 'text-base',
						cell: 'text-base',
					},
					xl: {
						headingLabel: 'text-lg',
						headCell: 'text-lg',
						headCellWeek: 'text-lg',
						cellWeek: 'text-lg',
						cell: 'text-lg',
					},
				},
				view: {
					day: {
						gridRow: 'grid-cols-7 place-items-center',
						cellTrigger: 'rounded-full data-outside-view:text-muted',
					},
					month: {
						gridRow: 'grid-cols-4',
						cellTrigger: 'rounded-md',
					},
					year: {
						gridRow: 'grid-cols-4',
						cellTrigger: 'rounded-md',
					},
				},
				weekNumbers: {
					true: '',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: 'solid',
					class: {
						cellTrigger:
							'data-selected:bg-primary data-selected:text-inverted data-today:not-data-selected:text-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20',
					},
				},
				{
					color: 'secondary',
					variant: 'solid',
					class: {
						cellTrigger:
							'data-selected:bg-secondary data-selected:text-inverted data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20',
					},
				},
				{
					color: 'success',
					variant: 'solid',
					class: {
						cellTrigger:
							'data-selected:bg-success data-selected:text-inverted data-today:not-data-selected:text-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20',
					},
				},
				{
					color: 'info',
					variant: 'solid',
					class: {
						cellTrigger:
							'data-selected:bg-info data-selected:text-inverted data-today:not-data-selected:text-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20',
					},
				},
				{
					color: 'warning',
					variant: 'solid',
					class: {
						cellTrigger:
							'data-selected:bg-warning data-selected:text-inverted data-today:not-data-selected:text-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20',
					},
				},
				{
					color: 'error',
					variant: 'solid',
					class: {
						cellTrigger:
							'data-selected:bg-error data-selected:text-inverted data-today:not-data-selected:text-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20',
					},
				},
				{
					color: 'primary',
					variant: 'outline',
					class: {
						cellTrigger:
							'data-selected:ring data-selected:ring-inset data-selected:ring-primary/50 data-selected:text-primary data-selected:focus-visible:ring-primary data-today:not-data-selected:text-primary data-highlighted:bg-primary/10 hover:not-data-selected:bg-primary/10',
					},
				},
				{
					color: 'secondary',
					variant: 'outline',
					class: {
						cellTrigger:
							'data-selected:ring data-selected:ring-inset data-selected:ring-secondary/50 data-selected:text-secondary data-selected:focus-visible:ring-secondary data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/10 hover:not-data-selected:bg-secondary/10',
					},
				},
				{
					color: 'success',
					variant: 'outline',
					class: {
						cellTrigger:
							'data-selected:ring data-selected:ring-inset data-selected:ring-success/50 data-selected:text-success data-selected:focus-visible:ring-success data-today:not-data-selected:text-success data-highlighted:bg-success/10 hover:not-data-selected:bg-success/10',
					},
				},
				{
					color: 'info',
					variant: 'outline',
					class: {
						cellTrigger:
							'data-selected:ring data-selected:ring-inset data-selected:ring-info/50 data-selected:text-info data-selected:focus-visible:ring-info data-today:not-data-selected:text-info data-highlighted:bg-info/10 hover:not-data-selected:bg-info/10',
					},
				},
				{
					color: 'warning',
					variant: 'outline',
					class: {
						cellTrigger:
							'data-selected:ring data-selected:ring-inset data-selected:ring-warning/50 data-selected:text-warning data-selected:focus-visible:ring-warning data-today:not-data-selected:text-warning data-highlighted:bg-warning/10 hover:not-data-selected:bg-warning/10',
					},
				},
				{
					color: 'error',
					variant: 'outline',
					class: {
						cellTrigger:
							'data-selected:ring data-selected:ring-inset data-selected:ring-error/50 data-selected:text-error data-selected:focus-visible:ring-error data-today:not-data-selected:text-error data-highlighted:bg-error/10 hover:not-data-selected:bg-error/10',
					},
				},
				{
					color: 'primary',
					variant: 'soft',
					class: {
						cellTrigger:
							'data-selected:bg-primary/10 data-selected:text-primary data-today:not-data-selected:text-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20',
					},
				},
				{
					color: 'secondary',
					variant: 'soft',
					class: {
						cellTrigger:
							'data-selected:bg-secondary/10 data-selected:text-secondary data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20',
					},
				},
				{
					color: 'success',
					variant: 'soft',
					class: {
						cellTrigger:
							'data-selected:bg-success/10 data-selected:text-success data-today:not-data-selected:text-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20',
					},
				},
				{
					color: 'info',
					variant: 'soft',
					class: {
						cellTrigger:
							'data-selected:bg-info/10 data-selected:text-info data-today:not-data-selected:text-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20',
					},
				},
				{
					color: 'warning',
					variant: 'soft',
					class: {
						cellTrigger:
							'data-selected:bg-warning/10 data-selected:text-warning data-today:not-data-selected:text-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20',
					},
				},
				{
					color: 'error',
					variant: 'soft',
					class: {
						cellTrigger:
							'data-selected:bg-error/10 data-selected:text-error data-today:not-data-selected:text-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20',
					},
				},
				{
					color: 'primary',
					variant: 'subtle',
					class: {
						cellTrigger:
							'data-selected:bg-primary/10 data-selected:text-primary data-selected:ring data-selected:ring-inset data-selected:ring-primary/25 data-selected:focus-visible:ring-primary data-today:not-data-selected:text-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20',
					},
				},
				{
					color: 'secondary',
					variant: 'subtle',
					class: {
						cellTrigger:
							'data-selected:bg-secondary/10 data-selected:text-secondary data-selected:ring data-selected:ring-inset data-selected:ring-secondary/25 data-selected:focus-visible:ring-secondary data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20',
					},
				},
				{
					color: 'success',
					variant: 'subtle',
					class: {
						cellTrigger:
							'data-selected:bg-success/10 data-selected:text-success data-selected:ring data-selected:ring-inset data-selected:ring-success/25 data-selected:focus-visible:ring-success data-today:not-data-selected:text-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20',
					},
				},
				{
					color: 'info',
					variant: 'subtle',
					class: {
						cellTrigger:
							'data-selected:bg-info/10 data-selected:text-info data-selected:ring data-selected:ring-inset data-selected:ring-info/25 data-selected:focus-visible:ring-info data-today:not-data-selected:text-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20',
					},
				},
				{
					color: 'warning',
					variant: 'subtle',
					class: {
						cellTrigger:
							'data-selected:bg-warning/10 data-selected:text-warning data-selected:ring data-selected:ring-inset data-selected:ring-warning/25 data-selected:focus-visible:ring-warning data-today:not-data-selected:text-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20',
					},
				},
				{
					color: 'error',
					variant: 'subtle',
					class: {
						cellTrigger:
							'data-selected:bg-error/10 data-selected:text-error data-selected:ring data-selected:ring-inset data-selected:ring-error/25 data-selected:focus-visible:ring-error data-today:not-data-selected:text-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20',
					},
				},
				{
					color: 'neutral',
					variant: 'solid',
					class: {
						cellTrigger:
							'data-selected:bg-inverted data-selected:text-inverted data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/20 hover:not-data-selected:bg-inverted/10',
					},
				},
				{
					color: 'neutral',
					variant: 'outline',
					class: {
						cellTrigger:
							'data-selected:ring data-selected:ring-inset data-selected:ring-accented data-selected:text-default data-selected:bg-default data-selected:focus-visible:ring-inverted data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/10 hover:not-data-selected:bg-inverted/10',
					},
				},
				{
					color: 'neutral',
					variant: 'soft',
					class: {
						cellTrigger:
							'data-selected:bg-elevated data-selected:text-default data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/20 hover:not-data-selected:bg-inverted/10',
					},
				},
				{
					color: 'neutral',
					variant: 'subtle',
					class: {
						cellTrigger:
							'data-selected:bg-elevated data-selected:text-default data-selected:ring data-selected:ring-inset data-selected:ring-accented data-selected:focus-visible:ring-inverted data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/20 hover:not-data-selected:bg-inverted/10',
					},
				},
				{
					size: 'xs',
					view: 'day',
					class: {
						cellTrigger: 'size-6',
					},
				},
				{
					size: 'sm',
					view: 'day',
					class: {
						cellTrigger: 'size-7',
					},
				},
				{
					size: 'md',
					view: 'day',
					class: {
						cellTrigger: 'size-8',
					},
				},
				{
					size: 'lg',
					view: 'day',
					class: {
						cellTrigger: 'size-9',
					},
				},
				{
					size: 'xl',
					view: 'day',
					class: {
						cellTrigger: 'size-10',
					},
				},
				{
					size: 'xs',
					view: ['month', 'year'],
					class: {
						cellTrigger: 'h-6 px-2',
					},
				},
				{
					size: 'sm',
					view: ['month', 'year'],
					class: {
						cellTrigger: 'h-7 px-2',
					},
				},
				{
					size: 'md',
					view: ['month', 'year'],
					class: {
						cellTrigger: 'h-8 px-3',
					},
				},
				{
					size: 'lg',
					view: ['month', 'year'],
					class: {
						cellTrigger: 'h-9 px-4',
					},
				},
				{
					size: 'xl',
					view: ['month', 'year'],
					class: {
						cellTrigger: 'h-10 px-5',
					},
				},
				{
					view: 'day',
					weekNumbers: true,
					class: {
						gridRow: 'grid-cols-8',
						gridWeekDaysRow: 'grid-cols-8 [&>*:first-child]:col-start-2',
					},
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'solid',
				view: 'day',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Calendar.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/calendar.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Card"
description: "Display content in a card with a header, body and footer."
canonical_url: "https://ui.nuxt.com/docs/components/card"

---

# Card

> Display content in a card with a header, body and footer.

## Usage

Use the `header`, `default` and `footer` slots to add content to the Card.

```vue
<template>
	<UCard>
		<Placeholder class="h-32" />

		<template #header>
			<Placeholder class="h-8" />
		</template>
		<template #footer>
			<Placeholder class="h-8" /> </template
	></UCard>
</template>
```

### Title `4.7+`

Use the `title` prop to set the title of the Card's header.

```vue
<template>
	<UCard
		title="Card with title"
		class="w-full"
	>
		<Placeholder class="h-32" />
	</UCard>
</template>
```

### Description `4.7+`

Use the `description` prop to set the description of the Card's header.

```vue
<template>
	<UCard
		title="Card with description"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		class="w-full"
	>
		<Placeholder class="h-32" />
	</UCard>
</template>
```

### Variant

Use the `variant` prop to change the variant of the Card.

```vue
<template>
	<UCard variant="subtle">
		<Placeholder class="h-32" />

		<template #header>
			<Placeholder class="h-8" />
		</template>
		<template #footer>
			<Placeholder class="h-8" /> </template
	></UCard>
</template>
```

## API

### Props

```ts
/**
 * Props for the Card component
 */
interface CardProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	title?: string | undefined;
	description?: string | undefined;
	/**
	 * @default 'outline'
	 */
	variant?: 'solid' | 'outline' | 'soft' | 'subtle' | undefined;
	ui?:
		| {
				root?: SlotClass;
				header?: SlotClass;
				title?: SlotClass;
				description?: SlotClass;
				body?: SlotClass;
				footer?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the Card component
 */
interface CardSlots {
	header(): any;
	title(): any;
	description(): any;
	default(): any;
	footer(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		card: {
			slots: {
				root: 'rounded-lg overflow-hidden',
				header: 'p-4 sm:px-6',
				title: 'text-highlighted font-semibold',
				description: 'mt-1 text-muted text-sm',
				body: 'p-4 sm:p-6',
				footer: 'p-4 sm:px-6',
			},
			variants: {
				variant: {
					solid: {
						root: 'bg-inverted text-inverted',
						title: 'text-inverted',
						description: 'text-dimmed',
					},
					outline: {
						root: 'bg-default ring ring-default divide-y divide-default',
					},
					soft: {
						root: 'bg-elevated/50 divide-y divide-default',
					},
					subtle: {
						root: 'bg-elevated/50 ring ring-default divide-y divide-default',
					},
				},
			},
			defaultVariants: {
				variant: 'outline',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Card.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/card.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Chip"
description: "An indicator of a numeric value or a state."
canonical_url: "https://ui.nuxt.com/docs/components/chip"

---

# Chip

> An indicator of a numeric value or a state.

## Usage

Wrap any component with a Chip to display an indicator.

```vue
<template>
	<UChip>
		<UButton
			icon="i-lucide-mail"
			color="neutral"
			variant="subtle"
		/>
	</UChip>
</template>
```

### Color

Use the `color` prop to change the color of the Chip.

```vue
<template>
	<UChip color="neutral">
		<UButton
			icon="i-lucide-mail"
			color="neutral"
			variant="subtle"
		/>
	</UChip>
</template>
```

### Size

Use the `size` prop to change the size of the Chip.

```vue
<template>
	<UChip size="3xl">
		<UButton
			icon="i-lucide-mail"
			color="neutral"
			variant="subtle"
		/>
	</UChip>
</template>
```

### Text

Use the `text` prop to set the text of the Chip.

```vue
<template>
	<UChip
		:text="5"
		size="3xl"
	>
		<UButton
			icon="i-lucide-mail"
			color="neutral"
			variant="subtle"
		/>
	</UChip>
</template>
```

### Position

Use the `position` prop to change the position of the Chip.

```vue
<template>
	<UChip position="bottom-left">
		<UButton
			icon="i-lucide-mail"
			color="neutral"
			variant="subtle"
		/>
	</UChip>
</template>
```

### Inset

Use the `inset` prop to display the Chip inside the component. This is useful when dealing with rounded components.

```vue
<template>
	<UChip inset>
		<UAvatar
			src="https://github.com/benjamincanac.png"
			loading="lazy"
		/>
	</UChip>
</template>
```

### Standalone

Use the `standalone` prop alongside the `inset` prop to display the Chip inline.

```vue
<template>
	<UChip
		standalone
		inset
	/>
</template>
```

> [!NOTE]
>
> It's used this way in the [`CommandPalette`](/docs/components/command-palette), [`InputMenu`](/docs/components/input-menu), [`Select`](/docs/components/select) or [`SelectMenu`](/docs/components/select-menu) components for example.

## Examples

### Control visibility

You can control the visibility of the Chip using the `show` prop.

```vue [ChipShowExample.vue]
<script setup lang="ts">
	const statuses = ['online', 'away', 'busy', 'offline'];
	const status = ref(statuses[0]);

	const color = computed(() =>
		status.value
			? ({
					online: 'success',
					away: 'warning',
					busy: 'error',
					offline: 'neutral',
				}[status.value] as any)
			: 'online',
	);

	const show = computed(() => status.value !== 'offline');

	// Note: This is for demonstration purposes only. Don't do this at home.
	onMounted(() => {
		setInterval(() => {
			if (status.value) {
				status.value =
					statuses[(statuses.indexOf(status.value) + 1) % statuses.length];
			}
		}, 1000);
	});
</script>

<template>
	<UChip
		:color="color"
		:show="show"
		inset
	>
		<UAvatar
			src="https://github.com/benjamincanac.png"
			loading="lazy"
		/>
	</UChip>
</template>
```

> [!NOTE]
>
> In this example, the Chip has a color per status and is displayed when the status is not `offline`.

## API

### Props

```ts
/**
 * Props for the Chip component
 */
interface ChipProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * Display some text inside the chip.
	 */
	text?: string | number | undefined;
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
	 * @default 'md'
	 */
	size?:
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '3xs'
		| '2xs'
		| '2xl'
		| '3xl'
		| undefined;
	/**
	 * The position of the chip.
	 * @default 'top-right'
	 */
	position?:
		| 'top-right'
		| 'bottom-right'
		| 'top-left'
		| 'bottom-left'
		| undefined;
	/**
	 * When `true`, keep the chip inside the component for rounded elements.
	 * @default false
	 */
	inset?: boolean | undefined;
	/**
	 * When `true`, render the chip relatively to the parent.
	 * @default false
	 */
	standalone?: boolean | undefined;
	ui?: { root?: SlotClass; base?: SlotClass } | undefined;
	/**
	 * @default true
	 */
	show?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Chip component
 */
interface ChipSlots {
	default(): any;
	content(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Chip component
 */
interface ChipEmits {
  update:show: (payload: [value: boolean]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		chip: {
			slots: {
				root: 'relative inline-flex items-center justify-center shrink-0',
				base: 'rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap',
			},
			variants: {
				color: {
					primary: 'bg-primary',
					secondary: 'bg-secondary',
					success: 'bg-success',
					info: 'bg-info',
					warning: 'bg-warning',
					error: 'bg-error',
					neutral: 'bg-inverted',
				},
				size: {
					'3xs': 'h-[4px] min-w-[4px] text-[4px]',
					'2xs': 'h-[5px] min-w-[5px] text-[5px]',
					xs: 'h-[6px] min-w-[6px] text-[6px]',
					sm: 'h-[7px] min-w-[7px] text-[7px]',
					md: 'h-[8px] min-w-[8px] text-[8px]',
					lg: 'h-[9px] min-w-[9px] text-[9px]',
					xl: 'h-[10px] min-w-[10px] text-[10px]',
					'2xl': 'h-[11px] min-w-[11px] text-[11px]',
					'3xl': 'h-[12px] min-w-[12px] text-[12px]',
				},
				position: {
					'top-right': 'top-0 right-0',
					'bottom-right': 'bottom-0 right-0',
					'top-left': 'top-0 left-0',
					'bottom-left': 'bottom-0 left-0',
				},
				inset: {
					false: '',
				},
				standalone: {
					false: 'absolute',
				},
			},
			compoundVariants: [
				{
					position: 'top-right',
					inset: false,
					class: '-translate-y-1/2 translate-x-1/2 transform',
				},
				{
					position: 'bottom-right',
					inset: false,
					class: 'translate-y-1/2 translate-x-1/2 transform',
				},
				{
					position: 'top-left',
					inset: false,
					class: '-translate-y-1/2 -translate-x-1/2 transform',
				},
				{
					position: 'bottom-left',
					inset: false,
					class: 'translate-y-1/2 -translate-x-1/2 transform',
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				position: 'top-right',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Chip.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/chip.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Collapsible"
description: "A collapsible element to toggle visibility of its content."
canonical_url: "https://ui.nuxt.com/docs/components/collapsible"

---

# Collapsible

> A collapsible element to toggle visibility of its content.

## Usage

Use a [Button](/docs/components/button) or any other component in the default slot of the Collapsible.

Then, use the `#content` slot to add the content displayed when the Collapsible is open.

```vue
<template>
	<UCollapsible class="flex flex-col gap-2 w-48">
		<UButton
			label="Open"
			color="neutral"
			variant="subtle"
			trailing-icon="i-lucide-chevron-down"
			block />

		<template #content>
			<Placeholder class="h-48" /> </template
	></UCollapsible>
</template>
```

### Unmount

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the Collapsible is collapsed. Defaults to `true`.

```vue
<template>
	<UCollapsible
		:unmount-on-hide="false"
		class="flex flex-col gap-2 w-48"
	>
		<UButton
			label="Open"
			color="neutral"
			variant="subtle"
			trailing-icon="i-lucide-chevron-down"
			block />

		<template #content>
			<Placeholder class="h-48" /> </template
	></UCollapsible>
</template>
```

> [!NOTE]
>
> You can inspect the DOM to see the content being rendered.

### Disabled

Use the `disabled` prop to disable the Collapsible.

```vue
<template>
	<UCollapsible
		class="flex flex-col gap-2 w-48"
		disabled
	>
		<UButton
			label="Open"
			color="neutral"
			variant="subtle"
			trailing-icon="i-lucide-chevron-down"
			block />

		<template #content>
			<Placeholder class="h-48" /> </template
	></UCollapsible>
</template>
```

## Examples

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [CollapsibleOpenExample.vue]
<script setup lang="ts">
	const open = ref(true);

	defineShortcuts({
		o: () => (open.value = !open.value),
	});
</script>

<template>
	<UCollapsible
		v-model:open="open"
		class="flex flex-col gap-2 w-48"
	>
		<UButton
			label="Open"
			color="neutral"
			variant="subtle"
			trailing-icon="i-lucide-chevron-down"
			block
		/>

		<template #content>
			<Placeholder class="h-48" />
		</template>
	</UCollapsible>
</template>
```

> [!NOTE]
>
> In this example, leveraging [`defineShortcuts`](/docs/composables/define-shortcuts), you can toggle the Collapsible by pressing <kbd value="O">
>
> </kbd>
>
> .

> [!TIP]
>
> This lets you move the trigger outside of the Collapsible or remove it entirely.

### With rotating icon

Here is an example with a rotating icon in the Button that indicates the open state of the Collapsible.

```vue [CollapsibleIconExample.vue]
<template>
	<UCollapsible class="flex flex-col gap-2 w-48">
		<UButton
			class="group"
			label="Open"
			color="neutral"
			variant="subtle"
			trailing-icon="i-lucide-chevron-down"
			:ui="{
				trailingIcon:
					'group-data-[state=open]:rotate-180 transition-transform duration-200',
			}"
			block
		/>

		<template #content>
			<Placeholder class="h-48" />
		</template>
	</UCollapsible>
</template>
```

## API

### Props

```ts
/**
 * Props for the Collapsible component
 */
interface CollapsibleProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	ui?: { root?: SlotClass; content?: SlotClass } | undefined;
	/**
	 * When `true`, prevents the user from interacting with the collapsible.
	 */
	disabled?: boolean | undefined;
	/**
	 * The open state of the collapsible when it is initially rendered. <br> Use when you do not need to control its open state.
	 */
	defaultOpen?: boolean | undefined;
	/**
	 * The controlled open state of the collapsible. Can be binded with `v-model`.
	 */
	open?: boolean | undefined;
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
 * Slots for the Collapsible component
 */
interface CollapsibleSlots {
	default(): any;
	content(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Collapsible component
 */
interface CollapsibleEmits {
  update:open: (payload: [value: boolean]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		collapsible: {
			slots: {
				root: '',
				content:
					'data-[state=open]:animate-[collapsible-down_200ms_var(--ease-out)] data-[state=closed]:animate-[collapsible-up_200ms_var(--ease-out)] data-[state=closed]:overflow-hidden',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Collapsible.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/collapsible.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "FieldGroup"
description: "Group multiple button-like elements together."
canonical_url: "https://ui.nuxt.com/docs/components/field-group"

---

# FieldGroup

> Group multiple button-like elements together.

## Usage

Wrap multiple [Button](/docs/components/button) within a FieldGroup to group them together.

```vue
<template>
	<UFieldGroup>
		<UButton
			color="neutral"
			variant="subtle"
			label="Button"
		/>
		<UButton
			color="neutral"
			variant="outline"
			icon="i-lucide-chevron-down"
		/>
	</UFieldGroup>
</template>
```

### Size

Use the `size` prop to change the size of all the buttons.

```vue
<template>
	<UFieldGroup size="xl">
		<UButton
			color="neutral"
			variant="subtle"
			label="Button"
		/>
		<UButton
			color="neutral"
			variant="outline"
			icon="i-lucide-chevron-down"
		/>
	</UFieldGroup>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the buttons. Defaults to `horizontal`.

```vue
<template>
	<UFieldGroup orientation="vertical">
		<UButton
			color="neutral"
			variant="subtle"
			label="Submit"
		/>
		<UButton
			color="neutral"
			variant="outline"
			label="Cancel"
		/>
	</UFieldGroup>
</template>
```

## Examples

### With input

You can use components like [Input](/docs/components/input), [InputMenu](/docs/components/input-menu), [Select](/docs/components/select) [SelectMenu](/docs/components/select-menu), etc. within a field group.

```vue
<template>
	<UFieldGroup>
		<UInput
			color="neutral"
			variant="outline"
			placeholder="Enter token"
		/>

		<UButton
			color="neutral"
			variant="subtle"
			icon="i-lucide-clipboard"
		/>
	</UFieldGroup>
</template>
```

### With tooltip

You can use a [Tooltip](/docs/components/tooltip) within a field group.

```vue [FieldGroupTooltipExample.vue]
<template>
	<UFieldGroup>
		<UInput
			color="neutral"
			variant="outline"
			placeholder="Enter token"
		/>

		<UTooltip text="Copy to clipboard">
			<UButton
				color="neutral"
				variant="subtle"
				icon="i-lucide-clipboard"
			/>
		</UTooltip>
	</UFieldGroup>
</template>
```

### With dropdown menu

You can use a [DropdownMenu](/docs/components/dropdown-menu) within a field group.

```vue [FieldGroupDropdownExample.vue]
<script setup lang="ts">
	import type { DropdownMenuItem } from '@nuxt/ui';

	const items: DropdownMenuItem[] = [
		{
			label: 'Team',
			icon: 'i-lucide-users',
		},
		{
			label: 'Invite users',
			icon: 'i-lucide-user-plus',
			children: [
				{
					label: 'Invite by email',
					icon: 'i-lucide-send-horizontal',
				},
				{
					label: 'Invite by link',
					icon: 'i-lucide-link',
				},
			],
		},
		{
			label: 'New team',
			icon: 'i-lucide-plus',
		},
	];
</script>

<template>
	<UFieldGroup>
		<UButton
			color="neutral"
			variant="subtle"
			label="Settings"
		/>

		<UDropdownMenu :items="items">
			<UButton
				color="neutral"
				variant="outline"
				icon="i-lucide-chevron-down"
			/>
		</UDropdownMenu>
	</UFieldGroup>
</template>
```

### With badge

You can use a [Badge](/docs/components/badge) within a field group.

```vue [FieldGroupBadgeExample.vue]
<template>
	<UFieldGroup>
		<UBadge
			color="neutral"
			variant="outline"
			size="lg"
			label="https://"
		/>

		<UInput
			color="neutral"
			variant="outline"
			placeholder="www.example.com"
		/>
	</UFieldGroup>
</template>
```

## API

### Props

```ts
/**
 * Props for the FieldGroup component
 */
interface FieldGroupProps {
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
	 * The orientation the buttons are laid out.
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical' | undefined;
	ui?: { base?: any } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the FieldGroup component
 */
interface FieldGroupSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		fieldGroup: {
			base: 'relative',
			variants: {
				size: {
					xs: '',
					sm: '',
					md: '',
					lg: '',
					xl: '',
				},
				orientation: {
					horizontal: 'inline-flex -space-x-px',
					vertical: 'flex flex-col -space-y-px',
				},
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/FieldGroup.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/field-group.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Icon"
description: "A component to display any icon from Iconify or another component."
canonical_url: "https://ui.nuxt.com/docs/components/icon"

---

# Icon

> A component to display any icon from Iconify or another component.

## Usage

Use the `name` prop to display an icon.

```vue
<template>
	<UIcon
		name="i-lucide-lightbulb"
		class="size-5"
	/>
</template>
```

> [!NOTE]
>
> You can use any name from the [https://iconify.design](https://iconify.design) collection. Browse them easily on [https://icones.js.org](https://icones.js.org) or search directly from your AI assistant using the [`search-icons`](/docs/getting-started/ai/mcp#available-tools) MCP tool.

**Nuxt:**

> [!CAUTION]
> See: /docs/getting-started/integrations/icons/nuxt#collections
>
> It's highly recommended to install the icons collections you need, read more about this.

## Examples

### SVG

You can also pass a Vue component into the `name` prop:

```vue [IconSvgExample.vue]
<script setup lang="ts">
	import { h } from 'vue';

	const IconLightbulb = () =>
		h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, [
			h('path', {
				fill: 'none',
				stroke: 'currentColor',
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				'stroke-width': 2,
				d: 'M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4',
			}),
		]);
</script>

<template>
	<UIcon
		:name="IconLightbulb"
		class="size-5"
	/>
</template>
```

You can define your icon components yourself, or use [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) to import them directly from SVG files:

```vue
<script setup lang="ts">
	import IconLightbulb from '~icons/lucide/lightbulb';
</script>

<template>
	<UIcon
		:name="IconLightbulb"
		class="size-5"
	/>
</template>
```

## API

### Props

```ts
/**
 * Props for the Icon component
 */
interface IconProps {
	name: any;
	mode?: 'svg' | 'css' | undefined;
	size?: string | number | undefined;
	customize?: boolean | IconifyIconCustomizeCallback | null | undefined;
}
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Icon.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/icon.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Kbd"
description: "A kbd element to display a keyboard key."
canonical_url: "https://ui.nuxt.com/docs/components/kbd"

---

# Kbd

> A kbd element to display a keyboard key.

## Usage

Use the default slot to set the value of the Kbd.

```vue
<template>
	<UKbd> K </UKbd>
</template>
```

### Value

Use the `value` prop to set the value of the Kbd.

```vue
<template>
	<UKbd value="K" />
</template>
```

You can pass special keys to the `value` prop that goes through the [`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts) composable. For example, the `meta` key displays as `⌘` on macOS and `Ctrl` on other platforms.

```vue
<template>
	<UKbd value="meta" />
</template>
```

### Color

Use the `color` prop to change the color of the Kbd.

```vue
<template>
	<UKbd color="neutral"> K </UKbd>
</template>
```

### Variant

Use the `variant` prop to change the variant of the Kbd.

```vue
<template>
	<UKbd
		color="neutral"
		variant="solid"
	>
		K
	</UKbd>
</template>
```

### Size

Use the `size` prop to change the size of the Kbd.

```vue
<template>
	<UKbd size="lg"> K </UKbd>
</template>
```

## Examples

### `class` prop

Use the `class` prop to override the base styles of the Badge.

```vue
<template>
	<UKbd
		class="font-bold rounded-full"
		variant="subtle"
	>
		K
	</UKbd>
</template>
```

## API

### Props

```ts
/**
 * Props for the Kbd component
 */
interface KbdProps {
	/**
	 * The element or component this component should render as.
	 * @default 'kbd'
	 */
	as?: any;
	value?: string | undefined;
	/**
	 * @default 'neutral'
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
	 * @default 'outline'
	 */
	variant?: 'outline' | 'soft' | 'subtle' | 'solid' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'sm' | 'md' | 'lg' | undefined;
	ui?: { base?: any } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Kbd component
 */
interface KbdSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		kbd: {
			base: 'inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase',
			variants: {
				color: {
					primary: '',
					secondary: '',
					success: '',
					info: '',
					warning: '',
					error: '',
					neutral: '',
				},
				variant: {
					solid: '',
					outline: '',
					soft: '',
					subtle: '',
				},
				size: {
					sm: 'h-4 min-w-[16px] text-[10px]',
					md: 'h-5 min-w-[20px] text-[11px]',
					lg: 'h-6 min-w-[24px] text-[12px]',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: 'solid',
					class: 'text-inverted bg-primary',
				},
				{
					color: 'secondary',
					variant: 'solid',
					class: 'text-inverted bg-secondary',
				},
				{
					color: 'success',
					variant: 'solid',
					class: 'text-inverted bg-success',
				},
				{
					color: 'info',
					variant: 'solid',
					class: 'text-inverted bg-info',
				},
				{
					color: 'warning',
					variant: 'solid',
					class: 'text-inverted bg-warning',
				},
				{
					color: 'error',
					variant: 'solid',
					class: 'text-inverted bg-error',
				},
				{
					color: 'primary',
					variant: 'outline',
					class: 'ring ring-inset ring-primary/50 text-primary',
				},
				{
					color: 'secondary',
					variant: 'outline',
					class: 'ring ring-inset ring-secondary/50 text-secondary',
				},
				{
					color: 'success',
					variant: 'outline',
					class: 'ring ring-inset ring-success/50 text-success',
				},
				{
					color: 'info',
					variant: 'outline',
					class: 'ring ring-inset ring-info/50 text-info',
				},
				{
					color: 'warning',
					variant: 'outline',
					class: 'ring ring-inset ring-warning/50 text-warning',
				},
				{
					color: 'error',
					variant: 'outline',
					class: 'ring ring-inset ring-error/50 text-error',
				},
				{
					color: 'primary',
					variant: 'soft',
					class: 'text-primary bg-primary/10',
				},
				{
					color: 'secondary',
					variant: 'soft',
					class: 'text-secondary bg-secondary/10',
				},
				{
					color: 'success',
					variant: 'soft',
					class: 'text-success bg-success/10',
				},
				{
					color: 'info',
					variant: 'soft',
					class: 'text-info bg-info/10',
				},
				{
					color: 'warning',
					variant: 'soft',
					class: 'text-warning bg-warning/10',
				},
				{
					color: 'error',
					variant: 'soft',
					class: 'text-error bg-error/10',
				},
				{
					color: 'primary',
					variant: 'subtle',
					class: 'text-primary ring ring-inset ring-primary/25 bg-primary/10',
				},
				{
					color: 'secondary',
					variant: 'subtle',
					class:
						'text-secondary ring ring-inset ring-secondary/25 bg-secondary/10',
				},
				{
					color: 'success',
					variant: 'subtle',
					class: 'text-success ring ring-inset ring-success/25 bg-success/10',
				},
				{
					color: 'info',
					variant: 'subtle',
					class: 'text-info ring ring-inset ring-info/25 bg-info/10',
				},
				{
					color: 'warning',
					variant: 'subtle',
					class: 'text-warning ring ring-inset ring-warning/25 bg-warning/10',
				},
				{
					color: 'error',
					variant: 'subtle',
					class: 'text-error ring ring-inset ring-error/25 bg-error/10',
				},
				{
					color: 'neutral',
					variant: 'solid',
					class: 'text-inverted bg-inverted',
				},
				{
					color: 'neutral',
					variant: 'outline',
					class: 'ring ring-inset ring-accented text-default bg-default',
				},
				{
					color: 'neutral',
					variant: 'soft',
					class: 'text-default bg-elevated',
				},
				{
					color: 'neutral',
					variant: 'subtle',
					class: 'ring ring-inset ring-accented text-default bg-elevated',
				},
			],
			defaultVariants: {
				variant: 'outline',
				color: 'neutral',
				size: 'md',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Kbd.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/kbd.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Progress"
description: "An indicator showing the progress of a task."
canonical_url: "https://ui.nuxt.com/docs/components/progress"

---

# Progress

> An indicator showing the progress of a task.

## Usage

Use the `v-model` directive to control the value of the Progress.

```vue
<script setup lang="ts">
	const value = ref(50);
</script>

<template>
	<UProgress v-model="value" />
</template>
```

> [!NOTE]
>
> Use the [`ProgressGroup`](/docs/components/progress-group) component to split a single bar into multiple segments that add up to a total.

### Max

Use the `max` prop to set the maximum value of the Progress.

```vue
<script setup lang="ts">
	const value = ref(3);
</script>

<template>
	<UProgress
		v-model="value"
		:max="4"
	/>
</template>
```

Use the `max` prop with an array of strings to display the active step under the bar, the maximum value of the Progress is the length of the array.

```vue
<script setup lang="ts">
	const value = ref(3);
</script>

<template>
	<UProgress
		v-model="value"
		:max="['Waiting...', 'Cloning...', 'Migrating...', 'Deploying...', 'Done!']"
	/>
</template>
```

### Status

Use the `status` prop to display the current Progress value above the bar.

```vue
<script setup lang="ts">
	const value = ref(50);
</script>

<template>
	<UProgress
		v-model="value"
		status
	/>
</template>
```

> [!TIP]
>
> The status tracks the end of the bar, use `:ui="{ status: 'w-full' }"` to make it span the full width instead.

### Indeterminate

When no `v-model` is set or the value is `null`, the Progress becomes _indeterminate_. The progress bar is animated as a `carousel`, but you can change it using the [`animation`](#animation) prop.

```vue
<script setup lang="ts">
	const value = ref(null);
</script>

<template>
	<UProgress />
</template>
```

### Animation

Use the `animation` prop to change the animation of the Progress to an inverse carousel, a swinging bar or an elastic bar. Defaults to `carousel`.

```vue
<template>
	<UProgress animation="swing" />
</template>
```

> [!TIP]
>
> The animation is automatically disabled when the user prefers reduced motion, the indeterminate bar is displayed as a full width pulse instead.

### Orientation

Use the `orientation` prop to change the orientation of the Progress. Defaults to `horizontal`.

```vue
<template>
	<UProgress
		orientation="vertical"
		class="h-48"
	/>
</template>
```

### Color

Use the `color` prop to change the color of the Progress.

```vue
<template>
	<UProgress color="neutral" />
</template>
```

> [!TIP]
>
> This prop also accepts any CSS color value for palettes outside the theme.

### Size

Use the `size` prop to change the size of the Progress.

```vue
<template>
	<UProgress size="xl" />
</template>
```

### Inverted

Use the `inverted` prop to visually invert the Progress.

```vue
<template>
	<UProgress
		inverted
		v-model="value"
	/>
</template>
```

## API

### Props

```ts
/**
 * Props for the Progress component
 */
interface ProgressProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  /**
   * The maximum progress value.
   */
  max?: number | any[] | undefined;
  /**
   * Display the current progress value.
   */
  status?: boolean | undefined;
  /**
   * Whether the progress is visually inverted.
   * @default false
   */
  inverted?: boolean | undefined;
  /**
   * @default 'md'
   */
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  /**
   * Any theme color, or any CSS color value for palettes outside the theme.
   * @default 'primary'
   */
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | string & {} | undefined;
  /**
   * The orientation of the progress bar.
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical" | undefined;
  /**
   * The animation of the progress bar.
   * @default 'carousel'
   */
  animation?: "carousel" | "carousel-inverse" | "swing" | "elastic" | undefined;
  ui?: { root?: SlotClass; base?: SlotClass; indicator?: SlotClass; status?: SlotClass; steps?: SlotClass; step?: SlotClass; } | undefined;
  /**
   * A function to get the accessible label text in a human-readable format.
   *
   *  If not provided, the value label will be read as the numeric value as a percentage of the max value.
   */
  getValueLabel?: (value: number | null | undefined, max: number): string | undefined | undefined;
  /**
   * A function to get the accessible value text representing the current value in a human-readable format.
   */
  getValueText?: (value: number | null | undefined, max: number): string | undefined | undefined;
  /**
   * The progress value. Can be bind as `v-model`.
   * @default null
   */
  modelValue?: null | number | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Progress component
 */
interface ProgressSlots {
	status(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Progress component
 */
interface ProgressEmits {
  update:modelValue: (payload: [value: string[] | undefined]) => void;
  update:max: (payload: [value: number]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		progress: {
			slots: {
				root: 'gap-2',
				base: 'relative overflow-hidden rounded-full bg-accented',
				indicator:
					'rounded-full size-full transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:data-[state=indeterminate]:animate-pulse',
				status:
					'flex text-dimmed duration-200 ease-out motion-reduce:transition-none',
				steps: 'grid items-end',
				step: 'truncate text-end row-start-1 col-start-1 transition-opacity ease-out',
			},
			variants: {
				animation: {
					carousel: '',
					'carousel-inverse': '',
					swing: '',
					elastic: '',
				},
				color: {
					primary: {
						indicator: 'bg-primary',
						steps: 'text-primary',
					},
					secondary: {
						indicator: 'bg-secondary',
						steps: 'text-secondary',
					},
					success: {
						indicator: 'bg-success',
						steps: 'text-success',
					},
					info: {
						indicator: 'bg-info',
						steps: 'text-info',
					},
					warning: {
						indicator: 'bg-warning',
						steps: 'text-warning',
					},
					error: {
						indicator: 'bg-error',
						steps: 'text-error',
					},
					neutral: {
						indicator: 'bg-inverted',
						steps: 'text-highlighted',
					},
				},
				size: {
					'2xs': {
						status: 'text-xs',
						steps: 'text-xs',
					},
					xs: {
						status: 'text-xs',
						steps: 'text-xs',
					},
					sm: {
						status: 'text-sm',
						steps: 'text-sm',
					},
					md: {
						status: 'text-sm',
						steps: 'text-sm',
					},
					lg: {
						status: 'text-sm',
						steps: 'text-sm',
					},
					xl: {
						status: 'text-base',
						steps: 'text-base',
					},
					'2xl': {
						status: 'text-base',
						steps: 'text-base',
					},
				},
				step: {
					active: {
						step: 'opacity-100',
					},
					first: {
						step: 'opacity-100 text-muted',
					},
					other: {
						step: 'opacity-0',
					},
					last: {
						step: '',
					},
				},
				orientation: {
					horizontal: {
						root: 'w-full flex flex-col',
						base: 'w-full',
						status:
							'flex-row items-center justify-end w-(--percent) min-w-fit transition-[width]',
					},
					vertical: {
						root: 'h-full flex flex-row-reverse',
						base: 'h-full',
						status:
							'flex-col justify-end h-(--percent) min-h-fit transition-[height]',
					},
				},
				inverted: {
					true: {
						status: 'self-end',
					},
				},
			},
			compoundVariants: [
				{
					inverted: true,
					orientation: 'horizontal',
					class: {
						step: 'text-start',
						status: 'flex-row-reverse',
					},
				},
				{
					inverted: true,
					orientation: 'vertical',
					class: {
						steps: 'items-start',
						status: 'flex-col-reverse',
					},
				},
				{
					orientation: 'horizontal',
					size: '2xs',
					class: 'h-px',
				},
				{
					orientation: 'horizontal',
					size: 'xs',
					class: 'h-0.5',
				},
				{
					orientation: 'horizontal',
					size: 'sm',
					class: 'h-1',
				},
				{
					orientation: 'horizontal',
					size: 'md',
					class: 'h-2',
				},
				{
					orientation: 'horizontal',
					size: 'lg',
					class: 'h-3',
				},
				{
					orientation: 'horizontal',
					size: 'xl',
					class: 'h-4',
				},
				{
					orientation: 'horizontal',
					size: '2xl',
					class: 'h-5',
				},
				{
					orientation: 'vertical',
					size: '2xs',
					class: 'w-px',
				},
				{
					orientation: 'vertical',
					size: 'xs',
					class: 'w-0.5',
				},
				{
					orientation: 'vertical',
					size: 'sm',
					class: 'w-1',
				},
				{
					orientation: 'vertical',
					size: 'md',
					class: 'w-2',
				},
				{
					orientation: 'vertical',
					size: 'lg',
					class: 'w-3',
				},
				{
					orientation: 'vertical',
					size: 'xl',
					class: 'w-4',
				},
				{
					orientation: 'vertical',
					size: '2xl',
					class: 'w-5',
				},
				{
					orientation: 'horizontal',
					animation: 'carousel',
					class: {
						indicator:
							'motion-safe:data-[state=indeterminate]:animate-[carousel_2s_linear_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_linear_infinite]',
					},
				},
				{
					orientation: 'vertical',
					animation: 'carousel',
					class: {
						indicator:
							'motion-safe:data-[state=indeterminate]:animate-[carousel-vertical_2s_linear_infinite]',
					},
				},
				{
					orientation: 'horizontal',
					animation: 'carousel-inverse',
					class: {
						indicator:
							'motion-safe:data-[state=indeterminate]:animate-[carousel-inverse_2s_linear_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_linear_infinite]',
					},
				},
				{
					orientation: 'vertical',
					animation: 'carousel-inverse',
					class: {
						indicator:
							'motion-safe:data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_linear_infinite]',
					},
				},
				{
					orientation: 'horizontal',
					animation: 'swing',
					class: {
						indicator:
							'motion-safe:data-[state=indeterminate]:animate-[swing_2s_var(--ease-in-out)_infinite]',
					},
				},
				{
					orientation: 'vertical',
					animation: 'swing',
					class: {
						indicator:
							'motion-safe:data-[state=indeterminate]:animate-[swing-vertical_2s_var(--ease-in-out)_infinite]',
					},
				},
				{
					orientation: 'horizontal',
					animation: 'elastic',
					class: {
						indicator:
							'relative motion-safe:data-[state=indeterminate]:animate-[elastic_2s_var(--ease-in-out)_infinite]',
					},
				},
				{
					orientation: 'vertical',
					animation: 'elastic',
					class: {
						indicator:
							'relative motion-safe:data-[state=indeterminate]:animate-[elastic-vertical_2s_var(--ease-in-out)_infinite]',
					},
				},
			],
			defaultVariants: {
				animation: 'carousel',
				color: 'primary',
				size: 'md',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Progress.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/progress.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProgressGroup"
description: "A progress bar split into multiple segments that add up to a total."
canonical_url: "https://ui.nuxt.com/docs/components/progress-group"

---

# ProgressGroup

> A progress bar split into multiple segments that add up to a total.

## Usage

Use the ProgressGroup component to display multiple values as segments of a single progress bar.

```vue
<script setup lang="ts">
	import type { ProgressGroupItem } from '@nuxt/ui';

	const items = ref<ProgressGroupItem[]>([
		{
			label: 'System',
			value: 24,
			color: 'neutral',
			icon: 'i-lucide-cog',
		},
		{
			label: 'Apps',
			value: 8,
			color: 'error',
			icon: 'i-lucide-app-window',
		},
		{
			label: 'Documents',
			value: 12,
			color: 'warning',
			icon: 'i-lucide-file',
		},
		{
			label: 'Multimedia',
			value: 42,
			color: 'success',
			icon: 'i-lucide-film',
		},
	]);
</script>

<template>
	<UProgressGroup
		:max="128"
		:items="items"
		class="w-96"
	/>
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- `icon?: string`
- `value?: number`
- [`color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | (string & {})`](#with-custom-colors)
- `slot?: string`
- `class?: any`
- `ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }`

```vue
<script setup lang="ts">
	import type { ProgressGroupItem } from '@nuxt/ui';

	const items = ref<ProgressGroupItem[]>([
		{
			label: 'Compute',
			value: 42,
			color: 'primary',
		},
		{
			label: 'Storage',
			value: 18,
			color: 'info',
		},
		{
			label: 'Bandwidth',
			value: 9,
			color: 'warning',
		},
	]);
</script>

<template>
	<UProgressGroup
		:items="items"
		class="w-96"
	/>
</template>
```

> [!NOTE]
>
> Items without an `icon` get a colored dot in the list instead.

### Max

Use the `max` prop to set the value all items add up to. Defaults to `100`.

```vue
<script setup lang="ts">
	import type { ProgressGroupItem } from '@nuxt/ui';

	const items = ref<ProgressGroupItem[]>([
		{
			label: 'Used',
			value: 128,
			color: 'primary',
		},
		{
			label: 'Reserved',
			value: 64,
			color: 'neutral',
		},
	]);
</script>

<template>
	<UProgressGroup
		:max="512"
		:items="items"
		class="w-96"
	/>
</template>
```

> [!NOTE]
>
> Values are clamped between `0` and `max`, and segments that add up to more than `max` share the track proportionally.

### Status

Use the `status` prop to display the summed value above the bar.

```vue
<script setup lang="ts">
	import type { ProgressGroupItem } from '@nuxt/ui';

	const items = ref<ProgressGroupItem[]>([
		{
			label: 'System',
			value: 24,
			color: 'neutral',
		},
		{
			label: 'Apps',
			value: 8,
			color: 'error',
		},
		{
			label: 'Multimedia',
			value: 42,
			color: 'success',
		},
	]);
</script>

<template>
	<UProgressGroup
		status
		:max="128"
		:items="items"
		class="w-96"
	/>
</template>
```

> [!TIP]
>
> The status tracks the end of the bar, use `:ui="{ status: 'w-full' }"` to make it span the full width instead.

### Color

Use the `color` prop to change the color of every segment that doesn't set its own.

```vue
<script setup lang="ts">
	import type { ProgressGroupItem } from '@nuxt/ui';

	const items = ref<ProgressGroupItem[]>([
		{
			label: 'Read',
			value: 42,
		},
		{
			label: 'Write',
			value: 18,
		},
	]);
</script>

<template>
	<UProgressGroup
		color="neutral"
		:items="items"
		class="w-96"
	/>
</template>
```

> [!TIP]
>
> Both this prop and each item's `color` accept any CSS color value, which is handy for palettes outside the theme.

### Size

Use the `size` prop to change the size of the ProgressGroup.

```vue
<script setup lang="ts">
	import type { ProgressGroupItem } from '@nuxt/ui';

	const items = ref<ProgressGroupItem[]>([
		{
			label: 'Read',
			value: 42,
			color: 'primary',
		},
		{
			label: 'Write',
			value: 18,
			color: 'info',
		},
	]);
</script>

<template>
	<UProgressGroup
		size="xl"
		:items="items"
		class="w-96"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the ProgressGroup. Defaults to `horizontal`.

```vue
<script setup lang="ts">
	import type { ProgressGroupItem } from '@nuxt/ui';

	const items = ref<ProgressGroupItem[]>([
		{
			label: 'Read',
			value: 42,
			color: 'primary',
		},
		{
			label: 'Write',
			value: 18,
			color: 'info',
		},
	]);
</script>

<template>
	<UProgressGroup
		orientation="vertical"
		:items="items"
		class="h-48"
	/>
</template>
```

## Examples

### With status slot

Use the `#status` slot to replace the summed percentage with your own content.

```vue [ProgressGroupStatusExample.vue]
<script setup lang="ts">
	import type { ProgressGroupItem } from '@nuxt/ui';

	const max = 128;

	const items: ProgressGroupItem[] = [
		{ label: 'System', value: 24, color: 'neutral', icon: 'i-lucide-cog' },
		{ label: 'Apps', value: 8, color: 'error', icon: 'i-lucide-app-window' },
		{ label: 'Documents', value: 12, color: 'warning', icon: 'i-lucide-file' },
		{ label: 'Multimedia', value: 42, color: 'success', icon: 'i-lucide-film' },
	];

	const used = items.reduce((total, item) => total + (item.value ?? 0), 0);
</script>

<template>
	<UProgressGroup
		:items="items"
		:max="max"
		status
		class="w-96"
		:ui="{ status: 'w-full justify-between' }"
	>
		<template #status>
			<p>{{ used }}GB used</p>
			<p class="text-muted">{{ max - used }}GB remaining</p>
		</template>
	</UProgressGroup>
</template>
```

### With item slots

Use the `#item-label` and `#item-trailing` slots to change what each entry displays. Both receive the `item`, its `index` and its `percent`.

```vue [ProgressGroupItemExample.vue]
<script setup lang="ts">
	import type { ProgressGroupItem } from '@nuxt/ui';

	const items: ProgressGroupItem[] = [
		{ label: 'System', value: 24, color: 'neutral' },
		{ label: 'Apps', value: 8, color: 'error' },
		{ label: 'Documents', value: 12, color: 'warning' },
		{ label: 'Multimedia', value: 42, color: 'success' },
	];
</script>

<template>
	<UProgressGroup
		:items="items"
		:max="128"
		class="w-96"
	>
		<template #item-label="{ item }">
			<span class="font-medium">{{ item.label }}</span>
		</template>

		<template #item-trailing="{ item }"> {{ item.value }}GB </template>
	</UProgressGroup>
</template>
```

### With custom colors

Give each item a CSS color to build a breakdown outside the theme palette.

```vue [ProgressGroupCustomColorExample.vue]
<script setup lang="ts">
	import type { ProgressGroupItem } from '@nuxt/ui';

	const max = 128;

	const items: ProgressGroupItem[] = [
		{ label: 'System prompt', value: 4.2, color: 'var(--color-neutral-400)' },
		{
			label: 'Tool definitions',
			value: 18.4,
			color: 'var(--color-violet-400)',
		},
		{ label: 'Rules', value: 12.8, color: 'var(--color-green-400)' },
		{ label: 'Skills', value: 7.1, color: 'var(--color-amber-400)' },
		{
			label: 'MCP & dynamic tools',
			value: 17.1,
			color: 'var(--color-rose-400)',
		},
		{
			label: 'Subagent definitions',
			value: 5.5,
			color: 'var(--color-sky-400)',
		},
		{ label: 'Conversation', value: 24.6, color: 'var(--color-orange-400)' },
	];

	const used = items.reduce((total, item) => total + (item.value ?? 0), 0);
</script>

<template>
	<UProgressGroup
		:items="items"
		:max="max"
		status
		class="w-96"
		:ui="{ status: 'w-full justify-between' }"
	>
		<template #status="{ percent }">
			<p>{{ percent }}% Full</p>
			<p class="text-muted">~{{ used.toFixed(1) }}K / {{ max }}K Tokens</p>
		</template>

		<template #item-trailing="{ item }"> {{ item.value }}K </template>
	</UProgressGroup>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProgressGroup component
 */
interface ProgressGroupProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	items?: T[] | undefined;
	/**
	 * The value all items add up to, used to compute each segment's share of the track.
	 * @default 100
	 */
	max?: number | undefined;
	/**
	 * Display the summed progress value.
	 */
	status?: boolean | undefined;
	/**
	 * @default 'md'
	 */
	size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
	/**
	 * Any theme color, or any CSS color value for palettes outside the theme.
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
		| (string & {})
		| undefined;
	/**
	 * The orientation of the progress bar.
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical' | undefined;
	ui?:
		| {
				root?: SlotClass;
				base?: SlotClass;
				segment?: SlotClass;
				indicator?: SlotClass;
				status?: SlotClass;
				list?: SlotClass;
				item?: SlotClass;
				itemLeadingIcon?: SlotClass;
				itemLeadingDot?: SlotClass;
				itemLabel?: SlotClass;
				itemTrailing?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProgressGroup component
 */
interface ProgressGroupSlots {
  status(): any;
  item(): any;
  item-leading(): any;
  item-label(): any;
  item-trailing(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		progressGroup: {
			slots: {
				root: 'gap-2',
				base: 'flex overflow-hidden rounded-full bg-accented',
				segment: 'duration-200 ease-out motion-reduce:transition-none',
				indicator: 'size-full',
				status:
					'flex text-dimmed duration-200 ease-out motion-reduce:transition-none',
				list: 'flex flex-col gap-1',
				item: 'flex items-center gap-1.5 min-w-0',
				itemLeadingIcon: 'shrink-0',
				itemLeadingDot: 'shrink-0 rounded-full',
				itemLabel: 'truncate',
				itemTrailing: 'ms-auto shrink-0 text-dimmed',
			},
			variants: {
				color: {
					primary: {
						indicator: 'bg-primary',
						itemLeadingIcon: 'text-primary',
						itemLeadingDot: 'bg-primary',
					},
					secondary: {
						indicator: 'bg-secondary',
						itemLeadingIcon: 'text-secondary',
						itemLeadingDot: 'bg-secondary',
					},
					success: {
						indicator: 'bg-success',
						itemLeadingIcon: 'text-success',
						itemLeadingDot: 'bg-success',
					},
					info: {
						indicator: 'bg-info',
						itemLeadingIcon: 'text-info',
						itemLeadingDot: 'bg-info',
					},
					warning: {
						indicator: 'bg-warning',
						itemLeadingIcon: 'text-warning',
						itemLeadingDot: 'bg-warning',
					},
					error: {
						indicator: 'bg-error',
						itemLeadingIcon: 'text-error',
						itemLeadingDot: 'bg-error',
					},
					neutral: {
						indicator: 'bg-inverted',
						itemLeadingIcon: 'text-highlighted',
						itemLeadingDot: 'bg-inverted',
					},
				},
				size: {
					'2xs': {
						status: 'text-xs',
						list: 'text-xs',
						itemLeadingIcon: 'size-3',
						itemLeadingDot: 'size-1.5',
					},
					xs: {
						status: 'text-xs',
						list: 'text-xs',
						itemLeadingIcon: 'size-3',
						itemLeadingDot: 'size-1.5',
					},
					sm: {
						status: 'text-sm',
						list: 'text-sm',
						itemLeadingIcon: 'size-4',
						itemLeadingDot: 'size-2',
					},
					md: {
						status: 'text-sm',
						list: 'text-sm',
						itemLeadingIcon: 'size-4',
						itemLeadingDot: 'size-2',
					},
					lg: {
						status: 'text-sm',
						list: 'text-sm',
						itemLeadingIcon: 'size-4',
						itemLeadingDot: 'size-2',
					},
					xl: {
						status: 'text-base',
						list: 'text-base',
						itemLeadingIcon: 'size-5',
						itemLeadingDot: 'size-2.5',
					},
					'2xl': {
						status: 'text-base',
						list: 'text-base',
						itemLeadingIcon: 'size-5',
						itemLeadingDot: 'size-2.5',
					},
				},
				orientation: {
					horizontal: {
						root: 'w-full flex flex-col',
						base: 'w-full flex-row',
						segment: 'h-full transition-[width]',
						status:
							'flex-row items-center justify-end w-(--percent) min-w-fit transition-[width]',
					},
					vertical: {
						root: 'h-full flex flex-row',
						base: 'h-full flex-col',
						segment: 'w-full transition-[height]',
						status:
							'flex-col justify-end h-(--percent) min-h-fit transition-[height]',
					},
				},
			},
			compoundVariants: [
				{
					orientation: 'horizontal',
					size: '2xs',
					class: 'h-px',
				},
				{
					orientation: 'horizontal',
					size: 'xs',
					class: 'h-0.5',
				},
				{
					orientation: 'horizontal',
					size: 'sm',
					class: 'h-1',
				},
				{
					orientation: 'horizontal',
					size: 'md',
					class: 'h-2',
				},
				{
					orientation: 'horizontal',
					size: 'lg',
					class: 'h-3',
				},
				{
					orientation: 'horizontal',
					size: 'xl',
					class: 'h-4',
				},
				{
					orientation: 'horizontal',
					size: '2xl',
					class: 'h-5',
				},
				{
					orientation: 'vertical',
					size: '2xs',
					class: 'w-px',
				},
				{
					orientation: 'vertical',
					size: 'xs',
					class: 'w-0.5',
				},
				{
					orientation: 'vertical',
					size: 'sm',
					class: 'w-1',
				},
				{
					orientation: 'vertical',
					size: 'md',
					class: 'w-2',
				},
				{
					orientation: 'vertical',
					size: 'lg',
					class: 'w-3',
				},
				{
					orientation: 'vertical',
					size: 'xl',
					class: 'w-4',
				},
				{
					orientation: 'vertical',
					size: '2xl',
					class: 'w-5',
				},
			],
			defaultVariants: {
				color: 'primary',
				size: 'md',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/ProgressGroup.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/progress-group.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Separator"
description: "Separates content horizontally or vertically."
canonical_url: "https://ui.nuxt.com/docs/components/separator"

---

# Separator

> Separates content horizontally or vertically.

## Usage

Use the Separator component as-is to separate content.

```vue
<template>
	<USeparator />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Separator. Defaults to `horizontal`.

```vue
<template>
	<USeparator
		orientation="vertical"
		class="h-48"
	/>
</template>
```

### Label

Use the `label` prop to display a label in the middle of the Separator.

```vue
<template>
	<USeparator label="Hello World" />
</template>
```

### Position `4.8+`

Use the `position` prop to change the position of the content of the Separator. Defaults to `center`.

```vue
<template>
	<USeparator
		position="start"
		label="Hello World"
	/>
</template>
```

### Icon

Use the `icon` prop to display an icon in the middle of the Separator.

```vue
<template>
	<USeparator icon="i-simple-icons-nuxtdotjs" />
</template>
```

### Avatar

Use the `avatar` prop to display an avatar in the middle of the Separator.

```vue
<template>
	<USeparator
		:avatar="{
			src: 'https://github.com/nuxt.png',
			loading: 'lazy',
		}"
	/>
</template>
```

### Color

Use the `color` prop to change the color of the Separator. Defaults to `neutral`.

```vue
<template>
	<USeparator
		color="primary"
		type="solid"
	/>
</template>
```

### Type

Use the `type` prop to change the type of the Separator. Defaults to `solid`.

```vue
<template>
	<USeparator type="dashed" />
</template>
```

### Size

Use the `size` prop to change the size of the Separator. Defaults to `xs`.

```vue
<template>
	<USeparator size="lg" />
</template>
```

## API

### Props

```ts
/**
 * Props for the Separator component
 */
interface SeparatorProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * Display a label on the separator.
	 */
	label?: string | undefined;
	/**
	 * Display an icon on the separator.
	 */
	icon?: any;
	/**
	 * Display an avatar on the separator.
	 */
	avatar?: AvatarProps | undefined;
	/**
	 * @default 'neutral'
	 */
	color?:
		| 'error'
		| 'neutral'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning'
		| undefined;
	/**
	 * @default 'xs'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * @default 'solid'
	 */
	type?: 'solid' | 'dashed' | 'dotted' | undefined;
	/**
	 * The orientation of the separator.
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical' | undefined;
	/**
	 * The position of the content.
	 * @default 'center'
	 */
	position?: 'center' | 'start' | 'end' | undefined;
	ui?:
		| {
				root?: SlotClass;
				border?: SlotClass;
				container?: SlotClass;
				icon?: SlotClass;
				avatar?: SlotClass;
				avatarSize?: SlotClass;
				label?: SlotClass;
		  }
		| undefined;
	/**
	 * Whether or not the component is purely decorative. <br>When `true`, accessibility-related attributes
	 * are updated so that that the rendered element is removed from the accessibility tree.
	 */
	decorative?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Separator component
 */
interface SeparatorSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		separator: {
			slots: {
				root: 'flex items-center align-center text-center',
				border: '',
				container: 'font-medium text-default flex',
				icon: 'shrink-0 size-5',
				avatar: 'shrink-0',
				avatarSize: '2xs',
				label: 'text-sm',
			},
			variants: {
				color: {
					primary: {
						border: 'border-primary',
					},
					secondary: {
						border: 'border-secondary',
					},
					success: {
						border: 'border-success',
					},
					info: {
						border: 'border-info',
					},
					warning: {
						border: 'border-warning',
					},
					error: {
						border: 'border-error',
					},
					neutral: {
						border: 'border-default',
					},
				},
				orientation: {
					horizontal: {
						root: 'w-full flex-row',
						border: 'w-full',
						container: 'whitespace-nowrap',
					},
					vertical: {
						root: 'h-full flex-col',
						border: 'h-full',
						container: '',
					},
				},
				size: {
					xs: '',
					sm: '',
					md: '',
					lg: '',
					xl: '',
				},
				position: {
					start: '',
					center: '',
					end: '',
				},
				type: {
					solid: {
						border: 'border-solid',
					},
					dashed: {
						border: 'border-dashed',
					},
					dotted: {
						border: 'border-dotted',
					},
				},
			},
			compoundVariants: [
				{
					orientation: 'horizontal',
					position: 'start',
					class: {
						container: 'me-3',
					},
				},
				{
					orientation: 'horizontal',
					position: 'center',
					class: {
						container: 'mx-3',
					},
				},
				{
					orientation: 'horizontal',
					position: 'end',
					class: {
						container: 'ms-3',
					},
				},
				{
					orientation: 'vertical',
					position: 'start',
					class: {
						container: 'mb-2',
					},
				},
				{
					orientation: 'vertical',
					position: 'center',
					class: {
						container: 'my-2',
					},
				},
				{
					orientation: 'vertical',
					position: 'end',
					class: {
						container: 'mt-2',
					},
				},
				{
					orientation: 'horizontal',
					size: 'xs',
					class: {
						border: 'border-t',
					},
				},
				{
					orientation: 'horizontal',
					size: 'sm',
					class: {
						border: 'border-t-[2px]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'md',
					class: {
						border: 'border-t-[3px]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'lg',
					class: {
						border: 'border-t-[4px]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'xl',
					class: {
						border: 'border-t-[5px]',
					},
				},
				{
					orientation: 'vertical',
					size: 'xs',
					class: {
						border: 'border-s',
					},
				},
				{
					orientation: 'vertical',
					size: 'sm',
					class: {
						border: 'border-s-[2px]',
					},
				},
				{
					orientation: 'vertical',
					size: 'md',
					class: {
						border: 'border-s-[3px]',
					},
				},
				{
					orientation: 'vertical',
					size: 'lg',
					class: {
						border: 'border-s-[4px]',
					},
				},
				{
					orientation: 'vertical',
					size: 'xl',
					class: {
						border: 'border-s-[5px]',
					},
				},
			],
			defaultVariants: {
				color: 'neutral',
				size: 'xs',
				type: 'solid',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Separator.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/separator.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Skeleton"
description: "A placeholder to show while content is loading."
canonical_url: "https://ui.nuxt.com/docs/components/skeleton"

---

# Skeleton

> A placeholder to show while content is loading.

## Usage

Use the Skeleton component as-is to display a placeholder.

```vue [SkeletonExample.vue]
<template>
	<div class="flex items-center gap-4">
		<USkeleton class="size-12 rounded-full" />

		<div class="grid gap-2">
			<USkeleton class="h-4 w-[250px]" />
			<USkeleton class="h-4 w-[200px]" />
		</div>
	</div>
</template>
```

## API

### Props

```ts
/**
 * Props for the Skeleton component
 */
interface SkeletonProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	ui?: { base?: any } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Skeleton component
 */
interface SkeletonSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		skeleton: {
			base: 'animate-pulse rounded-md bg-elevated',
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Skeleton.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/skeleton.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

Layout
App
Container
Error
Footer
Header
Main
Sidebar
Splitter
New
Theme

---

title: "App"
description: "A wrapper to provide global configuration, toasts and tooltips to your app."
canonical_url: "https://ui.nuxt.com/docs/components/app"

---

# App

> A wrapper to provide global configuration, toasts and tooltips to your app.

## Usage

This component implements Reka UI [ConfigProvider](https://reka-ui.com/docs/utilities/config-provider) to provide global configuration to all components:

- Enables all primitives to inherit global reading direction.
- Enables changing the behavior of scroll body when setting body lock.
- Much more controls to prevent layout shifts.

It's also using [ToastProvider](https://reka-ui.com/docs/components/toast#provider) and [TooltipProvider](https://reka-ui.com/docs/components/tooltip#provider) to provide global toasts and tooltips, as well as programmatic modals and slideovers.

Wrap your entire application with the App component in your `app.vue` file:

```vue [app.vue]
<template>
	<UApp>
		<NuxtPage />
	</UApp>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/i18n/nuxt#locale
>
> Learn how to use the `locale` prop to change the locale of your app. This also controls the date/time format in components like Calendar, InputDate, and InputTime.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/i18n/vue#locale
>
> Learn how to use the `locale` prop to change the locale of your app. This also controls the date/time format in components like Calendar, InputDate, and InputTime.

## API

### Props

```ts
/**
 * Props for the App component
 */
interface AppProps {
	tooltip?: TooltipProviderProps | undefined;
	toaster?: null | ToasterProps | undefined;
	locale?: Locale<T> | undefined;
	/**
	 * @default 'body'
	 */
	portal?: string | false | true | HTMLElement | undefined;
	/**
	 * The global reading direction of your application. This will be inherited by all primitives.
	 * @default 'ltr'
	 */
	dir?: 'ltr' | 'rtl' | undefined;
	/**
	 * The global scroll body behavior of your application. This will be inherited by the related primitives.
	 */
	scrollBody?: boolean | ScrollBodyOption | undefined;
	/**
	 * The global `nonce` value of your application. This will be inherited by the related primitives.
	 */
	nonce?: string | undefined;
}
```

### Slots

```ts
/**
 * Slots for the App component
 */
interface AppSlots {
	default(): any;
}
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/App.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/app.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Container"
description: "A layout element to center and constrain the width of your content."
canonical_url: "https://ui.nuxt.com/docs/components/container"

---

# Container

> A layout element to center and constrain the width of your content.

## Usage

Use the default slot to center and constrain the width of your content.

> [!TIP]
> See: /docs/getting-started/theme/css-variables#container
>
> Its max width is controlled by the `--ui-container` CSS variable.

```vue [ContainerExample.vue]
<template>
	<UContainer>
		<Placeholder class="h-32" />
	</UContainer>
</template>
```

## API

### Props

```ts
/**
 * Props for the Container component
 */
interface ContainerProps {
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
 * Slots for the Container component
 */
interface ContainerSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		container: {
			base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8',
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Container.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/container.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Footer"
description: "A responsive footer for your site links and legal notices."
canonical_url: "https://ui.nuxt.com/docs/components/footer"

---

# Footer

> A responsive footer for your site links and legal notices.

## Usage

The Footer component renders a `<footer>` element.

Use the `left`, `default` and `right` slots to customize the footer.

```vue [FooterExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items: NavigationMenuItem[] = [
		{
			label: 'Figma Kit',
			to: 'https://go.nuxt.com/figma-ui',
			target: '_blank',
		},
		{
			label: 'Playground',
			to: 'https://stackblitz.com/edit/nuxt-ui',
			target: '_blank',
		},
		{
			label: 'Releases',
			to: 'https://github.com/nuxt/ui/releases',
			target: '_blank',
		},
	];
</script>

<template>
	<UFooter>
		<template #left>
			<p class="text-muted text-sm">
				Copyright © {{ new Date().getFullYear() }}
			</p>
		</template>

		<UNavigationMenu
			:items="items"
			variant="link"
		/>

		<template #right>
			<UButton
				icon="i-simple-icons-discord"
				color="neutral"
				variant="ghost"
				to="https://go.nuxt.com/discord"
				target="_blank"
				aria-label="Discord"
			/>
			<UButton
				icon="i-simple-icons-x"
				color="neutral"
				variant="ghost"
				to="https://go.nuxt.com/x"
				target="_blank"
				aria-label="X"
			/>
			<UButton
				icon="i-simple-icons-github"
				color="neutral"
				variant="ghost"
				to="https://github.com/nuxt/nuxt"
				target="_blank"
				aria-label="GitHub"
			/>
		</template>
	</UFooter>
</template>
```

> [!NOTE]
>
> In this example, we use the [NavigationMenu](/docs/components/navigation-menu) component to render the footer links in the center.

> [!TIP]
> See: /docs/components/footer-columns
>
> You can use the `FooterColumns` component to display a list of links inside the `top` slot.

## Examples

### Within `app.vue`

Use the Footer component in your `app.vue` or in a layout:

```vue [app.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items: NavigationMenuItem[] = [
		{
			label: 'Figma Kit',
			to: 'https://go.nuxt.com/figma-ui',
			target: '_blank',
		},
		{
			label: 'Playground',
			to: 'https://stackblitz.com/edit/nuxt-ui',
			target: '_blank',
		},
		{
			label: 'Releases',
			to: 'https://github.com/nuxt/ui/releases',
			target: '_blank',
		},
	];
</script>

<template>
	<UApp>
		<UHeader />

		<UMain>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</UMain>

		<USeparator
			icon="i-simple-icons-nuxtdotjs"
			type="dashed"
			class="h-px"
		/>

		<UFooter>
			<template #left>
				<p class="text-muted text-sm">
					Copyright © {{ new Date().getFullYear() }}
				</p>
			</template>

			<UNavigationMenu
				:items="items"
				variant="link"
			/>

			<template #right>
				<UButton
					icon="i-simple-icons-discord"
					color="neutral"
					variant="ghost"
					to="https://go.nuxt.com/discord"
					target="_blank"
					aria-label="Discord"
				/>
				<UButton
					icon="i-simple-icons-x"
					color="neutral"
					variant="ghost"
					to="https://go.nuxt.com/x"
					target="_blank"
					aria-label="X"
				/>
				<UButton
					icon="i-simple-icons-github"
					color="neutral"
					variant="ghost"
					to="https://github.com/nuxt/nuxt"
					target="_blank"
					aria-label="GitHub"
				/>
			</template>
		</UFooter>
	</UApp>
</template>
```

> [!NOTE]
>
> In this example, we use the [Separator](/docs/components/separator) component to add a border above the footer.

## API

### Props

```ts
/**
 * Props for the Footer component
 */
interface FooterProps {
	/**
	 * The element or component this component should render as.
	 * @default 'footer'
	 */
	as?: any;
	ui?:
		| {
				root?: SlotClass;
				top?: SlotClass;
				bottom?: SlotClass;
				container?: SlotClass;
				left?: SlotClass;
				center?: SlotClass;
				right?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the Footer component
 */
interface FooterSlots {
	left(): any;
	default(): any;
	right(): any;
	top(): any;
	bottom(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		footer: {
			slots: {
				root: '',
				top: 'py-8 lg:py-12',
				bottom: 'py-8 lg:py-12',
				container:
					'py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3',
				left: 'flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1',
				center: 'mt-3 lg:mt-0 lg:order-2 flex items-center justify-center',
				right:
					'lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Footer.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/footer.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Header"
description: "A responsive header for your site navigation."
canonical_url: "https://ui.nuxt.com/docs/components/header"

---

# Header

> A responsive header for your site navigation.

## Usage

The Header component renders a `<header>` element.

> [!TIP]
> See: /docs/getting-started/theme/css-variables#header
>
> Its height is defined through a `--ui-header-height` CSS variable.

Use the `left`, `default` and `right` slots to customize the header and the `body` or `content` slots to customize the header menu.

```vue [HeaderExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const route = useRoute();

	const items = computed<NavigationMenuItem[]>(() => [
		{
			label: 'Docs',
			to: '/docs/getting-started',
			active: route.path.startsWith('/docs/getting-started'),
		},
		{
			label: 'Components',
			to: '/docs/components',
			active: route.path.startsWith('/docs/components'),
		},
		{
			label: 'Figma',
			to: 'https://go.nuxt.com/figma-ui',
			target: '_blank',
		},
		{
			label: 'Releases',
			to: 'https://github.com/nuxt/ui/releases',
			target: '_blank',
		},
	]);
</script>

<template>
	<UHeader>
		<template #title>
			<Logo class="h-6 w-auto" />
		</template>

		<UNavigationMenu :items="items" />

		<template #right>
			<UColorModeButton />

			<UTooltip
				text="Open on GitHub"
				:kbds="['meta', 'G']"
			>
				<UButton
					color="neutral"
					variant="ghost"
					to="https://github.com/nuxt/ui"
					target="_blank"
					icon="i-simple-icons-github"
					aria-label="GitHub"
				/>
			</UTooltip>
		</template>
	</UHeader>
</template>
```

> [!NOTE]
>
> In this example, we use the [NavigationMenu](/docs/components/navigation-menu) component to render the header links in the center.

### Title

Use the `title` prop to change the title of the header. Defaults to `Nuxt UI`.

```vue
<template>
	<UHeader title="Nuxt UI" />
</template>
```

You can also use the `title` slot to add your own logo.

> [!TIP]
> See: #props
>
> You should still add the `title` prop to replace the default `aria-label` of the link.

```vue
<template>
	<UHeader>
		<template #title>
			<Logo class="h-6 w-auto" /> </template
	></UHeader>
</template>
```

### To

Use the `to` prop to change the link of the title. Defaults to `/`.

```vue
<template>
	<UHeader to="/docs" />
</template>
```

You can also use the `left` slot to override the link entirely.

```vue
<template>
	<UHeader>
		<template #left>
			<NuxtLink to="/docs">
				<Logo class="h-6 w-auto" />
			</NuxtLink> </template
	></UHeader>
</template>
```

### Mode

Use the `mode` prop to change the mode of the header menu. Defaults to `modal`.

Use the `body` slot to fill the menu body (under the header) or the `content` slot to fill the entire menu.

> [!TIP]
> See: #props
>
> You can use the `menu` prop to customize the menu of the header, it will adapt depending on the mode you choose.

```vue [HeaderMenuExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const route = useRoute();

	const items = computed<NavigationMenuItem[]>(() => [
		{
			label: 'Docs',
			to: '/docs/getting-started',
			icon: 'i-lucide-book-open',
			active: route.path.startsWith('/docs/getting-started'),
		},
		{
			label: 'Components',
			to: '/docs/components',
			icon: 'i-lucide-box',
			active: route.path.startsWith('/docs/components'),
		},
		{
			label: 'Figma',
			icon: 'i-simple-icons-figma',
			to: 'https://go.nuxt.com/figma-ui',
			target: '_blank',
		},
		{
			label: 'Releases',
			icon: 'i-lucide-rocket',
			to: 'https://github.com/nuxt/ui/releases',
			target: '_blank',
		},
	]);
</script>

<template>
	<UHeader>
		<template #title>
			<Logo class="h-6 w-auto" />
		</template>

		<UNavigationMenu :items="items" />

		<template #right>
			<UColorModeButton />

			<UTooltip
				text="Open on GitHub"
				:kbds="['meta', 'G']"
			>
				<UButton
					color="neutral"
					variant="ghost"
					to="https://github.com/nuxt/ui"
					target="_blank"
					icon="i-simple-icons-github"
					aria-label="GitHub"
				/>
			</UTooltip>
		</template>

		<template #body>
			<UNavigationMenu
				:items="items"
				orientation="vertical"
				class="-mx-2.5"
			/>
		</template>
	</UHeader>
</template>
```

### Toggle

Use the `toggle` prop to customize the toggle button displayed on mobile.

You can pass any property from the [Button](/docs/components/button) component to customize it.

```vue [HeaderToggleExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const route = useRoute();

	const items = computed<NavigationMenuItem[]>(() => [
		{
			label: 'Docs',
			to: '/docs/getting-started',
			icon: 'i-lucide-book-open',
			active: route.path.startsWith('/docs/getting-started'),
		},
		{
			label: 'Components',
			to: '/docs/components',
			icon: 'i-lucide-box',
			active: route.path.startsWith('/docs/components'),
		},
		{
			label: 'Figma',
			icon: 'i-simple-icons-figma',
			to: 'https://go.nuxt.com/figma-ui',
			target: '_blank',
		},
		{
			label: 'Releases',
			icon: 'i-lucide-rocket',
			to: 'https://github.com/nuxt/ui/releases',
			target: '_blank',
		},
	]);
</script>

<template>
	<UHeader
		:toggle="{
			color: 'primary',
			variant: 'subtle',
			class: 'rounded-full',
		}"
	>
		<template #title>
			<Logo class="h-6 w-auto" />
		</template>

		<UNavigationMenu :items="items" />

		<template #right>
			<UColorModeButton />

			<UTooltip
				text="Open on GitHub"
				:kbds="['meta', 'G']"
			>
				<UButton
					color="neutral"
					variant="ghost"
					to="https://github.com/nuxt/ui"
					target="_blank"
					icon="i-simple-icons-github"
					aria-label="GitHub"
				/>
			</UTooltip>
		</template>

		<template #body>
			<UNavigationMenu
				:items="items"
				orientation="vertical"
				class="-mx-2.5"
			/>
		</template>
	</UHeader>
</template>
```

### Toggle Side

Use the `toggle-side` prop to change the side of the toggle button. Defaults to `right`.

```vue [HeaderToggleSideExample.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const route = useRoute();

	const items = computed<NavigationMenuItem[]>(() => [
		{
			label: 'Docs',
			to: '/docs/getting-started',
			icon: 'i-lucide-book-open',
			active: route.path.startsWith('/docs/getting-started'),
		},
		{
			label: 'Components',
			to: '/docs/components',
			icon: 'i-lucide-box',
			active: route.path.startsWith('/docs/components'),
		},
		{
			label: 'Figma',
			icon: 'i-simple-icons-figma',
			to: 'https://go.nuxt.com/figma-ui',
			target: '_blank',
		},
		{
			label: 'Releases',
			icon: 'i-lucide-rocket',
			to: 'https://github.com/nuxt/ui/releases',
			target: '_blank',
		},
	]);
</script>

<template>
	<UHeader toggle-side="left">
		<template #title>
			<Logo class="h-6 w-auto" />
		</template>

		<UNavigationMenu :items="items" />

		<template #right>
			<UColorModeButton />

			<UTooltip
				text="Open on GitHub"
				:kbds="['meta', 'G']"
			>
				<UButton
					color="neutral"
					variant="ghost"
					to="https://github.com/nuxt/ui"
					target="_blank"
					icon="i-simple-icons-github"
					aria-label="GitHub"
				/>
			</UTooltip>
		</template>

		<template #body>
			<UNavigationMenu
				:items="items"
				orientation="vertical"
				class="-mx-2.5"
			/>
		</template>
	</UHeader>
</template>
```

## Examples

### With animated toggle

Use the `#toggle` slot to replace the default toggle button with a custom animated hamburger icon using [Motion Vue](https://motion.dev/docs/vue/motion-component).

```vue [HeaderToggleAnimatedExample.vue]
<script setup lang="ts">
	import { motion } from 'motion-v';
	import type { VariantType } from 'motion-v';
	import type { NavigationMenuItem } from '@nuxt/ui';

	const route = useRoute();

	const items = computed<NavigationMenuItem[]>(() => [
		{
			label: 'Docs',
			to: '/docs/getting-started',
			icon: 'i-lucide-book-open',
			active: route.path.startsWith('/docs/getting-started'),
		},
		{
			label: 'Components',
			to: '/docs/components',
			icon: 'i-lucide-box',
			active: route.path.startsWith('/docs/components'),
		},
		{
			label: 'Figma',
			icon: 'i-simple-icons-figma',
			to: 'https://go.nuxt.com/figma-ui',
			target: '_blank',
		},
		{
			label: 'Releases',
			icon: 'i-lucide-rocket',
			to: 'https://github.com/nuxt/ui/releases',
			target: '_blank',
		},
	]);

	const variants: {
		[k: string]: VariantType | ((custom: unknown) => VariantType);
	} = {
		normal: {
			rotate: 0,
			y: 0,
			opacity: 1,
		},
		close: (custom: unknown) => {
			const c = custom as number;
			return {
				rotate: c === 1 ? 45 : c === 3 ? -45 : 0,
				y: c === 1 ? 6 : c === 3 ? -6 : 0,
				opacity: c === 2 ? 0 : 1,
				transition: {
					type: 'spring',
					stiffness: 260,
					damping: 20,
				},
			};
		},
	};
</script>

<template>
	<UHeader>
		<template #title>
			<Logo class="h-6 w-auto" />
		</template>

		<UNavigationMenu :items="items" />

		<template #right>
			<UColorModeButton />

			<UTooltip
				text="Open on GitHub"
				:kbds="['meta', 'G']"
			>
				<UButton
					color="neutral"
					variant="ghost"
					to="https://github.com/nuxt/ui"
					target="_blank"
					icon="i-simple-icons-github"
					aria-label="GitHub"
				/>
			</UTooltip>
		</template>

		<template #toggle="{ open, toggle, ui }">
			<UButton
				size="sm"
				variant="ghost"
				color="neutral"
				square
				:class="ui.toggle({ toggleSide: 'right' })"
				@click="toggle"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="size-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<motion.line
						x1="4"
						y1="6"
						x2="20"
						y2="6"
						:variants="variants"
						:animate="open ? 'close' : 'normal'"
						:custom="1"
						tabindex="-1"
					/>
					<motion.line
						x1="4"
						y1="12"
						x2="20"
						y2="12"
						:variants="variants"
						:animate="open ? 'close' : 'normal'"
						:custom="2"
						tabindex="-1"
					/>
					<motion.line
						x1="4"
						y1="18"
						x2="20"
						y2="18"
						:variants="variants"
						:animate="open ? 'close' : 'normal'"
						:custom="3"
						tabindex="-1"
					/>
				</svg>
			</UButton>
		</template>

		<template #body>
			<UNavigationMenu
				:items="items"
				orientation="vertical"
				class="-mx-2.5"
			/>
		</template>
	</UHeader>
</template>
```

### Within `app.vue`

Use the Header component in your `app.vue` or in a layout:

```vue [app.vue]
<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const route = useRoute();

	const items = computed<NavigationMenuItem[]>(() => [
		{
			label: 'Docs',
			to: '/docs/getting-started',
			active: route.path.startsWith('/docs/getting-started'),
		},
		{
			label: 'Components',
			to: '/docs/components',
			active: route.path.startsWith('/docs/components'),
		},
		{
			label: 'Figma',
			to: 'https://go.nuxt.com/figma-ui',
			target: '_blank',
		},
		{
			label: 'Releases',
			to: 'https://github.com/nuxt/ui/releases',
			target: '_blank',
		},
	]);
</script>

<template>
	<UApp>
		<UHeader>
			<template #title>
				<Logo class="h-6 w-auto" />
			</template>

			<UNavigationMenu :items="items" />

			<template #right>
				<UColorModeButton />

				<UButton
					color="neutral"
					variant="ghost"
					to="https://github.com/nuxt/ui"
					target="_blank"
					icon="i-simple-icons-github"
					aria-label="GitHub"
				/>
			</template>

			<template #body>
				<UNavigationMenu
					:items="items"
					orientation="vertical"
					class="-mx-2.5"
				/>
			</template>
		</UHeader>

		<UMain>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</UMain>

		<UFooter />
	</UApp>
</template>
```

## API

### Props

```ts
/**
 * Props for the Header component
 */
interface HeaderProps {
	/**
	 * The element or component this component should render as.
	 * @default 'header'
	 */
	as?: any;
	/**
	 * @default 'Nuxt UI'
	 */
	title?: string | undefined;
	/**
	 * @default '/'
	 */
	to?: string | undefined;
	/**
	 * The mode of the header menu.
	 * @default 'modal'
	 */
	mode?: T | undefined;
	/**
	 * The props for the header menu component.
	 */
	menu?: HeaderMenu<T> | undefined;
	/**
	 * Customize the toggle button to open the header menu displayed when the `content` slot is used.
	 * `{ color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
	 * @default true
	 */
	toggle?: boolean | Omit<ButtonProps, LinkPropsKeys> | undefined;
	/**
	 * The side to render the toggle button on.
	 * @default 'right'
	 */
	toggleSide?: 'left' | 'right' | undefined;
	/**
	 * Automatically close when route changes.
	 * @default true
	 */
	autoClose?: boolean | undefined;
	ui?:
		| {
				root?: SlotClass;
				container?: SlotClass;
				left?: SlotClass;
				center?: SlotClass;
				right?: SlotClass;
				title?: SlotClass;
				toggle?: SlotClass;
				content?: SlotClass;
				overlay?: SlotClass;
				header?: SlotClass;
				body?: SlotClass;
		  }
		| undefined;
	/**
	 * @default false
	 */
	open?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Header component
 */
interface HeaderSlots {
	title(): any;
	left(): any;
	default(): any;
	right(): any;
	toggle(): any;
	top(): any;
	bottom(): any;
	body(): any;
	content(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Header component
 */
interface HeaderEmits {
  update:open: (payload: [value: boolean]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		header: {
			slots: {
				root: 'bg-default/75 backdrop-blur-sm border-b border-default h-(--ui-header-height) sticky top-0 z-50',
				container: 'flex items-center justify-between gap-3 h-full',
				left: 'lg:flex-1 flex items-center gap-1.5',
				center: 'hidden lg:flex',
				right: 'flex items-center justify-end lg:flex-1 gap-1.5',
				title:
					'shrink-0 font-bold text-xl text-highlighted flex items-end gap-1.5',
				toggle: 'lg:hidden',
				content: 'lg:hidden',
				overlay: 'lg:hidden',
				header:
					'px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3',
				body: 'p-4 sm:p-6 overflow-y-auto',
			},
			variants: {
				toggleSide: {
					left: {
						toggle: '-ms-1.5',
					},
					right: {
						toggle: '-me-1.5',
					},
				},
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Header.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/header.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Main"
description: "A main element that fills the available viewport height."
canonical_url: "https://ui.nuxt.com/docs/components/main"

---

# Main

> A main element that fills the available viewport height.

## Usage

The Main component renders a `<main>` element that works together with the [Header](/docs/components/header) component to create a full-height layout that extends to the viewport's available height.

> [!TIP]
> See: /docs/getting-started/theme/css-variables#header
>
> The Main component uses the `--ui-header-height` CSS variable to position itself correctly below the `Header`.

## Examples

### Within `app.vue`

Use the Main component in your `app.vue` or in a layout:

```vue [app.vue]
<template>
	<UApp>
		<UHeader />

		<UMain>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</UMain>

		<UFooter />
	</UApp>
</template>
```

## API

### Props

```ts
/**
 * Props for the Main component
 */
interface MainProps {
	/**
	 * The element or component this component should render as.
	 * @default 'main'
	 */
	as?: any;
	ui?: { base?: any } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Main component
 */
interface MainSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		main: {
			base: 'min-h-[calc(100vh-var(--ui-header-height))]',
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Main.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/main.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

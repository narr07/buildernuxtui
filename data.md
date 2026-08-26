Data
Accordion
Carousel
Empty
Marquee
ScrollArea
Table
Timeline
Tree
User

---

title: "Accordion"
description: "A stacked set of collapsible panels."
canonical_url: "https://ui.nuxt.com/docs/components/accordion"

---

# Accordion

> A stacked set of collapsible panels.

## Usage

Use the Accordion component to display a list of collapsible items.

```vue
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items = ref<AccordionItem[]>([
		{
			label: 'Is Nuxt UI free to use?',
			content:
				'Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.',
		},
		{
			label: 'Can I use Nuxt UI with Vue without Nuxt?',
			content:
				'Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.',
		},
		{
			label: 'Is Nuxt UI production-ready?',
			content:
				'Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.',
		},
	]);
</script>

<template>
	<UAccordion :items="items" />
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- `icon?: string`
- `trailingIcon?: string`
- `content?: string`
- `value?: string`
- `disabled?: boolean`
- [`slot?: string`](#with-custom-slot)
- `class?: any`
- `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`

```vue
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items = ref<AccordionItem[]>([
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
			content:
				'You have nothing to do, @nuxt/icon will handle it automatically.',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
			content:
				'Choose a primary and a neutral color from your Tailwind CSS theme.',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			content:
				'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
		},
	]);
</script>

<template>
	<UAccordion :items="items" />
</template>
```

### Multiple

Set the `type` prop to `multiple` to allow multiple items to be active at the same time. Defaults to `single`.

```vue
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items = ref<AccordionItem[]>([
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
			content:
				'You have nothing to do, @nuxt/icon will handle it automatically.',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
			content:
				'Choose a primary and a neutral color from your Tailwind CSS theme.',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			content:
				'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
		},
	]);
</script>

<template>
	<UAccordion
		type="multiple"
		:items="items"
	/>
</template>
```

### Collapsible

When `type` is `single`, you can set the `collapsible` prop to `false` to prevent the active item from collapsing.

```vue
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items = ref<AccordionItem[]>([
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
			content:
				'You have nothing to do, @nuxt/icon will handle it automatically.',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
			content:
				'Choose a primary and a neutral color from your Tailwind CSS theme.',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			content:
				'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
		},
	]);
</script>

<template>
	<UAccordion
		:collapsible="false"
		:items="items"
	/>
</template>
```

### Unmount

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the accordion is collapsed. Defaults to `true`.

```vue
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items = ref<AccordionItem[]>([
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
			content:
				'You have nothing to do, @nuxt/icon will handle it automatically.',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
			content:
				'Choose a primary and a neutral color from your Tailwind CSS theme.',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			content:
				'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
		},
	]);
</script>

<template>
	<UAccordion
		:unmount-on-hide="false"
		:items="items"
	/>
</template>
```

> [!NOTE]
>
> You can inspect the DOM to see each item's content being rendered.

### Disabled

Use the `disabled` property to disable the Accordion.

You can also disable a specific item by using the `disabled` property in the item object.

```vue
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items = ref<AccordionItem[]>([
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
			content:
				'You have nothing to do, @nuxt/icon will handle it automatically.',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
			content:
				'Choose a primary and a neutral color from your Tailwind CSS theme.',
			disabled: true,
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			content:
				'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
		},
	]);
</script>

<template>
	<UAccordion
		disabled
		:items="items"
	/>
</template>
```

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/docs/components/icon) of each item. Defaults to `i-lucide-chevron-down`.

> [!TIP]
>
> You can also set an icon for a specific item by using the `trailingIcon` property in the item object.

```vue
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items = ref<AccordionItem[]>([
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
			content:
				'You have nothing to do, @nuxt/icon will handle it automatically.',
			trailingIcon: 'i-lucide-plus',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
			content:
				'Choose a primary and a neutral color from your Tailwind CSS theme.',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			content:
				'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
		},
	]);
</script>

<template>
	<UAccordion
		trailing-icon="i-lucide-arrow-down"
		:items="items"
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

## Examples

### Control active item(s)

You can control the active item by using the `default-value` prop or the `v-model` directive with the `value` of the item. If no `value` is provided, it defaults to the index **as a string**.

```vue [AccordionModelValueExample.vue]
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items: AccordionItem[] = [
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
			content:
				'You have nothing to do, @nuxt/icon will handle it automatically.',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
			content:
				'Choose a primary and a neutral color from your Tailwind CSS theme.',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			content:
				'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
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
	<UAccordion
		v-model="active"
		:items="items"
	/>
</template>
```

> [!TIP]
>
> Use the `value-key` prop to change the key used to match items when a `v-model` or `default-value` is provided.

> [!CAUTION]
>
> When `type="multiple"`, ensure to pass an array to the `default-value` prop or the `v-model` directive.

### With drag and drop

Use the [`useSortable`](https://vueuse.org/integrations/useSortable/) composable from [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) to enable drag and drop functionality on the Accordion. This integration wraps [Sortable.js](https://sortablejs.github.io/Sortable/) to provide a seamless drag and drop experience.

```vue [AccordionDragAndDropExample.vue]
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';
	import { useSortable } from '@vueuse/integrations/useSortable';

	const items = shallowRef<AccordionItem[]>([
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
			content:
				'You have nothing to do, @nuxt/icon will handle it automatically.',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
			content:
				'Choose a primary and a neutral color from your Tailwind CSS theme.',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			content:
				'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
		},
	]);

	const accordion = useTemplateRef<HTMLElement>('accordion');

	useSortable(accordion, items, {
		animation: 150,
	});
</script>

<template>
	<UAccordion
		ref="accordion"
		:items="items"
	/>
</template>
```

### With body slot

Use the `#body` slot to customize the body of each item.

```vue [AccordionBodySlotExample.vue]
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items: AccordionItem[] = [
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
		},
	];
</script>

<template>
	<UAccordion :items="items">
		<template #body="{ item }"> This is the {{ item.label }} panel. </template>
	</UAccordion>
</template>
```

> [!TIP]
>
> The `#body` slot includes some pre-defined styles, use the [`#content` slot](#with-content-slot) if you want to start from scratch.

### With content slot

Use the `#content` slot to customize the content of each item.

```vue [AccordionContentSlotExample.vue]
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items: AccordionItem[] = [
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
		},
	];
</script>

<template>
	<UAccordion :items="items">
		<template #content="{ item }">
			<p class="pb-3.5 text-sm text-muted">
				This is the {{ item.label }} panel.
			</p>
		</template>
	</UAccordion>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`
- `#{{ item.slot }}-body`

```vue [AccordionCustomSlotExample.vue]
<script setup lang="ts">
	import type { AccordionItem } from '@nuxt/ui';

	const items = [
		{
			label: 'Icons',
			icon: 'i-lucide-smile',
			content:
				'You have nothing to do, @nuxt/icon will handle it automatically.',
		},
		{
			label: 'Colors',
			icon: 'i-lucide-swatch-book',
			slot: 'colors' as const,
			content:
				'Choose a primary and a neutral color from your Tailwind CSS theme.',
		},
		{
			label: 'Components',
			icon: 'i-lucide-box',
			content:
				'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
		},
	] satisfies AccordionItem[];
</script>

<template>
	<UAccordion :items="items">
		<template #colors="{ item }">
			<p class="text-sm pb-3.5 text-primary">
				{{ item.content }}
			</p>
		</template>
	</UAccordion>
</template>
```

### With markdown content

You can use the [MDC](https://github.com/nuxt-content/mdc?tab=readme-ov-file#mdc) component from `@nuxtjs/mdc` to render markdown in the accordion items.

```vue [AccordionMarkdownExample.vue]
<script setup lang="ts">
	const items = [
		{
			label: 'Is Nuxt UI free to use?',
			icon: 'i-lucide-circle-help',
			content:
				'Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.',
		},
		{
			label: 'Can I use Nuxt UI with Vue without Nuxt?',
			icon: 'i-lucide-circle-help',
			content:
				'Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.',
		},
		{
			label: 'Will Nuxt UI work with other CSS frameworks like UnoCSS?',
			icon: 'i-lucide-circle-help',
			content:
				'No. Nuxt UI is designed exclusively for Tailwind CSS. UnoCSS support would require significant architecture changes due to different class naming conventions.',
		},
		{
			label: 'How does Nuxt UI handle accessibility?',
			icon: 'i-lucide-circle-help',
			content:
				'Through [Reka UI](https://reka-ui.com/docs/overview/accessibility) integration, Nuxt UI provides automatic ARIA attributes, keyboard navigation, focus management, and screen reader support. While offering a strong foundation, testing in your specific use case remains important.',
		},
		{
			label: 'How is Nuxt UI tested?',
			icon: 'i-lucide-circle-help',
			content:
				'Nuxt UI ensures reliability with 1000+ Vitest tests covering core functionality and accessibility.',
		},
		{
			label: 'Is Nuxt UI production-ready?',
			icon: 'i-lucide-circle-help',
			content:
				'Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.',
		},
	];
</script>

<template>
	<UAccordion
		type="multiple"
		:items="items"
		:unmount-on-hide="false"
		:default-value="['3']"
		:ui="{
			trigger: 'text-base',
			body: 'text-base text-muted',
		}"
	>
		<template #body="{ item }">
			<MDC
				:value="item.content"
				unwrap="p"
			/>
		</template>
	</UAccordion>
</template>
```

## API

### Props

```ts
/**
 * Props for the Accordion component
 */
interface AccordionProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	items?: T[] | undefined;
	/**
	 * The icon displayed on the right side of the trigger.
	 * @default appConfig.ui.icons.chevronDown
	 */
	trailingIcon?: any;
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
				item?: SlotClass;
				header?: SlotClass;
				trigger?: SlotClass;
				content?: SlotClass;
				body?: SlotClass;
				leadingIcon?: SlotClass;
				trailingIcon?: SlotClass;
				label?: SlotClass;
		  }
		| undefined;
	/**
	 * When type is "single", allows closing content when clicking trigger for an open item.
	 * When type is "multiple", this prop has no effect.
	 * @default true
	 */
	collapsible?: boolean | undefined;
	/**
	 * The default active value of the item(s).
	 *
	 * Use when you do not need to control the state of the item(s).
	 */
	defaultValue?: string | string[] | undefined;
	/**
	 * The controlled value of the active item(s).
	 *
	 * Use this when you need to control the state of the items. Can be binded with `v-model`
	 */
	modelValue?: string | string[] | undefined;
	/**
	 * Determines whether a "single" or "multiple" items can be selected at a time.
	 *
	 * This prop will overwrite the inferred type from `modelValue` and `defaultValue`.
	 * @default 'single'
	 */
	type?: 'single' | 'multiple' | undefined;
	/**
	 * When `true`, prevents the user from interacting with the accordion and all its items
	 * @default false
	 */
	disabled?: boolean | undefined;
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
 * Slots for the Accordion component
 */
interface AccordionSlots {
	default(): any;
	leading(): any;
	trailing(): any;
	content(): any;
	body(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Accordion component
 */
interface AccordionEmits {
  update:modelValue: (payload: [value: string | string[] | undefined]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		accordion: {
			slots: {
				root: 'w-full',
				item: 'border-b border-default last:border-b-0',
				header: 'flex',
				trigger:
					'group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 outline-primary/25 focus-visible:outline-3 min-w-0 rounded-md',
				content:
					'data-[state=open]:animate-[accordion-down_200ms_var(--ease-out)] data-[state=closed]:animate-[accordion-up_200ms_var(--ease-out)] data-[state=closed]:overflow-hidden focus:outline-none',
				body: 'text-sm pb-3.5',
				leadingIcon: 'shrink-0 size-5',
				trailingIcon:
					'shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200 ease-out motion-reduce:transition-none',
				label: 'text-start break-words',
			},
			variants: {
				disabled: {
					true: {
						trigger: 'cursor-not-allowed opacity-75',
					},
				},
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Accordion.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/accordion.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Carousel"
description: "A carousel with motion and swipe built using Embla."
canonical_url: "https://ui.nuxt.com/docs/components/carousel"

---

# Carousel

> A carousel with motion and swipe built using Embla.

## Usage

Use the Carousel component to display a list of items in a carousel.

```vue [CarouselExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/640?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/640?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/640?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		loop
		arrows
		:autoplay="{ delay: 2000 }"
		wheel-gestures
		:prev="{ variant: 'solid' }"
		:next="{ variant: 'solid' }"
		:items="items"
		:ui="{
			item: 'basis-1/3 ps-0',
			prev: 'sm:start-8',
			next: 'sm:end-8',
			container: 'ms-0',
		}"
	>
		<img
			:src="item"
			width="320"
			height="320"
		/>
	</UCarousel>
</template>
```

> [!NOTE]
>
> Use your mouse to drag the carousel horizontally on desktop.

### Items

Use the `items` prop as an array and render each item using the default slot:

```vue [CarouselItemsExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/640?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/640?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/640?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		:items="items"
		class="w-full max-w-xs mx-auto"
	>
		<img
			:src="item"
			width="320"
			height="320"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

You can also pass an array of objects with the following properties:

- `class?: any`
- `ui?: { item?: ClassNameValue }`

You can control how many items are visible by using the [`basis`](https://tailwindcss.com/docs/flex-basis) / [`width`](https://tailwindcss.com/docs/width) utility classes on the `item`:

```vue [CarouselItemsMultipleExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/468/468?random=1',
		'https://picsum.photos/468/468?random=2',
		'https://picsum.photos/468/468?random=3',
		'https://picsum.photos/468/468?random=4',
		'https://picsum.photos/468/468?random=5',
		'https://picsum.photos/468/468?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		:items="items"
		:ui="{ item: 'basis-1/3' }"
	>
		<img
			:src="item"
			width="234"
			height="234"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Progress. Defaults to `horizontal`.

> [!NOTE]
>
> Use your mouse to drag the carousel vertically on desktop.

```vue [CarouselOrientationExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/640?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/640?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/640?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		orientation="vertical"
		:items="items"
		:ui="{ container: 'h-[336px]' }"
		class="w-full max-w-xs mx-auto"
	>
		<img
			:src="item"
			width="320"
			height="320"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

> [!CAUTION]
>
> You need to specify a `height` on the container in vertical orientation.

### Arrows

Use the `arrows` prop to display prev and next buttons.

```vue [CarouselArrowsExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/640?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/640?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/640?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		arrows
		:items="items"
		class="w-full max-w-xs mx-auto"
	>
		<img
			:src="item"
			width="320"
			height="320"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

### Prev / Next

Use the `prev` and `next` props to customize the prev and next buttons with any [Button](/docs/components/button) props.

```vue [CarouselPrevNextExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/640?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/640?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/640?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		arrows
		:prev="{ color: 'primary' }"
		:next="{ variant: 'solid' }"
		:items="items"
		class="w-full max-w-xs mx-auto"
	>
		<img
			:src="item"
			width="320"
			height="320"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

### Prev / Next Icons

Use the `prev-icon` and `next-icon` props to customize the buttons [Icon](/docs/components/icon). Defaults to `i-lucide-arrow-left` / `i-lucide-arrow-right`.

```vue [CarouselPrevNextIconExample.vue]
<script setup lang="ts">
	defineProps<{
		prevIcon?: string;
		nextIcon?: string;
	}>();

	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/640?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/640?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/640?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		arrows
		:prev-icon="prevIcon"
		:next-icon="nextIcon"
		:items="items"
		class="w-full max-w-xs mx-auto"
	>
		<img
			:src="item"
			width="320"
			height="320"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize these icons globally in your `app.config.ts` under `ui.icons.arrowLeft` / `ui.icons.arrowRight` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize these icons globally in your `vite.config.ts` under `ui.icons.arrowLeft` / `ui.icons.arrowRight` key.

### Dots

Use the `dots` prop to display a list of dots to scroll to a specific slide.

```vue [CarouselDotsExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/640?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/640?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/640?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		dots
		:items="items"
		class="w-full max-w-xs mx-auto"
	>
		<img
			:src="item"
			width="320"
			height="320"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

The number of dots is based on the number of slides displayed in the view:

```vue [CarouselDotsMultipleExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/640?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/640?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/640?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		dots
		:items="items"
		:ui="{ item: 'basis-1/3' }"
	>
		<img
			:src="item"
			width="320"
			height="320"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

## Plugins

The Carousel component implements the official [Embla Carousel plugins](https://www.embla-carousel.com/docs/v8/plugins).

### Autoplay

This plugin is used to extend Embla Carousel with **autoplay** functionality.

Use the `autoplay` prop as a boolean or an object to configure the [Autoplay plugin](https://www.embla-carousel.com/docs/v8/plugins/autoplay).

```vue [CarouselAutoplayExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/468/468?random=1',
		'https://picsum.photos/468/468?random=2',
		'https://picsum.photos/468/468?random=3',
		'https://picsum.photos/468/468?random=4',
		'https://picsum.photos/468/468?random=5',
		'https://picsum.photos/468/468?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		loop
		arrows
		dots
		:autoplay="{ delay: 2000 }"
		:items="items"
		:ui="{ item: 'basis-1/3' }"
	>
		<img
			:src="item"
			width="234"
			height="234"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

> [!NOTE]
>
> In this example, we're using the `loop` prop for an infinite carousel.

### Auto Scroll

This plugin is used to extend Embla Carousel with **auto scroll** functionality.

Use the `auto-scroll` prop as a boolean or an object to configure the [Auto Scroll plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll).

```vue [CarouselAutoScrollExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/468/468?random=1',
		'https://picsum.photos/468/468?random=2',
		'https://picsum.photos/468/468?random=3',
		'https://picsum.photos/468/468?random=4',
		'https://picsum.photos/468/468?random=5',
		'https://picsum.photos/468/468?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		loop
		dots
		arrows
		auto-scroll
		:items="items"
		:ui="{ item: 'basis-1/3' }"
	>
		<img
			:src="item"
			width="234"
			height="234"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

> [!NOTE]
>
> In this example, we're using the `loop` prop for an infinite carousel.

### Auto Height

This plugin is used to extend Embla Carousel with **auto height** functionality. It changes the height of the carousel container to fit the height of the highest slide in view.

Use the `auto-height` prop as a boolean or an object to configure the [Auto Height plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-height).

```vue [CarouselAutoHeightExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/320?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/320?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/320?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		auto-height
		arrows
		dots
		:items="items"
		:ui="{
			container: 'transition-[height]',
			controls: 'absolute -top-8 inset-x-12',
			dots: '-top-7',
			dot: 'w-6 h-1',
		}"
		class="w-full max-w-xs mx-auto"
	>
		<img
			:src="item"
			width="320"
			height="320"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

> [!NOTE]
>
> In this example, we add the `transition-[height]` class on the container to animate the height change.

### Class Names

Class Names is a **class name toggle** utility plugin for Embla Carousel that enables you to automate the toggling of class names on your carousel.

Use the `class-names` prop as a boolean or an object to configure the [Class Names plugin](https://www.embla-carousel.com/docs/v8/plugins/class-names).

```vue [CarouselClassNamesExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/528/528?random=1',
		'https://picsum.photos/528/528?random=2',
		'https://picsum.photos/528/528?random=3',
		'https://picsum.photos/528/528?random=4',
		'https://picsum.photos/528/528?random=5',
		'https://picsum.photos/528/528?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		class-names
		arrows
		:items="items"
		:ui="{
			item: 'basis-[70%] transition-opacity [&:not(.is-snapped)]:opacity-10',
		}"
		class="mx-auto max-w-sm"
	>
		<img
			:src="item"
			width="264"
			height="264"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

> [!NOTE]
>
> In this example, we add the `transition-opacity [&:not(.is-snapped)]:opacity-10` classes on the `item` to animate the opacity change.

### Fade

This plugin is used to replace the Embla Carousel scroll functionality with **fade transitions**.

Use the `fade` prop as a boolean or an object to configure the [Fade plugin](https://www.embla-carousel.com/docs/v8/plugins/fade).

```vue [CarouselFadeExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/640?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/640?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/640?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		fade
		arrows
		dots
		:items="items"
		class="w-full max-w-xs mx-auto"
	>
		<img
			:src="item"
			width="320"
			height="320"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

### Wheel Gestures

This plugin is used to extend Embla Carousel with the ability to **use the mouse/trackpad wheel** to navigate the carousel.

Use the `wheel-gestures` prop as a boolean or an object to configure the [Wheel Gestures plugin](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures).

> [!NOTE]
>
> Use your mouse wheel to scroll the carousel.

```vue [CarouselWheelGesturesExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/468/468?random=1',
		'https://picsum.photos/468/468?random=2',
		'https://picsum.photos/468/468?random=3',
		'https://picsum.photos/468/468?random=4',
		'https://picsum.photos/468/468?random=5',
		'https://picsum.photos/468/468?random=6',
	];
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		loop
		wheel-gestures
		:items="items"
		:ui="{ item: 'basis-1/3' }"
	>
		<img
			:src="item"
			width="234"
			height="234"
			class="rounded-lg"
			loading="lazy"
		/>
	</UCarousel>
</template>
```

## Examples

### With thumbnails

You can use the [`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto) method on [`emblaApi`](#expose) to display thumbnails under the carousel that navigate to a specific slide.

```vue [CarouselThumbnailsExample.vue]
<script setup lang="ts">
	const items = [
		'https://picsum.photos/640/640?random=1',
		'https://picsum.photos/640/640?random=2',
		'https://picsum.photos/640/640?random=3',
		'https://picsum.photos/640/640?random=4',
		'https://picsum.photos/640/640?random=5',
		'https://picsum.photos/640/640?random=6',
	];

	const carousel = useTemplateRef('carousel');
	const activeIndex = ref(0);

	function onClickPrev() {
		activeIndex.value--;
	}
	function onClickNext() {
		activeIndex.value++;
	}
	function onSelect(index: number) {
		activeIndex.value = index;
	}

	function select(index: number) {
		activeIndex.value = index;

		carousel.value?.emblaApi?.scrollTo(index);
	}
</script>

<template>
	<div class="flex-1 w-full">
		<UCarousel
			ref="carousel"
			v-slot="{ item }"
			arrows
			:items="items"
			:prev="{ onClick: onClickPrev }"
			:next="{ onClick: onClickNext }"
			class="w-full max-w-xs mx-auto"
			@select="onSelect"
		>
			<img
				:src="item"
				width="320"
				height="320"
				class="rounded-lg"
				loading="lazy"
			/>
		</UCarousel>

		<div class="flex gap-1 justify-between pt-4 max-w-xs mx-auto">
			<div
				v-for="(item, index) in items"
				:key="index"
				class="size-11 opacity-25 hover:opacity-100 transition-opacity"
				:class="{ 'opacity-100': activeIndex === index }"
				@click="select(index)"
			>
				<img
					:src="item"
					width="44"
					height="44"
					class="rounded-lg"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</template>
```

## API

### Props

```ts
/**
 * Props for the Carousel component
 */
interface CarouselProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  /**
   * Configure the prev button when arrows are enabled.
   * @default { size: 'md', color: 'neutral', variant: 'link' }
   */
  prev?: Omit<ButtonProps, LinkPropsKeys> | undefined;
  /**
   * The icon displayed in the prev button.
   * @default appConfig.ui.icons.arrowLeft
   */
  prevIcon?: any;
  /**
   * Configure the next button when arrows are enabled.
   * @default { size: 'md', color: 'neutral', variant: 'link' }
   */
  next?: Omit<ButtonProps, LinkPropsKeys> | undefined;
  /**
   * The icon displayed in the next button.
   * @default appConfig.ui.icons.arrowRight
   */
  nextIcon?: any;
  /**
   * Display prev and next buttons to scroll the carousel.
   * @default false
   */
  arrows?: boolean | undefined;
  /**
   * Display dots to scroll to a specific slide.
   * @default false
   */
  dots?: boolean | undefined;
  /**
   * The orientation of the carousel.
   * @default 'horizontal'
   */
  orientation?: "vertical" | "horizontal" | undefined;
  items?: T[] | undefined;
  /**
   * Enable Autoplay plugin
   * @default false
   */
  autoplay?: boolean | Partial<CreateOptionsType<OptionsType>> | undefined;
  /**
   * Enable Auto Scroll plugin
   * @default false
   */
  autoScroll?: boolean | Partial<CreateOptionsType<OptionsType>> | undefined;
  /**
   * Enable Auto Height plugin
   * @default false
   */
  autoHeight?: boolean | Partial<CreateOptionsType<{ active: boolean; breakpoints: { [key: string]: Omit<Partial<any>, "breakpoints">; }; }>> | undefined;
  /**
   * Enable Class Names plugin
   * @default false
   */
  classNames?: boolean | Partial<CreateOptionsType<OptionsType>> | undefined;
  /**
   * Enable Fade plugin
   * @default false
   */
  fade?: boolean | Partial<CreateOptionsType<{ active: boolean; breakpoints: { [key: string]: Omit<Partial<any>, "breakpoints">; }; }>> | undefined;
  /**
   * Enable Wheel Gestures plugin
   * @default false
   */
  wheelGestures?: boolean | WheelGesturesPluginOptions | undefined;
  ui?: { root?: SlotClass; viewport?: SlotClass; container?: SlotClass; item?: SlotClass; controls?: SlotClass; arrows?: SlotClass; prev?: SlotClass; next?: SlotClass; dots?: SlotClass; dot?: SlotClass; } | undefined;
  /**
   * @default 'center'
   */
  align?: "start" | "center" | "end" | (viewSize: number, snapSize: number, index: number): number | undefined;
  /**
   * @default 'trimSnaps'
   */
  containScroll?: false | "trimSnaps" | "keepSnaps" | undefined;
  /**
   * @default 1
   */
  slidesToScroll?: number | "auto" | undefined;
  /**
   * @default false
   */
  dragFree?: boolean | undefined;
  /**
   * @default 10
   */
  dragThreshold?: number | undefined;
  /**
   * @default 0
   */
  inViewThreshold?: number | number[] | undefined;
  /**
   * @default false
   */
  loop?: boolean | undefined;
  /**
   * @default false
   */
  skipSnaps?: boolean | undefined;
  /**
   * @default 25
   */
  duration?: number | undefined;
  /**
   * @default 0
   */
  startIndex?: number | undefined;
  /**
   * @default true
   */
  watchDrag?: false | true | (emblaApi: EmblaCarouselType, evt: PointerEventType): boolean | void | undefined;
  /**
   * @default true
   */
  watchResize?: false | true | (emblaApi: EmblaCarouselType, entries: ResizeObserverEntry[]): boolean | void | undefined;
  /**
   * @default true
   */
  watchSlides?: false | true | (emblaApi: EmblaCarouselType, mutations: MutationRecord[]): boolean | void | undefined;
  /**
   * @default true
   */
  watchFocus?: false | true | (emblaApi: EmblaCarouselType, evt: FocusEvent): boolean | void | undefined;
  /**
   * @default true
   */
  active?: boolean | undefined;
  /**
   * @default {}
   */
  breakpoints?: { [key: string]: Omit<Partial<CreateOptionsType<{ align: AlignmentOptionType; axis: AxisOptionType; container: string | HTMLElement | null; slides: string | HTMLElement[] | NodeListOf<HTMLElement> | null; containScroll: ScrollContainOptionType; direction: AxisDirectionOptionType; slidesToScroll: SlidesToScrollOptionType; dragFree: boolean; dragThreshold: number; inViewThreshold: number | number[] | undefined; loop: boolean; skipSnaps: boolean; duration: number; startIndex: number; watchDrag: DragHandlerOptionType; watchResize: ResizeHandlerOptionType; watchSlides: SlidesHandlerOptionType; watchFocus: FocusHandlerOptionType; }>>, "breakpoints">; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Carousel component
 */
interface CarouselSlots {
	default(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Carousel component
 */
interface CarouselEmits {
	select: (payload: [selectedIndex: number]) => void;
}
```

### Expose

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
	const carousel = useTemplateRef('carousel');
</script>

<template>
	<UCarousel ref="carousel" />
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
          emblaRef
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
          HTMLElement
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          null
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
          emblaApi
        </span>
      </code>
    </td>
    
    <td>
      <a href="https://www.embla-carousel.com/docs/v8/api/methods#typescript" rel="nofollow">
        <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
          <span class="sBMFI">
            Ref
          </span>
          
          <span class="sMK4o">
            <
          </span>
          
          <span class="sBMFI">
            EmblaCarouselType
          </span>
          
          <span class="sMK4o">
            |
          </span>
          
          <span class="sBMFI">
            null
          </span>
          
          <span class="sMK4o">
            >
          </span>
        </code>
      </a>
    </td>
  </tr>
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		carousel: {
			slots: {
				root: 'relative focus:outline-none',
				viewport: 'overflow-hidden',
				container: 'flex items-start',
				item: 'min-w-0 shrink-0 basis-full',
				controls: '',
				arrows: '',
				prev: 'absolute rounded-full',
				next: 'absolute rounded-full',
				dots: 'absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3',
				dot: [
					'cursor-pointer size-3 bg-accented rounded-full outline-inverted/25 focus-visible:outline-3',
					'transition',
				],
			},
			variants: {
				orientation: {
					vertical: {
						container: 'flex-col -mt-4',
						item: 'pt-4',
						prev: 'top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90',
						next: 'bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90',
					},
					horizontal: {
						container: 'flex-row -ms-4',
						item: 'ps-4',
						prev: 'start-4 sm:-start-12 top-1/2 -translate-y-1/2',
						next: 'end-4 sm:-end-12 top-1/2 -translate-y-1/2',
					},
				},
				active: {
					true: {
						dot: 'data-[state=active]:bg-inverted',
					},
				},
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Carousel.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/carousel.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Empty"
description: "A component to display an empty state."
canonical_url: "https://ui.nuxt.com/docs/components/empty"

---

# Empty

> A component to display an empty state.

## Usage

Use the Empty component to display a placeholder state when there is no content to show.

```vue
<template>
  <u-empty :actions=[{"icon":"i-lucide-plus","label":"Create new"},{"icon":"i-lucide-refresh-cw","label":"Refresh","color":"neutral","variant":"subtle"}] description=It looks like you haven't added any projects. Create one to get started. icon=i-lucide-file title=No projects found />
</template>
```

### Title

Use the `title` prop to set the title of the empty state.

```vue
<template>
	<UEmpty title="No projects found" />
</template>
```

### Description

Use the `description` prop to set the description of the empty state.

```vue
<template>
	<UEmpty
		title="No projects found"
		description="It looks like you haven't added any projects. Create one to get started."
	/>
</template>
```

### Icon

Use the `icon` prop to set the icon of the empty state.

```vue
<template>
	<UEmpty
		icon="i-lucide-file"
		title="No projects found"
		description="It looks like you haven't added any projects. Create one to get started."
	/>
</template>
```

### Avatar

Use the `avatar` prop to set the avatar of the empty state.

```vue
<template>
	<UEmpty
		:avatar="{
			src: 'https://github.com/nuxt.png',
		}"
		title="No projects found"
		description="It looks like you haven't added any projects. Create one to get started."
	/>
</template>
```

### Loading `4.10+`

Use the `loading` prop to show a loading icon in place of the icon. The layout stays identical, so you can toggle between loading and empty states without layout shifts.

```vue
<template>
	<UEmpty
		icon="i-lucide-file"
		loading
		title="Loading projects"
		description="Please wait while we fetch your projects."
	/>
</template>
```

### Loading Icon `4.10+`

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<template>
	<UEmpty
		icon="i-lucide-file"
		loading
		loading-icon="i-lucide-loader"
		title="Loading projects"
		description="Please wait while we fetch your projects."
	/>
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

### Actions

Use the `actions` prop to add some [Button](/docs/components/button) actions to the empty state.

```vue
<template>
	<UEmpty
		icon="i-lucide-file"
		title="No projects found"
		description="It looks like you haven't added any projects. Create one to get started."
		:actions="[
			{
				icon: 'i-lucide-plus',
				label: 'Create new',
			},
			{
				icon: 'i-lucide-refresh-cw',
				label: 'Refresh',
				color: 'neutral',
				variant: 'subtle',
			},
		]"
	/>
</template>
```

### Variant

Use the `variant` prop to change the variant of the empty state.

```vue
<template>
	<UEmpty
		variant="naked"
		icon="i-lucide-bell"
		title="No notifications"
		description="You're all caught up. New notifications will appear here."
		:actions="[
			{
				icon: 'i-lucide-refresh-cw',
				label: 'Refresh',
				color: 'neutral',
				variant: 'subtle',
			},
		]"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the empty state.

```vue
<template>
	<UEmpty
		size="xl"
		icon="i-lucide-bell"
		title="No notifications"
		description="You're all caught up. New notifications will appear here."
		:actions="[
			{
				icon: 'i-lucide-refresh-cw',
				label: 'Refresh',
				color: 'neutral',
				variant: 'subtle',
			},
		]"
	/>
</template>
```

## Examples

### With slots

Use the available slots to create a more complex empty state.

```vue [EmptySlotsExample.vue]
<script setup lang="ts">
	import type { UserProps } from '@nuxt/ui';

	const members: UserProps[] = [
		{
			name: 'Daniel Roe',
			description: 'danielroe',
			to: 'https://github.com/danielroe',
			target: '_blank',
			avatar: {
				src: 'https://github.com/danielroe.png',
				alt: 'danielroe',
				loading: 'lazy' as const,
			},
		},
		{
			name: 'Pooya Parsa',
			description: 'pi0',
			to: 'https://github.com/pi0',
			target: '_blank',
			avatar: {
				src: 'https://github.com/pi0.png',
				alt: 'pi0',
				loading: 'lazy' as const,
			},
		},
		{
			name: 'Sébastien Chopin',
			description: 'atinux',
			to: 'https://github.com/atinux',
			target: '_blank',
			avatar: {
				src: 'https://github.com/atinux.png',
				alt: 'atinux',
				loading: 'lazy' as const,
			},
		},
		{
			name: 'Benjamin Canac',
			description: 'benjamincanac',
			to: 'https://github.com/benjamincanac',
			target: '_blank',
			avatar: {
				src: 'https://github.com/benjamincanac.png',
				alt: 'benjamincanac',
				loading: 'lazy' as const,
			},
		},
	];
</script>

<template>
	<UEmpty
		title="No team members"
		description="Invite your team to collaborate on this project."
		variant="naked"
		:actions="[
			{
				label: 'Invite members',
				icon: 'i-lucide-user-plus',
				color: 'neutral',
			},
		]"
	>
		<template #leading>
			<UAvatarGroup size="xl">
				<UAvatar
					src="https://github.com/nuxt.png"
					alt="Nuxt"
					loading="lazy"
				/>
				<UAvatar
					src="https://github.com/unjs.png"
					alt="Unjs"
					loading="lazy"
				/>
			</UAvatarGroup>
		</template>

		<template #footer>
			<USeparator class="my-4" />

			<div class="grid grid-cols-2 gap-4">
				<UPageCard
					v-for="(member, index) in members"
					:key="index"
					:to="member.to"
					:ui="{ container: 'sm:p-4' }"
				>
					<UUser
						:avatar="member.avatar"
						:name="member.name"
						:description="member.description"
						:ui="{ name: 'truncate' }"
					/>
				</UPageCard>
			</div>
		</template>
	</UEmpty>
</template>
```

## API

### Props

```ts
/**
 * Props for the Empty component
 */
interface EmptyProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * The icon displayed above the title.
	 */
	icon?: any;
	avatar?: AvatarProps | undefined;
	/**
	 * When `true`, the loading icon will be displayed.
	 */
	loading?: boolean | undefined;
	/**
	 * The icon when the `loading` prop is `true`.
	 * @default appConfig.ui.icons.loading
	 */
	loadingIcon?: any;
	title?: string | undefined;
	description?: string | undefined;
	/**
	 * Display a list of Button in the body.
	 */
	actions?: ButtonProps[] | undefined;
	/**
	 * @default 'outline'
	 */
	variant?: 'outline' | 'solid' | 'soft' | 'subtle' | 'naked' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
	ui?:
		| {
				root?: SlotClass;
				header?: SlotClass;
				avatar?: SlotClass;
				title?: SlotClass;
				description?: SlotClass;
				body?: SlotClass;
				actions?: SlotClass;
				footer?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the Empty component
 */
interface EmptySlots {
	header(): any;
	leading(): any;
	title(): any;
	description(): any;
	body(): any;
	actions(): any;
	footer(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		empty: {
			slots: {
				root: 'relative flex flex-col items-center justify-center gap-4 rounded-lg p-4 sm:p-6 lg:p-8 min-w-0',
				header: 'flex flex-col items-center gap-2 max-w-sm text-center',
				avatar: 'shrink-0 mb-2',
				title: 'text-highlighted text-pretty font-medium',
				description: 'text-balance text-center',
				body: 'flex flex-col items-center gap-4 max-w-sm',
				actions: 'flex flex-wrap justify-center gap-2 shrink-0',
				footer: 'flex flex-col items-center gap-2 max-w-sm',
			},
			variants: {
				size: {
					xs: {
						avatar: 'size-8 text-base',
						title: 'text-sm',
						description: 'text-xs',
					},
					sm: {
						avatar: 'size-9 text-lg',
						title: 'text-sm',
						description: 'text-xs',
					},
					md: {
						avatar: 'size-10 text-xl',
						title: 'text-base',
						description: 'text-sm',
					},
					lg: {
						avatar: 'size-11 text-[22px]',
						title: 'text-base',
						description: 'text-sm',
					},
					xl: {
						avatar: 'size-12 text-2xl',
						title: 'text-lg',
						description: 'text-base',
					},
				},
				variant: {
					solid: {
						root: 'bg-inverted',
						title: 'text-inverted',
						description: 'text-dimmed',
					},
					outline: {
						root: 'bg-default ring ring-default',
						description: 'text-muted',
					},
					soft: {
						root: 'bg-elevated/50',
						description: 'text-toned',
					},
					subtle: {
						root: 'bg-elevated/50 ring ring-default',
						description: 'text-toned',
					},
					naked: {
						description: 'text-muted',
					},
				},
				loading: {
					true: {
						avatar: '[&>[data-slot=icon]]:animate-spin',
					},
				},
			},
			defaultVariants: {
				variant: 'outline',
				size: 'md',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Empty.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/empty.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Marquee"
description: "A component to create infinite scrolling content."
canonical_url: "https://ui.nuxt.com/docs/components/marquee"

---

# Marquee

> A component to create infinite scrolling content.

## Usage

Use the default slot with your content to create an infinite scrolling animation.

```vue
<template>
	<UMarquee>
		<UIcon
			name="i-simple-icons-github"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-discord"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-x"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-instagram"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-linkedin"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-facebook"
			class="size-10 shrink-0"
		/>
	</UMarquee>
</template>
```

> [!TIP]
>
> The animation is automatically disabled when the user prefers reduced motion, the content is displayed statically instead.

### Pause on Hover

Use the `pause-on-hover` prop to pause the animation when the user hovers over the content.

```vue
<template>
	<UMarquee pause-on-hover>
		<UIcon
			name="i-simple-icons-github"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-discord"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-x"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-instagram"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-linkedin"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-facebook"
			class="size-10 shrink-0"
		/>
	</UMarquee>
</template>
```

### Reverse

Use the `reverse` prop to reverse the direction of the animation.

```vue
<template>
	<UMarquee reverse>
		<UIcon
			name="i-simple-icons-github"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-discord"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-x"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-instagram"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-linkedin"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-facebook"
			class="size-10 shrink-0"
		/>
	</UMarquee>
</template>
```

### Orientation

Use the `orientation` prop to change the scrolling direction.

```vue
<template>
	<UMarquee orientation="vertical">
		<UIcon
			name="i-simple-icons-github"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-discord"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-x"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-instagram"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-linkedin"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-facebook"
			class="size-10 shrink-0"
		/>
	</UMarquee>
</template>
```

### Repeat

Use the `repeat` prop to specify how many times the content should be repeated in the animation.

```vue
<template>
	<UMarquee :repeat="6">
		<UIcon
			name="i-simple-icons-github"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-discord"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-x"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-instagram"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-linkedin"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-facebook"
			class="size-10 shrink-0"
		/>
	</UMarquee>
</template>
```

### Overlay

Use the `overlay` prop to remove the gradient overlays on the edges of the marquee.

```vue
<template>
	<UMarquee :overlay="false">
		<UIcon
			name="i-simple-icons-github"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-discord"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-x"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-instagram"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-linkedin"
			class="size-10 shrink-0"
		/>
		<UIcon
			name="i-simple-icons-facebook"
			class="size-10 shrink-0"
		/>
	</UMarquee>
</template>
```

## Examples

### Testimonials

Use the `Marquee` component to create an infinite scrolling animation for your testimonials.

```vue [MarqueeTestimonials.vue]
<script setup lang="ts">
	import type { UserProps } from '@nuxt/ui';

	const testimonials: { user: UserProps; quote: string }[] = [
		{
			user: {
				name: 'Anthony Bettini',
				description: 'CEO and founder of VulnCheck',
				avatar: {
					src: 'https://media.licdn.com/dms/image/v2/C4E03AQEY3pmXsH8hDg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1519741249442?e=1746057600&v=beta&t=dvQfBT9ah03MPNy9cnly30ugreeCdxG4nrxV3lwKAC8',
					loading: 'lazy' as const,
				},
			},
			quote:
				'We were using a SaaS service for the docs site, but were left unfulfilled. We put in the effort to do it in house, with UI Pro and not only did we get complimented by a prospect on our site, but they wanted to know our platform.',
		},
		{
			user: {
				name: 'Yaz Jallad',
				description: 'Founder Ninjaparade Digital',
				avatar: {
					src: 'https://pbs.twimg.com/profile_images/1824690890222485504/lQ7v1AGt_400x400.jpg',
					loading: 'lazy' as const,
				},
			},
			quote:
				"Wow, Nuxt UI Pro is a total game-changer! I'm seriously impressed with the quality, attention to detail, and the insane variety of components you get. It's like hitting the jackpot for any developer. I've saved countless hours that I would've spent stressing over making my apps look good, with amazing accessible UX,  and instead, I've been able to focus on the real deal – building the app itself. It's an instant buy for me, every single time. No second thoughts!",
		},
		{
			user: {
				name: 'Kevin Olson',
				description: 'Founder of Fume.app',
				avatar: {
					src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/acidjazz',
					srcset: 'https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/acidjazz 2x',
					loading: 'lazy' as const,
				},
			},
			quote:
				'Nuxt UI Pro saves 100s of hours of dev and design time while delivering a clean professional look on any device.',
		},
		{
			user: {
				name: 'Michael Hoffmann',
				description: 'Senior Frontend Developer',
				avatar: {
					src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/mokkapps',
					srcset: 'https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/mokkapps 2x',
					loading: 'lazy' as const,
				},
			},
			quote:
				'I decided to replace my custom-built components with a component library and chose Nuxt UI Pro. It only took me a few hours, and the new UI looks more professional. Integrating the library is easy; the components are well-documented and highly customizable. I can only recommend it; this library is my new choice for new SaaS products.',
		},
		{
			user: {
				name: 'Harlan Wilton',
				description: 'Nuxt core team member',
				avatar: {
					src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/harlan-zw',
					srcset: 'https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/harlan-zw 2x',
					loading: 'lazy' as const,
				},
			},
			quote:
				'Nuxt UI Pro is my go to component library. Out-of-the-box it handles all of the UI demands I throw at it while looking great. The customisation is really worth thought out, allowing you to override components in a breeze. Always amazed at the improvements dropped in each update as well, the team is doing an amazing job.',
		},
		{
			user: {
				name: 'Thomas Sanlis',
				description: 'Freelance developer and designer',
				avatar: {
					src: 'https://pbs.twimg.com/profile_images/1374040164180299791/ACw4G3nZ_400x400.jpg',
					loading: 'lazy' as const,
				},
			},
			quote:
				"I jumped at the chance to buy the Nuxt team's new UI kit as soon as I saw it. While I'm already a fan of Nuxt UI, the pro version takes it to a whole new level and lets me paste entire blocks into all my projects, saving me a ton of time.",
		},
		{
			user: {
				name: 'Benjamin Code',
				description: 'YouTuber and SaaS builder',
				avatar: {
					src: 'https://pbs.twimg.com/profile_images/1607353032420769793/I8qQSUfQ_400x400.jpg',
					loading: 'lazy' as const,
				},
			},
			quote:
				'Nuxt UI has allowed me to develop my SaaS without any prior mockups. The design quality of their components and the intelligence of the DX meant that I was able to try many different layouts for my application until I found the perfect UX for my users. Nuxt UI is the ui-kit I would have dreamed of building myself, and Nuxt UI Pro makes things even easier when you want to go further with your SaaS. Kudos to the team.',
		},
		{
			user: {
				name: 'Estéban Soubiran',
				description: 'Web developer and UnJS member',
				avatar: {
					src: 'https://pbs.twimg.com/profile_images/1801649350319218689/aS_X_iTm_400x400.jpg',
					loading: 'lazy' as const,
				},
			},
			quote:
				"Nuxt UI Pro is my preferred choice for everything, from a POC to a web platform. It's ready to use out-of-the-box and assists me in crafting pixel-perfect UIs. It saves me a significant amount of time while remaining highly customizable. Give it a try, and you won't be let down.",
		},
	];
</script>

<template>
	<div class="flex flex-col gap-4 w-full">
		<UMarquee
			pause-on-hover
			:overlay="false"
			:ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
		>
			<UPageCard
				v-for="(testimonial, index) in testimonials"
				:key="index"
				variant="subtle"
				:description="testimonial.quote"
				:ui="{
					description:
						'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
				}"
				class="w-64 shrink-0"
			>
				<template #footer>
					<UUser
						v-bind="testimonial.user"
						size="xl"
						:ui="{ description: 'line-clamp-1' }"
					/>
				</template>
			</UPageCard>
		</UMarquee>
		<UMarquee
			pause-on-hover
			reverse
			:overlay="false"
			:ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
		>
			<UPageCard
				v-for="(testimonial, index) in testimonials"
				:key="index"
				variant="subtle"
				:description="testimonial.quote"
				:ui="{
					description:
						'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
				}"
				class="w-64 shrink-0"
			>
				<template #footer>
					<UUser
						v-bind="testimonial.user"
						size="xl"
						:ui="{ description: 'line-clamp-1' }"
					/>
				</template>
			</UPageCard>
		</UMarquee>
	</div>
</template>
```

### Screenshots

Use the `Marquee` component to create an infinite scrolling animation for your screenshots.

```vue [MarqueeScreenshots.vue]
<template>
	<div class="relative w-full h-[400px] bg-muted overflow-hidden">
		<UMarquee
			reverse
			orientation="vertical"
			:overlay="false"
			:ui="{
				root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
			}"
		>
			<img
				v-for="i in 4"
				:key="i"
				:src="`/blocks/image${i}.png`"
				width="460"
				height="258"
				:alt="`Nuxt UI Screenshot ${i}`"
				loading="lazy"
				class="aspect-video border border-default rounded-lg bg-white"
			/>
		</UMarquee>
		<UMarquee
			orientation="vertical"
			:overlay="false"
			:ui="{
				root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
			}"
		>
			<img
				v-for="i in [5, 6, 7, 8]"
				:key="i"
				:src="`/blocks/image${i}.png`"
				width="460"
				height="258"
				:alt="`Nuxt UI Screenshot ${i}`"
				loading="lazy"
				class="aspect-video border border-default rounded-lg bg-white"
			/>
		</UMarquee>
		<UMarquee
			reverse
			orientation="vertical"
			:overlay="false"
			:ui="{
				root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
			}"
		>
			<img
				v-for="i in [9, 10, 11, 12]"
				:key="i"
				:src="`/blocks/image${i}.png`"
				width="460"
				height="258"
				:alt="`Nuxt UI Screenshot ${i}`"
				loading="lazy"
				class="aspect-video border border-default rounded-lg bg-white"
			/>
		</UMarquee>
	</div>
</template>
```

## API

### Props

```ts
/**
 * Props for the Marquee component
 */
interface MarqueeProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * Pause the marquee on hover.
	 * @default false
	 */
	pauseOnHover?: boolean | undefined;
	/**
	 * Reverse the direction of the marquee.
	 * @default false
	 */
	reverse?: boolean | undefined;
	/**
	 * The orientation of the marquee.
	 * @default 'horizontal'
	 */
	orientation?: 'vertical' | 'horizontal' | undefined;
	/**
	 * The number of times the marquee should repeat.
	 * @default 4
	 */
	repeat?: number | undefined;
	/**
	 * Display an overlay on the marquee.
	 * @default true
	 */
	overlay?: boolean | undefined;
	ui?: { root?: SlotClass; content?: SlotClass } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Marquee component
 */
interface MarqueeSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		marquee: {
			slots: {
				root: 'group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s]',
				content:
					'flex items-center shrink-0 justify-around gap-(--gap) min-w-max',
			},
			variants: {
				orientation: {
					horizontal: {
						content: 'w-full',
					},
					vertical: {
						content: 'h-full',
					},
				},
				pauseOnHover: {
					true: {
						content: 'group-hover:[animation-play-state:paused]',
					},
				},
				reverse: {
					true: {
						content: '![animation-direction:reverse]',
					},
				},
				overlay: {
					true: {
						root: 'before:absolute before:pointer-events-none before:content-[""] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[""] after:z-2 after:from-default after:to-transparent',
					},
				},
			},
			compoundVariants: [
				{
					orientation: 'horizontal',
					class: {
						root: 'flex-row',
						content:
							'flex-row motion-safe:animate-[marquee_var(--duration)_linear_infinite] motion-safe:rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden',
					},
				},
				{
					orientation: 'horizontal',
					overlay: true,
					class: {
						root: 'before:inset-y-0 before:start-0 before:h-full before:w-1/3 before:bg-gradient-to-r rtl:before:bg-gradient-to-l after:inset-y-0 after:end-0 after:h-full after:w-1/3 after:bg-gradient-to-l rtl:after:bg-gradient-to-r backface-hidden',
					},
				},
				{
					orientation: 'vertical',
					class: {
						root: 'flex-col',
						content:
							'flex-col motion-safe:animate-[marquee-vertical_var(--duration)_linear_infinite] h-[fit-content] backface-hidden',
					},
				},
				{
					orientation: 'vertical',
					overlay: true,
					class: {
						root: 'before:inset-x-0 before:top-0 before:w-full before:h-1/3 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t backface-hidden',
					},
				},
			],
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Marquee.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/marquee.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ScrollArea"
description: "A flexible scroll container with virtualization support."
canonical_url: "https://ui.nuxt.com/docs/components/scroll-area"

---

# ScrollArea

> A flexible scroll container with virtualization support.

## Usage

The ScrollArea component creates scrollable containers with optional virtualization for large lists.

```vue [ScrollAreaExample.vue]
<script setup lang="ts">
	const heights = [320, 480, 640, 800];

	// Pseudo-random height selection with longer cycle to avoid alignment patterns
	function getHeight(index: number) {
		const seed = (index * 11 + 7) % 17;
		return heights[seed % heights.length]!;
	}

	const items = Array.from({ length: 1000 }).map((_, index) => {
		const height = getHeight(index);

		return {
			id: index,
			title: `Item ${index + 1}`,
			src: `https://picsum.photos/640/${height}?v=${index}`,
			width: 640,
			height,
		};
	});
</script>

<template>
	<UScrollArea
		v-slot="{ item, index }"
		:items="items"
		orientation="vertical"
		:virtualize="{
			gap: 16,
			lanes: 3,
			estimateSize: 480,
		}"
		class="w-full h-128 p-4"
	>
		<img
			:src="item.src"
			:alt="item.title"
			:width="item.width"
			:height="item.height"
			:loading="index > 8 ? 'lazy' : 'eager'"
			class="rounded-md size-full object-cover"
		/>
	</UScrollArea>
</template>
```

### Items

Use the `items` prop as an array and render each item using the default slot:

```vue [ScrollAreaItemsExample.vue]
<script setup lang="ts">
	const items = Array.from({ length: 30 }, (_, i) => ({
		id: i + 1,
		title: `Item ${i + 1}`,
		description: `Description for item ${i + 1}`,
	}));
</script>

<template>
	<UScrollArea
		v-slot="{ item, index }"
		:items="items"
		class="w-full h-96"
	>
		<UPageCard
			v-bind="item"
			:variant="index % 2 === 0 ? 'soft' : 'outline'"
			class="rounded-none"
		/>
	</UScrollArea>
</template>
```

> [!TIP]
> See: #with-default-slot
>
> You can also use the default slot without the `items` prop to render custom scrollable content directly.

### Orientation

Use the `orientation` prop to change the scroll direction. Defaults to `vertical`.

```vue [ScrollAreaOrientationExample.vue]
<script setup lang="ts">
	defineProps<{
		orientation?: 'vertical' | 'horizontal';
	}>();

	const items = Array.from({ length: 30 }, (_, i) => ({
		id: i + 1,
		title: `Item ${i + 1}`,
		description: `Description for item ${i + 1}`,
	}));
</script>

<template>
	<UScrollArea
		v-slot="{ item, index }"
		:items="items"
		:orientation="orientation"
		class="w-full data-[orientation=vertical]:h-96"
	>
		<UPageCard
			v-bind="item"
			:variant="index % 2 === 0 ? 'soft' : 'outline'"
			class="rounded-none"
		/>
	</UScrollArea>
</template>
```

### Virtualize

Use the `virtualize` prop to render only the items currently in view, significantly boosting performance when working with large datasets.

> [!NOTE]
>
> When virtualization is **enabled**, customize spacing via the `virtualize` prop options like `gap`, `paddingStart`, and `paddingEnd`. Otherwise, use the `ui` prop to apply classes like `gap p-4` on the `viewport` slot.

> [!TIP]
>
> If all your items have the **same height**, set `skipMeasurement` to `true` in the `virtualize` prop to skip per-item DOM measurement and rely on `estimateSize` instead. This significantly improves performance for large uniform lists.

```vue [ScrollAreaVirtualizeExample.vue]
<script setup lang="ts">
	defineProps<{
		orientation?: 'vertical' | 'horizontal';
	}>();

	const items = computed(() =>
		Array.from({ length: 1000 }, (_, i) => ({
			id: i + 1,
			title: `Item ${i + 1}`,
			description: `Description for item ${i + 1}`,
		})),
	);
</script>

<template>
	<UScrollArea
		v-slot="{ item, index }"
		:items="items"
		:orientation="orientation"
		virtualize
		class="w-full data-[orientation=vertical]:h-96 data-[orientation=horizontal]:h-24.5"
	>
		<UPageCard
			v-bind="item"
			:variant="index % 2 === 0 ? 'soft' : 'outline'"
			class="rounded-none"
		/>
	</UScrollArea>
</template>
```

### Shadow `4.9+`

Use the `shadow` prop to display fade shadows on the scrollable edges, indicating that more content is available in the scroll direction. The fade automatically follows the `orientation` and only appears when the content overflows.

```vue [ScrollAreaShadowExample.vue]
<template>
	<div class="max-w-sm bg-elevated/50 rounded-lg">
		<UScrollArea
			shadow
			class="p-4 h-72"
			:ui="{ viewport: 'gap-4' }"
		>
			<p
				v-for="i in 6"
				:key="i"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
				risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
				risus, sed porttitor quam. Morbi accumsan cursus enim, sed ultricies
				sapien.
			</p>
		</UScrollArea>
	</div>
</template>
```

> [!TIP]
>
> Pass an object to the `shadow` prop to configure the fade size, e.g. `:shadow="{ size: 48 }"`.

## Examples

### As masonry layout

Use the `virtualize` prop with `lanes`, `gap`, and `estimateSize` options to create Pinterest-style masonry layouts with variable height items.

```vue [ScrollAreaMasonryLayoutExample.vue]
<script setup lang="ts">
	withDefaults(
		defineProps<{
			orientation?: 'vertical' | 'horizontal';
			lanes?: number;
			gap?: number;
		}>(),
		{
			orientation: 'vertical',
			lanes: 3,
			gap: 16,
		},
	);

	const heights = [320, 480, 640, 800];

	function getHeight(index: number) {
		const seed = (index * 11 + 7) % 17;
		return heights[seed % heights.length]!;
	}

	const items = Array.from({ length: 1000 }).map((_, index) => {
		const height = getHeight(index);

		return {
			id: index,
			title: `Item ${index + 1}`,
			src: `https://picsum.photos/640/${height}?v=${index}`,
			width: 640,
			height,
		};
	});
</script>

<template>
	<UScrollArea
		v-slot="{ item }"
		:items="items"
		:orientation="orientation"
		:virtualize="{
			gap,
			lanes,
			estimateSize: 480,
		}"
		class="w-full h-128 p-4"
	>
		<img
			:src="item.src"
			:alt="item.title"
			:width="item.width"
			:height="item.height"
			loading="lazy"
			class="rounded-md size-full object-cover"
		/>
	</UScrollArea>
</template>
```

> [!TIP]
>
> For optimal performance, set `estimateSize` close to your average item height. Increasing `overscan` improves scrolling smoothness but renders more off-screen items.

### With responsive lanes

You can use the [`useWindowSize`](https://vueuse.org/core/useWindowSize/) (for viewport-based) or [`useElementSize`](https://vueuse.org/core/useElementSize/) (for container-based) composables to make the `lanes` reactive.

```vue [ScrollAreaResponsiveLanesExample.vue]
<script setup lang="ts">
	const items = Array.from({ length: 1000 }).map((_, index) => ({
		id: index,
		title: `Item ${index + 1}`,
		src: `https://picsum.photos/640/480?v=${index}`,
		width: 640,
		height: 480,
	}));

	const gap = 16;
	const scrollArea = useTemplateRef('scrollArea');
	const { width } = useElementSize(() => scrollArea.value?.$el);

	const lanes = computed(() =>
		Math.max(1, Math.min(4, Math.floor(width.value / 200))),
	);
	const laneWidth = computed(
		() => (width.value - (lanes.value - 1) * gap) / lanes.value,
	);
	const estimateSize = computed(() => laneWidth.value * (480 / 640));
</script>

<template>
	<UScrollArea
		ref="scrollArea"
		v-slot="{ item }"
		:items="items"
		:virtualize="{
			gap,
			lanes,
			estimateSize,
			skipMeasurement: true,
		}"
		class="w-full h-96 p-4"
	>
		<img
			:src="item.src"
			:alt="item.title"
			:width="item.width"
			:height="item.height"
			loading="lazy"
			class="rounded-md size-full object-cover"
		/>
	</UScrollArea>
</template>
```

### With external scroll element `4.10+`

Pass a `getScrollElement` function in the `virtualize` prop to virtualize against an ancestor scroll container instead of the component's own viewport. Set `scrollMargin` to the list's offset from the scroll element's start (e.g. the height of the content above it).

```vue [ScrollAreaExternalScrollExample.vue]
<script setup lang="ts">
	const props = withDefaults(
		defineProps<{
			orientation?: 'vertical' | 'horizontal';
		}>(),
		{
			orientation: 'vertical',
		},
	);

	type User = {
		id: number;
		firstName: string;
		lastName: string;
		email: string;
		image: string;
	};

	const { data: users } = useLazyFetch(
		'https://dummyjson.com/users?limit=100&select=firstName,lastName,email,image',
		{
			key: 'scroll-area-external-scroll-users',
			transform: (data?: { users: User[] }) => data?.users ?? [],
			default: () => [] as User[],
			server: false,
		},
	);

	const isHorizontal = computed(() => props.orientation === 'horizontal');

	// The container owns the scroll; the list virtualizes against it so the header and cards share one scrollbar.
	const container = useTemplateRef('container');
	const title = useTemplateRef('title');
	const toolbar = useTemplateRef('toolbar');
	const scrollArea = useTemplateRef('scrollArea');

	// Item size along the scroll axis: card width when horizontal, row height when vertical.
	const itemSize = computed(() => (isHorizontal.value ? 256 : 88));
	const getScrollElement = () => container.value;

	// `scrollMargin` is the title's offset along the scroll axis: its width when it sits left of the cards, its height when it sits above them.
	const { width: titleWidth, height: titleHeight } = useElementSize(
		title,
		undefined,
		{ box: 'border-box' },
	);
	const { height: toolbarHeight } = useElementSize(toolbar, undefined, {
		box: 'border-box',
	});
	const scrollMargin = computed(() =>
		isHorizontal.value
			? titleWidth.value
			: toolbarHeight.value + titleHeight.value,
	);

	// Find: jump through the items whose name matches the query (like a find toolbar).
	const query = ref('');
	const matches = computed(() => {
		const q = query.value.trim().toLowerCase();
		if (!q) return [];
		return users.value.reduce<number[]>((acc, user, index) => {
			if (`${user.firstName} ${user.lastName}`.toLowerCase().includes(q))
				acc.push(index);
			return acc;
		}, []);
	});
	const cursor = ref(0);
	const currentMatch = computed(() => matches.value[cursor.value] ?? -1);

	function scrollToMatch() {
		if (currentMatch.value < 0) return;
		scrollArea.value?.virtualizer?.scrollToIndex(currentMatch.value, {
			align: 'center',
			behavior: 'smooth',
		});
	}

	function step(delta: number) {
		if (!matches.value.length) return;
		cursor.value =
			(cursor.value + delta + matches.value.length) % matches.value.length;
		scrollToMatch();
	}

	function scrollToStart() {
		container.value?.scrollTo(
			isHorizontal.value
				? { left: 0, behavior: 'smooth' }
				: { top: 0, behavior: 'smooth' },
		);
	}

	// Re-runs on a new query and when `users` resolves, so the first match centers as soon as results arrive.
	watch(matches, () => {
		cursor.value = 0;
		scrollToMatch();
	});
</script>

<template>
	<div
		ref="container"
		:class="
			isHorizontal ? 'w-full overflow-x-auto' : 'w-full h-128 overflow-y-auto'
		"
	>
		<!-- Vertical: the header sits above the toolbar and scrolls away as you scroll down. -->
		<div
			v-if="!isHorizontal"
			ref="title"
			class="flex items-end justify-between gap-4 p-6 bg-elevated/50"
		>
			<div>
				<h2 class="text-2xl font-bold text-highlighted">Members</h2>
				<p class="text-muted">
					This header scrolls away with the cards, sharing one scrollbar.
				</p>
			</div>
			<UBadge
				color="neutral"
				variant="subtle"
				:label="`${users.length} members`"
			/>
		</div>

		<div
			ref="toolbar"
			class="z-10 flex items-center px-6 py-3 border-y border-default bg-elevated/50 backdrop-blur"
			:class="isHorizontal ? 'sticky left-0' : 'sticky top-0'"
		>
			<UFieldGroup>
				<UInput
					v-model="query"
					placeholder="Find a member..."
					icon="i-lucide-search"
					aria-describedby="scroll-area-find-count"
					class="w-64"
					:ui="{ trailing: 'pointer-events-none' }"
				>
					<template #trailing>
						<span
							id="scroll-area-find-count"
							class="text-xs text-muted tabular-nums"
							aria-live="polite"
							role="status"
						>
							{{ matches.length ? cursor + 1 : 0 }}/{{ matches.length }}
						</span>
					</template>
				</UInput>
				<UButton
					:icon="isHorizontal ? 'i-lucide-chevron-left' : 'i-lucide-chevron-up'"
					color="neutral"
					variant="outline"
					aria-label="Previous match"
					:disabled="!matches.length"
					@click="step(-1)"
				/>
				<UButton
					:icon="
						isHorizontal ? 'i-lucide-chevron-right' : 'i-lucide-chevron-down'
					"
					color="neutral"
					variant="outline"
					aria-label="Next match"
					:disabled="!matches.length"
					@click="step(1)"
				/>
			</UFieldGroup>

			<UButton
				:icon="
					isHorizontal
						? 'i-lucide-arrow-left-to-line'
						: 'i-lucide-arrow-up-to-line'
				"
				color="neutral"
				variant="outline"
				class="ms-auto"
				:label="isHorizontal ? 'Start' : 'Top'"
				@click="scrollToStart"
			/>
		</div>

		<!-- Horizontal: the header sits left of the cards (in the row) so it scrolls away with them. -->
		<div :class="isHorizontal && 'flex'">
			<div
				v-if="isHorizontal"
				ref="title"
				class="w-72 shrink-0 flex flex-col justify-center gap-4 p-6 bg-elevated/50 border-r border-default"
			>
				<div>
					<h2 class="text-2xl font-bold text-highlighted">Members</h2>
					<p class="text-muted">
						This header scrolls away with the cards, sharing one scrollbar.
					</p>
				</div>
				<UBadge
					color="neutral"
					variant="subtle"
					class="self-start"
					:label="`${users.length} members`"
				/>
			</div>

			<UScrollArea
				ref="scrollArea"
				v-slot="{ item, index }"
				:orientation="orientation"
				:items="users"
				:class="isHorizontal && 'h-48 shrink-0'"
				:virtualize="{
					scrollMargin,
					getScrollElement,
					estimateSize: itemSize,
					skipMeasurement: isHorizontal,
				}"
			>
				<UPageCard
					class="rounded-none h-full"
					:class="[
						isHorizontal && 'w-64',
						index === currentMatch && 'bg-primary/10',
					]"
				>
					<div
						class="flex gap-3 h-full min-w-0"
						:class="
							isHorizontal
								? 'flex-col items-center justify-center text-center'
								: 'items-center'
						"
					>
						<UAvatar
							:src="item.image"
							:alt="item.firstName"
							:size="isHorizontal ? '2xl' : 'lg'"
							loading="lazy"
						/>
						<div class="min-w-0">
							<p class="font-medium text-highlighted truncate">
								{{ item.firstName }} {{ item.lastName }}
							</p>
							<p class="text-sm text-muted truncate">
								{{ item.email }}
							</p>
						</div>
					</div>
				</UPageCard>
			</UScrollArea>
		</div>
	</div>
</template>
```

> [!NOTE]
>
> Because the container owns the scroll, the toolbar's find and "Top" buttons scroll it directly with `container.scrollTo`.

> [!CAUTION]
>
> The `shadow` prop has no effect in this mode, since the root no longer owns the scroll. Apply your own fade to the scroll container instead.

### With programmatic scroll

You can use the exposed `virtualizer` to programmatically control scroll position.

```vue [ScrollAreaScrollToExample.vue]
<script setup lang="ts">
	const items = computed(() =>
		Array.from({ length: 1000 }, (_, i) => ({
			id: i + 1,
			title: `Item ${i + 1}`,
		})),
	);

	const scrollArea = useTemplateRef('scrollArea');

	const targetIndex = ref(500);

	function scrollToTop() {
		scrollArea.value?.virtualizer?.scrollToIndex(0, {
			align: 'start',
			behavior: 'smooth',
		});
	}

	function scrollToBottom() {
		scrollArea.value?.virtualizer?.scrollToIndex(items.value.length - 1, {
			align: 'end',
			behavior: 'smooth',
		});
	}

	function scrollToItem(index: number) {
		scrollArea.value?.virtualizer?.scrollToIndex(index - 1, {
			align: 'center',
			behavior: 'smooth',
		});
	}
</script>

<template>
	<div class="w-full">
		<UScrollArea
			v-slot="{ item, index }"
			ref="scrollArea"
			:items="items"
			:virtualize="{
				estimateSize: 72,
				skipMeasurement: true,
			}"
			class="h-96 w-full"
		>
			<UPageCard
				v-bind="item"
				:variant="index % 2 === 0 ? 'soft' : 'outline'"
				class="rounded-none isolate"
				:class="[index === targetIndex - 1 && 'bg-primary']"
			/>
		</UScrollArea>

		<UFieldGroup
			size="sm"
			class="px-4 py-3 border-t border-muted w-full"
		>
			<UButton
				icon="i-lucide-arrow-up-to-line"
				color="neutral"
				variant="outline"
				@click="scrollToTop"
			>
				Top
			</UButton>
			<UButton
				icon="i-lucide-arrow-down-to-line"
				color="neutral"
				variant="outline"
				@click="scrollToBottom"
			>
				Bottom
			</UButton>
			<UButton
				icon="i-lucide-navigation"
				color="neutral"
				variant="outline"
				@click="scrollToItem(targetIndex || 500)"
			>
				Go to {{ targetIndex || 500 }}
			</UButton>
		</UFieldGroup>
	</div>
</template>
```

### With infinite scroll

You can use the [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable to load more data as the user scrolls.

```vue [ScrollAreaInfiniteScrollExample.vue]
<script setup lang="ts">
	import { useInfiniteScroll } from '@vueuse/core';

	type User = {
		id: number;
		firstName: string;
		lastName: string;
		username: string;
		email: string;
		image: string;
	};

	type UserResponse = {
		users: User[];
		total: number;
		skip: number;
		limit: number;
	};

	const skip = ref(0);

	const { data, status } = useLazyFetch(
		'https://dummyjson.com/users?limit=10&select=firstName,lastName,username,email,image',
		{
			key: 'scroll-area-users-infinite-scroll',
			params: { skip },
			transform: (data?: UserResponse) => {
				return data?.users;
			},
			server: false,
		},
	);

	const users = ref<User[]>([]);

	watch(data, () => {
		users.value = [...users.value, ...(data.value || [])];
	});

	const scrollArea = useTemplateRef('scrollArea');

	onMounted(() => {
		useInfiniteScroll(
			scrollArea.value?.$el,
			() => {
				skip.value += 10;
			},
			{
				distance: 200,
				canLoadMore: () => {
					return status.value !== 'pending';
				},
			},
		);
	});
</script>

<template>
	<UScrollArea
		ref="scrollArea"
		v-slot="{ item }"
		:items="users"
		:virtualize="{
			estimateSize: 88,
			skipMeasurement: true,
		}"
		class="h-96 w-full"
	>
		<UPageCard
			orientation="horizontal"
			class="rounded-none"
		>
			<UUser
				:name="`${item.firstName} ${item.lastName}`"
				:description="item.email"
				:avatar="{
					src: item.image,
					alt: item.firstName,
					loading: 'lazy' as const,
				}"
				size="lg"
			/>
		</UPageCard>
	</UScrollArea>

	<UProgress
		v-if="status === 'pending' || status === 'idle'"
		indeterminate
		size="xs"
		class="absolute top-0 inset-x-0 z-1"
		:ui="{ base: 'bg-default' }"
	/>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `server: false` to fetch data on the client without blocking the initial render. The loading state checks for both `pending` and `idle` status to display a loading indicator before and during the fetch. Additional pages are loaded as the user scrolls.

### With default slot

You can use the default slot without the `items` prop to render custom scrollable content directly.

```vue [ScrollAreaDefaultSlotExample.vue]
<template>
	<UScrollArea
		class="h-96 w-full"
		:ui="{ viewport: 'gap-4 p-4' }"
	>
		<UPageCard
			title="Section 1"
			description="Custom content without using the items prop."
		/>
		<UPageCard
			title="Section 2"
			description="Custom content without using the items prop."
		/>
		<UPageCard
			title="Section 3"
			description="Custom content without using the items prop."
		/>
		<UPageCard
			title="Section 4"
			description="Custom content without using the items prop."
		/>
		<UPageCard
			title="Section 5"
			description="Custom content without using the items prop."
		/>
		<UPageCard
			title="Section 6"
			description="Custom content without using the items prop."
		/>
	</UScrollArea>
</template>
```

## API

### Props

```ts
/**
 * Props for the ScrollArea component
 */
interface ScrollAreaProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * The scroll direction.
	 * @default 'vertical'
	 */
	orientation?: 'vertical' | 'horizontal' | undefined;
	/**
	 * Array of items to render.
	 */
	items?: T[] | undefined;
	/**
	 * Enable virtualization for large lists.
	 * @default false
	 */
	virtualize?: boolean | ScrollAreaVirtualizeOptions | undefined;
	/**
	 * Display fade shadows on the scrollable edges to indicate more content.
	 * Pass an object to configure the shadow size (in px).
	 * @default false
	 */
	shadow?: boolean | { size?: number | undefined } | undefined;
	ui?: { root?: SlotClass; viewport?: SlotClass; item?: SlotClass } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ScrollArea component
 */
interface ScrollAreaSlots {
	default(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the ScrollArea component
 */
interface ScrollAreaEmits {
	scroll: (payload: [isScrolling: boolean]) => void;
}
```

### Expose

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
	const scrollArea = useTemplateRef('scrollArea');

	// Scroll to a specific item
	function scrollToItem(index: number) {
		scrollArea.value?.virtualizer?.scrollToIndex(index, { align: 'center' });
	}
</script>

<template>
	<UScrollArea
		ref="scrollArea"
		:items="items"
		virtualize
	/>
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
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          $el
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          HTMLElement
        </span>
      </code>
    </td>
    
    <td>
      The root element of the component.
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          virtualizer
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
          Virtualizer
        </span>
        
        <span class="sMK4o">
          >
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          undefined
        </span>
      </code>
    </td>
    
    <td>
      The <a href="https://tanstack.com/virtual/latest/docs/api/virtualizer" rel="nofollow">
        TanStack Virtual
      </a>
      
       virtualizer instance (<code>
        undefined
      </code>
      
       if virtualization is disabled).
    </td>
  </tr>
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		scrollArea: {
			slots: {
				root: 'relative outline-primary/25 focus-visible:outline-3',
				viewport: 'relative flex',
				item: '',
			},
			variants: {
				orientation: {
					vertical: {
						root: 'overflow-y-auto overflow-x-hidden',
						viewport: 'flex-col',
						item: '',
					},
					horizontal: {
						root: 'overflow-x-auto overflow-y-hidden',
						viewport: 'flex-row',
						item: '',
					},
				},
				externalScroll: {
					true: {
						root: 'overflow-visible',
					},
				},
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/ScrollArea.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/scroll-area.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Table"
description: "A responsive table element to display data in rows and columns."
canonical_url: "https://ui.nuxt.com/docs/components/table"

---

# Table

> A responsive table element to display data in rows and columns.

## Usage

The Table component is built on top of [TanStack Table v8](https://tanstack.com/table/v8) and is powered by the [useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable) composable to provide a flexible and fully type-safe API.

It renders your data as rows and columns and supports sorting, filtering, pagination, row selection, expansion, grouping, pinning and virtualization, so you can build everything from a simple data table to a fully featured data grid.

```vue [TableExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import { upperFirst } from 'scule';
	import type { TableColumn } from '@nuxt/ui';
	import { useClipboard } from '@vueuse/core';

	const UButton = resolveComponent('UButton');
	const UCheckbox = resolveComponent('UCheckbox');
	const UBadge = resolveComponent('UBadge');
	const UDropdownMenu = resolveComponent('UDropdownMenu');

	const toast = useToast();
	const { copy } = useClipboard();

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
		{
			id: '4595',
			date: '2024-03-10T13:40:00',
			status: 'refunded',
			email: 'ava.thomas@example.com',
			amount: 428,
		},
		{
			id: '4594',
			date: '2024-03-10T09:15:00',
			status: 'paid',
			email: 'michael.wilson@example.com',
			amount: 683,
		},
		{
			id: '4593',
			date: '2024-03-09T20:25:00',
			status: 'failed',
			email: 'olivia.taylor@example.com',
			amount: 947,
		},
		{
			id: '4592',
			date: '2024-03-09T18:45:00',
			status: 'paid',
			email: 'benjamin.jackson@example.com',
			amount: 851,
		},
		{
			id: '4591',
			date: '2024-03-09T16:05:00',
			status: 'paid',
			email: 'sophia.miller@example.com',
			amount: 762,
		},
		{
			id: '4590',
			date: '2024-03-09T14:20:00',
			status: 'paid',
			email: 'noah.clark@example.com',
			amount: 573,
		},
		{
			id: '4589',
			date: '2024-03-09T11:35:00',
			status: 'failed',
			email: 'isabella.lee@example.com',
			amount: 389,
		},
		{
			id: '4588',
			date: '2024-03-08T22:50:00',
			status: 'refunded',
			email: 'liam.walker@example.com',
			amount: 701,
		},
		{
			id: '4587',
			date: '2024-03-08T20:15:00',
			status: 'paid',
			email: 'charlotte.hall@example.com',
			amount: 856,
		},
		{
			id: '4586',
			date: '2024-03-08T17:40:00',
			status: 'paid',
			email: 'mason.young@example.com',
			amount: 492,
		},
		{
			id: '4585',
			date: '2024-03-08T14:55:00',
			status: 'failed',
			email: 'amelia.king@example.com',
			amount: 637,
		},
		{
			id: '4584',
			date: '2024-03-08T12:30:00',
			status: 'paid',
			email: 'elijah.wright@example.com',
			amount: 784,
		},
		{
			id: '4583',
			date: '2024-03-08T09:45:00',
			status: 'refunded',
			email: 'harper.scott@example.com',
			amount: 345,
		},
		{
			id: '4582',
			date: '2024-03-07T23:10:00',
			status: 'paid',
			email: 'evelyn.green@example.com',
			amount: 918,
		},
		{
			id: '4581',
			date: '2024-03-07T20:25:00',
			status: 'paid',
			email: 'logan.baker@example.com',
			amount: 567,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				h(UCheckbox, {
					modelValue: table.getIsSomePageRowsSelected()
						? 'indeterminate'
						: table.getIsAllPageRowsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all',
				}),
			cell: ({ row }) =>
				h(UCheckbox, {
					modelValue: row.getIsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						row.toggleSelected(!!value),
					'aria-label': 'Select row',
				}),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: ({ column }) => {
				const isSorted = column.getIsSorted();

				return h(UButton, {
					color: 'neutral',
					variant: 'ghost',
					label: 'Email',
					icon: isSorted
						? isSorted === 'asc'
							? 'i-lucide-arrow-up-narrow-wide'
							: 'i-lucide-arrow-down-wide-narrow'
						: 'i-lucide-arrow-up-down',
					class: '-mx-2.5',
					onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				});
			},
			meta: {
				class: {
					td: 'lowercase',
				},
			},
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
		{
			id: 'actions',
			enableHiding: false,
			meta: {
				class: {
					td: 'text-right',
				},
			},
			cell: ({ row }) => {
				const items = [
					{
						type: 'label',
						label: 'Actions',
					},
					{
						label: 'Copy payment ID',
						onSelect() {
							copy(row.original.id);

							toast.add({
								title: 'Payment ID copied to clipboard!',
								color: 'success',
								icon: 'i-lucide-circle-check',
							});
						},
					},
					{
						label: row.getIsExpanded() ? 'Collapse' : 'Expand',
						onSelect() {
							row.toggleExpanded();
						},
					},
					{
						type: 'separator',
					},
					{
						label: 'View customer',
					},
					{
						label: 'View payment details',
					},
				];

				return h(
					UDropdownMenu,
					{
						content: {
							align: 'end',
						},
						items,
						'aria-label': 'Actions dropdown',
					},
					() =>
						h(UButton, {
							icon: 'i-lucide-ellipsis-vertical',
							color: 'neutral',
							variant: 'ghost',
							'aria-label': 'Actions dropdown',
						}),
				);
			},
		},
	];

	const table = useTemplateRef('table');

	function randomize() {
		data.value = [...data.value].sort(() => Math.random() - 0.5);
	}
</script>

<template>
	<div class="flex-1 divide-y divide-accented w-full">
		<div class="flex items-center gap-2 px-4 py-3.5 overflow-x-auto">
			<UInput
				:model-value="
					table?.tableApi?.getColumn('email')?.getFilterValue() as string
				"
				class="max-w-sm min-w-[12ch]"
				placeholder="Filter emails..."
				@update:model-value="
					table?.tableApi?.getColumn('email')?.setFilterValue($event)
				"
			/>

			<UButton
				color="neutral"
				label="Randomize"
				@click="randomize"
			/>

			<UDropdownMenu
				:items="
					table?.tableApi
						?.getAllColumns()
						.filter((column) => column.getCanHide())
						.map((column) => ({
							label: upperFirst(column.id),
							type: 'checkbox' as const,
							checked: column.getIsVisible(),
							onUpdateChecked(checked: boolean) {
								table?.tableApi
									?.getColumn(column.id)
									?.toggleVisibility(!!checked);
							},
							onSelect(e: Event) {
								e.preventDefault();
							},
						}))
				"
				:content="{ align: 'end' }"
			>
				<UButton
					label="Columns"
					color="neutral"
					variant="outline"
					trailing-icon="i-lucide-chevron-down"
					class="ml-auto"
					aria-label="Columns select dropdown"
				/>
			</UDropdownMenu>
		</div>

		<UTable
			ref="table"
			:data="data"
			:columns="columns"
			sticky
			class="h-96"
		>
			<template #expanded="{ row }">
				<pre>{{ row.original }}</pre>
			</template>
		</UTable>

		<div class="px-4 py-3.5 text-sm text-muted">
			{{ table?.tableApi?.getFilteredSelectedRowModel().rows.length || 0 }} of
			{{ table?.tableApi?.getFilteredRowModel().rows.length || 0 }} row(s)
			selected.
		</div>
	</div>
</template>
```

> [!NOTE]
> See: https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue
>
> This example demonstrates the most common use case of the `Table` component. Check out the source code on GitHub.

### Data

Use the `data` prop as an array of objects, the columns will be generated based on the keys of the objects.

```vue
<script setup lang="ts">
	const data = ref([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);
</script>

<template>
	<UTable
		:data="data"
		class="flex-1"
	/>
</template>
```

### Columns

Use the `columns` prop as an array of [ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def) objects with properties like:

- `accessorKey`: <span className="text-muted">

The key of the row object to use when extracting the value for the column.

</span>
- `header`: <span className="text-muted">

The header to display for the column. If a string is passed, it can be used as a default for the column ID. If a function is passed, it will be passed a props object for the header and should return the rendered header value (the exact type depends on the adapter being used).

</span>
- [`footer`](#with-column-footer): <span className="text-muted">

The footer to display for the column. Works exactly like header, but is displayed under the table.

</span>
- `cell`: <span className="text-muted">

The cell to display each row for the column. If a function is passed, it will be passed a props object for the cell and should return the rendered cell value (the exact type depends on the adapter being used).

</span>
- `meta`: <span className="text-muted">

Extra properties for the column.

</span>

- `class`:
  - `td`: <span className="text-muted">

  The classes to apply to the `td` element.

  </span>
  - `th`: <span className="text-muted">

  The classes to apply to the `th` element.

  </span>

- `style`:
  - `td`: <span className="text-muted">

  The style to apply to the `td` element.

  </span>
  - `th`: <span className="text-muted">

  The style to apply to the `th` element.

  </span>

- [`colspan`](#with-column-span):
  - `td`: <span className="text-muted">

  The colspan attribute to apply to the `td` element.

  </span>

- [`rowspan`](#with-column-span):
  - `td`: <span className="text-muted">

  The rowspan attribute to apply to the `td` element.

  </span>

To render components or other HTML elements, you need to use the Vue [`h` function](https://vuejs.org/api/render-function.html#h) inside the `header` and `cell` props. This is different from other components that use slots but allows for more flexibility.

> [!TIP]
> See: #with-slots
>
> You can also use slots to customize the header and data cells of the table.

```vue [TableColumnsExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';

	const UBadge = resolveComponent('UBadge');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];
</script>

<template>
	<UTable
		:data="data"
		:columns="columns"
		class="flex-1"
	/>
</template>
```

> [!NOTE]
>
> When rendering components with `h`, you can either use the `resolveComponent` function or import from `#components`.

### Meta

Use the `meta` prop as an object ([TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)) to pass properties like:

- `class`:
  - `tr`: <span className="text-muted">

  The classes to apply to the `tr` element.

  </span>

- `style`:
  - `tr`: <span className="text-muted">

  The style to apply to the `tr` element.

  </span>

```vue [TableMetaExample.vue]
<script setup lang="ts">
	import type { TableColumn } from '@nuxt/ui';
	import type { TableMeta, Row } from '@tanstack/vue-table';

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: 'ID',
			meta: {
				class: {
					th: 'text-center font-semibold',
					td: 'text-center font-mono',
				},
			},
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			meta: {
				class: {
					th: 'text-center',
					td: 'text-center',
				},
			},
			cell: ({ row }) => {
				const status = row.getValue('status') as string;
				const colorMap = {
					paid: 'text-success',
					failed: 'text-error',
					refunded: 'text-warning',
				};
				return h(
					'span',
					{
						class: `font-semibold capitalize ${colorMap[status as keyof typeof colorMap]}`,
					},
					status,
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
			meta: {
				class: {
					th: 'text-left',
					td: 'text-left',
				},
			},
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right font-bold text-primary',
					td: 'text-right font-mono',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(amount);
				return h('span', { class: 'font-semibold text-success' }, formatted);
			},
		},
	];

	const meta: TableMeta<Payment> = {
		class: {
			tr: (row: Row<Payment>) => {
				if (row.original.status === 'failed') {
					return 'bg-error/10';
				}
				if (row.original.status === 'refunded') {
					return 'bg-warning/10';
				}
				return '';
			},
		},
	};
</script>

<template>
	<UTable
		:data="data"
		:columns="columns"
		:meta="meta"
		class="flex-1"
	/>
</template>
```

### Loading

Use the `loading` prop to display a loading state, the `loading-color` prop to change its color and the `loading-animation` prop to change its animation.

```vue
<script setup lang="ts">
	const data = ref([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);
</script>

<template>
	<UTable
		loading
		loading-color="primary"
		loading-animation="carousel"
		:data="data"
		class="flex-1"
	/>
</template>
```

> [!TIP]
>
> The loading animation is automatically disabled when the user prefers reduced motion, the bar is displayed as a full width pulse instead.

### Sticky

Use the `sticky` prop to make the header or footer sticky.

```vue
<script setup lang="ts">
	const data = ref([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
		{
			id: '4595',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
		{
			id: '4594',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);
</script>

<template>
	<UTable
		sticky
		:data="data"
		class="flex-1 max-h-[312px]"
	/>
</template>
```

## Examples

### With row actions

You can add a new column that renders a [DropdownMenu](/docs/components/dropdown-menu) component inside the `cell` to render row actions.

```vue [TableRowActionsExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';
	import type { Row } from '@tanstack/vue-table';
	import { useClipboard } from '@vueuse/core';

	const UButton = resolveComponent('UButton');
	const UBadge = resolveComponent('UBadge');
	const UDropdownMenu = resolveComponent('UDropdownMenu');

	const toast = useToast();
	const { copy } = useClipboard();

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
		{
			id: 'actions',
			meta: {
				class: {
					td: 'text-right',
				},
			},
			cell: ({ row }) => {
				return h(
					UDropdownMenu,
					{
						content: {
							align: 'end',
						},
						items: getRowItems(row),
						'aria-label': 'Actions dropdown',
					},
					() =>
						h(UButton, {
							icon: 'i-lucide-ellipsis-vertical',
							color: 'neutral',
							variant: 'ghost',
							'aria-label': 'Actions dropdown',
						}),
				);
			},
		},
	];

	function getRowItems(row: Row<Payment>) {
		return [
			{
				type: 'label',
				label: 'Actions',
			},
			{
				label: 'Copy payment ID',
				onSelect() {
					copy(row.original.id);

					toast.add({
						title: 'Payment ID copied to clipboard!',
						color: 'success',
						icon: 'i-lucide-circle-check',
					});
				},
			},
			{
				type: 'separator',
			},
			{
				label: 'View customer',
			},
			{
				label: 'View payment details',
			},
		];
	}
</script>

<template>
	<UTable
		:data="data"
		:columns="columns"
		class="flex-1"
	/>
</template>
```

### With expandable rows

You can add a new column that renders a [Button](/docs/components/button) component inside the `cell` to toggle the expandable state of a row using the TanStack Table [Expanding APIs](https://tanstack.com/table/v8/docs/api/features/expanding).

> [!CAUTION]
>
> You need to define the `#expanded` slot to render the expanded content which will receive the row as a parameter.

```vue [TableRowExpandableExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';

	const UButton = resolveComponent('UButton');
	const UBadge = resolveComponent('UBadge');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			id: 'expand',
			cell: ({ row }) =>
				h(UButton, {
					color: 'neutral',
					variant: 'ghost',
					icon: 'i-lucide-chevron-down',
					square: true,
					'aria-label': 'Expand',
					ui: {
						leadingIcon: [
							'transition-transform',
							row.getIsExpanded() ? 'duration-200 rotate-180' : '',
						],
					},
					onClick: () => row.toggleExpanded(),
				}),
		},
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const expanded = ref({ 1: true });
</script>

<template>
	<UTable
		v-model:expanded="expanded"
		:data="data"
		:columns="columns"
		:ui="{ tr: 'data-[expanded=true]:bg-elevated/50' }"
		class="flex-1"
	>
		<template #expanded="{ row }">
			<pre>{{ row.original }}</pre>
		</template>
	</UTable>
</template>
```

> [!TIP]
>
> You can use the `expanded` prop to control the expandable state of the rows (can be bound with `v-model`).

> [!NOTE]
>
> You could also add this action to the [`DropdownMenu`](/docs/components/dropdown-menu) component inside the `actions` column.

### With grouped rows

You can group rows based on a given column value and show/hide sub rows via some button added to the cell using the TanStack Table [Grouping APIs](https://tanstack.com/table/v8/docs/api/features/grouping).

#### Important parts

- Add `grouping` prop with an array of column ids you want to group by.
- Add `grouping-options` prop. It must include `getGroupedRowModel`, you can import it from `@tanstack/vue-table` or implement your own.
- Expand rows via `row.toggleExpanded()` method on any cell of the row. Keep in mind, it also toggles `#expanded` slot.
- Use `aggregateFn` on column definition to define how to aggregate the rows.
- `agregatedCell` renderer on column definition only works if there is no `cell` renderer.

```vue [TableGroupedRowsExample.vue]
<script setup lang="ts">
	import { resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';
	import { getGroupedRowModel } from '@tanstack/vue-table';
	import type { GroupingOptions } from '@tanstack/vue-table';

	const UBadge = resolveComponent('UBadge');

	type Account = {
		id: string;
		name: string;
	};

	type PaymentStatus = 'paid' | 'failed' | 'refunded';

	type Payment = {
		id: string;
		date: string;
		status: PaymentStatus;
		email: string;
		amount: number;
		account: Account;
	};

	const getColorByStatus = (status: PaymentStatus) => {
		return {
			paid: 'success',
			failed: 'error',
			refunded: 'neutral',
		}[status];
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
			account: {
				id: '1',
				name: 'Account 1',
			},
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
			account: {
				id: '2',
				name: 'Account 2',
			},
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
			account: {
				id: '1',
				name: 'Account 1',
			},
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
			account: {
				id: '2',
				name: 'Account 2',
			},
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
			account: {
				id: '1',
				name: 'Account 1',
			},
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			id: 'title',
			header: 'Item',
		},
		{
			id: 'account_id',
			accessorKey: 'account.id',
		},
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) =>
				row.getIsGrouped()
					? `${row.getValue('id')} records`
					: `#${row.getValue('id')}`,
			aggregationFn: 'count',
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
			aggregationFn: 'max',
		},
		{
			accessorKey: 'status',
			header: 'Status',
		},
		{
			accessorKey: 'email',
			header: 'Email',
			meta: {
				class: {
					td: 'w-full',
				},
			},
			cell: ({ row }) =>
				row.getIsGrouped()
					? `${row.getValue('email')} customers`
					: row.getValue('email'),
			aggregationFn: 'uniqueCount',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
			aggregationFn: 'sum',
		},
	];

	const grouping_options = ref<GroupingOptions>({
		groupedColumnMode: 'remove',
		getGroupedRowModel: getGroupedRowModel(),
	});
</script>

<template>
	<UTable
		:data="data"
		:columns="columns"
		:grouping="['account_id', 'status']"
		:grouping-options="grouping_options"
		:ui="{
			root: 'min-w-full',
			td: 'empty:p-0', // helps with the colspaned row added for expand slot
		}"
	>
		<template #title-cell="{ row }">
			<div
				v-if="row.getIsGrouped()"
				class="flex items-center"
			>
				<span
					class="inline-block"
					:style="{ width: `calc(${row.depth} * 1rem)` }"
				/>

				<UButton
					variant="outline"
					color="neutral"
					class="mr-2"
					size="xs"
					:icon="row.getIsExpanded() ? 'i-lucide-minus' : 'i-lucide-plus'"
					@click="row.toggleExpanded()"
				/>
				<strong v-if="row.groupingColumnId === 'account_id'">{{
					row.original.account.name
				}}</strong>
				<UBadge
					v-else-if="row.groupingColumnId === 'status'"
					:color="getColorByStatus(row.original.status)"
					class="capitalize"
					variant="subtle"
				>
					{{ row.original.status }}
				</UBadge>
			</div>
		</template>
	</UTable>
</template>
```

### With row pinning `4.6+`

You can add a column that renders a [Button](/docs/components/button) component inside the `cell` to toggle the pinning state of a row using the TanStack Table [Row Pinning APIs](https://tanstack.com/table/v8/docs/api/features/row-pinning). Pinned rows will stay at the top or bottom of the table regardless of sorting or filtering.

```vue [TableRowPinningExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';
	import type { RowPinningState } from '@tanstack/table-core';

	const UButton = resolveComponent('UButton');
	const UBadge = resolveComponent('UBadge');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
		{
			id: '4595',
			date: '2024-03-10T13:40:00',
			status: 'refunded',
			email: 'ava.thomas@example.com',
			amount: 428,
		},
		{
			id: '4594',
			date: '2024-03-10T09:15:00',
			status: 'paid',
			email: 'michael.wilson@example.com',
			amount: 683,
		},
		{
			id: '4593',
			date: '2024-03-09T20:25:00',
			status: 'failed',
			email: 'olivia.taylor@example.com',
			amount: 947,
		},
		{
			id: '4592',
			date: '2024-03-09T18:45:00',
			status: 'paid',
			email: 'benjamin.jackson@example.com',
			amount: 851,
		},
		{
			id: '4591',
			date: '2024-03-09T16:05:00',
			status: 'paid',
			email: 'sophia.miller@example.com',
			amount: 762,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			id: 'pin',
			cell: ({ row }) =>
				h(UButton, {
					icon: 'i-lucide-star',
					color: row.getIsPinned() ? 'primary' : 'neutral',
					variant: 'ghost',
					'aria-label': row.getIsPinned() ? 'Unpin row' : 'Pin row to top',
					onClick: () => {
						if (row.getIsPinned()) {
							row.pin(false);
						} else {
							row.pin('top');
						}
					},
				}),
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
					timeZone: 'UTC',
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const rowPinning = ref<RowPinningState>({
		top: ['4599', '4597'],
		bottom: [],
	});
</script>

<template>
	<UTable
		v-model:row-pinning="rowPinning"
		:data="data"
		:columns="columns"
		:get-row-id="(row: Payment) => row.id"
		class="flex-1 h-96"
	/>
</template>
```

> [!TIP]
>
> You can use the `row-pinning` prop to control the pinning state of the rows (can be bound with `v-model`).

### With row selection

You can add a new column that renders a [Checkbox](/docs/components/checkbox) component inside the `header` and `cell` to select rows using the TanStack Table [Row Selection APIs](https://tanstack.com/table/v8/docs/api/features/row-selection).

```vue [TableRowSelectionExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';

	const UCheckbox = resolveComponent('UCheckbox');
	const UBadge = resolveComponent('UBadge');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				h(UCheckbox, {
					modelValue: table.getIsSomePageRowsSelected()
						? 'indeterminate'
						: table.getIsAllPageRowsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all',
				}),
			cell: ({ row }) =>
				h(UCheckbox, {
					modelValue: row.getIsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						row.toggleSelected(!!value),
					'aria-label': 'Select row',
				}),
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const table = useTemplateRef('table');

	const rowSelection = ref({ 1: true });
</script>

<template>
	<div class="flex-1 w-full">
		<UTable
			ref="table"
			v-model:row-selection="rowSelection"
			:data="data"
			:columns="columns"
		/>

		<div class="px-4 py-3.5 border-t border-accented text-sm text-muted">
			{{ table?.tableApi?.getFilteredSelectedRowModel().rows.length || 0 }} of
			{{ table?.tableApi?.getFilteredRowModel().rows.length || 0 }} row(s)
			selected.
		</div>
	</div>
</template>
```

> [!TIP]
>
> You can use the `row-selection` prop to control the selection state of the rows (can be bound with `v-model`).

### With row select event

You can add a `@select` listener to make rows clickable with or without a checkbox column.

> [!NOTE]
>
> The handler function receives the `Event` and `TableRow` instance as the first and second arguments respectively.

```vue [TableRowSelectEventExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn, TableRow } from '@nuxt/ui';

	const UBadge = resolveComponent('UBadge');
	const UCheckbox = resolveComponent('UCheckbox');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				h(UCheckbox, {
					modelValue: table.getIsSomePageRowsSelected()
						? 'indeterminate'
						: table.getIsAllPageRowsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all',
				}),
			cell: ({ row }) =>
				h(UCheckbox, {
					modelValue: row.getIsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						row.toggleSelected(!!value),
					'aria-label': 'Select row',
				}),
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const table = useTemplateRef('table');

	const rowSelection = ref<Record<string, boolean>>({});

	function onSelect(e: Event, row: TableRow<Payment>) {
		/* If you decide to also select the column you can do this  */
		row.toggleSelected(!row.getIsSelected());
	}
</script>

<template>
	<div class="flex w-full flex-1 gap-1">
		<div class="flex-1">
			<UTable
				ref="table"
				v-model:row-selection="rowSelection"
				:data="data"
				:columns="columns"
				@select="onSelect"
			/>

			<div class="px-4 py-3.5 border-t border-accented text-sm text-muted">
				{{ table?.tableApi?.getFilteredSelectedRowModel().rows.length || 0 }} of
				{{ table?.tableApi?.getFilteredRowModel().rows.length || 0 }} row(s)
				selected.
			</div>
		</div>
	</div>
</template>
```

> [!TIP]
>
> You can use this to navigate to a page, open a modal or even to select the row manually.

### With row context menu event

You can add a `@contextmenu` listener to make rows right clickable and wrap the Table in a [ContextMenu](/docs/components/context-menu) component to display row actions for example.

> [!NOTE]
>
> The handler function receives the `Event` and `TableRow` instance as the first and second arguments respectively.

```vue [TableRowContextMenuEventExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { ContextMenuItem, TableColumn, TableRow } from '@nuxt/ui';
	import { useClipboard } from '@vueuse/core';

	const UBadge = resolveComponent('UBadge');
	const UCheckbox = resolveComponent('UCheckbox');

	const toast = useToast();
	const { copy } = useClipboard();

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				h(UCheckbox, {
					modelValue: table.getIsSomePageRowsSelected()
						? 'indeterminate'
						: table.getIsAllPageRowsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all',
				}),
			cell: ({ row }) =>
				h(UCheckbox, {
					modelValue: row.getIsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						row.toggleSelected(!!value),
					'aria-label': 'Select row',
				}),
		},
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const items = ref<ContextMenuItem[]>([]);

	function getRowItems(row: TableRow<Payment>) {
		return [
			{
				type: 'label' as const,
				label: 'Actions',
			},
			{
				label: 'Copy payment ID',
				onSelect() {
					copy(row.original.id);

					toast.add({
						title: 'Payment ID copied to clipboard!',
						color: 'success',
						icon: 'i-lucide-circle-check',
					});
				},
			},
			{
				label: row.getIsExpanded() ? 'Collapse' : 'Expand',
				onSelect() {
					row.toggleExpanded();
				},
			},
			{
				type: 'separator' as const,
			},
			{
				label: 'View customer',
			},
			{
				label: 'View payment details',
			},
		];
	}

	function onContextmenu(_e: Event, row: TableRow<Payment>) {
		items.value = getRowItems(row);
	}
</script>

<template>
	<UContextMenu :items="items">
		<UTable
			:data="data"
			:columns="columns"
			class="flex-1"
			@contextmenu="onContextmenu"
		>
			<template #expanded="{ row }">
				<pre>{{ row.original }}</pre>
			</template>
		</UTable>
	</UContextMenu>
</template>
```

### With row hover event

You can add a `@hover` listener to make rows hoverable and use a [Popover](/docs/components/popover) or a [Tooltip](/docs/components/tooltip) component to display row details for example.

> [!NOTE]
>
> The handler function receives the `Event` and `TableRow` instance as the first and second arguments respectively.

```vue [TableRowHoverEventExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn, TableRow } from '@nuxt/ui';

	const UBadge = resolveComponent('UBadge');
	const UCheckbox = resolveComponent('UCheckbox');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				h(UCheckbox, {
					modelValue: table.getIsSomePageRowsSelected()
						? 'indeterminate'
						: table.getIsAllPageRowsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all',
				}),
			cell: ({ row }) =>
				h(UCheckbox, {
					modelValue: row.getIsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						row.toggleSelected(!!value),
					'aria-label': 'Select row',
				}),
		},
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const anchor = ref({ x: 0, y: 0 });

	const reference = computed(() => ({
		getBoundingClientRect: () =>
			({
				width: 0,
				height: 0,
				left: anchor.value.x,
				right: anchor.value.x,
				top: anchor.value.y,
				bottom: anchor.value.y,
				...anchor.value,
			}) as DOMRect,
	}));

	const open = ref(false);
	const openDebounced = refDebounced(open, 10);
	const selectedRow = ref<TableRow<Payment> | null>(null);

	function onHover(_e: Event, row: TableRow<Payment> | null) {
		selectedRow.value = row;

		open.value = !!row;
	}
</script>

<template>
	<div class="flex w-full flex-1 gap-1">
		<UTable
			:data="data"
			:columns="columns"
			class="flex-1"
			@pointermove="
				(ev: PointerEvent) => {
					anchor.x = ev.clientX;
					anchor.y = ev.clientY;
				}
			"
			@hover="onHover"
		/>

		<UPopover
			:content="{
				side: 'top',
				sideOffset: 16,
				updatePositionStrategy: 'always',
			}"
			:open="openDebounced"
			:reference="reference"
		>
			<template #content>
				<div class="p-4">
					{{ selectedRow?.original?.id }}
				</div>
			</template>
		</UPopover>
	</div>
</template>
```

> [!NOTE]
>
> This example is similar as the Popover [with following cursor example](/docs/components/popover#with-following-cursor) and uses a [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) to prevent the Popover from opening and closing too quickly when moving the cursor from one row to another.

### With column footer

You can add a `footer` property to the column definition to render a footer for the column.

```vue [TableColumnFooterExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn, TableRow } from '@nuxt/ui';

	const UBadge = resolveComponent('UBadge');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			footer: ({ column }) => {
				const total = column
					.getFacetedRowModel()
					.rows.reduce(
						(acc: number, row: TableRow<Payment>) =>
							acc + Number.parseFloat(row.getValue('amount')),
						0,
					);
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(total);
				return `Total: ${formatted}`;
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];
</script>

<template>
	<UTable
		:data="data"
		:columns="columns"
		class="flex-1"
	/>
</template>
```

### With column span

You can use the `colspan` and `rowspan` properties in the column `meta` to merge cells. These properties accept a static value or a function that receives the cell and returns the span value.

> [!NOTE]
>
> When using `rowspan`, cells that are "absorbed" by a previous row's span need to be visually hidden. Use the `class` meta with a function that returns `'hidden'` for those cells.

```vue [TableColumnSpanExample.vue]
<script setup lang="ts">
	import type { TableColumn } from '@nuxt/ui';
	import type { Cell } from '@tanstack/vue-table';

	type Product = {
		category: string;
		name: string;
		price: number;
		stock: number;
	};

	const data = ref<Product[]>([
		{ category: 'Electronics', name: 'Laptop', price: 999, stock: 45 },
		{ category: 'Electronics', name: 'Phone', price: 699, stock: 120 },
		{ category: 'Electronics', name: 'Tablet', price: 499, stock: 78 },
		{ category: 'Clothing', name: 'T-Shirt', price: 29, stock: 200 },
		{ category: 'Clothing', name: 'Jeans', price: 59, stock: 150 },
	]);

	function getCategoryRowSpan(cell: Cell<Product, unknown>) {
		const category = cell.row.original.category;
		const rows = cell.getContext().table.getRowModel().rows;
		const rowIndex = rows.findIndex(
			(r: (typeof rows)[number]) => r.id === cell.row.id,
		);

		if (rowIndex > 0 && rows[rowIndex - 1]!.original.category === category) {
			return '1';
		}

		let span = 1;
		for (let i = rowIndex + 1; i < rows.length; i++) {
			if (rows[i]!.original.category === category) span++;
			else break;
		}

		return `${span}`;
	}

	function getCategoryClass(cell: Cell<Product, unknown>) {
		const category = cell.row.original.category;
		const rows = cell.getContext().table.getRowModel().rows;
		const rowIndex = rows.findIndex(
			(r: (typeof rows)[number]) => r.id === cell.row.id,
		);

		if (rowIndex > 0 && rows[rowIndex - 1]!.original.category === category) {
			return 'hidden';
		}

		return 'font-medium align-middle border-r border-default';
	}

	const columns: TableColumn<Product>[] = [
		{
			accessorKey: 'category',
			header: 'Category',
			meta: {
				rowspan: {
					td: getCategoryRowSpan,
				},
				class: {
					td: getCategoryClass,
				},
			},
		},
		{
			accessorKey: 'name',
			header: 'Name',
		},
		{
			accessorKey: 'price',
			header: 'Price',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right',
				},
			},
			cell: ({ row }) => {
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(row.getValue('price'));
			},
		},
		{
			accessorKey: 'stock',
			header: 'Stock',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right',
				},
			},
		},
	];
</script>

<template>
	<UTable
		:data="data"
		:columns="columns"
		class="flex-1"
	/>
</template>
```

### With column sorting

You can update a column `header` to render a [Button](/docs/components/button) component inside the `header` to toggle the sorting state using the TanStack Table [Sorting APIs](https://tanstack.com/table/v8/docs/api/features/sorting).

```vue [TableColumnSortingExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';

	const UBadge = resolveComponent('UBadge');
	const UButton = resolveComponent('UButton');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: ({ column }) => {
				const isSorted = column.getIsSorted();

				return h(UButton, {
					color: 'neutral',
					variant: 'ghost',
					label: 'Email',
					icon: isSorted
						? isSorted === 'asc'
							? 'i-lucide-arrow-up-narrow-wide'
							: 'i-lucide-arrow-down-wide-narrow'
						: 'i-lucide-arrow-up-down',
					class: '-mx-2.5',
					onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				});
			},
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const sorting = ref([
		{
			id: 'email',
			desc: false,
		},
	]);
</script>

<template>
	<UTable
		v-model:sorting="sorting"
		:data="data"
		:columns="columns"
		class="flex-1"
	/>
</template>
```

> [!TIP]
>
> You can use the `sorting` prop to control the sorting state of the columns (can be bound with `v-model`).

You can also create a reusable component to make any column header sortable.

```vue [TableColumnSortingReusableExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';
	import type { Column } from '@tanstack/vue-table';

	const UBadge = resolveComponent('UBadge');
	const UButton = resolveComponent('UButton');
	const UDropdownMenu = resolveComponent('UDropdownMenu');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: ({ column }) => getHeader(column, 'ID'),
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: ({ column }) => getHeader(column, 'Date'),
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: ({ column }) => getHeader(column, 'Status'),
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: ({ column }) => getHeader(column, 'Email'),
		},
		{
			accessorKey: 'amount',
			header: ({ column }) => getHeader(column, 'Amount'),
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	function getHeader(column: Column<Payment>, label: string) {
		const isSorted = column.getIsSorted();

		return h(
			UDropdownMenu,
			{
				content: {
					align: 'start',
				},
				'aria-label': 'Actions dropdown',
				items: [
					{
						label: 'Asc',
						type: 'checkbox',
						icon: 'i-lucide-arrow-up-narrow-wide',
						checked: isSorted === 'asc',
						onSelect: () => {
							if (isSorted === 'asc') {
								column.clearSorting();
							} else {
								column.toggleSorting(false);
							}
						},
					},
					{
						label: 'Desc',
						icon: 'i-lucide-arrow-down-wide-narrow',
						type: 'checkbox',
						checked: isSorted === 'desc',
						onSelect: () => {
							if (isSorted === 'desc') {
								column.clearSorting();
							} else {
								column.toggleSorting(true);
							}
						},
					},
				],
			},
			() =>
				h(UButton, {
					color: 'neutral',
					variant: 'ghost',
					label,
					icon: isSorted
						? isSorted === 'asc'
							? 'i-lucide-arrow-up-narrow-wide'
							: 'i-lucide-arrow-down-wide-narrow'
						: 'i-lucide-arrow-up-down',
					class: '-mx-2.5 data-[state=open]:bg-elevated',
					'aria-label': `Sort by ${isSorted === 'asc' ? 'descending' : 'ascending'}`,
				}),
		);
	}

	const sorting = ref([
		{
			id: 'id',
			desc: false,
		},
	]);
</script>

<template>
	<UTable
		v-model:sorting="sorting"
		:data="data"
		:columns="columns"
		class="flex-1"
	/>
</template>
```

> [!NOTE]
>
> In this example, we use a function to define the column header but you can also create an actual component.

### With column pinning

You can update a column `header` to render a [Button](/docs/components/button) component inside the `header` to toggle the pinning state using the TanStack Table [Column Pinning APIs](https://tanstack.com/table/v8/docs/api/features/column-pinning).

> [!NOTE]
>
> A pinned column will become sticky on the left or right side of the table. When using column pinning, you should define explicit `size` values for your columns to ensure proper column width handling, especially with multiple pinned columns.

```vue [TableColumnPinningExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';
	import type { Column } from '@tanstack/vue-table';

	const UBadge = resolveComponent('UBadge');
	const UButton = resolveComponent('UButton');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600000000000000000000000000000000000000',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594000,
		},
		{
			id: '4599000000000000000000000000000000000000',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276000,
		},
		{
			id: '4598000000000000000000000000000000000000',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315000,
		},
		{
			id: '4597000000000000000000000000000000000000',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 5290000,
		},
		{
			id: '4596000000000000000000000000000000000000',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639000,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: ({ column }) => getHeader(column, 'ID', 'left'),
			cell: ({ row }) => `#${row.getValue('id')}`,
			size: 381,
		},
		{
			accessorKey: 'date',
			header: ({ column }) => getHeader(column, 'Date', 'left'),
			size: 172,
		},
		{
			accessorKey: 'status',
			header: ({ column }) => getHeader(column, 'Status', 'left'),
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
			size: 103,
		},
		{
			accessorKey: 'email',
			header: ({ column }) => getHeader(column, 'Email', 'left'),
			size: 232,
		},
		{
			accessorKey: 'amount',
			header: ({ column }) => getHeader(column, 'Amount', 'right'),
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
			size: 130,
		},
	];

	function getHeader(
		column: Column<Payment>,
		label: string,
		position: 'left' | 'right',
	) {
		const isPinned = column.getIsPinned();

		return h(UButton, {
			color: 'neutral',
			variant: 'ghost',
			label,
			icon: isPinned ? 'i-lucide-pin-off' : 'i-lucide-pin',
			class: '-mx-2.5',
			onClick() {
				column.pin(isPinned === position ? false : position);
			},
		});
	}

	const columnPinning = ref({
		left: ['id'],
		right: ['amount'],
	});
</script>

<template>
	<UTable
		v-model:column-pinning="columnPinning"
		:data="data"
		:columns="columns"
		class="flex-1"
	/>
</template>
```

> [!TIP]
>
> You can use the `column-pinning` prop to control the pinning state of the columns (can be bound with `v-model`).

### With column visibility

You can use a [DropdownMenu](/docs/components/dropdown-menu) component to toggle the visibility of the columns using the TanStack Table [Column Visibility APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility).

```vue [TableColumnVisibilityExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import { upperFirst } from 'scule';
	import type { TableColumn } from '@nuxt/ui';

	const UBadge = resolveComponent('UBadge');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const table = useTemplateRef('table');

	const columnVisibility = ref({
		id: false,
	});
</script>

<template>
	<div class="flex flex-col flex-1 w-full">
		<div class="flex justify-end px-4 py-3.5 border-b border-accented">
			<UDropdownMenu
				:items="
					table?.tableApi
						?.getAllColumns()
						.filter((column) => column.getCanHide())
						.map((column) => ({
							label: upperFirst(column.id),
							type: 'checkbox' as const,
							checked: column.getIsVisible(),
							onUpdateChecked(checked: boolean) {
								table?.tableApi
									?.getColumn(column.id)
									?.toggleVisibility(!!checked);
							},
							onSelect(e: Event) {
								e.preventDefault();
							},
						}))
				"
				:content="{ align: 'end' }"
			>
				<UButton
					label="Columns"
					color="neutral"
					variant="outline"
					trailing-icon="i-lucide-chevron-down"
				/>
			</UDropdownMenu>
		</div>

		<UTable
			ref="table"
			v-model:column-visibility="columnVisibility"
			:data="data"
			:columns="columns"
		/>
	</div>
</template>
```

> [!TIP]
>
> You can use the `column-visibility` prop to control the visibility state of the columns (can be bound with `v-model`).

### With column filters

You can use an [Input](/docs/components/input) component to filter per column the rows using the TanStack Table [Column Filtering APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering).

```vue [TableColumnFiltersExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';

	const UBadge = resolveComponent('UBadge');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const table = useTemplateRef('table');

	const columnFilters = ref([
		{
			id: 'email',
			value: 'james',
		},
	]);
</script>

<template>
	<div class="flex flex-col flex-1 w-full">
		<div class="flex px-4 py-3.5 border-b border-accented">
			<UInput
				:model-value="
					table?.tableApi?.getColumn('email')?.getFilterValue() as string
				"
				class="max-w-sm"
				placeholder="Filter emails..."
				@update:model-value="
					table?.tableApi?.getColumn('email')?.setFilterValue($event)
				"
			/>
		</div>

		<UTable
			ref="table"
			v-model:column-filters="columnFilters"
			:data="data"
			:columns="columns"
		/>
	</div>
</template>
```

> [!TIP]
>
> You can use the `column-filters` prop to control the filters state of the columns (can be bound with `v-model`).

### With global filter

You can use an [Input](/docs/components/input) component to filter the rows using the TanStack Table [Global Filtering APIs](https://tanstack.com/table/v8/docs/api/features/global-filtering).

```vue [TableGlobalFilterExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';

	const UBadge = resolveComponent('UBadge');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			status: 'paid',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			status: 'failed',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			status: 'refunded',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			status: 'paid',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			status: 'paid',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const globalFilter = ref('45');
</script>

<template>
	<div class="flex flex-col flex-1 w-full">
		<div class="flex px-4 py-3.5 border-b border-accented">
			<UInput
				v-model="globalFilter"
				class="max-w-sm"
				placeholder="Filter..."
			/>
		</div>

		<UTable
			ref="table"
			v-model:global-filter="globalFilter"
			:data="data"
			:columns="columns"
		/>
	</div>
</template>
```

> [!TIP]
>
> You can use the `global-filter` prop to control the global filter state (can be bound with `v-model`).

### With pagination

You can use a [Pagination](/docs/components/pagination) component to control the pagination state using the [Pagination APIs](https://tanstack.com/table/v8/docs/api/features/pagination).

There are different pagination approaches as explained in [Pagination Guide](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide). In this example, we use client-side pagination so we need to manually pass `getPaginationRowModel()` function.

```vue [TablePaginationExample.vue]
<script setup lang="ts">
	import { getPaginationRowModel } from '@tanstack/vue-table';
	import type { TableColumn } from '@nuxt/ui';

	const table = useTemplateRef('table');

	type Payment = {
		id: string;
		date: string;
		email: string;
		amount: number;
	};
	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			email: 'emma.davis@example.com',
			amount: 529,
		},
		{
			id: '4596',
			date: '2024-03-10T15:55:00',
			email: 'ethan.harris@example.com',
			amount: 639,
		},
		{
			id: '4595',
			date: '2024-03-10T13:20:00',
			email: 'sophia.miller@example.com',
			amount: 428,
		},
		{
			id: '4594',
			date: '2024-03-10T11:05:00',
			email: 'noah.wilson@example.com',
			amount: 673,
		},
		{
			id: '4593',
			date: '2024-03-09T22:15:00',
			email: 'olivia.jones@example.com',
			amount: 382,
		},
		{
			id: '4592',
			date: '2024-03-09T20:30:00',
			email: 'liam.taylor@example.com',
			amount: 547,
		},
		{
			id: '4591',
			date: '2024-03-09T18:45:00',
			email: 'ava.thomas@example.com',
			amount: 291,
		},
		{
			id: '4590',
			date: '2024-03-09T16:20:00',
			email: 'lucas.martin@example.com',
			amount: 624,
		},
		{
			id: '4589',
			date: '2024-03-09T14:10:00',
			email: 'isabella.clark@example.com',
			amount: 438,
		},
		{
			id: '4588',
			date: '2024-03-09T12:05:00',
			email: 'mason.rodriguez@example.com',
			amount: 583,
		},
		{
			id: '4587',
			date: '2024-03-09T10:30:00',
			email: 'sophia.lee@example.com',
			amount: 347,
		},
		{
			id: '4586',
			date: '2024-03-09T08:15:00',
			email: 'ethan.walker@example.com',
			amount: 692,
		},
		{
			id: '4585',
			date: '2024-03-08T23:40:00',
			email: 'amelia.hall@example.com',
			amount: 419,
		},
		{
			id: '4584',
			date: '2024-03-08T21:25:00',
			email: 'oliver.young@example.com',
			amount: 563,
		},
		{
			id: '4583',
			date: '2024-03-08T19:50:00',
			email: 'aria.king@example.com',
			amount: 328,
		},
		{
			id: '4582',
			date: '2024-03-08T17:35:00',
			email: 'henry.wright@example.com',
			amount: 647,
		},
		{
			id: '4581',
			date: '2024-03-08T15:20:00',
			email: 'luna.lopez@example.com',
			amount: 482,
		},
	]);
	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const pagination = ref({
		pageIndex: 0,
		pageSize: 5,
	});

	const globalFilter = ref('');
</script>

<template>
	<div class="w-full space-y-4 pb-4">
		<div class="flex px-4 py-3.5 border-b border-accented">
			<UInput
				v-model="globalFilter"
				class="max-w-sm"
				placeholder="Filter..."
			/>
		</div>

		<UTable
			ref="table"
			v-model:pagination="pagination"
			v-model:global-filter="globalFilter"
			:data="data"
			:columns="columns"
			:pagination-options="{
				getPaginationRowModel: getPaginationRowModel(),
			}"
			class="flex-1"
		/>

		<div class="flex justify-end border-t border-default pt-4 px-4">
			<UPagination
				:page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
				:items-per-page="table?.tableApi?.getState().pagination.pageSize"
				:total="table?.tableApi?.getFilteredRowModel().rows.length"
				@update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
			/>
		</div>
	</div>
</template>
```

> [!TIP]
>
> You can use the `pagination` prop to control the pagination state (can be bound with `v-model`).

### With fetched data

You can fetch data from an API and use them in the Table.

```vue [TableFetchExample.vue]
<script setup lang="ts">
	import type { AvatarProps, TableColumn } from '@nuxt/ui';

	const UAvatar = resolveComponent('UAvatar');

	type User = {
		id: number;
		name: string;
		username: string;
		email: string;
		avatar: AvatarProps;
		company: { name: string };
	};

	const { data, status } = useLazyFetch<User[]>(
		'https://jsonplaceholder.typicode.com/users',
		{
			key: 'table-users',
			transform: (data) => {
				return (
					data?.map((user) => ({
						...user,
						avatar: {
							src: `https://i.pravatar.cc/120?img=${user.id}`,
							alt: `${user.name} avatar`,
						},
					})) || []
				);
			},
			server: false,
		},
	);

	const columns: TableColumn<User>[] = [
		{
			accessorKey: 'id',
			header: 'ID',
		},
		{
			accessorKey: 'name',
			header: 'Name',
			cell: ({ row }) => {
				return h('div', { class: 'flex items-center gap-3' }, [
					h(UAvatar, {
						...row.original.avatar,
						loading: 'lazy',
						size: 'lg',
					}),
					h('div', undefined, [
						h(
							'p',
							{ class: 'font-medium text-highlighted' },
							row.original.name,
						),
						h('p', { class: '' }, `@${row.original.username}`),
					]),
				]);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'company',
			header: 'Company',
			cell: ({ row }) => row.original.company.name,
		},
	];
</script>

<template>
	<UTable
		:data="data"
		:columns="columns"
		:loading="status === 'pending' || status === 'idle'"
		class="flex-1 h-80"
	/>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `server: false` to fetch data on the client without blocking the initial render. The loading state checks for both `pending` and `idle` status to display a loading indicator before and during the fetch.

### With infinite scroll

If you use server-side pagination, you can use the [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll) composable to load more data as the user scrolls.

```vue [TableInfiniteScrollExample.vue]
<script setup lang="ts">
	import type { TableColumn } from '@nuxt/ui';
	import { useInfiniteScroll } from '@vueuse/core';

	const UAvatar = resolveComponent('UAvatar');

	type User = {
		id: number;
		firstName: string;
		username: string;
		email: string;
		image: string;
	};

	type UserResponse = {
		users: User[];
		total: number;
		skip: number;
		limit: number;
	};

	const skip = ref(0);

	const { data, status } = useLazyFetch(
		'https://dummyjson.com/users?limit=10&select=firstName,username,email,image',
		{
			key: 'table-users-infinite-scroll',
			params: { skip },
			transform: (data?: UserResponse) => {
				return data?.users;
			},
			server: false,
		},
	);

	const columns: TableColumn<User>[] = [
		{
			accessorKey: 'id',
			header: 'ID',
		},
		{
			accessorKey: 'image',
			header: 'Avatar',
			cell: ({ row }) =>
				h(UAvatar, { src: row.original.image, loading: 'lazy' }),
		},
		{
			accessorKey: 'firstName',
			header: 'First name',
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'username',
			header: 'Username',
		},
	];

	const users = ref<User[]>([]);

	watch(data, () => {
		users.value = [...users.value, ...(data.value || [])];
	});

	const table = useTemplateRef('table');

	onMounted(() => {
		useInfiniteScroll(
			table.value?.$el,
			() => {
				skip.value += 10;
			},
			{
				distance: 200,
				canLoadMore: () => {
					return status.value !== 'pending';
				},
			},
		);
	});
</script>

<template>
	<UTable
		ref="table"
		:data="users"
		:columns="columns"
		:loading="status === 'pending' || status === 'idle'"
		sticky
		class="flex-1 h-80"
	/>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `server: false` to fetch data on the client without blocking the initial render. The loading state checks for both `pending` and `idle` status to display a loading indicator before and during the fetch. Additional pages are loaded as the user scrolls.

### With drag and drop

You can use the [`useSortable`](https://vueuse.org/integrations/useSortable/) composable from [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) to enable drag and drop functionality on the Table. This integration wraps [Sortable.js](https://sortablejs.github.io/Sortable/) to provide a seamless drag and drop experience.

> [!NOTE]
>
> Since the table ref doesn't expose the tbody element, add a unique class to it via the `:ui` prop to target it with `useSortable` (e.g. `:ui="{ tbody: 'my-table-tbody' }"`).

```vue [TableDragAndDropExample.vue]
<script setup lang="ts">
	import type { TableColumn } from '@nuxt/ui';
	import { useSortable } from '@vueuse/integrations/useSortable';

	type Payment = {
		id: string;
		date: string;
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			email: 'james.anderson@example.com',
			amount: 594,
		},
		{
			id: '4599',
			date: '2024-03-11T10:10:00',
			email: 'mia.white@example.com',
			amount: 276,
		},
		{
			id: '4598',
			date: '2024-03-11T08:50:00',
			email: 'william.brown@example.com',
			amount: 315,
		},
		{
			id: '4597',
			date: '2024-03-10T19:45:00',
			email: 'emma.davis@example.com',
			amount: 529,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	useSortable('.my-table-tbody', data, {
		animation: 150,
	});
</script>

<template>
	<UTable
		ref="table"
		:data="data"
		:columns="columns"
		:ui="{
			tbody: 'my-table-tbody',
		}"
		class="flex-1"
	/>
</template>
```

### With virtualization `4.1+`

Use the `virtualize` prop to enable virtualization for large datasets as a boolean or an object with options like `{ estimateSize: 65, overscan: 12 }`. You can also pass other [TanStack Virtual options](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options) to customize the virtualization behavior. The `sticky` prop works in combination with `virtualize` to keep the header or footer visible while scrolling through large datasets.

> [!WARNING]
>
> Row pinning is not supported when virtualization is enabled.

```vue [TableVirtualizeExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';

	const UBadge = resolveComponent('UBadge');

	type Payment = {
		id: string;
		date: string;
		status: 'paid' | 'failed' | 'refunded';
		email: string;
		amount: number;
	};

	const data = ref<Payment[]>(
		Array(1000)
			.fill(0)
			.map((_, i) => ({
				id: `4600-${i}`,
				date: '2024-03-11T15:30:00',
				status: 'paid',
				email: 'james.anderson@example.com',
				amount: 594,
			})),
	);

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];
</script>

<template>
	<UTable
		sticky
		virtualize
		:data="data"
		:columns="columns"
		class="flex-1 h-80"
	/>
</template>
```

> [!NOTE]
>
> A height constraint is required on the table for virtualization to work properly (e.g. `class="h-[400px]"`).

### With external scroll element `4.10+`

Pass a `getScrollElement` function in the `virtualize` prop to virtualize against an ancestor scroll container instead of the table's own root. Set `scrollMargin` to the table's offset from the scroll element's start (e.g. the height of the content above it), so a header and the table body share a single scrollbar.

```vue [TableExternalScrollExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';

	const UBadge = resolveComponent('UBadge');

	type Payment = {
		id: string;
		date: string;
		customer: string;
		email: string;
		method: string;
		status: 'paid' | 'failed' | 'refunded';
		amount: number;
	};

	const names = [
		'James Anderson',
		'Mary Johnson',
		'Robert Williams',
		'Patricia Brown',
		'Michael Davis',
	];
	const methods = ['Visa', 'Mastercard', 'PayPal', 'Amex'];
	const statuses = ['paid', 'failed', 'refunded'] as const;

	const data = ref<Payment[]>(
		Array.from({ length: 1000 }, (_, i) => {
			const customer = names[i % names.length]!;
			return {
				id: `4600-${i}`,
				date: '2024-03-11T15:30:00',
				customer,
				email: `${customer.toLowerCase().replace(' ', '.')}@example.com`,
				method: methods[i % methods.length]!,
				status: statuses[i % statuses.length]!,
				amount: 100 + ((i * 37) % 900),
			};
		}),
	);

	// The container owns the scroll; the table virtualizes against it so the header and rows share one scrollbar.
	const container = useTemplateRef('container');
	const title = useTemplateRef('title');
	const getScrollElement = () => container.value;

	// `scrollMargin` is the table's offset within the scroll element (border-box height of the title above it).
	const { height: titleHeight } = useElementSize(title, undefined, {
		box: 'border-box',
	});

	const columns: TableColumn<Payment>[] = [
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => `#${row.getValue('id')}`,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) =>
				new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				}),
		},
		{
			accessorKey: 'customer',
			header: 'Customer',
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'method',
			header: 'Method',
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const color = {
					paid: 'success' as const,
					failed: 'error' as const,
					refunded: 'neutral' as const,
				}[row.getValue('status') as string];

				return h(
					UBadge,
					{ class: 'capitalize', variant: 'subtle', color },
					() => row.getValue('status'),
				);
			},
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) =>
				new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(Number.parseFloat(row.getValue('amount'))),
		},
	];
</script>

<template>
	<div
		ref="container"
		class="w-full h-96 overflow-auto"
	>
		<div
			ref="title"
			class="sticky left-0 z-10 flex items-end justify-between gap-4 p-6 bg-elevated/50"
		>
			<div>
				<h2 class="text-2xl font-bold text-highlighted">Payments</h2>
				<p class="text-muted">
					The title stays put while the wide table scrolls both axes under one
					scrollbar.
				</p>
			</div>
			<UBadge
				color="neutral"
				variant="subtle"
				:label="`${data.length} rows`"
			/>
		</div>

		<UTable
			sticky
			:data="data"
			:columns="columns"
			:virtualize="{ scrollMargin: titleHeight, getScrollElement }"
			:ui="{ base: 'min-w-[1200px]' }"
		/>
	</div>
</template>
```

> [!NOTE]
>
> In this mode the table root's `overflow` is `visible` and the external container owns scrolling on both axes, so give it `overflow-auto` (not just `overflow-y-auto`) to keep wide tables horizontally scrollable. A `sticky` header then anchors to that container.

### With tree data

You can use the `get-sub-rows` prop to display hierarchical (tree) data in the table.
For example, if your data objects have a `children` array, set `:get-sub-rows="row => row.children"` to enable expandable rows.

```vue [TableTreeDataExample.vue]
<script setup lang="ts">
	import { h, resolveComponent } from 'vue';
	import type { TableColumn } from '@nuxt/ui';

	const UCheckbox = resolveComponent('UCheckbox');
	const UButton = resolveComponent('UButton');

	type Payment = {
		id: string;
		date: string;
		email: string;
		amount: number;
		children?: Payment[];
	};

	const data = ref<Payment[]>([
		{
			id: '4600',
			date: '2024-03-11T15:30:00',
			email: 'james.anderson@example.com',
			amount: 594,
			children: [
				{
					id: '4599',
					date: '2024-03-11T10:10:00',
					email: 'mia.white@example.com',
					amount: 276,
				},
				{
					id: '4598',
					date: '2024-03-11T08:50:00',
					email: 'william.brown@example.com',
					amount: 315,
				},
				{
					id: '4597',
					date: '2024-03-10T19:45:00',
					email: 'emma.davis@example.com',
					amount: 529,
					children: [
						{
							id: '4592',
							date: '2024-03-09T18:45:00',
							email: 'benjamin.jackson@example.com',
							amount: 851,
						},
						{
							id: '4591',
							date: '2024-03-09T16:05:00',
							email: 'sophia.miller@example.com',
							amount: 762,
						},
						{
							id: '4590',
							date: '2024-03-09T14:20:00',
							email: 'noah.clark@example.com',
							amount: 573,
							children: [
								{
									id: '4596',
									date: '2024-03-10T15:55:00',
									email: 'ethan.harris@example.com',
									amount: 639,
								},
								{
									id: '4595',
									date: '2024-03-10T13:40:00',
									email: 'ava.thomas@example.com',
									amount: 428,
								},
							],
						},
					],
				},
			],
		},
		{
			id: '4589',
			date: '2024-03-09T11:35:00',
			email: 'isabella.lee@example.com',
			amount: 389,
		},
	]);

	const columns: TableColumn<Payment>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				h(UCheckbox, {
					modelValue: table.getIsSomePageRowsSelected()
						? 'indeterminate'
						: table.getIsAllPageRowsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all',
				}),
			cell: ({ row }) =>
				h(UCheckbox, {
					modelValue: row.getIsSelected()
						? true
						: row.getIsSomeSelected()
							? 'indeterminate'
							: false,
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						row.toggleSelected(!!value),
					'aria-label': 'Select row',
				}),
		},
		{
			accessorKey: 'id',
			header: '#',
			cell: ({ row }) => {
				return h(
					'div',
					{
						style: {
							paddingInlineStart: `${row.depth}rem`,
						},
						class: 'flex items-center gap-2',
					},
					[
						h(UButton, {
							color: 'neutral',
							variant: 'outline',
							size: 'xs',
							icon: row.getIsExpanded() ? 'i-lucide-minus' : 'i-lucide-plus',
							class: !row.getCanExpand() && 'invisible',
							ui: {
								base: 'p-0 rounded-sm',
								leadingIcon: 'size-4',
							},
							onClick: row.getToggleExpandedHandler(),
						}),
						row.getValue('id') as string,
					],
				);
			},
		},
		{
			accessorKey: 'date',
			header: 'Date',
			cell: ({ row }) => {
				return new Date(row.getValue('date')).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				});
			},
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			meta: {
				class: {
					th: 'text-right',
					td: 'text-right font-medium',
				},
			},
			cell: ({ row }) => {
				const amount = Number.parseFloat(row.getValue('amount'));
				return new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'EUR',
				}).format(amount);
			},
		},
	];

	const expanded = ref({ 0: true });
</script>

<template>
	<UTable
		v-model:expanded="expanded"
		:data="data"
		:columns="columns"
		:get-sub-rows="(row) => row.children"
		class="flex-1"
		:ui="{
			base: 'border-separate border-spacing-0',
			tbody: '[&>tr]:last:[&>td]:border-b-0',
			tr: 'group',
			td: 'empty:p-0 group-has-[td:not(:empty)]:border-b border-default',
		}"
	/>
</template>
```

### With slots

You can use slots to customize the header and data cells of the table.

Use the `#<column>-header` slot to customize the header of a column. You will have access to the `column`, `header` and `table` properties in the slot scope.

Use the `#<column>-cell` slot to customize the cell of a column. You will have access to the `cell`, `column`, `getValue`, `renderValue`, `row`, and `table` properties in the slot scope.

```vue [TableSlotsExample.vue]
<script setup lang="ts">
	import type { TableColumn, DropdownMenuItem } from '@nuxt/ui';
	import { useClipboard } from '@vueuse/core';

	interface User {
		id: number;
		name: string;
		position: string;
		email: string;
		role: string;
	}

	const toast = useToast();
	const { copy } = useClipboard();

	const data = ref<User[]>([
		{
			id: 1,
			name: 'Lindsay Walton',
			position: 'Front-end Developer',
			email: 'lindsay.walton@example.com',
			role: 'Member',
		},
		{
			id: 2,
			name: 'Courtney Henry',
			position: 'Designer',
			email: 'courtney.henry@example.com',
			role: 'Admin',
		},
		{
			id: 3,
			name: 'Tom Cook',
			position: 'Director of Product',
			email: 'tom.cook@example.com',
			role: 'Member',
		},
		{
			id: 4,
			name: 'Whitney Francis',
			position: 'Copywriter',
			email: 'whitney.francis@example.com',
			role: 'Admin',
		},
		{
			id: 5,
			name: 'Leonard Krasner',
			position: 'Senior Designer',
			email: 'leonard.krasner@example.com',
			role: 'Owner',
		},
		{
			id: 6,
			name: 'Floyd Miles',
			position: 'Principal Designer',
			email: 'floyd.miles@example.com',
			role: 'Member',
		},
	]);

	const columns: TableColumn<User>[] = [
		{
			accessorKey: 'id',
			header: 'ID',
		},
		{
			accessorKey: 'name',
			header: 'Name',
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'role',
			header: 'Role',
		},
		{
			id: 'action',
		},
	];

	function getDropdownActions(user: User): DropdownMenuItem[][] {
		return [
			[
				{
					label: 'Copy user Id',
					icon: 'i-lucide-copy',
					onSelect: () => {
						copy(user.id.toString());

						toast.add({
							title: 'User ID copied to clipboard!',
							color: 'success',
							icon: 'i-lucide-circle-check',
						});
					},
				},
			],
			[
				{
					label: 'Edit',
					icon: 'i-lucide-edit',
				},
				{
					label: 'Delete',
					icon: 'i-lucide-trash',
					color: 'error',
				},
			],
		];
	}
</script>

<template>
	<UTable
		:data="data"
		:columns="columns"
		class="flex-1"
	>
		<template #name-cell="{ row }">
			<div class="flex items-center gap-3">
				<UAvatar
					:src="`https://i.pravatar.cc/120?img=${row.original.id}`"
					size="lg"
					loading="lazy"
					:alt="`${row.original.name} avatar`"
				/>
				<div>
					<p class="font-medium text-highlighted">
						{{ row.original.name }}
					</p>
					<p>
						{{ row.original.position }}
					</p>
				</div>
			</div>
		</template>
		<template #action-cell="{ row }">
			<UDropdownMenu :items="getDropdownActions(row.original)">
				<UButton
					icon="i-lucide-ellipsis-vertical"
					color="neutral"
					variant="ghost"
					aria-label="Actions"
				/>
			</UDropdownMenu>
		</template>
	</UTable>
</template>
```

## API

### Props

```ts
/**
 * Props for the Table component
 */
interface TableProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  data?: T[] | undefined;
  columns?: TableColumn<T, unknown>[] | undefined;
  caption?: string | undefined;
  /**
   * You can pass any object to `options.meta` and access it anywhere the `table` is available via `table.options.meta`.
   */
  meta?: TableMeta<T> | undefined;
  /**
   * Enable virtualization for large datasets.
   * Note: row pinning is not supported when virtualization is enabled.
   * @default false
   */
  virtualize?: boolean | (Partial<Omit<VirtualizerOptions<Element, Element>, "count" | "estimateSize" | "overscan">> & { getScrollElement?: (() => Element | null) | undefined; overscan?: number | undefined; estimateSize?: number | ((index: number) => number) | undefined; }) | undefined;
  /**
   * The text to display when the table is empty.
   * @default t('table.noData')
   */
  empty?: string | undefined;
  /**
   * Whether the table should have a sticky header or footer. True for both, 'header' for header only, 'footer' for footer only.
   * @default false
   */
  sticky?: boolean | "header" | "footer" | undefined;
  /**
   * Whether the table should be in loading state.
   */
  loading?: boolean | undefined;
  /**
   * @default 'primary'
   */
  loadingColor?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined;
  /**
   * @default 'carousel'
   */
  loadingAnimation?: "carousel" | "carousel-inverse" | "swing" | "elastic" | undefined;
  /**
   * Use the `watchOptions` prop to customize reactivity (for ex: disable deep watching for changes in your data or limiting the max traversal depth). This can improve performance by reducing unnecessary re-renders, but it should be used with caution as it may lead to unexpected behavior if not managed properly.
   * @default {
    deep: true
}
   */
  watchOptions?: WatchOptions<boolean> | undefined;
  globalFilterOptions?: Omit<GlobalFilterOptions<T>, "onGlobalFilterChange"> | undefined;
  columnFiltersOptions?: Omit<ColumnFiltersOptions<T>, "getFilteredRowModel" | "onColumnFiltersChange"> | undefined;
  columnPinningOptions?: Omit<ColumnPinningOptions, "onColumnPinningChange"> | undefined;
  columnSizingOptions?: Omit<ColumnSizingOptions, "onColumnSizingChange" | "onColumnSizingInfoChange"> | undefined;
  visibilityOptions?: Omit<VisibilityOptions, "onColumnVisibilityChange"> | undefined;
  sortingOptions?: Omit<SortingOptions<T>, "getSortedRowModel" | "onSortingChange"> | undefined;
  groupingOptions?: Omit<GroupingOptions, "onGroupingChange"> | undefined;
  expandedOptions?: Omit<ExpandedOptions<T>, "getExpandedRowModel" | "onExpandedChange"> | undefined;
  rowSelectionOptions?: Omit<RowSelectionOptions<T>, "onRowSelectionChange"> | undefined;
  rowPinningOptions?: Omit<RowPinningOptions<T>, "onRowPinningChange"> | undefined;
  paginationOptions?: Omit<PaginationOptions, "onPaginationChange"> | undefined;
  facetedOptions?: FacetedOptions<T> | undefined;
  onSelect?: (e: Event, row: TableRow<T>): void | undefined;
  onHover?: (e: Event, row: TableRow<T> | null): void | undefined;
  onContextmenu?: (e: Event, row: TableRow<T>): void | ((e: Event, row: TableRow<T>) => void)[] | undefined;
  ui?: { root?: SlotClass; base?: SlotClass; caption?: SlotClass; thead?: SlotClass; tbody?: SlotClass; tfoot?: SlotClass; tr?: SlotClass; th?: SlotClass; td?: SlotClass; separator?: SlotClass; empty?: SlotClass; loading?: SlotClass; } | undefined;
  state?: Partial<TableState> | undefined;
  onStateChange?: (updater: Updater<TableState>): void | undefined;
  renderFallbackValue?: any;
  /**
   * An array of extra features that you can add to the table instance.
   */
  _features?: TableFeature<any>[] | undefined;
  /**
   * Set this option to override any of the `autoReset...` feature options.
   */
  autoResetAll?: boolean | undefined;
  /**
   * Set this option to `true` to output all debugging information to the console.
   */
  debugAll?: boolean | undefined;
  /**
   * Set this option to `true` to output cell debugging information to the console.
   */
  debugCells?: boolean | undefined;
  /**
   * Set this option to `true` to output column debugging information to the console.
   */
  debugColumns?: boolean | undefined;
  /**
   * Set this option to `true` to output header debugging information to the console.
   */
  debugHeaders?: boolean | undefined;
  /**
   * Set this option to `true` to output row debugging information to the console.
   */
  debugRows?: boolean | undefined;
  /**
   * Set this option to `true` to output table debugging information to the console.
   */
  debugTable?: boolean | undefined;
  /**
   * Default column options to use for all column defs supplied to the table.
   */
  defaultColumn?: Partial<ColumnDefBase<T, unknown> & StringHeaderIdentifier> | Partial<ColumnDefBase<T, unknown> & IdIdentifier<T, unknown>> | Partial<GroupColumnDefBase<T, unknown> & StringHeaderIdentifier> | Partial<GroupColumnDefBase<T, unknown> & IdIdentifier<T, unknown>> | Partial<AccessorKeyColumnDefBase<T, unknown> & Partial<StringHeaderIdentifier>> | Partial<AccessorKeyColumnDefBase<T, unknown> & Partial<IdIdentifier<T, unknown>>> | Partial<AccessorFnColumnDefBase<T, unknown> & StringHeaderIdentifier> | Partial<AccessorFnColumnDefBase<T, unknown> & IdIdentifier<T, unknown>> | undefined;
  /**
   * This optional function is used to derive a unique ID for any given row. If not provided the rows index is used (nested rows join together with `.` using their grandparents' index eg. `index.index.index`). If you need to identify individual rows that are originating from any server-side operations, it's suggested you use this function to return an ID that makes sense regardless of network IO/ambiguity eg. a userId, taskId, database ID field, etc.
   */
  getRowId?: (originalRow: T, index: number, parent?: Row<T> | undefined): string | undefined;
  /**
   * This optional function is used to access the sub rows for any given row. If you are using nested rows, you will need to use this function to return the sub rows object (or undefined) from the row.
   */
  getSubRows?: (originalRow: T, index: number): T[] | undefined | undefined;
  /**
   * Use this option to optionally pass initial state to the table. This state will be used when resetting various table states either automatically by the table (eg. `options.autoResetPageIndex`) or via functions like `table.resetRowSelection()`. Most reset function allow you optionally pass a flag to reset to a blank/default state instead of the initial state.
   *
   * Table state will not be reset when this object changes, which also means that the initial state object does not need to be stable.
   */
  initialState?: InitialTableState | undefined;
  /**
   * This option is used to optionally implement the merging of table options.
   */
  mergeOptions?: (defaultOptions: TableOptions<T>, options: Partial<TableOptions<T>>): TableOptions<T> | undefined;
  cellpadding?: string | number | undefined;
  cellspacing?: string | number | undefined;
  summary?: string | undefined;
  width?: string | number | undefined;
  globalFilter?: string | undefined;
  columnFilters?: ColumnFiltersState | undefined;
  columnOrder?: ColumnOrderState | undefined;
  columnVisibility?: VisibilityState | undefined;
  columnPinning?: ColumnPinningState | undefined;
  columnSizing?: ColumnSizingState | undefined;
  columnSizingInfo?: ColumnSizingInfoState | undefined;
  rowSelection?: RowSelectionState | undefined;
  rowPinning?: RowPinningState | undefined;
  sorting?: SortingState | undefined;
  grouping?: GroupingState | undefined;
  expanded?: true | Record<string, boolean> | undefined;
  pagination?: PaginationState | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes
>
> This component also supports all native `<table>` HTML attributes.

### Slots

```ts
/**
 * Slots for the Table component
 */
interface TableSlots {
  expanded(): any;
  empty(): any;
  loading(): any;
  caption(): any;
  body-top(): any;
  body-bottom(): any;
}
```

### Expose

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
	const table = useTemplateRef('table');
</script>

<template>
	<UTable ref="table" />
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
          tableRef
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
          HTMLTableElement
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          null
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
          tableApi
        </span>
      </code>
    </td>
    
    <td>
      <a href="https://tanstack.com/table/v8/docs/api/core/table#table-api" rel="nofollow">
        <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
          <span class="sBMFI">
            Table
          </span>
        </code>
      </a>
    </td>
  </tr>
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		table: {
			slots: {
				root: 'relative overflow-auto outline-primary/25 focus-visible:outline-3',
				base: 'min-w-full overflow-clip',
				caption: 'sr-only',
				thead: 'relative',
				tbody:
					'isolate [&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:outline-primary/25 [&>tr]:data-[selectable=true]:focus-visible:outline-3 divide-y divide-default',
				tfoot: 'relative',
				tr: 'data-[selected=true]:bg-elevated/50',
				th: 'px-4 py-3.5 text-sm text-highlighted text-start font-semibold [&:has([role=checkbox])]:pe-0',
				td: 'p-4 text-sm text-muted whitespace-nowrap [&:has([role=checkbox])]:pe-0',
				separator: 'absolute z-1 start-0 w-full h-px bg-(--ui-border-accented)',
				empty: 'py-6 text-center text-sm text-muted',
				loading: 'py-6 text-center',
			},
			variants: {
				pinned: {
					true: {
						th: 'sticky bg-default/75 z-1',
						td: 'sticky bg-default/75 z-1',
					},
				},
				sticky: {
					true: {
						thead: 'sticky top-0 inset-x-0 bg-default/75 backdrop-blur-sm z-1',
						tfoot:
							'sticky bottom-0 inset-x-0 bg-default/75 backdrop-blur-sm z-1',
					},
					header: {
						thead: 'sticky top-0 inset-x-0 bg-default/75 backdrop-blur-sm z-1',
					},
					footer: {
						tfoot:
							'sticky bottom-0 inset-x-0 bg-default/75 backdrop-blur-sm z-1',
					},
				},
				loading: {
					true: {
						thead:
							'after:absolute after:z-1 after:h-px motion-reduce:after:inset-x-0 motion-reduce:after:animate-pulse',
					},
				},
				externalScroll: {
					true: {
						root: 'overflow-visible',
					},
				},
				loadingAnimation: {
					carousel: '',
					'carousel-inverse': '',
					swing: '',
					elastic: '',
				},
				loadingColor: {
					primary: '',
					secondary: '',
					success: '',
					info: '',
					warning: '',
					error: '',
					neutral: '',
				},
			},
			compoundVariants: [
				{
					loading: true,
					loadingColor: 'primary',
					class: {
						thead: 'after:bg-primary',
					},
				},
				{
					loading: true,
					loadingColor: 'secondary',
					class: {
						thead: 'after:bg-secondary',
					},
				},
				{
					loading: true,
					loadingColor: 'success',
					class: {
						thead: 'after:bg-success',
					},
				},
				{
					loading: true,
					loadingColor: 'info',
					class: {
						thead: 'after:bg-info',
					},
				},
				{
					loading: true,
					loadingColor: 'warning',
					class: {
						thead: 'after:bg-warning',
					},
				},
				{
					loading: true,
					loadingColor: 'error',
					class: {
						thead: 'after:bg-error',
					},
				},
				{
					loading: true,
					loadingColor: 'neutral',
					class: {
						thead: 'after:bg-inverted',
					},
				},
				{
					loading: true,
					loadingAnimation: 'carousel',
					class: {
						thead:
							'motion-safe:after:animate-[carousel_2s_linear_infinite] motion-safe:rtl:after:animate-[carousel-rtl_2s_linear_infinite]',
					},
				},
				{
					loading: true,
					loadingAnimation: 'carousel-inverse',
					class: {
						thead:
							'motion-safe:after:animate-[carousel-inverse_2s_linear_infinite] motion-safe:rtl:after:animate-[carousel-inverse-rtl_2s_linear_infinite]',
					},
				},
				{
					loading: true,
					loadingAnimation: 'swing',
					class: {
						thead:
							'motion-safe:after:animate-[swing_2s_var(--ease-in-out)_infinite]',
					},
				},
				{
					loading: true,
					loadingAnimation: 'elastic',
					class: {
						thead:
							'motion-safe:after:animate-[elastic_2s_var(--ease-in-out)_infinite]',
					},
				},
			],
			defaultVariants: {
				loadingColor: 'primary',
				loadingAnimation: 'carousel',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Table.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/table.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Timeline"
description: "A component that displays a sequence of events with dates, titles, icons or avatars."
canonical_url: "https://ui.nuxt.com/docs/components/timeline"

---

# Timeline

> A component that displays a sequence of events with dates, titles, icons or avatars.

## Usage

Use the Timeline component to display a list of items in a timeline.

```vue
<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const items = ref<TimelineItem[]>([
		{
			date: 'Mar 15, 2025',
			title: 'Project Kickoff',
			description:
				'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
			icon: 'i-lucide-rocket',
		},
		{
			date: 'Mar 22 2025',
			title: 'Design Phase',
			description:
				'User research and design workshops. Created wireframes and prototypes for user testing.',
			icon: 'i-lucide-palette',
		},
		{
			date: 'Mar 29 2025',
			title: 'Development Sprint',
			description:
				'Frontend and backend development. Implemented core features and integrated with APIs.',
			icon: 'i-lucide-code',
		},
		{
			date: 'Apr 5 2025',
			title: 'Testing & Deployment',
			description:
				'QA testing and performance optimization. Deployed the application to production.',
			icon: 'i-lucide-check-circle',
		},
	]);
</script>

<template>
	<UTimeline :items="items" />
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `date?: string`
- `title?: string`
- `description?: AvatarProps`
- `icon?: string`
- `avatar?: AvatarProps`
- `value?: string | number`
- [`slot?: string`](#with-custom-slot)
- `class?: any`
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, indicator?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, date?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`

```vue
<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const items = ref<TimelineItem[]>([
		{
			date: 'Mar 15, 2025',
			title: 'Project Kickoff',
			description:
				'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
			icon: 'i-lucide-rocket',
		},
		{
			date: 'Mar 22 2025',
			title: 'Design Phase',
			description:
				'User research and design workshops. Created wireframes and prototypes for user testing.',
			icon: 'i-lucide-palette',
		},
		{
			date: 'Mar 29 2025',
			title: 'Development Sprint',
			description:
				'Frontend and backend development. Implemented core features and integrated with APIs.',
			icon: 'i-lucide-code',
		},
		{
			date: 'Apr 5 2025',
			title: 'Testing & Deployment',
			description:
				'QA testing and performance optimization. Deployed the application to production.',
			icon: 'i-lucide-check-circle',
		},
	]);
</script>

<template>
	<UTimeline
		:default-value="2"
		:items="items"
		class="w-96"
	/>
</template>
```

### Color

Use the `color` prop to change the color of the active items in a Timeline.

```vue
<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const items = ref<TimelineItem[]>([
		{
			date: 'Mar 15, 2025',
			title: 'Project Kickoff',
			description:
				'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
			icon: 'i-lucide-rocket',
		},
		{
			date: 'Mar 22 2025',
			title: 'Design Phase',
			description:
				'User research and design workshops. Created wireframes and prototypes for user testing.',
			icon: 'i-lucide-palette',
		},
		{
			date: 'Mar 29 2025',
			title: 'Development Sprint',
			description:
				'Frontend and backend development. Implemented core features and integrated with APIs.',
			icon: 'i-lucide-code',
		},
		{
			date: 'Apr 5 2025',
			title: 'Testing & Deployment',
			description:
				'QA testing and performance optimization. Deployed the application to production.',
			icon: 'i-lucide-check-circle',
		},
	]);
</script>

<template>
	<UTimeline
		color="neutral"
		:default-value="2"
		:items="items"
		class="w-96"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Timeline.

```vue
<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const items = ref<TimelineItem[]>([
		{
			date: 'Mar 15, 2025',
			title: 'Project Kickoff',
			description:
				'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
			icon: 'i-lucide-rocket',
		},
		{
			date: 'Mar 22 2025',
			title: 'Design Phase',
			description:
				'User research and design workshops. Created wireframes and prototypes for user testing.',
			icon: 'i-lucide-palette',
		},
		{
			date: 'Mar 29 2025',
			title: 'Development Sprint',
			description:
				'Frontend and backend development. Implemented core features and integrated with APIs.',
			icon: 'i-lucide-code',
		},
		{
			date: 'Apr 5 2025',
			title: 'Testing & Deployment',
			description:
				'QA testing and performance optimization. Deployed the application to production.',
			icon: 'i-lucide-check-circle',
		},
	]);
</script>

<template>
	<UTimeline
		size="xs"
		:default-value="2"
		:items="items"
		class="w-96"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Timeline. Defaults to `vertical`.

```vue
<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const items = ref<TimelineItem[]>([
		{
			date: 'Mar 15, 2025',
			title: 'Project Kickoff',
			description: 'Kicked off the project with team alignment.',
			icon: 'i-lucide-rocket',
		},
		{
			date: 'Mar 22 2025',
			title: 'Design Phase',
			description: 'User research and design workshops.',
			icon: 'i-lucide-palette',
		},
		{
			date: 'Mar 29 2025',
			title: 'Development Sprint',
			description: 'Frontend and backend development.',
			icon: 'i-lucide-code',
		},
		{
			date: 'Apr 5 2025',
			title: 'Testing & Deployment',
			description: 'QA testing and performance optimization.',
			icon: 'i-lucide-check-circle',
		},
	]);
</script>

<template>
	<UTimeline
		orientation="horizontal"
		:default-value="2"
		:items="items"
		class="w-full"
	/>
</template>
```

### Reverse

Use the reverse prop to reverse the direction of the Timeline.

```vue
<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const items = ref<TimelineItem[]>([
		{
			date: 'Mar 15, 2025',
			title: 'Project Kickoff',
			description: 'Kicked off the project with team alignment.',
			icon: 'i-lucide-rocket',
		},
		{
			date: 'Mar 22 2025',
			title: 'Design Phase',
			description: 'User research and design workshops.',
			icon: 'i-lucide-palette',
		},
		{
			date: 'Mar 29 2025',
			title: 'Development Sprint',
			description: 'Frontend and backend development.',
			icon: 'i-lucide-code',
		},
		{
			date: 'Apr 5 2025',
			title: 'Testing & Deployment',
			description: 'QA testing and performance optimization.',
			icon: 'i-lucide-check-circle',
		},
	]);
</script>

<template>
	<UTimeline
		reverse
		v-model="value"
		orientation="vertical"
		:items="items"
		class="w-full"
	/>
</template>
```

## Examples

### Control active item

You can control the active item by using the `default-value` prop or the `v-model` directive with the `value` of the item. If no `value` is provided, it defaults to the index.

```vue [TimelineModelValueExample.vue]
<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const items: TimelineItem[] = [
		{
			date: 'Mar 15, 2025',
			title: 'Project Kickoff',
			description:
				'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
			icon: 'i-lucide-rocket',
			value: 'kickoff',
		},
		{
			date: 'Mar 22, 2025',
			title: 'Design Phase',
			description:
				'User research and design workshops. Created wireframes and prototypes for user testing.',
			icon: 'i-lucide-palette',
			value: 'design',
		},
		{
			date: 'Mar 29, 2025',
			title: 'Development Sprint',
			description:
				'Frontend and backend development. Implemented core features and integrated with APIs.',
			icon: 'i-lucide-code',
			value: 'development',
		},
		{
			date: 'Apr 5, 2025',
			title: 'Testing & Deployment',
			description:
				'QA testing and performance optimization. Deployed the application to production.',
			icon: 'i-lucide-check-circle',
			value: 'deployment',
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
	<UTimeline
		v-model="active"
		:items="items"
		class="w-96"
	/>
</template>
```

> [!TIP]
>
> Use the `value-key` prop to change the key used to match items when a `v-model` or `default-value` is provided.

### With select event

You can add a `@select` listener to make items clickable.

> [!NOTE]
>
> The handler function receives the `Event` and `TimelineItem` as the first and second arguments respectively.

```vue [TimelineSelectExample.vue]
<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const items: TimelineItem[] = [
		{
			date: 'Mar 15, 2025',
			title: 'Project Kickoff',
			description:
				'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
			icon: 'i-lucide-rocket',
			value: 'kickoff',
		},
		{
			date: 'Mar 22, 2025',
			title: 'Design Phase',
			description:
				'User research and design workshops. Created wireframes and prototypes for user testing.',
			icon: 'i-lucide-palette',
			value: 'design',
		},
		{
			date: 'Mar 29, 2025',
			title: 'Development Sprint',
			description:
				'Frontend and backend development. Implemented core features and integrated with APIs.',
			icon: 'i-lucide-code',
			value: 'development',
		},
		{
			date: 'Apr 5, 2025',
			title: 'Testing & Deployment',
			description:
				'QA testing and performance optimization. Deployed the application to production.',
			icon: 'i-lucide-check-circle',
			value: 'deployment',
		},
	];

	const active = ref<string | number>('kickoff');

	function onSelect(_e: Event, item: TimelineItem) {
		if (item.value) {
			active.value = item.value;
		}
	}
</script>

<template>
	<UTimeline
		v-model="active"
		:items="items"
		class="w-96"
		@select="onSelect"
	/>
</template>
```

### With alternating layout

Use the `ui` prop to create a Timeline with alternating layout.

```vue [TimelineAlternatingLayoutExample.vue]
<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const items: TimelineItem[] = [
		{
			date: 'Mar 15, 2025',
			title: 'Project Kickoff',
			icon: 'i-lucide-rocket',
			value: 'kickoff',
		},
		{
			date: 'Mar 22, 2025',
			title: 'Design Phase',
			icon: 'i-lucide-palette',
			value: 'design',
		},
		{
			date: 'Mar 29, 2025',
			title: 'Development Sprint',
			icon: 'i-lucide-code',
			value: 'development',
		},
		{
			date: 'Apr 5, 2025',
			title: 'Testing & Deployment',
			icon: 'i-lucide-check-circle',
			value: 'deployment',
		},
	];
</script>

<template>
	<UTimeline
		:items="items"
		:default-value="2"
		:ui="{
			item: 'even:flex-row-reverse even:-translate-x-[calc(100%-2rem)] rtl:even:translate-x-[calc(100%-2rem)] even:text-end',
		}"
		class="translate-x-[calc(50%-1rem)] rtl:-translate-x-[calc(50%-1rem)]"
	/>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}-indicator`
- `#{{ item.slot }}-date`
- `#{{ item.slot }}-title`
- `#{{ item.slot }}-description`

```vue [TimelineCustomSlotExample.vue]
<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const items = [
		{
			date: 'Mar 15, 2025',
			title: 'Project Kickoff',
			subtitle: 'Project Initiation',
			description:
				'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
			icon: 'i-lucide-rocket',
			value: 'kickoff',
		},
		{
			date: 'Mar 22, 2025',
			title: 'Design Phase',
			description:
				'User research and design workshops. Created wireframes and prototypes for user testing.',
			icon: 'i-lucide-palette',
			value: 'design',
		},
		{
			date: 'Mar 29, 2025',
			title: 'Development Sprint',
			description:
				'Frontend and backend development. Implemented core features and integrated with APIs.',
			icon: 'i-lucide-code',
			value: 'development',
			slot: 'development' as const,
			developers: [
				{
					src: 'https://github.com/J-Michalek.png',
					loading: 'lazy' as const,
				},
				{
					src: 'https://github.com/benjamincanac.png',
					loading: 'lazy' as const,
				},
			],
		},
		{
			date: 'Apr 5, 2025',
			title: 'Testing & Deployment',
			description:
				'QA testing and performance optimization. Deployed the application to production.',
			icon: 'i-lucide-check-circle',
			value: 'deployment',
		},
	] satisfies TimelineItem[];
</script>

<template>
	<UTimeline
		:items="items"
		:default-value="2"
		class="w-96"
	>
		<template #development-title="{ item }">
			<div class="flex items-center gap-1">
				<span>{{ item.title }}</span>

				<UAvatarGroup size="2xs">
					<UAvatar
						v-for="(developer, index) of item.developers"
						:key="index"
						v-bind="developer"
					/>
				</UAvatarGroup>
			</div>
		</template>
	</UTimeline>
</template>
```

### With slots

Use the available slots to create a more complex Timeline.

```vue [TimelineSlotsExample.vue]
<script lang="ts" setup>
	import type { TimelineItem } from '@nuxt/ui';
	import { useTimeAgo } from '@vueuse/core';

	const items = [
		{
			username: 'J-Michalek',
			date: '2025-05-24T14:58:55Z',
			action: 'opened this',
			avatar: {
				src: 'https://github.com/J-Michalek.png',
				loading: 'lazy' as const,
			},
		},
		{
			username: 'J-Michalek',
			date: '2025-05-26T19:30:14+02:00',
			action: 'marked this pull request as ready for review',
			icon: 'i-lucide-check-circle',
		},
		{
			username: 'benjamincanac',
			date: '2025-05-27T11:01:20Z',
			action: 'commented on this',
			description:
				"I've made a few changes, let me know what you think! Basically I updated the design, removed unnecessary divs, used Avatar component for the indicator since it supports icon already.",
			avatar: {
				src: 'https://github.com/benjamincanac.png',
				loading: 'lazy' as const,
			},
		},
		{
			username: 'J-Michalek',
			date: '2025-05-27T11:01:20Z',
			action: 'commented on this',
			description: 'Looks great! Good job on cleaning it up.',
			avatar: {
				src: 'https://github.com/J-Michalek.png',
				loading: 'lazy' as const,
			},
		},
		{
			username: 'benjamincanac',
			date: '2025-05-27T11:01:20Z',
			action: 'merged this',
			icon: 'i-lucide-git-merge',
		},
	] satisfies TimelineItem[];
</script>

<template>
	<UTimeline
		:items="items"
		size="xs"
		:ui="{
			date: 'float-end ms-1',
			description: 'px-3 py-2 ring ring-default mt-2 rounded-md text-default',
		}"
		class="w-96"
	>
		<template #title="{ item }">
			<span>{{ item.username }}</span>
			<span class="font-normal text-muted">&nbsp;{{ item.action }}</span>
		</template>

		<template #date="{ item }">
			{{ useTimeAgo(new Date(item.date)) }}
		</template>
	</UTimeline>
</template>
```

## API

### Props

```ts
/**
 * Props for the Timeline component
 */
interface TimelineProps {
	items: T[];
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * @default 'md'
	 */
	size?:
		| '3xs'
		| '2xs'
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| undefined;
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
	 * The orientation of the Timeline.
	 * @default 'vertical'
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
	defaultValue?: string | number | undefined;
	reverse?: boolean | undefined;
	ui?:
		| {
				root?: SlotClass;
				item?: SlotClass;
				container?: SlotClass;
				indicator?: SlotClass;
				separator?: SlotClass;
				wrapper?: SlotClass;
				date?: SlotClass;
				title?: SlotClass;
				description?: SlotClass;
		  }
		| undefined;
	modelValue?: string | number | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Timeline component
 */
interface TimelineSlots {
	indicator(): any;
	wrapper(): any;
	date(): any;
	title(): any;
	description(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Timeline component
 */
interface TimelineEmits {
  select: (payload: [event: Event, item: T]) => void;
  update:modelValue: (payload: [value: string | number | undefined]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		timeline: {
			slots: {
				root: 'flex gap-1.5',
				item: 'group relative flex flex-1 gap-3',
				container: 'relative flex items-center gap-1.5',
				indicator:
					'group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted',
				separator: 'flex-1 rounded-full bg-elevated',
				wrapper: 'w-full',
				date: 'text-dimmed text-xs/5',
				title: 'font-medium text-highlighted text-sm',
				description: 'text-muted text-wrap text-sm',
			},
			variants: {
				orientation: {
					horizontal: {
						root: 'flex-row w-full',
						item: 'flex-col',
						separator: 'h-0.5',
					},
					vertical: {
						root: 'flex-col',
						container: 'flex-col',
						separator: 'w-0.5',
					},
				},
				color: {
					primary: {
						indicator:
							'group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary',
					},
					secondary: {
						indicator:
							'group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary',
					},
					success: {
						indicator:
							'group-data-[state=completed]:bg-success group-data-[state=active]:bg-success',
					},
					info: {
						indicator:
							'group-data-[state=completed]:bg-info group-data-[state=active]:bg-info',
					},
					warning: {
						indicator:
							'group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning',
					},
					error: {
						indicator:
							'group-data-[state=completed]:bg-error group-data-[state=active]:bg-error',
					},
					neutral: {
						indicator:
							'group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted',
					},
				},
				size: {
					'3xs': '',
					'2xs': '',
					xs: '',
					sm: '',
					md: '',
					lg: '',
					xl: '',
					'2xl': '',
					'3xl': '',
				},
				reverse: {
					true: '',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					reverse: false,
					class: {
						separator: 'group-data-[state=completed]:bg-primary',
					},
				},
				{
					color: 'secondary',
					reverse: false,
					class: {
						separator: 'group-data-[state=completed]:bg-secondary',
					},
				},
				{
					color: 'success',
					reverse: false,
					class: {
						separator: 'group-data-[state=completed]:bg-success',
					},
				},
				{
					color: 'info',
					reverse: false,
					class: {
						separator: 'group-data-[state=completed]:bg-info',
					},
				},
				{
					color: 'warning',
					reverse: false,
					class: {
						separator: 'group-data-[state=completed]:bg-warning',
					},
				},
				{
					color: 'error',
					reverse: false,
					class: {
						separator: 'group-data-[state=completed]:bg-error',
					},
				},
				{
					color: 'primary',
					reverse: true,
					class: {
						separator:
							'group-data-[state=active]:bg-primary group-data-[state=completed]:bg-primary',
					},
				},
				{
					color: 'secondary',
					reverse: true,
					class: {
						separator:
							'group-data-[state=active]:bg-secondary group-data-[state=completed]:bg-secondary',
					},
				},
				{
					color: 'success',
					reverse: true,
					class: {
						separator:
							'group-data-[state=active]:bg-success group-data-[state=completed]:bg-success',
					},
				},
				{
					color: 'info',
					reverse: true,
					class: {
						separator:
							'group-data-[state=active]:bg-info group-data-[state=completed]:bg-info',
					},
				},
				{
					color: 'warning',
					reverse: true,
					class: {
						separator:
							'group-data-[state=active]:bg-warning group-data-[state=completed]:bg-warning',
					},
				},
				{
					color: 'error',
					reverse: true,
					class: {
						separator:
							'group-data-[state=active]:bg-error group-data-[state=completed]:bg-error',
					},
				},
				{
					color: 'neutral',
					reverse: false,
					class: {
						separator: 'group-data-[state=completed]:bg-inverted',
					},
				},
				{
					color: 'neutral',
					reverse: true,
					class: {
						separator:
							'group-data-[state=active]:bg-inverted group-data-[state=completed]:bg-inverted',
					},
				},
				{
					orientation: 'horizontal',
					size: '3xs',
					class: {
						wrapper: 'pe-4.5',
					},
				},
				{
					orientation: 'horizontal',
					size: '2xs',
					class: {
						wrapper: 'pe-5',
					},
				},
				{
					orientation: 'horizontal',
					size: 'xs',
					class: {
						wrapper: 'pe-5.5',
					},
				},
				{
					orientation: 'horizontal',
					size: 'sm',
					class: {
						wrapper: 'pe-6',
					},
				},
				{
					orientation: 'horizontal',
					size: 'md',
					class: {
						wrapper: 'pe-6.5',
					},
				},
				{
					orientation: 'horizontal',
					size: 'lg',
					class: {
						wrapper: 'pe-7',
					},
				},
				{
					orientation: 'horizontal',
					size: 'xl',
					class: {
						wrapper: 'pe-7.5',
					},
				},
				{
					orientation: 'horizontal',
					size: '2xl',
					class: {
						wrapper: 'pe-8',
					},
				},
				{
					orientation: 'horizontal',
					size: '3xl',
					class: {
						wrapper: 'pe-8.5',
					},
				},
				{
					orientation: 'vertical',
					size: '3xs',
					class: {
						wrapper: '-mt-0.5 pb-4.5',
					},
				},
				{
					orientation: 'vertical',
					size: '2xs',
					class: {
						wrapper: 'pb-5',
					},
				},
				{
					orientation: 'vertical',
					size: 'xs',
					class: {
						wrapper: 'mt-0.5 pb-5.5',
					},
				},
				{
					orientation: 'vertical',
					size: 'sm',
					class: {
						wrapper: 'mt-1 pb-6',
					},
				},
				{
					orientation: 'vertical',
					size: 'md',
					class: {
						wrapper: 'mt-1.5 pb-6.5',
					},
				},
				{
					orientation: 'vertical',
					size: 'lg',
					class: {
						wrapper: 'mt-2 pb-7',
					},
				},
				{
					orientation: 'vertical',
					size: 'xl',
					class: {
						wrapper: 'mt-2.5 pb-7.5',
					},
				},
				{
					orientation: 'vertical',
					size: '2xl',
					class: {
						wrapper: 'mt-3 pb-8',
					},
				},
				{
					orientation: 'vertical',
					size: '3xl',
					class: {
						wrapper: 'mt-3.5 pb-8.5',
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

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Timeline.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/timeline.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Tree"
description: "A tree view component to display and interact with hierarchical data structures."
canonical_url: "https://ui.nuxt.com/docs/components/tree"

---

# Tree

> A tree view component to display and interact with hierarchical data structures.

## Usage

Use the Tree component to display a hierarchical structure of items.

```vue
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = ref<TreeItem[]>([
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{
							label: 'Card.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
						{
							label: 'Button.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
					],
				},
			],
		},
		{
			label: 'app.vue',
			icon: 'i-vscode-icons-file-type-vue',
		},
		{
			label: 'nuxt.config.ts',
			icon: 'i-vscode-icons-file-type-nuxt',
		},
	]);
</script>

<template>
	<UTree :items="items" />
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `icon?: string`
- `label?: string`
- `trailingIcon?: string`
- `defaultExpanded?: boolean`
- `disabled?: boolean`
- `slot?: string`
- `children?: TreeItem[]`
- `onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void`
- `onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void`
- `class?: any`
- `ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }`

> [!NOTE]
>
> A unique identifier is required for each item. The component will use the `label` prop as identifier if no `get-key` is provided. Ideally you should provide a `get-key` function prop to return a unique identifier. Alternatively, you can use the `labelKey` prop to specify which property to use as the unique identifier.

```vue
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = ref<TreeItem[]>([
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{
							label: 'Card.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
						{
							label: 'Button.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
					],
				},
			],
		},
		{
			label: 'app.vue',
			icon: 'i-vscode-icons-file-type-vue',
		},
		{
			label: 'nuxt.config.ts',
			icon: 'i-vscode-icons-file-type-nuxt',
		},
	]);
</script>

<template>
	<UTree :items="items" />
</template>
```

### Multiple

Use the `multiple` prop to allow multiple item selections.

```vue
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = ref<TreeItem[]>([
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{
							label: 'Card.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
						{
							label: 'Button.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
					],
				},
			],
		},
		{
			label: 'app.vue',
			icon: 'i-vscode-icons-file-type-vue',
		},
		{
			label: 'nuxt.config.ts',
			icon: 'i-vscode-icons-file-type-nuxt',
		},
	]);
</script>

<template>
	<UTree
		multiple
		:items="items"
	/>
</template>
```

### Nested `4.1+`

Use the `nested` prop to control whether the Tree is rendered with nested structure or as a flat list. Defaults to `true`.

```vue
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = ref<TreeItem[]>([
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{
							label: 'Card.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
						{
							label: 'Button.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
					],
				},
			],
		},
		{
			label: 'app.vue',
			icon: 'i-vscode-icons-file-type-vue',
		},
		{
			label: 'nuxt.config.ts',
			icon: 'i-vscode-icons-file-type-nuxt',
		},
	]);
</script>

<template>
	<UTree
		:nested="false"
		:items="items"
	/>
</template>
```

> [!NOTE]
> See: #with-virtualization
>
> When `nested` is `false`, all items are rendered at the same level with indentation to indicate hierarchy. This is useful for virtualization or drag and drop functionality.

### Color

Use the `color` prop to change the color of the Tree.

```vue
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = ref<TreeItem[]>([
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{
							label: 'Card.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
						{
							label: 'Button.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
					],
				},
			],
		},
		{
			label: 'app.vue',
			icon: 'i-vscode-icons-file-type-vue',
		},
		{
			label: 'nuxt.config.ts',
			icon: 'i-vscode-icons-file-type-nuxt',
		},
	]);
</script>

<template>
	<UTree
		color="neutral"
		:items="items"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Tree.

```vue
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = ref<TreeItem[]>([
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{
							label: 'Card.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
						{
							label: 'Button.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
					],
				},
			],
		},
		{
			label: 'app.vue',
			icon: 'i-vscode-icons-file-type-vue',
		},
		{
			label: 'nuxt.config.ts',
			icon: 'i-vscode-icons-file-type-nuxt',
		},
	]);
</script>

<template>
	<UTree
		size="xl"
		:items="items"
	/>
</template>
```

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/docs/components/icon) of a parent node. Defaults to `i-lucide-chevron-down`.

> [!NOTE]
>
> If an icon is specified for an item, it will always take precedence over these props.

```vue
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = ref<TreeItem[]>([
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					trailingIcon: 'i-lucide-chevron-down',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{
							label: 'Card.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
						{
							label: 'Button.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
					],
				},
			],
		},
		{
			label: 'app.vue',
			icon: 'i-vscode-icons-file-type-vue',
		},
		{
			label: 'nuxt.config.ts',
			icon: 'i-vscode-icons-file-type-nuxt',
		},
	]);
</script>

<template>
	<UTree
		trailing-icon="i-lucide-arrow-down"
		:items="items"
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

### Expanded Icon

Use the `expanded-icon` and `collapsed-icon` props to customize the icons of a parent node when it is expanded or collapsed. Defaults to `i-lucide-folder-open` and `i-lucide-folder` respectively.

```vue
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = ref<TreeItem[]>([
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{
							label: 'Card.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
						{
							label: 'Button.vue',
							icon: 'i-vscode-icons-file-type-vue',
						},
					],
				},
			],
		},
		{
			label: 'app.vue',
			icon: 'i-vscode-icons-file-type-vue',
		},
		{
			label: 'nuxt.config.ts',
			icon: 'i-vscode-icons-file-type-nuxt',
		},
	]);
</script>

<template>
	<UTree
		expanded-icon="i-lucide-book-open"
		collapsed-icon="i-lucide-book"
		:items="items"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize these icons globally in your `app.config.ts` under `ui.icons.folder` and `ui.icons.folderOpen` keys.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize these icons globally in your `vite.config.ts` under `ui.icons.folder` and `ui.icons.folderOpen` keys.

### Disabled

Use the `disabled` prop to prevent any user interaction with the Tree.

```vue
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = ref<TreeItem[]>([
		{
			label: 'app',
			icon: 'i-lucide-folder',
			defaultExpanded: true,
			children: [
				{
					label: 'composables',
					icon: 'i-lucide-folder',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components',
					icon: 'i-lucide-folder',
					children: [
						{
							label: 'Home',
							icon: 'i-lucide-folder',
							children: [
								{
									label: 'Card.vue',
									icon: 'i-vscode-icons-file-type-vue',
								},
								{
									label: 'Button.vue',
									icon: 'i-vscode-icons-file-type-vue',
								},
							],
						},
					],
				},
			],
		},
		{
			label: 'app.vue',
			icon: 'i-vscode-icons-file-type-vue',
		},
		{
			label: 'nuxt.config.ts',
			icon: 'i-vscode-icons-file-type-nuxt',
		},
	]);
</script>

<template>
	<UTree
		disabled
		:items="items"
	/>
</template>
```

> [!NOTE]
>
> You can also disable individual items using `item.disabled`.

## Examples

### Control selected item(s)

You can control the selected item(s) by using the `default-value` prop or the `v-model` directive.

```vue [TreeModelValueExample.vue]
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items: TreeItem[] = [
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{ label: 'Card.vue', icon: 'i-vscode-icons-file-type-vue' },
						{ label: 'Button.vue', icon: 'i-vscode-icons-file-type-vue' },
					],
				},
			],
		},
		{ label: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
		{ label: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt' },
	];

	const value = ref();
</script>

<template>
	<UTree
		v-model="value"
		:items="items"
	/>
</template>
```

> [!TIP]
>
> Use the `get-key` prop to change the function used to get the unique key from each item when a `v-model` or `default-value` is provided.

If you want to prevent an item from being selected, you can use the `item.onSelect()` property or the global `select` event:

```vue [TreeOnSelectExample.vue]
<script setup lang="ts">
	import type { TreeItemSelectEvent } from 'reka-ui';
	import type { TreeItem } from '@nuxt/ui';

	const items: TreeItem[] = [
		{
			label: 'app/',
			defaultExpanded: true,
			onSelect: (e: Event) => {
				e.preventDefault();
			},
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{ label: 'Card.vue', icon: 'i-vscode-icons-file-type-vue' },
						{ label: 'Button.vue', icon: 'i-vscode-icons-file-type-vue' },
					],
				},
			],
		},
		{ label: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
		{ label: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt' },
	];

	function onSelect(e: TreeItemSelectEvent<TreeItem>) {
		if (e.detail.originalEvent.type === 'click') {
			e.preventDefault();
		}
	}
</script>

<template>
	<UTree
		:items="items"
		@select="onSelect"
	/>
</template>
```

> [!NOTE]
>
> This lets you expand or collapse a parent item without selecting it.

### Control expanded items

You can control the expanded items by using the `default-expanded` prop or the `v-model` directive.

```vue [TreeExpandedExample.vue]
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = [
		{
			label: 'app/',
			id: 'app',
			children: [
				{
					label: 'composables/',
					id: 'app/composables',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					id: 'app/components',
					children: [
						{ label: 'Card.vue', icon: 'i-vscode-icons-file-type-vue' },
						{ label: 'Button.vue', icon: 'i-vscode-icons-file-type-vue' },
					],
				},
			],
		},
		{ label: 'app.vue', id: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
		{
			label: 'nuxt.config.ts',
			id: 'nuxt.config.ts',
			icon: 'i-vscode-icons-file-type-nuxt',
		},
	] satisfies TreeItem[];

	const expanded = ref(['app', 'app/composables']);
</script>

<template>
	<UTree
		v-model:expanded="expanded"
		:items="items"
		:get-key="(i) => i.id"
	/>
</template>
```

If you want to prevent an item from being expanded, you can use the `item.onToggle()` property or the global `toggle` event:

```vue [TreeOnToggleExample.vue]
<script setup lang="ts">
	import type { TreeItemToggleEvent } from 'reka-ui';
	import type { TreeItem } from '@nuxt/ui';

	const items: TreeItem[] = [
		{
			label: 'app/',
			defaultExpanded: true,
			onToggle: (e: Event) => {
				e.preventDefault();
			},
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{ label: 'Card.vue', icon: 'i-vscode-icons-file-type-vue' },
						{ label: 'Button.vue', icon: 'i-vscode-icons-file-type-vue' },
					],
				},
			],
		},
		{ label: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
		{ label: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt' },
	];

	function onToggle(e: TreeItemToggleEvent<TreeItem>) {
		if (e.detail.originalEvent.type === 'keydown') {
			e.preventDefault();
		}
	}
</script>

<template>
	<UTree
		:items="items"
		@toggle="onToggle"
	/>
</template>
```

> [!NOTE]
>
> This lets you select a parent item without expanding or collapsing its children.

### With checkbox in items `4.1+`

You can use the `item-leading` slot to add a [Checkbox](/docs/components/checkbox) to the items. Use the `multiple`, `propagate-select` and `bubble-select` props to enable multi-selection with parent-child relationship and the `select` and `toggle` events to control the selected and expanded state of the items.

```vue [TreeCheckboxItemsExample.vue]
<script setup lang="ts">
	import type { TreeItemSelectEvent } from 'reka-ui';
	import type { TreeItem } from '@nuxt/ui';

	const items: TreeItem[] = [
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [{ label: 'useAuth.ts' }, { label: 'useUser.ts' }],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [{ label: 'Card.vue' }, { label: 'Button.vue' }],
				},
			],
		},
		{ label: 'app.vue' },
		{ label: 'nuxt.config.ts' },
	];

	const value = ref<typeof items>([]);

	function onSelect(e: TreeItemSelectEvent<TreeItem>) {
		if (e.detail.originalEvent.type === 'click') {
			e.preventDefault();
		}
	}
</script>

<template>
	<UTree
		v-model="value"
		:as="{ link: 'div' }"
		:items="items"
		multiple
		propagate-select
		bubble-select
		@select="onSelect"
	>
		<template #item-leading="{ selected, indeterminate, handleSelect }">
			<UCheckbox
				:model-value="indeterminate ? 'indeterminate' : selected"
				tabindex="-1"
				@change="handleSelect"
				@click.stop
			/>
		</template>
	</UTree>
</template>
```

> [!NOTE]
>
> This example uses the `as` prop to change the items from `button` to `div` as the [`Checkbox`](/docs/components/checkbox) is also rendered as a `button`.

### With drag and drop `4.1+`

Use the [`useSortable`](https://vueuse.org/integrations/useSortable/) composable from [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) to enable drag and drop functionality on the Tree. This integration wraps [Sortable.js](https://sortablejs.github.io/Sortable/) to provide a seamless drag and drop experience.

```vue [TreeDragAndDropExample.vue]
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';
	import { useSortable } from '@vueuse/integrations/useSortable';

	const items = shallowRef<TreeItem[]>([
		{
			label: 'app/',
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{ label: 'Card.vue', icon: 'i-vscode-icons-file-type-vue' },
						{ label: 'Button.vue', icon: 'i-vscode-icons-file-type-vue' },
					],
				},
			],
		},
		{ label: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
		{ label: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt' },
	]);

	function flatten(
		items: TreeItem[],
		parent = items,
	): { item: TreeItem; parent: TreeItem[]; index: number }[] {
		return items.flatMap((item, index) => [
			{ item, parent, index },
			...(item.children?.length && item.defaultExpanded
				? flatten(item.children, item.children)
				: []),
		]);
	}

	function moveItem(oldIndex: number, newIndex: number) {
		if (oldIndex === newIndex) return;

		const flat = flatten(items.value);
		const source = flat[oldIndex];
		const target = flat[newIndex];

		if (!source || !target) return;

		const [moved] = source.parent.splice(source.index, 1);
		if (!moved) return;

		const updatedFlat = flatten(items.value);
		const updatedTarget = updatedFlat.find(({ item }) => item === target.item);
		if (!updatedTarget) return;

		const insertIndex =
			oldIndex < newIndex ? updatedTarget.index + 1 : updatedTarget.index;
		updatedTarget.parent.splice(insertIndex, 0, moved);
	}

	const tree = useTemplateRef<HTMLElement>('tree');

	useSortable(tree, items, {
		animation: 150,
		ghostClass: 'opacity-50',
		onUpdate: (e: any) => moveItem(e.oldIndex, e.newIndex),
	});
</script>

<template>
	<UTree
		ref="tree"
		:nested="false"
		:unmount-on-hide="false"
		:items="items"
	/>
</template>
```

> [!NOTE]
>
> This example sets the `nested` prop to `false` to have a flat list of items so that the items can be dragged and dropped.

### With virtualization `4.1+`

Use the `virtualize` prop to enable virtualization for large lists as a boolean or an object with options like `{ estimateSize: 32, overscan: 12 }`.

> [!WARNING]
>
> When virtualization is enabled, the tree structure is flattened, similar to setting the `nested` prop to `false`.

```vue [TreeVirtualizeExample.vue]
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items: TreeItem[] = Array(1000)
		.fill(0)
		.map((_, i) => ({
			label: `Item ${i + 1}`,
			children: [
				{ label: `Child ${i + 1}-1`, icon: 'i-lucide-file' },
				{ label: `Child ${i + 1}-2`, icon: 'i-lucide-file' },
			],
		}));
</script>

<template>
	<UTree
		virtualize
		:items="items"
		class="h-80"
	/>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}-wrapper`
- `#{{ item.slot }}`
- `#{{ item.slot }}-leading`
- `#{{ item.slot }}-label`
- `#{{ item.slot }}-trailing`

```vue [TreeCustomSlotExample.vue]
<script setup lang="ts">
	import type { TreeItem } from '@nuxt/ui';

	const items = [
		{
			label: 'app/',
			slot: 'app' as const,
			defaultExpanded: true,
			children: [
				{
					label: 'composables/',
					children: [
						{
							label: 'useAuth.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
						{
							label: 'useUser.ts',
							icon: 'i-vscode-icons-file-type-typescript',
						},
					],
				},
				{
					label: 'components/',
					defaultExpanded: true,
					children: [
						{ label: 'Card.vue', icon: 'i-vscode-icons-file-type-vue' },
						{ label: 'Button.vue', icon: 'i-vscode-icons-file-type-vue' },
					],
				},
			],
		},
		{ label: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
		{ label: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt' },
	] satisfies TreeItem[];
</script>

<template>
	<UTree :items="items">
		<template #app="{ item }">
			<p class="italic font-bold">
				{{ item.label }}
			</p>
		</template>
	</UTree>
</template>
```

## API

### Props

```ts
/**
 * Props for the Tree component
 */
interface TreeProps {
  /**
   * The element or component this component should render as.
   * @default 'ul'
   */
  as?: any;
  /**
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined;
  /**
   * @default 'md'
   */
  size?: "md" | "xs" | "sm" | "lg" | "xl" | undefined;
  /**
   * This function is passed the index of each item and should return a unique key for that item
   */
  getKey?: (val: T[number]): string | undefined;
  /**
   * The key used to get the label from the item.
   * @default 'label'
   */
  labelKey?: keyof Extract<NestedItem<T>, object> & string | DotPathKeys<Extract<NestedItem<T>, object>> | undefined;
  /**
   * The icon displayed on the right side of a parent node.
   * @default appConfig.ui.icons.chevronDown
   */
  trailingIcon?: any;
  /**
   * The icon displayed when a parent node is expanded.
   * @default appConfig.ui.icons.folderOpen
   */
  expandedIcon?: any;
  /**
   * The icon displayed when a parent node is collapsed.
   * @default appConfig.ui.icons.folder
   */
  collapsedIcon?: any;
  items?: T | undefined;
  /**
   * The controlled value of the Tree. Can be bind as `v-model`.
   */
  modelValue?: M extends true ? T[number][] : T[number] | undefined;
  /**
   * The value of the Tree when initially rendered. Use when you do not need to control the state of the Tree.
   */
  defaultValue?: M extends true ? T[number][] : T[number] | undefined;
  /**
   * Whether multiple options can be selected or not.
   */
  multiple?: M | undefined;
  /**
   * Use nested DOM structure (children inside parents) vs flattened structure (all items at same level).
   * When `virtualize` is enabled, this is automatically set to `false`.
   * @default true
   */
  nested?: boolean | undefined;
  /**
   * Enable virtualization for large lists.
   * Note: when enabled, the tree structure is flattened like if `nested` was set to `false`.
   * @default false
   */
  virtualize?: boolean | { overscan?: number | undefined; estimateSize?: number | ((index: number) => number) | undefined; } | undefined;
  onSelect?: (e: SelectEvent<T[number]>, item: T[number]): void | undefined;
  onToggle?: (e: ToggleEvent<T[number]>, item: T[number]): void | undefined;
  ui?: { root?: SlotClass; item?: SlotClass; listWithChildren?: SlotClass; itemWithChildren?: SlotClass; link?: SlotClass; linkLeadingIcon?: SlotClass; linkLabel?: SlotClass; linkTrailing?: SlotClass; linkTrailingIcon?: SlotClass; } | undefined;
  /**
   * The controlled value of the expanded item. Can be binded with `v-model`.
   */
  expanded?: string[] | undefined;
  /**
   * The value of the expanded tree when initially rendered. Use when you do not need to control the state of the expanded tree
   */
  defaultExpanded?: string[] | undefined;
  /**
   * How multiple selection should behave in the collection.
   */
  selectionBehavior?: "replace" | "toggle" | undefined;
  /**
   * When `true`, selecting parent will select the descendants. Requires `multiple` to be `true`.
   */
  propagateSelect?: boolean | undefined;
  /**
   * When `true`, prevents the user from interacting with tree
   */
  disabled?: boolean | undefined;
  /**
   * When `true`, selecting children will update the parent state. Requires `multiple` to be `true`.
   */
  bubbleSelect?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Tree component
 */
interface TreeSlots {
  item-wrapper(): any;
  item(): any;
  item-leading(): any;
  item-label(): any;
  item-trailing(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Tree component
 */
interface TreeEmits {
  update:modelValue: (payload: [val: M extends true ? T[number][] : T[number]]) => void;
  update:expanded: (payload: [val: string[]]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		tree: {
			slots: {
				root: 'relative isolate',
				item: 'w-full',
				listWithChildren: 'border-s border-default',
				itemWithChildren: 'ps-1.5 -ms-px',
				link: 'relative group w-full flex items-center text-sm select-none before:absolute before:inset-y-px before:inset-x-0 before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:outline-3',
				linkLeadingIcon: 'shrink-0 relative',
				linkLabel: 'truncate',
				linkTrailing: 'ms-auto inline-flex gap-1.5 items-center',
				linkTrailingIcon:
					'shrink-0 transform transition-transform duration-200 ease-out motion-reduce:transition-none group-data-expanded:rotate-180',
			},
			variants: {
				virtualize: {
					true: {
						root: 'overflow-y-auto',
					},
				},
				color: {
					primary: {
						link: 'before:outline-primary/25',
					},
					secondary: {
						link: 'before:outline-secondary/25',
					},
					success: {
						link: 'before:outline-success/25',
					},
					info: {
						link: 'before:outline-info/25',
					},
					warning: {
						link: 'before:outline-warning/25',
					},
					error: {
						link: 'before:outline-error/25',
					},
					neutral: {
						link: 'before:outline-inverted/25',
					},
				},
				size: {
					xs: {
						listWithChildren: 'ms-4',
						link: 'px-2 py-1 text-xs gap-1',
						linkLeadingIcon: 'size-4',
						linkTrailingIcon: 'size-4',
					},
					sm: {
						listWithChildren: 'ms-4.5',
						link: 'px-2.5 py-1.5 text-xs gap-1.5',
						linkLeadingIcon: 'size-4',
						linkTrailingIcon: 'size-4',
					},
					md: {
						listWithChildren: 'ms-5',
						link: 'px-2.5 py-1.5 text-sm gap-1.5',
						linkLeadingIcon: 'size-5',
						linkTrailingIcon: 'size-5',
					},
					lg: {
						listWithChildren: 'ms-5.5',
						link: 'px-3 py-2 text-sm gap-2',
						linkLeadingIcon: 'size-5',
						linkTrailingIcon: 'size-5',
					},
					xl: {
						listWithChildren: 'ms-6',
						link: 'px-3 py-2 text-base gap-2',
						linkLeadingIcon: 'size-6',
						linkTrailingIcon: 'size-6',
					},
				},
				selected: {
					true: {
						link: 'before:bg-elevated',
					},
				},
				disabled: {
					true: {
						link: 'cursor-not-allowed opacity-75',
					},
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					selected: true,
					class: {
						link: 'text-primary',
					},
				},
				{
					color: 'secondary',
					selected: true,
					class: {
						link: 'text-secondary',
					},
				},
				{
					color: 'success',
					selected: true,
					class: {
						link: 'text-success',
					},
				},
				{
					color: 'info',
					selected: true,
					class: {
						link: 'text-info',
					},
				},
				{
					color: 'warning',
					selected: true,
					class: {
						link: 'text-warning',
					},
				},
				{
					color: 'error',
					selected: true,
					class: {
						link: 'text-error',
					},
				},
				{
					color: 'neutral',
					selected: true,
					class: {
						link: 'text-highlighted',
					},
				},
				{
					selected: false,
					disabled: false,
					class: {
						link: [
							'hover:text-highlighted hover:before:bg-elevated/50',
							'transition-colors before:transition-colors',
						],
					},
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

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Tree.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/tree.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "User"
description: "Display user information with name, description and avatar."
canonical_url: "https://ui.nuxt.com/docs/components/user"

---

# User

> Display user information with name, description and avatar.

## Usage

### Name

Use the `name` prop to display a name for the user.

```vue
<template>
	<UUser name="John Doe" />
</template>
```

### Description

Use the `description` prop to display a description for the user.

```vue
<template>
	<UUser
		name="John Doe"
		description="Software Engineer"
	/>
</template>
```

### Avatar

Use the `avatar` prop to display an [Avatar](/docs/components/avatar) component.

```vue
<template>
	<UUser
		name="John Doe"
		description="Software Engineer"
		:avatar="{
			src: 'https://i.pravatar.cc/150?u=john-doe',
			loading: 'lazy',
			icon: 'i-lucide-image',
		}"
	/>
</template>
```

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

### Chip

Use the `chip` prop to display a [Chip](/docs/components/chip) component.

```vue
<template>
	<UUser
		name="John Doe"
		description="Software Engineer"
		:avatar="{
			src: 'https://i.pravatar.cc/150?u=john-doe',
		}"
		:chip="{
			color: 'primary',
			position: 'top-right',
		}"
	/>
</template>
```

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

### Size

Use the `size` prop to change the size of the user avatar and text.

```vue
<template>
	<UUser
		name="John Doe"
		description="Software Engineer"
		:avatar="{
			src: 'https://i.pravatar.cc/150?u=john-doe',
		}"
		chip
		size="xl"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation. Defaults to `horizontal`.

```vue
<template>
	<UUser
		orientation="vertical"
		name="John Doe"
		description="Software Engineer"
		:avatar="{
			src: 'https://i.pravatar.cc/150?u=john-doe',
		}"
	/>
</template>
```

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component such as `to`, `target`, `rel`, etc.

```vue
<template>
	<UUser
		to="https://github.com/benjamincanac"
		target="_blank"
		name="Benjamin Canac"
		description="Software Engineer"
		:avatar="{
			src: 'https://github.com/benjamincanac.png',
		}"
	/>
</template>
```

> [!NOTE]
>
> The `NuxtLink` component will inherit all other attributes you pass to the `User` component.

## API

### Props

```ts
/**
 * Props for the User component
 */
interface UserProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  name?: string | undefined;
  description?: string | undefined;
  avatar?: Omit<AvatarProps, "size"> & { [key: string]: any; } | undefined;
  chip?: boolean | Omit<ChipProps, "size" | "inset"> | undefined;
  /**
   * @default 'md'
   */
  size?: "md" | "3xs" | "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | undefined;
  /**
   * The orientation of the user.
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical" | undefined;
  to?: string | it | et | undefined;
  target?: null | "_blank" | "_parent" | "_self" | "_top" | string & {} | undefined;
  onClick?: (event: MouseEvent): void | undefined;
  ui?: { root?: SlotClass; wrapper?: SlotClass; name?: SlotClass; description?: SlotClass; avatar?: SlotClass; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the User component
 */
interface UserSlots {
	avatar(): any;
	name(): any;
	description(): any;
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		user: {
			slots: {
				root: 'relative group/user',
				wrapper: '',
				name: 'font-medium',
				description: 'text-muted',
				avatar: 'shrink-0',
			},
			variants: {
				orientation: {
					horizontal: {
						root: 'flex items-center',
					},
					vertical: {
						root: 'flex flex-col',
					},
				},
				to: {
					true: {
						root: [
							'rounded-md outline-primary/25 has-focus-visible:outline-3',
							'transition',
						],
						name: [
							'text-default peer-hover:text-highlighted peer-focus-visible:text-highlighted',
							'transition-colors',
						],
						description: [
							'peer-hover:text-toned peer-focus-visible:text-toned',
							'transition-colors',
						],
						avatar:
							'transform transition-transform ease-out motion-reduce:transition-none group-hover/user:scale-115 group-has-focus-visible/user:scale-115',
					},
					false: {
						name: 'text-highlighted',
						description: '',
					},
				},
				size: {
					'3xs': {
						root: 'gap-1',
						wrapper: 'flex items-center gap-1',
						name: 'text-xs',
						description: 'text-xs',
					},
					'2xs': {
						root: 'gap-1.5',
						wrapper: 'flex items-center gap-1.5',
						name: 'text-xs',
						description: 'text-xs',
					},
					xs: {
						root: 'gap-1.5',
						wrapper: 'flex items-center gap-1.5',
						name: 'text-xs',
						description: 'text-xs',
					},
					sm: {
						root: 'gap-2',
						name: 'text-xs',
						description: 'text-xs',
					},
					md: {
						root: 'gap-2',
						name: 'text-sm',
						description: 'text-xs',
					},
					lg: {
						root: 'gap-2.5',
						name: 'text-sm',
						description: 'text-sm',
					},
					xl: {
						root: 'gap-2.5',
						name: 'text-base',
						description: 'text-sm',
					},
					'2xl': {
						root: 'gap-3',
						name: 'text-base',
						description: 'text-base',
					},
					'3xl': {
						root: 'gap-3',
						name: 'text-lg',
						description: 'text-base',
					},
				},
			},
			defaultVariants: {
				size: 'md',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/User.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/user.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

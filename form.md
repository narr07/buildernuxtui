Form
Checkbox
CheckboxGroup
ColorPicker
FileUpload
Form
FormField
Input
InputDate
InputMenu
InputNumber
InputRating
InputTags
InputTime
Listbox
PinInput
RadioGroup
Select
SelectMenu
Slider
Switch
Textarea

---

title: "Checkbox"
description: "An input element to toggle between checked and unchecked states."
canonical_url: "https://ui.nuxt.com/docs/components/checkbox"

---

# Checkbox

> An input element to toggle between checked and unchecked states.

## Usage

Use the `v-model` directive to control the checked state of the Checkbox.

```vue
<script setup lang="ts">
	const value = ref(true);
</script>

<template>
	<UCheckbox v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
	<UCheckbox default-value />
</template>
```

### Indeterminate

Use the `indeterminate` value in the `v-model` directive or `default-value` prop to set the Checkbox to an [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

```vue
<template>
	<UCheckbox default-value="indeterminate" />
</template>
```

### Indeterminate Icon

Use the `indeterminate-icon` prop to customize the indeterminate icon. Defaults to `i-lucide-minus`.

```vue
<template>
	<UCheckbox
		default-value="indeterminate"
		indeterminate-icon="i-lucide-plus"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.minus` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.minus` key.

### Label

Use the `label` prop to set the label of the Checkbox.

```vue
<template>
	<UCheckbox label="Check me" />
</template>
```

When using the `required` prop, an asterisk is added next to the label.

```vue
<template>
	<UCheckbox
		required
		label="Check me"
	/>
</template>
```

### Description

Use the `description` prop to set the description of the Checkbox.

```vue
<template>
	<UCheckbox
		label="Check me"
		description="This is a checkbox."
	/>
</template>
```

### Icon

Use the `icon` prop to set the icon of the Checkbox when it is checked. Defaults to `i-lucide-check`.

```vue
<template>
	<UCheckbox
		icon="i-lucide-heart"
		default-value
		label="Check me"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key.

### Color

Use the `color` prop to change the color of the Checkbox.

```vue
<template>
	<UCheckbox
		color="neutral"
		default-value
		label="Check me"
	/>
</template>
```

### Variant

Use the `variant` prop to change the variant of the Checkbox.

```vue
<template>
	<UCheckbox
		color="primary"
		variant="card"
		default-value
		label="Check me"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Checkbox.

```vue
<template>
	<UCheckbox
		size="xl"
		variant="list"
		default-value
		label="Check me"
	/>
</template>
```

### Indicator

Use the `indicator` prop to change the position or hide the indicator. Defaults to `start`.

> [!NOTE]
>
> When `indicator` is `hidden`, the icon is displayed above the label instead.

```vue
<template>
	<UCheckbox
		indicator="hidden"
		variant="card"
		icon="i-lucide-heart"
		default-value
		label="Check me"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the Checkbox.

```vue
<template>
	<UCheckbox
		disabled
		label="Check me"
	/>
</template>
```

## API

### Props

```ts
/**
 * Props for the Checkbox component
 */
interface CheckboxProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	label?: string | undefined;
	description?: string | undefined;
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
	 * @default 'list'
	 */
	variant?: 'card' | 'list' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * Position of the indicator.
	 * @default 'start'
	 */
	indicator?: 'start' | 'end' | 'hidden' | undefined;
	/**
	 * Highlight the ring color like a focus state.
	 * @default false
	 */
	highlight?: boolean | undefined;
	/**
	 * The icon displayed when checked, or above the label when `indicator` is `hidden`.
	 * @default appConfig.ui.icons.check
	 */
	icon?: any;
	/**
	 * The icon displayed when the checkbox is indeterminate.
	 * @default appConfig.ui.icons.minus
	 */
	indeterminateIcon?: any;
	ui?:
		| {
				root?: SlotClass;
				container?: SlotClass;
				base?: SlotClass;
				indicator?: SlotClass;
				icon?: SlotClass;
				wrapper?: SlotClass;
				label?: SlotClass;
				description?: SlotClass;
		  }
		| undefined;
	/**
	 * When `true`, prevents the user from interacting with the checkbox
	 */
	disabled?: boolean | undefined;
	/**
	 * When `true`, indicates that the user must set the value before the owning form can be submitted.
	 */
	required?: boolean | undefined;
	/**
	 * The name of the field. Submitted with its owning form as part of a name/value pair.
	 */
	name?: string | undefined;
	/**
	 * The value given as data when submitted with a `name`.
	 * @default "on"
	 */
	value?: null | string | number | bigint | Record<string, any> | undefined;
	/**
	 * Id of the element
	 */
	id?: string | undefined;
	/**
	 * The value of the checkbox when it is initially rendered. Use when you do not need to control its value.
	 */
	defaultValue?: T | 'indeterminate' | undefined;
	/**
	 * The controlled value of the checkbox. Can be binded with v-model.
	 */
	modelValue?: null | T | 'indeterminate' | undefined;
	/**
	 * The value used when the checkbox is checked. Defaults to `true`.
	 */
	trueValue?: T | undefined;
	/**
	 * The value used when the checkbox is unchecked. Defaults to `false`.
	 */
	falseValue?: T | undefined;
	autofocus?: false | true | 'true' | 'false' | undefined;
	form?: string | undefined;
	formaction?: string | undefined;
	formenctype?: string | undefined;
	formmethod?: string | undefined;
	formnovalidate?: false | true | 'true' | 'false' | undefined;
	formtarget?: string | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
>
> This component also supports all native `<button>` HTML attributes.

### Slots

```ts
/**
 * Slots for the Checkbox component
 */
interface CheckboxSlots {
	label(): any;
	description(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Checkbox component
 */
interface CheckboxEmits {
  change: (payload: [event: Event]) => void;
  update:modelValue: (payload: [value: T | "indeterminate"]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		checkbox: {
			slots: {
				root: 'relative flex items-start',
				container: 'flex items-center',
				base: 'rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-none',
				indicator: 'flex items-center justify-center size-full text-inverted',
				icon: 'shrink-0',
				wrapper: 'w-full',
				label: 'block font-medium text-default',
				description: 'text-muted',
			},
			variants: {
				color: {
					primary: {
						indicator: 'bg-primary',
					},
					secondary: {
						indicator: 'bg-secondary',
					},
					success: {
						indicator: 'bg-success',
					},
					info: {
						indicator: 'bg-info',
					},
					warning: {
						indicator: 'bg-warning',
					},
					error: {
						indicator: 'bg-error',
					},
					neutral: {
						indicator: 'bg-inverted',
					},
				},
				variant: {
					list: {
						root: '',
					},
					card: {
						root: [
							'border border-muted rounded-lg hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:bg-elevated/50',
							'transition-colors',
						],
					},
				},
				indicator: {
					start: {
						root: 'flex-row',
						wrapper: 'ms-2',
					},
					end: {
						root: 'flex-row-reverse',
						wrapper: 'me-2',
					},
					hidden: {
						base: 'sr-only',
						wrapper: 'flex flex-col items-center gap-1 text-center',
					},
				},
				size: {
					xs: {
						base: 'size-3',
						icon: 'size-2.5',
						container: 'h-4',
						wrapper: 'text-xs',
					},
					sm: {
						base: 'size-3.5',
						icon: 'size-3',
						container: 'h-4',
						wrapper: 'text-xs',
					},
					md: {
						base: 'size-4',
						icon: 'size-3.5',
						container: 'h-5',
						wrapper: 'text-sm',
					},
					lg: {
						base: 'size-4.5',
						icon: 'size-4',
						container: 'h-5',
						wrapper: 'text-sm',
					},
					xl: {
						base: 'size-5',
						icon: 'size-4.5',
						container: 'h-6',
						wrapper: 'text-base',
					},
				},
				required: {
					true: {
						label: "after:content-['*'] after:ms-0.5 after:text-error",
					},
				},
				disabled: {
					true: {
						root: 'opacity-75',
						base: 'cursor-not-allowed',
						label: 'cursor-not-allowed',
						description: 'cursor-not-allowed',
					},
				},
				highlight: {
					true: '',
					false: '',
				},
				checked: {
					true: '',
				},
			},
			compoundVariants: [
				{
					indicator: 'hidden',
					class: {
						container: 'h-auto',
					},
				},
				{
					variant: 'card',
					highlight: false,
					class: {
						root: 'hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:border-accented',
					},
				},
				{
					size: 'xs',
					indicator: 'hidden',
					class: {
						icon: 'size-3',
					},
				},
				{
					size: 'sm',
					indicator: 'hidden',
					class: {
						icon: 'size-3.5',
					},
				},
				{
					size: 'md',
					indicator: 'hidden',
					class: {
						icon: 'size-4',
					},
				},
				{
					size: 'lg',
					indicator: 'hidden',
					class: {
						icon: 'size-4.5',
					},
				},
				{
					size: 'xl',
					indicator: 'hidden',
					class: {
						icon: 'size-5',
					},
				},
				{
					size: 'xs',
					variant: 'card',
					class: {
						root: 'p-2.5',
					},
				},
				{
					size: 'sm',
					variant: 'card',
					class: {
						root: 'p-3',
					},
				},
				{
					size: 'md',
					variant: 'card',
					class: {
						root: 'p-3.5',
					},
				},
				{
					size: 'lg',
					variant: 'card',
					class: {
						root: 'p-4',
					},
				},
				{
					size: 'xl',
					variant: 'card',
					class: {
						root: 'p-4.5',
					},
				},
				{
					color: 'primary',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-primary/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-primary',
					},
				},
				{
					color: 'secondary',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-secondary/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-secondary',
					},
				},
				{
					color: 'success',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-success/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-success',
					},
				},
				{
					color: 'info',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-info/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-info',
					},
				},
				{
					color: 'warning',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-warning/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-warning',
					},
				},
				{
					color: 'error',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-error/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-error',
					},
				},
				{
					color: 'neutral',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-inverted/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-inverted',
					},
				},
				{
					color: 'primary',
					variant: 'card',
					class: {
						root: 'outline-primary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-primary has-focus-visible:z-[1]',
					},
				},
				{
					color: 'secondary',
					variant: 'card',
					class: {
						root: 'outline-secondary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-secondary has-focus-visible:z-[1]',
					},
				},
				{
					color: 'success',
					variant: 'card',
					class: {
						root: 'outline-success/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-success has-focus-visible:z-[1]',
					},
				},
				{
					color: 'info',
					variant: 'card',
					class: {
						root: 'outline-info/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-info has-focus-visible:z-[1]',
					},
				},
				{
					color: 'warning',
					variant: 'card',
					class: {
						root: 'outline-warning/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-warning has-focus-visible:z-[1]',
					},
				},
				{
					color: 'error',
					variant: 'card',
					class: {
						root: 'outline-error/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-error has-focus-visible:z-[1]',
					},
				},
				{
					color: 'neutral',
					variant: 'card',
					class: {
						root: 'outline-inverted/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-inverted has-focus-visible:z-[1]',
					},
				},
				{
					color: 'primary',
					variant: 'list',
					indicator: 'hidden',
					class: {
						root: 'outline-primary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-primary has-focus-visible:z-[1]',
					},
				},
				{
					color: 'secondary',
					variant: 'list',
					indicator: 'hidden',
					class: {
						root: 'outline-secondary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-secondary has-focus-visible:z-[1]',
					},
				},
				{
					color: 'success',
					variant: 'list',
					indicator: 'hidden',
					class: {
						root: 'outline-success/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-success has-focus-visible:z-[1]',
					},
				},
				{
					color: 'info',
					variant: 'list',
					indicator: 'hidden',
					class: {
						root: 'outline-info/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-info has-focus-visible:z-[1]',
					},
				},
				{
					color: 'warning',
					variant: 'list',
					indicator: 'hidden',
					class: {
						root: 'outline-warning/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-warning has-focus-visible:z-[1]',
					},
				},
				{
					color: 'error',
					variant: 'list',
					indicator: 'hidden',
					class: {
						root: 'outline-error/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-error has-focus-visible:z-[1]',
					},
				},
				{
					color: 'neutral',
					variant: 'list',
					indicator: 'hidden',
					class: {
						root: 'outline-inverted/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-inverted has-focus-visible:z-[1]',
					},
				},
				{
					color: 'primary',
					variant: 'card',
					class: {
						root: 'has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/10',
					},
				},
				{
					color: 'secondary',
					variant: 'card',
					class: {
						root: 'has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:bg-secondary/10',
					},
				},
				{
					color: 'success',
					variant: 'card',
					class: {
						root: 'has-data-[state=checked]:border-success/50 has-data-[state=checked]:bg-success/10',
					},
				},
				{
					color: 'info',
					variant: 'card',
					class: {
						root: 'has-data-[state=checked]:border-info/50 has-data-[state=checked]:bg-info/10',
					},
				},
				{
					color: 'warning',
					variant: 'card',
					class: {
						root: 'has-data-[state=checked]:border-warning/50 has-data-[state=checked]:bg-warning/10',
					},
				},
				{
					color: 'error',
					variant: 'card',
					class: {
						root: 'has-data-[state=checked]:border-error/50 has-data-[state=checked]:bg-error/10',
					},
				},
				{
					color: 'neutral',
					variant: 'card',
					class: {
						root: 'has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:bg-elevated',
					},
				},
				{
					variant: 'card',
					disabled: true,
					class: {
						root: 'cursor-not-allowed',
					},
				},
				{
					color: 'primary',
					indicator: 'hidden',
					highlight: true,
					class: {
						root: 'not-has-disabled:border-primary not-has-disabled:has-data-[state=checked]:border-primary',
					},
				},
				{
					color: 'secondary',
					indicator: 'hidden',
					highlight: true,
					class: {
						root: 'not-has-disabled:border-secondary not-has-disabled:has-data-[state=checked]:border-secondary',
					},
				},
				{
					color: 'success',
					indicator: 'hidden',
					highlight: true,
					class: {
						root: 'not-has-disabled:border-success not-has-disabled:has-data-[state=checked]:border-success',
					},
				},
				{
					color: 'info',
					indicator: 'hidden',
					highlight: true,
					class: {
						root: 'not-has-disabled:border-info not-has-disabled:has-data-[state=checked]:border-info',
					},
				},
				{
					color: 'warning',
					indicator: 'hidden',
					highlight: true,
					class: {
						root: 'not-has-disabled:border-warning not-has-disabled:has-data-[state=checked]:border-warning',
					},
				},
				{
					color: 'error',
					indicator: 'hidden',
					highlight: true,
					class: {
						root: 'not-has-disabled:border-error not-has-disabled:has-data-[state=checked]:border-error',
					},
				},
				{
					color: 'neutral',
					indicator: 'hidden',
					highlight: true,
					class: {
						root: 'not-has-disabled:border-inverted not-has-disabled:has-data-[state=checked]:border-inverted',
					},
				},
				{
					color: 'primary',
					highlight: true,
					class: {
						base: 'ring-primary',
					},
				},
				{
					color: 'secondary',
					highlight: true,
					class: {
						base: 'ring-secondary',
					},
				},
				{
					color: 'success',
					highlight: true,
					class: {
						base: 'ring-success',
					},
				},
				{
					color: 'info',
					highlight: true,
					class: {
						base: 'ring-info',
					},
				},
				{
					color: 'warning',
					highlight: true,
					class: {
						base: 'ring-warning',
					},
				},
				{
					color: 'error',
					highlight: true,
					class: {
						base: 'ring-error',
					},
				},
				{
					color: 'neutral',
					highlight: true,
					class: {
						base: 'ring-inverted',
					},
				},
			],
			defaultVariants: {
				highlight: false,
				size: 'md',
				color: 'primary',
				variant: 'list',
				indicator: 'start',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Checkbox.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/checkbox.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "CheckboxGroup"
description: "A set of checkboxes to select multiple options from a list."
canonical_url: "https://ui.nuxt.com/docs/components/checkbox-group"

---

# CheckboxGroup

> A set of checkboxes to select multiple options from a list.

## Usage

Use the `v-model` directive to control the value of the CheckboxGroup or the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
	const value = ref(['System']);
</script>

<template>
	<UCheckboxGroup
		v-model="value"
		:items="items"
	/>
</template>
```

### Items

Use the `items` prop as an array of strings or numbers:

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
	const value = ref(['System']);
</script>

<template>
	<UCheckboxGroup
		v-model="value"
		:items="items"
	/>
</template>
```

You can also pass an array of objects with the following properties:

- `label?: string`
- `description?: string`
- [`value?: string`](#value-key)
- `disabled?: boolean`
- [`icon?: string`](#indicator)
- `class?: any`
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`

```vue
<script setup lang="ts">
	import type { CheckboxGroupItem } from '@nuxt/ui';

	const items = ref<CheckboxGroupItem[]>([
		{
			label: 'System',
			description: 'Matches your device settings.',
			value: 'system',
		},
		{
			label: 'Light',
			description: 'Always uses the light theme.',
			value: 'light',
		},
		{
			label: 'Dark',
			description: 'Always uses the dark theme.',
			value: 'dark',
		},
	]);
	const value = ref(['system']);
</script>

<template>
	<UCheckboxGroup
		v-model="value"
		:items="items"
	/>
</template>
```

> [!CAUTION]
>
> When using objects, you need to reference the `value` property of the object in the `v-model` directive or the `default-value` prop.

### Value Key

You can change the property that is used to set the value by using the `value-key` prop. Defaults to `value`.

```vue
<script setup lang="ts">
	import type { CheckboxGroupItem } from '@nuxt/ui';

	const items = ref<CheckboxGroupItem[]>([
		{
			label: 'System',
			description: 'Matches your device settings.',
			id: 'system',
		},
		{
			label: 'Light',
			description: 'Always uses the light theme.',
			id: 'light',
		},
		{
			label: 'Dark',
			description: 'Always uses the dark theme.',
			id: 'dark',
		},
	]);
	const value = ref(['light']);
</script>

<template>
	<UCheckboxGroup
		v-model="value"
		value-key="id"
		:items="items"
	/>
</template>
```

### Legend

Use the `legend` prop to set the legend of the CheckboxGroup.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
</script>

<template>
	<UCheckboxGroup
		legend="Theme"
		:default-value="['System']"
		:items="items"
	/>
</template>
```

### Color

Use the `color` prop to change the color of the CheckboxGroup.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
</script>

<template>
	<UCheckboxGroup
		color="neutral"
		:default-value="['System']"
		:items="items"
	/>
</template>
```

### Variant

Use the `variant` prop to change the variant of the CheckboxGroup.

```vue
<script setup lang="ts">
	import type { CheckboxGroupItem } from '@nuxt/ui';

	const items = ref<CheckboxGroupItem[]>([
		{
			label: 'System',
			value: 'system',
			description: 'Matches your device settings.',
		},
		{
			label: 'Light',
			value: 'light',
			description: 'Always uses the light theme.',
		},
		{
			label: 'Dark',
			value: 'dark',
			description: 'Always uses the dark theme.',
		},
	]);
</script>

<template>
	<UCheckboxGroup
		color="primary"
		variant="card"
		:default-value="['system']"
		:items="items"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the CheckboxGroup.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
</script>

<template>
	<UCheckboxGroup
		size="xl"
		variant="list"
		:default-value="['System']"
		:items="items"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the CheckboxGroup. Defaults to `vertical`.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
</script>

<template>
	<UCheckboxGroup
		orientation="horizontal"
		variant="list"
		:default-value="['System']"
		:items="items"
	/>
</template>
```

### Indicator

Use the `indicator` prop to change the position or hide the indicator. Defaults to `start`.

> [!NOTE]
>
> An item's `icon` replaces the check mark while the indicator is visible, and is displayed above the label when it is `hidden`.

```vue
<script setup lang="ts">
	import type { CheckboxGroupItem } from '@nuxt/ui';

	const items = ref<CheckboxGroupItem[]>([
		{
			label: 'System',
			icon: 'i-lucide-monitor',
			value: 'System',
			class: 'w-20',
		},
		{
			label: 'Light',
			icon: 'i-lucide-sun',
			class: 'w-20',
			value: 'Light',
		},
		{
			label: 'Dark',
			icon: 'i-lucide-moon',
			class: 'w-20',
			value: 'Dark',
		},
	]);
</script>

<template>
	<UCheckboxGroup
		indicator="hidden"
		orientation="horizontal"
		variant="table"
		:default-value="['System']"
		:items="items"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the CheckboxGroup.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
</script>

<template>
	<UCheckboxGroup
		disabled
		:default-value="['System']"
		:items="items"
	/>
</template>
```

## API

### Props

```ts
/**
 * Props for the CheckboxGroup component
 */
interface CheckboxGroupProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	legend?: string | undefined;
	/**
	 * When `items` is an array of objects, select the field to use as the value.
	 * @default 'value'
	 */
	valueKey?: VK | undefined;
	/**
	 * When `items` is an array of objects, select the field to use as the label.
	 * @default 'label'
	 */
	labelKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	/**
	 * When `items` is an array of objects, select the field to use as the description.
	 * @default 'description'
	 */
	descriptionKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	items?: T | undefined;
	/**
	 * The controlled value of the CheckboxGroup. Can be bind as `v-model`.
	 */
	modelValue?: GetItemValue<T, VK, undefined, NestedItem<T>>[] | undefined;
	/**
	 * The value of the CheckboxGroup when initially rendered. Use when you do not need to control the state of the CheckboxGroup.
	 */
	defaultValue?: GetItemValue<T, VK, undefined, NestedItem<T>>[] | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * @default 'list'
	 */
	variant?: 'table' | 'list' | 'card' | undefined;
	/**
	 * The orientation the checkbox buttons are laid out.
	 * @default 'vertical'
	 */
	orientation?: 'horizontal' | 'vertical' | undefined;
	ui?:
		| ({
				root?: SlotClass;
				fieldset?: SlotClass;
				legend?: SlotClass;
				item?: SlotClass;
		  } & {
				root?: SlotClass;
				container?: SlotClass;
				base?: SlotClass;
				indicator?: SlotClass;
				icon?: SlotClass;
				wrapper?: SlotClass;
				label?: SlotClass;
				description?: SlotClass;
		  })
		| undefined;
	/**
	 * When `true`, prevents the user from interacting with the checkboxes
	 */
	disabled?: boolean | undefined;
	/**
	 * Whether keyboard navigation should loop around
	 * @default false
	 */
	loop?: boolean | undefined;
	/**
	 * The name of the field. Submitted with its owning form as part of a name/value pair.
	 */
	name?: string | undefined;
	/**
	 * When `true`, indicates that the user must set the value before the owning form can be submitted.
	 */
	required?: boolean | undefined;
	/**
	 * The icon displayed when checked, or above the label when `indicator` is `hidden`.
	 * @default appConfig.ui.icons.check
	 */
	icon?: any;
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
	 * Highlight the ring color like a focus state.
	 * @default false
	 */
	highlight?: boolean | undefined;
	/**
	 * Position of the indicator.
	 * @default 'start'
	 */
	indicator?: 'start' | 'end' | 'hidden' | undefined;
}
```

### Slots

```ts
/**
 * Slots for the CheckboxGroup component
 */
interface CheckboxGroupSlots {
	legend(): any;
	label(): any;
	description(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the CheckboxGroup component
 */
interface CheckboxGroupEmits {
  update:modelValue: (payload: [value: GetItemValue<T, VK, undefined, NestedItem<T>>[]]) => void;
  change: (payload: [event: Event]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		checkboxGroup: {
			slots: {
				root: 'relative',
				fieldset: 'flex gap-x-2',
				legend: 'mb-1 block font-medium text-default',
				item: '',
			},
			variants: {
				orientation: {
					horizontal: {
						fieldset: 'flex-row',
					},
					vertical: {
						fieldset: 'flex-col',
					},
				},
				color: {
					primary: {},
					secondary: {},
					success: {},
					info: {},
					warning: {},
					error: {},
					neutral: {},
				},
				variant: {
					list: {},
					card: {},
					table: {
						item: [
							'border border-muted hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:bg-elevated/50',
							'transition-colors',
						],
					},
				},
				size: {
					xs: {
						fieldset: 'gap-y-0.5',
						legend: 'text-xs',
					},
					sm: {
						fieldset: 'gap-y-0.5',
						legend: 'text-xs',
					},
					md: {
						fieldset: 'gap-y-1',
						legend: 'text-sm',
					},
					lg: {
						fieldset: 'gap-y-1',
						legend: 'text-sm',
					},
					xl: {
						fieldset: 'gap-y-1.5',
						legend: 'text-base',
					},
				},
				required: {
					true: {
						legend: "after:content-['*'] after:ms-0.5 after:text-error",
					},
				},
				highlight: {
					true: {},
					false: {},
				},
				disabled: {
					true: {},
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: 'table',
					class: {
						item: 'outline-primary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-primary has-focus-visible:z-[1]',
					},
				},
				{
					color: 'secondary',
					variant: 'table',
					class: {
						item: 'outline-secondary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-secondary has-focus-visible:z-[1]',
					},
				},
				{
					color: 'success',
					variant: 'table',
					class: {
						item: 'outline-success/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-success has-focus-visible:z-[1]',
					},
				},
				{
					color: 'info',
					variant: 'table',
					class: {
						item: 'outline-info/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-info has-focus-visible:z-[1]',
					},
				},
				{
					color: 'warning',
					variant: 'table',
					class: {
						item: 'outline-warning/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-warning has-focus-visible:z-[1]',
					},
				},
				{
					color: 'error',
					variant: 'table',
					class: {
						item: 'outline-error/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-error has-focus-visible:z-[1]',
					},
				},
				{
					color: 'neutral',
					variant: 'table',
					class: {
						item: 'outline-inverted/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-inverted has-focus-visible:z-[1]',
					},
				},
				{
					variant: 'table',
					highlight: false,
					class: {
						item: 'hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:border-accented',
					},
				},
				{
					size: 'xs',
					variant: 'table',
					class: {
						item: 'p-2.5',
					},
				},
				{
					size: 'sm',
					variant: 'table',
					class: {
						item: 'p-3',
					},
				},
				{
					size: 'md',
					variant: 'table',
					class: {
						item: 'p-3.5',
					},
				},
				{
					size: 'lg',
					variant: 'table',
					class: {
						item: 'p-4',
					},
				},
				{
					size: 'xl',
					variant: 'table',
					class: {
						item: 'p-4.5',
					},
				},
				{
					orientation: 'horizontal',
					variant: 'table',
					class: {
						item: 'first-of-type:rounded-s-lg last-of-type:rounded-e-lg',
						fieldset: 'gap-0 -space-x-px',
					},
				},
				{
					orientation: 'vertical',
					variant: 'table',
					class: {
						item: 'first-of-type:rounded-t-lg last-of-type:rounded-b-lg',
						fieldset: 'gap-0 -space-y-px',
					},
				},
				{
					color: 'primary',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-primary/10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'secondary',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-secondary/10 has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'success',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-success/10 has-data-[state=checked]:border-success/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'info',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-info/10 has-data-[state=checked]:border-info/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'warning',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-warning/10 has-data-[state=checked]:border-warning/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'error',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-error/10 has-data-[state=checked]:border-error/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'neutral',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-elevated has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					variant: 'table',
					disabled: true,
					class: {
						item: 'cursor-not-allowed',
					},
				},
			],
			defaultVariants: {
				highlight: false,
				size: 'md',
				variant: 'list',
				color: 'primary',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/CheckboxGroup.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/checkbox-group.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ColorPicker"
description: "A component to select a color."
canonical_url: "https://ui.nuxt.com/docs/components/color-picker"

---

# ColorPicker

> A component to select a color.

## Usage

Use the `v-model` directive to control the value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('#00C16A');
</script>

<template>
	<UColorPicker v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
	<UColorPicker default-value="#00BCD4" />
</template>
```

### RGB Format

Use the `format` prop to set `rgb` value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('rgb(0, 193, 106)');
</script>

<template>
	<UColorPicker
		format="rgb"
		v-model="value"
	/>
</template>
```

### HSL Format

Use the `format` prop to set `hsl` value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('hsl(153, 100%, 37.8%)');
</script>

<template>
	<UColorPicker
		format="hsl"
		v-model="value"
	/>
</template>
```

### CMYK Format

Use the `format` prop to set `cmyk` value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('cmyk(100%, 0%, 45.08%, 24.31%)');
</script>

<template>
	<UColorPicker
		format="cmyk"
		v-model="value"
	/>
</template>
```

### CIELab Format

Use the `format` prop to set `lab` value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('lab(68.88% -60.41% 32.55%)');
</script>

<template>
	<UColorPicker
		format="lab"
		v-model="value"
	/>
</template>
```

### Throttle

Use the `throttle` prop to set the throttle value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('#00C16A');
</script>

<template>
	<UColorPicker
		:throttle="100"
		v-model="value"
	/>
</template>
```

### Size

Use the `size` prop to set the size of the ColorPicker.

```vue
<template>
	<UColorPicker size="xl" />
</template>
```

### Disabled

Use the `disabled` prop to disable the ColorPicker.

```vue
<template>
	<UColorPicker disabled />
</template>
```

## Examples

### As a color chooser

Use a [Button](/docs/components/button) and a [Popover](/docs/components/popover) component to create a color chooser.

```vue [ColorPickerChooserExample.vue]
<script setup lang="ts">
	const color = ref('#00C16A');

	const chip = computed(() => ({ backgroundColor: color.value }));
</script>

<template>
	<UPopover>
		<UButton
			label="Choose color"
			color="neutral"
			variant="outline"
		>
			<template #leading>
				<span
					:style="chip"
					class="size-3 rounded-full"
				/>
			</template>
		</UButton>

		<template #content>
			<UColorPicker
				v-model="color"
				class="p-2"
			/>
		</template>
	</UPopover>
</template>
```

## API

### Props

```ts
/**
 * Props for the ColorPicker component
 */
interface ColorPickerProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * Throttle time in ms for the color picker
	 * @default 50
	 */
	throttle?: number | undefined;
	/**
	 * Disable the color picker
	 */
	disabled?: boolean | undefined;
	/**
	 * The default value of the color picker
	 * @default '#FFFFFF'
	 */
	defaultValue?: string | undefined;
	/**
	 * Format of the color
	 * @default 'hex'
	 */
	format?: 'hex' | 'rgb' | 'hsl' | 'cmyk' | 'lab' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	ui?:
		| {
				root?: SlotClass;
				picker?: SlotClass;
				selector?: SlotClass;
				selectorBackground?: SlotClass;
				selectorThumb?: SlotClass;
				track?: SlotClass;
				trackThumb?: SlotClass;
		  }
		| undefined;
	modelValue?: string | undefined;
}
```

### Emits

```ts
/**
 * Emitted events for the ColorPicker component
 */
interface ColorPickerEmits {
  update:modelValue: (payload: [value: string | undefined]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		colorPicker: {
			slots: {
				root: 'data-[disabled]:opacity-75',
				picker: 'flex gap-4',
				selector: 'rounded-md touch-none',
				selectorBackground: 'w-full h-full relative rounded-md',
				selectorThumb:
					'-translate-y-1/2 -translate-x-1/2 absolute size-4 ring-2 ring-white rounded-full cursor-pointer data-[disabled]:cursor-not-allowed',
				track: 'w-[8px] relative rounded-md touch-none',
				trackThumb:
					'absolute transform -translate-y-1/2 -translate-x-[4px] rtl:translate-x-[4px] size-4 rounded-full ring-2 ring-white cursor-pointer data-[disabled]:cursor-not-allowed',
			},
			variants: {
				size: {
					xs: {
						selector: 'w-38 h-38',
						track: 'h-38',
					},
					sm: {
						selector: 'w-40 h-40',
						track: 'h-40',
					},
					md: {
						selector: 'w-42 h-42',
						track: 'h-42',
					},
					lg: {
						selector: 'w-44 h-44',
						track: 'h-44',
					},
					xl: {
						selector: 'w-46 h-46',
						track: 'h-46',
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

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/ColorPicker.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/color-picker.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ColorPicker"
description: "A component to select a color."
canonical_url: "https://ui.nuxt.com/docs/components/color-picker"

---

# ColorPicker

> A component to select a color.

## Usage

Use the `v-model` directive to control the value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('#00C16A');
</script>

<template>
	<UColorPicker v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
	<UColorPicker default-value="#00BCD4" />
</template>
```

### RGB Format

Use the `format` prop to set `rgb` value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('rgb(0, 193, 106)');
</script>

<template>
	<UColorPicker
		format="rgb"
		v-model="value"
	/>
</template>
```

### HSL Format

Use the `format` prop to set `hsl` value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('hsl(153, 100%, 37.8%)');
</script>

<template>
	<UColorPicker
		format="hsl"
		v-model="value"
	/>
</template>
```

### CMYK Format

Use the `format` prop to set `cmyk` value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('cmyk(100%, 0%, 45.08%, 24.31%)');
</script>

<template>
	<UColorPicker
		format="cmyk"
		v-model="value"
	/>
</template>
```

### CIELab Format

Use the `format` prop to set `lab` value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('lab(68.88% -60.41% 32.55%)');
</script>

<template>
	<UColorPicker
		format="lab"
		v-model="value"
	/>
</template>
```

### Throttle

Use the `throttle` prop to set the throttle value of the ColorPicker.

```vue
<script setup lang="ts">
	const value = ref('#00C16A');
</script>

<template>
	<UColorPicker
		:throttle="100"
		v-model="value"
	/>
</template>
```

### Size

Use the `size` prop to set the size of the ColorPicker.

```vue
<template>
	<UColorPicker size="xl" />
</template>
```

### Disabled

Use the `disabled` prop to disable the ColorPicker.

```vue
<template>
	<UColorPicker disabled />
</template>
```

## Examples

### As a color chooser

Use a [Button](/docs/components/button) and a [Popover](/docs/components/popover) component to create a color chooser.

```vue [ColorPickerChooserExample.vue]
<script setup lang="ts">
	const color = ref('#00C16A');

	const chip = computed(() => ({ backgroundColor: color.value }));
</script>

<template>
	<UPopover>
		<UButton
			label="Choose color"
			color="neutral"
			variant="outline"
		>
			<template #leading>
				<span
					:style="chip"
					class="size-3 rounded-full"
				/>
			</template>
		</UButton>

		<template #content>
			<UColorPicker
				v-model="color"
				class="p-2"
			/>
		</template>
	</UPopover>
</template>
```

## API

### Props

```ts
/**
 * Props for the ColorPicker component
 */
interface ColorPickerProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * Throttle time in ms for the color picker
	 * @default 50
	 */
	throttle?: number | undefined;
	/**
	 * Disable the color picker
	 */
	disabled?: boolean | undefined;
	/**
	 * The default value of the color picker
	 * @default '#FFFFFF'
	 */
	defaultValue?: string | undefined;
	/**
	 * Format of the color
	 * @default 'hex'
	 */
	format?: 'hex' | 'rgb' | 'hsl' | 'cmyk' | 'lab' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	ui?:
		| {
				root?: SlotClass;
				picker?: SlotClass;
				selector?: SlotClass;
				selectorBackground?: SlotClass;
				selectorThumb?: SlotClass;
				track?: SlotClass;
				trackThumb?: SlotClass;
		  }
		| undefined;
	modelValue?: string | undefined;
}
```

### Emits

```ts
/**
 * Emitted events for the ColorPicker component
 */
interface ColorPickerEmits {
  update:modelValue: (payload: [value: string | undefined]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		colorPicker: {
			slots: {
				root: 'data-[disabled]:opacity-75',
				picker: 'flex gap-4',
				selector: 'rounded-md touch-none',
				selectorBackground: 'w-full h-full relative rounded-md',
				selectorThumb:
					'-translate-y-1/2 -translate-x-1/2 absolute size-4 ring-2 ring-white rounded-full cursor-pointer data-[disabled]:cursor-not-allowed',
				track: 'w-[8px] relative rounded-md touch-none',
				trackThumb:
					'absolute transform -translate-y-1/2 -translate-x-[4px] rtl:translate-x-[4px] size-4 rounded-full ring-2 ring-white cursor-pointer data-[disabled]:cursor-not-allowed',
			},
			variants: {
				size: {
					xs: {
						selector: 'w-38 h-38',
						track: 'h-38',
					},
					sm: {
						selector: 'w-40 h-40',
						track: 'h-40',
					},
					md: {
						selector: 'w-42 h-42',
						track: 'h-42',
					},
					lg: {
						selector: 'w-44 h-44',
						track: 'h-44',
					},
					xl: {
						selector: 'w-46 h-46',
						track: 'h-46',
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

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/ColorPicker.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/color-picker.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Form"
description: "A form component with built-in validation and submission handling."
canonical_url: "https://ui.nuxt.com/docs/components/form"

---

# Form

> A form component with built-in validation and submission handling.

## Usage

Use the Form component to validate form data using any validation library supporting [Standard Schema](https://github.com/standard-schema/standard-schema) such as [Valibot](https://github.com/fabian-hiller/valibot), [Zod](https://github.com/colinhacks/zod), [Regle](https://github.com/victorgarciaesgi/regle), [Yup](https://github.com/jquense/yup), [Joi](https://github.com/hapijs/joi) or [Superstruct](https://github.com/ianstormtaylor/superstruct) or your own validation logic.

It works with the [FormField](/docs/components/form-field) component to display error messages around form elements automatically.

### Schema validation

It requires two props:

- `state` - a reactive object holding the form's state.
- `schema` - any [Standard Schema](https://github.com/standard-schema/standard-schema) or [Superstruct](https://github.com/ianstormtaylor/superstruct).

> [!WARNING]
>
> **No validation library is included** by default, ensure you **install the one you need**.

```vue [FormExampleValibot.vue]
<script setup lang="ts">
	import * as v from 'valibot';
	import type { FormSubmitEvent } from '@nuxt/ui';

	const schema = v.object({
		email: v.pipe(v.string(), v.email('Invalid email')),
		password: v.pipe(
			v.string(),
			v.minLength(8, 'Must be at least 8 characters'),
		),
	});

	type Schema = v.InferOutput<typeof schema>;

	const state = reactive({
		email: '',
		password: '',
	});

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormField
			label="Email"
			name="email"
		>
			<UInput v-model="state.email" />
		</UFormField>

		<UFormField
			label="Password"
			name="password"
		>
			<UInput
				v-model="state.password"
				type="password"
			/>
		</UFormField>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
```

```vue [FormExampleZod.vue]
<script setup lang="ts">
	import * as z from 'zod';
	import type { FormSubmitEvent } from '@nuxt/ui';

	const schema = z.object({
		email: z.email('Invalid email'),
		password: z
			.string('Password is required')
			.min(8, 'Must be at least 8 characters'),
	});

	type Schema = z.output<typeof schema>;

	const state = reactive<Partial<Schema>>({
		email: undefined,
		password: undefined,
	});

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormField
			label="Email"
			name="email"
		>
			<UInput v-model="state.email" />
		</UFormField>

		<UFormField
			label="Password"
			name="password"
		>
			<UInput
				v-model="state.password"
				type="password"
			/>
		</UFormField>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
```

```vue [FormExampleRegle.vue]
<script setup lang="ts">
	import { useRegle, type InferInput } from '@regle/core';
	import { required, email, minLength, withMessage } from '@regle/rules';
	import type { FormSubmitEvent } from '@nuxt/ui';

	const { r$ } = useRegle(
		{ email: '', password: '' },
		{
			email: { required, email: withMessage(email, 'Invalid email') },
			password: {
				required,
				minLength: withMessage(minLength(8), 'Must be at least 8 characters'),
			},
		},
	);

	type Schema = InferInput<typeof r$>;

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<UForm
		:schema="r$"
		:state="r$.$value"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormField
			label="Email"
			name="email"
		>
			<UInput v-model="r$.$value.email" />
		</UFormField>

		<UFormField
			label="Password"
			name="password"
		>
			<UInput
				v-model="r$.$value.password"
				type="password"
			/>
		</UFormField>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
```

```vue [FormExampleYup.vue]
<script setup lang="ts">
	import { object, string } from 'yup';
	import type { InferType } from 'yup';
	import type { FormSubmitEvent } from '@nuxt/ui';

	const schema = object({
		email: string().email('Invalid email').required('Required'),
		password: string()
			.min(8, 'Must be at least 8 characters')
			.required('Required'),
	});

	type Schema = InferType<typeof schema>;

	const state = reactive({
		email: undefined,
		password: undefined,
	});

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormField
			label="Email"
			name="email"
		>
			<UInput v-model="state.email" />
		</UFormField>

		<UFormField
			label="Password"
			name="password"
		>
			<UInput
				v-model="state.password"
				type="password"
			/>
		</UFormField>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
```

```vue [FormExampleJoi.vue]
<script setup lang="ts">
	import Joi from 'joi';
	import type { FormSubmitEvent } from '@nuxt/ui';

	const schema = Joi.object({
		email: Joi.string().required(),
		password: Joi.string().min(8).required(),
	});

	const state = reactive({
		email: undefined,
		password: undefined,
	});

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<typeof state>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormField
			label="Email"
			name="email"
		>
			<UInput v-model="state.email" />
		</UFormField>

		<UFormField
			label="Password"
			name="password"
		>
			<UInput
				v-model="state.password"
				type="password"
			/>
		</UFormField>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
```

```vue [FormExampleSuperstruct.vue]
<script setup lang="ts">
	import { object, string, nonempty, refine } from 'superstruct';
	import type { Infer } from 'superstruct';
	import type { FormSubmitEvent } from '@nuxt/ui';

	const schema = object({
		email: nonempty(string()),
		password: refine(string(), 'Password', (value) => {
			if (value.length >= 8) return true;
			return 'Must be at least 8 characters';
		}),
	});

	const state = reactive({
		email: '',
		password: '',
	});

	type Schema = Infer<typeof schema>;

	async function onSubmit(event: FormSubmitEvent<Schema>) {
		console.log(event.data);
	}
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormField
			label="Email"
			name="email"
		>
			<UInput v-model="state.email" />
		</UFormField>

		<UFormField
			label="Password"
			name="password"
		>
			<UInput
				v-model="state.password"
				type="password"
			/>
		</UFormField>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
```

### Custom validation

Use the `validate` prop to apply your own validation logic.

The validation function must return a list of errors with the following attributes:

- `message` - the error message to display.
- `name` - the `name` of the `FormField` to send the error to.

> [!TIP]
>
> It can be used alongside the `schema` prop to handle complex use cases.

```vue [FormExampleBasic.vue]
<script setup lang="ts">
	import type { FormError, FormSubmitEvent } from '@nuxt/ui';

	const state = reactive({
		email: undefined,
		password: undefined,
	});

	type Schema = typeof state;

	function validate(state: Partial<Schema>): FormError[] {
		const errors = [];
		if (!state.email) errors.push({ name: 'email', message: 'Required' });
		if (!state.password) errors.push({ name: 'password', message: 'Required' });
		return errors;
	}

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<UForm
		:validate="validate"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormField
			label="Email"
			name="email"
		>
			<UInput v-model="state.email" />
		</UFormField>

		<UFormField
			label="Password"
			name="password"
		>
			<UInput
				v-model="state.password"
				type="password"
			/>
		</UFormField>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
```

### Error reporting

Errors are matched to the corresponding [FormField](/docs/components/form-field) using its `name` prop. An error on the `email` field is shown by `<FormField name="email">`.

Nested fields are matched using dot notation. A schema like `{ user: z.object({ email: z.string() }) }` will be applied to `<FormField name="user.email">`.

> [!WARNING]
>
> Errors on array items include the index in their name (e.g. `tags.0`, `tags.1`) and won't match `<FormField name="tags">` by `name` alone. Use the `error-pattern` prop with a regular expression like `/^tags\..+/` to capture them. This is especially useful for components like [InputTags](/docs/components/input-tags).

```vue [FormExampleErrorPattern.vue]
<script setup lang="ts">
	import * as z from 'zod';
	import type { FormSubmitEvent } from '@nuxt/ui';

	const schema = z.object({
		email: z.email('Invalid email'),
		tags: z
			.array(z.string().regex(/^[a-z-]+$/, 'Lowercase letters and dashes only'))
			.min(1, 'Please add at least one tag'),
	});

	type Schema = z.output<typeof schema>;

	const state = reactive<Partial<Schema>>({
		email: undefined,
		tags: [],
	});

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormField
			label="Email"
			name="email"
		>
			<UInput v-model="state.email" />
		</UFormField>

		<UFormField
			label="Tags"
			name="tags"
			:error-pattern="/^tags\..+/"
		>
			<UInputTags v-model="state.tags" />
		</UFormField>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
```

### Input events

The Form component automatically triggers validation when an input emits an `input`, `change`, or `blur` event.

- Validation on `input` occurs **as you type**.
- Validation on `change` occurs when you **commit to a value**.
- Validation on `blur` happens when an input **loses focus**.

You can control when validation happens this using the `validate-on` prop.

> [!TIP]
>
> The form always validates on submit.

```vue [FormExampleElements.vue]
<script setup lang="ts">
	import * as z from 'zod';
	import type { FormSubmitEvent } from '@nuxt/ui';

	const schema = z.object({
		input: z
			.string({ message: 'Please enter your email' })
			.min(10, 'Must be at least 10 characters'),
		inputNumber: z
			.number({ message: 'Please enter a number' })
			.min(10, 'Must be at least 10'),
		inputMenu: z.any().refine((option) => option?.value === 'option-2', {
			message: 'Please select Option 2',
		}),
		inputMenuMultiple: z
			.any()
			.refine(
				(values) =>
					!!values?.find((option: any) => option.value === 'option-2'),
				{
					message: 'Option 2 must be included',
				},
			),
		textarea: z
			.string({ message: 'Please enter a message' })
			.min(10, 'Must be at least 10 characters'),
		select: z
			.string({ message: 'Please select an option' })
			.refine((value) => value === 'option-2', {
				message: 'Please select Option 2',
			}),
		selectMultiple: z
			.array(z.string(), { message: 'Please select at least one option' })
			.refine((values) => values.includes('option-2'), {
				message: 'Option 2 must be included',
			}),
		selectMenu: z.any().refine((option) => option?.value === 'option-2', {
			message: 'Please select Option 2',
		}),
		selectMenuMultiple: z
			.any()
			.refine(
				(values) =>
					!!values?.find((option: any) => option.value === 'option-2'),
				{
					message: 'Option 2 must be included',
				},
			),
		switch: z.boolean().refine((value) => value === true, {
			message: 'Must be enabled',
		}),
		checkbox: z.boolean().refine((value) => value === true, {
			message: 'Must be checked',
		}),
		radioGroup: z
			.string({ message: 'Please select an option' })
			.refine((value) => value === 'option-2', {
				message: 'Please select Option 2',
			}),
		checkboxGroup: z
			.any()
			.refine(
				(values) => !!values?.find((option: any) => option === 'option-2'),
				{
					message: 'Option 2 must be included',
				},
			),
		listbox: z.any().refine((option) => option?.value === 'option-2', {
			message: 'Please select Option 2',
		}),
		listboxMultiple: z
			.any()
			.refine(
				(values) =>
					!!values?.find((option: any) => option.value === 'option-2'),
				{
					message: 'Option 2 must be included',
				},
			),
		inputTags: z
			.array(z.string(), { message: 'Please add at least one tag' })
			.min(1, 'Please add at least one tag'),
		inputDate: z.any().refine((value) => !!value, {
			message: 'Please select a date',
		}),
		inputTime: z.any().refine((value) => !!value, {
			message: 'Please select a time',
		}),
		slider: z
			.number()
			.min(1, 'Must be greater than 0')
			.max(20, 'Must be less than 20'),
		rating: z.number().min(1, 'Please select a rating'),
		pin: z
			.string()
			.regex(/^\d$/, 'Must be a digit')
			.array()
			.length(5, 'All 5 digits are required'),
		file: z
			.file({ message: 'Please upload a file' })
			.min(1, 'File is required')
			.max(1024 * 1024, 'File must be less than 1MB')
			.mime('image/png', 'Only PNG images are allowed'),
	});

	type Schema = z.input<typeof schema>;

	const state = reactive<Partial<Schema>>({
		switch: false,
		checkbox: false,
		slider: 0,
		rating: 0,
		pin: [],
	});

	const form = useTemplateRef('form');

	const items = [
		{ label: 'Option 1', value: 'option-1' },
		{ label: 'Option 2', value: 'option-2' },
		{ label: 'Option 3', value: 'option-3' },
	];

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<UForm
		ref="form"
		:state="state"
		:schema="schema"
		class="w-full"
		@submit="onSubmit"
	>
		<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
			<UFormField
				label="Input"
				name="input"
			>
				<UInput
					v-model="state.input"
					placeholder="you@example.com"
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="inputNumber"
				label="InputNumber"
			>
				<UInputNumber
					v-model="state.inputNumber"
					placeholder="Enter a number"
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="pin"
				label="PinInput"
				:error-pattern="/(pin)\..*/"
			>
				<UPinInput
					v-model="state.pin"
					placeholder="○"
				/>
			</UFormField>

			<UFormField
				name="inputDate"
				label="InputDate"
			>
				<UInputDate
					v-model="state.inputDate"
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="inputTime"
				label="InputTime"
			>
				<UInputTime
					v-model="state.inputTime"
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="inputTags"
				label="InputTags"
			>
				<UInputTags
					v-model="state.inputTags"
					placeholder="Add a tag..."
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="inputMenu"
				label="InputMenu"
			>
				<UInputMenu
					v-model="state.inputMenu"
					:items="items"
					placeholder="Search an option..."
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="inputMenuMultiple"
				label="InputMenu (Multiple)"
			>
				<UInputMenu
					v-model="state.inputMenuMultiple"
					multiple
					:items="items"
					placeholder="Search options..."
					class="w-full"
				/>
			</UFormField>

			<UFormField
				label="Textarea"
				name="textarea"
			>
				<UTextarea
					v-model="state.textarea"
					placeholder="Write your message..."
					class="w-full"
					:rows="1"
				/>
			</UFormField>

			<UFormField
				name="select"
				label="Select"
			>
				<USelect
					v-model="state.select"
					:items="items"
					placeholder="Choose an option"
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="selectMultiple"
				label="Select (Multiple)"
			>
				<USelect
					v-model="state.selectMultiple"
					multiple
					:items="items"
					placeholder="Choose options"
					class="w-full"
				/>
			</UFormField>

			<div class="hidden md:block" />

			<UFormField
				name="selectMenu"
				label="SelectMenu"
			>
				<USelectMenu
					v-model="state.selectMenu"
					:items="items"
					placeholder="Search an option..."
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="selectMenuMultiple"
				label="SelectMenu (Multiple)"
			>
				<USelectMenu
					v-model="state.selectMenuMultiple"
					multiple
					:items="items"
					placeholder="Search options..."
					class="w-full"
				/>
			</UFormField>

			<div class="hidden md:block" />

			<UFormField
				name="listbox"
				label="Listbox"
			>
				<UListbox
					v-model="state.listbox"
					:items="items"
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="listboxMultiple"
				label="Listbox (Multiple)"
			>
				<UListbox
					v-model="state.listboxMultiple"
					:items="items"
					multiple
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="file"
				label="FileUpload"
			>
				<UFileUpload
					v-model="state.file"
					label="Drop your image here"
					description="PNG (max. 1MB)"
					class="w-full"
				/>
			</UFormField>

			<UFormField
				name="checkbox"
				label="Checkbox"
			>
				<UCheckbox
					v-model="state.checkbox"
					label="Check me"
				/>
			</UFormField>

			<UFormField
				name="switch"
				label="Switch"
			>
				<USwitch
					v-model="state.switch"
					label="Switch me"
				/>
			</UFormField>

			<UFormField
				name="slider"
				label="Slider"
			>
				<USlider
					v-model="state.slider"
					class="mt-2.5"
				/>
			</UFormField>

			<UFormField
				name="rating"
				label="InputRating"
			>
				<UInputRating v-model="state.rating" />
			</UFormField>

			<UFormField name="checkboxGroup">
				<UCheckboxGroup
					v-model="state.checkboxGroup"
					legend="CheckboxGroup"
					:items="items"
				/>
			</UFormField>

			<UFormField name="radioGroup">
				<URadioGroup
					v-model="state.radioGroup"
					legend="RadioGroup"
					:items="items"
				/>
			</UFormField>
		</div>

		<div class="flex gap-2 mt-8">
			<UButton type="submit"> Submit </UButton>

			<UButton
				variant="outline"
				@click="form?.clear()"
			>
				Clear
			</UButton>
		</div>
	</UForm>
</template>
```

> [!TIP]
>
> You can use the `useFormField` composable to implement this inside your own components.

### Error event

You can listen to the `@error` event to handle errors. This event is triggered when the form is submitted and contains an array of `FormError` objects with the following fields:

- `id` - the input's `id`.
- `name` - the `name` of the `FormField`
- `message` - the error message to display.

Here's an example that focuses the first input element with an error after the form is submitted:

```vue [FormExampleOnError.vue]
<script setup lang="ts">
	import type { FormError, FormErrorEvent, FormSubmitEvent } from '@nuxt/ui';

	const state = reactive({
		email: undefined,
		password: undefined,
	});

	type Schema = typeof state;

	function validate(state: Partial<Schema>): FormError[] {
		const errors = [];
		if (!state.email) errors.push({ name: 'email', message: 'Required' });
		if (!state.password) errors.push({ name: 'password', message: 'Required' });
		return errors;
	}

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}

	async function onError(event: FormErrorEvent) {
		if (event?.errors?.[0]?.id) {
			const element = document.getElementById(event.errors[0].id);
			element?.focus();
			element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}
</script>

<template>
	<UForm
		:validate="validate"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
		@error="onError"
	>
		<UFormField
			label="Email"
			name="email"
		>
			<UInput v-model="state.email" />
		</UFormField>

		<UFormField
			label="Password"
			name="password"
		>
			<UInput
				v-model="state.password"
				type="password"
			/>
		</UFormField>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
```

### HTML5 validation `4.5+`

When calling `form.submit()` programmatically, the Form component automatically triggers native HTML5 validation before submission.

> [!NOTE]
>
> This is particularly useful when the submit button is outside the form element, such as in a modal footer.

```vue [FormExampleHtml5Validation.vue]
<script setup lang="ts">
	import type { FormSubmitEvent } from '@nuxt/ui';

	const state = reactive({
		email: undefined,
		age: undefined,
	});

	type Schema = typeof state;

	const form = useTemplateRef('form');

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<div class="space-y-4">
		<UForm
			ref="form"
			:state="state"
			class="space-y-4"
			@submit="onSubmit"
		>
			<UFormField
				label="Email"
				name="email"
			>
				<UInput
					v-model="state.email"
					type="email"
					required
				/>
			</UFormField>

			<UFormField
				label="Age"
				name="age"
			>
				<UInput
					v-model="state.age"
					type="number"
					min="18"
					max="100"
					required
				/>
			</UFormField>
		</UForm>

		<UButton @click="form?.submit()"> Submit </UButton>
	</div>
</template>
```

### Nesting forms

Use the `nested` prop to nest multiple Form components and link their validation functions. In this case, validating the parent form will automatically validate all the other forms inside it.

Nested forms directly inherit their parent's state, so you don't need to define a separate state for them. You can use the `name` prop to target a nested attribute within the parent's state.

It can be used to dynamically add fields based on user's input:

```vue [FormExampleNested.vue]
<script setup lang="ts">
	import * as z from 'zod';
	import type { FormSubmitEvent } from '@nuxt/ui';

	const schema = z.object({
		name: z.string().min(2),
		news: z.boolean().default(false),
	});

	type Schema = z.output<typeof schema>;

	const nestedSchema = z.object({
		email: z.email(),
	});

	type NestedSchema = z.output<typeof nestedSchema>;

	const state = reactive<Partial<Schema & NestedSchema>>({});

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<UForm
		ref="form"
		:state="state"
		:schema="schema"
		class="gap-4 flex flex-col w-60"
		@submit="onSubmit"
	>
		<UFormField
			label="Name"
			name="name"
		>
			<UInput
				v-model="state.name"
				placeholder="John Lennon"
			/>
		</UFormField>

		<div>
			<UCheckbox
				v-model="state.news"
				name="news"
				label="Register to our newsletter"
				@update:model-value="state.email = undefined"
			/>
		</div>

		<UForm
			v-if="state.news"
			:schema="nestedSchema"
			nested
		>
			<UFormField
				label="Email"
				name="email"
			>
				<UInput
					v-model="state.email"
					placeholder="john@lennon.com"
				/>
			</UFormField>
		</UForm>

		<div>
			<UButton type="submit"> Submit </UButton>
		</div>
	</UForm>
</template>
```

Or to validate list inputs:

```vue [FormExampleNestedList.vue]
<script setup lang="ts">
	import * as z from 'zod';
	import type { FormSubmitEvent } from '@nuxt/ui';

	const schema = z.object({
		customer: z.string().min(2),
	});

	type Schema = z.output<typeof schema>;

	const itemSchema = z.object({
		description: z.string().min(1),
		price: z.number().min(0),
	});

	type ItemSchema = z.output<typeof itemSchema>;

	const state = reactive<Partial<Schema & { items: Partial<ItemSchema>[] }>>(
		{},
	);

	function addItem() {
		if (!state.items) {
			state.items = [];
		}
		state.items.push({});
	}

	function removeItem() {
		if (state.items) {
			state.items.pop();
		}
	}

	const toast = useToast();

	async function onSubmit(event: FormSubmitEvent<Schema>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		console.log(event.data);
	}
</script>

<template>
	<UForm
		:state="state"
		:schema="schema"
		class="gap-4 flex flex-col w-60"
		@submit="onSubmit"
	>
		<UFormField
			label="Customer"
			name="customer"
		>
			<UInput
				v-model="state.customer"
				placeholder="Wonka Industries"
			/>
		</UFormField>

		<UForm
			v-for="(item, count) in state.items"
			:key="count"
			:name="`items.${count}`"
			:schema="itemSchema"
			class="flex gap-2"
			nested
		>
			<UFormField
				:label="!count ? 'Description' : undefined"
				name="description"
			>
				<UInput v-model="item.description" />
			</UFormField>
			<UFormField
				:label="!count ? 'Price' : undefined"
				name="price"
				class="w-20"
			>
				<UInput
					v-model="item.price"
					type="number"
				/>
			</UFormField>
		</UForm>

		<div class="flex gap-2">
			<UButton
				color="neutral"
				variant="subtle"
				size="sm"
				@click="addItem()"
			>
				Add Item
			</UButton>

			<UButton
				color="neutral"
				variant="ghost"
				size="sm"
				@click="removeItem()"
			>
				Remove Item
			</UButton>
		</div>
		<div>
			<UButton type="submit"> Submit </UButton>
		</div>
	</UForm>
</template>
```

## API

### Props

```ts
/**
 * Props for the Form component
 */
interface FormProps {
  id?: string | number | undefined;
  /**
   * Schema to validate the form state. Supports Standard Schema objects, Yup, Joi, and Superstructs.
   */
  schema?: S | undefined;
  /**
   * An object representing the current state of the form.
   */
  state?: N extends false ? Partial<InferInput<S>> : never | undefined;
  /**
   * Custom validation function to validate the form state.
   */
  validate?: (state: Partial<InferInput<S>>): FormError<string>[] | Promise<FormError<string>[]> | undefined;
  /**
   * The list of input events that trigger the form validation.
   * @default `['blur', 'change', 'input']`
   */
  validateOn?: FormInputEvents[] | undefined;
  /**
   * Disable all inputs inside the form.
   */
  disabled?: boolean | undefined;
  /**
   * The `name` attribute of the form element.
   * For nested forms (`nested` is true), this is also used as the path of the form's state within its parent form.
   */
  name?: string | undefined;
  /**
   * Delay in milliseconds before validating the form on input events.
   * @default 300
   */
  validateOnInputDelay?: number | undefined;
  /**
   * If true, applies schema transformations on submit.
   * @default true as T
   */
  transform?: T | undefined;
  /**
   * If true, this form will attach to its parent Form and validate at the same time.
   * @default `false`
   */
  nested?: N | undefined;
  /**
   * When `true`, all form elements will be disabled on `@submit` event.
   * This will cause any focused input elements to lose their focus state.
   * @default true
   */
  loadingAuto?: boolean | undefined;
  ui?: { base?: any; } | undefined;
  acceptcharset?: string | undefined;
  action?: string | undefined;
  autocomplete?: string | undefined;
  enctype?: string | undefined;
  method?: string | undefined;
  novalidate?: false | true | "true" | "false" | undefined;
  target?: string | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes
>
> This component also supports all native `<form>` HTML attributes.

### Slots

```ts
/**
 * Slots for the Form component
 */
interface FormSlots {
	default(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Form component
 */
interface FormEmits {
	submit: (payload: [event: FormSubmitEvent<FormData<S, T>>]) => void;
	error: (payload: [event: FormErrorEvent]) => void;
}
```

### Expose

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
	const form = useTemplateRef('form');
</script>

<template>
	<UForm ref="form" />
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
          submit
        </span>
        
        <span class="sMK4o">
          ()
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Promise
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          void
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
      
       <br />
      
       <p>
        Triggers form submission with HTML5 validation.
      </p>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          validate
        </span>
        
        <span class="sMK4o">
          (
        </span>
        
        <span class="sHdIc">
          opts
        </span>
        
        <span class="sMK4o">
          :
        </span>
        
        <span class="sMK4o">
          {
        </span>
        
        <span class="swJcz">
          name
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sMK4o">
          keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sTEyZ">
          (
        </span>
        
        <span class="sMK4o">
          keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sTEyZ">
          )[]
        </span>
        
        <span class="sMK4o">
          ,
        </span>
        
        <span class="swJcz">
          silent
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sBMFI">
          boolean
        </span>
        
        <span class="sMK4o">
          ,
        </span>
        
        <span class="swJcz">
          nested
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sBMFI">
          boolean
        </span>
        
        <span class="sMK4o">
          ,
        </span>
        
        <span class="swJcz">
          transform
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sBMFI">
          boolean
        </span>
        
        <span class="sMK4o">
          })
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Promise
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
      
       <br />
      
       <p>
        Triggers form validation. Will raise any errors unless <code>opts.silent</code> is set to true.
      </p>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          clear
        </span>
        
        <span class="sMK4o">
          (
        </span>
        
        <span class="sHdIc">
          path
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sMK4o">
          keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          RegExp
        </span>
        
        <span class="sMK4o">
          )
        </span>
      </code>
    </td>
    
    <td>
      <code>
        void
      </code>
      
       <br />
      
       <p>
        Clears form errors associated with a specific path. If no path is provided, clears all form errors.
      </p>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          getErrors
        </span>
        
        <span class="sMK4o">
          (
        </span>
        
        <span class="sHdIc">
          path
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sMK4o">
          keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          RegExp
        </span>
        
        <span class="sMK4o">
          )
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          FormErrorWithId
        </span>
        
        <span class="sTEyZ">
          []
        </span>
      </code>
      
       <br />
      
       <p>
        Retrieves form errors associated with a specific path. If no path is provided, returns all form errors.
      </p>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          setErrors
        </span>
        
        <span class="sMK4o">
          (
        </span>
        
        <span class="sHdIc">
          errors
        </span>
        
        <span class="sMK4o">
          :
        </span>
        
        <span class="sBMFI">
          FormError
        </span>
        
        <span class="sTEyZ">
          []
        </span>
        
        <span class="sMK4o">
          ,
        </span>
        
        <span class="sHdIc">
          name
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sMK4o">
          keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          RegExp
        </span>
        
        <span class="sMK4o">
          )
        </span>
      </code>
    </td>
    
    <td>
      <code>
        void
      </code>
      
       <br />
      
       <p>
        Sets form errors for a given path. If no path is provided, overrides all errors.
      </p>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          errors
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
          FormErrorWithId
        </span>
        
        <span class="sTEyZ">
          []
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
      
       <br />
      
       <p>
        A reference to the array containing validation errors. Use this to access or manipulate the error information.
      </p>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          disabled
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
          dirty
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
      
       <code>
        true
      </code>
      
       if at least one form field has been updated by the user.
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          dirtyFields
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          ReadonlySet
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          DeepReadonly
        </span>
        
        <span class="sMK4o">
          <keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          >>
        </span>
      </code>
      
       Tracks fields that have been modified by the user.
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          touchedFields
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          ReadonlySet
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          DeepReadonly
        </span>
        
        <span class="sMK4o">
          <keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          >>
        </span>
      </code>
      
       Tracks fields that the user interacted with.
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          blurredFields
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          ReadonlySet
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          DeepReadonly
        </span>
        
        <span class="sMK4o">
          <keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          >>
        </span>
      </code>
      
       Tracks fields blurred by the user.
    </td>
  </tr>
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		form: {
			base: '',
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Form.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/form.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "FormField"
description: "A wrapper for form elements that provides validation and error handling."
canonical_url: "https://ui.nuxt.com/docs/components/form-field"

---

# FormField

> A wrapper for form elements that provides validation and error handling.

## Usage

Wrap any form component with a FormField. Used in a [Form](/docs/components/form), it provides validation and error handling.

### Label

Use the `label` prop to set the label for the form control.

```vue
<template>
	<UFormField label="Email">
		<UInput placeholder="Enter your email" />
	</UFormField>
</template>
```

> [!NOTE]
>
> The label `for` attribute and the form control are associated with a unique `id` if not provided.

When using the `required` prop, an asterisk is added next to the label.

```vue
<template>
	<UFormField
		label="Email"
		required
	>
		<UInput placeholder="Enter your email" />
	</UFormField>
</template>
```

### Description

Use the `description` prop to provide additional information below the label.

```vue
<template>
	<UFormField
		label="Email"
		description="We'll never share your email with anyone else."
	>
		<UInput
			placeholder="Enter your email"
			class="w-full"
		/>
	</UFormField>
</template>
```

### Hint

Use the `hint` prop to display a hint message next to the label.

```vue
<template>
	<UFormField
		label="Email"
		hint="Optional"
	>
		<UInput placeholder="Enter your email" />
	</UFormField>
</template>
```

### Help

Use the `help` prop to display a help message below the form control. When used together with the `error` prop, the `error` prop takes precedence.

```vue
<template>
	<UFormField
		label="Email"
		help="Please enter a valid email address."
	>
		<UInput
			placeholder="Enter your email"
			class="w-full"
		/>
	</UFormField>
</template>
```

### Error

Use the `error` prop to display an error message below the form control. When used together with the `help` prop, the `error` prop takes precedence.

When used inside a [Form](/docs/components/form), this is automatically set when a validation error occurs.

```vue
<template>
	<UFormField
		label="Email"
		error="Please enter a valid email address."
	>
		<UInput
			placeholder="Enter your email"
			class="w-full"
		/>
	</UFormField>
</template>
```

> [!TIP]
> See: /docs/getting-started/theme/design-system#color-system
>
> This sets the `color` to `error` on the form control. You can change it globally in your `app.config.ts`.

### Error Pattern

Use the `error-pattern` prop to match form errors with a regular expression. This is especially relevant for components with array values such as [InputTags](/docs/components/input-tags), where errors include array indices in their name (e.g. `tags.0`).

> [!TIP]
> See: /docs/components/form#error-reporting
>
> See an example of using `error-pattern` within a Form.

### Size

Use the `size` prop to change the size of the FormField, the `size` is proxied to the form control.

```vue
<template>
	<UFormField
		label="Email"
		description="We'll never share your email with anyone else."
		hint="Optional"
		help="Please enter a valid email address."
		size="xl"
	>
		<UInput
			placeholder="Enter your email"
			class="w-full"
		/>
	</UFormField>
</template>
```

### Orientation `4.3+`

Use the `orientation` prop to change the layout of the FormField. Defaults to `vertical`.

```vue
<template>
	<UFormField
		orientation="horizontal"
		label="Email"
		help="Please enter a valid email address."
		class="w-72"
	>
		<UInput
			placeholder="Enter your email"
			class="w-full"
		/>
	</UFormField>
</template>
```

## API

### Props

```ts
/**
 * Props for the FormField component
 */
interface FormFieldProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * The name of the FormField. Also used to match form errors.
	 */
	name?: string | undefined;
	/**
	 * A regular expression to match form error names. Useful for components with array values such as InputTags, where errors include array indices in their name (e.g. `tags.0`).
	 */
	errorPattern?: RegExp | undefined;
	label?: string | undefined;
	description?: string | undefined;
	help?: string | undefined;
	/**
	 * @default undefined
	 */
	error?: string | false | true | undefined;
	hint?: string | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
	required?: boolean | undefined;
	/**
	 * If true, validation on input will be active immediately instead of waiting for a blur event.
	 */
	eagerValidation?: boolean | undefined;
	/**
	 * Delay in milliseconds before validating the form on input events.
	 * @default `300`
	 */
	validateOnInputDelay?: number | undefined;
	/**
	 * The orientation of the form field.
	 * @default 'vertical'
	 */
	orientation?: 'vertical' | 'horizontal' | undefined;
	ui?:
		| {
				root?: SlotClass;
				wrapper?: SlotClass;
				labelWrapper?: SlotClass;
				label?: SlotClass;
				container?: SlotClass;
				description?: SlotClass;
				error?: SlotClass;
				hint?: SlotClass;
				help?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the FormField component
 */
interface FormFieldSlots {
	label(): any;
	hint(): any;
	description(): any;
	help(): any;
	error(): any;
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		formField: {
			slots: {
				root: '',
				wrapper: '',
				labelWrapper: 'flex content-center items-center justify-between gap-1',
				label: 'block font-medium text-default',
				container: 'relative',
				description: 'text-muted',
				error: 'mt-2 text-error',
				hint: 'text-muted',
				help: 'mt-2 text-muted',
			},
			variants: {
				size: {
					xs: {
						root: 'text-xs',
					},
					sm: {
						root: 'text-xs',
					},
					md: {
						root: 'text-sm',
					},
					lg: {
						root: 'text-sm',
					},
					xl: {
						root: 'text-base',
					},
				},
				required: {
					true: {
						label: "after:content-['*'] after:ms-0.5 after:text-error",
					},
				},
				orientation: {
					vertical: {
						container: 'mt-1',
					},
					horizontal: {
						root: 'flex justify-between place-items-baseline gap-2',
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

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/FormField.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/form-field.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Input"
description: "An input element to enter text."
canonical_url: "https://ui.nuxt.com/docs/components/input"

---

# Input

> An input element to enter text.

## Usage

Use the `v-model` directive to control the value of the Input.

```vue
<script setup lang="ts">
	const value = ref('');
</script>

<template>
	<UInput />
</template>
```

### Type

Use the `type` prop to change the input type. Defaults to `text`.

Some types have been implemented in their own components such as [Checkbox](/docs/components/checkbox), [Radio](/docs/components/radio-group), [InputNumber](/docs/components/input-number) etc. and others have been styled like `file` for example.

```vue
<template>
	<UInput type="file" />
</template>
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
>
> You can check all the available types on the MDN Web Docs.

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<template>
	<UInput placeholder="Search..." />
</template>
```

### Color

Use the `color` prop to change the ring color when the Input is focused.

```vue
<template>
	<UInput
		color="neutral"
		highlight
		placeholder="Search..."
	/>
</template>
```

> [!NOTE]
>
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the Input.

```vue
<template>
	<UInput
		color="neutral"
		variant="subtle"
		:highlight="false"
		placeholder="Search..."
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Input.

```vue
<template>
	<UInput
		size="xl"
		placeholder="Search..."
	/>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the Input.

```vue
<template>
	<UInput
		icon="i-lucide-search"
		size="md"
		variant="outline"
		placeholder="Search..."
	/>
</template>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

```vue
<template>
	<UInput
		trailing-icon="i-lucide-at-sign"
		placeholder="Enter your email"
		size="md"
	/>
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the Input.

```vue
<template>
	<UInput
		:avatar="{
			src: 'https://github.com/nuxt.png',
			loading: 'lazy',
		}"
		size="md"
		variant="outline"
		placeholder="Search..."
	/>
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the Input.

```vue
<template>
	<UInput
		loading
		:trailing="false"
		placeholder="Search..."
	/>
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<template>
	<UInput
		loading
		loading-icon="i-lucide-loader"
		placeholder="Search..."
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

### Disabled

Use the `disabled` prop to disable the Input.

```vue
<template>
	<UInput
		disabled
		placeholder="Search..."
	/>
</template>
```

## Examples

### With clear button

You can put a [Button](/docs/components/button) inside the `#trailing` slot to clear the Input.

```vue [InputClearButtonExample.vue]
<script setup lang="ts">
	const value = ref('Click to clear');
</script>

<template>
	<UInput
		v-model="value"
		placeholder="Type something..."
		:ui="{ trailing: 'pe-1' }"
	>
		<template
			v-if="value?.length"
			#trailing
		>
			<UButton
				color="neutral"
				variant="link"
				size="sm"
				icon="i-lucide-circle-x"
				aria-label="Clear input"
				@click="value = ''"
			/>
		</template>
	</UInput>
</template>
```

### With copy button

You can put a [Button](/docs/components/button) inside the `#trailing` slot to copy the value to the clipboard.

```vue [InputCopyButtonExample.vue]
<script setup lang="ts">
	import { useClipboard } from '@vueuse/core';

	const value = ref('npx nuxt module add ui');

	const { copy, copied } = useClipboard();
</script>

<template>
	<UInput
		v-model="value"
		:ui="{ trailing: 'pr-0.5' }"
	>
		<template
			v-if="value?.length"
			#trailing
		>
			<UTooltip
				text="Copy to clipboard"
				:content="{ side: 'right' }"
			>
				<UButton
					:color="copied ? 'success' : 'neutral'"
					variant="link"
					size="sm"
					:icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
					aria-label="Copy to clipboard"
					@click="copy(value)"
				/>
			</UTooltip>
		</template>
	</UInput>
</template>
```

### With password toggle

You can put a [Button](/docs/components/button) inside the `#trailing` slot to toggle the password visibility.

```vue [InputPasswordToggleExample.vue]
<script setup lang="ts">
	const show = ref(false);
	const password = ref('');
</script>

<template>
	<UInput
		v-model="password"
		placeholder="Password"
		:type="show ? 'text' : 'password'"
		:ui="{ trailing: 'pe-1' }"
	>
		<template #trailing>
			<UButton
				color="neutral"
				variant="link"
				size="sm"
				:icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
				:aria-label="show ? 'Hide password' : 'Show password'"
				:aria-pressed="show"
				aria-controls="password"
				@click="show = !show"
			/>
		</template>
	</UInput>
</template>

<style>
	/* Hide the password reveal button in Edge */
	::-ms-reveal {
		display: none;
	}
</style>
```

### With password strength indicator

You can use the [Progress](/docs/components/progress) component to display the password strength indicator.

```vue [InputPasswordStrengthIndicatorExample.vue]
<script setup lang="ts">
	const show = ref(false);
	const password = ref('');

	function checkStrength(str: string) {
		const requirements = [
			{ regex: /.{8,}/, text: 'At least 8 characters' },
			{ regex: /\d/, text: 'At least 1 number' },
			{ regex: /[a-z]/, text: 'At least 1 lowercase letter' },
			{ regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
		];

		return requirements.map((req) => ({
			met: req.regex.test(str),
			text: req.text,
		}));
	}

	const strength = computed(() => checkStrength(password.value));
	const score = computed(() => strength.value.filter((req) => req.met).length);

	const color = computed(() => {
		if (score.value === 0) return 'neutral';
		if (score.value <= 1) return 'error';
		if (score.value <= 2) return 'warning';
		if (score.value === 3) return 'warning';
		return 'success';
	});

	const text = computed(() => {
		if (score.value === 0) return 'Enter a password';
		if (score.value <= 2) return 'Weak password';
		if (score.value === 3) return 'Medium password';
		return 'Strong password';
	});
</script>

<template>
	<div class="space-y-2">
		<UFormField label="Password">
			<UInput
				v-model="password"
				placeholder="Password"
				:color="color"
				:type="show ? 'text' : 'password'"
				:aria-invalid="score < 4"
				aria-describedby="password-strength"
				:ui="{ trailing: 'pe-1' }"
				class="w-full"
			>
				<template #trailing>
					<UButton
						color="neutral"
						variant="link"
						size="sm"
						:icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
						:aria-label="show ? 'Hide password' : 'Show password'"
						:aria-pressed="show"
						aria-controls="password"
						@click="show = !show"
					/>
				</template>
			</UInput>
		</UFormField>

		<UProgress
			:color="color"
			:indicator="text"
			:model-value="score"
			:max="4"
			size="sm"
		/>

		<p
			id="password-strength"
			class="text-sm font-medium"
		>
			{{ text }}. Must contain:
		</p>

		<ul
			class="space-y-1"
			aria-label="Password requirements"
		>
			<li
				v-for="(req, index) in strength"
				:key="index"
				class="flex items-center gap-0.5"
				:class="req.met ? 'text-success' : 'text-muted'"
			>
				<UIcon
					:name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'"
					class="size-4 shrink-0"
				/>

				<span class="text-xs font-light">
					{{ req.text }}
					<span class="sr-only">
						{{ req.met ? ' - Requirement met' : ' - Requirement not met' }}
					</span>
				</span>
			</li>
		</ul>
	</div>
</template>
```

### With character limit

You can use the `#trailing` slot to add a character limit to the Input.

```vue [InputCharacterLimitExample.vue]
<script setup lang="ts">
	const value = ref('');
	const maxLength = 15;
</script>

<template>
	<UInput
		v-model="value"
		:maxlength="maxLength"
		aria-describedby="character-count"
		:ui="{ trailing: 'pointer-events-none' }"
	>
		<template #trailing>
			<div
				id="character-count"
				class="text-xs text-muted tabular-nums"
				aria-live="polite"
				role="status"
			>
				{{ value?.length }}/{{ maxLength }}
			</div>
		</template>
	</UInput>
</template>
```

### With keyboard shortcut

You can use the [Kbd](/docs/components/kbd) component inside the `#trailing` slot to add a keyboard shortcut to the Input.

```vue [InputKbdExample.vue]
<script setup lang="ts">
	const input = useTemplateRef('input');

	defineShortcuts({
		'/': () => {
			input.value?.inputRef?.focus();
		},
	});
</script>

<template>
	<UInput
		ref="input"
		icon="i-lucide-search"
		placeholder="Search..."
	>
		<template #trailing>
			<UKbd value="/" />
		</template>
	</UInput>
</template>
```

> [!NOTE]
> See: /docs/composables/define-shortcuts
>
> This example uses the `defineShortcuts` composable to focus the Input when the <kbd value="/">
>
> </kbd>
>
> key is pressed.

### With mask

There's no built-in support for masks, but you can use libraries like [maska](https://github.com/beholdr/maska) to mask the Input.

```vue [InputMaskExample.vue]
<script setup lang="ts">
	import { vMaska } from 'maska/vue';
</script>

<template>
	<div class="flex flex-col gap-2">
		<UInput
			v-maska="'#### #### #### ####'"
			placeholder="4242 4242 4242 4242"
			icon="i-lucide-credit-card"
		/>

		<div class="flex items-center gap-2">
			<UInput
				v-maska="'##/##'"
				placeholder="MM/YY"
				icon="i-lucide-calendar"
			/>
			<UInput
				v-maska="'###'"
				placeholder="CVC"
			/>
		</div>
	</div>
</template>
```

### With floating label

You can use the `#default` slot to add a floating label to the Input.

```vue [InputFloatingLabelExample.vue]
<script setup lang="ts">
	const value = ref('');
</script>

<template>
	<UInput
		v-model="value"
		placeholder=""
		:ui="{ base: 'peer' }"
	>
		<label
			class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal"
		>
			<span class="inline-flex bg-default px-1">Email address</span>
		</label>
	</UInput>
</template>
```

### Within a FormField

You can use the Input within a [FormField](/docs/components/form-field) component to display a label, help text, required indicator, etc.

```vue [InputFormFieldExample.vue]
<script setup lang="ts">
	const email = ref('');
</script>

<template>
	<UFormField
		label="Email"
		help="We won't share your email."
		required
	>
		<UInput
			v-model="email"
			placeholder="Enter your email"
			icon="i-lucide-at-sign"
		/>
	</UFormField>
</template>
```

> [!TIP]
> See: /docs/components/form
>
> It also provides validation and error handling when used within a **Form** component.

### Within a FieldGroup

You can use the Input within a [FieldGroup](/docs/components/field-group) component to group multiple elements together.

```vue [InputFieldGroupExample.vue]
<script setup lang="ts">
	const value = ref('');
	const domains = ['.com', '.dev', '.org'];
	const domain = ref(domains[0]);
</script>

<template>
	<UFieldGroup>
		<UInput
			v-model="value"
			placeholder="nuxt"
			:ui="{
				base: 'pl-14.5',
				leading: 'pointer-events-none',
			}"
		>
			<template #leading>
				<p class="text-sm text-muted">https://</p>
			</template>
		</UInput>

		<USelectMenu
			v-model="domain"
			:items="domains"
		/>
	</UFieldGroup>
</template>
```

### As a phone number input

You can use the Input within a [FieldGroup](/docs/components/field-group) component alongside a [SelectMenu](/docs/components/select-menu) to create a phone number input with country code selection.

```vue [InputPhoneNumberExample.vue]
<script setup lang="ts">
	import { vMaska } from 'maska/vue';

	type PhoneCode = {
		name: string;
		code: string;
		emoji: string;
		dialCode: string;
		mask: string;
	};

	const phone = ref('');
	const countryCode = ref('US');

	const {
		data: phoneCodes,
		status,
		execute,
	} = await useLazyFetch<PhoneCode[]>('/api/phone-codes.json', {
		key: 'api-phone-codes',
		immediate: false,
	});

	const country = computed(() =>
		phoneCodes.value?.find((c) => c.code === countryCode.value),
	);
	const dialCode = computed(() => country.value?.dialCode || '+1');
	const mask = computed(() => country.value?.mask || '(###) ###-####');

	function onOpen() {
		if (!phoneCodes.value?.length) {
			execute();
		}
	}

	watch(countryCode, () => {
		phone.value = '';
	});
</script>

<template>
	<UFieldGroup>
		<USelectMenu
			v-model="countryCode"
			:items="phoneCodes"
			value-key="code"
			:search-input="{
				placeholder: 'Search country...',
				icon: 'i-lucide-search',
				loading: status === 'pending',
			}"
			:filter-fields="['name', 'code', 'dialCode']"
			:content="{ align: 'start' }"
			:ui="{
				base: 'pe-8',
				content: 'w-48',
				placeholder: 'hidden',
				trailingIcon: 'size-4',
			}"
			trailing-icon="i-lucide-chevrons-up-down"
			@update:open="onOpen"
		>
			<span class="size-5 flex items-center text-lg">
				{{ country?.emoji || '\u{1F1FA}\u{1F1F8}' }}
			</span>

			<template #item-leading="{ item }">
				<span class="size-5 flex items-center text-lg">
					{{ item.emoji }}
				</span>
			</template>

			<template #item-label="{ item }">
				{{ item.name }} ({{ item.dialCode }})
			</template>
		</USelectMenu>

		<UInput
			v-model="phone"
			v-maska="mask"
			:placeholder="mask.replaceAll('#', '_')"
			:style="{ '--dial-code-length': `${dialCode.length + 1.5}ch` }"
			:ui="{
				base: 'ps-(--dial-code-length)',
				leading: 'pointer-events-none text-base md:text-sm text-muted',
			}"
		>
			<template #leading>
				{{ dialCode }}
			</template>
		</UInput>
	</UFieldGroup>
</template>
```

## API

### Props

```ts
/**
 * Props for the Input component
 */
interface InputProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	id?: string | undefined;
	name?: string | undefined;
	/**
	 * @default 'text'
	 */
	type?:
		| 'number'
		| 'image'
		| 'text'
		| 'button'
		| 'search'
		| 'time'
		| 'color'
		| 'checkbox'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'month'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'submit'
		| 'tel'
		| 'url'
		| 'week'
		| (string & {})
		| undefined;
	/**
	 * The placeholder text when the input is empty.
	 */
	placeholder?: string | undefined;
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
	 * @default 'outline'
	 */
	variant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'none' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	required?: boolean | undefined;
	/**
	 * @default 'off'
	 */
	autocomplete?: (string & {}) | 'on' | 'off' | undefined;
	autofocus?: boolean | undefined;
	/**
	 * @default 0
	 */
	autofocusDelay?: number | undefined;
	disabled?: boolean | undefined;
	/**
	 * Highlight the ring color like a focus state.
	 */
	highlight?: boolean | undefined;
	/**
	 * Keep the mobile text size on all breakpoints.
	 */
	fixed?: boolean | undefined;
	modelValue?: _Number<_Optional<_Nullable<T, Mod>, Mod>, Mod> | undefined;
	defaultValue?: _Number<_Optional<_Nullable<T, Mod>, Mod>, Mod> | undefined;
	modelModifiers?: Mod | undefined;
	ui?:
		| {
				root?: SlotClass;
				base?: SlotClass;
				leading?: SlotClass;
				leadingIcon?: SlotClass;
				leadingAvatar?: SlotClass;
				leadingAvatarSize?: SlotClass;
				trailing?: SlotClass;
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
	/**
	 * When `true`, the loading icon will be displayed.
	 */
	loading?: boolean | undefined;
	/**
	 * The icon when the `loading` prop is `true`.
	 * @default appConfig.ui.icons.loading
	 */
	loadingIcon?: any;
	enterKeyHint?:
		| 'search'
		| 'enter'
		| 'done'
		| 'go'
		| 'next'
		| 'previous'
		| 'send'
		| undefined;
	form?: string | undefined;
	formaction?: string | undefined;
	formenctype?: string | undefined;
	formmethod?: string | undefined;
	formnovalidate?: false | true | 'true' | 'false' | undefined;
	formtarget?: string | undefined;
	list?: string | undefined;
	max?: string | number | undefined;
	maxlength?: string | number | undefined;
	min?: string | number | undefined;
	minlength?: string | number | undefined;
	pattern?: string | undefined;
	readonly?: false | true | 'true' | 'false' | undefined;
	step?: string | number | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
>
> This component also supports all native `<input>` HTML attributes.

### Slots

```ts
/**
 * Slots for the Input component
 */
interface InputSlots {
	leading(): any;
	default(): any;
	trailing(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Input component
 */
interface InputEmits {
  update:modelValue: (payload: [value: _Number<_Optional<_Nullable<T, Mod>, Mod>, Mod>]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  change: (payload: [event: Event]) => void;
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
          inputRef
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
          HTMLInputElement
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
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		input: {
			slots: {
				root: 'relative inline-flex items-center',
				base: [
					'w-full rounded-md border-0 appearance-none placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75',
					'transition-colors',
				],
				leading: 'absolute inset-y-0 start-0 flex items-center',
				leadingIcon: 'shrink-0 text-dimmed',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailing: 'absolute inset-y-0 end-0 flex items-center',
				trailingIcon: 'shrink-0 text-dimmed',
			},
			variants: {
				fieldGroup: {
					horizontal: {
						root: 'group has-focus-visible:z-[1]',
						base: 'group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none',
					},
					vertical: {
						root: 'group has-focus-visible:z-[1]',
						base: 'group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none',
					},
				},
				size: {
					xs: {
						base: 'px-2 py-1 text-sm/4 gap-1',
						leading: 'ps-2',
						trailing: 'pe-2',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
					},
					sm: {
						base: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
					},
					md: {
						base: 'px-2.5 py-1.5 text-base/5 gap-1.5',
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
					},
					lg: {
						base: 'px-3 py-2 text-base/5 gap-2',
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
					},
					xl: {
						base: 'px-3 py-2 text-base gap-2',
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-6',
						leadingAvatarSize: 'xs',
						trailingIcon: 'size-6',
					},
				},
				variant: {
					outline: 'text-highlighted bg-default ring ring-inset ring-accented',
					soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
					subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
					ghost:
						'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
					none: 'text-highlighted bg-transparent focus:outline-none',
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
				leading: {
					true: '',
				},
				trailing: {
					true: '',
				},
				loading: {
					true: '',
				},
				highlight: {
					true: '',
				},
				fixed: {
					false: '',
				},
				type: {
					file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: ['outline', 'subtle'],
					class:
						'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: ['outline', 'subtle'],
					class:
						'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: ['outline', 'subtle'],
					class:
						'outline-success/25 focus-visible:outline-3 focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: ['outline', 'subtle'],
					class:
						'outline-info/25 focus-visible:outline-3 focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: ['outline', 'subtle'],
					class:
						'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: ['outline', 'subtle'],
					class:
						'outline-error/25 focus-visible:outline-3 focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: ['soft', 'ghost'],
					class: 'outline-primary/25 focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: ['soft', 'ghost'],
					class: 'outline-secondary/25 focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: ['soft', 'ghost'],
					class: 'outline-success/25 focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: ['soft', 'ghost'],
					class: 'outline-info/25 focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: ['soft', 'ghost'],
					class: 'outline-warning/25 focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: ['soft', 'ghost'],
					class: 'outline-error/25 focus-visible:outline-3',
				},
				{
					color: 'primary',
					highlight: true,
					class: 'ring ring-inset ring-primary',
				},
				{
					color: 'secondary',
					highlight: true,
					class: 'ring ring-inset ring-secondary',
				},
				{
					color: 'success',
					highlight: true,
					class: 'ring ring-inset ring-success',
				},
				{
					color: 'info',
					highlight: true,
					class: 'ring ring-inset ring-info',
				},
				{
					color: 'warning',
					highlight: true,
					class: 'ring ring-inset ring-warning',
				},
				{
					color: 'error',
					highlight: true,
					class: 'ring ring-inset ring-error',
				},
				{
					color: 'neutral',
					variant: ['outline', 'subtle'],
					class:
						'outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: ['soft', 'ghost'],
					class: 'outline-inverted/25 focus-visible:outline-3',
				},
				{
					color: 'neutral',
					highlight: true,
					class: 'ring ring-inset ring-inverted',
				},
				{
					leading: true,
					size: 'xs',
					class: 'ps-7',
				},
				{
					leading: true,
					size: 'sm',
					class: 'ps-8',
				},
				{
					leading: true,
					size: 'md',
					class: 'ps-9',
				},
				{
					leading: true,
					size: 'lg',
					class: 'ps-10',
				},
				{
					leading: true,
					size: 'xl',
					class: 'ps-11',
				},
				{
					trailing: true,
					size: 'xs',
					class: 'pe-7',
				},
				{
					trailing: true,
					size: 'sm',
					class: 'pe-8',
				},
				{
					trailing: true,
					size: 'md',
					class: 'pe-9',
				},
				{
					trailing: true,
					size: 'lg',
					class: 'pe-10',
				},
				{
					trailing: true,
					size: 'xl',
					class: 'pe-11',
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
				{
					fixed: false,
					size: 'xs',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'sm',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'md',
					class: 'md:text-sm',
				},
				{
					fixed: false,
					size: 'lg',
					class: 'md:text-sm',
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'outline',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Input.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/input.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "InputDate"
description: "An input component for date selection."
canonical_url: "https://ui.nuxt.com/docs/components/input-date"

---

# InputDate

> An input component for date selection.

## Usage

Use the `v-model` directive to control the selected date.

```vue
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const value = shallowRef(new CalendarDate(2022, 2, 3));
</script>

<template>
	<UInputDate v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const defaultValue = shallowRef(new CalendarDate(2022, 2, 6));
</script>

<template>
	<UInputDate :default-value="defaultValue" />
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
	<UInputDate
		range
		v-model="value"
	/>
</template>
```

### Color

Use the `color` prop to change the color of the InputDate.

```vue
<template>
	<UInputDate
		color="neutral"
		highlight
	/>
</template>
```

### Variant

Use the `variant` prop to change the variant of the InputDate.

```vue
<template>
	<UInputDate variant="subtle" />
</template>
```

### Size

Use the `size` prop to change the size of the InputDate.

```vue
<template>
	<UInputDate size="xl" />
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the InputDate.

```vue
<template>
	<UInputDate icon="i-lucide-calendar" />
</template>
```

> [!NOTE]
>
> Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

### Separator Icon

Use the `separator-icon` prop to change the [Icon](/docs/components/icon) of the range separator. Defaults to `i-lucide-minus`.

```vue
<template>
	<UInputDate
		range
		separator-icon="i-lucide-arrow-right"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.minus` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.minus` key.

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the InputDate.

```vue
<template>
	<UInputDate
		:avatar="{
			src: 'https://github.com/vuejs.png',
			loading: 'lazy',
		}"
		size="md"
		variant="outline"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the InputDate.

```vue
<template>
	<UInputDate disabled />
</template>
```

## Examples

### With unavailable dates

Use the `is-date-unavailable` prop with a function to mark specific dates as unavailable.

```vue [InputDateUnavailableDatesExample.vue]
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
	<UInputDate
		v-model="modelValue"
		:is-date-unavailable="isDateUnavailable"
		range
	/>
</template>
```

### With min/max dates

Use the `min-value` and `max-value` props to limit the dates.

```vue [InputDateMinMaxDatesExample.vue]
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const modelValue = shallowRef(new CalendarDate(2023, 9, 10));
	const minDate = new CalendarDate(2023, 9, 1);
	const maxDate = new CalendarDate(2023, 9, 30);
</script>

<template>
	<UInputDate
		v-model="modelValue"
		:min-value="minDate"
		:max-value="maxDate"
	/>
</template>
```

### As a date picker

Use a [Calendar](/docs/components/calendar) and a [Popover](/docs/components/popover) component to create a date picker.

```vue [InputDateDatePickerExample.vue]
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const inputDate = useTemplateRef('inputDate');

	const modelValue = shallowRef(new CalendarDate(2022, 1, 10));
</script>

<template>
	<UInputDate
		ref="inputDate"
		v-model="modelValue"
	>
		<template #trailing>
			<UPopover :reference="inputDate?.inputsRef[3]?.$el">
				<UButton
					color="neutral"
					variant="link"
					size="sm"
					icon="i-lucide-calendar"
					aria-label="Select a date"
					class="px-0"
				/>

				<template #content>
					<UCalendar
						v-model="modelValue"
						class="p-2"
					/>
				</template>
			</UPopover>
		</template>
	</UInputDate>
</template>
```

### As a date range picker

Use a [Calendar](/docs/components/calendar) and a [Popover](/docs/components/popover) component to create a date range picker.

```vue [InputDateDateRangePickerExample.vue]
<script setup lang="ts">
	import { CalendarDate } from '@internationalized/date';

	const inputDate = useTemplateRef('inputDate');

	const modelValue = shallowRef({
		start: new CalendarDate(2022, 1, 10),
		end: new CalendarDate(2022, 1, 20),
	});
</script>

<template>
	<UInputDate
		ref="inputDate"
		v-model="modelValue"
		range
	>
		<template #trailing>
			<UPopover :reference="inputDate?.inputsRef[0]?.$el">
				<UButton
					color="neutral"
					variant="link"
					size="sm"
					icon="i-lucide-calendar"
					aria-label="Select a date range"
					class="px-0"
				/>

				<template #content>
					<UCalendar
						v-model="modelValue"
						class="p-2"
						:number-of-months="2"
						range
					/>
				</template>
			</UPopover>
		</template>
	</UInputDate>
</template>
```

## API

### Props

```ts
/**
 * Props for the InputDate component
 */
interface InputDateProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  /**
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined;
  /**
   * @default 'solid'
   */
  variant?: "outline" | "soft" | "subtle" | "ghost" | "none" | undefined;
  /**
   * @default 'md'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  /**
   * Highlight the ring color like a focus state.
   */
  highlight?: boolean | undefined;
  /**
   * Keep the mobile text size on all breakpoints.
   */
  fixed?: boolean | undefined;
  autofocus?: boolean | undefined;
  /**
   * @default 0
   */
  autofocusDelay?: number | undefined;
  /**
   * The icon to use as a range separator.
   * @default appConfig.ui.icons.minus
   */
  separatorIcon?: any;
  /**
   * Whether or not a range of dates can be selected
   */
  range?: R | undefined;
  defaultValue?: CalendarDate | CalendarDateTime | ZonedDateTime | DateRange;
  modelValue?: null | CalendarDate | CalendarDateTime | ZonedDateTime | DateRange;
  ui?: { base?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailing?: SlotClass; trailingIcon?: SlotClass; segment?: SlotClass; separatorIcon?: SlotClass; } | undefined;
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
  defaultPlaceholder?: CalendarDate | CalendarDateTime | ZonedDateTime;
  placeholder?: CalendarDate | CalendarDateTime | ZonedDateTime;
  /**
   * The hour cycle used for formatting times. Defaults to the local preference
   */
  hourCycle?: 12 | 24 | undefined;
  /**
   * The stepping interval for the time fields. Defaults to `1`.
   */
  step?: DateStep | undefined;
  /**
   * Whether to enforce snapping the time value to the nearest step increment after input. Defaults to `false`.
   */
  stepSnapping?: boolean | undefined;
  /**
   * The granularity to use for formatting times. Defaults to day if a CalendarDate is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity
   */
  granularity?: "day" | "hour" | "minute" | "second" | undefined;
  /**
   * Whether or not to hide the time zone segment of the field
   */
  hideTimeZone?: boolean | undefined;
  maxValue?: CalendarDate | CalendarDateTime | ZonedDateTime;
  minValue?: CalendarDate | CalendarDateTime | ZonedDateTime;
  /**
   * The locale to use for formatting dates
   */
  locale?: string | undefined;
  /**
   * Whether or not the date field is disabled
   */
  disabled?: boolean | undefined;
  /**
   * Whether or not the date field is readonly
   */
  readonly?: boolean | undefined;
  /**
   * A function that returns whether or not a date is unavailable
   */
  isDateUnavailable?: (date: DateValue): boolean | undefined;
  /**
   * Id of the element
   */
  id?: string | undefined;
  /**
   * The name of the field. Submitted with its owning form as part of a name/value pair.
   */
  name?: string | undefined;
  /**
   * When `true`, indicates that the user must set the value before the owning form can be submitted.
   */
  required?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the InputDate component
 */
interface InputDateSlots {
	leading(): any;
	default(): any;
	trailing(): any;
	separator(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the InputDate component
 */
interface InputDateEmits {
  update:modelValue: (payload: [value: InputDateModelValue<R>]) => void;
  update:placeholder: (payload: [date: DateValue] & [date: DateValue]) => void;
  change: (payload: [event: Event]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  focus: (payload: [event: FocusEvent]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		inputDate: {
			slots: {
				base: [
					'group relative inline-flex items-center rounded-md select-none',
					'transition-colors',
				],
				leading: 'absolute inset-y-0 start-0 flex items-center',
				leadingIcon: 'shrink-0 text-dimmed',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailing: 'absolute inset-y-0 end-0 flex items-center',
				trailingIcon: 'shrink-0 text-dimmed',
				segment: [
					'rounded-sm text-center outline-hidden data-placeholder:text-dimmed data-[segment=literal]:text-muted data-invalid:text-error data-disabled:cursor-not-allowed data-disabled:opacity-75',
					'transition-colors',
				],
				separatorIcon: 'shrink-0 size-4 text-muted',
			},
			variants: {
				fieldGroup: {
					horizontal:
						'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
					vertical:
						'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
				},
				size: {
					xs: {
						base: ['px-2 py-1 text-sm/4 gap-1', 'gap-0.25'],
						leading: 'ps-2',
						trailing: 'pe-2',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						segment:
							'data-[segment=day]:w-8 data-[segment=month]:w-8 data-[segment=year]:w-10',
					},
					sm: {
						base: ['px-2.5 py-1.5 text-sm/4 gap-1.5', 'gap-0.5'],
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						segment:
							'data-[segment=day]:w-8 data-[segment=month]:w-8 data-[segment=year]:w-10',
					},
					md: {
						base: ['px-2.5 py-1.5 text-base/5 gap-1.5', 'gap-0.5'],
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						segment:
							'data-[segment=day]:w-9 data-[segment=month]:w-9 data-[segment=year]:w-11',
					},
					lg: {
						base: ['px-3 py-2 text-base/5 gap-2', 'gap-0.75'],
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						segment:
							'data-[segment=day]:w-9 data-[segment=month]:w-9 data-[segment=year]:w-11',
					},
					xl: {
						base: ['px-3 py-2 text-base gap-2', 'gap-0.75'],
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-6',
						leadingAvatarSize: 'xs',
						trailingIcon: 'size-6',
						segment:
							'data-[segment=day]:w-10 data-[segment=month]:w-10 data-[segment=year]:w-12',
					},
				},
				variant: {
					outline: 'text-highlighted bg-default ring ring-inset ring-accented',
					soft: 'text-highlighted bg-elevated/50 hover:bg-elevated has-focus:bg-elevated disabled:bg-elevated/50',
					subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
					ghost:
						'text-highlighted bg-transparent hover:bg-elevated has-focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
					none: 'text-highlighted bg-transparent has-focus:outline-none',
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
				leading: {
					true: '',
				},
				trailing: {
					true: '',
				},
				loading: {
					true: '',
				},
				highlight: {
					true: '',
				},
				fixed: {
					false: '',
				},
				type: {
					file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: ['outline', 'subtle'],
					class:
						'outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: ['outline', 'subtle'],
					class:
						'outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: ['outline', 'subtle'],
					class:
						'outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: ['outline', 'subtle'],
					class:
						'outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: ['outline', 'subtle'],
					class:
						'outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: ['outline', 'subtle'],
					class:
						'outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: ['soft', 'ghost'],
					class: 'outline-primary/25 has-focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: ['soft', 'ghost'],
					class: 'outline-secondary/25 has-focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: ['soft', 'ghost'],
					class: 'outline-success/25 has-focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: ['soft', 'ghost'],
					class: 'outline-info/25 has-focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: ['soft', 'ghost'],
					class: 'outline-warning/25 has-focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: ['soft', 'ghost'],
					class: 'outline-error/25 has-focus-visible:outline-3',
				},
				{
					color: 'primary',
					highlight: true,
					class: 'ring ring-inset ring-primary',
				},
				{
					color: 'secondary',
					highlight: true,
					class: 'ring ring-inset ring-secondary',
				},
				{
					color: 'success',
					highlight: true,
					class: 'ring ring-inset ring-success',
				},
				{
					color: 'info',
					highlight: true,
					class: 'ring ring-inset ring-info',
				},
				{
					color: 'warning',
					highlight: true,
					class: 'ring ring-inset ring-warning',
				},
				{
					color: 'error',
					highlight: true,
					class: 'ring ring-inset ring-error',
				},
				{
					color: 'neutral',
					variant: ['outline', 'subtle'],
					class:
						'outline-inverted/25 has-focus-visible:outline-3 has-focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: ['soft', 'ghost'],
					class: 'outline-inverted/25 has-focus-visible:outline-3',
				},
				{
					color: 'neutral',
					highlight: true,
					class: 'ring ring-inset ring-inverted',
				},
				{
					leading: true,
					size: 'xs',
					class: 'ps-7',
				},
				{
					leading: true,
					size: 'sm',
					class: 'ps-8',
				},
				{
					leading: true,
					size: 'md',
					class: 'ps-9',
				},
				{
					leading: true,
					size: 'lg',
					class: 'ps-10',
				},
				{
					leading: true,
					size: 'xl',
					class: 'ps-11',
				},
				{
					trailing: true,
					size: 'xs',
					class: 'pe-7',
				},
				{
					trailing: true,
					size: 'sm',
					class: 'pe-8',
				},
				{
					trailing: true,
					size: 'md',
					class: 'pe-9',
				},
				{
					trailing: true,
					size: 'lg',
					class: 'pe-10',
				},
				{
					trailing: true,
					size: 'xl',
					class: 'pe-11',
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
				{
					fixed: false,
					size: 'xs',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'sm',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'md',
					class: 'md:text-sm',
				},
				{
					fixed: false,
					size: 'lg',
					class: 'md:text-sm',
				},
				{
					variant: 'outline',
					class: {
						segment: 'focus:bg-elevated',
					},
				},
				{
					variant: 'soft',
					class: {
						segment: 'focus:bg-accented/50 group-hover:focus:bg-accented',
					},
				},
				{
					variant: 'subtle',
					class: {
						segment: 'focus:bg-accented',
					},
				},
				{
					variant: 'ghost',
					class: {
						segment: 'focus:bg-elevated group-hover:focus:bg-accented',
					},
				},
				{
					variant: 'none',
					class: {
						segment: 'focus:bg-elevated',
					},
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'outline',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/InputDate.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/input-date.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "InputMenu"
description: "An autocomplete input with real-time suggestions."
canonical_url: "https://ui.nuxt.com/docs/components/input-menu"

---

# InputMenu

> An autocomplete input with real-time suggestions.

## Usage

Use the `v-model` directive to control the value of the InputMenu or the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		:items="items"
	/>
</template>
```

> [!TIP]
>
> Use this over an [`Input`](/docs/components/input) to take advantage of Reka UI's [`Combobox`](https://reka-ui.com/docs/components/combobox) component that offers autocomplete capabilities.

> [!NOTE]
>
> This component is similar to the [`SelectMenu`](/docs/components/select-menu) but it's using an Input instead of a Select.

### Items

Use the `items` prop as an array of strings, numbers or booleans:

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		:items="items"
	/>
</template>
```

You can also pass an array of objects with the following properties:

- `label?: string`
- [`type?: "label" | "separator" | "item"`](#with-items-type)
- [`icon?: string`](#with-icons-in-items)
- [`avatar?: AvatarProps`](#with-avatar-in-items)
- [`chip?: ChipProps`](#with-chip-in-items)
- `disabled?: boolean`
- `onSelect?: (e: Event) => void`
- `class?: any`
- `ui?: { tagsItem?: ClassNameValue, tagsItemText?: ClassNameValue, tagsItemDelete?: ClassNameValue, tagsItemDeleteIcon?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`

```vue
<script setup lang="ts">
	import type { InputMenuItem } from '@nuxt/ui';

	const items = ref<InputMenuItem[]>([
		{
			label: 'Backlog',
		},
		{
			label: 'Todo',
		},
		{
			label: 'In Progress',
		},
		{
			label: 'Done',
		},
	]);
	const value = ref({
		label: 'Todo',
	});
</script>

<template>
	<UInputMenu
		v-model="value"
		:items="items"
	/>
</template>
```

You can also pass an array of arrays to the `items` prop to display separated groups of items.

```vue
<script setup lang="ts">
	const items = ref([
		['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'],
		['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek'],
	]);
	const value = ref('Apple');
</script>

<template>
	<UInputMenu
		v-model="value"
		:items="items"
	/>
</template>
```

### Value Key

You can choose to bind a single property of the object rather than the whole object by using the `value-key` prop. Defaults to `undefined`.

```vue
<script setup lang="ts">
	import type { InputMenuItem } from '@nuxt/ui';

	const items = ref<InputMenuItem[]>([
		{
			label: 'Backlog',
			id: 'backlog',
		},
		{
			label: 'Todo',
			id: 'todo',
		},
		{
			label: 'In Progress',
			id: 'in_progress',
		},
		{
			label: 'Done',
			id: 'done',
		},
	]);
	const value = ref('todo');
</script>

<template>
	<UInputMenu
		v-model="value"
		value-key="id"
		:items="items"
	/>
</template>
```

> [!TIP]
>
> Use the `by` prop to compare objects by a field instead of reference when the `model-value` is an object.

### Multiple

Use the `multiple` prop to allow multiple selections, the selected items will be displayed as tags.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref(['Backlog', 'Todo']);
</script>

<template>
	<UInputMenu
		v-model="value"
		multiple
		:items="items"
	/>
</template>
```

> [!CAUTION]
>
> Ensure to pass an array to the `default-value` prop or the `v-model` directive.

### Delete Icon

With `multiple`, use the `delete-icon` prop to customize the delete [Icon](/docs/components/icon) in the tags. Defaults to `i-lucide-x`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref(['Backlog', 'Todo']);
</script>

<template>
	<UInputMenu
		v-model="value"
		multiple
		delete-icon="i-lucide-trash"
		:items="items"
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

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
</script>

<template>
	<UInputMenu
		placeholder="Select status"
		:items="items"
	/>
</template>
```

### Mode `4.8+`

Set the `mode` prop to `autocomplete` to turn the InputMenu into a free-form text input with suggestions. The `modelValue` becomes the input text (`string`) instead of a selected item.

```vue [InputMenuModeExample.vue]
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('');
</script>

<template>
	<UInputMenu
		v-model="value"
		mode="autocomplete"
		:items="items"
		:trailing-icon="false"
		:content="{ hideWhenEmpty: true }"
		placeholder="Type a status..."
	/>
</template>
```

> [!CAUTION]
>
> When `mode` is `autocomplete`, `multiple`, `by`, `resetSearchTermOnSelect` and `resetModelValueOnClear` are not applicable.

> [!TIP]
>
> Use the `content.hideWhenEmpty` prop to hide the menu when there are no matching suggestions.

### Content

Use the `content` prop to control how the InputMenu content is rendered, like its `align` or `side` for example.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		:content="{
			align: 'center',
			side: 'bottom',
			sideOffset: 8,
		}"
		:items="items"
	/>
</template>
```

### Arrow

Use the `arrow` prop to display an arrow on the InputMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		arrow
		:items="items"
	/>
</template>
```

### Color

Use the `color` prop to change the ring color when the InputMenu is focused.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		color="neutral"
		highlight
		:items="items"
	/>
</template>
```

> [!NOTE]
>
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the InputMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		color="neutral"
		variant="subtle"
		:highlight="false"
		:items="items"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the InputMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		size="xl"
		:items="items"
	/>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the InputMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		icon="i-lucide-search"
		size="md"
		:items="items"
	/>
</template>
```

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/docs/components/icon). Defaults to `i-lucide-chevron-down`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		trailing-icon="i-lucide-arrow-down"
		size="md"
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

### Selected Icon

Use the `selected-icon` prop to customize the icon when an item is selected. Defaults to `i-lucide-check`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		selected-icon="i-lucide-flame"
		size="md"
		:items="items"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key.

### Clear `4.4+`

Use the `clear` prop to display a clear button when a value is selected.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		clear
		:items="items"
	/>
</template>
```

### Clear Icon `4.4+`

Use the `clear-icon` prop to customize the clear button [Icon](/docs/components/icon). Defaults to `i-lucide-x`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		clear
		clear-icon="i-lucide-trash"
		:items="items"
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

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the InputMenu.

```vue
<script setup lang="ts">
	const items = ref([
		'Nuxt',
		'NuxtHub',
		'NuxtLabs',
		'Nuxt Modules',
		'Nuxt Community',
	]);
	const value = ref('Nuxt');
</script>

<template>
	<UInputMenu
		v-model="value"
		:avatar="{
			src: 'https://github.com/nuxt.png',
			loading: 'lazy',
		}"
		:items="items"
	/>
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the InputMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		loading
		:trailing="false"
		:items="items"
	/>
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		loading
		loading-icon="i-lucide-loader"
		:items="items"
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

### Disabled

Use the `disabled` prop to disable the InputMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
</script>

<template>
	<UInputMenu
		disabled
		placeholder="Select status"
		:items="items"
	/>
</template>
```

## Examples

### With items type

You can use the `type` property with `separator` to display a separator between items or `label` to display a label.

```vue
<script setup lang="ts">
	import type { InputMenuItem } from '@nuxt/ui';

	const items = ref<InputMenuItem[]>([
		[
			{
				type: 'label',
				label: 'Fruits',
			},
			'Apple',
			'Banana',
			'Blueberry',
			'Grapes',
			'Pineapple',
		],
		[
			{
				type: 'label',
				label: 'Vegetables',
			},
			'Aubergine',
			'Broccoli',
			'Carrot',
			'Courgette',
			'Leek',
		],
	]);
	const value = ref('Apple');
</script>

<template>
	<UInputMenu
		v-model="value"
		:items="items"
	/>
</template>
```

> [!NOTE]
>
> When using `label` items as group headings, pass an array of arrays so a label gets filtered out together with its group when searching.

### With icon in items

You can use the `icon` property to display an [Icon](/docs/components/icon) inside the items.

```vue [InputMenuItemsIconExample.vue]
<script setup lang="ts">
	import type { InputMenuItem } from '@nuxt/ui';

	const items = ref([
		{
			label: 'Backlog',
			value: 'backlog',
			icon: 'i-lucide-circle-help',
		},
		{
			label: 'Todo',
			value: 'todo',
			icon: 'i-lucide-circle-plus',
		},
		{
			label: 'In Progress',
			value: 'in_progress',
			icon: 'i-lucide-circle-arrow-up',
		},
		{
			label: 'Done',
			value: 'done',
			icon: 'i-lucide-circle-check',
		},
	] satisfies InputMenuItem[]);

	const value = ref(items.value[0]);
</script>

<template>
	<UInputMenu
		v-model="value"
		:icon="value?.icon"
		:items="items"
	/>
</template>
```

> [!TIP]
>
> You can also use the `#leading` slot to display the selected icon.

### With avatar in items

You can use the `avatar` property to display an [Avatar](/docs/components/avatar) inside the items.

```vue [InputMenuItemsAvatarExample.vue]
<script setup lang="ts">
	import type { InputMenuItem } from '@nuxt/ui';

	const items = ref([
		{
			label: 'benjamincanac',
			value: 'benjamincanac',
			avatar: {
				src: 'https://github.com/benjamincanac.png',
				alt: 'benjamincanac',
				loading: 'lazy' as const,
			},
		},
		{
			label: 'romhml',
			value: 'romhml',
			avatar: {
				src: 'https://github.com/romhml.png',
				alt: 'romhml',
				loading: 'lazy' as const,
			},
		},
		{
			label: 'noook',
			value: 'noook',
			avatar: {
				src: 'https://github.com/noook.png',
				alt: 'noook',
				loading: 'lazy' as const,
			},
		},
		{
			label: 'sandros94',
			value: 'sandros94',
			avatar: {
				src: 'https://github.com/sandros94.png',
				alt: 'sandros94',
				loading: 'lazy' as const,
			},
		},
	] satisfies InputMenuItem[]);

	const value = ref(items.value[0]);
</script>

<template>
	<UInputMenu
		v-model="value"
		:avatar="value?.avatar"
		:items="items"
	/>
</template>
```

> [!TIP]
>
> You can also use the `#leading` slot to display the selected avatar.

### With chip in items

You can use the `chip` property to display a [Chip](/docs/components/chip) inside the items.

```vue [InputMenuItemsChipExample.vue]
<script setup lang="ts">
	import type { InputMenuItem, ChipProps } from '@nuxt/ui';

	const items = ref([
		{
			label: 'bug',
			value: 'bug',
			chip: {
				color: 'error',
			},
		},
		{
			label: 'feature',
			value: 'feature',
			chip: {
				color: 'success',
			},
		},
		{
			label: 'enhancement',
			value: 'enhancement',
			chip: {
				color: 'info',
			},
		},
	] satisfies InputMenuItem[]);

	const value = ref(items.value[0]);
</script>

<template>
	<UInputMenu
		v-model="value"
		:items="items"
	>
		<template #leading="{ modelValue, ui }">
			<UChip
				v-if="modelValue"
				v-bind="modelValue.chip"
				inset
				standalone
				:size="ui.itemLeadingChipSize() as ChipProps['size']"
				:class="ui.itemLeadingChip()"
			/>
		</template>
	</UInputMenu>
</template>
```

> [!NOTE]
>
> In this example, the `#leading` slot is used to display the selected chip.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [InputMenuOpenExample.vue]
<script setup lang="ts">
	const open = ref(false);
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');

	defineShortcuts({
		o: () => (open.value = !open.value),
	});
</script>

<template>
	<UInputMenu
		v-model="value"
		v-model:open="open"
		:items="items"
	/>
</template>
```

> [!NOTE]
>
> In this example, leveraging [`defineShortcuts`](/docs/composables/define-shortcuts), you can toggle the InputMenu by pressing <kbd value="O">
>
> </kbd>
>
> .

### Control open state on focus

You can use the `open-on-focus` or `open-on-click` props to open the menu when the input is focused or clicked.

```vue [InputMenuOpenFocusExample.vue]
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const selected = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="selected"
		:items="items"
		open-on-focus
	/>
</template>
```

### Control search term

Use the `v-model:search-term` directive to control the search term.

```vue [InputMenuSearchTermExample.vue]
<script setup lang="ts">
	const searchTerm = ref('D');
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		v-model:search-term="searchTerm"
		:items="items"
	/>
</template>
```

### With rotating icon

Here is an example with a rotating icon that indicates the open state of the InputMenu.

```vue [InputMenuIconExample.vue]
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<UInputMenu
		v-model="value"
		:items="items"
		:ui="{
			trailingIcon:
				'group-data-[state=open]:rotate-180 transition-transform duration-200',
		}"
	/>
</template>
```

### With create item

Use the `create-item` prop to enable users to add custom values that aren't in the predefined options.

```vue [InputMenuCreateItemExample.vue]
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');

	function onCreate(item: string) {
		items.value.push(item);

		value.value = item;
	}
</script>

<template>
	<UInputMenu
		v-model="value"
		create-item
		:items="items"
		class="w-48"
		@create="onCreate"
	/>
</template>
```

> [!NOTE]
>
> The create option shows when no match is found by default. Set it to `always` to show it even when similar values exist.

> [!TIP]
> See: #emits
>
> Use the `@create` event to handle the creation of the item. You will receive the event and the item as arguments.

### With fetched items

You can fetch items from an API and use them in the InputMenu.

```vue [InputMenuFetchExample.vue]
<script setup lang="ts">
	import type { AvatarProps } from '@nuxt/ui';

	const {
		data: users,
		status,
		execute,
	} = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
		key: 'typicode-users',
		transform: (data: { id: number; name: string }[]) => {
			return data?.map((user) => ({
				label: user.name,
				value: String(user.id),
				avatar: {
					src: `https://i.pravatar.cc/120?img=${user.id}`,
					loading: 'lazy' as const,
				},
			}));
		},
		immediate: false,
	});

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}
</script>

<template>
	<UInputMenu
		:items="users"
		:loading="status === 'pending'"
		icon="i-lucide-user"
		placeholder="Select user"
		@update:open="onOpen"
	>
		<template #leading="{ modelValue, ui }">
			<UAvatar
				v-if="modelValue"
				v-bind="modelValue.avatar"
				:size="ui.leadingAvatarSize() as AvatarProps['size']"
				:class="ui.leadingAvatar()"
			/>
		</template>
	</UInputMenu>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the menu opens, avoiding unnecessary API calls on page load.

### With ignore filter

Set the `ignore-filter` prop to `true` to disable the internal search and use your own search logic.

```vue [InputMenuIgnoreFilterExample.vue]
<script setup lang="ts">
	import { refDebounced } from '@vueuse/core';
	import type { AvatarProps } from '@nuxt/ui';

	const searchTerm = ref('');
	const searchTermDebounced = refDebounced(searchTerm, 200);

	const {
		data: users,
		status,
		execute,
	} = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
		key: 'input-menu-users-search',
		params: { q: searchTermDebounced },
		transform: (data: { id: number; name: string }[]) => {
			return data?.map((user) => ({
				label: user.name,
				value: String(user.id),
				avatar: {
					src: `https://i.pravatar.cc/120?img=${user.id}`,
					loading: 'lazy' as const,
				},
			}));
		},
		immediate: false,
	});

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}
</script>

<template>
	<UInputMenu
		v-model:search-term="searchTerm"
		:items="users"
		:loading="status === 'pending'"
		ignore-filter
		icon="i-lucide-user"
		placeholder="Select user"
		@update:open="onOpen"
	>
		<template #leading="{ modelValue, ui }">
			<UAvatar
				v-if="modelValue"
				v-bind="modelValue.avatar"
				:size="ui.leadingAvatarSize() as AvatarProps['size']"
				:class="ui.leadingAvatar()"
			/>
		</template>
	</UInputMenu>
</template>
```

> [!NOTE]
>
> This example uses [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) to debounce the API calls. The fetch is deferred with `immediate: false` so no request is made until the menu opens.

### With filter fields

Use the `filter-fields` prop with an array of fields to filter on. Defaults to `[labelKey]`.

```vue [InputMenuFilterFieldsExample.vue]
<script setup lang="ts">
	import type { AvatarProps } from '@nuxt/ui';

	const {
		data: users,
		status,
		execute,
	} = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
		key: 'typicode-users-email',
		transform: (data: { id: number; name: string; email: string }[]) => {
			return data?.map((user) => ({
				label: user.name,
				email: user.email,
				value: String(user.id),
				avatar: {
					src: `https://i.pravatar.cc/120?img=${user.id}`,
					loading: 'lazy' as const,
				},
			}));
		},
		immediate: false,
	});

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}
</script>

<template>
	<UInputMenu
		:items="users"
		:loading="status === 'pending'"
		:filter-fields="['label', 'email']"
		icon="i-lucide-user"
		placeholder="Select user"
		class="w-80"
		@update:open="onOpen"
	>
		<template #leading="{ modelValue, ui }">
			<UAvatar
				v-if="modelValue"
				v-bind="modelValue.avatar"
				:size="ui.leadingAvatarSize() as AvatarProps['size']"
				:class="ui.leadingAvatar()"
			/>
		</template>

		<template #item-label="{ item }">
			{{ item.label }}

			<span class="text-muted">
				{{ item.email }}
			</span>
		</template>
	</UInputMenu>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the menu opens, avoiding unnecessary API calls on page load.

### With virtualization `4.1+`

Use the `virtualize` prop to enable virtualization for large lists as a boolean or an object with options like `{ estimateSize: 32, overscan: 12 }`.

> [!WARNING]
> See: https://github.com/unovue/reka-ui/issues/1885
>
> When enabled, all groups are flattened into a single list due to a limitation of Reka UI.

```vue [InputMenuVirtualizeExample.vue]
<script setup lang="ts">
	import type { InputMenuItem } from '@nuxt/ui';

	const items: InputMenuItem[] = Array(1000)
		.fill(0)
		.map((_, i) => ({
			label: `item-${i}`,
			value: i,
		}));
</script>

<template>
	<UInputMenu
		virtualize
		:items="items"
		class="w-48"
	/>
</template>
```

### With infinite scroll `4.4+`

You can use the [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable to load more data as the user scrolls.

```vue [InputMenuInfiniteScrollExample.vue]
<script setup lang="ts">
	import { useInfiniteScroll } from '@vueuse/core';

	type User = {
		firstName: string;
	};

	type UserResponse = {
		users: User[];
		total: number;
		skip: number;
		limit: number;
	};

	const skip = ref(0);

	const { data, status, execute } = await useLazyFetch(
		'https://dummyjson.com/users?limit=10&select=firstName',
		{
			key: 'input-menu-users-infinite-scroll',
			params: { skip },
			transform: (data?: UserResponse) => {
				return data?.users.map((user) => user.firstName);
			},
			immediate: false,
		},
	);

	const users = ref<string[]>([]);

	watch(data, () => {
		users.value = [...users.value, ...(data.value || [])];
	});

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}

	const inputMenu = useTemplateRef('inputMenu');

	onMounted(() => {
		useInfiniteScroll(
			() => inputMenu.value?.viewportRef,
			() => {
				skip.value += 10;
			},
			{
				canLoadMore: () => {
					return status.value !== 'pending';
				},
			},
		);
	});
</script>

<template>
	<UInputMenu
		ref="inputMenu"
		placeholder="Select user"
		:items="users"
		@update:open="onOpen"
	/>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `immediate: false` so data is only loaded as the user scrolls.

### With full content width

You can expand the content to the full width of its items by adding the `min-w-fit` class on the `ui.content` slot.

```vue [InputMenuContentWidthExample.vue]
<script setup lang="ts">
	const { data: users, execute } = await useLazyFetch(
		'https://jsonplaceholder.typicode.com/users',
		{
			key: 'typicode-users-email',
			transform: (data: { id: number; name: string; email: string }[]) => {
				return data?.map((user) => ({
					label: user.name,
					email: user.email,
					value: String(user.id),
					avatar: {
						src: `https://i.pravatar.cc/120?img=${user.id}`,
						loading: 'lazy' as const,
					},
				}));
			},
			immediate: false,
		},
	);

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}
</script>

<template>
	<UInputMenu
		:items="users"
		icon="i-lucide-user"
		placeholder="Select user"
		:ui="{ content: 'min-w-fit' }"
		@update:open="onOpen"
	>
		<template #item-label="{ item }">
			{{ item.label }}

			<span class="text-muted">
				{{ item.email }}
			</span>
		</template>
	</UInputMenu>
</template>
```

> [!TIP]
>
> You can also change the content width globally in your `app.config.ts`:
>
> ```text
> export default defineAppConfig({
>   ui: {
>     inputMenu: {
>       slots: {
>         content: 'min-w-fit'
>       }
>     }
>   }
> })
> ```

### As a country picker

You can use the InputMenu as a country picker with lazy loading. Countries are only fetched when the menu is first opened.

```vue [InputMenuCountriesExample.vue]
<script setup lang="ts">
	const {
		data: countries,
		status,
		execute,
	} = await useLazyFetch<
		{
			name: string;
			code: string;
			emoji: string;
		}[]
	>('/api/countries.json', {
		key: 'api-countries',
		immediate: false,
	});

	function onOpen() {
		if (!countries.value?.length) {
			execute();
		}
	}
</script>

<template>
	<UInputMenu
		:items="countries"
		:loading="status === 'pending'"
		label-key="name"
		:search-input="{ icon: 'i-lucide-search' }"
		placeholder="Select country"
		class="w-48"
		@update:open="onOpen"
	>
		<template #leading="{ modelValue, ui }">
			<span
				v-if="modelValue"
				class="size-5 text-center"
			>
				{{ modelValue?.emoji }}
			</span>
			<UIcon
				v-else
				name="i-lucide-earth"
				:class="ui.leadingIcon()"
			/>
		</template>
		<template #item-leading="{ item }">
			<span class="size-5 text-center">
				{{ item.emoji }}
			</span>
		</template>
	</UInputMenu>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `immediate: false` to only load countries when the menu is first opened.

## API

### Props

```ts
/**
 * Props for the InputMenu component
 */
interface InputMenuProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  id?: string | undefined;
  /**
   * @default 'text'
   */
  type?: "number" | "search" | "color" | "button" | "checkbox" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "password" | "radio" | "range" | "reset" | "submit" | "tel" | "text" | "time" | "url" | "week" | string & {} | undefined;
  /**
   * The placeholder text when the input is empty.
   */
  placeholder?: string | undefined;
  /**
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined;
  /**
   * @default 'outline'
   */
  variant?: "soft" | "outline" | "subtle" | "ghost" | "none" | undefined;
  /**
   * @default 'md'
   */
  size?: "sm" | "md" | "xs" | "lg" | "xl" | undefined;
  required?: boolean | undefined;
  autofocus?: boolean | undefined;
  /**
   * @default 0
   */
  autofocusDelay?: number | undefined;
  /**
   * The icon displayed to open the menu.
   * @default appConfig.ui.icons.chevronDown
   */
  trailingIcon?: any;
  /**
   * The icon displayed when an item is selected.
   * @default appConfig.ui.icons.check
   */
  selectedIcon?: any;
  /**
   * The icon displayed to delete a tag.
   * Works only when `multiple` is `true`.
   * @default appConfig.ui.icons.close
   */
  deleteIcon?: any;
  /**
   * Display a clear button to reset the model value.
   * Can be an object to pass additional props to the Button.
   * @default false
   */
  clear?: C & false | C & true | C & Partial<Omit<ButtonProps, LinkPropsKeys>> | undefined;
  /**
   * The icon displayed in the clear button.
   * @default appConfig.ui.icons.close
   */
  clearIcon?: any;
  /**
   * The content of the menu.
   * @default { side: 'bottom', sideOffset: 8, collisionPadding: 8, position: 'popper' }
   */
  content?: Omit<ComboboxContentProps, "as" | "asChild" | "forceMount"> & Partial<EmitsToProps<DismissableLayerEmits>> | undefined;
  /**
   * Display an arrow alongside the menu.
   * `{ rounded: true }`{lang="ts-type"}
   * @default false
   */
  arrow?: boolean | Omit<ComboboxArrowProps, "as" | "asChild"> | undefined;
  /**
   * Render the menu in a portal.
   * @default true
   */
  portal?: string | false | true | HTMLElement | undefined;
  /**
   * Enable virtualization for large lists.
   * Note: when enabled, all groups are flattened into a single list due to a limitation of Reka UI (https://github.com/unovue/reka-ui/issues/1885).
   * @default false
   */
  virtualize?: boolean | { overscan?: number | undefined; estimateSize?: number | ((index: number) => number) | undefined; } | undefined;
  /**
   * When `items` is an array of objects, select the field to use as the value instead of the object itself.
   * @default undefined
   */
  valueKey?: VK | undefined;
  /**
   * When `items` is an array of objects, select the field to use as the label.
   * @default 'label'
   */
  labelKey?: keyof Extract<NestedItem<T>, object> & string | DotPathKeys<Extract<NestedItem<T>, object>> | undefined;
  /**
   * When `items` is an array of objects, select the field to use as the description.
   * @default 'description'
   */
  descriptionKey?: keyof Extract<NestedItem<T>, object> & string | DotPathKeys<Extract<NestedItem<T>, object>> | undefined;
  items?: T | undefined;
  /**
   * The value of the InputMenu when initially rendered. Use when you do not need to control the state of the InputMenu.
   */
  defaultValue?: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | IsClearUsed<M, C> | undefined;
  /**
   * The controlled value of the InputMenu. Can be binded-with with `v-model`.
   */
  modelValue?: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | IsClearUsed<M, C> | undefined;
  modelModifiers?: Mod | undefined;
  /**
   * Whether multiple options can be selected or not.
   */
  multiple?: M | undefined;
  /**
   * Highlight the ring color like a focus state.
   */
  highlight?: boolean | undefined;
  /**
   * Keep the mobile text size on all breakpoints.
   */
  fixed?: boolean | undefined;
  /**
   * The behavior of the InputMenu.
   * - `combobox`: select one (or many) items from a list of suggestions.
   * - `autocomplete`: free-form text input with optional suggestions. The `modelValue` becomes the input text (`string`) instead of a selected item.
   * @default 'combobox'
   */
  mode?: "autocomplete" | "combobox" | undefined;
  /**
   * Determines if custom user input that does not exist in options can be added.
   * @default false
   */
  createItem?: boolean | "always" | { position?: "bottom" | "top" | undefined; when?: "empty" | "always" | undefined; } | undefined;
  /**
   * Fields to filter items by.
   * @default [labelKey]
   */
  filterFields?: string[] | undefined;
  /**
   * When `true`, disable the default filters, useful for custom filtering (useAsyncData, useFetch, etc.).
   * @default false
   */
  ignoreFilter?: boolean | undefined;
  ui?: { root?: SlotClass; base?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailing?: SlotClass; trailingIcon?: SlotClass; trailingClear?: SlotClass; arrow?: SlotClass; content?: SlotClass; viewport?: SlotClass; group?: SlotClass; empty?: SlotClass; label?: SlotClass; separator?: SlotClass; item?: SlotClass; itemLeadingIcon?: SlotClass; itemLeadingAvatar?: SlotClass; itemLeadingAvatarSize?: SlotClass; itemLeadingChip?: SlotClass; itemLeadingChipSize?: SlotClass; itemTrailing?: SlotClass; itemTrailingIcon?: SlotClass; itemWrapper?: SlotClass; itemLabel?: SlotClass; itemDescription?: SlotClass; tagsItem?: SlotClass; tagsItemText?: SlotClass; tagsItemDelete?: SlotClass; tagsItemDeleteIcon?: SlotClass; tagsInput?: SlotClass; } | undefined;
  /**
   * When `true`, prevents the user from interacting with listbox
   */
  disabled?: boolean | undefined;
  /**
   * The controlled open state of the Combobox. Can be binded with `v-model:open`.
   */
  open?: boolean | undefined;
  /**
   * The open state of the combobox when it is initially rendered. <br> Use when you do not need to control its open state.
   */
  defaultOpen?: boolean | undefined;
  /**
   * The name of the field. Submitted with its owning form as part of a name/value pair.
   */
  name?: string | undefined;
  /**
   * Whether to reset the searchTerm when the Combobox input blurred
   * @default true
   */
  resetSearchTermOnBlur?: boolean | undefined;
  /**
   * Whether to reset the searchTerm when the Combobox value is selected
   * @default true
   */
  resetSearchTermOnSelect?: boolean | undefined;
  /**
   * When `true` the `modelValue` will be reset to `null` (or `[]` if `multiple`)
   * @default true
   */
  resetModelValueOnClear?: boolean | undefined;
  /**
   * When `true`, hover over item will trigger highlight
   */
  highlightOnHover?: boolean | undefined;
  /**
   * Whether to open the combobox when the input is clicked
   * @default `false`
   */
  openOnClick?: boolean | undefined;
  /**
   * Whether to open the combobox when the input is focused
   * @default `false`
   */
  openOnFocus?: boolean | undefined;
  /**
   * Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.
   */
  by?: string | (a: T, b: T): boolean | undefined;
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
   * When `true`, the loading icon will be displayed.
   */
  loading?: boolean | undefined;
  /**
   * The icon when the `loading` prop is `true`.
   * @default appConfig.ui.icons.loading
   */
  loadingIcon?: any;
  enterKeyHint?: "search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined;
  form?: string | undefined;
  formaction?: string | undefined;
  formenctype?: string | undefined;
  formmethod?: string | undefined;
  formnovalidate?: false | true | "true" | "false" | undefined;
  formtarget?: string | undefined;
  list?: string | undefined;
  readonly?: false | true | "true" | "false" | undefined;
  autocomplete?: string & {} | "on" | "off" | undefined;
  /**
   * @default ''
   */
  searchTerm?: string | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
>
> This component also supports all native `<input>` HTML attributes.

### Slots

```ts
/**
 * Slots for the InputMenu component
 */
interface InputMenuSlots {
  leading(): any;
  trailing(): any;
  empty(): any;
  item(): any;
  item-leading(): any;
  item-label(): any;
  item-description(): any;
  item-trailing(): any;
  tags-item-text(): any;
  tags-item-delete(): any;
  content-top(): any;
  content-bottom(): any;
  create-item-label(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the InputMenu component
 */
interface InputMenuEmits {
  update:open: (payload: [value: boolean]) => void;
  change: (payload: [event: Event]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  focus: (payload: [event: FocusEvent]) => void;
  create: (payload: [item: string]) => void;
  clear: (payload: []) => void;
  highlight: (payload: [payload: { ref: HTMLElement; value: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | IsClearUsed<M, C>; } | undefined]) => void;
  remove-tag: (payload: [item: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | IsClearUsed<M, C>]) => void;
  update:modelValue: (payload: [value: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | IsClearUsed<M, C>]) => void;
  update:searchTerm: (payload: [value: string]) => void;
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
          inputRef
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
          HTMLInputElement
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
          viewportRef
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
          HTMLDivElement
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
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		inputMenu: {
			slots: {
				root: 'relative inline-flex items-center',
				base: ['rounded-md', 'transition-colors'],
				leading: 'absolute inset-y-0 start-0 flex items-center',
				leadingIcon: 'shrink-0 text-dimmed',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailing:
					'group absolute inset-y-0 end-0 flex items-center disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none',
				trailingIcon: 'shrink-0 text-dimmed',
				trailingClear: 'p-0',
				arrow: 'fill-bg stroke-default',
				content:
					'max-h-[min(15rem,var(--reka-combobox-content-available-height,15rem))] w-(--reka-combobox-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)] origin-(--reka-combobox-content-transform-origin) pointer-events-auto flex flex-col',
				viewport: 'relative scroll-py-1 overflow-y-auto flex-1',
				group: 'p-1 isolate',
				empty: 'text-center text-muted',
				label: 'font-semibold text-highlighted',
				separator: '-mx-1 my-1 h-px bg-border',
				item: [
					'group relative w-full flex items-start gap-1.5 p-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50',
					'transition-colors before:transition-colors',
				],
				itemLeadingIcon: [
					'shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default',
					'transition-colors',
				],
				itemLeadingAvatar: 'shrink-0',
				itemLeadingAvatarSize: '',
				itemLeadingChip: 'shrink-0',
				itemLeadingChipSize: '',
				itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
				itemTrailingIcon: 'shrink-0',
				itemWrapper: 'flex-1 flex flex-col min-w-0',
				itemLabel: 'truncate',
				itemDescription: 'truncate text-muted',
				tagsItem:
					'px-1.5 py-0.5 rounded-sm font-medium inline-flex items-center gap-0.5 ring ring-inset ring-accented bg-elevated text-default data-disabled:cursor-not-allowed data-disabled:opacity-75',
				tagsItemText: 'truncate',
				tagsItemDelete: [
					'inline-flex items-center rounded-xs text-dimmed hover:text-default hover:bg-accented/75 disabled:pointer-events-none',
					'transition-colors',
				],
				tagsItemDeleteIcon: 'shrink-0',
				tagsInput:
					'flex-1 border-0 bg-transparent placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
			},
			variants: {
				fieldGroup: {
					horizontal: {
						root: 'group has-focus-visible:z-[1]',
						base: 'group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none',
					},
					vertical: {
						root: 'group has-focus-visible:z-[1]',
						base: 'group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none',
					},
				},
				size: {
					xs: {
						base: 'px-2 py-1 text-sm/4 gap-1',
						leading: 'ps-2',
						trailing: 'pe-2',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						label: 'p-1 text-[10px]/3 gap-1',
						item: 'p-1 text-xs gap-1',
						itemLeadingIcon: 'size-4',
						itemLeadingAvatarSize: '3xs',
						itemLeadingChip: 'size-4',
						itemLeadingChipSize: 'sm',
						itemTrailingIcon: 'size-4',
						tagsItem: 'text-[10px]/3',
						tagsItemDeleteIcon: 'size-3',
						empty: 'p-2 text-xs',
					},
					sm: {
						base: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						label: 'p-1.5 text-[10px]/3 gap-1.5',
						item: 'p-1.5 text-xs gap-1.5',
						itemLeadingIcon: 'size-4',
						itemLeadingAvatarSize: '3xs',
						itemLeadingChip: 'size-4',
						itemLeadingChipSize: 'sm',
						itemTrailingIcon: 'size-4',
						tagsItem: 'text-[10px]/3',
						tagsItemDeleteIcon: 'size-3',
						empty: 'p-2.5 text-xs',
					},
					md: {
						base: 'px-2.5 py-1.5 text-base/5 gap-1.5',
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						label: 'p-1.5 text-xs gap-1.5',
						item: 'p-1.5 text-sm gap-1.5',
						itemLeadingIcon: 'size-5',
						itemLeadingAvatarSize: '2xs',
						itemLeadingChip: 'size-5',
						itemLeadingChipSize: 'md',
						itemTrailingIcon: 'size-5',
						tagsItem: 'text-xs',
						tagsItemDeleteIcon: 'size-3.5',
						empty: 'p-2.5 text-sm',
					},
					lg: {
						base: 'px-3 py-2 text-base/5 gap-2',
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						label: 'p-2 text-xs gap-2',
						item: 'p-2 text-sm gap-2',
						itemLeadingIcon: 'size-5',
						itemLeadingAvatarSize: '2xs',
						itemLeadingChip: 'size-5',
						itemLeadingChipSize: 'md',
						itemTrailingIcon: 'size-5',
						tagsItem: 'text-xs',
						tagsItemDeleteIcon: 'size-3.5',
						empty: 'p-3 text-sm',
					},
					xl: {
						base: 'px-3 py-2 text-base gap-2',
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-6',
						leadingAvatarSize: 'xs',
						trailingIcon: 'size-6',
						label: 'p-2 text-sm gap-2',
						item: 'p-2 text-base gap-2',
						itemLeadingIcon: 'size-6',
						itemLeadingAvatarSize: 'xs',
						itemLeadingChip: 'size-6',
						itemLeadingChipSize: 'lg',
						itemTrailingIcon: 'size-6',
						tagsItem: 'text-sm',
						tagsItemDeleteIcon: 'size-4',
						empty: 'p-3 text-base',
					},
				},
				variant: {
					outline: 'text-highlighted bg-default ring ring-inset ring-accented',
					soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
					subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
					ghost:
						'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
					none: 'text-highlighted bg-transparent focus:outline-none',
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
				leading: {
					true: '',
				},
				trailing: {
					true: '',
				},
				loading: {
					true: '',
				},
				highlight: {
					true: '',
				},
				fixed: {
					false: '',
				},
				type: {
					file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none',
				},
				virtualize: {
					true: {
						viewport: 'p-1 isolate',
					},
					false: {
						viewport: 'divide-y divide-default',
					},
				},
				multiple: {
					true: {
						root: 'flex-wrap',
					},
					false: {
						base: 'w-full border-0 placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75',
					},
				},
			},
			compoundVariants: [
				{
					variant: 'soft',
					multiple: true,
					class: 'has-focus:bg-elevated has-focus-visible:outline-3',
				},
				{
					variant: 'ghost',
					multiple: true,
					class: 'has-focus:bg-elevated has-focus-visible:outline-3',
				},
				{
					color: 'primary',
					multiple: true,
					variant: ['outline', 'subtle'],
					class: 'has-focus-visible:outline-3 has-focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					multiple: true,
					variant: ['outline', 'subtle'],
					class: 'has-focus-visible:outline-3 has-focus-visible:ring-secondary',
				},
				{
					color: 'success',
					multiple: true,
					variant: ['outline', 'subtle'],
					class: 'has-focus-visible:outline-3 has-focus-visible:ring-success',
				},
				{
					color: 'info',
					multiple: true,
					variant: ['outline', 'subtle'],
					class: 'has-focus-visible:outline-3 has-focus-visible:ring-info',
				},
				{
					color: 'warning',
					multiple: true,
					variant: ['outline', 'subtle'],
					class: 'has-focus-visible:outline-3 has-focus-visible:ring-warning',
				},
				{
					color: 'error',
					multiple: true,
					variant: ['outline', 'subtle'],
					class: 'has-focus-visible:outline-3 has-focus-visible:ring-error',
				},
				{
					color: 'neutral',
					multiple: true,
					variant: ['outline', 'subtle'],
					class: 'has-focus-visible:outline-3 has-focus-visible:ring-inverted',
				},
				{
					color: 'primary',
					variant: ['outline', 'subtle'],
					class:
						'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: ['outline', 'subtle'],
					class:
						'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: ['outline', 'subtle'],
					class:
						'outline-success/25 focus-visible:outline-3 focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: ['outline', 'subtle'],
					class:
						'outline-info/25 focus-visible:outline-3 focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: ['outline', 'subtle'],
					class:
						'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: ['outline', 'subtle'],
					class:
						'outline-error/25 focus-visible:outline-3 focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: ['soft', 'ghost'],
					class: 'outline-primary/25 focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: ['soft', 'ghost'],
					class: 'outline-secondary/25 focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: ['soft', 'ghost'],
					class: 'outline-success/25 focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: ['soft', 'ghost'],
					class: 'outline-info/25 focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: ['soft', 'ghost'],
					class: 'outline-warning/25 focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: ['soft', 'ghost'],
					class: 'outline-error/25 focus-visible:outline-3',
				},
				{
					color: 'primary',
					highlight: true,
					class: 'ring ring-inset ring-primary',
				},
				{
					color: 'secondary',
					highlight: true,
					class: 'ring ring-inset ring-secondary',
				},
				{
					color: 'success',
					highlight: true,
					class: 'ring ring-inset ring-success',
				},
				{
					color: 'info',
					highlight: true,
					class: 'ring ring-inset ring-info',
				},
				{
					color: 'warning',
					highlight: true,
					class: 'ring ring-inset ring-warning',
				},
				{
					color: 'error',
					highlight: true,
					class: 'ring ring-inset ring-error',
				},
				{
					color: 'neutral',
					variant: ['outline', 'subtle'],
					class:
						'outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: ['soft', 'ghost'],
					class: 'outline-inverted/25 focus-visible:outline-3',
				},
				{
					color: 'neutral',
					highlight: true,
					class: 'ring ring-inset ring-inverted',
				},
				{
					leading: true,
					size: 'xs',
					class: 'ps-7',
				},
				{
					leading: true,
					size: 'sm',
					class: 'ps-8',
				},
				{
					leading: true,
					size: 'md',
					class: 'ps-9',
				},
				{
					leading: true,
					size: 'lg',
					class: 'ps-10',
				},
				{
					leading: true,
					size: 'xl',
					class: 'ps-11',
				},
				{
					trailing: true,
					size: 'xs',
					class: 'pe-7',
				},
				{
					trailing: true,
					size: 'sm',
					class: 'pe-8',
				},
				{
					trailing: true,
					size: 'md',
					class: 'pe-9',
				},
				{
					trailing: true,
					size: 'lg',
					class: 'pe-10',
				},
				{
					trailing: true,
					size: 'xl',
					class: 'pe-11',
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
				{
					fixed: false,
					size: 'xs',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'sm',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'md',
					class: 'md:text-sm',
				},
				{
					fixed: false,
					size: 'lg',
					class: 'md:text-sm',
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'outline',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/InputMenu.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/input-menu.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "InputNumber"
description: "An input for numerical values with a customizable range."
canonical_url: "https://ui.nuxt.com/docs/components/input-number"

---

# InputNumber

> An input for numerical values with a customizable range.

## Usage

Use the `v-model` directive to control the value of the InputNumber.

```vue
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
	<UInputNumber :default-value="5" />
</template>
```

> [!NOTE]
>
> This component relies on the [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html) package which provides utilities for formatting and parsing numbers across locales and numbering systems.

### Min / Max

Use the `min` and `max` props to set the minimum and maximum values of the InputNumber.

```vue
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		:min="0"
		:max="10"
	/>
</template>
```

### Step

Use the `step` prop to set the step value of the InputNumber.

```vue
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		:step="2"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the InputNumber.

```vue
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		orientation="vertical"
	/>
</template>
```

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<template>
	<UInputNumber placeholder="Enter a number" />
</template>
```

### Color

Use the `color` prop to change the ring color when the InputNumber is focused.

```vue
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		color="neutral"
		highlight
	/>
</template>
```

### Variant

Use the `variant` prop to change the variant of the InputNumber.

```vue
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		variant="subtle"
		color="neutral"
		:highlight="false"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the InputNumber.

```vue
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		size="xl"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the InputNumber.

```vue
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		disabled
	/>
</template>
```

### Increment / Decrement

Use the `increment` and `decrement` props to customize the increment and decrement buttons with any [Button](/docs/components/button) props. Defaults to `{ variant: 'link' }`.

```vue
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		:increment="{
			color: 'neutral',
			variant: 'solid',
			size: 'xs',
		}"
		:decrement="{
			color: 'neutral',
			variant: 'solid',
			size: 'xs',
		}"
	/>
</template>
```

### Increment / Decrement Icons

Use the `increment-icon` and `decrement-icon` props to customize the buttons [Icon](/docs/components/icon). Defaults to `i-lucide-plus` / `i-lucide-minus`.

```vue
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		increment-icon="i-lucide-arrow-right"
		decrement-icon="i-lucide-arrow-left"
	/>
</template>
```

## Examples

### With decimal format

Use the `format-options` prop to customize the format of the value.

```vue [InputNumberDecimalExample.vue]
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		:format-options="{
			signDisplay: 'exceptZero',
			minimumFractionDigits: 1,
		}"
	/>
</template>
```

### With percentage format

Use the `format-options` prop with `style: 'percent'` to customize the format of the value.

```vue [InputNumberPercentageExample.vue]
<script setup lang="ts">
	const value = ref(0.05);
</script>

<template>
	<UInputNumber
		v-model="value"
		:step="0.01"
		:format-options="{
			style: 'percent',
		}"
	/>
</template>
```

### With currency format

Use the `format-options` prop with `style: 'currency'` to customize the format of the value.

```vue [InputNumberCurrencyExample.vue]
<script setup lang="ts">
	const value = ref(1500);
</script>

<template>
	<UInputNumber
		v-model="value"
		:format-options="{
			style: 'currency',
			currency: 'EUR',
			currencyDisplay: 'code',
			currencySign: 'accounting',
		}"
	/>
</template>
```

### Without buttons

You can use the `increment` and `decrement` props to control visibility of the buttons.

```vue [InputNumberWithoutButtonsExample.vue]
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber
		v-model="value"
		:increment="false"
		:decrement="false"
	/>
</template>
```

### Within a FormField

You can use the InputNumber within a [FormField](/docs/components/form-field) component to display a label, help text, required indicator, etc.

```vue [InputNumberFormFieldExample.vue]
<script setup lang="ts">
	const retries = ref(0);
</script>

<template>
	<UFormField
		label="Retries"
		help="Specify number of attempts"
		required
	>
		<UInputNumber
			v-model="retries"
			placeholder="Enter retries"
		/>
	</UFormField>
</template>
```

### With slots

Use the `#increment` and `#decrement` slots to customize the buttons.

```vue [InputNumberSlotsExample.vue]
<script setup lang="ts">
	const value = ref(5);
</script>

<template>
	<UInputNumber v-model="value">
		<template #decrement>
			<UButton
				size="xs"
				icon="i-lucide-minus"
			/>
		</template>

		<template #increment>
			<UButton
				size="xs"
				icon="i-lucide-plus"
			/>
		</template>
	</UInputNumber>
</template>
```

## API

### Props

```ts
/**
 * Props for the InputNumber component
 */
interface InputNumberProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * The placeholder text when the input is empty.
	 */
	placeholder?: string | undefined;
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
	 * @default 'outline'
	 */
	variant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'none' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * Highlight the ring color like a focus state.
	 */
	highlight?: boolean | undefined;
	/**
	 * Keep the mobile text size on all breakpoints.
	 */
	fixed?: boolean | undefined;
	/**
	 * The orientation of the input number.
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical' | undefined;
	/**
	 * Configure the increment button. The `color` and `size` are inherited.
	 * @default true
	 */
	increment?: boolean | Omit<ButtonProps, LinkPropsKeys> | undefined;
	/**
	 * The icon displayed to increment the value.
	 * @default appConfig.ui.icons.plus
	 */
	incrementIcon?: any;
	/**
	 * Disable the increment button.
	 */
	incrementDisabled?: boolean | undefined;
	/**
	 * Configure the decrement button. The `color` and `size` are inherited.
	 * @default true
	 */
	decrement?: boolean | Omit<ButtonProps, LinkPropsKeys> | undefined;
	/**
	 * The icon displayed to decrement the value.
	 * @default appConfig.ui.icons.minus
	 */
	decrementIcon?: any;
	/**
	 * Disable the decrement button.
	 */
	decrementDisabled?: boolean | undefined;
	autofocus?: boolean | undefined;
	autofocusDelay?: number | undefined;
	defaultValue?: NonNullable<T> | undefined;
	modelValue?: T | Mod extends { optional: true }
		? undefined
		: never | undefined;
	modelModifiers?: Mod | undefined;
	ui?:
		| {
				root?: SlotClass;
				base?: SlotClass;
				increment?: SlotClass;
				decrement?: SlotClass;
		  }
		| undefined;
	/**
	 * The smallest value allowed for the input.
	 */
	min?: number | undefined;
	/**
	 * The largest value allowed for the input.
	 */
	max?: number | undefined;
	/**
	 * The amount that the input value changes with each increment or decrement "tick".
	 */
	step?: number | undefined;
	/**
	 * When `false`, prevents the value from snapping to the nearest increment of the step value
	 */
	stepSnapping?: boolean | undefined;
	/**
	 * When `true`, prevents the user from interacting with the Number Field.
	 */
	disabled?: boolean | undefined;
	/**
	 * When `true`, indicates that the user must set the value before the owning form can be submitted.
	 */
	required?: boolean | undefined;
	/**
	 * Id of the element
	 */
	id?: string | undefined;
	/**
	 * The name of the field. Submitted with its owning form as part of a name/value pair.
	 */
	name?: string | undefined;
	/**
	 * Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user.
	 */
	formatOptions?: Intl.NumberFormatOptions | undefined;
	/**
	 * When `true`, prevents the value from changing on wheel scroll.
	 */
	disableWheelChange?: boolean | undefined;
	/**
	 * When `true`, inverts the direction of the wheel change.
	 */
	invertWheelChange?: boolean | undefined;
	/**
	 * When `true`, the Number Field is read-only.
	 */
	readonly?: boolean | undefined;
	/**
	 * When `true`, the input will be focused when the value changes.
	 */
	focusOnChange?: boolean | undefined;
	/**
	 * The locale to use for formatting and currencies
	 */
	locale?: string | undefined;
	enterKeyHint?:
		| 'enter'
		| 'done'
		| 'go'
		| 'next'
		| 'previous'
		| 'search'
		| 'send'
		| undefined;
	form?: string | undefined;
	formaction?: string | undefined;
	formenctype?: string | undefined;
	formmethod?: string | undefined;
	formnovalidate?: false | true | 'true' | 'false' | undefined;
	formtarget?: string | undefined;
	list?: string | undefined;
	autocomplete?: 'on' | 'off' | (string & {}) | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
>
> This component also supports all native `<input>` HTML attributes.

### Slots

```ts
/**
 * Slots for the InputNumber component
 */
interface InputNumberSlots {
	increment(): any;
	decrement(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the InputNumber component
 */
interface InputNumberEmits {
  update:modelValue: (payload: [value: ApplyModifiers<T, Mod>]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  change: (payload: [event: Event]) => void;
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
          inputRef
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
          HTMLInputElement
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
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		inputNumber: {
			slots: {
				root: 'relative inline-flex items-center',
				base: [
					'w-full rounded-md border-0 placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75',
					'transition-colors',
				],
				increment: 'absolute flex items-center',
				decrement: 'absolute flex items-center',
			},
			variants: {
				fieldGroup: {
					horizontal: {
						root: 'group has-focus-visible:z-[1]',
						base: 'group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none',
					},
					vertical: {
						root: 'group has-focus-visible:z-[1]',
						base: 'group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none',
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
				size: {
					xs: 'px-2 py-1 text-sm/4 gap-1',
					sm: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
					md: 'px-2.5 py-1.5 text-base/5 gap-1.5',
					lg: 'px-3 py-2 text-base/5 gap-2',
					xl: 'px-3 py-2 text-base gap-2',
				},
				variant: {
					outline: 'text-highlighted bg-default ring ring-inset ring-accented',
					soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
					subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
					ghost:
						'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
					none: 'text-highlighted bg-transparent focus:outline-none',
				},
				disabled: {
					true: {
						increment: 'opacity-75 cursor-not-allowed',
						decrement: 'opacity-75 cursor-not-allowed',
					},
				},
				orientation: {
					horizontal: {
						base: 'text-center',
						increment: 'inset-y-0 end-0 pe-1',
						decrement: 'inset-y-0 start-0 ps-1',
					},
					vertical: {
						increment: 'top-0 end-0 pe-1 [&>button]:py-0 scale-80',
						decrement: 'bottom-0 end-0 pe-1 [&>button]:py-0 scale-80',
					},
				},
				highlight: {
					true: '',
				},
				fixed: {
					false: '',
				},
				increment: {
					false: '',
				},
				decrement: {
					false: '',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: ['outline', 'subtle'],
					class:
						'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: ['outline', 'subtle'],
					class:
						'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: ['outline', 'subtle'],
					class:
						'outline-success/25 focus-visible:outline-3 focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: ['outline', 'subtle'],
					class:
						'outline-info/25 focus-visible:outline-3 focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: ['outline', 'subtle'],
					class:
						'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: ['outline', 'subtle'],
					class:
						'outline-error/25 focus-visible:outline-3 focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: ['soft', 'ghost'],
					class: 'outline-primary/25 focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: ['soft', 'ghost'],
					class: 'outline-secondary/25 focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: ['soft', 'ghost'],
					class: 'outline-success/25 focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: ['soft', 'ghost'],
					class: 'outline-info/25 focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: ['soft', 'ghost'],
					class: 'outline-warning/25 focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: ['soft', 'ghost'],
					class: 'outline-error/25 focus-visible:outline-3',
				},
				{
					color: 'primary',
					highlight: true,
					class: 'ring ring-inset ring-primary',
				},
				{
					color: 'secondary',
					highlight: true,
					class: 'ring ring-inset ring-secondary',
				},
				{
					color: 'success',
					highlight: true,
					class: 'ring ring-inset ring-success',
				},
				{
					color: 'info',
					highlight: true,
					class: 'ring ring-inset ring-info',
				},
				{
					color: 'warning',
					highlight: true,
					class: 'ring ring-inset ring-warning',
				},
				{
					color: 'error',
					highlight: true,
					class: 'ring ring-inset ring-error',
				},
				{
					color: 'neutral',
					variant: ['outline', 'subtle'],
					class:
						'outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: ['soft', 'ghost'],
					class: 'outline-inverted/25 focus-visible:outline-3',
				},
				{
					color: 'neutral',
					highlight: true,
					class: 'ring ring-inset ring-inverted',
				},
				{
					orientation: 'horizontal',
					decrement: false,
					class: 'text-start',
				},
				{
					decrement: true,
					size: 'xs',
					class: 'ps-7',
				},
				{
					decrement: true,
					size: 'sm',
					class: 'ps-8',
				},
				{
					decrement: true,
					size: 'md',
					class: 'ps-9',
				},
				{
					decrement: true,
					size: 'lg',
					class: 'ps-10',
				},
				{
					decrement: true,
					size: 'xl',
					class: 'ps-11',
				},
				{
					increment: true,
					size: 'xs',
					class: 'pe-7',
				},
				{
					increment: true,
					size: 'sm',
					class: 'pe-8',
				},
				{
					increment: true,
					size: 'md',
					class: 'pe-9',
				},
				{
					increment: true,
					size: 'lg',
					class: 'pe-10',
				},
				{
					increment: true,
					size: 'xl',
					class: 'pe-11',
				},
				{
					fixed: false,
					size: 'xs',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'sm',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'md',
					class: 'md:text-sm',
				},
				{
					fixed: false,
					size: 'lg',
					class: 'md:text-sm',
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'outline',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/InputNumber.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/input-number.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "InputRating"
description: "A component to display and collect ratings from users."
canonical_url: "https://ui.nuxt.com/docs/components/input-rating"

---

# InputRating

> A component to display and collect ratings from users.

## Usage

Use the `v-model` directive to control the rating value of the InputRating component.

```vue
<script setup lang="ts">
	const value = ref(3);
</script>

<template>
	<UInputRating v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
	<UInputRating :default-value="3" />
</template>
```

### Step

Use the `step` prop to control the granularity of each star. Set it to `0.5` to allow half-star ratings.

```vue
<template>
	<UInputRating
		:step="0.5"
		:default-value="3.5"
	/>
</template>
```

### Length

Use the `length` prop to set the number of stars. Defaults to `5`.

```vue
<template>
	<UInputRating
		:length="10"
		:step="0.5"
		:default-value="7.5"
	/>
</template>
```

### Clearable

Use the `clearable` prop to allow users to clear the rating by clicking on the currently selected value. Defaults to `false`.

```vue
<template>
	<UInputRating
		clearable
		:default-value="3"
	/>
</template>
```

### Hoverable

Use the `hoverable` prop to control whether the rating previews the value when hovering over the stars. Defaults to `false`.

```vue
<template>
	<UInputRating
		hoverable
		:default-value="3"
	/>
</template>
```

### Icon

Use the `icon` prop to customize the icon used for stars. Defaults to `i-lucide-star`.

```vue
<template>
	<UInputRating
		icon="i-lucide-heart"
		:default-value="4"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize the default star icon globally in your `app.config.ts` under `ui.icons.star` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize the default star icon globally in your `vite.config.ts` under `ui.icons.star` key.

### Empty Icon

Use the `empty-icon` prop to customize the icon used for empty stars. If not provided, uses the same icon as `icon`.

```vue
<template>
	<UInputRating
		empty-icon="i-ph-star"
		icon="i-ph-star-fill"
		:default-value="3"
	/>
</template>
```

### Color

Use the `color` prop to change the color of the filled stars.

```vue
<template>
	<UInputRating
		color="neutral"
		:default-value="4"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the stars.

```vue
<template>
	<UInputRating
		size="xl"
		:default-value="4"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the rating. Defaults to `horizontal`.

```vue
<template>
	<UInputRating
		orientation="vertical"
		:default-value="4"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the InputRating component. When disabled, the component has reduced opacity (75%) and shows a `not-allowed` cursor to indicate it's not interactive.

```vue
<template>
	<UInputRating
		disabled
		:default-value="3"
	/>
</template>
```

### Readonly

Use the `readonly` prop to display a rating without allowing user interaction. Unlike `disabled`, it maintains normal appearance (full opacity, default cursor). Use when you want to display a rating that cannot be changed but should look normal.

```vue
<template>
	<UInputRating
		readonly
		:default-value="4.5"
	/>
</template>
```

## API

### Props

```ts
/**
 * Props for the InputRating component
 */
interface InputRatingProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * The id of the rating.
	 */
	id?: string | undefined;
	/**
	 * Make the rating readonly (non-interactive).
	 * @default false
	 */
	readonly?: boolean | undefined;
	/**
	 * The icon displayed for each rating value.
	 * @default appConfig.ui.icons.star
	 */
	icon?: any;
	/**
	 * The icon displayed for empty rating values. Defaults to `icon` when not provided.
	 */
	emptyIcon?: any;
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
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * The orientation of the rating.
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical' | undefined;
	ui?:
		| {
				root?: SlotClass;
				item?: SlotClass;
				indicator?: SlotClass;
				icon?: SlotClass;
				emptyIcon?: SlotClass;
		  }
		| undefined;
	/**
	 * The granularity each rating item is divided into.
	 * @default 1
	 */
	step?: 1 | 0.5 | 0.25 | 0.1 | undefined;
	/**
	 * When `true`, prevents the user from interacting with radio items.
	 */
	disabled?: boolean | undefined;
	/**
	 * When `true`, indicates that the user must set the value before the owning form can be submitted.
	 */
	required?: boolean | undefined;
	/**
	 * The name of the field. Submitted with its owning form as part of a name/value pair.
	 */
	name?: string | undefined;
	/**
	 * The controlled rating value. Can be bound with `v-model`.
	 */
	modelValue?: number | undefined;
	/**
	 * The rating value when initially rendered. Use when you do not need to control the state of the rating.
	 * @default 0
	 */
	defaultValue?: number | undefined;
	/**
	 * The number of rating items to render.
	 * @default 5
	 */
	length?: number | undefined;
	/**
	 * When `true`, clicking the currently selected rating resets the value to `0`.
	 * @default false
	 */
	clearable?: boolean | undefined;
	/**
	 * When `true`, the rating previews the value under the pointer on hover.
	 * @default false
	 */
	hoverable?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the InputRating component
 */
interface InputRatingSlots {
	/**
	 * Rendered for each item. `filled` is `false` for the empty background layer and `true` for the highlighted overlay.
	 */
	item(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the InputRating component
 */
interface InputRatingEmits {
  update:modelValue: (payload: [payload: number]) => void;
  change: (payload: [event: Event]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		inputRating: {
			slots: {
				root: '',
				item: [
					'relative inline-block cursor-pointer select-none rounded-sm has-focus-visible:outline-3',
					'transition',
				],
				indicator:
					'absolute inset-0 overflow-hidden outline-none text-transparent w-(--reka-rating-item-step-width) opacity-(--reka-rating-item-step-opacity) z-(--reka-rating-item-step-z-index)',
				icon: 'block',
				emptyIcon: 'block w-full h-full text-muted pointer-events-none',
			},
			variants: {
				orientation: {
					horizontal: {
						root: 'inline-flex items-center gap-0.5',
					},
					vertical: {
						root: 'inline-flex flex-col items-center gap-0.5',
					},
				},
				size: {
					xs: {
						item: 'size-3',
						icon: 'size-3',
					},
					sm: {
						item: 'size-4',
						icon: 'size-4',
					},
					md: {
						item: 'size-5',
						icon: 'size-5',
					},
					lg: {
						item: 'size-6',
						icon: 'size-6',
					},
					xl: {
						item: 'size-7',
						icon: 'size-7',
					},
				},
				color: {
					primary: {
						indicator: 'data-[state=active]:text-primary',
						item: 'outline-primary/25',
					},
					secondary: {
						indicator: 'data-[state=active]:text-secondary',
						item: 'outline-secondary/25',
					},
					success: {
						indicator: 'data-[state=active]:text-success',
						item: 'outline-success/25',
					},
					info: {
						indicator: 'data-[state=active]:text-info',
						item: 'outline-info/25',
					},
					warning: {
						indicator: 'data-[state=active]:text-warning',
						item: 'outline-warning/25',
					},
					error: {
						indicator: 'data-[state=active]:text-error',
						item: 'outline-error/25',
					},
					neutral: {
						indicator: 'data-[state=active]:text-highlighted',
						item: 'outline-inverted/25',
					},
				},
				readonly: {
					true: {
						root: 'cursor-default',
						item: 'cursor-default',
					},
					false: {},
				},
				disabled: {
					true: {
						root: 'opacity-75 cursor-not-allowed',
						item: 'cursor-not-allowed pointer-events-none',
					},
					false: {},
				},
			},
			compoundVariants: [
				{
					readonly: false,
					disabled: false,
					class: {
						item: 'hover:scale-110',
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

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/InputRating.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/input-rating.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "InputTags"
description: "An input element that displays interactive tags."
canonical_url: "https://ui.nuxt.com/docs/components/input-tags"

---

# InputTags

> An input element that displays interactive tags.

## Usage

Use the `v-model` directive to control the value of the InputTags.

```vue
<script setup lang="ts">
	const value = ref(['Vue']);
</script>

<template>
	<UInputTags v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
	<UInputTags :default-value="['Vue']" />
</template>
```

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<template>
	<UInputTags placeholder="Enter tags..." />
</template>
```

### Max Length

Use the `max-length` prop to set the maximum number of characters allowed in a tag.

```vue
<template>
	<UInputTags :max-length="4" />
</template>
```

### Color

Use the `color` prop to change the ring color when the InputTags is focused.

```vue
<script setup lang="ts">
	const value = ref(['Vue']);
</script>

<template>
	<UInputTags
		v-model="value"
		color="neutral"
		highlight
	/>
</template>
```

> [!NOTE]
>
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variants

Use the `variant` prop to change the appearance of the InputTags.

```vue
<script setup lang="ts">
	const value = ref(['Vue']);
</script>

<template>
	<UInputTags
		v-model="value"
		variant="subtle"
		color="neutral"
		:highlight="false"
	/>
</template>
```

### Sizes

Use the `size` prop to adjust the size of the InputTags.

```vue
<script setup lang="ts">
	const value = ref(['Vue']);
</script>

<template>
	<UInputTags
		v-model="value"
		size="xl"
	/>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the InputTags.

```vue
<script setup lang="ts">
	const value = ref(['Vue']);
</script>

<template>
	<UInputTags
		v-model="value"
		icon="i-lucide-search"
		size="md"
		variant="outline"
	/>
</template>
```

> [!NOTE]
>
> Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the InputTags.

```vue
<script setup lang="ts">
	const value = ref(['Vue']);
</script>

<template>
	<UInputTags
		v-model="value"
		:avatar="{
			src: 'https://github.com/vuejs.png',
			loading: 'lazy',
		}"
		size="md"
		variant="outline"
	/>
</template>
```

### Delete Icon

Use the `delete-icon` prop to customize the delete [Icon](/docs/components/icon) in the tags. Defaults to `i-lucide-x`.

```vue
<script setup lang="ts">
	const value = ref(['Vue']);
</script>

<template>
	<UInputTags
		v-model="value"
		delete-icon="i-lucide-trash"
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

### Loading

Use the `loading` prop to show a loading icon on the InputTags.

```vue
<script setup lang="ts">
	const value = ref(['Vue']);
</script>

<template>
	<UInputTags
		v-model="value"
		loading
		:trailing="false"
	/>
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<script setup lang="ts">
	const value = ref(['Vue']);
</script>

<template>
	<UInputTags
		v-model="value"
		loading
		loading-icon="i-lucide-loader"
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

### Disabled

Use the `disabled` prop to disable the InputTags.

```vue
<script setup lang="ts">
	const value = ref(['Vue']);
</script>

<template>
	<UInputTags
		v-model="value"
		disabled
	/>
</template>
```

## Examples

### Within a FormField

You can use the InputTags within a [FormField](/docs/components/form-field) component to display a label, help text, required indicator, etc.

```vue [InputTagsFormFieldExample.vue]
<script setup lang="ts">
	const tags = ref(['Vue']);
</script>

<template>
	<UFormField
		label="Tags"
		required
	>
		<UInputTags
			v-model="tags"
			placeholder="Enter tags..."
		/>
	</UFormField>
</template>
```

## API

### Props

```ts
/**
 * Props for the InputTags component
 */
interface InputTagsProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  /**
   * The placeholder text when the input is empty.
   */
  placeholder?: string | undefined;
  /**
   * The maximum number of character allowed.
   */
  maxLength?: number | undefined;
  /**
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined;
  /**
   * @default 'outline'
   */
  variant?: "outline" | "soft" | "subtle" | "ghost" | "none" | undefined;
  /**
   * @default 'md'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  autofocus?: boolean | undefined;
  /**
   * @default 0
   */
  autofocusDelay?: number | undefined;
  /**
   * The icon displayed to delete a tag.
   * @default appConfig.ui.icons.close
   */
  deleteIcon?: any;
  /**
   * Highlight the ring color like a focus state.
   */
  highlight?: boolean | undefined;
  /**
   * Keep the mobile text size on all breakpoints.
   */
  fixed?: boolean | undefined;
  ui?: { root?: SlotClass; base?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailing?: SlotClass; trailingIcon?: SlotClass; item?: SlotClass; itemText?: SlotClass; itemDelete?: SlotClass; itemDeleteIcon?: SlotClass; input?: SlotClass; } | undefined;
  /**
   * The controlled value of the tags input. Can be bind as `v-model`.
   */
  modelValue?: null | T[] | undefined;
  /**
   * The value of the tags that should be added. Use when you do not need to control the state of the tags input
   */
  defaultValue?: T[] | undefined;
  /**
   * When `true`, allow adding tags on paste. Work in conjunction with delimiter prop.
   */
  addOnPaste?: boolean | undefined;
  /**
   * When `true` allow adding tags on tab keydown
   */
  addOnTab?: boolean | undefined;
  /**
   * When `true` allow adding tags blur input
   */
  addOnBlur?: boolean | undefined;
  /**
   * When `true`, allow duplicated tags.
   */
  duplicate?: boolean | undefined;
  /**
   * When `true`, prevents the user from interacting with the tags input.
   */
  disabled?: boolean | undefined;
  /**
   * The character or regular expression to trigger the addition of a new tag. Also used to split tags for `@paste` event
   */
  delimiter?: string | RegExp | undefined;
  /**
   * Maximum number of tags.
   */
  max?: number | undefined;
  id?: string | undefined;
  /**
   * Convert the input value to the desired type. Mandatory when using objects as values and using `TagsInputInput`
   */
  convertValue?: (value: string): T | undefined;
  /**
   * Display the value of the tag. Useful when you want to apply modifications to the value like adding a suffix or when using object as values
   */
  displayValue?: (value: T): string | undefined;
  /**
   * The name of the field. Submitted with its owning form as part of a name/value pair.
   */
  name?: string | undefined;
  /**
   * When `true`, indicates that the user must set the value before the owning form can be submitted.
   */
  required?: boolean | undefined;
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
  enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
  form?: string | undefined;
  formaction?: string | undefined;
  formenctype?: string | undefined;
  formmethod?: string | undefined;
  formnovalidate?: false | true | "true" | "false" | undefined;
  formtarget?: string | undefined;
  list?: string | undefined;
  readonly?: false | true | "true" | "false" | undefined;
  autocomplete?: "on" | "off" | string & {} | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
>
> This component also supports all native `<input>` HTML attributes.

### Slots

```ts
/**
 * Slots for the InputTags component
 */
interface InputTagsSlots {
  leading(): any;
  default(): any;
  trailing(): any;
  item-text(): any;
  item-delete(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the InputTags component
 */
interface InputTagsEmits {
  change: (payload: [event: Event]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  focus: (payload: [event: FocusEvent]) => void;
  update:modelValue: (payload: [payload: T[]]) => void;
  invalid: (payload: [payload: T]) => void;
  addTag: (payload: [payload: T]) => void;
  removeTag: (payload: [payload: T]) => void;
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
          inputRef
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
          HTMLInputElement
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
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		inputTags: {
			slots: {
				root: ['relative inline-flex items-center', 'flex-wrap'],
				base: ['rounded-md', 'transition-colors'],
				leading: 'absolute inset-y-0 start-0 flex items-center',
				leadingIcon: 'shrink-0 text-dimmed',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailing: 'absolute inset-y-0 end-0 flex items-center',
				trailingIcon: 'shrink-0 text-dimmed',
				item: 'px-1.5 py-0.5 rounded-sm font-medium inline-flex items-center gap-0.5 ring ring-inset ring-accented bg-elevated text-default data-disabled:cursor-not-allowed data-disabled:opacity-75 wrap-anywhere data-[state="active"]:bg-accented',
				itemText: '',
				itemDelete: [
					'inline-flex items-center rounded-xs text-dimmed hover:text-default hover:bg-accented/75 disabled:pointer-events-none',
					'transition-colors',
				],
				itemDeleteIcon: 'shrink-0',
				input:
					'flex-1 border-0 bg-transparent placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
			},
			variants: {
				fieldGroup: {
					horizontal:
						'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
					vertical:
						'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
				},
				size: {
					xs: {
						base: 'px-2 py-1 text-sm/4 gap-1',
						leading: 'ps-2',
						trailing: 'pe-2',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						item: 'text-[10px]/3',
						itemDeleteIcon: 'size-3',
					},
					sm: {
						base: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						item: 'text-[10px]/3',
						itemDeleteIcon: 'size-3',
					},
					md: {
						base: 'px-2.5 py-1.5 text-base/5 gap-1.5',
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						item: 'text-xs',
						itemDeleteIcon: 'size-3.5',
					},
					lg: {
						base: 'px-3 py-2 text-base/5 gap-2',
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						item: 'text-xs',
						itemDeleteIcon: 'size-3.5',
					},
					xl: {
						base: 'px-3 py-2 text-base gap-2',
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-6',
						leadingAvatarSize: 'xs',
						trailingIcon: 'size-6',
						item: 'text-sm',
						itemDeleteIcon: 'size-4',
					},
				},
				variant: {
					outline: 'text-highlighted bg-default ring ring-inset ring-accented',
					soft: 'text-highlighted bg-elevated/50 hover:bg-elevated has-focus:bg-elevated disabled:bg-elevated/50',
					subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
					ghost:
						'text-highlighted bg-transparent hover:bg-elevated has-focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
					none: 'text-highlighted bg-transparent has-focus:outline-none',
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
				leading: {
					true: '',
				},
				trailing: {
					true: '',
				},
				loading: {
					true: '',
				},
				highlight: {
					true: '',
				},
				fixed: {
					false: '',
				},
				type: {
					file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: ['outline', 'subtle'],
					class:
						'outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: ['outline', 'subtle'],
					class:
						'outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: ['outline', 'subtle'],
					class:
						'outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: ['outline', 'subtle'],
					class:
						'outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: ['outline', 'subtle'],
					class:
						'outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: ['outline', 'subtle'],
					class:
						'outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: ['soft', 'ghost'],
					class: 'outline-primary/25 has-focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: ['soft', 'ghost'],
					class: 'outline-secondary/25 has-focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: ['soft', 'ghost'],
					class: 'outline-success/25 has-focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: ['soft', 'ghost'],
					class: 'outline-info/25 has-focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: ['soft', 'ghost'],
					class: 'outline-warning/25 has-focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: ['soft', 'ghost'],
					class: 'outline-error/25 has-focus-visible:outline-3',
				},
				{
					color: 'primary',
					highlight: true,
					class: 'ring ring-inset ring-primary',
				},
				{
					color: 'secondary',
					highlight: true,
					class: 'ring ring-inset ring-secondary',
				},
				{
					color: 'success',
					highlight: true,
					class: 'ring ring-inset ring-success',
				},
				{
					color: 'info',
					highlight: true,
					class: 'ring ring-inset ring-info',
				},
				{
					color: 'warning',
					highlight: true,
					class: 'ring ring-inset ring-warning',
				},
				{
					color: 'error',
					highlight: true,
					class: 'ring ring-inset ring-error',
				},
				{
					color: 'neutral',
					variant: ['outline', 'subtle'],
					class:
						'outline-inverted/25 has-focus-visible:outline-3 has-focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: ['soft', 'ghost'],
					class: 'outline-inverted/25 has-focus-visible:outline-3',
				},
				{
					color: 'neutral',
					highlight: true,
					class: 'ring ring-inset ring-inverted',
				},
				{
					leading: true,
					size: 'xs',
					class: 'ps-7',
				},
				{
					leading: true,
					size: 'sm',
					class: 'ps-8',
				},
				{
					leading: true,
					size: 'md',
					class: 'ps-9',
				},
				{
					leading: true,
					size: 'lg',
					class: 'ps-10',
				},
				{
					leading: true,
					size: 'xl',
					class: 'ps-11',
				},
				{
					trailing: true,
					size: 'xs',
					class: 'pe-7',
				},
				{
					trailing: true,
					size: 'sm',
					class: 'pe-8',
				},
				{
					trailing: true,
					size: 'md',
					class: 'pe-9',
				},
				{
					trailing: true,
					size: 'lg',
					class: 'pe-10',
				},
				{
					trailing: true,
					size: 'xl',
					class: 'pe-11',
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
				{
					fixed: false,
					size: 'xs',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'sm',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'md',
					class: 'md:text-sm',
				},
				{
					fixed: false,
					size: 'lg',
					class: 'md:text-sm',
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'outline',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/InputTags.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/input-tags.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "InputTime"
description: "An input for selecting a time."
canonical_url: "https://ui.nuxt.com/docs/components/input-time"

---

# InputTime

> An input for selecting a time.

## Usage

Use the `v-model` directive to control the selected time.

```vue
<script setup lang="ts">
	import { Time } from '@internationalized/date';

	const value = shallowRef(new Time(12, 30, 0));
</script>

<template>
	<UInputTime v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
	import { Time } from '@internationalized/date';

	const defaultValue = shallowRef(new Time(9, 45, 0));
</script>

<template>
	<UInputTime :default-value="defaultValue" />
</template>
```

**Nuxt:**

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/nuxt#locale
>
> This component uses the `@internationalized/date` package for locale-aware formatting. The time format is determined by the `locale` prop of the App component.

**Vue:**

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/vue#locale
>
> This component uses the `@internationalized/date` package for locale-aware formatting. The time format is determined by the `locale` prop of the App component.

### Range

Use the `range` prop to enable time range selection with start and end times.

```vue
<script setup lang="ts">
	import { Time } from '@internationalized/date';

	const value = shallowRef({
		start: new Time(9, 0, 0),
		end: new Time(17, 30, 0),
	});
</script>

<template>
	<UInputTime
		range
		v-model="value"
	/>
</template>
```

### Hour Cycle

Use the `hour-cycle` prop to change the hour cycle of the InputTime. Defaults to `12`.

```vue
<script setup lang="ts">
	import { Time } from '@internationalized/date';

	const defaultValue = shallowRef(new Time(16, 30, 0));
</script>

<template>
	<UInputTime
		:hour-cycle="24"
		:default-value="defaultValue"
	/>
</template>
```

### Color

Use the `color` prop to change the color of the InputTime.

```vue
<template>
	<UInputTime
		color="neutral"
		highlight
	/>
</template>
```

> [!NOTE]
>
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the InputTime.

```vue
<template>
	<UInputTime variant="subtle" />
</template>
```

### Size

Use the `size` prop to change the size of the InputTime.

```vue
<template>
	<UInputTime size="xl" />
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the InputTime.

```vue
<template>
	<UInputTime icon="i-lucide-clock" />
</template>
```

> [!NOTE]
>
> Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

### Separator Icon

Use the `separator-icon` prop to change the [Icon](/docs/components/icon) of the range separator. Defaults to `i-lucide-minus`.

```vue
<template>
	<UInputTime
		range
		separator-icon="i-lucide-arrow-right"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.minus` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.minus` key.

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the InputTime.

```vue
<template>
	<UInputTime
		:avatar="{
			src: 'https://github.com/vuejs.png',
			loading: 'lazy',
		}"
		size="md"
		variant="outline"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the InputTime.

```vue
<template>
	<UInputTime disabled />
</template>
```

## Examples

### Within a FormField

You can use the InputTime within a [FormField](/docs/components/form-field) component to display a label, help text, required indicator, etc.

```vue [InputTimeFormFieldExample.vue]
<script setup lang="ts">
	import { Time } from '@internationalized/date';

	const time = shallowRef(new Time(12, 30, 0));
</script>

<template>
	<UFormField
		label="Time"
		help="Specify the time"
		required
	>
		<UInputTime v-model="time" />
	</UFormField>
</template>
```

## API

### Props

```ts
/**
 * Props for the InputTime component
 */
interface InputTimeProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  /**
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined;
  /**
   * @default 'outline'
   */
  variant?: "outline" | "soft" | "subtle" | "ghost" | "none" | undefined;
  /**
   * @default 'md'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  /**
   * Highlight the ring color like a focus state.
   */
  highlight?: boolean | undefined;
  /**
   * Keep the mobile text size on all breakpoints.
   */
  fixed?: boolean | undefined;
  autofocus?: boolean | undefined;
  /**
   * @default 0
   */
  autofocusDelay?: number | undefined;
  /**
   * The icon to use as a range separator.
   * @default appConfig.ui.icons.minus
   */
  separatorIcon?: any;
  /**
   * Enable time range selection.
   * @default false
   */
  range?: R | undefined;
  defaultValue?: Time | CalendarDateTime | ZonedDateTime;
  modelValue?: null | Time | CalendarDateTime | ZonedDateTime;
  ui?: { base?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailing?: SlotClass; trailingIcon?: SlotClass; segment?: SlotClass; separatorIcon?: SlotClass; } | undefined;
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
  defaultPlaceholder?: Time | CalendarDateTime | ZonedDateTime;
  placeholder?: Time | CalendarDateTime | ZonedDateTime;
  /**
   * The hour cycle used for formatting times. Defaults to the local preference
   */
  hourCycle?: 12 | 24 | undefined;
  /**
   * The stepping interval for the time fields. Defaults to `1`.
   */
  step?: DateStep | undefined;
  /**
   * Whether to enforce snapping the value to the nearest step increment after input. Defaults to `false`.
   */
  stepSnapping?: boolean | undefined;
  /**
   * The granularity to use for formatting times. Defaults to minute if a Time is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity
   */
  granularity?: "hour" | "minute" | "second" | undefined;
  /**
   * Whether or not to hide the time zone segment of the field
   */
  hideTimeZone?: boolean | undefined;
  maxValue?: Time | CalendarDateTime | ZonedDateTime;
  minValue?: Time | CalendarDateTime | ZonedDateTime;
  /**
   * The locale to use for formatting dates
   */
  locale?: string | undefined;
  /**
   * Whether or not the time field is disabled
   */
  disabled?: boolean | undefined;
  /**
   * Whether or not the time field is readonly
   */
  readonly?: boolean | undefined;
  /**
   * Id of the element
   */
  id?: string | undefined;
  /**
   * The name of the field. Submitted with its owning form as part of a name/value pair.
   */
  name?: string | undefined;
  /**
   * When `true`, indicates that the user must set the value before the owning form can be submitted.
   */
  required?: boolean | undefined;
  /**
   * A function that returns whether or not a time is unavailable
   */
  isTimeUnavailable?: (date: DateValue): boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the InputTime component
 */
interface InputTimeSlots {
	leading(): any;
	default(): any;
	trailing(): any;
	separator(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the InputTime component
 */
interface InputTimeEmits {
  update:modelValue: (payload: [value: InputTimeModelValue<R>]) => void;
  update:placeholder: (payload: [date: TimeValue] & [date: TimeValue]) => void;
  change: (payload: [event: Event]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  focus: (payload: [event: FocusEvent]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		inputTime: {
			slots: {
				base: [
					'group relative inline-flex items-center rounded-md select-none',
					'transition-colors',
				],
				leading: 'absolute inset-y-0 start-0 flex items-center',
				leadingIcon: 'shrink-0 text-dimmed',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailing: 'absolute inset-y-0 end-0 flex items-center',
				trailingIcon: 'shrink-0 text-dimmed',
				segment: [
					'rounded-sm text-center outline-hidden data-placeholder:text-dimmed data-[segment=literal]:text-muted data-invalid:text-error data-disabled:cursor-not-allowed data-disabled:opacity-75',
					'transition-colors',
				],
				separatorIcon: 'shrink-0 size-4 text-muted',
			},
			variants: {
				fieldGroup: {
					horizontal:
						'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
					vertical:
						'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
				},
				size: {
					xs: {
						base: ['px-2 py-1 text-sm/4 gap-1', 'gap-0.25'],
						leading: 'ps-2',
						trailing: 'pe-2',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						segment: 'not-data-[segment=literal]:w-8',
					},
					sm: {
						base: ['px-2.5 py-1.5 text-sm/4 gap-1.5', 'gap-0.5'],
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						segment: 'not-data-[segment=literal]:w-8',
					},
					md: {
						base: ['px-2.5 py-1.5 text-base/5 gap-1.5', 'gap-0.5'],
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						segment: 'not-data-[segment=literal]:w-9',
					},
					lg: {
						base: ['px-3 py-2 text-base/5 gap-2', 'gap-0.75'],
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						segment: 'not-data-[segment=literal]:w-9',
					},
					xl: {
						base: ['px-3 py-2 text-base gap-2', 'gap-0.75'],
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-6',
						leadingAvatarSize: 'xs',
						trailingIcon: 'size-6',
						segment: 'not-data-[segment=literal]:w-10',
					},
				},
				variant: {
					outline: 'text-highlighted bg-default ring ring-inset ring-accented',
					soft: 'text-highlighted bg-elevated/50 hover:bg-elevated has-focus:bg-elevated disabled:bg-elevated/50',
					subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
					ghost:
						'text-highlighted bg-transparent hover:bg-elevated has-focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
					none: 'text-highlighted bg-transparent has-focus:outline-none',
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
				leading: {
					true: '',
				},
				trailing: {
					true: '',
				},
				loading: {
					true: '',
				},
				highlight: {
					true: '',
				},
				fixed: {
					false: '',
				},
				type: {
					file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: ['outline', 'subtle'],
					class:
						'outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: ['outline', 'subtle'],
					class:
						'outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: ['outline', 'subtle'],
					class:
						'outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: ['outline', 'subtle'],
					class:
						'outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: ['outline', 'subtle'],
					class:
						'outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: ['outline', 'subtle'],
					class:
						'outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: ['soft', 'ghost'],
					class: 'outline-primary/25 has-focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: ['soft', 'ghost'],
					class: 'outline-secondary/25 has-focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: ['soft', 'ghost'],
					class: 'outline-success/25 has-focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: ['soft', 'ghost'],
					class: 'outline-info/25 has-focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: ['soft', 'ghost'],
					class: 'outline-warning/25 has-focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: ['soft', 'ghost'],
					class: 'outline-error/25 has-focus-visible:outline-3',
				},
				{
					color: 'primary',
					highlight: true,
					class: 'ring ring-inset ring-primary',
				},
				{
					color: 'secondary',
					highlight: true,
					class: 'ring ring-inset ring-secondary',
				},
				{
					color: 'success',
					highlight: true,
					class: 'ring ring-inset ring-success',
				},
				{
					color: 'info',
					highlight: true,
					class: 'ring ring-inset ring-info',
				},
				{
					color: 'warning',
					highlight: true,
					class: 'ring ring-inset ring-warning',
				},
				{
					color: 'error',
					highlight: true,
					class: 'ring ring-inset ring-error',
				},
				{
					color: 'neutral',
					variant: ['outline', 'subtle'],
					class:
						'outline-inverted/25 has-focus-visible:outline-3 has-focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: ['soft', 'ghost'],
					class: 'outline-inverted/25 has-focus-visible:outline-3',
				},
				{
					color: 'neutral',
					highlight: true,
					class: 'ring ring-inset ring-inverted',
				},
				{
					leading: true,
					size: 'xs',
					class: 'ps-7',
				},
				{
					leading: true,
					size: 'sm',
					class: 'ps-8',
				},
				{
					leading: true,
					size: 'md',
					class: 'ps-9',
				},
				{
					leading: true,
					size: 'lg',
					class: 'ps-10',
				},
				{
					leading: true,
					size: 'xl',
					class: 'ps-11',
				},
				{
					trailing: true,
					size: 'xs',
					class: 'pe-7',
				},
				{
					trailing: true,
					size: 'sm',
					class: 'pe-8',
				},
				{
					trailing: true,
					size: 'md',
					class: 'pe-9',
				},
				{
					trailing: true,
					size: 'lg',
					class: 'pe-10',
				},
				{
					trailing: true,
					size: 'xl',
					class: 'pe-11',
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
				{
					fixed: false,
					size: 'xs',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'sm',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'md',
					class: 'md:text-sm',
				},
				{
					fixed: false,
					size: 'lg',
					class: 'md:text-sm',
				},
				{
					variant: 'outline',
					class: {
						segment: 'focus:bg-elevated',
					},
				},
				{
					variant: 'soft',
					class: {
						segment: 'focus:bg-accented/50 group-hover:focus:bg-accented',
					},
				},
				{
					variant: 'subtle',
					class: {
						segment: 'focus:bg-accented',
					},
				},
				{
					variant: 'ghost',
					class: {
						segment: 'focus:bg-elevated group-hover:focus:bg-accented',
					},
				},
				{
					variant: 'none',
					class: {
						segment: 'focus:bg-elevated',
					},
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'outline',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/InputTime.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/input-time.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Listbox"
description: "A selectable list of items with search, virtualization and rich item rendering."
canonical_url: "https://ui.nuxt.com/docs/components/listbox"

---

# Listbox

> A selectable list of items with search, virtualization and rich item rendering.

## Usage

Use the `v-model` directive to control the value of the Listbox or the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'France',
			icon: 'i-lucide-map-pin',
			value: 'FR',
		},
		{
			label: 'Germany',
			icon: 'i-lucide-map-pin',
			value: 'DE',
		},
		{
			label: 'Italy',
			icon: 'i-lucide-map-pin',
			value: 'IT',
		},
		{
			label: 'Spain',
			icon: 'i-lucide-map-pin',
			value: 'ES',
		},
		{
			label: 'Netherlands',
			icon: 'i-lucide-map-pin',
			value: 'NL',
		},
		{
			label: 'Poland',
			icon: 'i-lucide-map-pin',
			value: 'PL',
		},
		{
			label: 'Belgium',
			icon: 'i-lucide-map-pin',
			value: 'BE',
		},
		{
			label: 'Portugal',
			icon: 'i-lucide-map-pin',
			value: 'PT',
		},
		{
			label: 'Austria',
			icon: 'i-lucide-map-pin',
			value: 'AT',
		},
		{
			label: 'Sweden',
			icon: 'i-lucide-map-pin',
			value: 'SE',
		},
	]);
	const value = ref({
		label: 'France',
		icon: 'i-lucide-map-pin',
		value: 'FR',
	});
</script>

<template>
	<UListbox
		v-model="value"
		:items="items"
	/>
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- [`description?: string`](#with-description-in-items)
- [`type?: "label" | "separator" | "item"`](#with-items-type)
- [`icon?: string`](#with-icon-in-items)
- [`avatar?: AvatarProps`](#with-avatar-in-items)
- [`chip?: ChipProps`](#with-chip-in-items)
- `disabled?: boolean`
- `onSelect?: (e: Event) => void`
- `class?: any`
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, ... }`

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'France',
			description: 'The Hexagon',
			icon: 'i-lucide-map-pin',
			value: 'FR',
		},
		{
			label: 'Germany',
			description: 'The Federal Republic',
			icon: 'i-lucide-map-pin',
			value: 'DE',
		},
		{
			label: 'Italy',
			description: 'The Boot',
			icon: 'i-lucide-map-pin',
			value: 'IT',
		},
		{
			label: 'Spain',
			description: 'The Bull Skin',
			icon: 'i-lucide-map-pin',
			value: 'ES',
		},
	]);
</script>

<template>
	<UListbox :items="items" />
</template>
```

You can also pass an array of arrays to the `items` prop to display separated groups of items.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[][]>([
		[
			{
				label: 'France',
				icon: 'i-lucide-map-pin',
				value: 'FR',
			},
			{
				label: 'Germany',
				icon: 'i-lucide-map-pin',
				value: 'DE',
			},
			{
				label: 'Italy',
				icon: 'i-lucide-map-pin',
				value: 'IT',
			},
		],
		[
			{
				label: 'Brazil',
				icon: 'i-lucide-map-pin',
				value: 'BR',
			},
			{
				label: 'Argentina',
				icon: 'i-lucide-map-pin',
				value: 'AR',
			},
		],
	]);
</script>

<template>
	<UListbox :items="items" />
</template>
```

### Multiple

Use the `multiple` prop to allow selecting multiple items. When enabled, the `v-model` will be an array.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'France',
			icon: 'i-lucide-map-pin',
			value: 'FR',
		},
		{
			label: 'Germany',
			icon: 'i-lucide-map-pin',
			value: 'DE',
		},
		{
			label: 'Italy',
			icon: 'i-lucide-map-pin',
			value: 'IT',
		},
		{
			label: 'Spain',
			icon: 'i-lucide-map-pin',
			value: 'ES',
		},
	]);
</script>

<template>
	<UListbox
		multiple
		:items="items"
	/>
</template>
```

### Value Key

You can choose to bind a single property of the object rather than the whole object by using the `value-key` prop. Defaults to `undefined`.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'France',
			icon: 'i-lucide-map-pin',
			value: 'FR',
		},
		{
			label: 'Germany',
			icon: 'i-lucide-map-pin',
			value: 'DE',
		},
		{
			label: 'Italy',
			icon: 'i-lucide-map-pin',
			value: 'IT',
		},
		{
			label: 'Spain',
			icon: 'i-lucide-map-pin',
			value: 'ES',
		},
	]);
	const value = ref('FR');
</script>

<template>
	<UListbox
		v-model="value"
		value-key="value"
		:items="items"
		class="w-full"
	/>
</template>
```

### Filter

Use the `filter` prop to display a filter input or pass an object to customize the [Input](/docs/components/input) component. Defaults to `false`.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'France',
			icon: 'i-lucide-map-pin',
			value: 'FR',
		},
		{
			label: 'Germany',
			icon: 'i-lucide-map-pin',
			value: 'DE',
		},
		{
			label: 'Italy',
			icon: 'i-lucide-map-pin',
			value: 'IT',
		},
		{
			label: 'Spain',
			icon: 'i-lucide-map-pin',
			value: 'ES',
		},
		{
			label: 'Netherlands',
			icon: 'i-lucide-map-pin',
			value: 'NL',
		},
		{
			label: 'Poland',
			icon: 'i-lucide-map-pin',
			value: 'PL',
		},
	]);
</script>

<template>
	<UListbox
		:filter="{
			placeholder: 'Filter...',
			icon: 'i-lucide-search',
		}"
		:items="items"
	/>
</template>
```

### Selected Icon

Use the `selected-icon` prop to customize the icon when an item is selected. Defaults to `i-lucide-check`.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'France',
			icon: 'i-lucide-map-pin',
			value: 'FR',
		},
		{
			label: 'Germany',
			icon: 'i-lucide-map-pin',
			value: 'DE',
		},
		{
			label: 'Italy',
			icon: 'i-lucide-map-pin',
			value: 'IT',
		},
		{
			label: 'Spain',
			icon: 'i-lucide-map-pin',
			value: 'ES',
		},
	]);
	const value = ref('FR');
</script>

<template>
	<UListbox
		v-model="value"
		selected-icon="i-lucide-flame"
		value-key="value"
		:items="items"
		class="w-full"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Listbox.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'France',
			icon: 'i-lucide-map-pin',
			value: 'FR',
		},
		{
			label: 'Germany',
			icon: 'i-lucide-map-pin',
			value: 'DE',
		},
		{
			label: 'Italy',
			icon: 'i-lucide-map-pin',
			value: 'IT',
		},
		{
			label: 'Spain',
			icon: 'i-lucide-map-pin',
			value: 'ES',
		},
	]);
</script>

<template>
	<UListbox
		size="xl"
		:items="items"
	/>
</template>
```

### Loading

Use the `loading` prop to display a loading indicator. Use the `loading-icon` prop to customize the icon.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'France',
			icon: 'i-lucide-map-pin',
			value: 'FR',
		},
		{
			label: 'Germany',
			icon: 'i-lucide-map-pin',
			value: 'DE',
		},
	]);
</script>

<template>
	<UListbox
		loading
		:items="items"
	/>
</template>
```

### Disabled

Use the `disabled` prop to prevent any user interaction with the Listbox.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'France',
			icon: 'i-lucide-map-pin',
			value: 'FR',
		},
		{
			label: 'Germany',
			icon: 'i-lucide-map-pin',
			value: 'DE',
		},
		{
			label: 'Italy',
			icon: 'i-lucide-map-pin',
			value: 'IT',
		},
		{
			label: 'Spain',
			icon: 'i-lucide-map-pin',
			value: 'ES',
		},
	]);
</script>

<template>
	<UListbox
		disabled
		:items="items"
	/>
</template>
```

## Examples

### With items type

You can use the `type` property with `separator` to display a separator between items or `label` to display a label.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[][]>([
		[
			{
				type: 'label',
				label: 'Fruits',
			},
			{
				label: 'Apple',
			},
			{
				label: 'Banana',
			},
			{
				label: 'Blueberry',
			},
			{
				label: 'Grapes',
			},
			{
				label: 'Pineapple',
			},
		],
		[
			{
				type: 'label',
				label: 'Vegetables',
			},
			{
				label: 'Aubergine',
			},
			{
				label: 'Broccoli',
			},
			{
				label: 'Carrot',
			},
			{
				label: 'Courgette',
			},
			{
				label: 'Leek',
			},
		],
	]);
</script>

<template>
	<UListbox :items="items" />
</template>
```

> [!NOTE]
>
> When using `label` items as group headings, pass an array of arrays so a label gets filtered out together with its group when searching.

### With icon in items

You can use the `icon` property to display an [Icon](/docs/components/icon) inside the items.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'Backlog',
			icon: 'i-lucide-circle-help',
			value: 'backlog',
		},
		{
			label: 'Todo',
			icon: 'i-lucide-circle-plus',
			value: 'todo',
		},
		{
			label: 'In Progress',
			icon: 'i-lucide-circle-arrow-up',
			value: 'in_progress',
		},
		{
			label: 'Done',
			icon: 'i-lucide-circle-check',
			value: 'done',
		},
	]);
</script>

<template>
	<UListbox :items="items" />
</template>
```

### With avatar in items

You can use the `avatar` property to display an [Avatar](/docs/components/avatar) inside the items.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'benjamincanac',
			avatar: {
				src: 'https://github.com/benjamincanac.png',
			},
		},
		{
			label: 'romhml',
			avatar: {
				src: 'https://github.com/romhml.png',
			},
		},
		{
			label: 'atinux',
			avatar: {
				src: 'https://github.com/atinux.png',
			},
		},
		{
			label: 'HugoRCD',
			avatar: {
				src: 'https://github.com/HugoRCD.png',
			},
		},
	]);
</script>

<template>
	<UListbox :items="items" />
</template>
```

### With chip in items

You can use the `chip` property to display a [Chip](/docs/components/chip) inside the items.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'bug',
			chip: {
				color: 'error',
			},
		},
		{
			label: 'feature',
			chip: {
				color: 'success',
			},
		},
		{
			label: 'enhancement',
			chip: {
				color: 'info',
			},
		},
	]);
</script>

<template>
	<UListbox :items="items" />
</template>
```

### With description in items

You can use the `description` property to display additional text below the label.

```vue
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items = ref<ListboxItem[]>([
		{
			label: 'France',
			description: 'The Hexagon',
			icon: 'i-lucide-map-pin',
			value: 'FR',
		},
		{
			label: 'Germany',
			description: 'The Federal Republic',
			icon: 'i-lucide-map-pin',
			value: 'DE',
		},
		{
			label: 'Italy',
			description: 'The Boot',
			icon: 'i-lucide-map-pin',
			value: 'IT',
		},
		{
			label: 'Spain',
			description: 'The Bull Skin',
			icon: 'i-lucide-map-pin',
			value: 'ES',
		},
	]);
</script>

<template>
	<UListbox :items="items" />
</template>
```

### Control selected item(s)

You can control the selected item by using the `default-value` prop or the `v-model` directive.

```vue [ListboxModelValueExample.vue]
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items: ListboxItem[] = [
		{ label: 'France', icon: 'i-lucide-map-pin', value: 'FR' },
		{ label: 'Germany', icon: 'i-lucide-map-pin', value: 'DE' },
		{ label: 'Italy', icon: 'i-lucide-map-pin', value: 'IT' },
		{ label: 'Spain', icon: 'i-lucide-map-pin', value: 'ES' },
		{ label: 'Netherlands', icon: 'i-lucide-map-pin', value: 'NL' },
		{ label: 'Poland', icon: 'i-lucide-map-pin', value: 'PL' },
	];

	const value = ref<ListboxItem>(items[2]!);
</script>

<template>
	<UListbox
		v-model="value"
		:items="items"
		class="w-full"
	/>
</template>
```

### Control search term

Use the `v-model:search-term` directive to control the search term.

```vue [ListboxSearchTermExample.vue]
<script setup lang="ts">
	const searchTerm = ref('F');
	const items = ref([
		{ label: 'France', icon: 'i-lucide-map-pin', value: 'FR' },
		{ label: 'Germany', icon: 'i-lucide-map-pin', value: 'DE' },
		{ label: 'Italy', icon: 'i-lucide-map-pin', value: 'IT' },
		{ label: 'Spain', icon: 'i-lucide-map-pin', value: 'ES' },
		{ label: 'Netherlands', icon: 'i-lucide-map-pin', value: 'NL' },
		{ label: 'Poland', icon: 'i-lucide-map-pin', value: 'PL' },
	]);
	const value = ref();
</script>

<template>
	<UListbox
		v-model="value"
		v-model:search-term="searchTerm"
		filter
		:items="items"
		class="w-full"
	/>
</template>
```

### With ignore filter

Set the `ignore-filter` prop to `true` to disable the internal search and use your own search logic.

```vue [ListboxIgnoreFilterExample.vue]
<script setup lang="ts">
	import { refDebounced } from '@vueuse/core';

	const searchTerm = ref('');
	const searchTermDebounced = refDebounced(searchTerm, 200);

	const {
		data: users,
		status,
		execute,
	} = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
		key: 'listbox-users-search',
		params: { q: searchTermDebounced },
		transform: (data: { id: number; name: string }[]) => {
			return data?.map((user) => ({
				label: user.name,
				value: String(user.id),
				avatar: {
					src: `https://i.pravatar.cc/120?img=${user.id}`,
					loading: 'lazy' as const,
				},
			}));
		},
		immediate: false,
	});

	onMounted(() => {
		execute();
	});
</script>

<template>
	<UListbox
		v-model:search-term="searchTerm"
		:items="users || []"
		:filter="{
			icon: 'i-lucide-search',
			loading: status === 'pending',
		}"
		ignore-filter
		class="w-full"
	/>
</template>
```

> [!NOTE]
>
> This example uses [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) to debounce the API calls.

### With filter fields

Use the `filter-fields` prop with an array of fields to filter on. Defaults to `[labelKey]`.

```vue [ListboxFilterFieldsExample.vue]
<script setup lang="ts">
	const {
		data: users,
		status,
		execute,
	} = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
		key: 'typicode-users-email',
		transform: (data: { id: number; name: string; email: string }[]) => {
			return data?.map((user) => ({
				label: user.name,
				email: user.email,
				value: String(user.id),
				avatar: {
					src: `https://i.pravatar.cc/120?img=${user.id}`,
					loading: 'lazy' as const,
				},
			}));
		},
		immediate: false,
	});

	onMounted(() => {
		execute();
	});
</script>

<template>
	<UListbox
		:items="users || []"
		:loading="status === 'pending'"
		:filter-fields="['label', 'email']"
		filter
		class="w-full"
	>
		<template #item-label="{ item }">
			{{ item.label }}

			<span class="text-muted">
				{{ item.email }}
			</span>
		</template>
	</UListbox>
</template>
```

### With virtualization

Use the `virtualize` prop to enable virtualization for large lists as a boolean or an object with options like `{ estimateSize: 32, overscan: 12 }`.

```vue [ListboxVirtualizeExample.vue]
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items: ListboxItem[] = Array.from({ length: 1000 }, (_, i) => ({
		label: `Item ${i + 1}`,
		icon: 'i-lucide-file',
		value: i + 1,
	}));

	const value = ref<ListboxItem[]>([]);
</script>

<template>
	<UListbox
		v-model="value"
		:items="items"
		multiple
		virtualize
		class="w-full"
	/>
</template>
```

### As a transfer list

You can compose two Listbox components with [Button](/docs/components/button) controls to build a transfer list pattern.

```vue [ListboxTransferListExample.vue]
<script setup lang="ts">
	import type { ListboxItem } from '@nuxt/ui';

	const items: ListboxItem[] = [
		{ label: 'France', icon: 'i-lucide-map-pin', value: 'FR' },
		{ label: 'Germany', icon: 'i-lucide-map-pin', value: 'DE' },
		{ label: 'Italy', icon: 'i-lucide-map-pin', value: 'IT' },
		{ label: 'Spain', icon: 'i-lucide-map-pin', value: 'ES' },
		{ label: 'Netherlands', icon: 'i-lucide-map-pin', value: 'NL' },
		{ label: 'Poland', icon: 'i-lucide-map-pin', value: 'PL' },
		{ label: 'Belgium', icon: 'i-lucide-map-pin', value: 'BE' },
		{ label: 'Portugal', icon: 'i-lucide-map-pin', value: 'PT' },
	];

	const targetItems = ref<ListboxItem[]>([]);
	const sourceSelection = ref<ListboxItem[]>([]);
	const targetSelection = ref<ListboxItem[]>([]);

	const sourceItems = computed(() =>
		items.filter(
			(item) => !targetItems.value.some((t) => t.value === item.value),
		),
	);

	function transferSelected() {
		targetItems.value = [...targetItems.value, ...sourceSelection.value];
		sourceSelection.value = [];
	}

	function removeSelected() {
		targetItems.value = targetItems.value.filter(
			(item) => !targetSelection.value.some((t) => t.value === item.value),
		);
		targetSelection.value = [];
	}
</script>

<template>
	<div class="flex items-stretch gap-4 w-full">
		<div class="flex flex-col flex-1 gap-1">
			<span class="text-sm font-medium text-highlighted">Available</span>

			<UListbox
				v-model="sourceSelection"
				:items="sourceItems"
				multiple
				filter
				class="size-full"
			/>
		</div>

		<div class="flex flex-col items-center justify-center gap-1">
			<UButton
				icon="i-lucide-chevron-right"
				color="neutral"
				variant="outline"
				:disabled="!sourceSelection.length"
				@click="transferSelected"
			/>
			<UButton
				icon="i-lucide-chevron-left"
				color="neutral"
				variant="outline"
				:disabled="!targetSelection.length"
				@click="removeSelected"
			/>
		</div>

		<div class="flex flex-col flex-1 gap-1">
			<span class="text-sm font-medium text-highlighted">Selected</span>

			<UListbox
				v-model="targetSelection"
				:items="targetItems"
				multiple
				filter
				class="size-full"
			/>
		</div>
	</div>
</template>
```

## API

### Props

```ts
/**
 * Props for the Listbox component
 */
interface ListboxProps {
  id?: string | undefined;
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  /**
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined;
  /**
   * @default 'md'
   */
  size?: "sm" | "md" | "xs" | "lg" | "xl" | undefined;
  /**
   * The items to display in the list.
   */
  items?: T | undefined;
  /**
   * The controlled value of the Listbox. Can be bound with `v-model`.
   */
  modelValue?: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, undefined>, Mod>, Mod>, Mod> | undefined;
  modelModifiers?: Mod | undefined;
  /**
   * The default value when not controlled.
   */
  defaultValue?: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, undefined>, Mod>, Mod>, Mod> | undefined;
  /**
   * Whether multiple items can be selected.
   * @default false
   */
  multiple?: M | undefined;
  /**
   * When `items` is an array of objects, select the field to use as the value instead of the object itself.
   * @default undefined
   */
  valueKey?: VK | undefined;
  /**
   * The key used to get the label from the item.
   * @default 'label'
   */
  labelKey?: keyof Extract<NestedItem<T>, object> & string | DotPathKeys<Extract<NestedItem<T>, object>> | undefined;
  /**
   * The key used to get the description from the item.
   * @default 'description'
   */
  descriptionKey?: keyof Extract<NestedItem<T>, object> & string | DotPathKeys<Extract<NestedItem<T>, object>> | undefined;
  /**
   * Whether the list is in a loading state.
   */
  loading?: boolean | undefined;
  /**
   * The icon displayed when loading.
   * @default appConfig.ui.icons.loading
   */
  loadingIcon?: any;
  /**
   * Whether to display a filter input or not.
   * Can be an object to pass additional props to the input.
   * `{ placeholder: 'Search...', variant: 'none' }`{lang="ts-type"}
   * @default false
   */
  filter?: boolean | Omit<InputProps<AcceptableValue, ModelModifiers>, "modelValue" | "defaultValue"> | undefined;
  /**
   * The fields to filter by.
   * @default [labelKey]
   */
  filterFields?: string[] | undefined;
  /**
   * When `true`, disable the default filters, useful for custom filtering (useAsyncData, useFetch, etc.).
   * @default false
   */
  ignoreFilter?: boolean | undefined;
  /**
   * The icon displayed when an item is selected.
   * @default appConfig.ui.icons.check
   */
  selectedIcon?: any;
  /**
   * Enable virtualization for large lists.
   * @default false
   */
  virtualize?: boolean | { overscan?: number | undefined; estimateSize?: number | ((index: number) => number) | undefined; } | undefined;
  /**
   * Highlight the ring color like a focus state.
   */
  highlight?: boolean | undefined;
  autofocus?: boolean | undefined;
  /**
   * @default 0
   */
  autofocusDelay?: number | undefined;
  ui?: { root?: SlotClass; input?: SlotClass; content?: SlotClass; group?: SlotClass; label?: SlotClass; separator?: SlotClass; empty?: SlotClass; loading?: SlotClass; loadingIcon?: SlotClass; item?: SlotClass; itemLeadingIcon?: SlotClass; itemLeadingAvatar?: SlotClass; itemLeadingAvatarSize?: SlotClass; itemLeadingChip?: SlotClass; itemLeadingChipSize?: SlotClass; itemWrapper?: SlotClass; itemLabel?: SlotClass; itemDescription?: SlotClass; itemTrailing?: SlotClass; itemTrailingIcon?: SlotClass; } | undefined;
  /**
   * Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.
   */
  by?: string | (a: AcceptableValue, b: AcceptableValue): boolean | undefined;
  /**
   * When `true`, prevents the user from interacting with listbox
   */
  disabled?: boolean | undefined;
  /**
   * When `true`, hover over item will trigger highlight
   * @default true
   */
  highlightOnHover?: boolean | undefined;
  /**
   * The name of the field. Submitted with its owning form as part of a name/value pair.
   */
  name?: string | undefined;
  /**
   * The orientation of the listbox. <br>Mainly so arrow navigation is done accordingly (left & right vs. up & down)
   */
  orientation?: "vertical" | "horizontal" | undefined;
  /**
   * When `true`, indicates that the user must set the value before the owning form can be submitted.
   */
  required?: boolean | undefined;
  /**
   * How multiple selection should behave in the collection.
   * @default 'toggle'
   */
  selectionBehavior?: "replace" | "toggle" | undefined;
  /**
   * @default ''
   */
  searchTerm?: string | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Listbox component
 */
interface ListboxSlots {
  loading(): any;
  empty(): any;
  item(): any;
  item-leading(): any;
  item-label(): any;
  item-description(): any;
  item-trailing(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Listbox component
 */
interface ListboxEmits {
  entryFocus: (payload: [event: CustomEvent<any>]) => void;
  highlight: (payload: [payload: { ref: HTMLElement; value: AcceptableValue; } | undefined]) => void;
  leave: (payload: [event: Event]) => void;
  change: (payload: [event: Event]) => void;
  update:modelValue: (payload: [value: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, undefined>, Mod>, Mod>, Mod>]) => void;
  update:searchTerm: (payload: [value: string]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		listbox: {
			slots: {
				root: 'flex flex-col min-h-0 min-w-0 ring ring-inset ring-default rounded-lg overflow-hidden',
				input: 'border-b border-default',
				content:
					'relative overflow-y-auto flex-1 max-h-60 scroll-py-1 focus:outline-none',
				group: 'p-1 isolate',
				label: 'font-semibold text-highlighted',
				separator: '-mx-1 my-1 h-px bg-border',
				empty: 'text-center text-muted',
				loading: 'flex items-center justify-center text-muted',
				loadingIcon: 'animate-spin shrink-0',
				item: [
					'group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50',
					'transition-colors before:transition-colors',
				],
				itemLeadingIcon: [
					'shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default',
					'transition-colors',
				],
				itemLeadingAvatar: 'shrink-0',
				itemLeadingAvatarSize: '',
				itemLeadingChip: 'shrink-0',
				itemLeadingChipSize: '',
				itemWrapper: 'flex-1 flex flex-col min-w-0',
				itemLabel: 'truncate',
				itemDescription: 'truncate text-muted',
				itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
				itemTrailingIcon: 'shrink-0',
			},
			variants: {
				size: {
					xs: {
						label: 'p-1 text-[10px]/3 gap-1',
						empty: 'py-3 text-xs',
						loading: 'py-3',
						loadingIcon: 'size-4',
						item: 'p-1 text-xs gap-1',
						itemLeadingIcon: 'size-4',
						itemLeadingAvatarSize: '3xs',
						itemLeadingChip: 'size-4',
						itemLeadingChipSize: 'sm',
						itemTrailingIcon: 'size-4',
					},
					sm: {
						label: 'p-1.5 text-[10px]/3 gap-1.5',
						empty: 'py-4 text-xs',
						loading: 'py-4',
						loadingIcon: 'size-4',
						item: 'p-1.5 text-xs gap-1.5',
						itemLeadingIcon: 'size-4',
						itemLeadingAvatarSize: '3xs',
						itemLeadingChip: 'size-4',
						itemLeadingChipSize: 'sm',
						itemTrailingIcon: 'size-4',
					},
					md: {
						label: 'p-1.5 text-xs gap-1.5',
						empty: 'py-6 text-sm',
						loading: 'py-6',
						loadingIcon: 'size-5',
						item: 'p-1.5 text-sm gap-1.5',
						itemLeadingIcon: 'size-5',
						itemLeadingAvatarSize: '2xs',
						itemLeadingChip: 'size-5',
						itemLeadingChipSize: 'md',
						itemTrailingIcon: 'size-5',
					},
					lg: {
						label: 'p-2 text-xs gap-2',
						empty: 'py-7 text-sm',
						loading: 'py-7',
						loadingIcon: 'size-5',
						item: 'p-2 text-sm gap-2',
						itemLeadingIcon: 'size-5',
						itemLeadingAvatarSize: '2xs',
						itemLeadingChip: 'size-5',
						itemLeadingChipSize: 'md',
						itemTrailingIcon: 'size-5',
					},
					xl: {
						label: 'p-2 text-sm gap-2',
						empty: 'py-8 text-base',
						loading: 'py-8',
						loadingIcon: 'size-6',
						item: 'p-2 text-base gap-2',
						itemLeadingIcon: 'size-6',
						itemLeadingAvatarSize: 'xs',
						itemLeadingChip: 'size-6',
						itemLeadingChipSize: 'lg',
						itemTrailingIcon: 'size-6',
						itemDescription: 'text-sm',
					},
				},
				color: {
					primary: {
						root: 'outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-primary',
					},
					secondary: {
						root: 'outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-secondary',
					},
					success: {
						root: 'outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-success',
					},
					info: {
						root: 'outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-info',
					},
					warning: {
						root: 'outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-warning',
					},
					error: {
						root: 'outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-error',
					},
					neutral: {
						root: 'outline-inverted/25 has-focus-visible:outline-3 has-focus-visible:ring-inverted',
					},
				},
				virtualize: {
					true: {
						content: 'p-1 isolate',
					},
					false: {
						content: 'divide-y divide-default',
					},
				},
				disabled: {
					true: {
						root: 'opacity-75 cursor-not-allowed',
					},
				},
				highlight: {
					true: '',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					highlight: true,
					class: {
						root: 'ring ring-inset ring-primary',
					},
				},
				{
					color: 'secondary',
					highlight: true,
					class: {
						root: 'ring ring-inset ring-secondary',
					},
				},
				{
					color: 'success',
					highlight: true,
					class: {
						root: 'ring ring-inset ring-success',
					},
				},
				{
					color: 'info',
					highlight: true,
					class: {
						root: 'ring ring-inset ring-info',
					},
				},
				{
					color: 'warning',
					highlight: true,
					class: {
						root: 'ring ring-inset ring-warning',
					},
				},
				{
					color: 'error',
					highlight: true,
					class: {
						root: 'ring ring-inset ring-error',
					},
				},
				{
					color: 'neutral',
					highlight: true,
					class: {
						root: 'ring ring-inset ring-inverted',
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

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Listbox.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/listbox.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "PinInput"
description: "An input element to enter a pin."
canonical_url: "https://ui.nuxt.com/docs/components/pin-input"

---

# PinInput

> An input element to enter a pin.

## Usage

Use the `v-model` directive to control the value of the PinInput.

```vue
<script setup lang="ts">
	const value = ref([]);
</script>

<template>
	<UPinInput v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
	<UPinInput :default-value="['1', '2', '3']" />
</template>
```

### Type

Use the `type` prop to change the input type. Defaults to `text`.

```vue
<template>
	<UPinInput type="number" />
</template>
```

> [!NOTE]
>
> When `type` is set to `number`, it will only accept numeric characters.

### Mask

Use the `mask` prop to treat the input like a password.

```vue
<template>
	<UPinInput
		mask
		:default-value="['1', '2', '3', '4', '5']"
	/>
</template>
```

### OTP

Use the `otp` prop to enable One-Time Password functionality. When enabled, mobile devices can automatically detect and fill OTP codes from SMS messages or clipboard content, with autocomplete support.

```vue
<template>
	<UPinInput otp />
</template>
```

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<template>
	<UPinInput placeholder="○" />
</template>
```

### Length

Use the `length` prop to change the amount of inputs.

```vue
<template>
	<UPinInput
		:length="6"
		placeholder="○"
	/>
</template>
```

### Separator `4.9+`

Use the `separator` prop to insert a separator between groups of inputs. Pass a number to insert one after every Nth input.

```vue
<template>
	<UPinInput
		:length="6"
		:separator="3"
		placeholder="○"
	/>
</template>
```

You can also pass an array of positions to insert separators after specific inputs.

```vue
<template>
	<UPinInput
		:length="7"
		:separator="[3, 4]"
		placeholder="○"
	/>
</template>
```

### Color

Use the `color` prop to change the ring color when the PinInput is focused.

```vue
<template>
	<UPinInput
		color="neutral"
		highlight
		placeholder="○"
	/>
</template>
```

> [!NOTE]
>
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the PinInput.

```vue
<template>
	<UPinInput
		color="neutral"
		variant="subtle"
		:highlight="false"
		placeholder="○"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the PinInput.

```vue
<template>
	<UPinInput
		size="xl"
		placeholder="○"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the PinInput.

```vue
<template>
	<UPinInput
		disabled
		placeholder="○"
	/>
</template>
```

## Examples

### With separator slot `4.9+`

Use the `separator` slot to customize the separator appearance.

```vue [PinInputSeparatorSlotExample.vue]
<template>
	<UPinInput
		:length="6"
		:separator="3"
		placeholder="○"
	>
		<template #separator>
			<UIcon
				name="i-lucide-minus"
				class="size-4"
			/>
		</template>
	</UPinInput>
</template>
```

## API

### Props

```ts
/**
 * Props for the PinInput component
 */
interface PinInputProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
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
	 * @default 'outline'
	 */
	variant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'none' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * The number of input fields.
	 * @default 5
	 */
	length?: string | number | undefined;
	autofocus?: boolean | undefined;
	/**
	 * @default 0
	 */
	autofocusDelay?: number | undefined;
	highlight?: boolean | undefined;
	/**
	 * Keep the mobile text size on all breakpoints.
	 */
	fixed?: boolean | undefined;
	/**
	 * Group inputs by inserting a separator between them.
	 * Pass a number to insert one after every Nth input, or an array of positions to insert after specific inputs.
	 */
	separator?: number | number[] | undefined;
	ui?:
		| { root?: SlotClass; base?: SlotClass; separator?: SlotClass }
		| undefined;
	/**
	 * The default value of the pin inputs when it is initially rendered. Use when you do not need to control its checked state.
	 */
	defaultValue?: PinInputValue<T> | undefined;
	/**
	 * When `true`, prevents the user from interacting with the pin input
	 */
	disabled?: boolean | undefined;
	/**
	 * Id of the element
	 */
	id?: string | undefined;
	/**
	 * When `true`, pin inputs will be treated as password.
	 */
	mask?: boolean | undefined;
	/**
	 * The controlled checked state of the pin input. Can be binded as `v-model`.
	 */
	modelValue?: null | PinInputValue<T> | undefined;
	/**
	 * The name of the field. Submitted with its owning form as part of a name/value pair.
	 */
	name?: string | undefined;
	/**
	 * When `true`, mobile devices will autodetect the OTP from messages or clipboard, and enable the autocomplete field.
	 */
	otp?: boolean | undefined;
	/**
	 * The placeholder character to use for empty pin-inputs.
	 */
	placeholder?: string | undefined;
	/**
	 * When `true`, indicates that the user must set the value before the owning form can be submitted.
	 */
	required?: boolean | undefined;
	/**
	 * Input type for the inputs.
	 * @default 'text'
	 */
	type?: T | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PinInput component
 */
interface PinInputSlots {
	separator(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the PinInput component
 */
interface PinInputEmits {
  update:modelValue: (payload: [value: PinInputValue<T>]) => void;
  complete: (payload: [value: PinInputValue<T>]) => void;
  change: (payload: [event: Event]) => void;
  blur: (payload: [event: Event]) => void;
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
          inputsRef
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
		pinInput: {
			slots: {
				root: 'relative inline-flex items-center gap-1.5',
				base: [
					'rounded-md border-0 placeholder:text-dimmed text-center disabled:cursor-not-allowed disabled:opacity-75',
					'transition-colors',
				],
				separator: 'text-dimmed flex items-center justify-center',
			},
			variants: {
				size: {
					xs: {
						base: 'size-6 text-sm/4',
					},
					sm: {
						base: 'size-7 text-sm/4',
					},
					md: {
						base: 'size-8 text-base/5',
					},
					lg: {
						base: 'size-9 text-base/5',
					},
					xl: {
						base: 'size-10 text-base',
					},
				},
				variant: {
					outline: 'text-highlighted bg-default ring ring-inset ring-accented',
					soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
					subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
					ghost:
						'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
					none: 'text-highlighted bg-transparent focus:outline-none',
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
				highlight: {
					true: '',
				},
				fixed: {
					false: '',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: ['outline', 'subtle'],
					class:
						'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: ['outline', 'subtle'],
					class:
						'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: ['outline', 'subtle'],
					class:
						'outline-success/25 focus-visible:outline-3 focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: ['outline', 'subtle'],
					class:
						'outline-info/25 focus-visible:outline-3 focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: ['outline', 'subtle'],
					class:
						'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: ['outline', 'subtle'],
					class:
						'outline-error/25 focus-visible:outline-3 focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: ['soft', 'ghost'],
					class: 'outline-primary/25 focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: ['soft', 'ghost'],
					class: 'outline-secondary/25 focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: ['soft', 'ghost'],
					class: 'outline-success/25 focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: ['soft', 'ghost'],
					class: 'outline-info/25 focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: ['soft', 'ghost'],
					class: 'outline-warning/25 focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: ['soft', 'ghost'],
					class: 'outline-error/25 focus-visible:outline-3',
				},
				{
					color: 'primary',
					highlight: true,
					class: 'ring ring-inset ring-primary',
				},
				{
					color: 'secondary',
					highlight: true,
					class: 'ring ring-inset ring-secondary',
				},
				{
					color: 'success',
					highlight: true,
					class: 'ring ring-inset ring-success',
				},
				{
					color: 'info',
					highlight: true,
					class: 'ring ring-inset ring-info',
				},
				{
					color: 'warning',
					highlight: true,
					class: 'ring ring-inset ring-warning',
				},
				{
					color: 'error',
					highlight: true,
					class: 'ring ring-inset ring-error',
				},
				{
					color: 'neutral',
					variant: ['outline', 'subtle'],
					class:
						'outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: ['soft', 'ghost'],
					class: 'outline-inverted/25 focus-visible:outline-3',
				},
				{
					color: 'neutral',
					highlight: true,
					class: 'ring ring-inset ring-inverted',
				},
				{
					fixed: false,
					size: 'xs',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'sm',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'md',
					class: 'md:text-sm',
				},
				{
					fixed: false,
					size: 'lg',
					class: 'md:text-sm',
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'outline',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/PinInput.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/pin-input.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "RadioGroup"
description: "A set of radio buttons to select a single option from a list."
canonical_url: "https://ui.nuxt.com/docs/components/radio-group"

---

# RadioGroup

> A set of radio buttons to select a single option from a list.

## Usage

Use the `v-model` directive to control the value of the RadioGroup or the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
	const value = ref('System');
</script>

<template>
	<URadioGroup
		v-model="value"
		:items="items"
	/>
</template>
```

### Items

Use the `items` prop as an array of strings or numbers:

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
	const value = ref('System');
</script>

<template>
	<URadioGroup
		v-model="value"
		:items="items"
	/>
</template>
```

You can also pass an array of objects with the following properties:

- `label?: string`
- `description?: string`
- [`value?: string`](#value-key)
- `disabled?: boolean`
- [`icon?: string`](#indicator)
- `class?: any`
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }`

```vue
<script setup lang="ts">
	import type { RadioGroupItem } from '@nuxt/ui';

	const items = ref<RadioGroupItem[]>([
		{
			label: 'System',
			description: 'Matches your device settings.',
			value: 'system',
		},
		{
			label: 'Light',
			description: 'Always uses the light theme.',
			value: 'light',
		},
		{
			label: 'Dark',
			description: 'Always uses the dark theme.',
			value: 'dark',
		},
	]);
	const value = ref('system');
</script>

<template>
	<URadioGroup
		v-model="value"
		:items="items"
	/>
</template>
```

> [!CAUTION]
>
> When using objects, you need to reference the `value` property of the object in the `v-model` directive or the `default-value` prop.

### Value Key

You can change the property that is used to set the value by using the `value-key` prop. Defaults to `value`.

```vue
<script setup lang="ts">
	import type { RadioGroupItem } from '@nuxt/ui';

	const items = ref<RadioGroupItem[]>([
		{
			label: 'System',
			description: 'Matches your device settings.',
			id: 'system',
		},
		{
			label: 'Light',
			description: 'Always uses the light theme.',
			id: 'light',
		},
		{
			label: 'Dark',
			description: 'Always uses the dark theme.',
			id: 'dark',
		},
	]);
	const value = ref('light');
</script>

<template>
	<URadioGroup
		v-model="value"
		value-key="id"
		:items="items"
	/>
</template>
```

### Legend

Use the `legend` prop to set the legend of the RadioGroup.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
</script>

<template>
	<URadioGroup
		legend="Theme"
		default-value="System"
		:items="items"
	/>
</template>
```

### Color

Use the `color` prop to change the color of the RadioGroup.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
</script>

<template>
	<URadioGroup
		color="neutral"
		default-value="System"
		:items="items"
	/>
</template>
```

### Variant

Use the `variant` prop to change the variant of the RadioGroup.

```vue
<script setup lang="ts">
	import type { RadioGroupItem } from '@nuxt/ui';

	const items = ref<RadioGroupItem[]>([
		{
			label: 'System',
			value: 'system',
			description: 'Matches your device settings.',
		},
		{
			label: 'Light',
			value: 'light',
			description: 'Always uses the light theme.',
		},
		{
			label: 'Dark',
			value: 'dark',
			description: 'Always uses the dark theme.',
		},
	]);
</script>

<template>
	<URadioGroup
		color="primary"
		variant="card"
		default-value="system"
		:items="items"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the RadioGroup.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
</script>

<template>
	<URadioGroup
		size="xl"
		variant="list"
		default-value="System"
		:items="items"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the RadioGroup. Defaults to `vertical`.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
</script>

<template>
	<URadioGroup
		orientation="horizontal"
		variant="list"
		default-value="System"
		:items="items"
	/>
</template>
```

### Indicator

Use the `indicator` prop to change the position or hide the indicator. Defaults to `start`.

> [!NOTE]
>
> An item's `icon` is only displayed when `indicator` is `hidden`, above the label, since a radio has no icon inside its indicator.

```vue
<script setup lang="ts">
	import type { RadioGroupItem } from '@nuxt/ui';

	const items = ref<RadioGroupItem[]>([
		{
			label: 'System',
			icon: 'i-lucide-monitor',
			value: 'System',
			class: 'w-20',
		},
		{
			label: 'Light',
			icon: 'i-lucide-sun',
			value: 'Light',
			class: 'w-20',
		},
		{
			label: 'Dark',
			icon: 'i-lucide-moon',
			value: 'Dark',
			class: 'w-20',
		},
	]);
</script>

<template>
	<URadioGroup
		indicator="hidden"
		orientation="horizontal"
		variant="table"
		default-value="System"
		:items="items"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the RadioGroup.

```vue
<script setup lang="ts">
	const items = ref(['System', 'Light', 'Dark']);
</script>

<template>
	<URadioGroup
		disabled
		default-value="System"
		:items="items"
	/>
</template>
```

## API

### Props

```ts
/**
 * Props for the RadioGroup component
 */
interface RadioGroupProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	legend?: string | undefined;
	/**
	 * When `items` is an array of objects, select the field to use as the value.
	 * @default 'value'
	 */
	valueKey?: VK | undefined;
	/**
	 * When `items` is an array of objects, select the field to use as the label.
	 * @default 'label'
	 */
	labelKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	/**
	 * When `items` is an array of objects, select the field to use as the description.
	 * @default 'description'
	 */
	descriptionKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	items?: T | undefined;
	/**
	 * The controlled value of the RadioGroup. Can be bind as `v-model`.
	 */
	modelValue?: GetItemValue<T, VK, undefined, NestedItem<T>> | undefined;
	/**
	 * The value of the RadioGroup when initially rendered. Use when you do not need to control the state of the RadioGroup.
	 */
	defaultValue?: GetItemValue<T, VK, undefined, NestedItem<T>> | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	/**
	 * @default 'list'
	 */
	variant?: 'card' | 'list' | 'table' | undefined;
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
	 * Highlight the ring color like a focus state.
	 * @default false
	 */
	highlight?: boolean | undefined;
	/**
	 * The orientation the radio buttons are laid out.
	 * @default 'vertical'
	 */
	orientation?: 'horizontal' | 'vertical' | undefined;
	/**
	 * Position of the indicator.
	 * @default 'start'
	 */
	indicator?: 'start' | 'end' | 'hidden' | undefined;
	ui?:
		| {
				root?: SlotClass;
				fieldset?: SlotClass;
				legend?: SlotClass;
				item?: SlotClass;
				container?: SlotClass;
				base?: SlotClass;
				indicator?: SlotClass;
				wrapper?: SlotClass;
				label?: SlotClass;
				icon?: SlotClass;
				description?: SlotClass;
		  }
		| undefined;
	/**
	 * When `true`, prevents the user from interacting with radio items.
	 */
	disabled?: boolean | undefined;
	/**
	 * When `true`, keyboard navigation will loop from last item to first, and vice versa.
	 */
	loop?: boolean | undefined;
	/**
	 * The name of the field. Submitted with its owning form as part of a name/value pair.
	 */
	name?: string | undefined;
	/**
	 * When `true`, indicates that the user must set the value before the owning form can be submitted.
	 */
	required?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the RadioGroup component
 */
interface RadioGroupSlots {
	legend(): any;
	label(): any;
	description(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the RadioGroup component
 */
interface RadioGroupEmits {
  update:modelValue: (payload: [value: GetItemValue<T, VK, undefined, NestedItem<T>>]) => void;
  change: (payload: [event: Event]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		radioGroup: {
			slots: {
				root: 'relative',
				fieldset: 'flex gap-x-2',
				legend: 'mb-1 block font-medium text-default',
				item: 'flex items-start',
				container: 'flex items-center',
				base: 'rounded-full ring ring-inset ring-accented overflow-hidden focus-visible:outline-none',
				indicator:
					'flex items-center justify-center size-full after:bg-default after:rounded-full',
				wrapper: 'w-full',
				label: 'block font-medium text-default',
				icon: 'shrink-0',
				description: 'text-muted',
			},
			variants: {
				color: {
					primary: {
						indicator: 'bg-primary',
					},
					secondary: {
						indicator: 'bg-secondary',
					},
					success: {
						indicator: 'bg-success',
					},
					info: {
						indicator: 'bg-info',
					},
					warning: {
						indicator: 'bg-warning',
					},
					error: {
						indicator: 'bg-error',
					},
					neutral: {
						indicator: 'bg-inverted',
					},
				},
				variant: {
					list: {
						item: '',
					},
					card: {
						item: [
							'border border-muted rounded-lg hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:bg-elevated/50',
							'transition-colors',
						],
					},
					table: {
						item: [
							'border border-muted hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:bg-elevated/50',
							'transition-colors',
						],
					},
				},
				orientation: {
					horizontal: {
						fieldset: 'flex-row',
					},
					vertical: {
						fieldset: 'flex-col',
					},
				},
				indicator: {
					start: {
						item: 'flex-row',
						wrapper: 'ms-2',
					},
					end: {
						item: 'flex-row-reverse',
						wrapper: 'me-2',
					},
					hidden: {
						base: 'sr-only',
						wrapper: 'flex flex-col items-center gap-1 text-center',
					},
				},
				size: {
					xs: {
						fieldset: 'gap-y-0.5',
						legend: 'text-xs',
						base: 'size-3',
						item: 'text-xs',
						container: 'h-4',
						indicator: 'after:size-1',
					},
					sm: {
						fieldset: 'gap-y-0.5',
						legend: 'text-xs',
						base: 'size-3.5',
						item: 'text-xs',
						container: 'h-4',
						indicator: 'after:size-1',
					},
					md: {
						fieldset: 'gap-y-1',
						legend: 'text-sm',
						base: 'size-4',
						item: 'text-sm',
						container: 'h-5',
						indicator: 'after:size-1.5',
					},
					lg: {
						fieldset: 'gap-y-1',
						legend: 'text-sm',
						base: 'size-4.5',
						item: 'text-sm',
						container: 'h-5',
						indicator: 'after:size-1.5',
					},
					xl: {
						fieldset: 'gap-y-1.5',
						legend: 'text-base',
						base: 'size-5',
						item: 'text-base',
						container: 'h-6',
						indicator: 'after:size-2',
					},
				},
				highlight: {
					true: '',
					false: '',
				},
				disabled: {
					true: {
						item: 'opacity-75',
						base: 'cursor-not-allowed',
						label: 'cursor-not-allowed',
						description: 'cursor-not-allowed',
					},
				},
				required: {
					true: {
						legend: "after:content-['*'] after:ms-0.5 after:text-error",
					},
				},
			},
			compoundVariants: [
				{
					indicator: 'hidden',
					class: {
						container: 'h-auto',
					},
				},
				{
					variant: ['card', 'table'],
					highlight: false,
					class: {
						item: 'hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:border-accented',
					},
				},
				{
					size: 'xs',
					indicator: 'hidden',
					class: {
						icon: 'size-3',
					},
				},
				{
					size: 'sm',
					indicator: 'hidden',
					class: {
						icon: 'size-3.5',
					},
				},
				{
					size: 'md',
					indicator: 'hidden',
					class: {
						icon: 'size-4',
					},
				},
				{
					size: 'lg',
					indicator: 'hidden',
					class: {
						icon: 'size-4.5',
					},
				},
				{
					size: 'xl',
					indicator: 'hidden',
					class: {
						icon: 'size-5',
					},
				},
				{
					size: 'xs',
					variant: ['card', 'table'],
					class: {
						item: 'p-2.5',
					},
				},
				{
					size: 'sm',
					variant: ['card', 'table'],
					class: {
						item: 'p-3',
					},
				},
				{
					size: 'md',
					variant: ['card', 'table'],
					class: {
						item: 'p-3.5',
					},
				},
				{
					size: 'lg',
					variant: ['card', 'table'],
					class: {
						item: 'p-4',
					},
				},
				{
					size: 'xl',
					variant: ['card', 'table'],
					class: {
						item: 'p-4.5',
					},
				},
				{
					orientation: 'horizontal',
					variant: 'table',
					class: {
						item: 'first-of-type:rounded-s-lg last-of-type:rounded-e-lg',
						fieldset: 'gap-0 -space-x-px',
					},
				},
				{
					orientation: 'vertical',
					variant: 'table',
					class: {
						item: 'first-of-type:rounded-t-lg last-of-type:rounded-b-lg',
						fieldset: 'gap-0 -space-y-px',
					},
				},
				{
					color: 'primary',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-primary/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-primary',
					},
				},
				{
					color: 'secondary',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-secondary/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-secondary',
					},
				},
				{
					color: 'success',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-success/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-success',
					},
				},
				{
					color: 'info',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-info/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-info',
					},
				},
				{
					color: 'warning',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-warning/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-warning',
					},
				},
				{
					color: 'error',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-error/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-error',
					},
				},
				{
					color: 'neutral',
					variant: 'list',
					indicator: ['start', 'end'],
					class: {
						base: 'outline-inverted/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-inverted',
					},
				},
				{
					color: 'primary',
					variant: ['card', 'table'],
					class: {
						item: 'outline-primary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-primary has-focus-visible:z-[1]',
					},
				},
				{
					color: 'secondary',
					variant: ['card', 'table'],
					class: {
						item: 'outline-secondary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-secondary has-focus-visible:z-[1]',
					},
				},
				{
					color: 'success',
					variant: ['card', 'table'],
					class: {
						item: 'outline-success/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-success has-focus-visible:z-[1]',
					},
				},
				{
					color: 'info',
					variant: ['card', 'table'],
					class: {
						item: 'outline-info/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-info has-focus-visible:z-[1]',
					},
				},
				{
					color: 'warning',
					variant: ['card', 'table'],
					class: {
						item: 'outline-warning/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-warning has-focus-visible:z-[1]',
					},
				},
				{
					color: 'error',
					variant: ['card', 'table'],
					class: {
						item: 'outline-error/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-error has-focus-visible:z-[1]',
					},
				},
				{
					color: 'neutral',
					variant: ['card', 'table'],
					class: {
						item: 'outline-inverted/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-inverted has-focus-visible:z-[1]',
					},
				},
				{
					color: 'primary',
					variant: 'list',
					indicator: 'hidden',
					class: {
						item: 'outline-primary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-primary has-focus-visible:z-[1]',
					},
				},
				{
					color: 'secondary',
					variant: 'list',
					indicator: 'hidden',
					class: {
						item: 'outline-secondary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-secondary has-focus-visible:z-[1]',
					},
				},
				{
					color: 'success',
					variant: 'list',
					indicator: 'hidden',
					class: {
						item: 'outline-success/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-success has-focus-visible:z-[1]',
					},
				},
				{
					color: 'info',
					variant: 'list',
					indicator: 'hidden',
					class: {
						item: 'outline-info/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-info has-focus-visible:z-[1]',
					},
				},
				{
					color: 'warning',
					variant: 'list',
					indicator: 'hidden',
					class: {
						item: 'outline-warning/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-warning has-focus-visible:z-[1]',
					},
				},
				{
					color: 'error',
					variant: 'list',
					indicator: 'hidden',
					class: {
						item: 'outline-error/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-error has-focus-visible:z-[1]',
					},
				},
				{
					color: 'neutral',
					variant: 'list',
					indicator: 'hidden',
					class: {
						item: 'outline-inverted/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-inverted has-focus-visible:z-[1]',
					},
				},
				{
					color: 'primary',
					variant: 'card',
					class: {
						item: 'has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/10',
					},
				},
				{
					color: 'secondary',
					variant: 'card',
					class: {
						item: 'has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:bg-secondary/10',
					},
				},
				{
					color: 'success',
					variant: 'card',
					class: {
						item: 'has-data-[state=checked]:border-success/50 has-data-[state=checked]:bg-success/10',
					},
				},
				{
					color: 'info',
					variant: 'card',
					class: {
						item: 'has-data-[state=checked]:border-info/50 has-data-[state=checked]:bg-info/10',
					},
				},
				{
					color: 'warning',
					variant: 'card',
					class: {
						item: 'has-data-[state=checked]:border-warning/50 has-data-[state=checked]:bg-warning/10',
					},
				},
				{
					color: 'error',
					variant: 'card',
					class: {
						item: 'has-data-[state=checked]:border-error/50 has-data-[state=checked]:bg-error/10',
					},
				},
				{
					color: 'neutral',
					variant: 'card',
					class: {
						item: 'has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:bg-elevated',
					},
				},
				{
					color: 'primary',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-primary/10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'secondary',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-secondary/10 has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'success',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-success/10 has-data-[state=checked]:border-success/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'info',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-info/10 has-data-[state=checked]:border-info/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'warning',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-warning/10 has-data-[state=checked]:border-warning/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'error',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-error/10 has-data-[state=checked]:border-error/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					color: 'neutral',
					variant: 'table',
					class: {
						item: 'has-data-[state=checked]:bg-elevated has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:z-[1]',
					},
				},
				{
					variant: ['card', 'table'],
					disabled: true,
					class: {
						item: 'cursor-not-allowed',
					},
				},
				{
					color: 'primary',
					indicator: 'hidden',
					highlight: true,
					class: {
						item: 'not-has-disabled:border-primary not-has-disabled:has-data-[state=checked]:border-primary',
					},
				},
				{
					color: 'secondary',
					indicator: 'hidden',
					highlight: true,
					class: {
						item: 'not-has-disabled:border-secondary not-has-disabled:has-data-[state=checked]:border-secondary',
					},
				},
				{
					color: 'success',
					indicator: 'hidden',
					highlight: true,
					class: {
						item: 'not-has-disabled:border-success not-has-disabled:has-data-[state=checked]:border-success',
					},
				},
				{
					color: 'info',
					indicator: 'hidden',
					highlight: true,
					class: {
						item: 'not-has-disabled:border-info not-has-disabled:has-data-[state=checked]:border-info',
					},
				},
				{
					color: 'warning',
					indicator: 'hidden',
					highlight: true,
					class: {
						item: 'not-has-disabled:border-warning not-has-disabled:has-data-[state=checked]:border-warning',
					},
				},
				{
					color: 'error',
					indicator: 'hidden',
					highlight: true,
					class: {
						item: 'not-has-disabled:border-error not-has-disabled:has-data-[state=checked]:border-error',
					},
				},
				{
					color: 'neutral',
					indicator: 'hidden',
					highlight: true,
					class: {
						item: 'not-has-disabled:border-inverted not-has-disabled:has-data-[state=checked]:border-inverted',
					},
				},
				{
					color: 'primary',
					highlight: true,
					class: {
						base: 'ring-primary',
					},
				},
				{
					color: 'secondary',
					highlight: true,
					class: {
						base: 'ring-secondary',
					},
				},
				{
					color: 'success',
					highlight: true,
					class: {
						base: 'ring-success',
					},
				},
				{
					color: 'info',
					highlight: true,
					class: {
						base: 'ring-info',
					},
				},
				{
					color: 'warning',
					highlight: true,
					class: {
						base: 'ring-warning',
					},
				},
				{
					color: 'error',
					highlight: true,
					class: {
						base: 'ring-error',
					},
				},
				{
					color: 'neutral',
					highlight: true,
					class: {
						base: 'ring-inverted',
					},
				},
			],
			defaultVariants: {
				highlight: false,
				size: 'md',
				color: 'primary',
				variant: 'list',
				indicator: 'start',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/RadioGroup.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/radio-group.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Select"
description: "A select element to choose from a list of options."
canonical_url: "https://ui.nuxt.com/docs/components/select"

---

# Select

> A select element to choose from a list of options.

## Usage

Use the `v-model` directive to control the value of the Select or the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		:items="items"
	/>
</template>
```

### Items

Use the `items` prop as an array of strings, numbers or booleans:

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		:items="items"
		class="w-48"
	/>
</template>
```

You can also pass an array of objects with the following properties:

- `label?: string`
- [`value?: string`](#value-key)
- [`type?: "label" | "separator" | "item"`](#with-items-type)
- [`icon?: string`](#with-icons-in-items)
- [`avatar?: AvatarProps`](#with-avatar-in-items)
- [`chip?: ChipProps`](#with-chip-in-items)
- `disabled?: boolean`
- `class?: any`
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`

```vue
<script setup lang="ts">
	import type { SelectItem } from '@nuxt/ui';

	const items = ref<SelectItem[]>([
		{
			label: 'Backlog',
			value: 'backlog',
		},
		{
			label: 'Todo',
			value: 'todo',
		},
		{
			label: 'In Progress',
			value: 'in_progress',
		},
		{
			label: 'Done',
			value: 'done',
		},
	]);
	const value = ref('backlog');
</script>

<template>
	<USelect
		v-model="value"
		:items="items"
		class="w-48"
	/>
</template>
```

> [!CAUTION]
>
> When using objects, you need to reference the `value` property of the object in the `v-model` directive or the `default-value` prop.

You can also pass an array of arrays to the `items` prop to display separated groups of items.

```vue
<script setup lang="ts">
	const items = ref([
		['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'],
		['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek'],
	]);
	const value = ref('Apple');
</script>

<template>
	<USelect
		v-model="value"
		:items="items"
		class="w-48"
	/>
</template>
```

### Value Key

You can change the property that is used to set the value by using the `value-key` prop. Defaults to `value`.

```vue
<script setup lang="ts">
	import type { SelectItem } from '@nuxt/ui';

	const items = ref<SelectItem[]>([
		{
			label: 'Backlog',
			id: 'backlog',
		},
		{
			label: 'Todo',
			id: 'todo',
		},
		{
			label: 'In Progress',
			id: 'in_progress',
		},
		{
			label: 'Done',
			id: 'done',
		},
	]);
	const value = ref('backlog');
</script>

<template>
	<USelect
		v-model="value"
		value-key="id"
		:items="items"
		class="w-48"
	/>
</template>
```

### Multiple

Use the `multiple` prop to allow multiple selections, the selected items will be separated by a comma in the trigger.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref(['Backlog', 'Todo']);
</script>

<template>
	<USelect
		v-model="value"
		multiple
		:items="items"
		class="w-48"
	/>
</template>
```

> [!CAUTION]
>
> Ensure to pass an array to the `default-value` prop or the `v-model` directive.

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
</script>

<template>
	<USelect
		placeholder="Select status"
		:items="items"
		class="w-48"
	/>
</template>
```

### Content

Use the `content` prop to control how the Select content is rendered, like its `align` or `side` for example.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		:content="{
			align: 'center',
			side: 'bottom',
			sideOffset: 8,
		}"
		:items="items"
		class="w-48"
	/>
</template>
```

> [!NOTE]
>
> These options only apply when `content.position` is `popper` (default).

### Position `4.7+`

Use the `content.position` prop to control how the Select content is positioned relative to the trigger. Defaults to `popper`, which positions the content like other popovers. Set it to `item-aligned` to align the content with the selected item (similar to a native macOS menu).

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Todo');
</script>

<template>
	<USelect
		v-model="value"
		:content="{
			position: 'item-aligned',
		}"
		:items="items"
		class="w-48"
	/>
</template>
```

### Arrow

Use the `arrow` prop to display an arrow on the Select.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		arrow
		:items="items"
		class="w-48"
	/>
</template>
```

### Color

Use the `color` prop to change the ring color when the Select is focused.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		color="neutral"
		highlight
		:items="items"
		class="w-48"
	/>
</template>
```

> [!NOTE]
>
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the Select.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		color="neutral"
		variant="subtle"
		:highlight="false"
		:items="items"
		class="w-48"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Select.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		size="xl"
		:items="items"
		class="w-48"
	/>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the Select.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		icon="i-lucide-search"
		size="md"
		:items="items"
		class="w-48"
	/>
</template>
```

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/docs/components/icon). Defaults to `i-lucide-chevron-down`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		trailing-icon="i-lucide-arrow-down"
		size="md"
		:items="items"
		class="w-48"
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

### Selected Icon

Use the `selected-icon` prop to customize the icon when an item is selected. Defaults to `i-lucide-check`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		selected-icon="i-lucide-flame"
		size="md"
		:items="items"
		class="w-48"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key.

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the Select.

```vue
<script setup lang="ts">
	const items = ref([
		'Nuxt',
		'NuxtHub',
		'NuxtLabs',
		'Nuxt Modules',
		'Nuxt Community',
	]);
	const value = ref('Nuxt');
</script>

<template>
	<USelect
		v-model="value"
		:avatar="{
			src: 'https://github.com/nuxt.png',
			loading: 'lazy',
		}"
		:items="items"
		class="w-48"
	/>
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the Select.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		loading
		:trailing="false"
		:items="items"
		class="w-48"
	/>
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		loading
		loading-icon="i-lucide-loader"
		:items="items"
		class="w-48"
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

### Disabled

Use the `disabled` prop to disable the Select.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
</script>

<template>
	<USelect
		disabled
		placeholder="Select status"
		:items="items"
		class="w-48"
	/>
</template>
```

## Examples

### With items type

You can use the `type` property with `separator` to display a separator between items or `label` to display a label.

```vue
<script setup lang="ts">
	import type { SelectItem } from '@nuxt/ui';

	const items = ref<SelectItem[]>([
		{
			type: 'label',
			label: 'Fruits',
		},
		'Apple',
		'Banana',
		'Blueberry',
		'Grapes',
		'Pineapple',
		{
			type: 'separator',
		},
		{
			type: 'label',
			label: 'Vegetables',
		},
		'Aubergine',
		'Broccoli',
		'Carrot',
		'Courgette',
		'Leek',
	]);
	const value = ref('Apple');
</script>

<template>
	<USelect
		v-model="value"
		:items="items"
		class="w-48"
	/>
</template>
```

### With icon in items

You can use the `icon` property to display an [Icon](/docs/components/icon) inside the items.

```vue [SelectItemsIconExample.vue]
<script setup lang="ts">
	import type { SelectItem } from '@nuxt/ui';

	const items = ref([
		{
			label: 'Backlog',
			value: 'backlog',
			icon: 'i-lucide-circle-help',
		},
		{
			label: 'Todo',
			value: 'todo',
			icon: 'i-lucide-circle-plus',
		},
		{
			label: 'In Progress',
			value: 'in_progress',
			icon: 'i-lucide-circle-arrow-up',
		},
		{
			label: 'Done',
			value: 'done',
			icon: 'i-lucide-circle-check',
		},
	] satisfies SelectItem[]);

	const value = ref(items.value[0]?.value);

	const icon = computed(
		() => items.value.find((item) => item.value === value.value)?.icon,
	);
</script>

<template>
	<USelect
		v-model="value"
		:items="items"
		value-key="value"
		:icon="icon"
		class="w-48"
	/>
</template>
```

> [!NOTE]
>
> In this example, the icon is computed from the `value` property of the selected item.

> [!TIP]
>
> You can also use the `#leading` slot to display the selected icon.

### With avatar in items

You can use the `avatar` property to display an [Avatar](/docs/components/avatar) inside the items.

```vue [SelectItemsAvatarExample.vue]
<script setup lang="ts">
	import type { SelectItem } from '@nuxt/ui';

	const items = ref([
		{
			label: 'benjamincanac',
			value: 'benjamincanac',
			avatar: {
				src: 'https://github.com/benjamincanac.png',
				alt: 'benjamincanac',
				loading: 'lazy' as const,
			},
		},
		{
			label: 'romhml',
			value: 'romhml',
			avatar: {
				src: 'https://github.com/romhml.png',
				alt: 'romhml',
				loading: 'lazy' as const,
			},
		},
		{
			label: 'noook',
			value: 'noook',
			avatar: {
				src: 'https://github.com/noook.png',
				alt: 'noook',
				loading: 'lazy' as const,
			},
		},
		{
			label: 'sandros94',
			value: 'sandros94',
			avatar: {
				src: 'https://github.com/sandros94.png',
				alt: 'sandros94',
				loading: 'lazy' as const,
			},
		},
	] satisfies SelectItem[]);

	const value = ref(items.value[0]?.value);

	const avatar = computed(
		() => items.value.find((item) => item.value === value.value)?.avatar,
	);
</script>

<template>
	<USelect
		v-model="value"
		:items="items"
		value-key="value"
		:avatar="avatar"
		class="w-48"
	/>
</template>
```

> [!NOTE]
>
> In this example, the avatar is computed from the `value` property of the selected item.

> [!TIP]
>
> You can also use the `#leading` slot to display the selected avatar.

### With chip in items

You can use the `chip` property to display a [Chip](/docs/components/chip) inside the items.

```vue [SelectItemsChipExample.vue]
<script setup lang="ts">
	import type { SelectItem, ChipProps } from '@nuxt/ui';

	const items = ref([
		{
			label: 'bug',
			value: 'bug',
			chip: {
				color: 'error',
			},
		},
		{
			label: 'feature',
			value: 'feature',
			chip: {
				color: 'success',
			},
		},
		{
			label: 'enhancement',
			value: 'enhancement',
			chip: {
				color: 'info',
			},
		},
	] satisfies SelectItem[]);

	const value = ref(items.value[0]?.value);

	function getChip(value: string) {
		return items.value.find((item) => item.value === value)?.chip;
	}
</script>

<template>
	<USelect
		v-model="value"
		:items="items"
		value-key="value"
		class="w-48"
	>
		<template #leading="{ modelValue, ui }">
			<UChip
				v-if="modelValue"
				v-bind="getChip(modelValue)"
				inset
				standalone
				:size="ui.itemLeadingChipSize() as ChipProps['size']"
				:class="ui.itemLeadingChip()"
			/>
		</template>
	</USelect>
</template>
```

> [!NOTE]
>
> In this example, the `#leading` slot is used to display the selected chip.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [SelectOpenExample.vue]
<script setup lang="ts">
	const open = ref(false);
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');

	defineShortcuts({
		o: () => (open.value = !open.value),
	});
</script>

<template>
	<USelect
		v-model="value"
		v-model:open="open"
		:items="items"
		class="w-48"
	/>
</template>
```

> [!NOTE]
>
> In this example, leveraging [`defineShortcuts`](/docs/composables/define-shortcuts), you can toggle the Select by pressing <kbd value="O">
>
> </kbd>
>
> .

### With rotating icon

Here is an example with a rotating icon that indicates the open state of the Select.

```vue [SelectIconExample.vue]
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelect
		v-model="value"
		:items="items"
		:ui="{
			trailingIcon:
				'group-data-[state=open]:rotate-180 transition-transform duration-200',
		}"
		class="w-48"
	/>
</template>
```

### With fetched items

You can fetch items from an API and use them in the Select.

```vue [SelectFetchExample.vue]
<script setup lang="ts">
	import type { AvatarProps } from '@nuxt/ui';

	const {
		data: users,
		status,
		execute,
	} = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
		key: 'typicode-users',
		transform: (data: { id: number; name: string }[]) => {
			return data?.map((user) => ({
				label: user.name,
				value: String(user.id),
				avatar: {
					src: `https://i.pravatar.cc/120?img=${user.id}`,
					loading: 'lazy' as const,
				},
			}));
		},
		immediate: false,
	});

	function getUserAvatar(value: string) {
		return users.value?.find((user) => user.value === value)?.avatar || {};
	}

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}
</script>

<template>
	<USelect
		:items="users"
		:loading="status === 'pending'"
		icon="i-lucide-user"
		placeholder="Select user"
		value-key="value"
		class="w-48"
		@update:open="onOpen"
	>
		<template #leading="{ modelValue, ui }">
			<UAvatar
				v-if="modelValue"
				v-bind="getUserAvatar(modelValue)"
				:size="ui.leadingAvatarSize() as AvatarProps['size']"
				:class="ui.leadingAvatar()"
			/>
		</template>
	</USelect>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the menu opens, avoiding unnecessary API calls on page load.

### With infinite scroll `4.4+`

You can use the [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable to load more data as the user scrolls.

```vue [SelectInfiniteScrollExample.vue]
<script setup lang="ts">
	import { useInfiniteScroll } from '@vueuse/core';

	type User = {
		firstName: string;
	};

	type UserResponse = {
		users: User[];
		total: number;
		skip: number;
		limit: number;
	};

	const skip = ref(0);

	const { data, status, execute } = await useLazyFetch(
		'https://dummyjson.com/users?limit=10&select=firstName',
		{
			key: 'select-users-infinite-scroll',
			params: { skip },
			transform: (data?: UserResponse) => {
				return data?.users.map((user) => user.firstName);
			},
			immediate: false,
		},
	);

	const users = ref<string[]>([]);

	watch(data, () => {
		users.value = [...users.value, ...(data.value || [])];
	});

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}

	const select = useTemplateRef('select');

	onMounted(() => {
		useInfiniteScroll(
			() => select.value?.viewportRef,
			() => {
				skip.value += 10;
			},
			{
				canLoadMore: () => {
					return status.value !== 'pending';
				},
			},
		);
	});
</script>

<template>
	<USelect
		ref="select"
		placeholder="Select user"
		:items="users"
		@update:open="onOpen"
	/>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `immediate: false` so data is only loaded as the user scrolls.

### With full content width

You can expand the content to the full width of its items by adding the `min-w-fit` class on the `ui.content` slot.

```vue [SelectContentWidthExample.vue]
<script setup lang="ts">
	const value = ref<string>();

	const { data: users, execute } = await useLazyFetch(
		'https://jsonplaceholder.typicode.com/users',
		{
			key: 'typicode-users-email',
			transform: (data: { id: number; name: string; email: string }[]) => {
				return data?.map((user) => ({
					label: user.name,
					email: user.email,
					value: String(user.id),
					avatar: {
						src: `https://i.pravatar.cc/120?img=${user.id}`,
						loading: 'lazy' as const,
					},
				}));
			},
			immediate: false,
		},
	);

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}
</script>

<template>
	<USelect
		v-model="value"
		:items="users"
		placeholder="Select user"
		value-key="value"
		:ui="{ content: 'min-w-fit' }"
		class="w-48"
		@update:open="onOpen"
	>
		<template #item-label="{ item }">
			{{ item.label }}

			<span class="text-muted">
				{{ item.email }}
			</span>
		</template>
	</USelect>
</template>
```

> [!TIP]
>
> You can also change the content width globally in your `app.config.ts`:
>
> ```text
> export default defineAppConfig({
>   ui: {
>     select: {
>       slots: {
>         content: 'min-w-fit'
>       }
>     }
>   }
> })
> ```

## API

### Props

```ts
/**
 * Props for the Select component
 */
interface SelectProps {
	id?: string | undefined;
	/**
	 * The placeholder text when the select is empty.
	 */
	placeholder?: string | undefined;
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
	 * @default 'outline'
	 */
	variant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'none' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'sm' | 'md' | 'xs' | 'lg' | 'xl' | undefined;
	/**
	 * The icon displayed to open the menu.
	 * @default appConfig.ui.icons.chevronDown
	 */
	trailingIcon?: any;
	/**
	 * The icon displayed when an item is selected.
	 * @default appConfig.ui.icons.check
	 */
	selectedIcon?: any;
	/**
	 * The content of the menu.
	 * @default { side: 'bottom', sideOffset: 8, collisionPadding: 8, position: 'popper' }
	 */
	content?:
		| (Omit<SelectContentProps, 'as' | 'asChild' | 'forceMount'> &
				Partial<EmitsToProps<SelectContentImplEmits>>)
		| undefined;
	/**
	 * Display an arrow alongside the menu.
	 * `{ rounded: true }`{lang="ts-type"}
	 * @default false
	 */
	arrow?: boolean | Omit<SelectArrowProps, 'as' | 'asChild'> | undefined;
	/**
	 * Render the menu in a portal.
	 * @default true
	 */
	portal?: string | false | true | HTMLElement | undefined;
	/**
	 * When `items` is an array of objects, select the field to use as the value.
	 * @default 'value'
	 */
	valueKey?: VK | undefined;
	/**
	 * When `items` is an array of objects, select the field to use as the label.
	 * @default 'label'
	 */
	labelKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	/**
	 * When `items` is an array of objects, select the field to use as the description.
	 * @default 'description'
	 */
	descriptionKey?:
		| (keyof Extract<NestedItem<T>, object> & string)
		| DotPathKeys<Extract<NestedItem<T>, object>>
		| undefined;
	items?: T | undefined;
	/**
	 * The value of the Select when initially rendered. Use when you do not need to control the state of the Select.
	 */
	defaultValue?:
		| _Number<
				_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>,
				Mod
		  >
		| undefined;
	/**
	 * The controlled value of the Select. Can be bind as `v-model`.
	 */
	modelValue?:
		| _Number<
				_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>,
				Mod
		  >
		| undefined;
	modelModifiers?: Mod | undefined;
	/**
	 * Whether multiple options can be selected or not.
	 */
	multiple?: M | undefined;
	/**
	 * Highlight the ring color like a focus state.
	 */
	highlight?: boolean | undefined;
	autofocus?: boolean | undefined;
	/**
	 * @default 0
	 */
	autofocusDelay?: number | undefined;
	ui?:
		| {
				base?: SlotClass;
				leading?: SlotClass;
				leadingIcon?: SlotClass;
				leadingAvatar?: SlotClass;
				leadingAvatarSize?: SlotClass;
				trailing?: SlotClass;
				trailingIcon?: SlotClass;
				value?: SlotClass;
				placeholder?: SlotClass;
				arrow?: SlotClass;
				content?: SlotClass;
				viewport?: SlotClass;
				group?: SlotClass;
				empty?: SlotClass;
				label?: SlotClass;
				separator?: SlotClass;
				item?: SlotClass;
				itemLeadingIcon?: SlotClass;
				itemLeadingAvatar?: SlotClass;
				itemLeadingAvatarSize?: SlotClass;
				itemLeadingChip?: SlotClass;
				itemLeadingChipSize?: SlotClass;
				itemTrailing?: SlotClass;
				itemTrailingIcon?: SlotClass;
				itemWrapper?: SlotClass;
				itemLabel?: SlotClass;
				itemDescription?: SlotClass;
		  }
		| undefined;
	/**
	 * When `true`, prevents the user from interacting with Select
	 */
	disabled?: boolean | undefined;
	/**
	 * The controlled open state of the Select. Can be bind as `v-model:open`.
	 */
	open?: boolean | undefined;
	/**
	 * The open state of the select when it is initially rendered. Use when you do not need to control its open state.
	 */
	defaultOpen?: boolean | undefined;
	/**
	 * The value of the hidden native select option when the model value is nullish.
	 */
	nullableValue?: string | undefined;
	/**
	 * Native html input `autocomplete` attribute.
	 */
	autocomplete?: string | undefined;
	/**
	 * The name of the field. Submitted with its owning form as part of a name/value pair.
	 */
	name?: string | undefined;
	/**
	 * When `true`, indicates that the user must set the value before the owning form can be submitted.
	 */
	required?: boolean | undefined;
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
	 * When `true`, the loading icon will be displayed.
	 */
	loading?: boolean | undefined;
	/**
	 * The icon when the `loading` prop is `true`.
	 * @default appConfig.ui.icons.loading
	 */
	loadingIcon?: any;
	form?: string | undefined;
	formaction?: string | undefined;
	formenctype?: string | undefined;
	formmethod?: string | undefined;
	formnovalidate?: false | true | 'true' | 'false' | undefined;
	formtarget?: string | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
>
> This component also supports all native `<button>` HTML attributes.

### Slots

```ts
/**
 * Slots for the Select component
 */
interface SelectSlots {
  leading(): any;
  default(): any;
  trailing(): any;
  item(): any;
  item-leading(): any;
  item-label(): any;
  item-description(): any;
  item-trailing(): any;
  content-top(): any;
  content-bottom(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Select component
 */
interface SelectEmits {
  update:modelValue: (payload: [value: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod>]) => void;
  update:open: (payload: [value: boolean]) => void;
  change: (payload: [event: Event]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  focus: (payload: [event: FocusEvent]) => void;
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
          triggerRef
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
          HTMLButtonElement
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
          viewportRef
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
          HTMLDivElement
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
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		select: {
			slots: {
				base: [
					'relative group rounded-md inline-flex items-center disabled:cursor-not-allowed disabled:opacity-75',
					'transition-colors',
				],
				leading: 'absolute inset-y-0 start-0 flex items-center',
				leadingIcon: 'shrink-0 text-dimmed',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailing: 'absolute inset-y-0 end-0 flex items-center',
				trailingIcon: 'shrink-0 text-dimmed',
				value: 'truncate pointer-events-none',
				placeholder: 'truncate text-dimmed',
				arrow: 'fill-bg stroke-default',
				content:
					'max-h-[min(15rem,var(--reka-select-content-available-height,15rem))] w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col',
				viewport:
					'relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1',
				group: 'p-1 isolate',
				empty: 'text-center text-muted',
				label: 'font-semibold text-highlighted',
				separator: '-mx-1 my-1 h-px bg-border',
				item: [
					'group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50',
					'transition-colors before:transition-colors',
				],
				itemLeadingIcon: [
					'shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default',
					'transition-colors',
				],
				itemLeadingAvatar: 'shrink-0',
				itemLeadingAvatarSize: '',
				itemLeadingChip: 'shrink-0',
				itemLeadingChipSize: '',
				itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
				itemTrailingIcon: 'shrink-0',
				itemWrapper: 'flex-1 flex flex-col min-w-0',
				itemLabel: 'truncate',
				itemDescription: 'truncate text-muted',
			},
			variants: {
				fieldGroup: {
					horizontal:
						'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
					vertical:
						'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
				},
				size: {
					xs: {
						base: 'px-2 py-1 text-xs gap-1',
						leading: 'ps-2',
						trailing: 'pe-2',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						label: 'p-1 text-[10px]/3 gap-1',
						item: 'p-1 text-xs gap-1',
						itemLeadingIcon: 'size-4',
						itemLeadingAvatarSize: '3xs',
						itemLeadingChip: 'size-4',
						itemLeadingChipSize: 'sm',
						itemTrailingIcon: 'size-4',
						empty: 'p-2 text-xs',
					},
					sm: {
						base: 'px-2.5 py-1.5 text-xs gap-1.5',
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						label: 'p-1.5 text-[10px]/3 gap-1.5',
						item: 'p-1.5 text-xs gap-1.5',
						itemLeadingIcon: 'size-4',
						itemLeadingAvatarSize: '3xs',
						itemLeadingChip: 'size-4',
						itemLeadingChipSize: 'sm',
						itemTrailingIcon: 'size-4',
						empty: 'p-2.5 text-xs',
					},
					md: {
						base: 'px-2.5 py-1.5 text-sm gap-1.5',
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						label: 'p-1.5 text-xs gap-1.5',
						item: 'p-1.5 text-sm gap-1.5',
						itemLeadingIcon: 'size-5',
						itemLeadingAvatarSize: '2xs',
						itemLeadingChip: 'size-5',
						itemLeadingChipSize: 'md',
						itemTrailingIcon: 'size-5',
						empty: 'p-2.5 text-sm',
					},
					lg: {
						base: 'px-3 py-2 text-sm gap-2',
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						label: 'p-2 text-xs gap-2',
						item: 'p-2 text-sm gap-2',
						itemLeadingIcon: 'size-5',
						itemLeadingAvatarSize: '2xs',
						itemLeadingChip: 'size-5',
						itemLeadingChipSize: 'md',
						itemTrailingIcon: 'size-5',
						empty: 'p-3 text-sm',
					},
					xl: {
						base: 'px-3 py-2 text-base gap-2',
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-6',
						leadingAvatarSize: 'xs',
						trailingIcon: 'size-6',
						label: 'p-2 text-sm gap-2',
						item: 'p-2 text-base gap-2',
						itemLeadingIcon: 'size-6',
						itemLeadingAvatarSize: 'xs',
						itemLeadingChip: 'size-6',
						itemLeadingChipSize: 'lg',
						itemTrailingIcon: 'size-6',
						empty: 'p-3 text-base',
					},
				},
				variant: {
					outline:
						'text-highlighted bg-default ring ring-inset ring-accented hover:bg-elevated disabled:bg-default',
					soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
					subtle:
						'text-highlighted bg-elevated ring ring-inset ring-accented hover:bg-accented/75 disabled:bg-elevated',
					ghost:
						'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
					none: 'text-highlighted bg-transparent focus:outline-none',
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
				leading: {
					true: '',
				},
				trailing: {
					true: '',
				},
				loading: {
					true: '',
				},
				highlight: {
					true: '',
				},
				fixed: {
					false: '',
				},
				type: {
					file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none',
				},
				position: {
					popper: {
						content:
							'data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)]',
					},
					'item-aligned': {
						content: '',
					},
				},
				multiple: {
					true: '',
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: ['outline', 'subtle'],
					class:
						'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: ['outline', 'subtle'],
					class:
						'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: ['outline', 'subtle'],
					class:
						'outline-success/25 focus-visible:outline-3 focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: ['outline', 'subtle'],
					class:
						'outline-info/25 focus-visible:outline-3 focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: ['outline', 'subtle'],
					class:
						'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: ['outline', 'subtle'],
					class:
						'outline-error/25 focus-visible:outline-3 focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: ['soft', 'ghost'],
					class: 'outline-primary/25 focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: ['soft', 'ghost'],
					class: 'outline-secondary/25 focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: ['soft', 'ghost'],
					class: 'outline-success/25 focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: ['soft', 'ghost'],
					class: 'outline-info/25 focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: ['soft', 'ghost'],
					class: 'outline-warning/25 focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: ['soft', 'ghost'],
					class: 'outline-error/25 focus-visible:outline-3',
				},
				{
					color: 'primary',
					highlight: true,
					class: 'ring ring-inset ring-primary',
				},
				{
					color: 'secondary',
					highlight: true,
					class: 'ring ring-inset ring-secondary',
				},
				{
					color: 'success',
					highlight: true,
					class: 'ring ring-inset ring-success',
				},
				{
					color: 'info',
					highlight: true,
					class: 'ring ring-inset ring-info',
				},
				{
					color: 'warning',
					highlight: true,
					class: 'ring ring-inset ring-warning',
				},
				{
					color: 'error',
					highlight: true,
					class: 'ring ring-inset ring-error',
				},
				{
					color: 'neutral',
					variant: ['outline', 'subtle'],
					class:
						'outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: ['soft', 'ghost'],
					class: 'outline-inverted/25 focus-visible:outline-3',
				},
				{
					color: 'neutral',
					highlight: true,
					class: 'ring ring-inset ring-inverted',
				},
				{
					leading: true,
					size: 'xs',
					class: 'ps-7',
				},
				{
					leading: true,
					size: 'sm',
					class: 'ps-8',
				},
				{
					leading: true,
					size: 'md',
					class: 'ps-9',
				},
				{
					leading: true,
					size: 'lg',
					class: 'ps-10',
				},
				{
					leading: true,
					size: 'xl',
					class: 'ps-11',
				},
				{
					trailing: true,
					size: 'xs',
					class: 'pe-7',
				},
				{
					trailing: true,
					size: 'sm',
					class: 'pe-8',
				},
				{
					trailing: true,
					size: 'md',
					class: 'pe-9',
				},
				{
					trailing: true,
					size: 'lg',
					class: 'pe-10',
				},
				{
					trailing: true,
					size: 'xl',
					class: 'pe-11',
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
				{
					fixed: false,
					size: 'xs',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'sm',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'md',
					class: 'md:text-sm',
				},
				{
					fixed: false,
					size: 'lg',
					class: 'md:text-sm',
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'outline',
				position: 'popper',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Select.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/select.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "SelectMenu"
description: "An advanced searchable select element."
canonical_url: "https://ui.nuxt.com/docs/components/select-menu"

---

# SelectMenu

> An advanced searchable select element.

## Usage

Use the `v-model` directive to control the value of the SelectMenu or the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		:items="items"
	/>
</template>
```

> [!TIP]
>
> Use this over a [`Select`](/docs/components/select) to take advantage of Reka UI's [`Combobox`](https://reka-ui.com/docs/components/combobox) component that offers search capabilities and multiple selection.

> [!NOTE]
>
> This component is similar to the [`InputMenu`](/docs/components/input-menu) but it's using a Select instead of an Input with the search inside the menu.

### Items

Use the `items` prop as an array of strings, numbers or booleans:

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		:items="items"
		class="w-48"
	/>
</template>
```

You can also pass an array of objects with the following properties:

- `label?: string`
- [`type?: "label" | "separator" | "item"`](#with-items-type)
- [`icon?: string`](#with-icons-in-items)
- [`avatar?: AvatarProps`](#with-avatar-in-items)
- [`chip?: ChipProps`](#with-chip-in-items)
- `disabled?: boolean`
- `onSelect?: (e: Event) => void`
- `class?: any`
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`

```vue
<script setup lang="ts">
	import type { SelectMenuItem } from '@nuxt/ui';

	const items = ref<SelectMenuItem[]>([
		{
			label: 'Backlog',
		},
		{
			label: 'Todo',
		},
		{
			label: 'In Progress',
		},
		{
			label: 'Done',
		},
	]);
	const value = ref({
		label: 'Todo',
	});
</script>

<template>
	<USelectMenu
		v-model="value"
		:items="items"
		class="w-48"
	/>
</template>
```

> [!CAUTION]
>
> Unlike the [`Select`](/docs/components/select) component, the SelectMenu expects the whole object to be passed to the `v-model` directive or the `default-value` prop by default.

You can also pass an array of arrays to the `items` prop to display separated groups of items.

```vue
<script setup lang="ts">
	const items = ref([
		['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'],
		['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek'],
	]);
	const value = ref('Apple');
</script>

<template>
	<USelectMenu
		v-model="value"
		:items="items"
		class="w-48"
	/>
</template>
```

### Value Key

You can choose to bind a single property of the object rather than the whole object by using the `value-key` prop. Defaults to `undefined`.

```vue
<script setup lang="ts">
	import type { SelectMenuItem } from '@nuxt/ui';

	const items = ref<SelectMenuItem[]>([
		{
			label: 'Backlog',
			id: 'backlog',
		},
		{
			label: 'Todo',
			id: 'todo',
		},
		{
			label: 'In Progress',
			id: 'in_progress',
		},
		{
			label: 'Done',
			id: 'done',
		},
	]);
	const value = ref('todo');
</script>

<template>
	<USelectMenu
		v-model="value"
		value-key="id"
		:items="items"
		class="w-48"
	/>
</template>
```

> [!TIP]
>
> Use the `by` prop to compare objects by a field instead of reference when the `model-value` is an object.

### Multiple

Use the `multiple` prop to allow multiple selections, the selected items will be separated by a comma in the trigger.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref(['Backlog', 'Todo']);
</script>

<template>
	<USelectMenu
		v-model="value"
		multiple
		:items="items"
		class="w-48"
	/>
</template>
```

> [!CAUTION]
>
> Ensure to pass an array to the `default-value` prop or the `v-model` directive.

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
</script>

<template>
	<USelectMenu
		placeholder="Select status"
		:items="items"
		class="w-48"
	/>
</template>
```

### Search Input

Use the `search-input` prop to customize or hide the search input (with `false` value).

You can pass any property from the [Input](/docs/components/input) component to customize it.

```vue
<script setup lang="ts">
	import type { SelectMenuItem } from '@nuxt/ui';

	const items = ref<SelectMenuItem[]>([
		{
			label: 'Backlog',
			icon: 'i-lucide-circle-help',
		},
		{
			label: 'Todo',
			icon: 'i-lucide-circle-plus',
		},
		{
			label: 'In Progress',
			icon: 'i-lucide-circle-arrow-up',
		},
		{
			label: 'Done',
			icon: 'i-lucide-circle-check',
		},
	]);
	const value = ref({
		label: 'Backlog',
		icon: 'i-lucide-circle-help',
	});
</script>

<template>
	<USelectMenu
		v-model="value"
		:search-input="{
			placeholder: 'Filter...',
			icon: 'i-lucide-search',
		}"
		:items="items"
		class="w-48"
	/>
</template>
```

> [!TIP]
>
> You can set the `search-input` prop to `false` to hide the search input.

### Content

Use the `content` prop to control how the SelectMenu content is rendered, like its `align` or `side` for example.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		:content="{
			align: 'center',
			side: 'bottom',
			sideOffset: 8,
		}"
		:items="items"
		class="w-48"
	/>
</template>
```

### Arrow

Use the `arrow` prop to display an arrow on the SelectMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		arrow
		:items="items"
		class="w-48"
	/>
</template>
```

### Color

Use the `color` prop to change the ring color when the SelectMenu is focused.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		color="neutral"
		highlight
		:items="items"
		class="w-48"
	/>
</template>
```

> [!NOTE]
>
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the SelectMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		color="neutral"
		variant="subtle"
		:highlight="false"
		:items="items"
		class="w-48"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the SelectMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		size="xl"
		:items="items"
		class="w-48"
	/>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the SelectMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		icon="i-lucide-search"
		size="md"
		:items="items"
		class="w-48"
	/>
</template>
```

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/docs/components/icon). Defaults to `i-lucide-chevron-down`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		trailing-icon="i-lucide-arrow-down"
		size="md"
		:items="items"
		class="w-48"
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

### Selected Icon

Use the `selected-icon` prop to customize the icon when an item is selected. Defaults to `i-lucide-check`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		selected-icon="i-lucide-flame"
		size="md"
		:items="items"
		class="w-48"
	/>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
>
> You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
>
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key.

### Clear `4.4+`

Use the `clear` prop to display a clear button when a value is selected.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		clear
		:items="items"
		class="w-48"
	/>
</template>
```

### Clear Icon `4.4+`

Use the `clear-icon` prop to customize the clear button [Icon](/docs/components/icon). Defaults to `i-lucide-x`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		clear
		clear-icon="i-lucide-trash"
		:items="items"
		class="w-48"
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

### Avatar

Use the `avatar` prop to display an [Avatar](/docs/components/avatar) inside the SelectMenu.

```vue
<script setup lang="ts">
	const items = ref([
		'Nuxt',
		'NuxtHub',
		'NuxtLabs',
		'Nuxt Modules',
		'Nuxt Community',
	]);
	const value = ref('Nuxt');
</script>

<template>
	<USelectMenu
		v-model="value"
		:avatar="{
			src: 'https://github.com/nuxt.png',
			loading: 'lazy',
		}"
		:items="items"
		class="w-48"
	/>
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the SelectMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		loading
		:trailing="false"
		:items="items"
		class="w-48"
	/>
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		loading
		loading-icon="i-lucide-loader"
		:items="items"
		class="w-48"
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

### Disabled

Use the `disabled` prop to disable the SelectMenu.

```vue
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
</script>

<template>
	<USelectMenu
		disabled
		placeholder="Select status"
		:items="items"
		class="w-48"
	/>
</template>
```

## Examples

### With items type

You can use the `type` property with `separator` to display a separator between items or `label` to display a label.

```vue
<script setup lang="ts">
	import type { SelectMenuItem } from '@nuxt/ui';

	const items = ref<SelectMenuItem[]>([
		[
			{
				type: 'label',
				label: 'Fruits',
			},
			'Apple',
			'Banana',
			'Blueberry',
			'Grapes',
			'Pineapple',
		],
		[
			{
				type: 'label',
				label: 'Vegetables',
			},
			'Aubergine',
			'Broccoli',
			'Carrot',
			'Courgette',
			'Leek',
		],
	]);
	const value = ref('Apple');
</script>

<template>
	<USelectMenu
		v-model="value"
		:items="items"
		class="w-48"
	/>
</template>
```

> [!NOTE]
>
> When using `label` items as group headings, pass an array of arrays so a label gets filtered out together with its group when searching.

### With icon in items

You can use the `icon` property to display an [Icon](/docs/components/icon) inside the items.

```vue [SelectMenuItemsIconExample.vue]
<script setup lang="ts">
	import type { SelectMenuItem } from '@nuxt/ui';

	const items = ref([
		{
			label: 'Backlog',
			value: 'backlog',
			icon: 'i-lucide-circle-help',
		},
		{
			label: 'Todo',
			value: 'todo',
			icon: 'i-lucide-circle-plus',
		},
		{
			label: 'In Progress',
			value: 'in_progress',
			icon: 'i-lucide-circle-arrow-up',
		},
		{
			label: 'Done',
			value: 'done',
			icon: 'i-lucide-circle-check',
		},
	] satisfies SelectMenuItem[]);

	const value = ref(items.value[0]);
</script>

<template>
	<USelectMenu
		v-model="value"
		:icon="value?.icon"
		:items="items"
		class="w-48"
	/>
</template>
```

> [!TIP]
>
> You can also use the `#leading` slot to display the selected icon.

### With avatar in items

You can use the `avatar` property to display an [Avatar](/docs/components/avatar) inside the items.

```vue [SelectMenuItemsAvatarExample.vue]
<script setup lang="ts">
	import type { SelectMenuItem } from '@nuxt/ui';

	const items = ref([
		{
			label: 'benjamincanac',
			value: 'benjamincanac',
			avatar: {
				src: 'https://github.com/benjamincanac.png',
				alt: 'benjamincanac',
				loading: 'lazy' as const,
			},
		},
		{
			label: 'romhml',
			value: 'romhml',
			avatar: {
				src: 'https://github.com/romhml.png',
				alt: 'romhml',
				loading: 'lazy' as const,
			},
		},
		{
			label: 'noook',
			value: 'noook',
			avatar: {
				src: 'https://github.com/noook.png',
				alt: 'noook',
				loading: 'lazy' as const,
			},
		},
		{
			label: 'sandros94',
			value: 'sandros94',
			avatar: {
				src: 'https://github.com/sandros94.png',
				alt: 'sandros94',
				loading: 'lazy' as const,
			},
		},
	] satisfies SelectMenuItem[]);

	const value = ref(items.value[0]);
</script>

<template>
	<USelectMenu
		v-model="value"
		:avatar="value?.avatar"
		:items="items"
		class="w-48"
	/>
</template>
```

> [!TIP]
>
> You can also use the `#leading` slot to display the selected avatar.

### With chip in items

You can use the `chip` property to display a [Chip](/docs/components/chip) inside the items.

```vue [SelectMenuItemsChipExample.vue]
<script setup lang="ts">
	import type { SelectMenuItem, ChipProps } from '@nuxt/ui';

	const items = ref([
		{
			label: 'bug',
			value: 'bug',
			chip: {
				color: 'error',
			},
		},
		{
			label: 'feature',
			value: 'feature',
			chip: {
				color: 'success',
			},
		},
		{
			label: 'enhancement',
			value: 'enhancement',
			chip: {
				color: 'info',
			},
		},
	] satisfies SelectMenuItem[]);

	const value = ref(items.value[0]);
</script>

<template>
	<USelectMenu
		v-model="value"
		:items="items"
		class="w-48"
	>
		<template #leading="{ modelValue, ui }">
			<UChip
				v-if="modelValue"
				v-bind="modelValue.chip"
				inset
				standalone
				:size="ui.itemLeadingChipSize() as ChipProps['size']"
				:class="ui.itemLeadingChip()"
			/>
		</template>
	</USelectMenu>
</template>
```

> [!NOTE]
>
> In this example, the `#leading` slot is used to display the selected chip.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [SelectMenuOpenExample.vue]
<script setup lang="ts">
	const open = ref(false);
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');

	defineShortcuts({
		o: () => (open.value = !open.value),
	});
</script>

<template>
	<USelectMenu
		v-model="value"
		v-model:open="open"
		:items="items"
		class="w-48"
	/>
</template>
```

> [!NOTE]
>
> In this example, leveraging [`defineShortcuts`](/docs/composables/define-shortcuts), you can toggle the SelectMenu by pressing <kbd value="O">
>
> </kbd>
>
> .

### Control search term

Use the `v-model:search-term` directive to control the search term.

```vue [SelectMenuSearchTermExample.vue]
<script setup lang="ts">
	const searchTerm = ref('D');
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		v-model:search-term="searchTerm"
		:items="items"
		class="w-48"
	/>
</template>
```

### With rotating icon

Here is an example with a rotating icon that indicates the open state of the SelectMenu.

```vue [SelectMenuIconExample.vue]
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');
</script>

<template>
	<USelectMenu
		v-model="value"
		:items="items"
		:ui="{
			trailingIcon:
				'group-data-[state=open]:rotate-180 transition-transform duration-200',
		}"
		class="w-48"
	/>
</template>
```

### With create item

Use the `create-item` prop to enable users to add custom values that aren't in the predefined options.

```vue [SelectMenuCreateItemExample.vue]
<script setup lang="ts">
	const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
	const value = ref('Backlog');

	function onCreate(item: string) {
		items.value.push(item);

		value.value = item;
	}
</script>

<template>
	<USelectMenu
		v-model="value"
		create-item
		:items="items"
		class="w-48"
		@create="onCreate"
	/>
</template>
```

> [!NOTE]
>
> The create option shows when no match is found by default. Set it to `always` to show it even when similar values exist.

> [!TIP]
> See: #emits
>
> Use the `@create` event to handle the creation of the item. You will receive the event and the item as arguments.

### With fetched items

You can fetch items from an API and use them in the SelectMenu.

```vue [SelectMenuFetchExample.vue]
<script setup lang="ts">
	import type { AvatarProps } from '@nuxt/ui';

	const {
		data: users,
		status,
		execute,
	} = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
		key: 'typicode-users',
		transform: (data: { id: number; name: string }[]) => {
			return data?.map((user) => ({
				label: user.name,
				value: String(user.id),
				avatar: {
					src: `https://i.pravatar.cc/120?img=${user.id}`,
					loading: 'lazy' as const,
				},
			}));
		},
		immediate: false,
	});

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}
</script>

<template>
	<USelectMenu
		:items="users"
		:loading="status === 'pending'"
		icon="i-lucide-user"
		placeholder="Select user"
		class="w-48"
		@update:open="onOpen"
	>
		<template #leading="{ modelValue, ui }">
			<UAvatar
				v-if="modelValue"
				v-bind="modelValue.avatar"
				:size="ui.leadingAvatarSize() as AvatarProps['size']"
				:class="ui.leadingAvatar()"
			/>
		</template>
	</USelectMenu>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the menu opens, avoiding unnecessary API calls on page load.

### With ignore filter

Set the `ignore-filter` prop to `true` to disable the internal search and use your own search logic.

```vue [SelectMenuIgnoreFilterExample.vue]
<script setup lang="ts">
	import { refDebounced } from '@vueuse/core';
	import type { AvatarProps } from '@nuxt/ui';

	const searchTerm = ref('');
	const searchTermDebounced = refDebounced(searchTerm, 200);

	const {
		data: users,
		status,
		execute,
	} = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
		key: 'select-menu-users-search',
		params: { q: searchTermDebounced },
		transform: (data: { id: number; name: string }[]) => {
			return data?.map((user) => ({
				label: user.name,
				value: String(user.id),
				avatar: {
					src: `https://i.pravatar.cc/120?img=${user.id}`,
					loading: 'lazy' as const,
				},
			}));
		},
		immediate: false,
	});

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}
</script>

<template>
	<USelectMenu
		v-model:search-term="searchTerm"
		:items="users"
		:search-input="{
			icon: 'i-lucide-search',
			loading: status === 'pending',
		}"
		ignore-filter
		icon="i-lucide-user"
		placeholder="Select user"
		class="w-48"
		@update:open="onOpen"
	>
		<template #leading="{ modelValue, ui }">
			<UAvatar
				v-if="modelValue"
				v-bind="modelValue.avatar"
				:size="ui.leadingAvatarSize() as AvatarProps['size']"
				:class="ui.leadingAvatar()"
			/>
		</template>
	</USelectMenu>
</template>
```

> [!NOTE]
>
> This example uses [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) to debounce the API calls. The fetch is deferred with `immediate: false` so no request is made until the menu opens.

### With filter fields

Use the `filter-fields` prop with an array of fields to filter on. Defaults to `[labelKey]`.

```vue [SelectMenuFilterFieldsExample.vue]
<script setup lang="ts">
	import type { AvatarProps } from '@nuxt/ui';

	const {
		data: users,
		status,
		execute,
	} = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
		key: 'typicode-users-email',
		transform: (data: { id: number; name: string; email: string }[]) => {
			return data?.map((user) => ({
				label: user.name,
				email: user.email,
				value: String(user.id),
				avatar: {
					src: `https://i.pravatar.cc/120?img=${user.id}`,
					loading: 'lazy' as const,
				},
			}));
		},
		immediate: false,
	});

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}
</script>

<template>
	<USelectMenu
		:items="users"
		:loading="status === 'pending'"
		:filter-fields="['label', 'email']"
		icon="i-lucide-user"
		placeholder="Select user"
		class="w-80"
		@update:open="onOpen"
	>
		<template #leading="{ modelValue, ui }">
			<UAvatar
				v-if="modelValue"
				v-bind="modelValue.avatar"
				:size="ui.leadingAvatarSize() as AvatarProps['size']"
				:class="ui.leadingAvatar()"
			/>
		</template>

		<template #item-label="{ item }">
			{{ item.label }}

			<span class="text-muted">
				{{ item.email }}
			</span>
		</template>
	</USelectMenu>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the menu opens, avoiding unnecessary API calls on page load.

### With virtualization `4.1+`

Use the `virtualize` prop to enable virtualization for large lists as a boolean or an object with options like `{ estimateSize: 32, overscan: 12 }`.

> [!WARNING]
> See: https://github.com/unovue/reka-ui/issues/1885
>
> When enabled, all groups are flattened into a single list due to a limitation of Reka UI.

```vue [SelectMenuVirtualizeExample.vue]
<script setup lang="ts">
	import type { SelectMenuItem } from '@nuxt/ui';

	const items: SelectMenuItem[] = Array(1000)
		.fill(0)
		.map((_, i) => ({
			label: `item-${i}`,
			value: i,
		}));
</script>

<template>
	<USelectMenu
		virtualize
		:items="items"
		class="w-48"
	/>
</template>
```

### With infinite scroll `4.4+`

You can use the [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable to load more data as the user scrolls.

```vue [SelectMenuInfiniteScrollExample.vue]
<script setup lang="ts">
	import { useInfiniteScroll } from '@vueuse/core';

	type User = {
		firstName: string;
	};

	type UserResponse = {
		users: User[];
		total: number;
		skip: number;
		limit: number;
	};

	const skip = ref(0);

	const { data, status, execute } = await useLazyFetch(
		'https://dummyjson.com/users?limit=10&select=firstName',
		{
			key: 'select-menu-users-infinite-scroll',
			params: { skip },
			transform: (data?: UserResponse) => {
				return data?.users.map((user) => user.firstName);
			},
			immediate: false,
		},
	);

	const users = ref<string[]>([]);

	watch(data, () => {
		users.value = [...users.value, ...(data.value || [])];
	});

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}

	const selectMenu = useTemplateRef('selectMenu');

	onMounted(() => {
		useInfiniteScroll(
			() => selectMenu.value?.viewportRef,
			() => {
				skip.value += 10;
			},
			{
				canLoadMore: () => {
					return status.value !== 'pending';
				},
			},
		);
	});
</script>

<template>
	<USelectMenu
		ref="selectMenu"
		placeholder="Select user"
		:items="users"
		@update:open="onOpen"
	/>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `immediate: false` so data is only loaded as the user scrolls.

### With full content width

You can expand the content to the full width of its items by adding the `min-w-fit` class on the `ui.content` slot.

```vue [SelectMenuContentWidthExample.vue]
<script setup lang="ts">
	const { data: users, execute } = await useLazyFetch(
		'https://jsonplaceholder.typicode.com/users',
		{
			key: 'typicode-users-email',
			transform: (data: { id: number; name: string; email: string }[]) => {
				return data?.map((user) => ({
					label: user.name,
					email: user.email,
					value: String(user.id),
					avatar: {
						src: `https://i.pravatar.cc/120?img=${user.id}`,
						loading: 'lazy' as const,
					},
				}));
			},
			immediate: false,
		},
	);

	function onOpen() {
		if (!users.value?.length) {
			execute();
		}
	}
</script>

<template>
	<USelectMenu
		:items="users"
		icon="i-lucide-user"
		placeholder="Select user"
		:ui="{ content: 'min-w-fit' }"
		class="w-48"
		@update:open="onOpen"
	>
		<template #item-label="{ item }">
			{{ item.label }}

			<span class="text-muted">
				{{ item.email }}
			</span>
		</template>
	</USelectMenu>
</template>
```

> [!TIP]
>
> You can also change the content width globally in your `app.config.ts`:
>
> ```text
> export default defineAppConfig({
>   ui: {
>     selectMenu: {
>       slots: {
>         content: 'min-w-fit'
>       }
>     }
>   }
> })
> ```

### As a country picker

You can use the SelectMenu as a country picker with lazy loading. Countries are only fetched when the menu is first opened.

```vue [SelectMenuCountriesExample.vue]
<script setup lang="ts">
	const {
		data: countries,
		status,
		execute,
	} = await useLazyFetch<
		{
			name: string;
			code: string;
			emoji: string;
		}[]
	>('/api/countries.json', {
		key: 'api-countries',
		immediate: false,
	});

	function onOpen() {
		if (!countries.value?.length) {
			execute();
		}
	}
</script>

<template>
	<USelectMenu
		:items="countries"
		:loading="status === 'pending'"
		label-key="name"
		:search-input="{ icon: 'i-lucide-search' }"
		placeholder="Select country"
		class="w-48"
		@update:open="onOpen"
	>
		<template #leading="{ modelValue, ui }">
			<span
				v-if="modelValue"
				class="size-5 text-center"
			>
				{{ modelValue?.emoji }}
			</span>
			<UIcon
				v-else
				name="i-lucide-earth"
				:class="ui.leadingIcon()"
			/>
		</template>
		<template #item-leading="{ item }">
			<span class="size-5 text-center">
				{{ item.emoji }}
			</span>
		</template>
	</USelectMenu>
</template>
```

> [!NOTE]
>
> This example uses `useLazyFetch` with `immediate: false` to only load countries when the menu is first opened.

## API

### Props

```ts
/**
 * Props for the SelectMenu component
 */
interface SelectMenuProps {
  id?: string | undefined;
  /**
   * The placeholder text when the select is empty.
   */
  placeholder?: string | undefined;
  /**
   * Whether to display the search input or not.
   * Can be an object to pass additional props to the input.
   * `{ placeholder: 'Search...', variant: 'none' }`{lang="ts-type"}
   * @default true
   */
  searchInput?: boolean | Omit<InputProps<AcceptableValue, ModelModifiers>, "modelValue" | "defaultValue"> | undefined;
  /**
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined;
  /**
   * @default 'outline'
   */
  variant?: "outline" | "soft" | "subtle" | "ghost" | "none" | undefined;
  /**
   * @default 'md'
   */
  size?: "sm" | "md" | "xs" | "lg" | "xl" | undefined;
  required?: boolean | undefined;
  /**
   * The icon displayed to open the menu.
   * @default appConfig.ui.icons.chevronDown
   */
  trailingIcon?: any;
  /**
   * The icon displayed when an item is selected.
   * @default appConfig.ui.icons.check
   */
  selectedIcon?: any;
  /**
   * Display a clear button to reset the model value.
   * Can be an object to pass additional props to the Button.
   * @default false
   */
  clear?: C & false | C & true | C & Partial<Omit<ButtonProps, LinkPropsKeys>> | undefined;
  /**
   * The icon displayed in the clear button.
   * @default appConfig.ui.icons.close
   */
  clearIcon?: any;
  /**
   * The content of the menu.
   * @default { side: 'bottom', sideOffset: 8, collisionPadding: 8, position: 'popper' }
   */
  content?: Omit<ComboboxContentProps, "asChild" | "as" | "forceMount"> & Partial<EmitsToProps<DismissableLayerEmits>> | undefined;
  /**
   * Display an arrow alongside the menu.
   * `{ rounded: true }`{lang="ts-type"}
   * @default false
   */
  arrow?: boolean | Omit<ComboboxArrowProps, "asChild" | "as"> | undefined;
  /**
   * Render the menu in a portal.
   * @default true
   */
  portal?: string | false | true | HTMLElement | undefined;
  /**
   * Enable virtualization for large lists.
   * Note: when enabled, all groups are flattened into a single list due to a limitation of Reka UI (https://github.com/unovue/reka-ui/issues/1885).
   * @default false
   */
  virtualize?: boolean | { overscan?: number | undefined; estimateSize?: number | ((index: number) => number) | undefined; } | undefined;
  /**
   * When `items` is an array of objects, select the field to use as the value instead of the object itself.
   * @default undefined
   */
  valueKey?: VK | undefined;
  /**
   * When `items` is an array of objects, select the field to use as the label.
   * @default 'label'
   */
  labelKey?: keyof Extract<NestedItem<T>, object> & string | DotPathKeys<Extract<NestedItem<T>, object>> | undefined;
  /**
   * When `items` is an array of objects, select the field to use as the description.
   * @default 'description'
   */
  descriptionKey?: keyof Extract<NestedItem<T>, object> & string | DotPathKeys<Extract<NestedItem<T>, object>> | undefined;
  items?: T | undefined;
  /**
   * The value of the SelectMenu when initially rendered. Use when you do not need to control the state of the SelectMenu.
   */
  defaultValue?: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | IsClearUsed<M, C> | undefined;
  /**
   * The controlled value of the SelectMenu. Can be binded-with with `v-model`.
   */
  modelValue?: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | IsClearUsed<M, C> | undefined;
  modelModifiers?: Mod | undefined;
  /**
   * Whether multiple options can be selected or not.
   */
  multiple?: M | undefined;
  /**
   * Highlight the ring color like a focus state.
   */
  highlight?: boolean | undefined;
  /**
   * Determines if custom user input that does not exist in options can be added.
   * @default false
   */
  createItem?: boolean | "always" | { position?: "top" | "bottom" | undefined; when?: "always" | "empty" | undefined; } | undefined;
  /**
   * Fields to filter items by.
   * @default [labelKey]
   */
  filterFields?: string[] | undefined;
  /**
   * When `true`, disable the default filters, useful for custom filtering (useAsyncData, useFetch, etc.).
   * @default false
   */
  ignoreFilter?: boolean | undefined;
  autofocus?: boolean | undefined;
  /**
   * @default 0
   */
  autofocusDelay?: number | undefined;
  ui?: { base?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailing?: SlotClass; trailingIcon?: SlotClass; value?: SlotClass; placeholder?: SlotClass; arrow?: SlotClass; content?: SlotClass; viewport?: SlotClass; group?: SlotClass; empty?: SlotClass; label?: SlotClass; separator?: SlotClass; item?: SlotClass; itemLeadingIcon?: SlotClass; itemLeadingAvatar?: SlotClass; itemLeadingAvatarSize?: SlotClass; itemLeadingChip?: SlotClass; itemLeadingChipSize?: SlotClass; itemTrailing?: SlotClass; itemTrailingIcon?: SlotClass; itemWrapper?: SlotClass; itemLabel?: SlotClass; itemDescription?: SlotClass; input?: SlotClass; focusScope?: SlotClass; trailingClear?: SlotClass; } | undefined;
  /**
   * When `true`, prevents the user from interacting with listbox
   */
  disabled?: boolean | undefined;
  /**
   * The controlled open state of the Combobox. Can be binded with `v-model:open`.
   */
  open?: boolean | undefined;
  /**
   * The open state of the combobox when it is initially rendered. <br> Use when you do not need to control its open state.
   */
  defaultOpen?: boolean | undefined;
  /**
   * The name of the field. Submitted with its owning form as part of a name/value pair.
   */
  name?: string | undefined;
  /**
   * Whether to reset the searchTerm when the Combobox input blurred
   * @default true
   */
  resetSearchTermOnBlur?: boolean | undefined;
  /**
   * Whether to reset the searchTerm when the Combobox value is selected
   * @default true
   */
  resetSearchTermOnSelect?: boolean | undefined;
  /**
   * When `true` the `modelValue` will be reset to `null` (or `[]` if `multiple`)
   * @default true
   */
  resetModelValueOnClear?: boolean | undefined;
  /**
   * When `true`, hover over item will trigger highlight
   */
  highlightOnHover?: boolean | undefined;
  /**
   * Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.
   */
  by?: string | (a: T, b: T): boolean | undefined;
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
   * When `true`, the loading icon will be displayed.
   */
  loading?: boolean | undefined;
  /**
   * The icon when the `loading` prop is `true`.
   * @default appConfig.ui.icons.loading
   */
  loadingIcon?: any;
  form?: string | undefined;
  formaction?: string | undefined;
  formenctype?: string | undefined;
  formmethod?: string | undefined;
  formnovalidate?: false | true | "true" | "false" | undefined;
  formtarget?: string | undefined;
  /**
   * @default ''
   */
  searchTerm?: string | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
>
> This component also supports all native `<button>` HTML attributes.

### Slots

```ts
/**
 * Slots for the SelectMenu component
 */
interface SelectMenuSlots {
  leading(): any;
  default(): any;
  trailing(): any;
  empty(): any;
  item(): any;
  item-leading(): any;
  item-label(): any;
  item-description(): any;
  item-trailing(): any;
  content-top(): any;
  content-bottom(): any;
  create-item-label(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the SelectMenu component
 */
interface SelectMenuEmits {
  update:open: (payload: [value: boolean]) => void;
  change: (payload: [event: Event]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  focus: (payload: [event: FocusEvent]) => void;
  create: (payload: [item: string]) => void;
  clear: (payload: []) => void;
  highlight: (payload: [payload: { ref: HTMLElement; value: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | IsClearUsed<M, C>; } | undefined]) => void;
  update:modelValue: (payload: [value: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod> | IsClearUsed<M, C>]) => void;
  update:searchTerm: (payload: [value: string]) => void;
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
          triggerRef
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
          HTMLButtonElement
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
          viewportRef
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
          HTMLDivElement
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
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		selectMenu: {
			slots: {
				base: [
					'relative group rounded-md inline-flex items-center disabled:cursor-not-allowed disabled:opacity-75',
					'transition-colors',
				],
				leading: 'absolute inset-y-0 start-0 flex items-center',
				leadingIcon: 'shrink-0 text-dimmed',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailing: 'absolute inset-y-0 end-0 flex items-center',
				trailingIcon: 'shrink-0 text-dimmed',
				value: 'truncate pointer-events-none',
				placeholder: 'truncate text-dimmed',
				arrow: 'fill-bg stroke-default',
				content: [
					'max-h-[min(15rem,var(--reka-select-content-available-height,15rem))] w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col',
					'max-h-[min(15rem,var(--reka-combobox-content-available-height,15rem))] origin-(--reka-combobox-content-transform-origin) w-(--reka-combobox-trigger-width)',
				],
				viewport: 'relative scroll-py-1 overflow-y-auto flex-1',
				group: 'p-1 isolate',
				empty: 'text-center text-muted',
				label: 'font-semibold text-highlighted',
				separator: '-mx-1 my-1 h-px bg-border',
				item: [
					'group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50',
					'transition-colors before:transition-colors',
				],
				itemLeadingIcon: [
					'shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default',
					'transition-colors',
				],
				itemLeadingAvatar: 'shrink-0',
				itemLeadingAvatarSize: '',
				itemLeadingChip: 'shrink-0',
				itemLeadingChipSize: '',
				itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
				itemTrailingIcon: 'shrink-0',
				itemWrapper: 'flex-1 flex flex-col min-w-0',
				itemLabel: 'truncate',
				itemDescription: 'truncate text-muted',
				input: 'border-b border-default',
				focusScope: 'flex flex-col min-h-0',
				trailingClear: 'p-0',
			},
			variants: {
				fieldGroup: {
					horizontal:
						'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
					vertical:
						'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
				},
				size: {
					xs: {
						base: 'px-2 py-1 text-xs gap-1',
						leading: 'ps-2',
						trailing: 'pe-2',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						label: 'p-1 text-[10px]/3 gap-1',
						item: 'p-1 text-xs gap-1',
						itemLeadingIcon: 'size-4',
						itemLeadingAvatarSize: '3xs',
						itemLeadingChip: 'size-4',
						itemLeadingChipSize: 'sm',
						itemTrailingIcon: 'size-4',
						empty: 'p-2 text-xs',
					},
					sm: {
						base: 'px-2.5 py-1.5 text-xs gap-1.5',
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
						label: 'p-1.5 text-[10px]/3 gap-1.5',
						item: 'p-1.5 text-xs gap-1.5',
						itemLeadingIcon: 'size-4',
						itemLeadingAvatarSize: '3xs',
						itemLeadingChip: 'size-4',
						itemLeadingChipSize: 'sm',
						itemTrailingIcon: 'size-4',
						empty: 'p-2.5 text-xs',
					},
					md: {
						base: 'px-2.5 py-1.5 text-sm gap-1.5',
						leading: 'ps-2.5',
						trailing: 'pe-2.5',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						label: 'p-1.5 text-xs gap-1.5',
						item: 'p-1.5 text-sm gap-1.5',
						itemLeadingIcon: 'size-5',
						itemLeadingAvatarSize: '2xs',
						itemLeadingChip: 'size-5',
						itemLeadingChipSize: 'md',
						itemTrailingIcon: 'size-5',
						empty: 'p-2.5 text-sm',
					},
					lg: {
						base: 'px-3 py-2 text-sm gap-2',
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
						label: 'p-2 text-xs gap-2',
						item: 'p-2 text-sm gap-2',
						itemLeadingIcon: 'size-5',
						itemLeadingAvatarSize: '2xs',
						itemLeadingChip: 'size-5',
						itemLeadingChipSize: 'md',
						itemTrailingIcon: 'size-5',
						empty: 'p-3 text-sm',
					},
					xl: {
						base: 'px-3 py-2 text-base gap-2',
						leading: 'ps-3',
						trailing: 'pe-3',
						leadingIcon: 'size-6',
						leadingAvatarSize: 'xs',
						trailingIcon: 'size-6',
						label: 'p-2 text-sm gap-2',
						item: 'p-2 text-base gap-2',
						itemLeadingIcon: 'size-6',
						itemLeadingAvatarSize: 'xs',
						itemLeadingChip: 'size-6',
						itemLeadingChipSize: 'lg',
						itemTrailingIcon: 'size-6',
						empty: 'p-3 text-base',
					},
				},
				variant: {
					outline:
						'text-highlighted bg-default ring ring-inset ring-accented hover:bg-elevated disabled:bg-default',
					soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
					subtle:
						'text-highlighted bg-elevated ring ring-inset ring-accented hover:bg-accented/75 disabled:bg-elevated',
					ghost:
						'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
					none: 'text-highlighted bg-transparent focus:outline-none',
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
				leading: {
					true: '',
				},
				trailing: {
					true: '',
				},
				loading: {
					true: '',
				},
				highlight: {
					true: '',
				},
				fixed: {
					false: '',
				},
				type: {
					file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none',
				},
				position: {
					popper: {
						content:
							'data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)]',
					},
					'item-aligned': {
						content: '',
					},
				},
				multiple: {
					true: '',
				},
				virtualize: {
					true: {
						viewport: 'p-1 isolate',
					},
					false: {
						viewport: 'divide-y divide-default',
					},
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: ['outline', 'subtle'],
					class:
						'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: ['outline', 'subtle'],
					class:
						'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: ['outline', 'subtle'],
					class:
						'outline-success/25 focus-visible:outline-3 focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: ['outline', 'subtle'],
					class:
						'outline-info/25 focus-visible:outline-3 focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: ['outline', 'subtle'],
					class:
						'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: ['outline', 'subtle'],
					class:
						'outline-error/25 focus-visible:outline-3 focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: ['soft', 'ghost'],
					class: 'outline-primary/25 focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: ['soft', 'ghost'],
					class: 'outline-secondary/25 focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: ['soft', 'ghost'],
					class: 'outline-success/25 focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: ['soft', 'ghost'],
					class: 'outline-info/25 focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: ['soft', 'ghost'],
					class: 'outline-warning/25 focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: ['soft', 'ghost'],
					class: 'outline-error/25 focus-visible:outline-3',
				},
				{
					color: 'primary',
					highlight: true,
					class: 'ring ring-inset ring-primary',
				},
				{
					color: 'secondary',
					highlight: true,
					class: 'ring ring-inset ring-secondary',
				},
				{
					color: 'success',
					highlight: true,
					class: 'ring ring-inset ring-success',
				},
				{
					color: 'info',
					highlight: true,
					class: 'ring ring-inset ring-info',
				},
				{
					color: 'warning',
					highlight: true,
					class: 'ring ring-inset ring-warning',
				},
				{
					color: 'error',
					highlight: true,
					class: 'ring ring-inset ring-error',
				},
				{
					color: 'neutral',
					variant: ['outline', 'subtle'],
					class:
						'outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: ['soft', 'ghost'],
					class: 'outline-inverted/25 focus-visible:outline-3',
				},
				{
					color: 'neutral',
					highlight: true,
					class: 'ring ring-inset ring-inverted',
				},
				{
					leading: true,
					size: 'xs',
					class: 'ps-7',
				},
				{
					leading: true,
					size: 'sm',
					class: 'ps-8',
				},
				{
					leading: true,
					size: 'md',
					class: 'ps-9',
				},
				{
					leading: true,
					size: 'lg',
					class: 'ps-10',
				},
				{
					leading: true,
					size: 'xl',
					class: 'ps-11',
				},
				{
					trailing: true,
					size: 'xs',
					class: 'pe-7',
				},
				{
					trailing: true,
					size: 'sm',
					class: 'pe-8',
				},
				{
					trailing: true,
					size: 'md',
					class: 'pe-9',
				},
				{
					trailing: true,
					size: 'lg',
					class: 'pe-10',
				},
				{
					trailing: true,
					size: 'xl',
					class: 'pe-11',
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
				{
					fixed: false,
					size: 'xs',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'sm',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'md',
					class: 'md:text-sm',
				},
				{
					fixed: false,
					size: 'lg',
					class: 'md:text-sm',
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'outline',
				position: 'popper',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/SelectMenu.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/select-menu.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Slider"
description: "An input to select a numeric value within a range."
canonical_url: "https://ui.nuxt.com/docs/components/slider"

---

# Slider

> An input to select a numeric value within a range.

## Usage

Use the `v-model` directive to control the value of the Slider.

```vue
<script setup lang="ts">
	const value = ref(50);
</script>

<template>
	<USlider v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
	<USlider :default-value="50" />
</template>
```

> [!TIP]
>
> Use `aria-label` or `aria-labelledby` to name a single thumb Slider, they are forwarded to the thumb which is the element with the `slider` role.
>
> The thumbs of a multiple thumbs Slider are named by their position so they can be told apart, `Minimum` / `Maximum` for two thumbs and `Value n of m` for three or more. Those names are kept, and an `aria-label` names the Slider as a whole through a `group` role on the root instead of being repeated on every thumb.

### Min / Max

Use the `min` and `max` props to set the minimum and maximum values of the Slider. Defaults to `0` and `100`.

```vue
<template>
	<USlider
		:min="0"
		:max="50"
		:default-value="50"
	/>
</template>
```

### Step

Use the `step` prop to set the increment value of the Slider. Defaults to `1`.

```vue
<template>
	<USlider
		:step="10"
		:default-value="50"
	/>
</template>
```

### Multiple

Use the `v-model` directive or the `default-value` prop with an array of values to create a range Slider.

```vue
<script setup lang="ts">
	const value = ref([25, 75]);
</script>

<template>
	<USlider v-model="value" />
</template>
```

Use the `min-steps-between-thumbs` prop to limit the minimum distance between the thumbs.

```vue
<script setup lang="ts">
	const value = ref([25, 50, 75]);
</script>

<template>
	<USlider
		v-model="value"
		:min-steps-between-thumbs="10"
	/>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Slider. Defaults to `horizontal`.

```vue
<template>
	<USlider
		orientation="vertical"
		:default-value="50"
		class="h-48"
	/>
</template>
```

### Color

Use the `color` prop to change the color of the Slider.

```vue
<template>
	<USlider
		color="neutral"
		:default-value="50"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Slider.

```vue
<template>
	<USlider
		size="xl"
		:default-value="50"
	/>
</template>
```

### Tooltip

Use the `tooltip` prop to display a [Tooltip](/docs/components/tooltip) around the Slider thumbs with the current value. You can set it to `true` for default behavior or pass an object to customize it with any property from the [Tooltip](/docs/components/tooltip#props) component.

```vue
<template>
	<USlider
		:default-value="50"
		tooltip
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the Slider.

```vue
<template>
	<USlider
		disabled
		:default-value="50"
	/>
</template>
```

### Inverted

Use the `inverted` prop to visually invert the Slider.

```vue
<template>
	<USlider
		inverted
		:default-value="25"
	/>
</template>
```

## API

### Props

```ts
/**
 * Props for the Slider component
 */
interface SliderProps {
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
	 * The orientation of the slider.
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical' | undefined;
	/**
	 * Display a tooltip around the slider thumbs with the current value.
	 * `{ disableClosingTrigger: true }`{lang="ts-type"}
	 * @default false
	 */
	tooltip?: boolean | TooltipProps | undefined;
	/**
	 * The value of the slider when initially rendered. Use when you do not need to control the state of the slider.
	 */
	defaultValue?: number | number[] | undefined;
	ui?:
		| {
				root?: SlotClass;
				track?: SlotClass;
				range?: SlotClass;
				thumb?: SlotClass;
		  }
		| undefined;
	/**
	 * The name of the field. Submitted with its owning form as part of a name/value pair.
	 */
	name?: string | undefined;
	/**
	 * When `true`, prevents the user from interacting with the slider.
	 */
	disabled?: boolean | undefined;
	/**
	 * Whether the slider is visually inverted.
	 */
	inverted?: boolean | undefined;
	/**
	 * The minimum value for the range.
	 * @default 0
	 */
	min?: number | undefined;
	/**
	 * The maximum value for the range.
	 * @default 100
	 */
	max?: number | undefined;
	/**
	 * The stepping interval.
	 * @default 1
	 */
	step?: number | undefined;
	/**
	 * The minimum permitted steps between multiple thumbs.
	 */
	minStepsBetweenThumbs?: number | undefined;
	modelValue?: T | undefined;
}
```

### Emits

```ts
/**
 * Emitted events for the Slider component
 */
interface SliderEmits {
  change: (payload: [event: Event]) => void;
  update:modelValue: (payload: [value: T | undefined]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		slider: {
			slots: {
				root: 'relative flex items-center select-none touch-none',
				track: 'relative bg-accented overflow-hidden rounded-full grow',
				range: 'absolute rounded-full',
				thumb:
					'rounded-full bg-default ring-2 focus-visible:outline-3 focus-visible:outline-offset-2',
			},
			variants: {
				color: {
					primary: {
						range: 'bg-primary',
						thumb: 'ring-primary outline-primary/25',
					},
					secondary: {
						range: 'bg-secondary',
						thumb: 'ring-secondary outline-secondary/25',
					},
					success: {
						range: 'bg-success',
						thumb: 'ring-success outline-success/25',
					},
					info: {
						range: 'bg-info',
						thumb: 'ring-info outline-info/25',
					},
					warning: {
						range: 'bg-warning',
						thumb: 'ring-warning outline-warning/25',
					},
					error: {
						range: 'bg-error',
						thumb: 'ring-error outline-error/25',
					},
					neutral: {
						range: 'bg-inverted',
						thumb: 'ring-inverted outline-inverted/25',
					},
				},
				size: {
					xs: {
						thumb: 'size-3',
					},
					sm: {
						thumb: 'size-3.5',
					},
					md: {
						thumb: 'size-4',
					},
					lg: {
						thumb: 'size-4.5',
					},
					xl: {
						thumb: 'size-5',
					},
				},
				orientation: {
					horizontal: {
						root: 'w-full',
						range: 'h-full',
					},
					vertical: {
						root: 'flex-col h-full',
						range: 'w-full',
					},
				},
				disabled: {
					true: {
						root: 'opacity-75 cursor-not-allowed',
					},
				},
			},
			compoundVariants: [
				{
					orientation: 'horizontal',
					size: 'xs',
					class: {
						track: 'h-[6px]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'sm',
					class: {
						track: 'h-[7px]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'md',
					class: {
						track: 'h-[8px]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'lg',
					class: {
						track: 'h-[9px]',
					},
				},
				{
					orientation: 'horizontal',
					size: 'xl',
					class: {
						track: 'h-[10px]',
					},
				},
				{
					orientation: 'vertical',
					size: 'xs',
					class: {
						track: 'w-[6px]',
					},
				},
				{
					orientation: 'vertical',
					size: 'sm',
					class: {
						track: 'w-[7px]',
					},
				},
				{
					orientation: 'vertical',
					size: 'md',
					class: {
						track: 'w-[8px]',
					},
				},
				{
					orientation: 'vertical',
					size: 'lg',
					class: {
						track: 'w-[9px]',
					},
				},
				{
					orientation: 'vertical',
					size: 'xl',
					class: {
						track: 'w-[10px]',
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

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Slider.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/slider.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Switch"
description: "A control that toggles between two states."
canonical_url: "https://ui.nuxt.com/docs/components/switch"

---

# Switch

> A control that toggles between two states.

## Usage

Use the `v-model` directive to control the checked state of the Switch.

```vue
<script setup lang="ts">
	const value = ref(true);
</script>

<template>
	<USwitch v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
	<USwitch default-value />
</template>
```

### Label

Use the `label` prop to set the label of the Switch.

```vue
<template>
	<USwitch label="Check me" />
</template>
```

When using the `required` prop, an asterisk is added next to the label.

```vue
<template>
	<USwitch
		required
		label="Check me"
	/>
</template>
```

### Description

Use the `description` prop to set the description of the Switch.

```vue
<template>
	<USwitch
		label="Check me"
		description="This is a checkbox."
	/>
</template>
```

### Icon

Use the `checked-icon` and `unchecked-icon` props to set the icons of the Switch when checked and unchecked.

```vue
<template>
	<USwitch
		unchecked-icon="i-lucide-x"
		checked-icon="i-lucide-check"
		default-value
		label="Check me"
	/>
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the Switch.

```vue
<template>
	<USwitch
		loading
		default-value
		label="Check me"
	/>
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<template>
	<USwitch
		loading
		loading-icon="i-lucide-loader"
		default-value
		label="Check me"
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

### Color

Use the `color` prop to change the color of the Switch.

```vue
<template>
	<USwitch
		color="neutral"
		default-value
		label="Check me"
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Switch.

```vue
<template>
	<USwitch
		size="xl"
		default-value
		label="Check me"
	/>
</template>
```

### Disabled

Use the `disabled` prop to disable the Switch.

```vue
<template>
	<USwitch
		disabled
		label="Check me"
	/>
</template>
```

## API

### Props

```ts
/**
 * Props for the Switch component
 */
interface SwitchProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
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
	size?: 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
	/**
	 * Highlight the ring color like a focus state.
	 */
	highlight?: boolean | undefined;
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
	 * Display an icon when the switch is checked.
	 */
	checkedIcon?: any;
	/**
	 * Display an icon when the switch is unchecked.
	 */
	uncheckedIcon?: any;
	label?: string | undefined;
	description?: string | undefined;
	ui?:
		| {
				root?: SlotClass;
				base?: SlotClass;
				container?: SlotClass;
				thumb?: SlotClass;
				icon?: SlotClass;
				wrapper?: SlotClass;
				label?: SlotClass;
				description?: SlotClass;
		  }
		| undefined;
	/**
	 * When `true`, prevents the user from interacting with the switch.
	 */
	disabled?: boolean | undefined;
	id?: string | undefined;
	/**
	 * The name of the field. Submitted with its owning form as part of a name/value pair.
	 */
	name?: string | undefined;
	/**
	 * When `true`, indicates that the user must set the value before the owning form can be submitted.
	 */
	required?: boolean | undefined;
	/**
	 * The value given as data when submitted with a `name`.
	 */
	value?: string | undefined;
	/**
	 * The state of the switch when it is initially rendered. Use when you do not need to control its state.
	 */
	defaultValue?: T | undefined;
	/**
	 * The controlled state of the switch. Can be bind as `v-model`.
	 */
	modelValue?: null | T | undefined;
	/**
	 * The value used when the switch is on. Defaults to `true`.
	 */
	trueValue?: T | undefined;
	/**
	 * The value used when the switch is off. Defaults to `false`.
	 */
	falseValue?: T | undefined;
	autofocus?: false | true | 'true' | 'false' | undefined;
	form?: string | undefined;
	formaction?: string | undefined;
	formenctype?: string | undefined;
	formmethod?: string | undefined;
	formnovalidate?: false | true | 'true' | 'false' | undefined;
	formtarget?: string | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
>
> This component also supports all native `<button>` HTML attributes.

### Slots

```ts
/**
 * Slots for the Switch component
 */
interface SwitchSlots {
	label(): any;
	description(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Switch component
 */
interface SwitchEmits {
  change: (payload: [event: Event]) => void;
  update:modelValue: (payload: [payload: T]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		switch: {
			slots: {
				root: 'relative flex items-start',
				base: [
					'inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-3 data-[state=unchecked]:bg-accented',
					'transition-[background] duration-200 ease-out',
				],
				container: 'flex items-center',
				thumb:
					'group pointer-events-none rounded-full bg-default shadow-lg ring-0 transition-transform duration-200 ease-out motion-reduce:transition-none data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center',
				icon: [
					'absolute shrink-0 group-data-[state=unchecked]:text-dimmed opacity-0 size-10/12',
					'transition-[color,opacity] duration-200 ease-out',
				],
				wrapper: 'ms-2',
				label: 'block font-medium text-default',
				description: 'text-muted',
			},
			variants: {
				color: {
					primary: {
						base: 'data-[state=checked]:bg-primary outline-primary/25',
						icon: 'group-data-[state=checked]:text-primary',
					},
					secondary: {
						base: 'data-[state=checked]:bg-secondary outline-secondary/25',
						icon: 'group-data-[state=checked]:text-secondary',
					},
					success: {
						base: 'data-[state=checked]:bg-success outline-success/25',
						icon: 'group-data-[state=checked]:text-success',
					},
					info: {
						base: 'data-[state=checked]:bg-info outline-info/25',
						icon: 'group-data-[state=checked]:text-info',
					},
					warning: {
						base: 'data-[state=checked]:bg-warning outline-warning/25',
						icon: 'group-data-[state=checked]:text-warning',
					},
					error: {
						base: 'data-[state=checked]:bg-error outline-error/25',
						icon: 'group-data-[state=checked]:text-error',
					},
					neutral: {
						base: 'data-[state=checked]:bg-inverted outline-inverted/25',
						icon: 'group-data-[state=checked]:text-highlighted',
					},
				},
				size: {
					xs: {
						base: 'w-7',
						container: 'h-4',
						thumb:
							'size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3',
						wrapper: 'text-xs',
					},
					sm: {
						base: 'w-8',
						container: 'h-4',
						thumb:
							'size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5',
						wrapper: 'text-xs',
					},
					md: {
						base: 'w-9',
						container: 'h-5',
						thumb:
							'size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4',
						wrapper: 'text-sm',
					},
					lg: {
						base: 'w-10',
						container: 'h-5',
						thumb:
							'size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5',
						wrapper: 'text-sm',
					},
					xl: {
						base: 'w-11',
						container: 'h-6',
						thumb:
							'size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5',
						wrapper: 'text-base',
					},
				},
				checked: {
					true: {
						icon: 'group-data-[state=checked]:opacity-100',
					},
				},
				unchecked: {
					true: {
						icon: 'group-data-[state=unchecked]:opacity-100',
					},
				},
				loading: {
					true: {
						icon: 'animate-spin',
					},
				},
				highlight: {
					true: '',
				},
				required: {
					true: {
						label: "after:content-['*'] after:ms-0.5 after:text-error",
					},
				},
				disabled: {
					true: {
						root: 'opacity-75',
						base: 'cursor-not-allowed',
						label: 'cursor-not-allowed',
						description: 'cursor-not-allowed',
					},
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					highlight: true,
					class: {
						base: 'ring ring-primary',
					},
				},
				{
					color: 'secondary',
					highlight: true,
					class: {
						base: 'ring ring-secondary',
					},
				},
				{
					color: 'success',
					highlight: true,
					class: {
						base: 'ring ring-success',
					},
				},
				{
					color: 'info',
					highlight: true,
					class: {
						base: 'ring ring-info',
					},
				},
				{
					color: 'warning',
					highlight: true,
					class: {
						base: 'ring ring-warning',
					},
				},
				{
					color: 'error',
					highlight: true,
					class: {
						base: 'ring ring-error',
					},
				},
				{
					color: 'neutral',
					highlight: true,
					class: {
						base: 'ring ring-inverted',
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

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Switch.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/switch.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Textarea"
description: "A textarea element to input multi-line text."
canonical_url: "https://ui.nuxt.com/docs/components/textarea"

---

# Textarea

> A textarea element to input multi-line text.

## Usage

Use the `v-model` directive to control the value of the Textarea.

```vue
<script setup lang="ts">
	const value = ref('');
</script>

<template>
	<UTextarea />
</template>
```

### Rows

Use the `rows` prop to set the number of rows. Defaults to `3`.

```vue
<template>
	<UTextarea :rows="12" />
</template>
```

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<template>
	<UTextarea placeholder="Type something..." />
</template>
```

### Autoresize

Use the `autoresize` prop to enable autoresizing the height of the Textarea.

```vue
<script setup lang="ts">
	const value = ref(
		'This is a long text that will autoresize the height of the Textarea.',
	);
</script>

<template>
	<UTextarea
		v-model="value"
		autoresize
	/>
</template>
```

Use the `maxrows` prop to set the maximum number of rows when autoresizing. If set to `0`, the Textarea will grow indefinitely.

```vue
<script setup lang="ts">
	const value = ref(
		'This is a long text that will autoresize the height of the Textarea with a maximum of 4 rows.',
	);
</script>

<template>
	<UTextarea
		v-model="value"
		:maxrows="4"
		autoresize
	/>
</template>
```

### Color

Use the `color` prop to change the ring color when the Textarea is focused.

```vue
<template>
	<UTextarea
		color="neutral"
		highlight
		placeholder="Type something..."
	/>
</template>
```

> [!NOTE]
>
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the Textarea.

```vue
<template>
	<UTextarea
		color="neutral"
		variant="subtle"
		:highlight="false"
		placeholder="Type something..."
	/>
</template>
```

### Size

Use the `size` prop to change the size of the Textarea.

```vue
<template>
	<UTextarea
		size="xl"
		placeholder="Type something..."
	/>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the Textarea.

```vue
<template>
	<UTextarea
		icon="i-lucide-search"
		size="md"
		variant="outline"
		placeholder="Search..."
		:rows="1"
	/>
</template>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

```vue
<template>
	<UTextarea
		trailing-icon="i-lucide-at-sign"
		placeholder="Enter your email"
		size="md"
		:rows="1"
	/>
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the Textarea.

```vue
<template>
	<UTextarea
		:avatar="{
			src: 'https://github.com/nuxt.png',
			loading: 'lazy',
		}"
		size="md"
		variant="outline"
		placeholder="Search..."
		:rows="1"
	/>
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the Textarea.

```vue
<template>
	<UTextarea
		loading
		:trailing="false"
		placeholder="Search..."
		:rows="1"
	/>
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<template>
	<UTextarea
		loading
		loading-icon="i-lucide-loader"
		placeholder="Search..."
		:rows="1"
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

### Disabled

Use the `disabled` prop to disable the Textarea.

```vue
<template>
	<UTextarea
		disabled
		placeholder="Type something..."
	/>
</template>
```

## API

### Props

```ts
/**
 * Props for the Textarea component
 */
interface TextareaProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	id?: string | undefined;
	name?: string | undefined;
	/**
	 * The placeholder text when the textarea is empty.
	 */
	placeholder?: string | undefined;
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
	 * @default 'outline'
	 */
	variant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'none' | undefined;
	/**
	 * @default 'md'
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
	required?: boolean | undefined;
	autofocus?: boolean | undefined;
	/**
	 * @default 0
	 */
	autofocusDelay?: number | undefined;
	autoresize?: boolean | undefined;
	/**
	 * @default 0
	 */
	autoresizeDelay?: number | undefined;
	disabled?: boolean | undefined;
	/**
	 * @default 3
	 */
	rows?: number | undefined;
	/**
	 * @default 0
	 */
	maxrows?: number | undefined;
	/**
	 * Highlight the ring color like a focus state.
	 */
	highlight?: boolean | undefined;
	/**
	 * Keep the mobile text size on all breakpoints.
	 */
	fixed?: boolean | undefined;
	defaultValue?: _Number<_Optional<_Nullable<T, Mod>, Mod>, Mod> | undefined;
	modelValue?: _Number<_Optional<_Nullable<T, Mod>, Mod>, Mod> | undefined;
	modelModifiers?: Mod | undefined;
	ui?:
		| {
				root?: SlotClass;
				base?: SlotClass;
				leading?: SlotClass;
				leadingIcon?: SlotClass;
				leadingAvatar?: SlotClass;
				leadingAvatarSize?: SlotClass;
				trailing?: SlotClass;
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
	/**
	 * When `true`, the loading icon will be displayed.
	 */
	loading?: boolean | undefined;
	/**
	 * The icon when the `loading` prop is `true`.
	 * @default appConfig.ui.icons.loading
	 */
	loadingIcon?: any;
	autocomplete?: string | undefined;
	cols?: string | number | undefined;
	dirname?: string | undefined;
	form?: string | undefined;
	maxlength?: string | number | undefined;
	minlength?: string | number | undefined;
	readonly?: false | true | 'true' | 'false' | undefined;
	wrap?: string | undefined;
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes
>
> This component also supports all native `<textarea>` HTML attributes.

### Slots

```ts
/**
 * Slots for the Textarea component
 */
interface TextareaSlots {
	leading(): any;
	default(): any;
	trailing(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Textarea component
 */
interface TextareaEmits {
  update:modelValue: (payload: [value: _Number<_Optional<_Nullable<T, Mod>, Mod>, Mod>]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  change: (payload: [event: Event]) => void;
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
          textareaRef
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
          HTMLTextAreaElement
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
          autoResize
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
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		textarea: {
			slots: {
				root: 'relative inline-flex items-center',
				base: [
					'w-full rounded-md border-0 appearance-none placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75',
					'transition-colors',
				],
				leading: 'absolute start-0 flex items-start',
				leadingIcon: 'shrink-0 text-dimmed',
				leadingAvatar: 'shrink-0',
				leadingAvatarSize: '',
				trailing: 'absolute end-0 flex items-start',
				trailingIcon: 'shrink-0 text-dimmed',
			},
			variants: {
				fieldGroup: {
					horizontal: {
						root: 'group has-focus-visible:z-[1]',
						base: 'group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none',
					},
					vertical: {
						root: 'group has-focus-visible:z-[1]',
						base: 'group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none',
					},
				},
				size: {
					xs: {
						base: 'px-2 py-1 text-sm/4 gap-1',
						leading: 'ps-2 inset-y-1',
						trailing: 'pe-2 inset-y-1',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
					},
					sm: {
						base: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
						leading: 'ps-2.5 inset-y-1.5',
						trailing: 'pe-2.5 inset-y-1.5',
						leadingIcon: 'size-4',
						leadingAvatarSize: '3xs',
						trailingIcon: 'size-4',
					},
					md: {
						base: 'px-2.5 py-1.5 text-base/5 gap-1.5',
						leading: 'ps-2.5 inset-y-1.5',
						trailing: 'pe-2.5 inset-y-1.5',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
					},
					lg: {
						base: 'px-3 py-2 text-base/5 gap-2',
						leading: 'ps-3 inset-y-2',
						trailing: 'pe-3 inset-y-2',
						leadingIcon: 'size-5',
						leadingAvatarSize: '2xs',
						trailingIcon: 'size-5',
					},
					xl: {
						base: 'px-3 py-2 text-base gap-2',
						leading: 'ps-3 inset-y-2',
						trailing: 'pe-3 inset-y-2',
						leadingIcon: 'size-6',
						leadingAvatarSize: 'xs',
						trailingIcon: 'size-6',
					},
				},
				variant: {
					outline: 'text-highlighted bg-default ring ring-inset ring-accented',
					soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
					subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
					ghost:
						'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
					none: 'text-highlighted bg-transparent focus:outline-none',
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
				leading: {
					true: '',
				},
				trailing: {
					true: '',
				},
				loading: {
					true: '',
				},
				highlight: {
					true: '',
				},
				fixed: {
					false: '',
				},
				type: {
					file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none',
				},
				autoresize: {
					true: {
						base: 'resize-none',
					},
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: ['outline', 'subtle'],
					class:
						'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary',
				},
				{
					color: 'secondary',
					variant: ['outline', 'subtle'],
					class:
						'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary',
				},
				{
					color: 'success',
					variant: ['outline', 'subtle'],
					class:
						'outline-success/25 focus-visible:outline-3 focus-visible:ring-success',
				},
				{
					color: 'info',
					variant: ['outline', 'subtle'],
					class:
						'outline-info/25 focus-visible:outline-3 focus-visible:ring-info',
				},
				{
					color: 'warning',
					variant: ['outline', 'subtle'],
					class:
						'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning',
				},
				{
					color: 'error',
					variant: ['outline', 'subtle'],
					class:
						'outline-error/25 focus-visible:outline-3 focus-visible:ring-error',
				},
				{
					color: 'primary',
					variant: ['soft', 'ghost'],
					class: 'outline-primary/25 focus-visible:outline-3',
				},
				{
					color: 'secondary',
					variant: ['soft', 'ghost'],
					class: 'outline-secondary/25 focus-visible:outline-3',
				},
				{
					color: 'success',
					variant: ['soft', 'ghost'],
					class: 'outline-success/25 focus-visible:outline-3',
				},
				{
					color: 'info',
					variant: ['soft', 'ghost'],
					class: 'outline-info/25 focus-visible:outline-3',
				},
				{
					color: 'warning',
					variant: ['soft', 'ghost'],
					class: 'outline-warning/25 focus-visible:outline-3',
				},
				{
					color: 'error',
					variant: ['soft', 'ghost'],
					class: 'outline-error/25 focus-visible:outline-3',
				},
				{
					color: 'primary',
					highlight: true,
					class: 'ring ring-inset ring-primary',
				},
				{
					color: 'secondary',
					highlight: true,
					class: 'ring ring-inset ring-secondary',
				},
				{
					color: 'success',
					highlight: true,
					class: 'ring ring-inset ring-success',
				},
				{
					color: 'info',
					highlight: true,
					class: 'ring ring-inset ring-info',
				},
				{
					color: 'warning',
					highlight: true,
					class: 'ring ring-inset ring-warning',
				},
				{
					color: 'error',
					highlight: true,
					class: 'ring ring-inset ring-error',
				},
				{
					color: 'neutral',
					variant: ['outline', 'subtle'],
					class:
						'outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted',
				},
				{
					color: 'neutral',
					variant: ['soft', 'ghost'],
					class: 'outline-inverted/25 focus-visible:outline-3',
				},
				{
					color: 'neutral',
					highlight: true,
					class: 'ring ring-inset ring-inverted',
				},
				{
					leading: true,
					size: 'xs',
					class: 'ps-7',
				},
				{
					leading: true,
					size: 'sm',
					class: 'ps-8',
				},
				{
					leading: true,
					size: 'md',
					class: 'ps-9',
				},
				{
					leading: true,
					size: 'lg',
					class: 'ps-10',
				},
				{
					leading: true,
					size: 'xl',
					class: 'ps-11',
				},
				{
					trailing: true,
					size: 'xs',
					class: 'pe-7',
				},
				{
					trailing: true,
					size: 'sm',
					class: 'pe-8',
				},
				{
					trailing: true,
					size: 'md',
					class: 'pe-9',
				},
				{
					trailing: true,
					size: 'lg',
					class: 'pe-10',
				},
				{
					trailing: true,
					size: 'xl',
					class: 'pe-11',
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
				{
					fixed: false,
					size: 'xs',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'sm',
					class: 'md:text-xs',
				},
				{
					fixed: false,
					size: 'md',
					class: 'md:text-sm',
				},
				{
					fixed: false,
					size: 'lg',
					class: 'md:text-sm',
				},
			],
			defaultVariants: {
				size: 'md',
				color: 'primary',
				variant: 'outline',
			},
		},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Textarea.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/textarea.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

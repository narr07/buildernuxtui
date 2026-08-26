Overview
Introduction
Headers and text
Lists and tables
Images and embeds
Code

Components
Accordion
Badge
Callout
Card
CardGroup
CodeCollapse
CodeGroup
CodePreview
CodeTree
Collapsible
Field
FieldGroup
Icon
Kbd
Prompt
Steps
Tabs

---

title: "Headers and text"
description: "Beautifully styled headings, paragraphs, text formatting, and links for optimal readability."
canonical_url: "https://ui.nuxt.com/docs/typography/headers-and-text"

---

# Headers and text

> Beautifully styled headings, paragraphs, text formatting, and links for optimal readability.

## Headings

Use headings to organize your content and make it easier to read.

Headings can be wrapped in an anchor link when they have an `id`, with a hash icon shown on hover for `H2` and `H3` (on large screens) so readers can link directly to a section.

Anchor links are enabled by default for `H2` to `H4` when using `@nuxt/content` or `@nuxtjs/mdc`, and disabled otherwise. Use the [`Theme`](/docs/components/theme) component with the `anchor` prop to toggle them for a section of your app:

```vue
<template>
	<UTheme
		:props="{
			prose: {
				h2: { anchor: true },
				h3: { anchor: true },
				h4: { anchor: true },
			},
		}"
	>
		<!-- your rendered markdown -->
	</UTheme>
</template>
```

**Nuxt:**

> [!NOTE]
>
> When using `@nuxt/content`, anchor links are enabled for `H2`, `H3` and `H4` by default. You can control their [generation](https://content.nuxt.com/docs/getting-started/configuration#anchorlinks) (for example, to disable them for AI chat interfaces) as well as the [toc generation](https://content.nuxt.com/docs/getting-started/configuration#toc) in your `nuxt.config.ts`:
>
> ```ts [nuxt.config.ts]
> export default defineNuxtConfig({
> 	content: {
> 		renderer: {
> 			anchorLinks: false,
> 		},
> 		build: {
> 			markdown: {
> 				toc: {
> 					depth: 3,
> 				},
> 			},
> 		},
> 	},
> });
> ```

### Heading 1

# Nuxt UI

```mdc
# Nuxt UI
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			h1: {
				slots: {
					base: 'text-4xl text-highlighted font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)',
					link: 'inline-flex items-center gap-2',
				},
			},
		},
	},
});
```

### Heading 2

## What's new in v4?

```mdc
## What's new in v4?
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			h2: {
				slots: {
					base: [
						'relative text-2xl text-highlighted font-bold mt-12 mb-6 scroll-mt-[calc(48px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(48px+var(--ui-header-height))] [&>a]:rounded-sm [&>a]:outline-primary/25 [&>a]:focus-visible:outline-3 [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-xl/7 [&>a>code]:font-bold',
						'[&>a>code]:transition-colors',
					],
					leading: [
						'absolute -ms-8 top-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated group-hover:text-primary group-focus:text-primary rounded-md hidden lg:flex text-muted',
						'transition',
					],
					leadingIcon: 'size-4 shrink-0',
					link: 'group lg:after:absolute lg:after:inset-y-0 lg:after:-inset-s-2 lg:after:w-2',
				},
			},
		},
	},
});
```

### Heading 3

### Enhanced components

```mdc
### Enhanced components
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			h3: {
				slots: {
					base: [
						'relative text-xl text-highlighted font-bold mt-8 mb-3 scroll-mt-[calc(32px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(32px+var(--ui-header-height))] [&>a]:rounded-sm [&>a]:outline-primary/25 [&>a]:focus-visible:outline-3 [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-lg/6 [&>a>code]:font-bold',
						'[&>a>code]:transition-colors',
					],
					leading: [
						'absolute -ms-8 top-0.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated group-hover:text-primary group-focus:text-primary rounded-md hidden lg:flex text-muted',
						'transition',
					],
					leadingIcon: 'size-4 shrink-0',
					link: 'group lg:after:absolute lg:after:inset-y-0 lg:after:-inset-s-2 lg:after:w-2',
				},
			},
		},
	},
});
```

### Heading 4

#### Getting started

```mdc
#### Getting started
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			h4: {
				slots: {
					base: 'text-lg text-highlighted font-bold mt-6 mb-2 scroll-mt-[calc(24px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(24px+var(--ui-header-height))] [&>a]:rounded-sm [&>a]:outline-primary/25 [&>a]:focus-visible:outline-3',
					link: '',
				},
			},
		},
	},
});
```

## Text formatting

Structure your content with clear paragraphs and consistent text formatting for better readability.

### Paragraph

Nuxt UI provides a comprehensive collection of Vue components, composables and utilities for building modern, accessible applications with consistent design and enhanced user experience.

```mdc
Nuxt UI provides a comprehensive collection of Vue components, composables and utilities for building modern, accessible applications with consistent design and enhanced user experience.
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			p: {
				base: 'my-5 leading-7 text-pretty',
			},
		},
	},
});
```

### Strong

**Strong text**

```mdc
**Strong text**
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			strong: {
				base: '',
			},
		},
	},
});
```

### Emphasis

_Emphasized text_

```mdc
*Emphasized text*
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			em: {
				base: '',
			},
		},
	},
});
```

## Links

To create a link, wrap the link text in brackets followed by the URL in parentheses. Works for both external and internal links.

[Nuxt documentation](https://nuxt.com)

```mdc
[Nuxt documentation](https://nuxt.com)
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			a: {
				base: [
					'text-primary border-b border-transparent hover:border-primary font-medium rounded-xs outline-primary/25 focus-visible:outline-3 focus-visible:has-[>code]:outline-0 [&>code]:border-dashed [&>code]:outline-primary/25 focus-visible:[&>code]:outline-3 hover:[&>code]:border-primary hover:[&>code]:text-primary focus-visible:[&>code]:border-primary focus-visible:[&>code]:text-primary',
					'transition-colors [&>code]:transition-colors',
				],
			},
		},
	},
});
```

## Blockquotes

Use blockquotes to highlight important information or quotes.

> Nuxt UI automatically adapts to your theme settings, ensuring consistent typography across your entire application.

```mdc
> Nuxt UI automatically adapts to your theme settings, ensuring consistent typography across your entire application.
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			blockquote: {
				base: 'border-s-4 border-accented ps-4 italic',
			},
		},
	},
});
```

## Horizontal rules

Use horizontal rules to visually separate content sections.

---

```mdc
---
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			hr: {
				base: 'border-t border-default my-12',
			},
		},
	},
});
```

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Lists and tables"
description: "Organize information with styled lists and responsive tables for clear, consistent readability."
canonical_url: "https://ui.nuxt.com/docs/typography/lists-and-tables"

---

# Lists and tables

> Organize information with styled lists and responsive tables for clear, consistent readability.

## Lists

Markdown supports unordered, ordered, and nested lists for various content needs.

### Unordered lists

Use unordered lists for items without a specific sequence. Start each item with a `-` symbol.

- I'm a list item.
- I'm another list item.
- I'm the last list item.

```mdc
- I'm a list item.
- I'm another list item.
- I'm the last list item.
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			ul: {
				base: 'list-disc ps-6 my-5 marker:text-(--ui-border-accented)',
			},
		},
	},
});
```

### Ordered lists

Use ordered lists when item order matters, like steps in a process. Start each item with a number.

1. I'm a list item.
2. I'm another list item.
3. I'm the last list item.

```mdc
1. I'm a list item.
2. I'm another list item.
3. I'm the last list item.
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			ol: {
				base: 'list-decimal ps-6 my-5 marker:text-muted',
			},
		},
	},
});
```

### Nested lists

Create hierarchical lists with sub-items for complex structures. Indent sub-items by four spaces for nesting.

```vue
<template>
  <ul>
  <li>
  I'm a list item.

  <ul>
  <li>
  I'm a nested list item.</li>
  <li>
  I'm another nested list item.</li></ul></li>
  <li>
  I'm another list item.

  <ul>
  <li>
  Another nested item

  <ul>
  <li>
  Deep nested item</li>
  <li>
  Another deep nested item</li></ul></li>
  <li>
  Back to second level</li></ul></li></ul>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=- I'm a list item.
    - I'm a nested list item.
    - I'm another nested list item.
  - I'm another list item.
    - Another nested item
      - Deep nested item
      - Another deep nested item
    - Back to second level
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  -</span>
  <span class=sTEyZ>
   I'm a list item.
  </span></span>
  <span class=line>
  <span class=sMK4o>
    -</span>
  <span class=sTEyZ>
   I'm a nested list item.
  </span></span>
  <span class=line>
  <span class=sMK4o>
    -</span>
  <span class=sTEyZ>
   I'm another nested list item.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  -</span>
  <span class=sTEyZ>
   I'm another list item.
  </span></span>
  <span class=line>
  <span class=sMK4o>
    -</span>
  <span class=sTEyZ>
   Another nested item
  </span></span>
  <span class=line>
  <span class=sMK4o>
      -</span>
  <span class=sTEyZ>
   Deep nested item
  </span></span>
  <span class=line>
  <span class=sMK4o>
      -</span>
  <span class=sTEyZ>
   Another deep nested item
  </span></span>
  <span class=line>
  <span class=sMK4o>
    -</span>
  <span class=sTEyZ>
   Back to second level
  </span></span></code></pre></template>
</template>
```

### Mixed lists

You can combine ordered and unordered lists for complex hierarchies.

```vue
<template>
	<ol>
		<li>
			First major step

			<ul>
				<li>Sub-requirement A</li>
				<li>Sub-requirement B</li>
			</ul>
		</li>
		<li>
			Second major step

			<ul>
				<li>Another sub-item</li>
				<li>Final sub-item</li>
			</ul>
		</li>
		<li>Final step</li>
	</ol>
	<template v-slot:code="">
		<pre
			className="language-mdc"
			shiki
			shiki-themes
			material-theme-lighter
			material-theme
			material-theme-palenight
			code="1."
			First
			major
			step
			-
			Sub-requirement
			A
			-
			Sub-requirement
			B
			2.
			Second
			major
			step
			-
			Another
			sub-item
			-
			Final
			sub-item
			3.
			Final
			step
			language="mdc"
			meta="style"
			=""
		>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  1.</span>
  <span class=sTEyZ>
   First major step
  </span></span>
  <span class=line>
  <span class=sMK4o>
     -</span>
  <span class=sTEyZ>
   Sub-requirement A
  </span></span>
  <span class=line>
  <span class=sMK4o>
     -</span>
  <span class=sTEyZ>
   Sub-requirement B
  </span></span>
  <span class=line>
  <span class=sMK4o>
  2.</span>
  <span class=sTEyZ>
   Second major step
  </span></span>
  <span class=line>
  <span class=sMK4o>
     -</span>
  <span class=sTEyZ>
   Another sub-item
  </span></span>
  <span class=line>
  <span class=sMK4o>
     -</span>
  <span class=sTEyZ>
   Final sub-item
  </span></span>
  <span class=line>
  <span class=sMK4o>
  3.</span>
  <span class=sTEyZ>
   Final step
  </span></span></code></pre>
	</template>
</template>
```

## Tables

Present structured data in rows and columns clearly. Tables are ideal for comparing data or listing properties.

<table>
<thead>
  <tr>
    <th>
      Prop
    </th>
    
    <th>
      Default
    </th>
    
    <th>
      Type
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        name
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          string
        </span>
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        size
      </code>
    </td>
    
    <td>
      <code>
        md
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          string
        </span>
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        color
      </code>
    </td>
    
    <td>
      <code>
        neutral
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          string
        </span>
      </code>
    </td>
  </tr>
</tbody>
</table>

```mdc
| Prop    | Default   | Type                     |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			table: {
				slots: {
					root: 'relative my-5 overflow-x-auto rounded-md outline-primary/25 focus-visible:outline-3',
					base: 'w-full border-separate border-spacing-0 rounded-md',
				},
			},
		},
	},
});
```

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Images and embeds"
description: "Responsive images, videos, and rich media embeds to enhance and illustrate your documentation."
canonical_url: "https://ui.nuxt.com/docs/typography/images-and-embeds"

---

# Images and embeds

> Responsive images, videos, and rich media embeds to enhance and illustrate your documentation.

## Images

Responsive images with automatic optimization and interactive zoom functionality.

![Image](/assets/templates/nuxt/dashboard-dark.png)

```mdc
![Image](/assets/templates/nuxt/dashboard-dark.png)
```

:::

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			img: {
				slots: {
					base: 'rounded-md',
					overlay:
						'fixed inset-0 bg-default/75 backdrop-blur-sm will-change-opacity',
					content:
						'fixed inset-0 flex items-center justify-center cursor-zoom-out focus:outline-none',
					zoomedImage:
						'w-full h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md',
				},
				variants: {
					zoom: {
						true: 'will-change-transform',
					},
					open: {
						true: '',
					},
					width: {
						false: 'w-full',
					},
				},
				compoundVariants: [
					{
						zoom: true,
						open: false,
						class: 'cursor-zoom-in',
					},
				],
			},
		},
	},
});
```

**Nuxt:**

> [!NOTE]
>
> If [`@nuxt/image`](https://image.nuxt.com/get-started/installation) is installed, the `<NuxtImg>` component will be used instead of the native `img` tag for enhanced performance and optimization.

### Zoom

By default, images support interactive zoom: clicking an image opens it in a modal overlay with smooth transitions, allowing users to examine details more closely.

To prevent zoom on a specific image, add the `:zoom="false"` attribute.

```vue
<template>
  <p>
  <img alt=Image without zoom src=/assets/templates/nuxt/dashboard-dark.png :zoom=false /></p>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=![Image without zoom](/assets/templates/nuxt/dashboard-dark.png){:zoom="false"}
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ![</span>
  <span class=sfazB>
  Image without zoom</span>
  <span class=sMK4o>
  ](</span>
  <span class=sQLHv>
  /assets/templates/nuxt/dashboard-dark.png</span>
  <span class=sMK4o>
  ){</span>
  <span class=spNyl>
  :zoom</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  false</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span></code></pre></template>
</template>
```

### Size

Images automatically adapt to their container while maintaining aspect ratio. You can control sizing through markdown or HTML attributes when needed.

```vue
<template>
  <p>
  <img alt=Small Image src=/assets/templates/nuxt/dashboard-dark.png /></p>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=![Small Image](/assets/templates/nuxt/dashboard-dark.png){width="300"}
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ![</span>
  <span class=sfazB>
  Small Image</span>
  <span class=sMK4o>
  ](</span>
  <span class=sQLHv>
  /assets/templates/nuxt/dashboard-dark.png</span>
  <span class=sMK4o>
  ){</span>
  <span class=spNyl>
  width</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  300</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span></code></pre></template>
</template>
```

## Iframes

Easily embed interactive content like CodeSandbox, Figma, or YouTube.

### YouTube

```vue
<template>
  <iframe src=https://www.youtube-nocookie.com/embed/_eQxomah-nA?si=pDSzchUBDKb2NQu7 title=YouTube video player frameBorder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share referrerPolicy=strict-origin-when-cross-origin style=aspect-ratio: 16/9; width: 100%; />
  <template v-slot:code=>
  <pre className=language-html shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=<iframe src="https://www.youtube-nocookie.com/embed/_eQxomah-nA?si=pDSzchUBDKb2NQu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="aspect-ratio: 16/9; width: 100%;"></iframe>
   language=html meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  <</span>
  <span class=swJcz>
  iframe</span>
  <span class=spNyl>
   src</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  https://www.youtube-nocookie.com/embed/_eQxomah-nA?si=pDSzchUBDKb2NQu7</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   title</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  YouTube video player</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   frameborder</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  0</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   allow</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   referrerpolicy</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  strict-origin-when-cross-origin</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   allowfullscreen</span>
  <span class=spNyl>
   style</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  aspect-ratio: 16/9; width: 100%;</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ></</span>
  <span class=swJcz>
  iframe</span>
  <span class=sMK4o>
  >
  </span></span></code></pre></template>
</template>
```

### CodeSandbox

```vue
<template>
  <iframe src=https://codesandbox.io/p/devbox/nuxt-ui-xgrzw5 frameBorder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share referrerPolicy=strict-origin-when-cross-origin style=aspect-ratio: 16/9; width: 100%; />
  <template v-slot:code=>
  <pre className=language-html shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=<iframe src="https://codesandbox.io/p/devbox/nuxt-ui-xgrzw5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="aspect-ratio: 16/9; width: 100%;"></iframe>
   language=html meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  <</span>
  <span class=swJcz>
  iframe</span>
  <span class=spNyl>
   src</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  https://codesandbox.io/p/devbox/nuxt-ui-xgrzw5</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   frameborder</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  0</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   allow</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   referrerpolicy</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  strict-origin-when-cross-origin</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   allowfullscreen</span>
  <span class=spNyl>
   style</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  aspect-ratio: 16/9; width: 100%;</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ></</span>
  <span class=swJcz>
  iframe</span>
  <span class=sMK4o>
  >
  </span></span></code></pre></template>
</template>
```

### Figma

```vue
<template>
  <iframe style=border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; height: 450px; src=https://embed.figma.com/file/1544369209862884086/hf_embed?community_viewer=true&embed_host=fastma&fuid=960610330589944894&kind=file&page-selector=0&viewer=1 />
  <template v-slot:code=>
  <pre className=language-html shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; height: 450px;" src="https://embed.figma.com/file/1544369209862884086/hf_embed?community_viewer=true&embed_host=fastma&fuid=960610330589944894&kind=file&page-selector=0&viewer=1" allowfullscreen></iframe>
   language=html meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  <</span>
  <span class=swJcz>
  iframe</span>
  <span class=spNyl>
   style</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  border: 1px solid </span>
  <span class=swNtp>
  rgba(0, 0, 0, 0.1)</span>
  <span class=sfazB>
  ; width: 100%; height: 450px;</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   src</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  https://embed.figma.com/file/1544369209862884086/hf_embed?community_viewer=true&embed_host=fastma&fuid=960610330589944894&kind=file&page-selector=0&viewer=1</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   allowfullscreen</span>
  <span class=sMK4o>
  ></</span>
  <span class=swJcz>
  iframe</span>
  <span class=sMK4o>
  >
  </span></span></code></pre></template>
</template>
```

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "Code"
description: "Display inline code and syntax-highlighted code blocks with copy-to-clipboard support."
canonical_url: "https://ui.nuxt.com/docs/typography/code"

---

# Code

> Display inline code and syntax-highlighted code blocks with copy-to-clipboard support.

## Code blocks

Code blocks are rendered by the `ProsePre` component with syntax highlighting powered by [Shiki](https://github.com/shikijs/shiki).

```ts
export default defineNuxtConfig({
	modules: ['@nuxt/ui'],
});
```

````mdc
```ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
````

````

```ts
/**
 * Props for the ProseCode component
 */
interface ProseCodeProps {
  lang?: string | undefined;
  /**
   * @default 'neutral'
   */
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  ui?: { base?: any; } | undefined;
}
````

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			pre: {
				slots: {
					root: 'relative my-5 group',
					header:
						'flex items-center gap-1.5 border border-muted bg-default border-b-0 relative rounded-t-md px-4 py-3',
					filename: 'text-default text-sm/6',
					icon: 'size-4 shrink-0',
					copy: 'absolute top-[11px] end-[11px] lg:opacity-0 lg:group-hover:opacity-100 lg:focus-visible:opacity-100 transition',
					base: 'group font-mono text-sm/6 border border-muted bg-muted rounded-md px-4 py-3 whitespace-pre-wrap wrap-break-word overflow-x-auto outline-primary/25 focus-visible:outline-3 focus-visible:border-primary **:[.line]:block **:[.line.highlight]:-mx-4 **:[.line.highlight]:px-4 **:[.line.highlight]:bg-accented/50!',
				},
				variants: {
					filename: {
						true: {
							root: '[&>pre]:rounded-t-none [&>pre]:my-0 my-5',
						},
					},
				},
			},
		},
	},
});
```

### Language

Syntax highlighting is available for dozens of programming languages.

````vue
<template>
  <pre className=language-vue shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=<script setup lang="ts">
  const message = ref('Hello World!')

  function updateMessage() {
    message.value = 'Button clicked!'
  }
  </script>

  <template>
    <div>
      <h1>{{ message }}</h1>
      <UButton @click="updateMessage">
        Click me
      </UButton>
    </div>
  </template>
   language=vue meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  <</span>
  <span class=swJcz>
  script</span>
  <span class=spNyl>
   setup</span>
  <span class=spNyl>
   lang</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  ts</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span class=spNyl>
  const</span>
  <span class=sTEyZ>
   message </span>
  <span class=sMK4o>
  =</span>
  <span class=s2Zo4>
   ref</span>
  <span class=sTEyZ>
  (</span>
  <span class=sMK4o>
  '</span>
  <span class=sfazB>
  Hello World!</span>
  <span class=sMK4o>
  '</span>
  <span class=sTEyZ>
  )
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=spNyl>
  function</span>
  <span class=s2Zo4>
   updateMessage</span>
  <span class=sMK4o>
  ()</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    message</span>
  <span class=sMK4o>
  .</span>
  <span class=sTEyZ>
  value</span>
  <span class=sMK4o>
   =</span>
  <span class=sMK4o>
   '</span>
  <span class=sfazB>
  Button clicked!</span>
  <span class=sMK4o>
  '
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sMK4o>
  </</span>
  <span class=swJcz>
  script</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  <</span>
  <span class=swJcz>
  template</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span class=sMK4o>
    <</span>
  <span class=swJcz>
  div</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span class=sMK4o>
      <</span>
  <span class=swJcz>
  h1</span>
  <span class=sMK4o>
  ></span>
  <span class=sTEyZ>
  {{ message }}</span>
  <span class=sMK4o>
  </</span>
  <span class=swJcz>
  h1</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span class=sMK4o>
      <</span>
  <span class=swJcz>
  UButton</span>
  <span class=sMK4o>
   @</span>
  <span class=spNyl>
  click</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sTEyZ>
  updateMessage</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span class=sTEyZ>
        Click me
  </span></span>
  <span class=line>
  <span class=sMK4o>
      </</span>
  <span class=swJcz>
  UButton</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span class=sMK4o>
    </</span>
  <span class=swJcz>
  div</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span class=sMK4o>
  </</span>
  <span class=swJcz>
  template</span>
  <span class=sMK4o>
  >
  </span></span></code></pre>
  <template v-slot:code=>
  <pre className=language-html shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=```vue
  <script setup lang="ts">
  const message = ref('Hello World!')

  function updateMessage() {
    message.value = 'Button clicked!'
  }
  </script>

  <template>
    <div>
      <h1>{{ message }}</h1>
      <UButton @click="updateMessage">
        Click me
      </UButton>
    </div>
  </template>
````

language=html meta= style=>
<code \_\_ignoreMap=>
<span class=line>
<span class=sTEyZ>

```vue
</span></span>
<span class=line>
<span class=sMK4o>
<</span>
<span class=swJcz>
script</span>
<span class=spNyl>
 setup</span>
<span class=spNyl>
 lang</span>
<span class=sMK4o>
=</span>
<span class=sMK4o>
"</span>
<span class=sfazB>
ts</span>
<span class=sMK4o>
"</span>
<span class=sMK4o>
>
</span></span>
<span class=line>
<span class=spNyl>
const</span>
<span class=sTEyZ>
 message </span>
<span class=sMK4o>
=</span>
<span class=s2Zo4>
 ref</span>
<span class=sTEyZ>
(</span>
<span class=sMK4o>
'</span>
<span class=sfazB>
Hello World!</span>
<span class=sMK4o>
'</span>
<span class=sTEyZ>
)
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=spNyl>
function</span>
<span class=s2Zo4>
 updateMessage</span>
<span class=sMK4o>
()</span>
<span class=sMK4o>
 {
</span></span>
<span class=line>
<span class=sTEyZ>
  message</span>
<span class=sMK4o>
.</span>
<span class=sTEyZ>
value</span>
<span class=sMK4o>
 =</span>
<span class=sMK4o>
 '</span>
<span class=sfazB>
Button clicked!</span>
<span class=sMK4o>
'
</span></span>
<span class=line>
<span class=sMK4o>
}
</span></span>
<span class=line>
<span class=sMK4o>
</</span>
<span class=swJcz>
script</span>
<span class=sMK4o>
>
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sMK4o>
<</span>
<span class=swJcz>
template</span>
<span class=sMK4o>
>
</span></span>
<span class=line>
<span class=sMK4o>
  <</span>
<span class=swJcz>
div</span>
<span class=sMK4o>
>
</span></span>
<span class=line>
<span class=sMK4o>
    <</span>
<span class=swJcz>
h1</span>
<span class=sMK4o>
></span>
<span class=sTEyZ>
{{ message }}</span>
<span class=sMK4o>
</</span>
<span class=swJcz>
h1</span>
<span class=sMK4o>
>
</span></span>
<span class=line>
<span class=sMK4o>
    <</span>
<span class=swJcz>
UButton</span>
<span class=spNyl>
 @click</span>
<span class=sMK4o>
=</span>
<span class=sMK4o>
"</span>
<span class=sfazB>
updateMessage</span>
<span class=sMK4o>
"</span>
<span class=sMK4o>
>
</span></span>
<span class=line>
<span class=sTEyZ>
      Click me
</span></span>
<span class=line>
<span class=sMK4o>
    </</span>
<span class=swJcz>
UButton</span>
<span class=sMK4o>
>
</span></span>
<span class=line>
<span class=sMK4o>
  </</span>
<span class=swJcz>
div</span>
<span class=sMK4o>
>
</span></span>
<span class=line>
<span class=sMK4o>
</</span>
<span class=swJcz>
template</span>
<span class=sMK4o>
>
</span></span>
<span class=line>
<span class=sTEyZ>
```

</span></span></code></pre></template>
</template>

````

> [!TIP]
>
> By default, `material-theme-lighter` and `material-theme-palenight` Shiki themes are used for light and dark mode respectively. When using `@nuxt/content`, you can change this through the [`content.build.markdown.highlight`](https://content.nuxt.com/docs/getting-started/configuration#highlight) key in your `nuxt.config.ts`. When using standalone `@nuxtjs/mdc`, configure themes through the [`mdc.highlight`](https://github.com/nuxt-content/mdc#configurations) key. When using [Comark](https://comark.dev), configure themes through the `shiki` plugin options.
>
> To support dark mode with Comark, add the following CSS to your stylesheet:
>
> ```css [main.css]
> html.dark .shiki span {
>   color: var(--shiki-dark) !important;
>   background-color: var(--shiki-dark-bg) !important;
>   font-style: var(--shiki-dark-font-style) !important;
>   font-weight: var(--shiki-dark-font-weight) !important;
>   text-decoration: var(--shiki-dark-text-decoration) !important;
> }
> ```

### Filename

Code blocks support filename display with automatic icon detection.

```vue
<template>
  <pre className=language-ts shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=export default defineNuxtConfig({
    modules: ['@nuxt/ui']
  })
   filename=nuxt.config.ts language=ts meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=s7zQu>
  export</span>
  <span class=s7zQu>
   default</span>
  <span class=s2Zo4>
   defineNuxtConfig</span>
  <span class=sTEyZ>
  (</span>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=swJcz>
    modules</span>
  <span class=sMK4o>
  :</span>
  <span class=sTEyZ>
   [</span>
  <span class=sMK4o>
  '</span>
  <span class=sfazB>
  @nuxt/ui</span>
  <span class=sMK4o>
  '</span>
  <span class=sTEyZ>
  ]
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
  )
  </span></span></code></pre>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=```ts [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: ['@nuxt/ui']
  })
````

language=mdc meta= style=>
<code \_\_ignoreMap=>
<span class=line>
<span class=sfazB>

```</span>
<span class=sJsPd>
ts [nuxt.config.ts]
</span></span>
<span class=line>
<span class=s7zQu>
export</span>
<span class=s7zQu>
 default</span>
<span class=s2Zo4>
 defineNuxtConfig</span>
<span class=sTEyZ>
(</span>
<span class=sMK4o>
{
</span></span>
<span class=line>
<span class=swJcz>
  modules</span>
<span class=sMK4o>
:</span>
<span class=sTEyZ>
 [</span>
<span class=sMK4o>
'</span>
<span class=sfazB>
@nuxt/ui</span>
<span class=sMK4o>
'</span>
<span class=sTEyZ>
]
</span></span>
<span class=line>
<span class=sMK4o>
}</span>
<span class=sTEyZ>
)
</span></span>
<span class=line>
<span class=sfazB>
```

</span></span></code></pre></template>
</template>

````

> [!TIP]
>
> The filename icon is rendered by the `ProseCodeIcon` component and contains a set of predefined icons which you can customize in your app configuration:
>
> ```ts [app/app.config.ts]
> export default defineAppConfig({
>   ui: {
>     prose: {
>       codeIcon: {
>         terminal: 'i-ph-terminal-window-duotone',
>         config: 'i-lucide-settings',
>         package: 'i-lucide-package'
>       }
>     }
>   }
> })
> ```
>
> ```ts [vite.config.ts]
> import { defineConfig } from 'vite'
> import vue from '@vitejs/plugin-vue'
> import ui from '@nuxt/ui/vite'
>
> export default defineConfig({
>   plugins: [
>     vue(),
>     ui({
>       ui: {
>         prose: {
>           codeIcon: {
>             terminal: 'i-ph-terminal-window-duotone',
>             config: 'i-lucide-settings',
>             package: 'i-lucide-package'
>           }
>         }
>       }
>     })
>   ]
> })
> ```

> [!NOTE]
>
> These filename icons come from the [`vscode-icons`](https://icones.js.org/collection/vscode-icons) collection, which is separate from the `lucide` icons the rest of the components use, and are resolved on demand from the file extension. Install `@iconify-json/vscode-icons` to serve them locally and offline, just like any other collection.

### Copy button

Every code-block has a built-in copy button that will copy the code to your clipboard.

Set the `copy` prop to `false` to hide the button, or pass [Button](/docs/components/button) props to customize it.

> [!TIP]
>
> You can change the icon through the `ui.icons.copy` and `ui.icons.copyCheck` keys in your app configuration:
>
> ```ts [app/app.config.ts]
> export default defineAppConfig({
>   ui: {
>     icons: {
>       copy: 'i-lucide-copy',
>       copyCheck: 'i-lucide-copy-check'
>     }
>   }
> })
> ```
>
> ```ts [vite.config.ts]
> import { defineConfig } from 'vite'
> import vue from '@vitejs/plugin-vue'
> import ui from '@nuxt/ui/vite'
>
> export default defineConfig({
>   plugins: [
>     vue(),
>     ui({
>       ui: {
>         icons: {
>           copy: 'i-lucide-copy',
>           copyCheck: 'i-lucide-copy-check'
>         }
>       }
>     })
>   ]
> })
> ```

### Line highlighting

Highlight specific lines to draw attention to important parts.

```vue
<template>
  <pre className=language-ts shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=export default defineNuxtConfig({
    modules: ['@nuxt/ui'], // This line is highlighted
    css: ['~/assets/css/main.css']
  })
   filename=nuxt.config.ts language=ts meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=s7zQu>
  export</span>
  <span class=s7zQu>
   default</span>
  <span class=s2Zo4>
   defineNuxtConfig</span>
  <span class=sTEyZ>
  (</span>
  <span class=sMK4o>
  {
  </span></span>
  <span>
  <span class=swJcz>
    modules</span>
  <span class=sMK4o>
  :</span>
  <span class=sTEyZ>
   [</span>
  <span class=sMK4o>
  '</span>
  <span class=sfazB>
  @nuxt/ui</span>
  <span class=sMK4o>
  '</span>
  <span class=sTEyZ>
  ]</span>
  <span class=sMK4o>
  ,</span>
  <span class=sHwdD>
   // This line is highlighted
  </span></span>
  <span class=line>
  <span class=swJcz>
    css</span>
  <span class=sMK4o>
  :</span>
  <span class=sTEyZ>
   [</span>
  <span class=sMK4o>
  '</span>
  <span class=sfazB>
  ~/assets/css/main.css</span>
  <span class=sMK4o>
  '</span>
  <span class=sTEyZ>
  ]
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
  )
  </span></span></code></pre>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=```ts [nuxt.config.ts] {2}
  export default defineNuxtConfig({
    modules: ['@nuxt/ui'], // This line is highlighted
    css: ['~/assets/css/main.css']
  })
````

language=mdc meta= style=>
<code \_\_ignoreMap=>
<span class=line>
<span class=sfazB>

```</span>
<span class=sJsPd>
ts [nuxt.config.ts] {2}
</span></span>
<span class=line>
<span class=s7zQu>
export</span>
<span class=s7zQu>
 default</span>
<span class=s2Zo4>
 defineNuxtConfig</span>
<span class=sTEyZ>
(</span>
<span class=sMK4o>
{
</span></span>
<span class=line>
<span class=swJcz>
  modules</span>
<span class=sMK4o>
:</span>
<span class=sTEyZ>
 [</span>
<span class=sMK4o>
'</span>
<span class=sfazB>
@nuxt/ui</span>
<span class=sMK4o>
'</span>
<span class=sTEyZ>
]</span>
<span class=sMK4o>
,</span>
<span class=sHwdD>
 // This line is highlighted
</span></span>
<span class=line>
<span class=swJcz>
  css</span>
<span class=sMK4o>
:</span>
<span class=sTEyZ>
 [</span>
<span class=sMK4o>
'</span>
<span class=sfazB>
~/assets/css/main.css</span>
<span class=sMK4o>
'</span>
<span class=sTEyZ>
]
</span></span>
<span class=line>
<span class=sMK4o>
}</span>
<span class=sTEyZ>
)
</span></span>
<span class=line>
<span class=sfazB>
```

</span></span></code></pre></template>
</template>

````

### Code diff

Use the `diff` language to show changes between code versions.

```vue
<template>
  <pre className=language-diff shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=export default defineNuxtConfig({
    modules: [
  -   '@nuxt/ui-pro'
  +   '@nuxt/ui'
    ]
  })
   filename=nuxt.config.ts language=diff meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sTEyZ>
  export default defineNuxtConfig({
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    modules: [
  </span></span>
  <span class=line>
  <span class=sMK4o>
  -</span>
  <span class=swJcz>
     '@nuxt/ui-pro'
  </span></span>
  <span class=line>
  <span class=sMK4o>
  +</span>
  <span class=sfazB>
     '@nuxt/ui'
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    ]
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  })
  </span></span></code></pre>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=```diff [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: [
  -   '@nuxt/ui-pro'
  +   '@nuxt/ui'
    ]
  })
````

language=mdc meta= style=>
<code \_\_ignoreMap=>
<span class=line>
<span class=sfazB>

```</span>
<span class=sJsPd>
diff [nuxt.config.ts]
</span></span>
<span class=line>
<span class=sJsPd>
export default defineNuxtConfig({
</span></span>
<span class=line>
<span class=sJsPd>
  modules: [
</span></span>
<span class=line>
<span class=sJsPd>
-   '@nuxt/ui-pro'
</span></span>
<span class=line>
<span class=sJsPd>
+   '@nuxt/ui'
</span></span>
<span class=line>
<span class=sJsPd>
  ]
</span></span>
<span class=line>
<span class=sJsPd>
})
</span></span>
<span class=line>
<span class=sfazB>
```

</span></span></code></pre></template>
</template>

````

## Inline code

Inline code snippets are rendered by the `ProseCode` component.

`inline code`

```mdc
`inline code`
````

:::

```ts
/**
 * Props for the ProseCode component
 */
interface ProseCodeProps {
	lang?: string | undefined;
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
	ui?: { base?: any } | undefined;
}
```

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {
			code: {
				base: 'px-1.5 py-0.5 text-sm font-mono font-medium rounded-md inline-block',
				variants: {
					color: {
						primary: 'border border-primary/25 bg-primary/10 text-primary',
						secondary:
							'border border-secondary/25 bg-secondary/10 text-secondary',
						success: 'border border-success/25 bg-success/10 text-success',
						info: 'border border-info/25 bg-info/10 text-info',
						warning: 'border border-warning/25 bg-warning/10 text-warning',
						error: 'border border-error/25 bg-error/10 text-error',
						neutral: 'border border-muted text-highlighted bg-muted',
					},
				},
				defaultVariants: {
					color: 'neutral',
				},
			},
		},
	},
});
```

### Color

Use the `color` prop to change the color of the inline code. Defaults to `neutral`.

```vue
<template>
	<p>
		<code color="error"> inline code</code>
	</p>
	<template v-slot:code="">
		<pre
			className="language-mdc"
			shiki
			shiki-themes
			material-theme-lighter
			material-theme
			material-theme-palenight
			code="`inline"
			code`{color="error"
			}
			language="mdc"
			meta="style"
			=""
		>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  inline code</span>
  <span class=sMK4o>
  `</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  color</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  error</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span></code></pre>
	</template>
</template>
```

### Lang

Use the `lang` prop to specify the language of the inline code.

```vue
<template>
	<p>
		<code
			className="language-ts-type"
			shiki
			shiki-themes
			material-theme-lighter
			material-theme
			material-theme-palenight
			language="ts-type"
			style=""
		>
			<span class="sBMFI"> nuxt</span>
			<span class="sMK4o"> .</span>
			<span class="sBMFI"> config</span>
			<span class="sMK4o"> .</span>
			<span class="sBMFI"> ts</span></code
		>
	</p>
	<template v-slot:code="">
		<pre
			className="language-mdc"
			shiki
			shiki-themes
			material-theme-lighter
			material-theme
			material-theme-palenight
			code="`nuxt.config.ts`{lang"
			="ts-type"
			}
			language="mdc"
			meta="style"
			=""
		>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  nuxt.config.ts</span>
  <span class=sMK4o>
  `</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  lang</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  ts-type</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span></code></pre>
	</template>
</template>
```

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseAccordion"
description: "Create expandable content sections for better information organization."
canonical_url: "https://ui.nuxt.com/docs/typography/accordion"

---

# ProseAccordion

> Create expandable content sections for better information organization.

## Usage

Use the `accordion` and `accordion-item` components to display an [Accordion](/docs/components/accordion) in your content.

```vue
<template>
  <__flatten>
  <p>
  <strong>
  Q: Is Nuxt UI free to use?</strong></p>
  <p>
  Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.</p>
  <p>
  <strong>
  Q: Can I use Nuxt UI with Vue without Nuxt?</strong></p>
  <p>
  Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the
  <a href=/docs/getting-started/installation/vue>
  installation guide</a>
   to get started.</p>
  <p>
  <strong>
  Q: Is Nuxt UI production-ready?</strong></p>
  <p>
  Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.</p></__flatten>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::accordion
  ---
  defaultValue:
    - '1'
  ---

  ::accordion-item{label="Is Nuxt UI free to use?" icon="i-lucide-circle-help"}
  Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.
  ::

  ::accordion-item{label="Can I use Nuxt UI with Vue without Nuxt?" icon="i-lucide-circle-help"}
  Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.
  ::

  ::accordion-item{label="Is Nuxt UI production-ready?" icon="i-lucide-circle-help"}
  Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.
  ::

  ::
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  accordion
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  ---
  </span></span>
  <span class=line>
  <span class=swJcz>
  defaultValue</span>
  <span class=sMK4o>
  :
  </span></span>
  <span class=line>
  <span class=sMK4o>
    -</span>
  <span class=sMK4o>
   '</span>
  <span class=sfazB>
  1</span>
  <span class=sMK4o>
  '
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  ---
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  accordion-item</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  label</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  Is Nuxt UI free to use?</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   icon</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  <i class=shiki-icon-highlight szxwu />
  i-lucide-circle-help</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  accordion-item</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  label</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  Can I use Nuxt UI with Vue without Nuxt?</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   icon</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  <i class=shiki-icon-highlight szxwu />
  i-lucide-circle-help</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the </span>
  <span class=sMK4o>
  [</span>
  <span class=sfazB>
  installation guide</span>
  <span class=sMK4o>
  ](</span>
  <span class=sQLHv>
  /docs/getting-started/installation/vue</span>
  <span class=sMK4o>
  )</span>
  <span class=sTEyZ>
   to get started.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  accordion-item</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  label</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  Is Nuxt UI production-ready?</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   icon</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  <i class=shiki-icon-highlight szxwu />
  i-lucide-circle-help</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span></code></pre></template>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProseProseAccordion component
 */
interface ProseProseAccordionProps {
	/**
	 * @default 'multiple'
	 */
	type?: 'multiple' | 'single' | undefined;
	ui?:
		| ({ root?: SlotClass; trigger?: SlotClass } & {
				root?: SlotClass;
				item?: SlotClass;
				header?: SlotClass;
				trigger?: SlotClass;
				content?: SlotClass;
				body?: SlotClass;
				leadingIcon?: SlotClass;
				trailingIcon?: SlotClass;
				label?: SlotClass;
		  })
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseAccordion component
 */
interface ProseAccordionSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseAccordion.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-accordion.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseBadge"
description: "Display version numbers, status labels, and tags within your content."
canonical_url: "https://ui.nuxt.com/docs/typography/badge"

---

# ProseBadge

> Display version numbers, status labels, and tags within your content.

## Usage

Use markdown in the default slot of the `badge` component to display a [Badge](/docs/components/badge) in your content.

```vue
<template>
	<code />
	<template v-slot:code="">
		<pre
			className="language-mdc"
			shiki
			shiki-themes
			material-theme-lighter
			material-theme
			material-theme-palenight
			code="::badge"
			**v4.0.0**
			:
			language="mdc"
			meta="style"
			=""
		>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  badge
  </span></span>
  <span class=line>
  <span class=sHepR>
  **</span>
  <span class=so75L>
  v4.0.0</span>
  <span class=sHepR>
  **
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span></code></pre>
	</template>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProseProseBadge component
 */
interface ProseProseBadgeProps {
	ui?: { base?: any } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseBadge component
 */
interface ProseBadgeSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseBadge.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-badge.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseCallout"
description: "Highlight important information with eye-catching colored boxes and icons."
canonical_url: "https://ui.nuxt.com/docs/typography/callout"

---

# ProseCallout

> Highlight important information with eye-catching colored boxes and icons.

## Usage

Use markdown in the default slot of the `callout` component to add eye-catching context to your content.

```mdc
::callout
This is a `callout` with full **markdown** support.
::
```

### Icon

Use the `icon` prop to display an icon next to the content.

```mdc
::callout{icon="i-lucide-square-play"}
This is a `callout` with an icon.
::
```

### Color

Use the `color` prop to change the color of the callout.

```mdc
::callout{icon="i-lucide-info" color="info"}
This is a `callout` with a custom color.
::
```

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component such as `to` and `target` to make the callout a link.

```mdc
::callout{icon="i-lucide-square-play" to="/docs/getting-started/installation/nuxt" color="neutral"}
Learn how to install `@nuxt/ui` in your project.
::
```

## Shortcuts

You can also use the `note`, `tip`, `warning` and `caution` shortcuts with pre-defined icons and colors.

```vue
<template>
  <__flatten>
  <blockquote>
  <p>
  [!NOTE]</p>
  <p>
  Here's some additional information for you.</p></blockquote>
  <blockquote>
  <p>
  [!TIP]</p>
  <p>
  Here's a helpful suggestion.</p></blockquote>
  <blockquote>
  <p>
  [!WARNING]</p>
  <p>
  Be careful with this action as it might have unexpected results.</p></blockquote>
  <blockquote>
  <p>
  [!CAUTION]</p>
  <p>
  This action cannot be undone.</p></blockquote></__flatten>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::note
  Here's some additional information.
  ::

  ::tip
  Here's a helpful suggestion.
  ::

  ::warning
  Be careful with this action as it might have unexpected results.
  ::

  ::caution
  This action cannot be undone.
  ::
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  note
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  Here's some additional information.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  tip
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  Here's a helpful suggestion.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  warning
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  Be careful with this action as it might have unexpected results.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  caution
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  This action cannot be undone.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span></code></pre></template>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProseProseCallout component
 */
interface ProseProseCalloutProps {
	to?: string | it | et | undefined;
	target?:
		| null
		| '_blank'
		| '_parent'
		| '_self'
		| '_top'
		| (string & {})
		| undefined;
	icon?: any;
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
	ui?:
		| { base?: SlotClass; icon?: SlotClass; externalIcon?: SlotClass }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseCallout component
 */
interface ProseCalloutSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseCallout.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-callout.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseCard"
description: "Create highlighted content blocks with optional links and navigation."
canonical_url: "https://ui.nuxt.com/docs/typography/card"

---

# ProseCard

> Create highlighted content blocks with optional links and navigation.

## Usage

Use markdown in the default slot of the `card` component to highlight your content.

Use the `title`, `icon` and `color` props to customize it. You can also pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) or [`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html) component.

```mdc
::card{title="Startup" icon="i-lucide-users" color="primary" to="https://nuxt.lemonsqueezy.com" target="_blank"}
Best suited for small teams, startups and agencies with up to 5 developers.
::
```

## API

### Props

```ts
/**
 * Props for the ProseProseCard component
 */
interface ProseProseCardProps {
	to?: string | it | et | undefined;
	target?:
		| null
		| '_blank'
		| '_parent'
		| '_self'
		| '_top'
		| (string & {})
		| undefined;
	icon?: any;
	title?: string | undefined;
	description?: string | undefined;
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
	ui?:
		| {
				base?: SlotClass;
				icon?: SlotClass;
				title?: SlotClass;
				description?: SlotClass;
				externalIcon?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseCard component
 */
interface ProseCardSlots {
	default(): any;
	title(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseCard.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-card.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseCardGroup"
description: "Organize multiple cards in responsive grid layouts for better content presentation."
canonical_url: "https://ui.nuxt.com/docs/typography/card-group"

---

# ProseCardGroup

> Organize multiple cards in responsive grid layouts for better content presentation.

## Usage

Wrap your `card` components with the `card-group` component to group them together in a grid layout.

```vue
<template>
  <__flatten>
  <p>
  <strong>
  Dashboard</strong></p>
  <p>
  A dashboard with multi-column layout.</p>
  <p>
  <strong>
  SaaS</strong></p>
  <p>
  A template with landing, pricing, docs and blog.</p>
  <p>
  <strong>
  Docs</strong></p>
  <p>
  A documentation with
  <code>
  @nuxt/content</code>
  .</p>
  <p>
  <strong>
  Landing</strong></p>
  <p>
  A landing page you can use as starting point.</p></__flatten>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::card-group

  ::card
  ---
  title: Dashboard
  icon: i-simple-icons-github
  to: https://github.com/nuxt-ui-templates/dashboard
  target: _blank
  ---
  A dashboard with multi-column layout.
  ::

  ::card
  ---
  title: SaaS
  icon: i-simple-icons-github
  to: https://github.com/nuxt-ui-templates/saas
  target: _blank
  ---
  A template with landing, pricing, docs and blog.
  ::

  ::card
  ---
  title: Docs
  icon: i-simple-icons-github
  to: https://github.com/nuxt-ui-templates/docs
  target: _blank
  ---
  A documentation with `@nuxt/content`.
  ::

  ::card
  ---
  title: Landing
  icon: i-simple-icons-github
  to: https://github.com/nuxt-ui-templates/landing
  target: _blank
  ---
  A landing page you can use as starting point.
  ::

  ::
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  card-group
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  card
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  ---
  </span></span>
  <span class=line>
  <span class=swJcz>
  title</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   Dashboard
  </span></span>
  <span class=line>
  <span class=swJcz>
  icon</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   i-simple-icons-github
  </span></span>
  <span class=line>
  <span class=swJcz>
  to</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   https://github.com/nuxt-ui-templates/dashboard
  </span></span>
  <span class=line>
  <span class=swJcz>
  target</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   _blank
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  ---
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  A dashboard with multi-column layout.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  card
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  ---
  </span></span>
  <span class=line>
  <span class=swJcz>
  title</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   SaaS
  </span></span>
  <span class=line>
  <span class=swJcz>
  icon</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   i-simple-icons-github
  </span></span>
  <span class=line>
  <span class=swJcz>
  to</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   https://github.com/nuxt-ui-templates/saas
  </span></span>
  <span class=line>
  <span class=swJcz>
  target</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   _blank
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  ---
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  A template with landing, pricing, docs and blog.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  card
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  ---
  </span></span>
  <span class=line>
  <span class=swJcz>
  title</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   Docs
  </span></span>
  <span class=line>
  <span class=swJcz>
  icon</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   i-simple-icons-github
  </span></span>
  <span class=line>
  <span class=swJcz>
  to</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   https://github.com/nuxt-ui-templates/docs
  </span></span>
  <span class=line>
  <span class=swJcz>
  target</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   _blank
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  ---
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  A documentation with </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  @nuxt/content</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
  .
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  card
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  ---
  </span></span>
  <span class=line>
  <span class=swJcz>
  title</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   Landing
  </span></span>
  <span class=line>
  <span class=swJcz>
  icon</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   i-simple-icons-github
  </span></span>
  <span class=line>
  <span class=swJcz>
  to</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   https://github.com/nuxt-ui-templates/landing
  </span></span>
  <span class=line>
  <span class=swJcz>
  target</span>
  <span class=sMK4o>
  :</span>
  <span class=sfazB>
   _blank
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  ---
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  A landing page you can use as starting point.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span></code></pre></template>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProseProseCardGroup component
 */
interface ProseProseCardGroupProps {
	ui?: { base?: any } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseCardGroup component
 */
interface ProseCardGroupSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseCardGroup.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-card-group.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseCodeCollapse"
description: "Make long code blocks collapsible to save space and improve readability."
canonical_url: "https://ui.nuxt.com/docs/typography/code-collapse"

---

# ProseCodeCollapse

> Make long code blocks collapsible to save space and improve readability.

## Usage

Wrap your code-block with a `code-collapse` component to display a collapsible code block.

````vue
<template>
  <__flatten>
  <pre className=language-css shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=@import "tailwindcss";
  @import "@nuxt/ui";

  @theme static {
    --font-sans: 'Public Sans', sans-serif;

    --breakpoint-3xl: 1920px;

    --color-green-50: #EFFDF5;
    --color-green-100: #D9FBE8;
    --color-green-200: #B3F5D1;
    --color-green-300: #75EDAE;
    --color-green-400: #00DC82;
    --color-green-500: #00C16A;
    --color-green-600: #00A155;
    --color-green-700: #007F45;
    --color-green-800: #016538;
    --color-green-900: #0A5331;
    --color-green-950: #052E16;
  }
   filename=app/assets/css/main.css language=css meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=s7zQu>
  @import</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  tailwindcss</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ;
  </span></span>
  <span class=line>
  <span class=s7zQu>
  @import</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  @nuxt/ui</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ;
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=s7zQu>
  @theme</span>
  <span class=sTEyZ>
   static </span>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --font-sans: 'Public Sans'</span>
  <span class=sMK4o>
  ,</span>
  <span class=sBMFI>
   sans-serif</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
    --breakpoint-3xl: 1920px;
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-50: </span>
  <span class=s7r4c>
  #EFFDF5</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-100: </span>
  <span class=s_yAY>
  #D9FBE8</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-200: </span>
  <span class=svDi6>
  #B3F5D1</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-300: </span>
  <span class=sX0M8>
  #75EDAE</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-400: </span>
  <span class=sMfEM>
  #00DC82</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-500: </span>
  <span class=sLUHb>
  #00C16A</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-600: </span>
  <span class=sm-p6>
  #00A155</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-700: </span>
  <span class=sNqnt>
  #007F45</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-800: </span>
  <span class=s74mv>
  #016538</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-900: </span>
  <span class=sWbUt>
  #0A5331</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
    --color-green-950: </span>
  <span class=sB4BK>
  #052E16</span>
  <span class=sTEyZ>
  ;
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  }
  </span></span></code></pre></__flatten>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::code-collapse

  ```css [app/assets/css/main.css]
  @import "tailwindcss";
  @import "@nuxt/ui";

  @theme static {
    --font-sans: 'Public Sans', sans-serif;

    --breakpoint-3xl: 1920px;

    --color-green-50: #EFFDF5;
    --color-green-100: #D9FBE8;
    --color-green-200: #B3F5D1;
    --color-green-300: #75EDAE;
    --color-green-400: #00DC82;
    --color-green-500: #00C16A;
    --color-green-600: #00A155;
    --color-green-700: #007F45;
    --color-green-800: #016538;
    --color-green-900: #0A5331;
    --color-green-950: #052E16;
  }
````

::
language=mdc meta= style=>
<code \_\_ignoreMap=>
<span class=line>
<span class=sMK4o>
::</span>
<span class=swJcz>
code-collapse
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sfazB>

```</span>
<span class=sJsPd>
css [app/assets/css/main.css]
</span></span>
<span class=line>
<span class=s7zQu>
@import</span>
<span class=sMK4o>
 "</span>
<span class=sfazB>
tailwindcss</span>
<span class=sMK4o>
"</span>
<span class=sMK4o>
;
</span></span>
<span class=line>
<span class=s7zQu>
@import</span>
<span class=sMK4o>
 "</span>
<span class=sfazB>
@nuxt/ui</span>
<span class=sMK4o>
"</span>
<span class=sMK4o>
;
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=s7zQu>
@theme</span>
<span class=sTEyZ>
 static </span>
<span class=sMK4o>
{
</span></span>
<span class=line>
<span class=sTEyZ>
  --font-sans: 'Public Sans'</span>
<span class=sMK4o>
,</span>
<span class=swJcz>
 sans-serif</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sTEyZ>
  --breakpoint-3xl: 1920px;
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sTEyZ>
  --color-green-50: </span>
<span class=s7r4c>
#EFFDF5</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
  --color-green-100: </span>
<span class=s_yAY>
#D9FBE8</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
  --color-green-200: </span>
<span class=svDi6>
#B3F5D1</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
  --color-green-300: </span>
<span class=sX0M8>
#75EDAE</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
  --color-green-400: </span>
<span class=sMfEM>
#00DC82</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
  --color-green-500: </span>
<span class=sLUHb>
#00C16A</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
  --color-green-600: </span>
<span class=sm-p6>
#00A155</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
  --color-green-700: </span>
<span class=sNqnt>
#007F45</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
  --color-green-800: </span>
<span class=s74mv>
#016538</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
  --color-green-900: </span>
<span class=sWbUt>
#0A5331</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
  --color-green-950: </span>
<span class=sB4BK>
#052E16</span>
<span class=sTEyZ>
;
</span></span>
<span class=line>
<span class=sTEyZ>
}
</span></span>
<span class=line>
<span class=sfazB>
```

</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sMK4o>
::
</span></span></code></pre></template>
</template>

````

## API

### Props

```ts
/**
 * Props for the ProseProseCodeCollapse component
 */
interface ProseProseCodeCollapseProps {
  /**
   * The icon displayed to toggle the code.
   * @default appConfig.ui.icons.chevronDown
   */
  icon?: any;
  /**
   * The name displayed in the trigger label.
   * @default t('prose.codeCollapse.name')
   */
  name?: string | undefined;
  /**
   * The text displayed when the code is collapsed.
   * @default t('prose.codeCollapse.openText')
   */
  openText?: string | undefined;
  /**
   * The text displayed when the code is expanded.
   * @default t('prose.codeCollapse.closeText')
   */
  closeText?: string | undefined;
  ui?: { root?: SlotClass; footer?: SlotClass; trigger?: SlotClass; triggerIcon?: SlotClass; } | undefined;
  /**
   * @default false
   */
  open?: boolean | undefined;
}
````

### Slots

```ts
/**
 * Slots for the ProseCodeCollapse component
 */
interface ProseCodeCollapseSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseCodeCollapse.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-code-collapse.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseCodeGroup"
description: "Group multiple code examples in tabbed interfaces for easy comparison."
canonical_url: "https://ui.nuxt.com/docs/typography/code-group"

---

# ProseCodeGroup

> Group multiple code examples in tabbed interfaces for easy comparison.

## Usage

Wrap your code blocks around a `code-group` component to group them together in tabs.

````vue
<template>
  <__flatten>
  <pre className=language-bash shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=pnpm add @nuxt/ui
   filename=pnpm language=bash meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sBMFI>
  pnpm</span>
  <span class=sfazB>
   add</span>
  <span class=sfazB>
   @nuxt/ui
  </span></span></code></pre>
  <pre className=language-bash shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=yarn add @nuxt/ui
   filename=yarn language=bash meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sBMFI>
  yarn</span>
  <span class=sfazB>
   add</span>
  <span class=sfazB>
   @nuxt/ui
  </span></span></code></pre>
  <pre className=language-bash shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=npm install @nuxt/ui
   filename=npm language=bash meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   install</span>
  <span class=sfazB>
   @nuxt/ui
  </span></span></code></pre>
  <pre className=language-bash shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=bun add @nuxt/ui
   filename=bun language=bash meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sBMFI>
  bun</span>
  <span class=sfazB>
   add</span>
  <span class=sfazB>
   @nuxt/ui
  </span></span></code></pre></__flatten>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::code-group

  ```bash [pnpm]
  pnpm add @nuxt/ui
````

```bash [yarn]
yarn add @nuxt/ui
```

```bash [npm]
npm install @nuxt/ui
```

```bash [bun]
bun add @nuxt/ui
```

::
language=mdc meta= style=>
<code \_\_ignoreMap=>
<span class=line>
<span class=sMK4o>
::</span>
<span class=swJcz>
code-group
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sfazB>

```</span>
<span class=sJsPd>
bash [pnpm]
</span></span>
<span class=line>
<span class=sBMFI>
pnpm</span>
<span class=sfazB>
 add</span>
<span class=sfazB>
 @nuxt/ui
</span></span>
<span class=line>
<span class=sfazB>
```

</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sfazB>

```</span>
<span class=sJsPd>
bash [yarn]
</span></span>
<span class=line>
<span class=sBMFI>
yarn</span>
<span class=sfazB>
 add</span>
<span class=sfazB>
 @nuxt/ui
</span></span>
<span class=line>
<span class=sfazB>
```

</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sfazB>

```</span>
<span class=sJsPd>
bash [npm]
</span></span>
<span class=line>
<span class=sBMFI>
npm</span>
<span class=sfazB>
 install</span>
<span class=sfazB>
 @nuxt/ui
</span></span>
<span class=line>
<span class=sfazB>
```

</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sfazB>

```</span>
<span class=sJsPd>
bash [bun]
</span></span>
<span class=line>
<span class=sBMFI>
bun</span>
<span class=sfazB>
 add</span>
<span class=sfazB>
 @nuxt/ui
</span></span>
<span class=line>
<span class=sfazB>
```

</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sMK4o>
::
</span></span></code></pre></template>
</template>

````

> [!NOTE]
> See: /docs/typography/code#code-blocks
>
> Like the `ProsePre` component, the `CodeGroup` handles filenames, icons and copy button.

## API

### Props

```ts
/**
 * Props for the ProseProseCodeGroup component
 */
interface ProseProseCodeGroupProps {
  /**
   * The default tab to select.
   * @default '0'
   */
  defaultValue?: string | undefined;
  /**
   * Sync the selected tab with a local storage key.
   */
  sync?: string | undefined;
  ui?: { root?: SlotClass; list?: SlotClass; indicator?: SlotClass; trigger?: SlotClass; triggerIcon?: SlotClass; triggerLabel?: SlotClass; } | undefined;
  modelValue?: string | undefined;
}
````

### Slots

```ts
/**
 * Slots for the ProseCodeGroup component
 */
interface ProseCodeGroupSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseCodeGroup.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-code-group.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseCodePreview"
description: "Display code examples with a preview and their source for clearer documentation."
canonical_url: "https://ui.nuxt.com/docs/typography/code-preview"

---

# ProseCodePreview

> Display code examples with a preview and their source for clearer documentation.

## Usage

Wrap any content with the `code-preview` component to display a live preview alongside its source code using the `code` slot.

````vue
<template>
  <code-preview>
  <p>
  <code>
  inline code</code></p>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=`inline code`
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  inline code</span>
  <span class=sMK4o>
  `
  </span></span></code></pre></template></code-preview>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::code-preview
  `inline code`

  #code
  ```mdc
  `inline code`
````

::
language=mdc meta= style=>
<code \_\_ignoreMap=>
<span class=line>
<span class=sMK4o>
::</span>
<span class=swJcz>
code-preview
</span></span>
<span class=line>
<span class=sMK4o>
`</span>
  <span class=sfazB>
  inline code</span>
  <span class=sMK4o>
  `
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=spNyl>
#code
</span></span>
<span class=line>
<span class=sfazB>

```</span>
<span class=sJsPd>
mdc
</span></span>
<span class=line>
<span class=sJsPd>
`inline code`
</span></span>
<span class=line>
<span class=sfazB>
```

</span></span>
<span class=line>
<span class=sMK4o>
::
</span></span></code></pre></template>
</template>

````

## API

### Props

```ts
/**
 * Props for the ProseProseCodePreview component
 */
interface ProseProseCodePreviewProps {
  ui?: { root?: SlotClass; preview?: SlotClass; code?: SlotClass; } | undefined;
}
````

### Slots

```ts
/**
 * Slots for the ProseCodePreview component
 */
interface ProseCodePreviewSlots {
	default(): any;
	code(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseCodePreview.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-code-preview.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseCodeTree"
description: "Visualize file and folder structures with syntax-highlighted code."
canonical_url: "https://ui.nuxt.com/docs/typography/code-tree"

---

# ProseCodeTree

> Visualize file and folder structures with syntax-highlighted code.

## Usage

Wrap your code blocks with a `code-tree` component in any particular order to display a tree view of your files.

````vue
<template>
  <code-tree default-value=app/app.config.ts>
  <pre className=language-ts shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=export default defineNuxtConfig({
    modules: ['@nuxt/ui'],

    css: ['~/assets/css/main.css']
  })

   filename=nuxt.config.ts language=ts meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=s7zQu>
  export</span>
  <span class=s7zQu>
   default</span>
  <span class=s2Zo4>
   defineNuxtConfig</span>
  <span class=sTEyZ>
  (</span>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=swJcz>
    modules</span>
  <span class=sMK4o>
  :</span>
  <span class=sTEyZ>
   [</span>
  <span class=sMK4o>
  '</span>
  <span class=sfazB>
  @nuxt/ui</span>
  <span class=sMK4o>
  '</span>
  <span class=sTEyZ>
  ]</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=swJcz>
    css</span>
  <span class=sMK4o>
  :</span>
  <span class=sTEyZ>
   [</span>
  <span class=sMK4o>
  '</span>
  <span class=sfazB>
  ~/assets/css/main.css</span>
  <span class=sMK4o>
  '</span>
  <span class=sTEyZ>
  ]
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
  )
  </span></span></code></pre>
  <pre className=language-css shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=@import "tailwindcss";
  @import "@nuxt/ui";
   filename=app/assets/css/main.css language=css meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=s7zQu>
  @import</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  tailwindcss</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ;
  </span></span>
  <span class=line>
  <span class=s7zQu>
  @import</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  @nuxt/ui</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ;
  </span></span></code></pre>
  <pre className=language-ts shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=export default defineAppConfig({
    ui: {
      colors: {
        primary: 'sky',
        colors: 'slate'
      }
    }
  })
   filename=app/app.config.ts language=ts meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=s7zQu>
  export</span>
  <span class=s7zQu>
   default</span>
  <span class=s2Zo4>
   defineAppConfig</span>
  <span class=sTEyZ>
  (</span>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=swJcz>
    ui</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=swJcz>
      colors</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=swJcz>
        primary</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   '</span>
  <span class=sfazB>
  sky</span>
  <span class=sMK4o>
  '</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=swJcz>
        colors</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   '</span>
  <span class=sfazB>
  slate</span>
  <span class=sMK4o>
  '
  </span></span>
  <span class=line>
  <span class=sMK4o>
      }
  </span></span>
  <span class=line>
  <span class=sMK4o>
    }
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
  )
  </span></span></code></pre>
  <pre className=language-vue shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=<template>
    <UApp>
      <NuxtPage />
    </UApp>
  </template>
   filename=app/app.vue language=vue meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  <</span>
  <span class=swJcz>
  template</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span class=sMK4o>
    <</span>
  <span class=swJcz>
  UApp</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span class=sMK4o>
      <</span>
  <span class=swJcz>
  NuxtPage</span>
  <span class=sMK4o>
   />
  </span></span>
  <span class=line>
  <span class=sMK4o>
    </</span>
  <span class=swJcz>
  UApp</span>
  <span class=sMK4o>
  >
  </span></span>
  <span class=line>
  <span class=sMK4o>
  </</span>
  <span class=swJcz>
  template</span>
  <span class=sMK4o>
  >
  </span></span></code></pre>
  <pre className=language-json shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code={
    "name": "nuxt-app",
    "private": true,
    "type": "module",
    "scripts": {
      "build": "nuxt build",
      "dev": "nuxt dev",
      "generate": "nuxt generate",
      "preview": "nuxt preview",
      "postinstall": "nuxt prepare",
      "typecheck": "nuxt typecheck"
    },
    "dependencies": {
      "@iconify-json/lucide": "^1.2.0",
      "@nuxt/ui": "^4.0.0",
      "nuxt": "^4.0.0"
    },
    "devDependencies": {
      "typescript": "^6.0.0",
      "vue-tsc": "^3.2.0"
    }
  }
   filename=package.json language=json meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  name</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt-app</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  private</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   true,
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  type</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  module</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  scripts</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  build</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt build</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  dev</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt dev</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  generate</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt generate</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  preview</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt preview</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  postinstall</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt prepare</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  typecheck</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt typecheck</span>
  <span class=sMK4o>
  "
  </span></span>
  <span class=line>
  <span class=sMK4o>
    },
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  dependencies</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  @iconify-json/lucide</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ^1.2.0</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  @nuxt/ui</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ^4.0.0</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  nuxt</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ^4.0.0</span>
  <span class=sMK4o>
  "
  </span></span>
  <span class=line>
  <span class=sMK4o>
    },
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  devDependencies</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  typescript</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ^6.0.0</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  vue-tsc</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ^3.2.0</span>
  <span class=sMK4o>
  "
  </span></span>
  <span class=line>
  <span class=sMK4o>
    }
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }
  </span></span></code></pre>
  <pre className=language-json shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code={
    "extends": "./.nuxt/tsconfig.json"
  }
   filename=tsconfig.json language=json meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  extends</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ./.nuxt/tsconfig.json</span>
  <span class=sMK4o>
  "
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }
  </span></span></code></pre>
  <pre className=language-md shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=# Nuxt 4 Minimal Starter

  Look at the [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

  ## Setup

  Make sure to install the dependencies:

  ```bash
  # npm
  npm install

  # pnpm
  pnpm install

  # yarn
  yarn install

  # bun
  bun install
````

## Development server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
filename=README.md language=md meta= style=>
<code \_\_ignoreMap=>
<span class=line>
<span class=sMK4o>

# </span>

  <span class=sBMFI>
  Nuxt 4 Minimal Starter
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Look at the </span>
  <span class=sMK4o>
  [</span>
  <span class=sfazB>
  Nuxt 4 documentation</span>
  <span class=sMK4o>
  ](</span>
  <span class=sDpXG>
  https://nuxt.com/docs/getting-started/introduction</span>
  <span class=sMK4o>
  )</span>
  <span class=sTEyZ>
   to learn more.
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ## </span>
  <span class=sBMFI>
  Setup
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Make sure to install the dependencies:
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  bash
  </span></span>
  <span class=line>
  <span class=sHwdD>
  # npm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   install
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # pnpm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  pnpm</span>
  <span class=sfazB>
   install
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # yarn
  </span></span>
  <span class=line>
  <span class=sBMFI>
  yarn</span>
  <span class=sfazB>
   install
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # bun
  </span></span>
  <span class=line>
  <span class=sBMFI>
  bun</span>
  <span class=sfazB>
   install
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ## </span>
  <span class=sBMFI>
  Development server
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Start the development server on </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  http://localhost:3000</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
  :
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  bash
  </span></span>
  <span class=line>
  <span class=sHwdD>
  # npm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   dev
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # pnpm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  pnpm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   dev
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # yarn
  </span></span>
  <span class=line>
  <span class=sBMFI>
  yarn</span>
  <span class=sfazB>
   dev
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # bun
  </span></span>
  <span class=line>
  <span class=sBMFI>
  bun</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   dev
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ## </span>
  <span class=sBMFI>
  Production
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Build the application for production:
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  bash
  </span></span>
  <span class=line>
  <span class=sHwdD>
  # npm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   build
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # pnpm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  pnpm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   build
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # yarn
  </span></span>
  <span class=line>
  <span class=sBMFI>
  yarn</span>
  <span class=sfazB>
   build
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # bun
  </span></span>
  <span class=line>
  <span class=sBMFI>
  bun</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   build
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Locally preview production build:
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  bash
  </span></span>
  <span class=line>
  <span class=sHwdD>
  # npm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   preview
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # pnpm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  pnpm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   preview
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # yarn
  </span></span>
  <span class=line>
  <span class=sBMFI>
  yarn</span>
  <span class=sfazB>
   preview
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # bun
  </span></span>
  <span class=line>
  <span class=sBMFI>
  bun</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   preview
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Check out the </span>
  <span class=sMK4o>
  [</span>
  <span class=sfazB>
  deployment documentation</span>
  <span class=sMK4o>
  ](</span>
  <span class=sDpXG>
  https://nuxt.com/docs/getting-started/deployment</span>
  <span class=sMK4o>
  )</span>
  <span class=sTEyZ>
   for more information.
  </span></span></code></pre></code-tree>
  <template v-slot:code=>
  <__flatten>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::code-tree{defaultValue="app/app.config.ts"}
  
  ```ts [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: ['@nuxt/ui'],
  
    css: ['~/assets/css/main.css']
  })
  
  ```
  
  ```css [app/assets/css/main.css]
  @import "tailwindcss";
  @import "@nuxt/ui";
  ```
  
  ```ts [app/app.config.ts]
  export default defineAppConfig({
    ui: {
      colors: {
        primary: 'sky',
        colors: 'slate'
      }
    }
  })
  ```
  
  ```vue [app/app.vue]
  <template>
    <UApp>
      <NuxtPage />
    </UApp>
  </template>
  ```
  
  ```json [package.json]
  {
    "name": "nuxt-app",
    "private": true,
    "type": "module",
    "scripts": {
      "build": "nuxt build",
      "dev": "nuxt dev",
      "generate": "nuxt generate",
      "preview": "nuxt preview",
      "postinstall": "nuxt prepare",
      "typecheck": "nuxt typecheck"
    },
    "dependencies": {
      "@iconify-json/lucide": "^1.2.0",
      "@nuxt/ui": "^4.0.0",
      "nuxt": "^4.0.0"
    },
    "devDependencies": {
      "typescript": "^6.0.0",
      "vue-tsc": "^3.2.0"
    }
  }
  ```
  
  ```json [tsconfig.json]
  {
    "extends": "./.nuxt/tsconfig.json"
  }
  ```
  
  ````md [README.md]
  # Nuxt 4 Minimal Starter
  
  Look at the [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
  
  ## Setup
  
  Make sure to install the dependencies:
  
  ```bash
  # npm
  npm install
  
  # pnpm
  pnpm install
  
  # yarn
  yarn install
  
  # bun
  bun install
  ```
  
  ## Development server
  
  Start the development server on `http://localhost:3000`:
  
  ```bash
  # npm
  npm run dev
  
  # pnpm
  pnpm run dev
  
  # yarn
  yarn dev
  
  # bun
  bun run dev
  ```
  
  ## Production
  
  Build the application for production:
  
  ```bash
  # npm
  npm run build
  
  # pnpm
  pnpm run build
  
  # yarn
  yarn build
  
  # bun
  bun run build
  ```
  
  Locally preview production build:
  
  ```bash
  # npm
  npm run preview
  
  # pnpm
  pnpm run preview
  
  # yarn
  yarn preview
  
  # bun
  bun run preview
  ```
  
  Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
  ````
  
  ::
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  code-tree</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  defaultValue</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  app/app.config.ts</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  ts [nuxt.config.ts]
  </span></span>
  <span class=line>
  <span class=s7zQu>
  export</span>
  <span class=s7zQu>
   default</span>
  <span class=s2Zo4>
   defineNuxtConfig</span>
  <span class=sTEyZ>
  (</span>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=swJcz>
    modules</span>
  <span class=sMK4o>
  :</span>
  <span class=sTEyZ>
   [</span>
  <span class=sMK4o>
  '</span>
  <span class=sfazB>
  @nuxt/ui</span>
  <span class=sMK4o>
  '</span>
  <span class=sTEyZ>
  ]</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=swJcz>
    css</span>
  <span class=sMK4o>
  :</span>
  <span class=sTEyZ>
   [</span>
  <span class=sMK4o>
  '</span>
  <span class=sfazB>
  ~/assets/css/main.css</span>
  <span class=sMK4o>
  '</span>
  <span class=sTEyZ>
  ]
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
  )
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  css [app/assets/css/main.css]
  </span></span>
  <span class=line>
  <span class=s7zQu>
  @import</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  tailwindcss</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ;
  </span></span>
  <span class=line>
  <span class=s7zQu>
  @import</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  @nuxt/ui</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ;
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  ts [app/app.config.ts]
  </span></span>
  <span class=line>
  <span class=s7zQu>
  export</span>
  <span class=s7zQu>
   default</span>
  <span class=s2Zo4>
   defineAppConfig</span>
  <span class=sTEyZ>
  (</span>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=swJcz>
    ui</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=swJcz>
      colors</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=swJcz>
        primary</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   '</span>
  <span class=sfazB>
  sky</span>
  <span class=sMK4o>
  '</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=swJcz>
        colors</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   '</span>
  <span class=sfazB>
  slate</span>
  <span class=sMK4o>
  '
  </span></span>
  <span class=line>
  <span class=sMK4o>
      }
  </span></span>
  <span class=line>
  <span class=sMK4o>
    }
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
  )
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  vue [app/app.vue]
  </span></span>
  <span class=line>
  <span class=sJsPd>
  <template>
  </span></span>
  <span class=line>
  <span class=sJsPd>
    <UApp>
  </span></span>
  <span class=line>
  <span class=sJsPd>
      <NuxtPage />
  </span></span>
  <span class=line>
  <span class=sJsPd>
    </UApp>
  </span></span>
  <span class=line>
  <span class=sJsPd>
  </template>
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  json [package.json]
  </span></span>
  <span class=line>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  name</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt-app</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  private</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   true,
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  type</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  module</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  scripts</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  build</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt build</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  dev</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt dev</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  generate</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt generate</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  preview</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt preview</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  postinstall</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt prepare</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  typecheck</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  nuxt typecheck</span>
  <span class=sMK4o>
  "
  </span></span>
  <span class=line>
  <span class=sMK4o>
    },
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  dependencies</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  @iconify-json/lucide</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ^1.2.0</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  @nuxt/ui</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ^4.0.0</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  nuxt</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ^4.0.0</span>
  <span class=sMK4o>
  "
  </span></span>
  <span class=line>
  <span class=sMK4o>
    },
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  devDependencies</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   {
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  typescript</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ^6.0.0</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ,
  </span></span>
  <span class=line>
  <span class=sMK4o>
      "</span>
  <span class=sBMFI>
  vue-tsc</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ^3.2.0</span>
  <span class=sMK4o>
  "
  </span></span>
  <span class=line>
  <span class=sMK4o>
    }
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  json [tsconfig.json]
  </span></span>
  <span class=line>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=sMK4o>
    "</span>
  <span class=spNyl>
  extends</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  :</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  ./.nuxt/tsconfig.json</span>
  <span class=sMK4o>
  "
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ````</span>
  <span class=sJsPd>
  md [README.md]
  </span></span>
  <span class=line>
  <span class=sMK4o>
  # </span>
  <span class=sBMFI>
  Nuxt 4 Minimal Starter
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Look at the </span>
  <span class=sMK4o>
  [</span>
  <span class=sfazB>
  Nuxt 4 documentation</span>
  <span class=sMK4o>
  ](</span>
  <span class=sQLHv>
  https://nuxt.com/docs/getting-started/introduction</span>
  <span class=sMK4o>
  )</span>
  <span class=sTEyZ>
   to learn more.
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ## </span>
  <span class=sBMFI>
  Setup
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Make sure to install the dependencies:
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  bash
  </span></span>
  <span class=line>
  <span class=sHwdD>
  # npm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   install
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # pnpm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  pnpm</span>
  <span class=sfazB>
   install
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # yarn
  </span></span>
  <span class=line>
  <span class=sBMFI>
  yarn</span>
  <span class=sfazB>
   install
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # bun
  </span></span>
  <span class=line>
  <span class=sBMFI>
  bun</span>
  <span class=sfazB>
   install
  </span></span>
  <span class=line>
  <span class=sJsPd>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ## </span>
  <span class=sBMFI>
  Development server
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Start the development server on </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  http://localhost:3000</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
  :
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  bash
  </span></span>
  <span class=line>
  <span class=sHwdD>
  # npm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   dev
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # pnpm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  pnpm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   dev
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # yarn
  </span></span>
  <span class=line>
  <span class=sBMFI>
  yarn</span>
  <span class=sfazB>
   dev
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # bun
  </span></span>
  <span class=line>
  <span class=sBMFI>
  bun</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   dev
  </span></span>
  <span class=line>
  <span class=sJsPd>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ## </span>
  <span class=sBMFI>
  Production
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Build the application for production:
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  bash
  </span></span>
  <span class=line>
  <span class=sHwdD>
  # npm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   build
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # pnpm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  pnpm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   build
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # yarn
  </span></span>
  <span class=line>
  <span class=sBMFI>
  yarn</span>
  <span class=sfazB>
   build
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # bun
  </span></span>
  <span class=line>
  <span class=sBMFI>
  bun</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   build
  </span></span>
  <span class=line>
  <span class=sJsPd>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Locally preview production build:
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  bash
  </span></span>
  <span class=line>
  <span class=sHwdD>
  # npm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   preview
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # pnpm
  </span></span>
  <span class=line>
  <span class=sBMFI>
  pnpm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   preview
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # yarn
  </span></span>
  <span class=line>
  <span class=sBMFI>
  yarn</span>
  <span class=sfazB>
   preview
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sHwdD>
  # bun
  </span></span>
  <span class=line>
  <span class=sBMFI>
  bun</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   preview
  </span></span>
  <span class=line>
  <span class=sJsPd>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  Check out the </span>
  <span class=sMK4o>
  [</span>
  <span class=sfazB>
  deployment documentation</span>
  <span class=sMK4o>
  ](</span>
  <span class=sQLHv>
  https://nuxt.com/docs/getting-started/deployment</span>
  <span class=sMK4o>
  )</span>
  <span class=sTEyZ>
   for more information.
  </span></span>
  <span class=line>
  <span class=sfazB>
  ````
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span></code></pre></__flatten></template>
</template>
```

> [!NOTE]
> See: /docs/typography/code#code-blocks
>
> Like the `ProsePre` component, the `CodeTree` handles filenames, icons and copy button.

## API

### Props

```ts
/**
 * Props for the ProseProseCodeTree component
 */
interface ProseProseCodeTreeProps {
	items?: TreeItem[] | undefined;
	/**
	 * The selected path.
	 */
	modelValue?: string | undefined;
	/**
	 * The default path to select.
	 */
	defaultValue?: string | undefined;
	/**
	 * Expand all directories by default.
	 * @default false
	 */
	expandAll?: boolean | undefined;
	ui?:
		| {
				root?: SlotClass;
				list?: SlotClass;
				item?: SlotClass;
				listWithChildren?: SlotClass;
				itemWithChildren?: SlotClass;
				link?: SlotClass;
				linkLeadingIcon?: SlotClass;
				linkLabel?: SlotClass;
				linkTrailing?: SlotClass;
				linkTrailingIcon?: SlotClass;
				content?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseCodeTree component
 */
interface ProseCodeTreeSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseCodeTree.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-code-tree.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseCollapsible"
description: "Toggle content visibility with smooth expand and collapse animations."
canonical_url: "https://ui.nuxt.com/docs/typography/collapsible"

---

# ProseCollapsible

> Toggle content visibility with smooth expand and collapse animations.

## Usage

Wrap your content with the `collapsible` component to display a [Collapsible](/docs/components/collapsible) in your content.

```vue
<template>
  <__flatten>
  <table>
  <thead>
  <tr>
  <th>
  Prop</th>
  <th>
  Default</th>
  <th>
  Type</th></tr></thead>
  <tbody>
  <tr>
  <td>
  <code>
  name</code></td>
  <td />
  <td>
  <code className=language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight language=ts-type style=>
  <span class=sBMFI>
  string</span></code></td></tr>
  <tr>
  <td>
  <code>
  size</code></td>
  <td>
  <code>
  md</code></td>
  <td>
  <code className=language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight language=ts-type style=>
  <span class=sBMFI>
  string</span></code></td></tr>
  <tr>
  <td>
  <code>
  color</code></td>
  <td>
  <code>
  neutral</code></td>
  <td>
  <code className=language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight language=ts-type style=>
  <span class=sBMFI>
  string</span></code></td></tr></tbody></table></__flatten>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::collapsible

  | Prop    | Default   | Type                     |
  |---------|-----------|--------------------------|
  | `name`  |           | `string`{lang="ts-type"} |
  | `size`  | `md`      | `string`{lang="ts-type"} |
  | `color` | `neutral` | `string`{lang="ts-type"} |

  ::
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  collapsible
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sTEyZ>
  | Prop    | Default   | Type                     |
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  |---------|-----------|--------------------------|
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  | </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  name</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
    |           | </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  string</span>
  <span class=sMK4o>
  `</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  lang</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  ts-type</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
   |
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  | </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  size</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
    | </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  md</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
        | </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  string</span>
  <span class=sMK4o>
  `</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  lang</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  ts-type</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
   |
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  | </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  color</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
   | </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  neutral</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
   | </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  string</span>
  <span class=sMK4o>
  `</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  lang</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  ts-type</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
   |
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span></code></pre></template>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProseProseCollapsible component
 */
interface ProseProseCollapsibleProps {
	/**
	 * The icon displayed to toggle the collapsible.
	 * @default appConfig.ui.icons.chevronDown
	 */
	icon?: any;
	/**
	 * The name displayed in the trigger label.
	 * @default t('prose.collapsible.name')
	 */
	name?: string | undefined;
	/**
	 * The text displayed when the collapsible is open.
	 * @default t('prose.collapsible.openText')
	 */
	openText?: string | undefined;
	/**
	 * The text displayed when the collapsible is closed.
	 * @default t('prose.collapsible.closeText')
	 */
	closeText?: string | undefined;
	ui?:
		| ({
				root?: SlotClass;
				trigger?: SlotClass;
				triggerIcon?: SlotClass;
				triggerLabel?: SlotClass;
				content?: SlotClass;
		  } & { root?: SlotClass; content?: SlotClass })
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseCollapsible component
 */
interface ProseCollapsibleSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseCollapsible.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-collapsible.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseField"
description: "Document API parameters, props, and configuration options clearly."
canonical_url: "https://ui.nuxt.com/docs/typography/field"

---

# ProseField

> Document API parameters, props, and configuration options clearly.

## Usage

A field, prop or parameter to display in your content.

```vue
<template>
	<p>
		<strong> name</strong>
		(
		<code> string</code>
		)

		<em> required</em>
		: The description can be set as prop or in the default slot with full
		markdown support.
	</p>
	<template v-slot:code="">
		<pre
			className="language-mdc"
			shiki
			shiki-themes
			material-theme-lighter
			material-theme
			material-theme-palenight
			code="::field{name"
			="name"
			type="string"
			required}
			The
			`description`
			can
			be
			set
			as
			prop
			or
			in
			the
			default
			slot
			with
			full
			**markdown**
			support.
			:
			language="mdc"
			meta="style"
			=""
		>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  field</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  name</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  name</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   type</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  string</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   required</span>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  The </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  description</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
   can be set as prop or in the default slot with full </span>
  <span class=sHepR>
  **</span>
  <span class=so75L>
  markdown</span>
  <span class=sHepR>
  **</span>
  <span class=sTEyZ>
   support.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span></code></pre>
	</template>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProseProseField component
 */
interface ProseProseFieldProps {
	/**
	 * The element or component this component should render as.
	 * @default 'div'
	 */
	as?: any;
	/**
	 * The name of the field.
	 */
	name?: string | undefined;
	/**
	 * Expected type of the field's value
	 */
	type?: string | undefined;
	/**
	 * Description of the field
	 */
	description?: string | undefined;
	/**
	 * Indicate whether the field is required
	 */
	required?: boolean | undefined;
	ui?:
		| {
				root?: SlotClass;
				container?: SlotClass;
				name?: SlotClass;
				wrapper?: SlotClass;
				required?: SlotClass;
				type?: SlotClass;
				description?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseField component
 */
interface ProseFieldSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseField.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-field.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseFieldGroup"
description: "Group related fields together for comprehensive API documentation."
canonical_url: "https://ui.nuxt.com/docs/typography/field-group"

---

# ProseFieldGroup

> Group related fields together for comprehensive API documentation.

## Usage

Group fields together in a list.

```vue
<template>
  <__flatten>
  <p>
  <strong>
  analytics</strong>
   (
  <code>
  boolean</code>
  )
  : Defaults to false. Enables analytics for your project (coming soon).</p>
  <p>
  <strong>
  blob</strong>
   (
  <code>
  boolean</code>
  )
  : Defaults to false. Enables blob storage to store static assets, such as images, videos and more.</p>
  <p>
  <strong>
  cache</strong>
   (
  <code>
  boolean</code>
  )
  : Defaults to false. Enables cache storage to cache your server route responses or functions using Nitro's cachedEventHandler and cachedFunction.</p>
  <p>
  <strong>
  database</strong>
   (
  <code>
  boolean</code>
  )
  : Defaults to false. Enables SQL database to store your application's data.</p></__flatten>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::field-group
    ::field{name="analytics" type="boolean"}
      Defaults to `false`. Enables analytics for your project (coming soon).
    ::

    ::field{name="blob" type="boolean"}
      Defaults to `false`. Enables blob storage to store static assets, such as images, videos and more.
    ::

    ::field{name="cache" type="boolean"}
      Defaults to `false`. Enables cache storage to cache your server route responses or functions using Nitro's `cachedEventHandler` and `cachedFunction`.
    ::

    ::field{name="database" type="boolean"}
      Defaults to `false`. Enables SQL database to store your application's data.
    ::
  ::
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  field-group
  </span></span>
  <span class=line>
  <span class=sMK4o>
    ::</span>
  <span class=swJcz>
  field</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  name</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  analytics</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   type</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  boolean</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sTEyZ>
      Defaults to </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  false</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
  . Enables analytics for your project (coming soon).
  </span></span>
  <span class=line>
  <span class=sMK4o>
    ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
    ::</span>
  <span class=swJcz>
  field</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  name</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  blob</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   type</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  boolean</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sTEyZ>
      Defaults to </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  false</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
  . Enables blob storage to store static assets, such as images, videos and more.
  </span></span>
  <span class=line>
  <span class=sMK4o>
    ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
    ::</span>
  <span class=swJcz>
  field</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  name</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  cache</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   type</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  boolean</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sTEyZ>
      Defaults to </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  false</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
  . Enables cache storage to cache your server route responses or functions using Nitro's </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  cachedEventHandler</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
   and </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  cachedFunction</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
  .
  </span></span>
  <span class=line>
  <span class=sMK4o>
    ::
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
    ::</span>
  <span class=swJcz>
  field</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  name</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  database</span>
  <span class=sMK4o>
  "</span>
  <span class=spNyl>
   type</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  boolean</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span>
  <span class=line>
  <span class=sTEyZ>
      Defaults to </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  false</span>
  <span class=sMK4o>
  `</span>
  <span class=sTEyZ>
  . Enables SQL database to store your application's data.
  </span></span>
  <span class=line>
  <span class=sMK4o>
    ::
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span></code></pre></template>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProseProseFieldGroup component
 */
interface ProseProseFieldGroupProps {
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
 * Slots for the ProseFieldGroup component
 */
interface ProseFieldGroupSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseFieldGroup.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-field-group.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseIcon"
description: "Display icons from popular icon libraries to enhance your content."
canonical_url: "https://ui.nuxt.com/docs/typography/icon"

---

# ProseIcon

> Display icons from popular icon libraries to enhance your content.

## Usage

Use the `icon` component to display an [Icon](/docs/components/icon) in your content.

```vue
<template>
	<icon name="i-simple-icons-nuxtdotjs" />
	<template v-slot:code="">
		<pre
			className="language-mdc"
			shiki
			shiki-themes
			material-theme-lighter
			material-theme
			material-theme-palenight
			code=":icon{name"
			="i-simple-icons-nuxtdotjs"
			}
			language="mdc"
			meta="style"
			=""
		>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  :</span>
  <span class=swJcz>
  icon</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  name</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  <i class=shiki-icon-highlight sna2s />
  i-simple-icons-nuxtdotjs</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span></code></pre>
	</template>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProseProseIcon component
 */
interface ProseProseIconProps {
	name: string;
	ui?: { base?: any } | undefined;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseIcon.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-icon.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseKbd"
description: "Display keyboard shortcuts and key combinations with proper styling."
canonical_url: "https://ui.nuxt.com/docs/typography/kbd"

---

# ProseKbd

> Display keyboard shortcuts and key combinations with proper styling.

## Usage

Use the `kbd` component to display a [Kbd](/docs/components/kbd) in your content.

```vue
<template>
	<p>
		<kbd value="meta" />

		<kbd value="K" />
	</p>
	<template v-slot:code="">
		<pre
			className="language-mdc"
			shiki
			shiki-themes
			material-theme-lighter
			material-theme
			material-theme-palenight
			code=":kbd{value"
			="meta"
			}
			:kbd{value="K"
			}
			language="mdc"
			meta="style"
			=""
		>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  :</span>
  <span class=swJcz>
  kbd</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  value</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  meta</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
   :kbd</span>
  <span class=sMK4o>
  {</span>
  <span class=spNyl>
  value</span>
  <span class=sMK4o>
  =</span>
  <span class=sMK4o>
  "</span>
  <span class=sfazB>
  K</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  }
  </span></span></code></pre>
	</template>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProseProseKbd component
 */
interface ProseProseKbdProps {
	value?: string | undefined;
	ui?: { base?: any } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseKbd component
 */
interface ProseKbdSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseKbd.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-kbd.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProsePrompt"
description: "Display pre-built AI prompts with one-click copy and IDE integration."
canonical_url: "https://ui.nuxt.com/docs/typography/prompt"

---

# ProsePrompt

> Display pre-built AI prompts with one-click copy and IDE integration.

## Usage

Use the `prompt` component to display a pre-built AI prompt that users can copy to their clipboard or open directly in their IDE. The `description` prop is shown as the visible label, while the default slot contains the prompt text that gets copied.

```mdc
::prompt{description="Build a dashboard layout with Nuxt UI."}
You are a Nuxt UI expert. Help me build a dashboard layout with a collapsible sidebar and a sticky top navbar.

Requirements:
- Use `UDashboardPanel`, `UDashboardSidebar`, and `UDashboardNavbar`
- Use semantic color tokens like `bg-elevated` and `text-muted` for theming
- The sidebar should include navigation links with icons using `UNavigationMenu`
- The navbar should display a breadcrumb, a search button, and a user dropdown menu
- The layout must be fully responsive and collapse the sidebar on mobile
::
```

### Icon

Use the `icon` prop to display an icon next to the description.

```mdc
::prompt{description="Create a form with validation." icon="i-lucide-file-pen-line"}
Create a registration form using Nuxt UI with Zod schema validation.

Requirements:
- Use `UForm` with a Zod schema for validation
- Add `UFormField` wrapping each input: name (`UInput`), email (`UInput` type email), role (`USelect` with options Admin, Editor, Viewer)
- Include a submit `UButton` with loading state
- Display inline error messages below each field
- On successful submit, show a `UToast` notification
::
```

### Actions

Use the `actions` prop to display additional buttons. The `copy` button is always displayed. The available actions are `cursor`, `windsurf` and `claude`.

```mdc
::prompt{description="Add a color mode toggle." icon="i-lucide-sun-moon" actions="cursor,claude"}
Add a color mode toggle to my Nuxt app.

Requirements:
- Use `useColorMode` from `@nuxtjs/color-mode` to manage the current mode
- Render a `UButton` with `variant="ghost"` that cycles between `light`, `dark`, and `system` on click
- Update the button icon dynamically: `i-lucide-sun` for light, `i-lucide-moon` for dark, `i-lucide-monitor` for system
- Add a tooltip using `UTooltip` that shows the current active mode
::
```

## API

### Props

```ts
/**
 * Props for the ProseProsePrompt component
 */
interface ProseProsePromptProps {
	description?: string | undefined;
	icon?: any;
	/**
	 * The `copy` action is always displayed, list any additional actions to show alongside it.
	 * @default []
	 */
	actions?: ('copy' | 'cursor' | 'windsurf' | 'claude')[] | undefined;
	ui?:
		| {
				root?: SlotClass;
				icon?: SlotClass;
				content?: SlotClass;
				description?: SlotClass;
				actions?: SlotClass;
		  }
		| undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProsePrompt component
 */
interface ProsePromptSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProsePrompt.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-prompt.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseSteps"
description: "Transform headings into numbered step-by-step guides and tutorials."
canonical_url: "https://ui.nuxt.com/docs/typography/steps"

---

# ProseSteps

> Transform headings into numbered step-by-step guides and tutorials.

## Usage

Wrap your headings with the Steps component to display a list of steps.

Use the `level` prop to define which heading will be used for the steps.

````vue
<template>
  <__flatten>
  <h4 id=add-the-nuxt-ui-module-in-your-nuxtconfigts>
  Add the Nuxt UI module in your
  <code>
  nuxt.config.ts</code></h4>
  <pre className=language-ts shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=export default defineNuxtConfig({
    modules: ['@nuxt/ui']
  })
   filename=nuxt.config.ts language=ts meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=s7zQu>
  export</span>
  <span class=s7zQu>
   default</span>
  <span class=s2Zo4>
   defineNuxtConfig</span>
  <span class=sTEyZ>
  (</span>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=swJcz>
    modules</span>
  <span class=sMK4o>
  :</span>
  <span class=sTEyZ>
   [</span>
  <span class=sMK4o>
  '</span>
  <span class=sfazB>
  @nuxt/ui</span>
  <span class=sMK4o>
  '</span>
  <span class=sTEyZ>
  ]
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
  )
  </span></span></code></pre>
  <h4 id=import-tailwind-css-in-your-css>
  Import Tailwind CSS in your CSS</h4>
  <pre className=language-css shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=@import "tailwindcss";
   filename=app/assets/css/main.css language=css meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=s7zQu>
  @import</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  tailwindcss</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ;
  </span></span></code></pre>
  <h4 id=start-your-development-server>
  Start your development server</h4>
  <pre className=language-bash shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=npm run dev
   language=bash meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   dev
  </span></span></code></pre></__flatten>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::steps{level="4"}

  #### Add the Nuxt UI module in your `nuxt.config.ts`

  ```ts [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: ['@nuxt/ui']
  })
````

#### Import Tailwind CSS in your CSS

```css [app/assets/css/main.css]
@import 'tailwindcss';
```

#### Start your development server

```bash
npm run dev
```

::
language=mdc meta= style=>
<code \_\_ignoreMap=>
<span class=line>
<span class=sMK4o>
::</span>
<span class=swJcz>
steps</span>
<span class=sMK4o>
{</span>
<span class=spNyl>
level</span>
<span class=sMK4o>
=</span>
<span class=sMK4o>
"</span>
<span class=sfazB>
4</span>
<span class=sMK4o>
"</span>
<span class=sMK4o>
}
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sMK4o>

#### </span>

  <span class=sBMFI>
  Add the Nuxt UI module in your </span>
  <span class=sMK4o>
  `</span>
  <span class=sfazB>
  nuxt.config.ts</span>
  <span class=sMK4o>
  `
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  ts [nuxt.config.ts]
  </span></span>
  <span class=line>
  <span class=s7zQu>
  export</span>
  <span class=s7zQu>
   default</span>
  <span class=s2Zo4>
   defineNuxtConfig</span>
  <span class=sTEyZ>
  (</span>
  <span class=sMK4o>
  {
  </span></span>
  <span class=line>
  <span class=swJcz>
    modules</span>
  <span class=sMK4o>
  :</span>
  <span class=sTEyZ>
   [</span>
  <span class=sMK4o>
  '</span>
  <span class=sfazB>
  @nuxt/ui</span>
  <span class=sMK4o>
  '</span>
  <span class=sTEyZ>
  ]
  </span></span>
  <span class=line>
  <span class=sMK4o>
  }</span>
  <span class=sTEyZ>
  )
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  #### </span>
  <span class=sBMFI>
  Import Tailwind CSS in your CSS
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  css [app/assets/css/main.css]
  </span></span>
  <span class=line>
  <span class=s7zQu>
  @import</span>
  <span class=sMK4o>
   "</span>
  <span class=sfazB>
  tailwindcss</span>
  <span class=sMK4o>
  "</span>
  <span class=sMK4o>
  ;
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  #### </span>
  <span class=sBMFI>
  Start your development server
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sfazB>
  ```</span>
  <span class=sJsPd>
  bash
  </span></span>
  <span class=line>
  <span class=sBMFI>
  npm</span>
  <span class=sfazB>
   run</span>
  <span class=sfazB>
   dev
  </span></span>
  <span class=line>
  <span class=sfazB>
  ```
  </span></span>
  <span class=line>
  <span /></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span></code></pre></template>
</template>
```

## API

### Props

```ts
/**
 * Props for the ProseProseSteps component
 */
interface ProseProseStepsProps {
	/**
	 * The heading level to apply to the steps.
	 * @default '3'
	 */
	level?: '3' | '2' | '4' | undefined;
	ui?: { base?: any } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseSteps component
 */
interface ProseStepsSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseSteps.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-steps.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

---

title: "ProseTabs"
description: "Organize related content in interactive tabbed interfaces."
canonical_url: "https://ui.nuxt.com/docs/typography/tabs"

---

# ProseTabs

> Organize related content in interactive tabbed interfaces.

## Usage

Use the `tabs` and `tabs-item` components to display [Tabs](/docs/components/tabs) in your content.

````vue
<template>
  <__flatten>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::callout
  Lorem velit voluptate ex reprehenderit ullamco et culpa.
  ::
   language=mdc meta= style=>
  <code __ignoreMap=>
  <span class=line>
  <span class=sMK4o>
  ::</span>
  <span class=swJcz>
  callout
  </span></span>
  <span class=line>
  <span class=sTEyZ>
  Lorem velit voluptate ex reprehenderit ullamco et culpa.
  </span></span>
  <span class=line>
  <span class=sMK4o>
  ::
  </span></span></code></pre>
  <blockquote>
  <p>
  [!NOTE]</p>
  <p>
  Lorem velit voluptate ex reprehenderit ullamco et culpa.</p></blockquote></__flatten>
  <template v-slot:code=>
  <pre className=language-mdc shiki shiki-themes material-theme-lighter material-theme material-theme-palenight code=::tabs

  :::tabs-item{label="Code" icon="i-lucide-code"}

  ```mdc
  ::callout
  Lorem velit voluptate ex reprehenderit ullamco et culpa.
  ::
````

:::

:::tabs-item{label="Preview" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::

:::

::
language=mdc meta= style=>
<code \_\_ignoreMap=>
<span class=line>
<span class=sMK4o>
::</span>
<span class=swJcz>
tabs
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sMK4o>
:::</span>
<span class=swJcz>
tabs-item</span>
<span class=sMK4o>
{</span>
<span class=spNyl>
label</span>
<span class=sMK4o>
=</span>
<span class=sMK4o>
"</span>
<span class=sfazB>
Code</span>
<span class=sMK4o>
"</span>
<span class=spNyl>
icon</span>
<span class=sMK4o>
=</span>
<span class=sMK4o>
"</span>
<span class=sfazB>
<i class=shiki-icon-highlight sSs5K />
i-lucide-code</span>
<span class=sMK4o>
"</span>
<span class=sMK4o>
}
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sfazB>

```</span>
<span class=sJsPd>
mdc
</span></span>
<span class=line>
<span class=sJsPd>
::callout
</span></span>
<span class=line>
<span class=sJsPd>
Lorem velit voluptate ex reprehenderit ullamco et culpa.
</span></span>
<span class=line>
<span class=sJsPd>
::
</span></span>
<span class=line>
<span class=sfazB>
```

</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sMK4o>
:::
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sMK4o>
:::</span>
<span class=swJcz>
tabs-item</span>
<span class=sMK4o>
{</span>
<span class=spNyl>
label</span>
<span class=sMK4o>
=</span>
<span class=sMK4o>
"</span>
<span class=sfazB>
Preview</span>
<span class=sMK4o>
"</span>
<span class=spNyl>
icon</span>
<span class=sMK4o>
=</span>
<span class=sMK4o>
"</span>
<span class=sfazB>
<i class=shiki-icon-highlight sWAvP />
i-lucide-eye</span>
<span class=sMK4o>
"</span>
<span class=sMK4o>
}
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sMK4o>
::</span>
<span class=swJcz>
callout
</span></span>
<span class=line>
<span class=sTEyZ>
Lorem velit voluptate ex reprehenderit ullamco et culpa.
</span></span>
<span class=line>
<span class=sMK4o>
::
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sMK4o>
:::
</span></span>
<span class=line>
<span /></span>
<span class=line>
<span class=sMK4o>
::
</span></span></code></pre></template>
</template>

````

## API

### Props

```ts
/**
 * Props for the ProseProseTabs component
 */
interface ProseProseTabsProps {
  /**
   * The default tab to select.
   * @default '0'
   */
  defaultValue?: string | undefined;
  /**
   * Sync the selected tab with a local storage key.
   */
  sync?: string | undefined;
  /**
   * The hash to scroll to when the tab is selected.
   */
  hash?: string | undefined;
  ui?: { root?: SlotClass; } & { root?: SlotClass; list?: SlotClass; indicator?: SlotClass; trigger?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; label?: SlotClass; trailingBadge?: SlotClass; trailingBadgeSize?: SlotClass; content?: SlotClass; } | undefined;
  modelValue?: string | undefined;
}
````

### Slots

```ts
/**
 * Slots for the ProseTabs component
 */
interface ProseTabsSlots {
	default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
	ui: {
		prose: {},
	},
});
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/prose/ProseTabs.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/prose/prose-tabs.ts).

## Sitemap

See the full [sitemap](/sitemap.md) for all pages.

import type { BuilderElement, BuilderElementStyles } from '~/types/builder'

export const useCodeGenerator = () => {
	const generateStyleClasses = (styles: BuilderElementStyles): string => {
		const classes: string[] = []

		if (styles.display === 'flex') {
			classes.push('flex')
			if (styles.flexDirection === 'col') classes.push('flex-col')
			if (styles.flexDirection === 'col-reverse') classes.push('flex-col-reverse')
			if (styles.flexDirection === 'row-reverse') classes.push('flex-row-reverse')
			if (styles.alignItems) {
				if (styles.alignItems === 'center') classes.push('items-center')
				if (styles.alignItems === 'start') classes.push('items-start')
				if (styles.alignItems === 'end') classes.push('items-end')
				if (styles.alignItems === 'stretch') classes.push('items-stretch')
			}
			if (styles.justifyContent) {
				if (styles.justifyContent === 'center') classes.push('justify-center')
				if (styles.justifyContent === 'between') classes.push('justify-between')
				if (styles.justifyContent === 'start') classes.push('justify-start')
				if (styles.justifyContent === 'end') classes.push('justify-end')
				if (styles.justifyContent === 'around') classes.push('justify-around')
			}
		} else if (styles.display === 'grid') {
			classes.push('grid')
			if (styles.gridCols) classes.push(styles.gridCols)
		}

		if (styles.gap) classes.push(styles.gap)
		if (styles.padding) classes.push(styles.padding)
		if (styles.margin) classes.push(styles.margin)
		if (styles.width) classes.push(styles.width)
		if (styles.maxWidth) classes.push(styles.maxWidth)
		if (styles.textAlign) {
			if (styles.textAlign === 'center') classes.push('text-center')
			if (styles.textAlign === 'right') classes.push('text-right')
			if (styles.textAlign === 'left') classes.push('text-left')
		}
		if (styles.borderRadius) classes.push(styles.borderRadius)
		if (styles.shadow) classes.push(styles.shadow)
		if (styles.backgroundColor) classes.push(styles.backgroundColor)
		if (styles.customClass) classes.push(styles.customClass)

		return classes.filter(Boolean).join(' ')
	}

	// ==================== 1. VUE SFC GENERATOR ====================
	const renderElementCode = (el: BuilderElement, depth: number = 2): string => {
		const indent = '\t'.repeat(depth)
		const childIndent = '\t'.repeat(depth + 1)
		const styleClass = generateStyleClasses(el.styles)
		const classAttr = styleClass ? ` class="${styleClass}"` : ''

		switch (el.type) {
			case 'container': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Drop components here -->`
				return `${indent}<div${classAttr}>\n${childrenCode}\n${indent}</div>`
			}

			case 'grid': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Grid items -->`
				return `${indent}<div${classAttr}>\n${childrenCode}\n${indent}</div>`
			}

			case 'flex': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Flex items -->`
				return `${indent}<div${classAttr}>\n${childrenCode}\n${indent}</div>`
			}

			case 'card': {
				const variantAttr = el.props.variant ? ` variant="${el.props.variant}"` : ''
				let inner = ''
				if (el.props.showHeader) {
					inner += `\n${childIndent}<template #header>\n${childIndent}\t<h3 class="font-semibold text-lg">${el.props.headerText || 'Card Title'}</h3>\n${childIndent}</template>`
				}
				if (el.children && el.children.length > 0) {
					inner += '\n' + el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
				} else {
					inner += `\n${childIndent}<p class="text-sm text-neutral-500">Card body content goes here.</p>`
				}
				if (el.props.showFooter && el.props.footerText) {
					inner += `\n${childIndent}<template #footer>\n${childIndent}\t<p class="text-xs text-neutral-400">${el.props.footerText}</p>\n${childIndent}</template>`
				}
				return `${indent}<UCard${variantAttr}${classAttr}>${inner}\n${indent}</UCard>`
			}

			case 'separator': {
				const labelAttr = el.props.label ? ` label="${el.props.label}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const colorAttr = el.props.color && el.props.color !== 'neutral' ? ` color="${el.props.color}"` : ''
				const typeAttr = el.props.type && el.props.type !== 'solid' ? ` type="${el.props.type}"` : ''
				return `${indent}<USeparator${labelAttr}${iconAttr}${colorAttr}${typeAttr}${classAttr} />`
			}

			case 'heading': {
				const tag = el.props.level || 'h2'
				let headingClasses = []
				if (tag === 'h1') headingClasses.push('text-4xl md:text-5xl font-extrabold tracking-tight')
				else if (tag === 'h2') headingClasses.push('text-3xl font-bold tracking-tight')
				else if (tag === 'h3') headingClasses.push('text-2xl font-semibold')
				else headingClasses.push('text-xl font-medium')

				if (el.props.gradient) {
					headingClasses.push('bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-600')
				}

				const combinedClass = [headingClasses.join(' '), styleClass].filter(Boolean).join(' ')
				return `${indent}<${tag}${combinedClass ? ` class="${combinedClass}"` : ''}>${el.props.text || 'Heading'}</${tag}>`
			}

			case 'paragraph': {
				const size = el.props.size || 'text-base'
				let colorCls = 'text-neutral-600 dark:text-neutral-300'
				if (el.props.color === 'muted') colorCls = 'text-neutral-500 dark:text-neutral-400'
				if (el.props.color === 'primary') colorCls = 'text-primary-600 dark:text-primary-400'
				const combinedClass = [size, colorCls, styleClass].filter(Boolean).join(' ')
				return `${indent}<p${combinedClass ? ` class="${combinedClass}"` : ''}>${el.props.text || ''}</p>`
			}

			case 'kbd': {
				const sizeAttr = el.props.size ? ` size="${el.props.size}"` : ''
				return `${indent}<UKbd${sizeAttr}${classAttr}>${el.props.value || '⌘K'}</UKbd>`
			}

			case 'button': {
				const labelAttr = el.props.label ? ` label="${el.props.label}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const variantAttr = el.props.variant ? ` variant="${el.props.variant}"` : ''
				const sizeAttr = el.props.size ? ` size="${el.props.size}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const trailingAttr = el.props.trailing ? ` :trailing="true"` : ''
				const blockAttr = el.props.block ? ` :block="true"` : ''
				const disabledAttr = el.props.disabled ? ` :disabled="true"` : ''
				return `${indent}<UButton${labelAttr}${colorAttr}${variantAttr}${sizeAttr}${iconAttr}${trailingAttr}${blockAttr}${disabledAttr}${classAttr} />`
			}

			case 'badge': {
				const labelAttr = el.props.label ? ` label="${el.props.label}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const variantAttr = el.props.variant ? ` variant="${el.props.variant}"` : ''
				const sizeAttr = el.props.size ? ` size="${el.props.size}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				return `${indent}<UBadge${labelAttr}${colorAttr}${variantAttr}${sizeAttr}${iconAttr}${classAttr} />`
			}

			case 'avatar': {
				const srcAttr = el.props.src ? ` src="${el.props.src}"` : ''
				const altAttr = el.props.alt ? ` alt="${el.props.alt}"` : ''
				const textAttr = el.props.text ? ` text="${el.props.text}"` : ''
				const sizeAttr = el.props.size ? ` size="${el.props.size}"` : ''
				const chipAttr = el.props.chip ? ` chip="${el.props.chipColor || 'success'}"` : ''
				return `${indent}<UAvatar${srcAttr}${altAttr}${textAttr}${sizeAttr}${chipAttr}${classAttr} />`
			}

			case 'chip': {
				const textAttr = el.props.text ? ` text="${el.props.text}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const posAttr = el.props.position ? ` position="${el.props.position}"` : ''
				return `${indent}<UChip${textAttr}${colorAttr}${posAttr}${classAttr}>\n${childIndent}<UButton icon="lucide:bell" color="neutral" variant="subtle" />\n${indent}</UChip>`
			}

			case 'icon': {
				const nameAttr = el.props.name ? ` name="${el.props.name}"` : ' name="lucide:sparkles"'
				const combinedClass = [el.props.size, el.props.color, styleClass].filter(Boolean).join(' ')
				return `${indent}<UIcon${nameAttr}${combinedClass ? ` class="${combinedClass}"` : ''} />`
			}

			case 'input': {
				const phAttr = el.props.placeholder ? ` placeholder="${el.props.placeholder}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const variantAttr = el.props.variant ? ` variant="${el.props.variant}"` : ''
				const sizeAttr = el.props.size ? ` size="${el.props.size}"` : ''
				return `${indent}<UInput${phAttr}${iconAttr}${colorAttr}${variantAttr}${sizeAttr}${classAttr} />`
			}

			case 'textarea': {
				const phAttr = el.props.placeholder ? ` placeholder="${el.props.placeholder}"` : ''
				const rowsAttr = el.props.rows ? ` :rows="${el.props.rows}"` : ''
				const variantAttr = el.props.variant ? ` variant="${el.props.variant}"` : ''
				return `${indent}<UTextarea${phAttr}${rowsAttr}${variantAttr}${classAttr} />`
			}

			case 'switch': {
				const labelAttr = el.props.label ? ` label="${el.props.label}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const modelAttr = ` :model-value="${el.props.checked ? 'true' : 'false'}"`
				return `${indent}<USwitch${labelAttr}${descAttr}${colorAttr}${modelAttr}${classAttr} />`
			}

			case 'checkbox': {
				const labelAttr = el.props.label ? ` label="${el.props.label}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const modelAttr = ` :model-value="${el.props.checked ? 'true' : 'false'}"`
				return `${indent}<UCheckbox${labelAttr}${colorAttr}${modelAttr}${classAttr} />`
			}

			case 'slider': {
				const valAttr = el.props.value !== undefined ? ` :model-value="${el.props.value}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const sizeAttr = el.props.size ? ` size="${el.props.size}"` : ''
				return `${indent}<USlider${valAttr}${colorAttr}${sizeAttr}${classAttr} />`
			}

			case 'alert': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const variantAttr = el.props.variant ? ` variant="${el.props.variant}"` : ''
				return `${indent}<UAlert${titleAttr}${descAttr}${iconAttr}${colorAttr}${variantAttr}${classAttr} />`
			}

			case 'progress': {
				const valAttr = el.props.value !== undefined ? ` :value="${el.props.value}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const statusAttr = el.props.status ? ` :status="true"` : ''
				return `${indent}<UProgress${valAttr}${colorAttr}${statusAttr}${classAttr} />`
			}

			case 'stat-card': {
				return `${indent}<UCard${classAttr}>\n${childIndent}<div class="flex items-center justify-between">\n${childIndent}\t<span class="text-sm font-medium text-neutral-500">${el.props.title || 'Stat'}</span>\n${childIndent}\t<UIcon name="${el.props.icon || 'lucide:activity'}" class="h-5 w-5 text-primary" />\n${childIndent}</div>\n${childIndent}<div class="mt-2 flex items-baseline gap-2">\n${childIndent}\t<span class="text-2xl font-bold">${el.props.value || '0'}</span>\n${childIndent}\t<span class="text-xs font-semibold ${el.props.changeType === 'negative' ? 'text-error' : 'text-success'}">${el.props.change || ''}</span>\n${childIndent}</div>\n${indent}</UCard>`
			}

			case 'hero-section': {
				const headlineAttr = (el.props.headline || el.props.badgeText) ? ` headline="${el.props.headline || el.props.badgeText}"` : ''
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ' title="Hero Title"'
				const descAttr = (el.props.description || el.props.subtitle) ? ` description="${el.props.description || el.props.subtitle}"` : ''
				const orientAttr = el.props.orientation && el.props.orientation !== 'vertical' ? ` orientation="${el.props.orientation}"` : ''
				const reverseAttr = el.props.reverse ? ` :reverse="true"` : ''
				
				const links = []
				if (el.props.primaryBtnText) {
					links.push(`{ label: '${el.props.primaryBtnText}', color: '${el.props.primaryBtnColor || 'primary'}', variant: '${el.props.primaryBtnVariant || 'solid'}', trailingIcon: '${el.props.primaryBtnIcon || 'i-lucide-arrow-right'}' }`)
				}
				if (el.props.secondaryBtnText) {
					links.push(`{ label: '${el.props.secondaryBtnText}', color: '${el.props.secondaryBtnColor || 'neutral'}', variant: '${el.props.secondaryBtnVariant || 'outline'}', icon: '${el.props.secondaryBtnIcon || 'i-lucide-book-open'}' }`)
				}
				const linksAttr = links.length > 0 ? ` :links="[\n${childIndent}\t${links.join(`,\n${childIndent}\t`)}\n${childIndent}]"` : ''

				let inner = ''
				if (el.children && el.children.length > 0) {
					inner = '\n' + el.children.map((c) => renderElementCode(c, depth + 1)).join('\n') + `\n${indent}`
				} else if (el.props.showIllustration && el.props.imageUrl) {
					inner = `\n${childIndent}<img src="${el.props.imageUrl}" alt="App screenshot" class="rounded-xl shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800" />\n${indent}`
				}

				if (inner) {
					return `${indent}<UPageHero${headlineAttr}${titleAttr}${descAttr}${orientAttr}${reverseAttr}${linksAttr}${classAttr}>${inner}</UPageHero>`
				} else {
					return `${indent}<UPageHero${headlineAttr}${titleAttr}${descAttr}${orientAttr}${reverseAttr}${linksAttr}${classAttr} />`
				}
			}

			case 'feature-card': {
				return `${indent}<UCard${classAttr}>\n${childIndent}<div class="p-2 w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-950/50 flex items-center justify-center mb-4">\n${childIndent}\t<UIcon name="${el.props.icon || 'lucide:sparkles'}" class="h-6 w-6 text-primary" />\n${childIndent}</div>\n${childIndent}<h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-2">${el.props.title || 'Feature'}</h3>\n${childIndent}<p class="text-sm text-neutral-500 dark:text-neutral-400">${el.props.description || ''}</p>\n${indent}</UCard>`
			}

			case 'pricing-card': {
				const featuresArray = (el.props.features || '').split(',').map((f: string) => f.trim()).filter(Boolean)
				const featuresList = featuresArray.map((feat: string) => `${childIndent}\t<li class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">\n${childIndent}\t\t<UIcon name="lucide:check" class="h-4 w-4 text-primary shrink-0" />\n${childIndent}\t\t<span>${feat}</span>\n${childIndent}\t</li>`).join('\n')

				return `${indent}<UCard class="relative flex flex-col justify-between ${el.props.featured ? 'ring-2 ring-primary shadow-xl' : ''}">\n${childIndent}<div>\n${childIndent}\t<div class="flex items-center justify-between mb-4">\n${childIndent}\t\t<h3 class="text-lg font-bold">${el.props.plan || 'Plan'}</h3>\n${childIndent}\t\t${el.props.badge ? `<UBadge color="primary" variant="subtle" label="${el.props.badge}" />` : ''}\n${childIndent}\t</div>\n${childIndent}\t<p class="text-xs text-neutral-500 mb-6">${el.props.description || ''}</p>\n${childIndent}\t<div class="flex items-baseline gap-1 mb-6">\n${childIndent}\t\t<span class="text-4xl font-extrabold">${el.props.price || '$0'}</span>\n${childIndent}\t\t<span class="text-sm text-neutral-400">${el.props.period || '/month'}</span>\n${childIndent}\t</div>\n${childIndent}\t<ul class="space-y-3 mb-8">\n${featuresList}\n${childIndent}\t</ul>\n${childIndent}</div>\n${childIndent}<UButton block size="lg" color="${el.props.featured ? 'primary' : 'neutral'}" variant="${el.props.featured ? 'solid' : 'outline'}" label="${el.props.buttonText || 'Subscribe'}" />\n${indent}</UCard>`
			}

			case 'testimonial-card': {
				return `${indent}<UCard${classAttr}>\n${childIndent}<div class="flex items-center gap-1 text-amber-400 mb-4">\n${childIndent}\t<UIcon v-for="i in 5" :key="i" name="lucide:star" class="h-4 w-4 fill-current" />\n${childIndent}</div>\n${childIndent}<p class="text-sm italic text-neutral-700 dark:text-neutral-200 mb-6">"${el.props.quote || ''}"</p>\n${childIndent}<div class="flex items-center gap-3">\n${childIndent}\t<UAvatar src="${el.props.avatarUrl || ''}" alt="${el.props.author || 'Author'}" size="md" />\n${childIndent}\t<div>\n${childIndent}\t\t<h4 class="text-sm font-semibold">${el.props.author || 'Author Name'}</h4>\n${childIndent}\t\t<p class="text-xs text-neutral-400">${el.props.role || ''}</p>\n${childIndent}\t</div>\n${childIndent}</div>\n${indent}</UCard>`
			}

			case 'footer-section': {
				return `${indent}<footer class="border-t border-neutral-200 dark:border-neutral-800 py-12 px-6">\n${childIndent}<div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">\n${childIndent}\t<div class="text-center sm:text-left">\n${childIndent}\t\t<h4 class="text-lg font-bold text-primary">${el.props.brandName || 'Brand'}</h4>\n${childIndent}\t\t<p class="text-xs text-neutral-500 mt-1">${el.props.tagline || ''}</p>\n${childIndent}\t</div>\n${childIndent}\t<p class="text-xs text-neutral-400">${el.props.copyright || '© 2026'}</p>\n${childIndent}</div>\n${indent}</footer>`
			}

			default:
				return `${indent}<!-- Unsupported component: ${el.type} -->`
		}
	}

	const generateFullSfcCode = (elements: BuilderElement[]): string => {
		const templateBody = elements.length > 0
			? elements.map((el) => renderElementCode(el, 2)).join('\n\n')
			: '\t\t<div class="py-20 text-center text-neutral-500">\n\t\t\t<p>No components added yet.</p>\n\t\t</div>'

		return `<script setup lang="ts">
// Generated by Nuxt UI Studio Builder
// Framework: Nuxt 4 + @nuxt/ui v4
</script>

<template>
	<UApp>
		<div class="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased">
${templateBody}
		</div>
	</UApp>
</template>
`
	}

	// ==================== 2. NUXT CONTENT (.md) MDC GENERATOR ====================
	const renderElementMdc = (el: BuilderElement, depth: number = 0): string => {
		const indent = '  '.repeat(depth)
		const colons = ':'.repeat(Math.max(2, depth + 2))

		switch (el.type) {
			case 'hero-section': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: (el.props.showIllustration && el.props.imageUrl ? `\n${indent}  ![App screenshot](${el.props.imageUrl})\n${indent}` : '')

				const headline = el.props.headline || el.props.badgeText || ''
				const desc = el.props.description || el.props.subtitle || ''
				const orient = el.props.orientation || 'vertical'
				const rev = el.props.reverse ? ' :reverse="true"' : ''

				return `${indent}${colons}u-page-hero{title="${el.props.title || 'Hero Title'}" headline="${headline}" description="${desc}" orientation="${orient}"${rev}}${childrenMdc}${colons}`
			}

			case 'container': {
				const childrenMdc = el.children && el.children.length > 0
					? el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n')
					: ''
				return `${indent}${colons}container\n${childrenMdc}\n${indent}${colons}`
			}

			case 'grid': {
				const childrenMdc = el.children && el.children.length > 0
					? el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n')
					: ''
				return `${indent}${colons}grid{gridCols="${el.props.gridCols || 'grid-cols-1 md:grid-cols-3'}"}\n${childrenMdc}\n${indent}${colons}`
			}

			case 'card': {
				const childrenMdc = el.children && el.children.length > 0
					? el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n')
					: `${indent}  Card content`
				return `${indent}${colons}card{headerText="${el.props.headerText || 'Card Title'}" variant="${el.props.variant || 'outline'}"}\n${childrenMdc}\n${indent}${colons}`
			}

			case 'heading': {
				const level = el.props.level || 'h2'
				const hashes = level === 'h1' ? '#' : level === 'h2' ? '##' : level === 'h3' ? '###' : '####'
				return `${indent}${hashes} ${el.props.text || 'Heading'}`
			}

			case 'paragraph': {
				return `${indent}${el.props.text || ''}`
			}

			case 'button': {
				return `${indent}::u-button{label="${el.props.label || 'Button'}" color="${el.props.color || 'primary'}" variant="${el.props.variant || 'solid'}" size="${el.props.size || 'md'}" icon="${el.props.icon || ''}"}`
			}

			case 'badge': {
				return `${indent}::u-badge{label="${el.props.label || 'Badge'}" color="${el.props.color || 'primary'}" variant="${el.props.variant || 'subtle'}" icon="${el.props.icon || ''}"}`
			}

			case 'avatar': {
				return `${indent}::u-avatar{src="${el.props.src || ''}" alt="${el.props.alt || 'Avatar'}" size="${el.props.size || 'md'}"}`
			}

			case 'alert': {
				return `${indent}::u-alert{title="${el.props.title || 'Alert'}" description="${el.props.description || ''}" color="${el.props.color || 'primary'}" icon="${el.props.icon || 'lucide:info'}"}`
			}

			case 'progress': {
				return `${indent}::u-progress{value=${el.props.value || 50} color="${el.props.color || 'primary'}"}`
			}

			case 'stat-card': {
				return `${indent}::stat-card{title="${el.props.title || 'Stat'}" value="${el.props.value || '0'}" change="${el.props.change || ''}" icon="${el.props.icon || 'lucide:trending-up'}"}`
			}

			case 'feature-card': {
				return `${indent}::feature-card{title="${el.props.title || 'Feature'}" description="${el.props.description || ''}" icon="${el.props.icon || 'lucide:sparkles'}"}`
			}

			case 'pricing-card': {
				return `${indent}::pricing-card{plan="${el.props.plan || 'Pro'}" price="${el.props.price || '$29'}" period="${el.props.period || '/month'}" description="${el.props.description || ''}" features="${el.props.features || ''}" buttonText="${el.props.buttonText || 'Get Started'}"}`
			}

			case 'testimonial-card': {
				return `${indent}::testimonial-card{quote="${el.props.quote || ''}" author="${el.props.author || 'Author'}" role="${el.props.role || ''}" avatarUrl="${el.props.avatarUrl || ''}"}`
			}

			case 'footer-section': {
				return `${indent}::footer-section{brandName="${el.props.brandName || 'Brand'}" tagline="${el.props.tagline || ''}" copyright="${el.props.copyright || '© 2026'}"}`
			}

			default:
				return `${indent}::${el.type}`
		}
	}

	const generateNuxtContentMarkdown = (elements: BuilderElement[]): string => {
		const mdcBody = elements.length > 0
			? elements.map((el) => renderElementMdc(el, 0)).join('\n\n')
			: 'No content yet.'

		return `---
title: Nuxt UI Page Document
description: Built visually with Nuxt UI Studio for @nuxt/content MDC rendering
navigation:
  title: Page Document
---

${mdcBody}
`
	}

	return {
		renderElementCode,
		generateFullSfcCode,
		generateNuxtContentMarkdown
	}
}

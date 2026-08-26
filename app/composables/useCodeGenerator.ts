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

			case 'lead': {
				const combinedClass = ['text-xl font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed', styleClass].filter(Boolean).join(' ')
				return `${indent}<p class="${combinedClass}">${el.props.text || ''}</p>`
			}

			case 'blockquote': {
				return `${indent}<blockquote class="pl-5 py-2 border-l-4 border-primary-500 my-4 italic text-neutral-700 dark:text-neutral-300">\n${childIndent}<p>"${el.props.quote || ''}"</p>\n${childIndent}${el.props.author ? `<footer class="text-xs font-semibold not-italic text-neutral-500 mt-2">— ${el.props.author}</footer>` : ''}\n${indent}</blockquote>`
			}

			case 'list': {
				const items = (el.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)
				if (el.props.type === 'ordered') {
					const lis = items.map((it: string) => `${childIndent}<li>${it}</li>`).join('\n')
					return `${indent}<ol class="list-decimal list-inside space-y-2 text-sm text-neutral-700 dark:text-neutral-300">\n${lis}\n${indent}</ol>`
				} else if (el.props.type === 'icon') {
					const lis = items.map((it: string) => `${childIndent}<li class="flex items-start gap-2"><UIcon name="${el.props.icon || 'lucide:check-circle-2'}" class="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>${it}</span></li>`).join('\n')
					return `${indent}<ul class="space-y-2.5 text-sm text-neutral-700 dark:text-neutral-300">\n${lis}\n${indent}</ul>`
				} else {
					const lis = items.map((it: string) => `${childIndent}<li>${it}</li>`).join('\n')
					return `${indent}<ul class="list-disc list-inside space-y-2 text-sm text-neutral-700 dark:text-neutral-300">\n${lis}\n${indent}</ul>`
				}
			}

			case 'table': {
				return `${indent}<div class="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-x-auto shadow-sm my-4">\n${childIndent}<table class="w-full text-xs text-left">\n${childIndent}\t<thead class="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">\n${childIndent}\t\t<tr><th class="p-3 font-semibold">Prop</th><th class="p-3 font-semibold">Type</th><th class="p-3 font-semibold">Default</th><th class="p-3 font-semibold">Description</th></tr>\n${childIndent}\t</thead>\n${childIndent}\t<tbody class="divide-y divide-neutral-200 dark:divide-neutral-800 font-mono text-[11px]">\n${childIndent}\t\t<tr><td class="p-3 font-bold text-primary">color</td><td class="p-3 text-neutral-500">string</td><td class="p-3 text-neutral-400">'primary'</td><td class="p-3 font-sans text-neutral-600 dark:text-neutral-300">Color scheme.</td></tr>\n${childIndent}\t</tbody>\n${childIndent}</table>\n${indent}</div>`
			}

			case 'image': {
				const caption = el.props.caption ? `\n${childIndent}<figcaption class="text-xs text-neutral-500 mt-2 text-center italic">${el.props.caption}</figcaption>` : ''
				return `${indent}<figure class="my-4">\n${childIndent}<img src="${el.props.src || ''}" alt="${el.props.alt || ''}" class="rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 w-full h-auto" />${caption}\n${indent}</figure>`
			}

			case 'code': {
				return `${indent}<code class="px-1.5 py-0.5 rounded font-mono text-xs bg-neutral-100 dark:bg-neutral-800 text-primary-600 dark:text-primary-400 border border-neutral-200 dark:border-neutral-700/60">${el.props.code || ''}</code>`
			}

			case 'code-block': {
				return `${indent}<div class="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 text-neutral-100 text-left font-mono text-xs my-4 shadow-xl">\n${childIndent}<div class="h-8 px-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">\n${childIndent}\t<span>${el.props.filename || el.props.language || 'code'}</span>\n${childIndent}</div>\n${childIndent}<pre class="p-4 overflow-x-auto"><code>${el.props.code || ''}</code></pre>\n${indent}</div>`
			}

			case 'code-group': {
				return `${indent}<div class="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 text-neutral-100 text-left font-mono text-xs my-4 shadow-xl">\n${childIndent}<div class="h-8 px-3 bg-neutral-900 border-b border-neutral-800 flex items-center gap-2 text-[11px]">\n${childIndent}\t<span class="px-2 py-0.5 rounded bg-primary/20 text-primary font-semibold">pnpm</span>\n${childIndent}</div>\n${childIndent}<pre class="p-4 overflow-x-auto"><code>${el.props.pnpm || 'pnpm add @nuxt/ui'}</code></pre>\n${indent}</div>`
			}

			case 'code-collapse': {
				return `${indent}<div class="rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 text-left font-mono text-xs my-4 shadow-xl overflow-hidden">\n${childIndent}<div class="h-9 px-4 bg-neutral-900 border-b border-neutral-800 flex items-center gap-2 text-xs text-neutral-300">\n${childIndent}\t<span class="font-sans font-medium">${el.props.title || 'View Code'}</span>\n${childIndent}</div>\n${childIndent}<pre class="p-4 overflow-x-auto"><code>${el.props.code || ''}</code></pre>\n${indent}</div>`
			}

			case 'code-preview': {
				return `${indent}<div class="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden text-left my-4">\n${childIndent}<div class="p-6 flex items-center justify-center bg-neutral-50/60 dark:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">\n${childIndent}\t<UButton color="primary" label="Interactive Action" />\n${childIndent}</div>\n${childIndent}<pre class="p-3 bg-neutral-950 text-neutral-100 font-mono text-xs"><code>${el.props.code || ''}</code></pre>\n${indent}</div>`
			}

			case 'code-tree': {
				return `${indent}<div class="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-4 text-left font-mono text-xs my-4">\n${childIndent}<h4 class="font-sans font-bold text-neutral-800 dark:text-neutral-200 mb-2">${el.props.title || 'Project Structure'}</h4>\n${childIndent}<pre class="overflow-x-auto text-neutral-700 dark:text-neutral-300"><code>${el.props.tree || ''}</code></pre>\n${indent}</div>`
			}

			case 'prompt': {
				return `${indent}<div class="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950 text-neutral-100 font-mono text-xs border border-neutral-800 my-3 shadow-lg">\n${childIndent}<span>$ ${el.props.command || 'npx nuxi init'}</span>\n${indent}</div>`
			}

			case 'callout': {
				return `${indent}<div class="p-4 rounded-xl border text-left my-4 flex items-start gap-3 bg-primary-50/50 dark:bg-primary-950/30 border-primary-500/30 text-primary-950 dark:text-primary-100">\n${childIndent}<UIcon name="${el.props.icon || 'lucide:sparkles'}" class="w-5 h-5 shrink-0 mt-0.5 text-primary" />\n${childIndent}<div>\n${childIndent}\t<h4 class="text-sm font-bold mb-1">${el.props.title || 'Tip'}</h4>\n${childIndent}\t<p class="text-xs opacity-90 leading-relaxed">${el.props.description || ''}</p>\n${childIndent}</div>\n${indent}</div>`
			}

			case 'card-group': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Cards -->`
				return `${indent}<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">\n${childrenCode}\n${indent}</div>`
			}

			case 'collapsible': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Collapsible content -->`
				return `${indent}<div class="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden my-3 text-left">\n${childIndent}<div class="p-3.5 bg-neutral-50 dark:bg-neutral-900 font-medium text-xs">${el.props.title || 'Expand details'}</div>\n${childIndent}<div class="p-4 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">\n${childrenCode}\n${childIndent}</div>\n${indent}</div>`
			}

			case 'field': {
				return `${indent}<div class="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 text-left my-2 text-xs bg-white dark:bg-neutral-900">\n${childIndent}<div class="flex items-center gap-2 mb-1"><span class="font-mono font-bold text-primary">${el.props.name || 'prop'}</span><span class="font-mono text-[10px] text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">${el.props.type || 'string'}</span></div>\n${childIndent}<p class="text-neutral-600 dark:text-neutral-400">${el.props.description || ''}</p>\n${indent}</div>`
			}

			case 'field-group': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Fields -->`
				return `${indent}<div class="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 text-left my-4 space-y-3 bg-neutral-50/50 dark:bg-neutral-900/30">\n${childIndent}<h4 class="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">${el.props.title || 'Properties'}</h4>\n${childrenCode}\n${indent}</div>`
			}

			case 'steps': {
				const steps = (el.props.steps || '').split(',').map((s: string) => s.trim()).filter(Boolean)
				const stepsHtml = steps.map((st: string, idx: number) => `${childIndent}<div class="flex items-start gap-3.5"><div class="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold shrink-0">${idx + 1}</div><p class="text-sm font-medium text-neutral-800 dark:text-neutral-200">${st}</p></div>`).join('\n')
				return `${indent}<div class="text-left my-4 space-y-4">\n${stepsHtml}\n${indent}</div>`
			}

			case 'tabs': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Tab content -->`
				return `${indent}<div class="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden my-4 text-left">\n${childIndent}<div class="flex border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 pt-2 gap-4 text-xs font-medium"><span class="pb-2 border-b-2 border-primary text-primary font-semibold">${el.props.tab1 || 'Overview'}</span><span class="pb-2 text-neutral-400">${el.props.tab2 || 'Usage'}</span></div>\n${childIndent}<div class="p-4 bg-white dark:bg-neutral-950">\n${childrenCode}\n${childIndent}</div>\n${indent}</div>`
			}

			case 'accordion': {
				const items = (el.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)
				const itemsHtml = items.map((it: string) => `${childIndent}<div class="p-4"><h4 class="font-bold text-xs text-neutral-900 dark:text-white mb-1">${it.split(':')[0] || it}</h4><p class="text-xs text-neutral-500">${it.split(':')[1] || ''}</p></div>`).join('\n')
				return `${indent}<div class="border border-neutral-200 dark:border-neutral-800 rounded-xl divide-y divide-neutral-200 dark:divide-neutral-800 my-4 text-left overflow-hidden">\n${itemsHtml}\n${indent}</div>`
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

			case 'avatar-group': {
				const sizeAttr = el.props.size ? ` size="${el.props.size}"` : ''
				const maxAttr = el.props.max ? ` :max="${el.props.max}"` : ''
				const avatars = (el.props.avatars || '').split(',').map((s: string) => s.trim()).filter(Boolean)
				const avs = avatars.map((url: string) => `${childIndent}<UAvatar src="${url}" />`).join('\n')
				return `${indent}<UAvatarGroup${sizeAttr}${maxAttr}${classAttr}>\n${avs}\n${indent}</UAvatarGroup>`
			}

			case 'banner': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const closeAttr = el.props.close ? ` :close="true"` : ''
				return `${indent}<UBanner${titleAttr}${iconAttr}${colorAttr}${closeAttr}${classAttr} />`
			}

			case 'calendar': {
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				const sizeAttr = el.props.size ? ` size="${el.props.size}"` : ''
				return `${indent}<UCalendar${colorAttr}${sizeAttr}${classAttr} />`
			}

			case 'progress-group': {
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				return `${indent}<UProgressGroup${colorAttr}${classAttr} />`
			}

			case 'skeleton': {
				const shapeClass = el.props.shape === 'circle' ? 'rounded-full w-12 h-12' : `${el.props.height || 'h-6'} ${el.props.width || 'w-full'} rounded-lg`
				return `${indent}<USkeleton class="${shapeClass}" />`
			}

			case 'form': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Form fields -->`
				return `${indent}<UForm${classAttr}>\n${childrenCode}\n${childIndent}<UButton type="submit" label="${el.props.submitText || 'Submit'}" color="primary" />\n${indent}</UForm>`
			}

			case 'form-field': {
				const labelAttr = el.props.label ? ` label="${el.props.label}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const reqAttr = el.props.required ? ` :required="true"` : ''
				const errAttr = el.props.error ? ` error="${el.props.error}"` : ''
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<UInput placeholder="Enter value..." />`
				return `${indent}<UFormField${labelAttr}${descAttr}${reqAttr}${errAttr}${classAttr}>\n${childrenCode}\n${indent}</UFormField>`
			}

			case 'input-number': {
				const valAttr = el.props.value !== undefined ? ` :model-value="${el.props.value}"` : ''
				const minAttr = el.props.min !== undefined ? ` :min="${el.props.min}"` : ''
				const maxAttr = el.props.max !== undefined ? ` :max="${el.props.max}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				return `${indent}<UInputNumber${valAttr}${minAttr}${maxAttr}${colorAttr}${classAttr} />`
			}

			case 'input-date': {
				const phAttr = el.props.placeholder ? ` placeholder="${el.props.placeholder}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				return `${indent}<UInputDate${phAttr}${iconAttr}${colorAttr}${classAttr} />`
			}

			case 'input-time': {
				const phAttr = el.props.placeholder ? ` placeholder="${el.props.placeholder}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const colorAttr = el.props.color ? ` color="${el.props.color}"` : ''
				return `${indent}<UInputTime${phAttr}${iconAttr}${colorAttr}${classAttr} />`
			}

			case 'input-menu': {
				const phAttr = el.props.placeholder ? ` placeholder="${el.props.placeholder}"` : ''
				const items = (el.props.items || '').split(',').map((s: string) => `'${s.trim()}'`).filter(Boolean).join(', ')
				return `${indent}<UInputMenu${phAttr} :items="[${items}]"${classAttr} />`
			}

			case 'input-tags': {
				const phAttr = el.props.placeholder ? ` placeholder="${el.props.placeholder}"` : ''
				const tags = (el.props.tags || '').split(',').map((s: string) => `'${s.trim()}'`).filter(Boolean).join(', ')
				return `${indent}<UInputTags${phAttr} :model-value="[${tags}]"${classAttr} />`
			}

			case 'input-rating': {
				const valAttr = el.props.value !== undefined ? ` :model-value="${el.props.value}"` : ''
				const maxAttr = el.props.max !== undefined ? ` :max="${el.props.max}"` : ''
				return `${indent}<UInputRating${valAttr}${maxAttr}${classAttr} />`
			}

			case 'pin-input': {
				const lenAttr = el.props.length ? ` :length="${el.props.length}"` : ''
				return `${indent}<UPinInput${lenAttr}${classAttr} />`
			}

			case 'color-picker': {
				const valAttr = el.props.value ? ` :model-value="'${el.props.value}'"` : ''
				return `${indent}<UColorPicker${valAttr}${classAttr} />`
			}

			case 'file-upload': {
				const labelAttr = el.props.label ? ` label="${el.props.label}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const multiAttr = el.props.multiple ? ` :multiple="true"` : ''
				return `${indent}<UFileUpload${labelAttr}${iconAttr}${multiAttr}${classAttr} />`
			}

			case 'select': {
				const phAttr = el.props.placeholder ? ` placeholder="${el.props.placeholder}"` : ''
				const items = (el.props.options || '').split(',').map((s: string) => `'${s.trim()}'`).filter(Boolean).join(', ')
				return `${indent}<USelect${phAttr} :items="[${items}]"${classAttr} />`
			}

			case 'select-menu': {
				const phAttr = el.props.placeholder ? ` placeholder="${el.props.placeholder}"` : ''
				const items = (el.props.items || '').split(',').map((s: string) => `'${s.trim()}'`).filter(Boolean).join(', ')
				const searchAttr = el.props.searchable ? ` :searchable="true"` : ''
				return `${indent}<USelectMenu${phAttr} :items="[${items}]"${searchAttr}${classAttr} />`
			}

			case 'listbox': {
				const phAttr = el.props.placeholder ? ` placeholder="${el.props.placeholder}"` : ''
				const items = (el.props.items || '').split(',').map((s: string) => `'${s.trim()}'`).filter(Boolean).join(', ')
				return `${indent}<UListbox${phAttr} :items="[${items}]"${classAttr} />`
			}

			case 'radio-group': {
				const items = (el.props.items || '').split(',').map((s: string) => `'${s.trim()}'`).filter(Boolean).join(', ')
				const orientAttr = el.props.orientation ? ` orientation="${el.props.orientation}"` : ''
				return `${indent}<URadioGroup :items="[${items}]"${orientAttr}${classAttr} />`
			}

			case 'checkbox-group': {
				const items = (el.props.items || '').split(',').map((s: string) => `'${s.trim()}'`).filter(Boolean).join(', ')
				const orientAttr = el.props.orientation ? ` orientation="${el.props.orientation}"` : ''
				return `${indent}<UCheckboxGroup :items="[${items}]"${orientAttr}${classAttr} />`
			}

			case 'carousel': {
				const items = (el.props.items || '').split(',').map((s: string) => `'${s.trim()}'`).filter(Boolean).join(', ')
				const arrowsAttr = el.props.arrows ? ` :arrows="true"` : ''
				const dotsAttr = el.props.dots ? ` :dots="true"` : ''
				return `${indent}<UCarousel :items="[${items}]"${arrowsAttr}${dotsAttr}${classAttr} />`
			}

			case 'empty': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				return `${indent}<UEmpty${titleAttr}${descAttr}${iconAttr}${classAttr}>\n${childIndent}<template #footer>\n${childIndent}\t<UButton label="${el.props.actionText || 'Action'}" color="primary" />\n${childIndent}</template>\n${indent}</UEmpty>`
			}

			case 'marquee': {
				const items = (el.props.items || '').split(',').map((s: string) => `'${s.trim()}'`).filter(Boolean).join(', ')
				return `${indent}<UMarquee :items="[${items}]"${classAttr} />`
			}

			case 'scroll-area': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Scroll content -->`
				return `${indent}<UScrollArea class="${el.props.height || 'h-48'}">\n${childrenCode}\n${indent}</UScrollArea>`
			}

			case 'timeline': {
				const items = (el.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)
				const itemsJson = items.map((it: string) => `{ date: '${it.split(':')[0] || ''}', title: '${it.split(':')[1] || it}' }`).join(', ')
				return `${indent}<UTimeline :items="[${itemsJson}]"${classAttr} />`
			}

			case 'tree': {
				return `${indent}<UTree${classAttr} />`
			}

			case 'user': {
				const nameAttr = el.props.name ? ` name="${el.props.name}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const avatarAttr = el.props.avatar ? ` :avatar="{ src: '${el.props.avatar}' }"` : ''
				return `${indent}<UUser${nameAttr}${descAttr}${avatarAttr}${classAttr} />`
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

			// ================= PAGE & PRO COMPONENTS =================
			case 'auth-form': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const providersAttr = el.props.showProviders ? ` :providers="[\n${childIndent}\t{ label: 'Google', icon: 'i-lucide-globe' },\n${childIndent}\t{ label: 'GitHub', icon: 'i-lucide-github' }\n${childIndent}]"` : ''
				const fieldsAttr = ` :fields="[\n${childIndent}\t{ name: 'email', type: 'email', label: 'Email', placeholder: 'you@example.com', required: true },\n${childIndent}\t{ name: 'password', type: 'password', label: 'Password', placeholder: '••••••••', required: true }\n${childIndent}]"`
				const submitAttr = ` :submit-button="{ label: '${el.props.submitBtnText || 'Continue'}' }"`
				return `${indent}<UAuthForm${titleAttr}${descAttr}${iconAttr}${providersAttr}${fieldsAttr}${submitAttr}${classAttr} />`
			}

			case 'blog-post': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const dateAttr = el.props.date ? ` date="${el.props.date}"` : ''
				const badgeAttr = el.props.badge ? ` :badge="{ label: '${el.props.badge}', color: 'primary' }"` : ''
				const imageAttr = el.props.image ? ` :image="{ src: '${el.props.image}', alt: '${el.props.title || 'Blog'}' }"` : ''
				const authorsAttr = ` :authors="[{ name: '${el.props.authorName || 'Author'}', avatar: { src: '${el.props.authorAvatar || ''}' } }]"`
				const orientAttr = el.props.orientation && el.props.orientation !== 'vertical' ? ` orientation="${el.props.orientation}"` : ''
				return `${indent}<UBlogPost${titleAttr}${descAttr}${dateAttr}${badgeAttr}${imageAttr}${authorsAttr}${orientAttr}${classAttr} />`
			}

			case 'blog-posts': {
				const orientAttr = el.props.orientation && el.props.orientation !== 'vertical' ? ` orientation="${el.props.orientation}"` : ''
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Drop UBlogPost cards here -->`
				return `${indent}<UBlogPosts${orientAttr}${classAttr}>\n${childrenCode}\n${indent}</UBlogPosts>`
			}

			case 'changelog-version': {
				const versionAttr = el.props.version ? ` version="${el.props.version}"` : ''
				const dateAttr = el.props.date ? ` date="${el.props.date}"` : ''
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const badgeAttr = el.props.badge ? ` :badge="{ label: '${el.props.badge}' }"` : ''
				let inner = ''
				if (el.children && el.children.length > 0) {
					inner = '\n' + el.children.map((c) => renderElementCode(c, depth + 1)).join('\n') + `\n${indent}`
				}
				if (inner) {
					return `${indent}<UChangelogVersion${versionAttr}${dateAttr}${titleAttr}${descAttr}${badgeAttr}${classAttr}>${inner}</UChangelogVersion>`
				} else {
					return `${indent}<UChangelogVersion${versionAttr}${dateAttr}${titleAttr}${descAttr}${badgeAttr}${classAttr} />`
				}
			}

			case 'changelog-versions': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Drop UChangelogVersion entries here -->`
				return `${indent}<UChangelogVersions${classAttr}>\n${childrenCode}\n${indent}</UChangelogVersions>`
			}

			case 'page': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Page content -->`
				return `${indent}<UPage${classAttr}>\n${childrenCode}\n${indent}</UPage>`
			}

			case 'page-header': {
				const headlineAttr = el.props.headline ? ` headline="${el.props.headline}"` : ''
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const links = []
				if (el.props.primaryBtnText) links.push(`{ label: '${el.props.primaryBtnText}', color: 'primary' }`)
				if (el.props.secondaryBtnText) links.push(`{ label: '${el.props.secondaryBtnText}', color: 'neutral', variant: 'outline' }`)
				const linksAttr = links.length > 0 ? ` :links="[${links.join(', ')}]"` : ''
				return `${indent}<UPageHeader${headlineAttr}${titleAttr}${descAttr}${iconAttr}${linksAttr}${classAttr} />`
			}

			case 'page-body': {
				const proseAttr = el.props.prose ? ' :prose="true"' : ''
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Page body content -->`
				return `${indent}<UPageBody${proseAttr}${classAttr}>\n${childrenCode}\n${indent}</UPageBody>`
			}

			case 'page-aside': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Aside links -->`
				return `${indent}<UPageAside${classAttr}>\n${childrenCode}\n${indent}</UPageAside>`
			}

			case 'page-anchors': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const linksArr = (el.props.links || '').split(',').map((s: string) => `{ label: '${s.trim()}', to: '#${s.trim().toLowerCase().replace(/\\s+/g, '-')}' }`)
				const linksAttr = linksArr.length > 0 ? ` :links="[${linksArr.join(', ')}]"` : ''
				return `${indent}<UPageAnchors${titleAttr}${linksAttr}${classAttr} />`
			}

			case 'page-grid': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Page grid items -->`
				return `${indent}<UPageGrid${classAttr}>\n${childrenCode}\n${indent}</UPageGrid>`
			}

			case 'page-columns': {
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Page columns items -->`
				return `${indent}<UPageColumns${classAttr}>\n${childrenCode}\n${indent}</UPageColumns>`
			}

			case 'page-card': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const variantAttr = el.props.variant ? ` variant="${el.props.variant}"` : ''
				const highlightAttr = el.props.highlight ? ' :highlight="true"' : ''
				const orientAttr = el.props.orientation && el.props.orientation !== 'vertical' ? ` orientation="${el.props.orientation}"` : ''
				let inner = ''
				if (el.children && el.children.length > 0) {
					inner = '\n' + el.children.map((c) => renderElementCode(c, depth + 1)).join('\n') + `\n${indent}`
				}
				if (inner) {
					return `${indent}<UPageCard${titleAttr}${descAttr}${iconAttr}${variantAttr}${highlightAttr}${orientAttr}${classAttr}>${inner}</UPageCard>`
				} else {
					return `${indent}<UPageCard${titleAttr}${descAttr}${iconAttr}${variantAttr}${highlightAttr}${orientAttr}${classAttr} />`
				}
			}

			case 'page-feature': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const orientAttr = el.props.orientation && el.props.orientation !== 'horizontal' ? ` orientation="${el.props.orientation}"` : ''
				return `${indent}<UPageFeature${titleAttr}${descAttr}${iconAttr}${orientAttr}${classAttr} />`
			}

			case 'page-section': {
				const headlineAttr = el.props.headline ? ` headline="${el.props.headline}"` : ''
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const iconAttr = el.props.icon ? ` icon="${el.props.icon}"` : ''
				const orientAttr = el.props.orientation && el.props.orientation !== 'vertical' ? ` orientation="${el.props.orientation}"` : ''
				const reverseAttr = el.props.reverse ? ' :reverse="true"' : ''
				const links = []
				if (el.props.primaryBtnText) links.push(`{ label: '${el.props.primaryBtnText}', color: 'primary' }`)
				if (el.props.secondaryBtnText) links.push(`{ label: '${el.props.secondaryBtnText}', color: 'neutral', variant: 'outline' }`)
				const linksAttr = links.length > 0 ? ` :links="[${links.join(', ')}]"` : ''

				let inner = ''
				if (el.children && el.children.length > 0) {
					inner = '\n' + el.children.map((c) => renderElementCode(c, depth + 1)).join('\n') + `\n${indent}`
				} else if (el.props.showIllustration && el.props.imageUrl) {
					inner = `\n${childIndent}<img src="${el.props.imageUrl}" alt="Illustration" class="rounded-xl shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800" />\n${indent}`
				}

				if (inner) {
					return `${indent}<UPageSection${headlineAttr}${titleAttr}${descAttr}${iconAttr}${orientAttr}${reverseAttr}${linksAttr}${classAttr}>${inner}</UPageSection>`
				} else {
					return `${indent}<UPageSection${headlineAttr}${titleAttr}${descAttr}${iconAttr}${orientAttr}${reverseAttr}${linksAttr}${classAttr} />`
				}
			}

			case 'page-cta': {
				const headlineAttr = el.props.headline ? ` headline="${el.props.headline}"` : ''
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const variantAttr = el.props.variant ? ` variant="${el.props.variant}"` : ''
				const orientAttr = el.props.orientation && el.props.orientation !== 'vertical' ? ` orientation="${el.props.orientation}"` : ''
				const links = []
				if (el.props.primaryBtnText) links.push(`{ label: '${el.props.primaryBtnText}', color: 'primary' }`)
				if (el.props.secondaryBtnText) links.push(`{ label: '${el.props.secondaryBtnText}', color: 'neutral', variant: 'outline' }`)
				const linksAttr = links.length > 0 ? ` :links="[${links.join(', ')}]"` : ''
				return `${indent}<UPageCTA${headlineAttr}${titleAttr}${descAttr}${variantAttr}${orientAttr}${linksAttr}${classAttr} />`
			}

			case 'page-logos': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const logos = (el.props.logos || '').split(',').map((s: string) => `'${s.trim()}'`)
				return `${indent}<UPageLogos${titleAttr} :logos="[${logos.join(', ')}] "${classAttr} />`
			}

			case 'page-list': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- List items -->`
				return `${indent}<UPageList${titleAttr}${descAttr}${classAttr}>\n${childrenCode}\n${indent}</UPageList>`
			}

			case 'page-links': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const linksArr = (el.props.links || '').split(',').map((s: string) => `{ label: '${s.trim()}', to: '#' }`)
				return `${indent}<UPageLinks${titleAttr} :links="[${linksArr.join(', ')}] "${classAttr} />`
			}

			case 'pricing-plan': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				const priceAttr = el.props.price ? ` price="${el.props.price}"` : ''
				const periodAttr = el.props.billingPeriod ? ` billing-period="${el.props.billingPeriod}"` : ''
				const badgeAttr = el.props.badge ? ` :badge="{ label: '${el.props.badge}' }"` : ''
				const btnAttr = ` :button="{ label: '${el.props.buttonText || 'Subscribe'}', color: '${el.props.highlight ? 'primary' : 'neutral'}' }"`
				const highlightAttr = el.props.highlight ? ' :highlight="true"' : ''
				const features = (el.props.features || '').split(',').map((s: string) => `'${s.trim()}'`)
				const featuresAttr = ` :features="[${features.join(', ')}]"`
				return `${indent}<UPricingPlan${titleAttr}${descAttr}${priceAttr}${periodAttr}${badgeAttr}${btnAttr}${highlightAttr}${featuresAttr}${classAttr} />`
			}

			case 'pricing-plans': {
				const scaleAttr = el.props.scale ? ' :scale="true"' : ''
				const childrenCode = el.children && el.children.length > 0
					? el.children.map((c) => renderElementCode(c, depth + 1)).join('\n')
					: `${childIndent}<!-- Drop UPricingPlan cards here -->`
				return `${indent}<UPricingPlans${scaleAttr}${classAttr}>\n${childrenCode}\n${indent}</UPricingPlans>`
			}

			case 'pricing-table': {
				const titleAttr = el.props.title ? ` title="${el.props.title}"` : ''
				const descAttr = el.props.description ? ` description="${el.props.description}"` : ''
				return `${indent}<UPricingTable${titleAttr}${descAttr}${classAttr} />`
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

			case 'lead': {
				return `${indent}${el.props.text || ''}`
			}

			case 'blockquote': {
				const authorLine = el.props.author ? `\n${indent}>\n${indent}> — ${el.props.author}` : ''
				return `${indent}> ${el.props.quote || ''}${authorLine}`
			}

			case 'list': {
				const items = (el.props.items || '').split(',').map((s: string) => s.trim()).filter(Boolean)
				if (el.props.type === 'ordered') {
					return items.map((it: string, idx: number) => `${indent}${idx + 1}. ${it}`).join('\n')
				} else {
					return items.map((it: string) => `${indent}- ${it}`).join('\n')
				}
			}

			case 'table': {
				return `${indent}| Prop | Type | Default | Description |\n${indent}| --- | --- | --- | --- |\n${indent}| color | \`string\` | \`'primary'\` | Color scheme identifier |\n${indent}| size | \`string\` | \`'md'\` | Component size variant |`
			}

			case 'image': {
				const caption = el.props.caption ? `\n${indent}*${el.props.caption}*` : ''
				return `${indent}![${el.props.alt || 'Image'}](${el.props.src || ''})${caption}`
			}

			case 'code': {
				return `${indent}\`${el.props.code || 'code'}\``
			}

			case 'code-block': {
				return `${indent}\`\`\`${el.props.language || 'typescript'} [${el.props.filename || ''}]\n${el.props.code || ''}\n${indent}\`\`\``
			}

			case 'code-group': {
				return `${indent}${colons}code-group\n\`\`\`bash [pnpm]\n${el.props.pnpm || 'pnpm add @nuxt/ui'}\n\`\`\`\n\n\`\`\`bash [npm]\n${el.props.npm || 'npm install @nuxt/ui'}\n\`\`\`\n\n\`\`\`bash [bun]\n${el.props.bun || 'bun add @nuxt/ui'}\n\`\`\`\n${indent}${colons}`
			}

			case 'code-collapse': {
				return `${indent}${colons}code-collapse{title="${el.props.title || 'View code'}"}\n\`\`\`vue\n${el.props.code || ''}\n\`\`\`\n${indent}${colons}`
			}

			case 'code-preview': {
				return `${indent}${colons}code-preview\n${el.props.code || ''}\n${indent}${colons}`
			}

			case 'code-tree': {
				return `${indent}${colons}code-tree{title="${el.props.title || 'Structure'}"}\n${el.props.tree || ''}\n${indent}${colons}`
			}

			case 'prompt': {
				return `${indent}::prompt{command="${el.props.command || 'npx nuxi init'}"}`
			}

			case 'callout': {
				return `${indent}${colons}callout{type="${el.props.type || 'tip'}" title="${el.props.title || 'Tip'}"}\n${indent}${el.props.description || ''}\n${indent}${colons}`
			}

			case 'card-group': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}card-group{columns="${el.props.columns || '2'}"}${childrenMdc}${colons}`
			}

			case 'collapsible': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}collapsible{title="${el.props.title || 'Details'}"}${childrenMdc}${colons}`
			}

			case 'field': {
				return `${indent}::field{name="${el.props.name || 'prop'}" type="${el.props.type || 'string'}" description="${el.props.description || ''}"}`
			}

			case 'field-group': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}field-group{title="${el.props.title || 'Props'}"}${childrenMdc}${colons}`
			}

			case 'steps': {
				const steps = (el.props.steps || '').split(',').map((s: string) => s.trim()).filter(Boolean)
				const stepsMdc = steps.map((st: string) => `${indent}### Step\n${indent}${st}`).join('\n\n')
				return `${indent}${colons}steps\n${stepsMdc}\n${indent}${colons}`
			}

			case 'tabs': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}tabs${childrenMdc}${colons}`
			}

			case 'accordion': {
				return `${indent}::u-accordion{items="${el.props.items || ''}"}`
			}

			case 'kbd': {
				return `${indent}::u-kbd{value="${el.props.value || '⌘K'}"}`
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

			// ================= PAGE & PRO COMPONENTS MDC =================
			case 'auth-form': {
				return `${indent}::u-auth-form{title="${el.props.title || 'Welcome back'}" description="${el.props.description || ''}" icon="${el.props.icon || 'lucide:lock'}"}`
			}

			case 'blog-post': {
				return `${indent}::u-blog-post{title="${el.props.title || 'Blog Post'}" description="${el.props.description || ''}" date="${el.props.date || ''}" badge="${el.props.badge || ''}" image="${el.props.image || ''}" authorName="${el.props.authorName || ''}"}`
			}

			case 'blog-posts': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-blog-posts${childrenMdc}${colons}`
			}

			case 'changelog-version': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-changelog-version{version="${el.props.version || 'v1.0.0'}" date="${el.props.date || ''}" title="${el.props.title || ''}" description="${el.props.description || ''}"}${childrenMdc}${colons}`
			}

			case 'changelog-versions': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-changelog-versions${childrenMdc}${colons}`
			}

			case 'page': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-page${childrenMdc}${colons}`
			}

			case 'page-header': {
				return `${indent}::u-page-header{headline="${el.props.headline || ''}" title="${el.props.title || 'Page Header'}" description="${el.props.description || ''}" icon="${el.props.icon || ''}"}`
			}

			case 'page-body': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-page-body{prose=${el.props.prose ? 'true' : 'false'}}${childrenMdc}${colons}`
			}

			case 'page-aside': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-page-aside{title="${el.props.title || 'Navigation'}"}${childrenMdc}${colons}`
			}

			case 'page-anchors': {
				return `${indent}::u-page-anchors{title="${el.props.title || 'On this page'}" links="${el.props.links || ''}"}`
			}

			case 'page-grid': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-page-grid{columns="${el.props.columns || '3'}"}${childrenMdc}${colons}`
			}

			case 'page-columns': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-page-columns${childrenMdc}${colons}`
			}

			case 'page-card': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-page-card{title="${el.props.title || 'Card'}" description="${el.props.description || ''}" icon="${el.props.icon || ''}" variant="${el.props.variant || 'outline'}"}${childrenMdc}${colons}`
			}

			case 'page-feature': {
				return `${indent}::u-page-feature{title="${el.props.title || 'Feature'}" description="${el.props.description || ''}" icon="${el.props.icon || ''}" orientation="${el.props.orientation || 'horizontal'}"}`
			}

			case 'page-section': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: (el.props.showIllustration && el.props.imageUrl ? `\n${indent}  ![Illustration](${el.props.imageUrl})\n${indent}` : '')
				return `${indent}${colons}u-page-section{title="${el.props.title || 'Section Title'}" headline="${el.props.headline || ''}" description="${el.props.description || ''}" icon="${el.props.icon || ''}" orientation="${el.props.orientation || 'vertical'}"}${childrenMdc}${colons}`
			}

			case 'page-cta': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-page-cta{title="${el.props.title || 'CTA Title'}" headline="${el.props.headline || ''}" description="${el.props.description || ''}" variant="${el.props.variant || 'subtle'}"}${childrenMdc}${colons}`
			}

			case 'page-logos': {
				return `${indent}::u-page-logos{title="${el.props.title || ''}" logos="${el.props.logos || ''}"}`
			}

			case 'page-list': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-page-list{title="${el.props.title || 'FAQ'}" description="${el.props.description || ''}"}${childrenMdc}${colons}`
			}

			case 'page-links': {
				return `${indent}::u-page-links{title="${el.props.title || 'Resources'}" links="${el.props.links || ''}"}`
			}

			case 'pricing-plan': {
				return `${indent}::u-pricing-plan{title="${el.props.title || 'Plan'}" price="${el.props.price || '$29'}" billingPeriod="${el.props.billingPeriod || '/month'}" badge="${el.props.badge || ''}" description="${el.props.description || ''}" features="${el.props.features || ''}"}`
			}

			case 'pricing-plans': {
				const childrenMdc = el.children && el.children.length > 0
					? '\n' + el.children.map((c) => renderElementMdc(c, depth + 1)).join('\n\n') + '\n' + indent
					: ''
				return `${indent}${colons}u-pricing-plans${childrenMdc}${colons}`
			}

			case 'pricing-table': {
				return `${indent}::u-pricing-table{title="${el.props.title || 'Compare Features'}" description="${el.props.description || ''}"}`
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

	const generateNuxtContentYaml = (elements: BuilderElement[]): string => {
		const lines: string[] = []

		// Global title & description
		const heroEl = elements.find((e) => e.type === 'hero-section')
		const pageTitle = heroEl?.props.title || 'Nuxt UI Landing Page'
		const pageDesc = heroEl?.props.description || heroEl?.props.subtitle || 'Built visually with Nuxt UI Studio.'

		lines.push(`title: "${pageTitle}"`)
		lines.push(`description: "${pageDesc}"`)
		lines.push('')

		// 1. HERO BLOCK
		if (heroEl) {
			lines.push('hero:')
			if (heroEl.props.headline || heroEl.props.badgeText) {
				lines.push(`  headline: "${heroEl.props.headline || heroEl.props.badgeText}"`)
			}
			lines.push(`  title: "${heroEl.props.title || 'Hero Title'}"`)
			lines.push(`  description: "${heroEl.props.description || heroEl.props.subtitle || ''}"`)
			if (heroEl.props.orientation) {
				lines.push(`  orientation: "${heroEl.props.orientation}"`)
			}
			if (heroEl.props.showIllustration && heroEl.props.imageUrl) {
				lines.push('  image:')
				lines.push(`    src: "${heroEl.props.imageUrl}"`)
				lines.push('    alt: "Hero illustration"')
			}
			lines.push('  links:')
			if (heroEl.props.primaryBtnText) {
				lines.push(`    - label: "${heroEl.props.primaryBtnText}"`)
				lines.push(`      color: "${heroEl.props.primaryBtnColor || 'primary'}"`)
				lines.push('      size: "xl"')
				lines.push(`      icon: "${heroEl.props.primaryBtnIcon || 'i-lucide-arrow-right'}"`)
				lines.push('      trailing: true')
			}
			if (heroEl.props.secondaryBtnText) {
				lines.push(`    - label: "${heroEl.props.secondaryBtnText}"`)
				lines.push(`      color: "${heroEl.props.secondaryBtnColor || 'neutral'}"`)
				lines.push(`      variant: "${heroEl.props.secondaryBtnVariant || 'outline'}"`)
				lines.push('      size: "xl"')
				lines.push(`      icon: "${heroEl.props.secondaryBtnIcon || 'i-lucide-book-open'}"`)
			}
			lines.push('')
		}

		// 2. SECTIONS & FEATURES
		const sectionEls = elements.filter((e) => e.type === 'page-section' || e.type === 'feature-card' || e.type === 'page-feature')
		if (sectionEls.length > 0) {
			lines.push('sections:')
			for (const sec of sectionEls) {
				if (sec.type === 'page-section') {
					lines.push(`  - headline: "${sec.props.headline || 'Features'}"`)
					lines.push(`    title: "${sec.props.title || 'Section Title'}"`)
					lines.push(`    description: "${sec.props.description || ''}"`)
					if (sec.props.icon) lines.push(`    icon: "${sec.props.icon}"`)
					if (sec.props.orientation) lines.push(`    orientation: "${sec.props.orientation}"`)
					if (sec.children && sec.children.length > 0) {
						lines.push('    items:')
						for (const ch of sec.children) {
							lines.push(`      - title: "${ch.props.title || 'Feature Item'}"`)
							lines.push(`        description: "${ch.props.description || ''}"`)
							if (ch.props.icon) lines.push(`        icon: "${ch.props.icon}"`)
						}
					}
				} else {
					lines.push(`  - title: "${sec.props.title || 'Feature'}"`)
					lines.push(`    description: "${sec.props.description || ''}"`)
					if (sec.props.icon) lines.push(`    icon: "${sec.props.icon}"`)
				}
			}
			lines.push('')
		}

		// 3. PRICING PLANS
		const pricingPlans = elements.filter((e) => e.type === 'pricing-plan' || e.type === 'pricing-card')
		const pricingContainer = elements.find((e) => e.type === 'pricing-plans')
		const allPricing = pricingPlans.concat(pricingContainer?.children?.filter((c) => c.type === 'pricing-plan' || c.type === 'pricing-card') || [])

		if (allPricing.length > 0) {
			lines.push('pricing:')
			lines.push('  title: "Simple, transparent pricing"')
			lines.push('  description: "Choose the plan that best fits your workflow and project requirements."')
			lines.push('  plans:')
			for (const p of allPricing) {
				lines.push(`    - title: "${p.props.title || p.props.plan || 'Plan'}"`)
				lines.push(`      description: "${p.props.description || ''}"`)
				lines.push(`      price: "${p.props.price || '$0'}"`)
				lines.push(`      billingPeriod: "${p.props.billingPeriod || p.props.period || '/month'}"`)
				if (p.props.badge) lines.push(`      badge: "${p.props.badge}"`)
				if (p.props.highlight || p.props.featured) lines.push('      highlight: true')
				lines.push('      button:')
				lines.push(`        label: "${p.props.buttonText || 'Get Started'}"`)
				lines.push(`        color: "${p.props.highlight || p.props.featured ? 'primary' : 'neutral'}"`)
				const features = (p.props.features || '').split(',').map((s: string) => s.trim()).filter(Boolean)
				if (features.length > 0) {
					lines.push('      features:')
					for (const feat of features) {
						lines.push(`        - "${feat}"`)
					}
				}
			}
			lines.push('')
		}

		// 4. CTA BLOCK
		const ctaEl = elements.find((e) => e.type === 'page-cta')
		if (ctaEl) {
			lines.push('cta:')
			if (ctaEl.props.headline) lines.push(`  headline: "${ctaEl.props.headline}"`)
			lines.push(`  title: "${ctaEl.props.title || 'Call to action'}"`)
			lines.push(`  description: "${ctaEl.props.description || ''}"`)
			lines.push('  links:')
			if (ctaEl.props.primaryBtnText) {
				lines.push(`    - label: "${ctaEl.props.primaryBtnText}"`)
				lines.push('      color: "primary"')
				lines.push('      size: "xl"')
			}
			if (ctaEl.props.secondaryBtnText) {
				lines.push(`    - label: "${ctaEl.props.secondaryBtnText}"`)
				lines.push('      color: "neutral"')
				lines.push('      variant: "outline"')
				lines.push('      size: "xl"')
			}
			lines.push('')
		}

		// 5. LOGOS SHOWCASE
		const logosEl = elements.find((e) => e.type === 'page-logos')
		if (logosEl) {
			lines.push('logos:')
			lines.push(`  title: "${logosEl.props.title || 'Trusted by engineering teams'}"`)
			const logos = (logosEl.props.logos || '').split(',').map((s: string) => s.trim()).filter(Boolean)
			if (logos.length > 0) {
				lines.push('  items:')
				for (const lg of logos) {
					lines.push(`    - "${lg}"`)
				}
			}
			lines.push('')
		}

		// 6. FAQ & LISTS
		const listEl = elements.find((e) => e.type === 'page-list')
		if (listEl) {
			lines.push('faq:')
			lines.push(`  title: "${listEl.props.title || 'Frequently Asked Questions'}"`)
			lines.push(`  description: "${listEl.props.description || ''}"`)
			lines.push('  items:')
			lines.push('    - question: "How does code export work?"')
			lines.push('      answer: "Nuxt UI Studio translates your visual edits into production Vue SFC, Markdown MDC, and YAML content."')
			lines.push('    - question: "Can I customize the themes?"')
			lines.push('      answer: "Yes, you can configure 18 primary colors, neutral palettes, border radius, and typography live."')
			lines.push('')
		}

		// 7. TESTIMONIALS
		const testimonials = elements.filter((e) => e.type === 'testimonial-card')
		if (testimonials.length > 0) {
			lines.push('testimonials:')
			lines.push('  title: "Loved by developers worldwide"')
			lines.push('  items:')
			for (const t of testimonials) {
				lines.push(`    - quote: "${t.props.quote || ''}"`)
				lines.push('      author:')
				lines.push(`        name: "${t.props.author || 'Author'}"`)
				lines.push(`        role: "${t.props.role || ''}"`)
				if (t.props.avatarUrl) lines.push(`        avatar: "${t.props.avatarUrl}"`)
			}
			lines.push('')
		}

		return lines.join('\n')
	}

	return {
		renderElementCode,
		generateFullSfcCode,
		generateNuxtContentMarkdown,
		generateNuxtContentYaml
	}
}

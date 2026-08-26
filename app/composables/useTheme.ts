export const primaryColors = [
	'red',
	'orange',
	'amber',
	'yellow',
	'lime',
	'green',
	'emerald',
	'teal',
	'cyan',
	'sky',
	'blue',
	'indigo',
	'violet',
	'purple',
	'fuchsia',
	'pink',
	'rose',
] as const

export const neutralColors = [
	'slate',
	'gray',
	'zinc',
	'neutral',
	'stone',
	'taupe',
	'mauve',
	'mist',
	'olive',
] as const

export const radiuses = [0, 0.125, 0.25, 0.375, 0.5] as const

export const fonts = [
	'Inter',
	'Plus Jakarta Sans',
	'Geist',
	'TikTok Sans',
	'Google Sans',
] as const

export const icons = [
	{ label: 'Lucide', value: 'lucide', icon: 'i-lucide-sparkles' },
	{ label: 'Heroicons', value: 'heroicons', icon: 'i-heroicons-sparkles' },
	{ label: 'Tabler', value: 'tabler', icon: 'i-tabler-sparkles' },
	{ label: 'Phosphor', value: 'ph', icon: 'i-ph-sparkle' },
]

export const modes = [
	{ label: 'system', icon: 'i-lucide-laptop' },
	{ label: 'light', icon: 'i-lucide-sun' },
	{ label: 'dark', icon: 'i-lucide-moon' },
]

export const COLOR_HEX_MAP: Record<string, string> = {
	black: '#09090b',
	red: '#ef4444',
	orange: '#f97316',
	amber: '#f59e0b',
	yellow: '#eab308',
	lime: '#84cc16',
	green: '#22c55e',
	emerald: '#10b981',
	teal: '#14b8a6',
	cyan: '#06b6d4',
	sky: '#0ea5e9',
	blue: '#3b82f6',
	indigo: '#6366f1',
	violet: '#8b5cf6',
	purple: '#a855f7',
	fuchsia: '#d946ef',
	pink: '#ec4899',
	rose: '#f43f5e',
	slate: '#64748b',
	gray: '#6b7280',
	zinc: '#71717a',
	neutral: '#737373',
	stone: '#78716c',
	taupe: '#7e7269',
	mauve: '#7c6f85',
	mist: '#6b7d87',
	olive: '#6d7560',
}

export const useTheme = () => {
	const appConfig = useAppConfig()
	const colorMode = useColorMode()

	const primary = useState<string>('nuxt-ui-primary', () => 'green')
	const neutral = useState<string>('nuxt-ui-neutral', () => 'slate')
	const blackAsPrimary = useState<boolean>('nuxt-ui-black-as-primary', () => false)
	const radius = useState<number>('nuxt-ui-radius', () => 0.25)
	const font = useState<string>('nuxt-ui-font', () => 'Public Sans')
	const icon = useState<string>('nuxt-ui-icon', () => 'lucide')
	const mode = computed({
		get: () => colorMode.preference,
		set: (val: string) => {
			colorMode.preference = val
		},
	})

	const setBlackAsPrimary = (val: boolean) => {
		blackAsPrimary.value = val
	}

	const applyTheme = () => {
		if (import.meta.client) {
			const root = document.documentElement
			const primaryHex = blackAsPrimary.value ? (colorMode.value === 'dark' ? '#ffffff' : '#000000') : (COLOR_HEX_MAP[primary.value] || '#22c55e')
			root.style.setProperty('--ui-primary', primaryHex)
			root.style.setProperty('--color-primary-500', primaryHex)
			root.style.setProperty('--ui-radius', `${radius.value}rem`)
			root.style.setProperty('--font-sans', `'${font.value}', -apple-system, BlinkMacSystemFont, sans-serif`)
			document.body.style.fontFamily = `'${font.value}', -apple-system, BlinkMacSystemFont, sans-serif`
		}
	}

	watch([primary, neutral, blackAsPrimary, radius, font, icon, () => colorMode.value], () => {
		if (blackAsPrimary.value) {
			// handled in applyTheme
		}
		else {
			if (appConfig.ui?.colors) {
				appConfig.ui.colors.primary = primary.value
				appConfig.ui.colors.neutral = neutral.value
			}
		}
		applyTheme()
	})

	onMounted(() => {
		applyTheme()
	})

	const hasCSSChanges = computed(() => {
		return radius.value !== 0.25 || blackAsPrimary.value || font.value !== 'Public Sans'
	})

	const hasConfigChanges = computed(() => {
		return primary.value !== 'green' || neutral.value !== 'slate' || icon.value !== 'lucide'
	})

	const exportCSS = (): string => {
		const lines: string[] = ['@import "tailwindcss";', '@import "@nuxt/ui";']

		if (font.value !== 'Public Sans') {
			lines.push('', '@theme {', `  --font-sans: '${font.value}', sans-serif;`, '}')
		}

		const rootLines: string[] = []
		if (radius.value !== 0.25) {
			rootLines.push(`  --ui-radius: ${radius.value}rem;`)
		}
		if (blackAsPrimary.value) {
			rootLines.push('  --ui-primary: black;')
		}

		if (rootLines.length) {
			lines.push('', ':root {', ...rootLines, '}')
		}

		if (blackAsPrimary.value) {
			lines.push('', '.dark {', '  --ui-primary: white;', '}')
		}

		return lines.join('\n')
	}

	const exportConfig = (): string => {
		const config: Record<string, any> = {
			ui: {
				colors: {
					primary: blackAsPrimary.value ? 'neutral' : primary.value,
					neutral: neutral.value,
				},
			},
		}
		return `export default defineAppConfig(${JSON.stringify(config, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, '\'')})`
	}

	const resetTheme = () => {
		primary.value = 'green'
		neutral.value = 'slate'
		blackAsPrimary.value = false
		radius.value = 0.25
		font.value = 'Public Sans'
		icon.value = 'lucide'
		colorMode.preference = 'system'
		applyTheme()
	}

	return {
		primaryColors,
		primary,
		neutralColors,
		neutral,
		blackAsPrimary,
		setBlackAsPrimary,
		radiuses,
		radius,
		fonts,
		font,
		icons,
		icon,
		modes,
		mode,
		hasCSSChanges,
		hasConfigChanges,
		configLabel: computed(() => 'app.config.ts'),
		exportCSS,
		exportConfig,
		resetTheme,
		applyTheme,
	}
}

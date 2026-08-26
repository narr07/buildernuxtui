export interface ThemeColor {
	name: string
	label: string
	hex: string
	twClass: string
}

export interface NeutralColor {
	name: string
	label: string
	hex: string
}

export const PRIMARY_COLORS: ThemeColor[] = [
	{ name: 'black', label: 'Black', hex: '#09090b', twClass: 'bg-neutral-900' },
	{ name: 'red', label: 'Red', hex: '#ef4444', twClass: 'bg-red-500' },
	{ name: 'orange', label: 'Orange', hex: '#f97316', twClass: 'bg-orange-500' },
	{ name: 'amber', label: 'Amber', hex: '#f59e0b', twClass: 'bg-amber-500' },
	{ name: 'yellow', label: 'Yellow', hex: '#eab308', twClass: 'bg-yellow-500' },
	{ name: 'lime', label: 'Lime', hex: '#84cc16', twClass: 'bg-lime-500' },
	{ name: 'green', label: 'Green', hex: '#22c55e', twClass: 'bg-green-500' },
	{ name: 'emerald', label: 'Emerald', hex: '#10b981', twClass: 'bg-emerald-500' },
	{ name: 'teal', label: 'Teal', hex: '#14b8a6', twClass: 'bg-teal-500' },
	{ name: 'cyan', label: 'Cyan', hex: '#06b6d4', twClass: 'bg-cyan-500' },
	{ name: 'sky', label: 'Sky', hex: '#0ea5e9', twClass: 'bg-sky-500' },
	{ name: 'blue', label: 'Blue', hex: '#3b82f6', twClass: 'bg-blue-500' },
	{ name: 'indigo', label: 'Indigo', hex: '#6366f1', twClass: 'bg-indigo-500' },
	{ name: 'violet', label: 'Violet', hex: '#8b5cf6', twClass: 'bg-violet-500' },
	{ name: 'purple', label: 'Purple', hex: '#a855f7', twClass: 'bg-purple-500' },
	{ name: 'fuchsia', label: 'Fuchsia', hex: '#d946ef', twClass: 'bg-fuchsia-500' },
	{ name: 'pink', label: 'Pink', hex: '#ec4899', twClass: 'bg-pink-500' },
	{ name: 'rose', label: 'Rose', hex: '#f43f5e', twClass: 'bg-rose-500' }
]

export const NEUTRAL_COLORS: NeutralColor[] = [
	{ name: 'slate', label: 'Slate', hex: '#64748b' },
	{ name: 'gray', label: 'Gray', hex: '#6b7280' },
	{ name: 'zinc', label: 'Zinc', hex: '#71717a' },
	{ name: 'neutral', label: 'Neutral', hex: '#737373' },
	{ name: 'stone', label: 'Stone', hex: '#78716c' },
	{ name: 'taupe', label: 'Taupe', hex: '#7e7269' },
	{ name: 'mauve', label: 'Mauve', hex: '#7c6f85' },
	{ name: 'mist', label: 'Mist', hex: '#6b7d87' },
	{ name: 'olive', label: 'Olive', hex: '#6d7560' }
]

export const RADIUS_OPTIONS = [
	{ label: '0', value: '0rem' },
	{ label: '0.125', value: '0.125rem' },
	{ label: '0.25', value: '0.25rem' },
	{ label: '0.375', value: '0.375rem' },
	{ label: '0.5', value: '0.5rem' }
]

export const FONT_OPTIONS = [
	{ label: 'Public Sans', value: 'Public Sans, sans-serif' },
	{ label: 'Inter', value: 'Inter, sans-serif' },
	{ label: 'Plus Jakarta Sans', value: 'Plus Jakarta Sans, sans-serif' },
	{ label: 'Geist', value: 'Geist, sans-serif' },
	{ label: 'Outfit', value: 'Outfit, sans-serif' },
	{ label: 'DM Sans', value: 'DM Sans, sans-serif' },
	{ label: 'Roboto', value: 'Roboto, sans-serif' }
]

export const ICON_COLLECTIONS = [
	{ label: 'Lucide', value: 'lucide' },
	{ label: 'Heroicons', value: 'heroicons' },
	{ label: 'Tabler', value: 'tabler' },
	{ label: 'Phosphor', value: 'ph' }
]

const COLOR_MAP: Record<string, string> = {
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
	rose: '#f43f5e'
}

export const useTheme = () => {
	const primary = useState<string>('theme-primary', () => 'green')
	const neutral = useState<string>('theme-neutral', () => 'slate')
	const radius = useState<string>('theme-radius', () => '0.25rem')
	const font = useState<string>('theme-font', () => 'Public Sans, sans-serif')
	const iconCollection = useState<string>('theme-icon', () => 'lucide')

	// Apply live CSS variables to root
	const applyTheme = () => {
		if (process.client) {
			const root = document.documentElement
			const hex = COLOR_MAP[primary.value] || '#22c55e'
			root.style.setProperty('--ui-primary', hex)
			root.style.setProperty('--color-primary-500', hex)
			root.style.setProperty('--ui-radius', radius.value)
			root.style.setProperty('--font-sans', font.value)
		}
	}

	watch([primary, neutral, radius, font], () => {
		applyTheme()
	})

	onMounted(() => {
		applyTheme()
	})

	return {
		primary,
		neutral,
		radius,
		font,
		iconCollection,
		applyTheme
	}
}

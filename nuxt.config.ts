// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/ui',
		'@vueuse/nuxt',
		'@nuxt/eslint',
	],
	devtools: { enabled: false },
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			title: 'Builder Nuxt UI - Visual Builder for Nuxt 4 & Nuxt UI',
			meta: [
				{ name: 'description', content: 'Visual Drag & Drop Page Builder for Nuxt UI and Nuxt Content' },
				{ property: 'og:title', content: 'Builder Nuxt UI - Visual Builder for Nuxt 4 & Nuxt UI' },
				{ property: 'og:description', content: 'Visual Drag & Drop Page Builder for Nuxt UI and Nuxt Content' },
				{ property: 'og:url', content: 'https://buildernuxtui.permadi.dev/' },
				{ property: 'og:image', content: 'https://buildernuxtui.permadi.dev/og-image.png' },
				{ property: 'og:image:width', content: '1200' },
				{ property: 'og:image:height', content: '630' },
				{ property: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'Builder Nuxt UI' },
				{ name: 'twitter:description', content: 'Visual Drag & Drop Page Builder for Nuxt UI and Nuxt Content' },
				{ name: 'twitter:image', content: 'https://buildernuxtui.permadi.dev/og-image.png' },
				{ name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
				{ name: 'theme-color', content: '#0f172a', media: '(prefers-color-scheme: dark)' },
			],
			link: [
				{ rel: 'canonical', href: 'https://buildernuxtui.permadi.dev/' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
				{ rel: 'icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/site.webmanifest' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Geist:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Public+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap' },
			],
		},
	},
	css: ['~/assets/css/main.css'],
	future: {
		compatibilityVersion: 4,
	},
	compatibilityDate: '2025-01-15',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				quotes: 'single',
				semi: false,
			},
		},
	},
	icon: {
		mode: 'css',
	},
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-01-15',
	devtools: { enabled: false },
	modules: [
		'@nuxt/ui',
		'@nuxt/icon',
		'@vueuse/nuxt'
	],
	app: {
		head: {
			htmlAttrs: {
				lang: 'en'
			},
			title: 'Builder Nuxt UI - Visual Builder for Nuxt 4 & Nuxt UI',
			meta: [
				{ name: 'description', content: 'Visual Drag & Drop Page Builder for Nuxt UI and Nuxt Content' },
				{ property: 'og:title', content: 'Builder Nuxt UI - Visual Builder for Nuxt 4 & Nuxt UI' },
				{ property: 'og:description', content: 'Visual Drag & Drop Page Builder for Nuxt UI and Nuxt Content' },
				{ property: 'og:url', content: 'https://buildernuxtui.permadi.dev/' },
				{ property: 'og:image', content: 'https://buildernuxtui.permadi.dev/icon-512.png' },
				{ property: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'Builder Nuxt UI' },
				{ name: 'twitter:description', content: 'Visual Drag & Drop Page Builder for Nuxt UI and Nuxt Content' },
				{ name: 'twitter:image', content: 'https://buildernuxtui.permadi.dev/icon-512.png' },
				{ name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
				{ name: 'theme-color', content: '#0f172a', media: '(prefers-color-scheme: dark)' }
			],
			link: [
				{ rel: 'canonical', href: 'https://buildernuxtui.permadi.dev/' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
				{ rel: 'icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/site.webmanifest' }
			]
		}
	},
	css: ['~/assets/css/main.css'],
	future: {
		compatibilityVersion: 4
	},
	icon: {
		serverBundle: {
			collections: ['lucide']
		}
	}
})

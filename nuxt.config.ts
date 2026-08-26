// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-01-15',
	devtools: { enabled: false },
	modules: [
		'@nuxt/ui',
		'@nuxt/icon',
		'@vueuse/nuxt'
	],
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

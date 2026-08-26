import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	{
		ignores: [
			'.agents/**',
			'.output/**',
			'dist/**',
			'node_modules/**',
		],
	},
	{
		rules: {
			'vue/html-self-closing': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
		},
	},
)

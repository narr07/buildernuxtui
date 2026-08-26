<script setup lang="ts">
import {
	useTheme,
	PRIMARY_COLORS,
	NEUTRAL_COLORS,
	RADIUS_OPTIONS,
	FONT_OPTIONS,
	ICON_COLLECTIONS
} from '~/composables/useTheme'

const props = defineProps<{
	modelValue: boolean
}>()

const emit = defineEmits<{
	'update:modelValue': [val: boolean]
}>()

const {
	primary,
	neutral,
	radius,
	font,
	iconCollection
} = useTheme()

const colorMode = useColorMode()
</script>

<template>
	<UModal
		:model-value="modelValue"
		title="Theme Configuration"
		description="Customize primary colors, neutral palette, border radius, typography, and color mode."
		@update:model-value="emit('update:modelValue', $event)"
	>
		<template #body>
			<div class="space-y-5 text-xs select-none max-h-[70vh] overflow-y-auto pr-1">
				<!-- 1. PRIMARY COLOR -->
				<div>
					<div class="flex items-center gap-1.5 mb-2.5">
						<span class="font-bold text-neutral-900 dark:text-white text-xs">Primary</span>
						<UIcon name="lucide:help-circle" class="w-3.5 h-3.5 text-neutral-400" />
					</div>

					<div class="grid grid-cols-3 gap-1.5">
						<button
							v-for="c in PRIMARY_COLORS"
							:key="c.name"
							class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-left transition-all"
							:class="primary === c.name
								? 'border-primary-500 bg-primary-50/50 dark:bg-primary-950/40 text-neutral-900 dark:text-white ring-1 ring-primary-500 font-semibold'
								: 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600'"
							@click="primary = c.name"
						>
							<span
								class="w-3 h-3 rounded-full shrink-0 shadow-xs"
								:style="{ backgroundColor: c.hex }"
							/>
							<span class="truncate text-[11px]">{{ c.label }}</span>
						</button>
					</div>
				</div>

				<!-- 2. NEUTRAL COLOR -->
				<div>
					<div class="flex items-center gap-1.5 mb-2.5">
						<span class="font-bold text-neutral-900 dark:text-white text-xs">Neutral</span>
						<UIcon name="lucide:help-circle" class="w-3.5 h-3.5 text-neutral-400" />
					</div>

					<div class="grid grid-cols-3 gap-1.5">
						<button
							v-for="n in NEUTRAL_COLORS"
							:key="n.name"
							class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-left transition-all"
							:class="neutral === n.name
								? 'border-primary-500 bg-primary-50/50 dark:bg-primary-950/40 text-neutral-900 dark:text-white ring-1 ring-primary-500 font-semibold'
								: 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600'"
							@click="neutral = n.name"
						>
							<span
								class="w-3 h-3 rounded-full shrink-0 shadow-xs"
								:style="{ backgroundColor: n.hex }"
							/>
							<span class="truncate text-[11px]">{{ n.label }}</span>
						</button>
					</div>
				</div>

				<!-- 3. RADIUS -->
				<div>
					<div class="flex items-center gap-1.5 mb-2.5">
						<span class="font-bold text-neutral-900 dark:text-white text-xs">Radius</span>
						<UIcon name="lucide:help-circle" class="w-3.5 h-3.5 text-neutral-400" />
					</div>

					<div class="grid grid-cols-5 gap-1.5">
						<button
							v-for="r in RADIUS_OPTIONS"
							:key="r.label"
							class="py-1.5 rounded-lg border text-center font-mono text-xs transition-all"
							:class="radius === r.value
								? 'border-primary-500 bg-primary-50/50 dark:bg-primary-950/40 text-neutral-900 dark:text-white ring-1 ring-primary-500 font-bold'
								: 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600'"
							@click="radius = r.value"
						>
							{{ r.label }}
						</button>
					</div>
				</div>

				<!-- 4. FONT -->
				<div>
					<div class="flex items-center gap-1.5 mb-2">
						<span class="font-bold text-neutral-900 dark:text-white text-xs">Font</span>
						<UIcon name="lucide:help-circle" class="w-3.5 h-3.5 text-neutral-400" />
					</div>

					<select
						v-model="font"
						class="w-full h-9 px-3 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500"
					>
						<option v-for="f in FONT_OPTIONS" :key="f.label" :value="f.value">
							{{ f.label }}
						</option>
					</select>
				</div>

				<!-- 5. ICONS -->
				<div>
					<div class="flex items-center gap-1.5 mb-2">
						<span class="font-bold text-neutral-900 dark:text-white text-xs">Icons</span>
						<UIcon name="lucide:help-circle" class="w-3.5 h-3.5 text-neutral-400" />
					</div>

					<select
						v-model="iconCollection"
						class="w-full h-9 px-3 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500"
					>
						<option v-for="ic in ICON_COLLECTIONS" :key="ic.label" :value="ic.value">
							{{ ic.label }}
						</option>
					</select>
				</div>

				<!-- 6. COLOR MODE -->
				<div>
					<div class="flex items-center gap-1.5 mb-2.5">
						<span class="font-bold text-neutral-900 dark:text-white text-xs">Color Mode</span>
						<UIcon name="lucide:help-circle" class="w-3.5 h-3.5 text-neutral-400" />
					</div>

					<div class="grid grid-cols-3 gap-2">
						<button
							class="py-2 px-3 rounded-lg border text-center flex items-center justify-center gap-1.5 transition-all text-xs"
							:class="colorMode.preference === 'system'
								? 'border-primary-500 bg-primary-50/50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 font-bold ring-1 ring-primary-500'
								: 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-300'"
							@click="colorMode.preference = 'system'"
						>
							<UIcon name="lucide:laptop" class="w-4 h-4" />
							<span>System</span>
						</button>

						<button
							class="py-2 px-3 rounded-lg border text-center flex items-center justify-center gap-1.5 transition-all text-xs"
							:class="colorMode.preference === 'light'
								? 'border-primary-500 bg-primary-50/50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 font-bold ring-1 ring-primary-500'
								: 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-300'"
							@click="colorMode.preference = 'light'"
						>
							<UIcon name="lucide:sun" class="w-4 h-4" />
							<span>Light</span>
						</button>

						<button
							class="py-2 px-3 rounded-lg border text-center flex items-center justify-center gap-1.5 transition-all text-xs"
							:class="colorMode.preference === 'dark'
								? 'border-primary-500 bg-primary-50/50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 font-bold ring-1 ring-primary-500'
								: 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-300'"
							@click="colorMode.preference = 'dark'"
						>
							<UIcon name="lucide:moon" class="w-4 h-4" />
							<span>Dark</span>
						</button>
					</div>
				</div>
			</div>
		</template>
	</UModal>
</template>

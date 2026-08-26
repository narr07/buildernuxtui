<script setup lang="ts">
import ThemePickerButton from './ThemePickerButton.vue'
import { useTheme } from '~/composables/useTheme'

const colorMode = useColorMode()
const open = ref(false)

const { copy: copyCSS, copied: copiedCSS } = useClipboard()
const { copy: copyConfig, copied: copiedConfig } = useClipboard()

const {
	neutralColors,
	neutral,
	primaryColors,
	primary,
	blackAsPrimary,
	setBlackAsPrimary,
	radiuses,
	radius,
	fonts,
	font,
	icon,
	icons,
	modes,
	mode,
	hasCSSChanges,
	hasConfigChanges,
	configLabel,
	exportCSS,
	exportConfig,
	resetTheme
} = useTheme()
</script>

<template>
	<UPopover
		v-model:open="open"
		:ui="{ content: 'w-72 px-6 py-4 flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-5rem)] select-none' }"
	>
		<template #default>
			<UButton
				icon="lucide:palette"
				color="neutral"
				:variant="open ? 'soft' : 'outline'"
				size="sm"
				label="Theme"
				aria-label="Color picker"
			/>
		</template>

		<template #content>
			<!-- 1. PRIMARY -->
			<fieldset>
				<legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1 text-neutral-900 dark:text-white">
					Primary
					<UIcon name="lucide:help-circle" class="w-3 h-3 text-neutral-400" />
				</legend>

				<div class="grid grid-cols-3 gap-1 -mx-2">
					<ThemePickerButton
						label="Black"
						:selected="blackAsPrimary"
						@click="setBlackAsPrimary(true)"
					>
						<template #leading>
							<span class="inline-block size-2 rounded-full bg-black dark:bg-white" />
						</template>
					</ThemePickerButton>

					<ThemePickerButton
						v-for="color in primaryColors"
						:key="color"
						:label="color"
						:chip="color"
						:selected="!blackAsPrimary && primary === color"
						@click="() => { setBlackAsPrimary(false); primary = color; }"
					/>
				</div>
			</fieldset>

			<!-- 2. NEUTRAL -->
			<fieldset>
				<legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1 text-neutral-900 dark:text-white">
					Neutral
					<UIcon name="lucide:help-circle" class="w-3 h-3 text-neutral-400" />
				</legend>

				<div class="grid grid-cols-3 gap-1 -mx-2">
					<ThemePickerButton
						v-for="color in neutralColors"
						:key="color"
						:label="color"
						:chip="color === 'neutral' ? 'slate' : color"
						:selected="neutral === color"
						@click="neutral = color"
					/>
				</div>
			</fieldset>

			<!-- 3. RADIUS -->
			<fieldset>
				<legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1 text-neutral-900 dark:text-white">
					Radius
					<UIcon name="lucide:help-circle" class="w-3 h-3 text-neutral-400" />
				</legend>

				<div class="grid grid-cols-5 gap-1 -mx-2">
					<ThemePickerButton
						v-for="r in radiuses"
						:key="r"
						:label="String(r)"
						class="justify-center px-0 text-center"
						:selected="radius === r"
						@click="radius = r"
					/>
				</div>
			</fieldset>

			<!-- 4. FONT -->
			<fieldset>
				<legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1 text-neutral-900 dark:text-white">
					Font
					<UIcon name="lucide:help-circle" class="w-3 h-3 text-neutral-400" />
				</legend>

				<div class="-mx-2">
					<select
						v-model="font"
						class="w-full h-8 px-2.5 text-[11px] rounded-sm border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-1 focus:ring-primary-500"
					>
						<option v-for="f in fonts" :key="f" :value="f">
							{{ f }}
						</option>
					</select>
				</div>
			</fieldset>

			<!-- 5. ICONS -->
			<fieldset>
				<legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1 text-neutral-900 dark:text-white">
					Icons
					<UIcon name="lucide:help-circle" class="w-3 h-3 text-neutral-400" />
				</legend>

				<div class="-mx-2">
					<select
						v-model="icon"
						class="w-full h-8 px-2.5 text-[11px] rounded-sm border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white capitalize focus:ring-1 focus:ring-primary-500"
					>
						<option v-for="ic in icons" :key="ic.value" :value="ic.value">
							{{ ic.label }}
						</option>
					</select>
				</div>
			</fieldset>

			<!-- 6. COLOR MODE -->
			<fieldset>
				<legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1 text-neutral-900 dark:text-white">
					Color Mode
					<UIcon name="lucide:help-circle" class="w-3 h-3 text-neutral-400" />
				</legend>

				<div class="grid grid-cols-3 gap-1 -mx-2">
					<ThemePickerButton
						v-for="m in modes"
						:key="m.label"
						v-bind="m"
						:selected="colorMode.preference === m.label"
						@click="mode = m.label"
					/>
				</div>
			</fieldset>

			<!-- 7. EXPORT / RESET -->
			<fieldset v-if="hasCSSChanges || hasConfigChanges">
				<legend class="text-[11px] leading-none font-semibold mb-2 select-none text-neutral-900 dark:text-white">
					Export & Reset
				</legend>

				<div class="flex items-center justify-between gap-1 -mx-2">
					<UButton
						v-if="hasCSSChanges"
						color="neutral"
						variant="soft"
						size="xs"
						label="main.css"
						class="flex-1 text-[10px]"
						:icon="copiedCSS ? 'lucide:check' : 'lucide:copy'"
						@click="copyCSS(exportCSS())"
					/>
					<UButton
						v-if="hasConfigChanges"
						color="neutral"
						variant="soft"
						size="xs"
						:label="configLabel"
						:icon="copiedConfig ? 'lucide:check' : 'lucide:copy'"
						class="flex-1 text-[10px]"
						@click="copyConfig(exportConfig())"
					/>
					<UButton
						color="neutral"
						variant="outline"
						size="xs"
						icon="lucide:rotate-ccw"
						title="Reset theme"
						class="ms-auto"
						@click="resetTheme"
					/>
				</div>
			</fieldset>
		</template>
	</UPopover>
</template>

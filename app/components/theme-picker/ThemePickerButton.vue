<script setup lang="ts">
import { COLOR_HEX_MAP } from '~/composables/useTheme'

const props = defineProps<{
	label: string
	icon?: string
	chip?: string
	selected?: boolean
}>()

const slots = defineSlots<{
	leading: () => any
}>()

const chipColor = computed(() => {
	if (!props.chip) return null
	return COLOR_HEX_MAP[props.chip] || '#22c55e'
})
</script>

<template>
	<UButton
		size="sm"
		color="neutral"
		variant="outline"
		:icon="icon"
		:label="label"
		class="capitalize ring-neutral-200 dark:ring-neutral-800 rounded-sm text-[11px] font-normal"
		:class="[selected ? 'bg-neutral-100 dark:bg-neutral-800 ring-1 ring-primary-500 font-semibold text-neutral-900 dark:text-white' : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/60 text-neutral-600 dark:text-neutral-300']"
	>
		<template
			v-if="chip || !!slots.leading"
			#leading
		>
			<slot name="leading">
				<span
					class="inline-block size-2 rounded-full shadow-xs shrink-0"
					:style="{ backgroundColor: chipColor || '#22c55e' }"
				/>
			</slot>
		</template>
	</UButton>
</template>

<script setup lang="ts">
defineProps<{
	label: string
	icon?: string
	chip?: string
	selected?: boolean
}>()

const slots = defineSlots<{
	leading: () => any
}>()
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
		<template v-if="chip || !!slots.leading" #leading>
			<slot name="leading">
				<span
					class="inline-block size-2 rounded-full shadow-xs"
					:class="`bg-(--color-light) dark:bg-(--color-dark)`"
					:style="{
						'--color-light': `var(--color-${chip}-500, #22c55e)`,
						'--color-dark': `var(--color-${chip}-400, #4ade80)`
					}"
				/>
			</slot>
		</template>
	</UButton>
</template>

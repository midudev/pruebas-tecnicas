<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements'
	import { classNamesJoin } from '$lib/utils/classNamesJoin'

	const variants = {
		default:
			'rounded-md border p-1 shadow-lg shadow-black/30 dark:border-tertiary bg-dark-v1 dark:bg-custom-dark-v2',
		gradient:
			'border-[2px] rounded-md shadow-xl shadow-black/40 border-transparent dark:[background:linear-gradient(to_right,rgb(var(--dark-v1)),rgb(var(--dark-v1)))_padding-box,linear-gradient(to_right,rgb(var(--secondary)),rgb(var(--primary)))_border-box] [background:linear-gradient(to_right,#fff,#fff)_padding-box,linear-gradient(to_right,rgb(var(--secondary)),rgb(var(--primary)))_border-box] shadow-primary/5'
	}

    export let variant: keyof typeof variants = 'default'
	export let tag: 'div' | 'h1' | 'h2' | 'h3' | 'label' | 'span' = 'div'
	let className = ''

	export { className as class }
	let classCard = classNamesJoin(className , variants[variant])
</script>

<svelte:element this={tag} class={classCard}>
	<slot />
</svelte:element>

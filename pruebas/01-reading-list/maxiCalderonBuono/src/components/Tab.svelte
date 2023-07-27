<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let filter: string;
	export let availables: number;

	const dispatch = createEventDispatcher();

	export let active: boolean;

	function selectedFilter() {
		dispatch('selectedfilter', {
			filter
		});
	}
</script>

<button
	class={`relative rounded-full p-2 hover:bg-lime-200 hover:scale-[103%] active:scale-[98%] mx-5 ${
		active ? 'bg-lime-200' : 'bg-slate-200'
	}`}
	on:click={selectedFilter}
>
	{#if active}
		<span class="badge-icon variant-filled-warning absolute -top-4 -right-2 z-10 p-4 text-xl"
			>{availables}</span
		>
	{/if}
	<span class="font-bold text-lg text-black">
		{filter}
	</span>
</button>

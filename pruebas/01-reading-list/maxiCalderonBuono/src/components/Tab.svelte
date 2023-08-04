<script lang="ts">
	import { NO_FILTER_APPLIED } from '$lib/const/filters';
	import { createEventDispatcher } from 'svelte';
	export let filter: string;
	export let availables: number;

	const dispatch = createEventDispatcher();

	const filterURL = filter === NO_FILTER_APPLIED ? '/' : `/books/${filter.toLowerCase()}`;

	export let active: boolean;

	function selectedFilter() {
		dispatch('selectedfilter', {
			filter
		});
	}
</script>

<a
	href={filterURL}
	class={`relative rounded-[40px] p-2 hover:bg-lime-200 hover:scale-[103%]  active:scale-[98%] flex-grow text-center ${
		active ? 'bg-lime-200' : 'bg-slate-200'
	}`}
	on:click={selectedFilter}
>
	{#if active}
		<span class="badge-icon variant-filled-warning absolute -top-4 -right-2 z-10 p-4 text-xl"
			>{availables}</span
		>
	{/if}
	<span class="font-bold text-lg text-black whitespace-nowrap">
		{filter}
	</span>
</a>

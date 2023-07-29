<script lang="ts">
	import { getUniqueGenres } from '$lib/data/const';
	import Icon from '@iconify/svelte';
	import type { LibraryElement } from '../types';
	import Tab from './Tab.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let library: LibraryElement[];
	export let availables: number;
	export let savedFilter: string;

	let uniqueFilters = getUniqueGenres('Todos', library);
	let activeFilter: string = savedFilter;

	function handleInternalState(e: CustomEvent<{ filter: string }>) {
		const selectedFilter = e.detail.filter;
		activeFilter = selectedFilter;
		dispatch('selectedfilter', {
			filter: selectedFilter
		});
	}
</script>

{#each uniqueFilters as filter}
	<Tab
		{filter}
		on:selectedfilter={handleInternalState}
		{availables}
		active={activeFilter === filter}
	/>
{/each}

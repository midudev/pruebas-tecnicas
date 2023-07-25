<script lang="ts">
	import Filters from './Filters.svelte';
	import Range from './Range.svelte';
	import type { LibraryElement } from '../types';

	export let library: LibraryElement[];
	export let availables: number;
	export let savedFilter: string;
</script>

<section class="flex items-center my-10 justify-evenly w-full max-w-6xl mx-auto gap-10">
	<Filters {library} on:selectedfilter {availables} {savedFilter} />
	<Range {library} on:change />
</section>

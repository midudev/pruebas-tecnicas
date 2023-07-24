<script lang="ts">
	import Filters from './Filters.svelte';
	import Range from './Range.svelte';
	import type { LibraryElement } from '../types';

	export let library: LibraryElement[];
	export let availables: number;
	export let savedFilter: string;
</script>

<section class="flex items-center my-10 mx-20">
	<Filters {library} on:selectedfilter {availables} {savedFilter} />
	<Range {library} />
</section>

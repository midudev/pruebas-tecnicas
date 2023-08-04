<script lang="ts">
	import Filters from './Filters.svelte';
	import Range from './Range.svelte';
	import type { LibraryElement } from '../types';

	export let library: LibraryElement[];
	export let availables: number;
	export let savedFilter: string;
</script>

<section class="w-full mt-10 my-10 overflow-x-hidden box-border">
	<div class="w-full px-5 flex flex-col items-center lg:flex-row lg:items-start gap-4">
		<div
			class="w-full overflow-x-scroll hide-scrollbar relative flex items-center sm:justify-center lg:justify-start h-20 mb-10 mx-5 px-6 lg:mx-0 gap-10"
		>
			<Filters {library} on:selectedfilter {availables} {savedFilter} />
		</div>

		<Range {library} on:change />
	</div>
</section>

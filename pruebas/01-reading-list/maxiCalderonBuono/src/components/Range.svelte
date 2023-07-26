<script lang="ts">
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import { getRangeOfPages } from '$lib/data/const';
	import type { LibraryElement } from '../types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let library: LibraryElement[];

	const { maxPage, minPage } = getRangeOfPages(library);

	let value: number = maxPage;

	$: dispatch('change', { value });
</script>

<RangeSlider
	name="range-slider"
	bind:value
	max={maxPage}
	min={minPage}
	step={1}
	class="w-full lg:w-1/3"
>
	<div class="flex justify-between items-center">
		<div class="font-bold text-xl">Pages:</div>
		<div class=" text-lime-200 font-bold text-xl">{value}</div>
	</div>
</RangeSlider>

<script lang="ts">
	import libraryData from '../lib/data/books.json';
	import type { Library } from '../types';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { RangeSlider } from '@skeletonlabs/skeleton';

	let { library }: Library = libraryData;

	const getUniqueGenres = () => {
		let buffer: Set<string> = new Set(['Todas']);
		for (const { book } of library) {
			buffer.add(book.genre);
		}
		return Array.from(buffer);
	};

	let categories = getUniqueGenres();

	let getPages = () => {
		let buffer: Set<number> = new Set([]);

		for (const { book } of library) {
			buffer.add(book.pages);
		}
		return Array.from(buffer);
	};

	let maxPages = Math.max(...getPages());
	let minPages = Math.min(...getPages());
</script>

<svelte:head>
	<title>ReadStack</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<section>
	<AppBar class="w-full">
		<h1 class="h1">
			<span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone font-bold"
				>ReadStack.</span
			>
		</h1>
	</AppBar>

	<select class="select w-[30%]">
		{#each categories as category}
			<option>{category}</option>
		{/each}
	</select>

	<RangeSlider name="range-slider" class="w-[30%]" bind:value={minPages} max={maxPages} step={1}>
		<div class="flex justify-between items-center">
			<div class="font-bold font-regular-mona">Label</div>
			<div class="text-xs">{minPages} / {maxPages}</div>
		</div>
	</RangeSlider>

	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
		{#each library as { book }}
			<img class="h-[350px] w-full rounded-lg" src={book.cover} alt="Cover for {book.title}" />
		{/each}
	</section>
</section>

<style>
	section {
		height: 100vh;

		display: grid;
		place-items: center;
	}
	h1 {
		width: 100%;
	}
</style>

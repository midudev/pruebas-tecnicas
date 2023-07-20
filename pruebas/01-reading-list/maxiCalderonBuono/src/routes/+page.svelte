<script lang="ts">
	import libraryData from '../lib/data/books.json';
	import type { Library, LibraryElement, Book } from '../types';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { onMount, afterUpdate } from 'svelte';
	import Dropdown from '../components/Dropdown.svelte';
	import { PAGE_RANGE, getUniqueGenres } from '$lib/data/const';
	import { filterByPages, filterByCategory } from '$lib/helpers/filters';

	let { library }: Library = libraryData;

	let filteredBooks: LibraryElement[] = [];

	let filters = {
		selectedGenre: 'All',
		selectedPagesRanges: '0'
	};

	const updateFilteredBooks = () => {
		filteredBooks = library.filter(
			({ book }) =>
				filterByCategory(book, filters.selectedGenre) &&
				filterByPages(book, filters.selectedPagesRanges)
		);
	};

	onMount(() => {
		updateFilteredBooks();
	});

	afterUpdate(() => {
		updateFilteredBooks();
	});
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

	<Dropdown
		label="Selecciona una categoría"
		identifier="filtro-categoría"
		options={getUniqueGenres('All', library)}
		bind:value={filters.selectedGenre}
	/>

	<Dropdown
		label="Selecciona un rango de páginas"
		identifier="filtro-paginas"
		options={PAGE_RANGE}
		bind:value={filters.selectedPagesRanges}
	/>

	<h1 class="font-bold text-4xl">Libros Disponibles ({filteredBooks.length})</h1>

	{#if filteredBooks.length === 0}
		<p class="font-bold text-3xl">No hay libros para mostrar</p>
	{/if}

	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
		{#each filteredBooks as { book }}
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

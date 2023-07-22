<script lang="ts">
	import libraryData from '../lib/data/books.json';
	import type { Library, LibraryElement } from '../types';
	import { AppBar, localStorageStore } from '@skeletonlabs/skeleton';
	import { afterUpdate } from 'svelte';
	import Dropdown from '../components/Dropdown.svelte';
	import { PAGE_RANGE, getUniqueGenres } from '$lib/data/const';
	import { filterByPages, filterByCategory } from '$lib/helpers/filters';
	import type { Writable } from 'svelte/store';

	let { library }: Library = libraryData;

	interface initialData {
		books: LibraryElement[];
		wishlist: LibraryElement[];
		renderlist: LibraryElement[];
	}

	const initialDataStore: Writable<initialData> = localStorageStore('initialDataStore', {
		books: library,
		wishlist: [],
		renderlist: library
	});

	let filters = {
		selectedGenre: 'All',
		selectedPagesRanges: '0'
	};

	const updateFilteredBooks = () => {
		if (filters.selectedGenre === 'All' && filters.selectedPagesRanges === '0') {
			$initialDataStore.renderlist = $initialDataStore.books;
		} else {
			$initialDataStore.renderlist = $initialDataStore.books.filter(
				({ book }) =>
					filterByCategory(book, filters.selectedGenre) &&
					filterByPages(book, filters.selectedPagesRanges)
			);
		}
	};

	function addToWishlist(id: string) {
		$initialDataStore.books = [...$initialDataStore.books.filter(({ book }) => book.ISBN != id)];
		$initialDataStore.wishlist = [
			...$initialDataStore.wishlist,
			...library.filter(({ book }) => book.ISBN === id)
		];
	}
	function removeFromWishlist(id: string) {
		$initialDataStore.wishlist = [
			...$initialDataStore.wishlist.filter(({ book }) => book.ISBN != id)
		];
		$initialDataStore.books = [
			...$initialDataStore.books,
			...library.filter(({ book }) => book.ISBN === id)
		];
	}

	afterUpdate(() => {
		updateFilteredBooks();
	});
</script>

<svelte:head>
	<title>ReadStack</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<section class="flex flex-col">
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

	<h1 class="font-bold text-4xl">
		Libros Disponibles {filters.selectedGenre === 'All'
			? `(${$initialDataStore.renderlist.length})`
			: `- ${filters.selectedGenre} (${$initialDataStore.renderlist.length})`}
	</h1>

	{#if $initialDataStore.renderlist.length === 0}
		<p class="font-bold text-3xl">No hay libros para mostrar</p>
	{/if}

	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-20 mx-auto max-w-5xl">
		{#each $initialDataStore.renderlist as { book }}
			<div>
				<img class="h-[350px] w-full rounded-lg" src={book.cover} alt="Cover for {book.title}" />
				<button on:click={() => addToWishlist(book.ISBN)}>AGREGAR</button>
			</div>
		{/each}
	</section>
	<p>WHISLIST ({$initialDataStore.wishlist.length})</p>
	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-20 mx-auto max-w-5xl">
		{#each $initialDataStore.wishlist as { book }}
			<div>
				<img class="h-[350px] w-full rounded-lg" src={book.cover} alt="Cover for {book.title}" />
				<button on:click={() => removeFromWishlist(book.ISBN)}>QUITAR</button>
			</div>
		{/each}
	</section>
</section>

<style>
	h1 {
		width: 100%;
	}
</style>

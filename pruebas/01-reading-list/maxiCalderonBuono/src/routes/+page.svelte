<script lang="ts">
	import libraryData from '../lib/data/books.json';
	import type { Library, LibraryElement } from '../types';
	import { AppBar, localStorageStore } from '@skeletonlabs/skeleton';
	import { afterUpdate } from 'svelte';
	import Dropdown from '../components/Dropdown.svelte';
	import { PAGE_RANGE, getUniqueGenres } from '$lib/data/const';
	import { filterByPages, filterByCategory } from '$lib/helpers/filters';
	import type { Writable } from 'svelte/store';
	import SearchBooks from '../components/SearchBooks.svelte';
	import { goto } from '$app/navigation';
	import WishList from '../components/WishList.svelte';
	import BookCard from '../components/BookCard.svelte';

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

	function removeFromWishlist(id: string | CustomEvent<{ id: string }>) {
		let bookToRemove: string | CustomEvent<{ id: string }>;

		if (typeof id === 'string') {
			bookToRemove = id;
		} else {
			bookToRemove = id.detail.id;
		}

		$initialDataStore.wishlist = [
			...$initialDataStore.wishlist.filter(({ book }) => book.ISBN != bookToRemove)
		];
		$initialDataStore.books = [
			...$initialDataStore.books,
			...library.filter(({ book }) => book.ISBN === bookToRemove)
		];
	}

	function goToDetail(title: string | CustomEvent<{ title: string }>) {
		let destination: string | CustomEvent<{ title: string }>;

		if (typeof title === 'string') {
			destination = title;
		} else {
			destination = title.detail.title;
		}

		goto('/search/' + destination.toLowerCase());
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

	<SearchBooks
		label="Busca tu libro favorito"
		id="search-form"
		action="Buscar"
		placeholder="Harry Potter..."
	/>

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

	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20 mx-auto max-w-4xl">
		{#each $initialDataStore.renderlist as { book }}
			<BookCard
				cta="Agregar a lista de lectura"
				{book}
				on:update={() => addToWishlist(book.ISBN)}
				on:navigate={() => goToDetail(book.title)}
			/>
		{/each}
	</section>
	<p>WHISLIST ({$initialDataStore.wishlist.length})</p>

	<WishList
		wishlist={$initialDataStore.wishlist}
		on:navigate={goToDetail}
		on:update={removeFromWishlist}
	/>
</section>

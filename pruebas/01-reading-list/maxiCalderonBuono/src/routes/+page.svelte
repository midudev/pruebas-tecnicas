<script lang="ts">
	import libraryData from '../lib/data/books.json';
	import type { Library, LibraryElement } from '../types';
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import { filterByPages, filterByCategory } from '$lib/helpers/filters';
	import type { Writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import WishList from '../components/WishList.svelte';
	import BookCard from '../components/BookCard.svelte';
	import Header from '../components/Header.svelte';
	import Selectors from '../components/Selectors.svelte';
	import Icon from '@iconify/svelte';
	import { afterUpdate } from 'svelte';

	let { library }: Library = libraryData;

	interface initialData {
		books: LibraryElement[];
		wishlist: LibraryElement[];
		renderlist: LibraryElement[];
		filter: string;
		pages: number;
	}

	const initialDataStore: Writable<initialData> = localStorageStore('initialDataStore', {
		books: library,
		wishlist: [],
		renderlist: library,
		filter: 'Todos',
		pages: 0
	});

	function handleCategory(e: CustomEvent<{ filter: string}>) {
		$initialDataStore.filter = e.detail.filter;
		updateFilteredBooks();
	}

	function handlePage(e: CustomEvent<{ value: number }>) {
		$initialDataStore.pages = e.detail.value;
		updateFilteredBooks();
	}

	const updateFilteredBooks = () => {
		if ($initialDataStore.filter === 'Todos' && $initialDataStore.pages === 0) {
			$initialDataStore.renderlist = $initialDataStore.books;
		} else {
			$initialDataStore.renderlist = $initialDataStore.books.filter(
				({ book }) =>
					filterByCategory(book, $initialDataStore.filter) &&
					filterByPages(book, $initialDataStore.pages)
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
	<Header />

	<Selectors
		{library}
		on:selectedfilter={handleCategory}
		on:currentPage={handlePage}
		savedFilter={$initialDataStore.filter}
		availables={$initialDataStore.renderlist.length}
	/>

	<section class="my-20 mx-auto max-w-5xl w-full">
		<h1 class="font-bold text-5xl flex gap-3 items-center mb-10">
			Nuestra librería <Icon icon="ion:book-outline" />
		</h1>

		{#if $initialDataStore.renderlist.length === 0}
			<p class="font-bold text-3xl text-center">No hay libros para mostrar</p>
		{/if}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each $initialDataStore.renderlist as { book }}
				{#key book.ISBN}
					<BookCard
						cta="Agregar a lista de lectura"
						{book}
						on:update={() => addToWishlist(book.ISBN)}
						on:navigate={() => goToDetail(book.title)}
					/>
				{/key}
			{/each}
		</div>
	</section>

	<WishList
		wishlist={$initialDataStore.wishlist}
		on:navigate={goToDetail}
		on:update={removeFromWishlist}
	/>
</section>

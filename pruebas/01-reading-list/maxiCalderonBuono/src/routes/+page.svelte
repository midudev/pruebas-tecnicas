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
	import { getRangeOfPages } from '$lib/data/const';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';

	let { library }: Library = libraryData;

	const { maxPage } = getRangeOfPages(library);

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
		pages: maxPage
	});

	function handleCategory(e: CustomEvent<{ filter: string }>) {
		$initialDataStore.filter = e.detail.filter;
		updateFilteredBooks();
	}

	function handlePage(e: CustomEvent<{ value: number }>) {
		$initialDataStore.pages = e.detail.value;
		updateFilteredBooks();
	}

	const updateFilteredBooks = () => {
		if ($initialDataStore.filter === 'Todos' && $initialDataStore.pages === maxPage) {
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

	let show: string = 'library';
</script>

<svelte:head>
	<title>ReadStack</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<!-- <svelte:window
	on:storage={(event) => {
		console.log(event);
		if (event.key === 'initialDataStore') {
			if (event.newValue) {
				const newInitialDataStoreValue = JSON.parse(event.newValue);
				const { books, wishlist, filter, pages, renderlist, show } = newInitialDataStoreValue;
				console.log(show);
			}
		}
	}}
/> -->

<Header />

<section class="flex flex-col items-star">
	<Selectors
		{library}
		on:selectedfilter={handleCategory}
		on:change={handlePage}
		savedFilter={$initialDataStore.filter}
		availables={$initialDataStore.renderlist.length}
	/>

	<section class="my-10 mx-auto max-w-5xl w-full">
		<header class="flex gap-3 items-center mb-10 justify-between mx-5 lg:mx-0">
			<h1 class="font-bold text-xl lg:text-5xl flex gap-3 items-center">
				{show === 'library' ? ' Nuestra librería' : 'Lista de lectura'}<Icon
					icon="ion:book-outline"
				/>
			</h1>
			<RadioGroup
				active="bg-lime-300"
				hover="hover:bg-lime-300"
				background="bg-slate-200"
				class="text-gray-900 font-bold"
			>
				<RadioItem
					class={`${show === 'library' ? 'bg-lime-300' : ''}`}
					bind:group={show}
					name="show"
					on:change={() => (show = 'library')}
					value={'library'}>Librería</RadioItem
				>
				<RadioItem
					class={`${show === 'list' ? 'bg-lime-300' : ''}`}
					bind:group={show}
					name="show"
					on:change={() => (show = 'list')}
					value={'list'}>Mi lista</RadioItem
				>
			</RadioGroup>
		</header>
		{#if $initialDataStore.renderlist.length === 0}
			<article class="flex flex-col items-center justify-center gap-5 mx-5 lg:mx-0">
				<img class="w-[600px]" src="/images/library.png" alt="Imagen de wishlist" />
				<p class="font-bold text-3xl text-center">No hay libros para mostrar</p>

				<a
					class="w-full text-[10px] text-center"
					href="https://www.freepik.com/free-vector/book-readers-concept_9174332.htm#query=reading%20illustration&position=0&from_view=keyword&track=ais"
					>Image by pch.vector on Freepik</a
				>
			</article>
		{/if}
		{#if show === 'library'}
			<div
				class="grid items-center grid-cols-[repeat(auto-fit, minmax(250px, 1fr))] gap-x-4 gap-y-8"
				in:fly={{ y: 200, duration: 500 }}
			>
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
		{/if}

		{#if show === 'list'}
			<WishList
				wishlist={$initialDataStore.wishlist}
				on:navigate={goToDetail}
				on:update={removeFromWishlist}
			/>
		{/if}
	</section>
</section>

<script lang="ts">
	import { onMount } from 'svelte';
	import { Drawer } from '~/lib/components/drawer';
	import { availableBooks, readingList } from '~/lib/stores/library.store';
	import type { Library } from '~/lib/types';
	import { filterByGenre, filterByPages, filterByTitle } from '~/lib/utils/filters';
	import { storage } from '~/lib/utils/storage';
	import data from '../../books.json';
	import BookList from './lib/components/book-list.svelte';
	import Filters from './lib/components/filters.svelte';
	import Topbar from './lib/components/topbar.svelte';
	import { genre, pages, title } from './lib/stores/filters.store';

	let showReadingList = false;
	let filteredBooks = $availableBooks;

	$: {
		filteredBooks = filterByGenre($availableBooks, $genre);
		filteredBooks = filterByTitle(filteredBooks, $title);
		filteredBooks = filterByPages(filteredBooks, $pages.current);
	}

	onMount(() => {
		const storagedAvailableBooks = storage.obtain<Library>('availableBooks');
		const storagedReadingList = storage.obtain<Library>('readingList');

		availableBooks.set(storagedAvailableBooks ?? data.library);
		readingList.set(storagedReadingList ?? []);
		const maxAcountPages = Math.max(...data.library.map((book) => book.book.pages));

		pages.set({
			min: Math.min(...data.library.map((book) => book.book.pages)),
			max: maxAcountPages,
			current: $pages.current || maxAcountPages
		});
	});

	function toggleReadingList() {
		showReadingList = !showReadingList;
	}

	function storageListener(event: StorageEvent) {
		if (event.key === 'availableBooks') {
			availableBooks.set(storage.obtain<Library>('availableBooks') ?? []);
		}
		if (event.key === 'readingList') {
			readingList.set(storage.obtain<Library>('readingList') ?? []);
		}
	}
</script>

<svelte:window on:storage={storageListener} />

<div class="mx-auto grid h-screen w-full max-w-7xl grid-rows-[auto_1fr] px-8 xl:px-0">
	<Topbar {toggleReadingList} />

	<main class="grid grid-rows-[auto_1fr] border-t border-t-slate-800/60 py-6">
		<Filters />
		<BookList books={filteredBooks} />
	</main>
</div>
<Drawer bind:open={showReadingList} />

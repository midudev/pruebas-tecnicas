<script lang="ts">
	import { dndzone, SOURCES, TRIGGERS } from 'svelte-dnd-action';
	import type { Book, LibraryElement } from '../types';
	import BookCard from './BookCard.svelte';
	import { createEventDispatcher } from 'svelte';

	export let wishlist: LibraryElement[];

	let dragDisabled = true;

	let itemSelected = '';

	let isDragabble = true;

	let dropTargetStyle = { outline: 'rgba(255, 255, 255, 1) dashed 3px' };

	interface customDndEvent extends Book {
		id: string;
	}

	const dispatch = createEventDispatcher();

	function updateWishlist(id: string) {
		dispatch('update', { id });
	}

	function goToDetail(title: string) {
		dispatch('navigate', { title });
	}

	function handleConsider(e: CustomEvent<DndEvent<customDndEvent>>) {
		const {
			items: newItems,
			info: { source, trigger }
		} = e.detail;
		items = newItems;
		if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
			dragDisabled = true;
			itemSelected = '';
		}
	}

	function handleFinalize(e: CustomEvent<DndEvent<customDndEvent>>) {
		const {
			items: newItems,
			info: { source }
		} = e.detail;
		items = newItems;
		if (source === SOURCES.POINTER) {
			dragDisabled = true;
			itemSelected = '';
		}
	}

	function startDrag(id: string) {
		dragDisabled = false;
		itemSelected = id;
	}

	$: items = wishlist?.map(({ book }: { book: Book }) => {
		const { ISBN, ...rest } = book;
		return { id: ISBN, ...rest };
	});
</script>

<section class="my-20 mx-auto max-w-5xl w-full">
	<h1 class="font-bold text-5xl flex gap-3 items-center mb-10">Lista de lectura</h1>

	{#if wishlist.length === 0}
		<article class="flex flex-col items-center justify-center gap-5">
			<img class="w-[600px]" src="/images/wishlist.png" alt="Imagen de wishlist" />
			<p class="font-bold text-3xl text-center">Todavía no has agregado ningún libro</p>

			<a
				class="w-full text-[10px] text-center"
				href="https://www.freepik.com/free-vector/book-readers-concept_9174332.htm#query=reading%20illustration&position=0&from_view=keyword&track=ais"
				>Image by pch.vector on Freepik</a
			>
		</article>
	{/if}
	<div
		class={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 outline-none ${
			!dragDisabled ? 'outline-dashed outline-white outline-[3px]' : ''
		}`}
		use:dndzone={{ items, dragDisabled, dropTargetStyle }}
		on:consider={handleConsider}
		on:finalize={handleFinalize}
	>
		{#each items as item, index(item.id)}
			<BookCard
				onDragStyles={item.id === itemSelected ? true : false}
				{isDragabble}
				key={item.id}
				on:long={() => startDrag(item.id)}
				cta="Eliminar de la lista"
				book={{ ...item, ISBN: item.id }}
				on:navigate={() => goToDetail(item.title)}
				on:update={() => updateWishlist(item.id)}
			/>
		{/each}
	</div>
</section>

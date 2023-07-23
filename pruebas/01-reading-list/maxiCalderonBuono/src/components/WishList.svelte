<script lang="ts">
	import { dndzone, SOURCES, TRIGGERS } from 'svelte-dnd-action';
	import type { Book, LibraryElement } from '../types';
	import BookCard from './BookCard.svelte';
	import { createEventDispatcher } from 'svelte';

	export let wishlist: LibraryElement[];

	let dragDisabled: boolean = true;

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

	function handleSort(e: CustomEvent<DndEvent<customDndEvent>>) {
		items = e.detail.items;
	}

	function startDrag() {
		dragDisabled = false;
	}

	$: items = wishlist?.map(({ book }: { book: Book }) => {
		const { ISBN, ...rest } = book;
		return { id: ISBN, ...rest };
	});
</script>

<section
	class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-20 mx-auto max-w-5xl"
	use:dndzone={{ items, dragDisabled }}
	on:consider={handleSort}
	on:finalize={handleSort}
>
	{#each items as item (item.id)}
		<BookCard
			on:long={startDrag}
			cta="Eliminar de la lista de lectura"
			book={{ ...item, ISBN: item.id }}
			on:navigate={() => goToDetail(item.title)}
			on:update={() => updateWishlist(item.id)}
		/>
	{/each}
</section>

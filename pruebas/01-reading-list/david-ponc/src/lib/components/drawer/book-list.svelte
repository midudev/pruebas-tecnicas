<script lang="ts">
	import { readingList, removeFromReadingList } from '~/lib/stores/library.store';
	import type { Library } from '~/lib/types';
	import { BookOpenIcon } from '../ui/icons';
	import BookmarkIcon from '../ui/icons/bookmark-icon.svelte';
	import BookRow from './book-row.svelte';

	export let books: Library;
</script>

{#if books.length <= 0}
	<section class="flex flex-col items-center justify-center gap-2 p-8 text-center text-balance">
		<BookOpenIcon class="h-16 w-16 text-gray-800" />
		<p class="text-lg font-medium text-gray-400">
			Aún no has agregado libros a tu lista de lectura
		</p>
		<p class="text-sm text-gray-500">
			Puedes agregar libros a tu lista de lectura dando click en el ícono <BookmarkIcon
				class="inline-block h-5 w-5 text-sky-300"
			/>
		</p>
	</section>
{:else}
	<section class="mt-6 flex flex-col gap-8 overflow-y-auto p-6">
		{#each $readingList as { book }, bookIndex}
			<BookRow {book} {removeFromReadingList} {bookIndex} />
		{/each}
	</section>
{/if}

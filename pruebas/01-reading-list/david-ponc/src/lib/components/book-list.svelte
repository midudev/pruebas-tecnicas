<script lang="ts">
	import type { Library } from '~/lib/types';
	import Book from './book.svelte';
	import { BookOpenIcon } from './ui/icons';

	export let books: Library;
</script>

{#if books.length <= 0}
	<section class="flex flex-col items-center justify-center gap-4 p-8">
		<BookOpenIcon class="h-16 w-16 text-gray-800" />
		<p class="text-2xl font-medium text-gray-500">No se encontraron libros</p>
	</section>
{:else}
	<section class="grid grid-cols-books justify-items-center gap-8 lg:justify-items-start">
		{#each books as book}
			<Book book={book.book} />
		{/each}
	</section>
{/if}

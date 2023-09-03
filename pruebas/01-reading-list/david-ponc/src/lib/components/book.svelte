<script lang="ts">
	import { addToReadingList } from '~/lib/stores/library.store';
	import type { Book } from '~/lib/types';
	import { cn } from '~/lib/utils';
	import { BookmarkIcon } from './ui/icons';

	export let book: Book;
</script>

<article class="group flex max-w-[16rem] flex-col gap-2">
	<header class="flex items-start justify-between gap-2">
		<div class="truncate">
			<p class="truncate text-lg font-semibold" title={book.title}>{book.title}</p>
			<p class="italic text-gray-400">{book.genre}</p>
		</div>
		<button
			aria-label="Agregar a lista de lectura"
			on:click={() => addToReadingList(book)}
			class={cn(
				'rounded-md bg-slate-800 p-1.5 text-slate-500 shadow-sm',
				'transition-all duration-100 active:translate-y-px active:scale-x-[.98] active:scale-y-[.98] active:ring-0',
				'hover:text-sky-200 focus:text-sky-200'
			)}
		>
			<BookmarkIcon class="h-5 w-5" />
		</button>
	</header>
	<figure class="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-900/50">
		<img
			src={book.cover}
			alt={`Cover of ${book.title}`}
			class={cn(
				'h-full w-full object-cover transition-transform',
				'group-hover:scale-105 group-hover:object-center',
				'group-focus:scale-105'
			)}
		/>
	</figure>
	<footer>
		<section class="mb-2 grid grid-cols-3">
			<p class="col-span-2 font-medium text-gray-400">{book.author.name}</p>
			<p class="text-right text-sm font-medium text-gray-400">{book.year}</p>
		</section>
		<p class="line-clamp-2 text-sm font-medium text-gray-500">{book.synopsis}</p>
	</footer>
</article>

<script lang="ts">
	import { decreasePriority, increasePriority, readingListCount } from '~/lib/stores/library.store';
	import type { Book } from '~/lib/types';
	import IconButton from '../ui/icon-button.svelte';
	import { ChevronDownIcon, XIcon } from '../ui/icons';
	import ChevronUpIcon from '../ui/icons/chevron-up-icon.svelte';

	export let bookIndex: number;
	export let book: Book;
	export let removeFromReadingList: (book: Book) => void;

	$: isFirst = bookIndex === 0;
	$: isLast = bookIndex === $readingListCount - 1;
</script>

<article class="flex gap-4">
	<menu class="flex flex-col gap-1 self-center">
		<IconButton on:click={() => increasePriority(book)} disabled={isFirst}>
			<ChevronUpIcon class="h-4 w-4" />
		</IconButton>
		<IconButton on:click={() => decreasePriority(book)} disabled={isLast}>
			<ChevronDownIcon class="h-4 w-4" />
		</IconButton>
	</menu>
	<img src={book.cover} alt="" class="aspect-[3/4] w-16 rounded" />
	<div class="overflow-hidden">
		<p class="truncate text-lg font-semibold">
			<span class="mr-1 text-sky-200 shadow-sky-400 text-shadow-sm">{`#${bookIndex + 1}`}</span>
			{book.title}
		</p>
		<p class="mb-3 leading-none text-slate-500">{book.author.name}</p>
		<p class="line-clamp-2 text-xs font-medium text-slate-500">
			{book.synopsis}
		</p>
	</div>
	<IconButton
		aria-label="Quitar de lista de lectura"
		on:click={() => removeFromReadingList(book)}
		class="self-start"
	>
		<XIcon class="h-4 w-4" />
	</IconButton>
</article>

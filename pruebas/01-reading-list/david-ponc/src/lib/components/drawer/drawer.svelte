<script lang="ts">
	import { readingList, readingListCount } from '~/lib/stores/library.store';
	import IconButton from '../ui/icon-button.svelte';
	import ArrowRightIcon from '../ui/icons/arrow-right-icon.svelte';
	import BookList from './book-list.svelte';

	export let open = false;

	$: if (open) {
		document.body.classList.add('overflow-hidden');
	} else {
		document.body.classList.remove('overflow-hidden');
	}

	function close() {
		open = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Escape') return;
		close();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<dialog class="relative h-screen overflow-y-hidden" {open} data-state={open ? 'open' : 'closed'}>
	<div class="fixed inset-0 bg-sky-950/10 backdrop-blur" on:click={close} role="presentation" />
	<section
		class="fixed right-0 top-0 grid h-full w-screen max-w-lg grid-rows-[auto_auto_1fr] border-l border-l-slate-900 bg-slate-950 text-slate-50"
	>
		<section class="p-6">
			<IconButton on:click={close}>
				<ArrowRightIcon class="h-6 w-6" />
			</IconButton>
		</section>
		<header class="px-6">
			<h3 class="text-2xl font-bold">Lista de lectura</h3>
			<p class="text-slate-500">
				<span class="text-sky-200 shadow-sky-400 text-shadow-md">{$readingListCount}</span> libros
			</p>
		</header>

		<BookList books={$readingList} />
	</section>
</dialog>

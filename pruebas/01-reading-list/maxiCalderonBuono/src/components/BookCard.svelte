<script lang="ts">
	import { longpress } from '$lib/helpers/longPress';
	import type { Book } from '../types';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function updateWishlist() {
		dispatch('update');
	}

	function goToDetail() {
		dispatch('navigate');
	}

	export let book: Book;
	export let cta: string;
</script>

<div class="flex flex-col overflow-hidden" use:longpress on:long>
	<button class="relative overflow-hidden group rounded-2xl" on:click={goToDetail}>
		<div class="absolute left-0 top-0 h-16 w-16">
			<div
				class="absolute z-10 transform -rotate-45 bg-blue-200/90 text-center text-gray-800 font-semibold py-1 left-[-34px] top-[32px] w-[170px]"
			>
				{book.genre}
			</div>
		</div>
		<img
			class={`h-[350px] w-full group-hover:scale-125 transition-all ease-in-out delay-75`}
			src={book.cover}
			alt="Cover for {book.title}"
		/>
	</button>
	<div class="flex justify-between mt-2 relative">
		<div class="flex flex-col">
			<strong>{book.title}</strong>
			<span>{book.author.name}</span>
		</div>
		<span
			class="bg-green-100 absolute right-0 bottom-0 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
			>Pages: {book.pages}</span
		>
	</div>
	<button
		class="btn variant-filled font-bold rounded-lg p-2 mx-auto mt-3 hover:bg-indigo-300"
		on:click={updateWishlist}
		><Icon icon="icon-park:list" />
		<span>{cta}</span>
	</button>
</div>

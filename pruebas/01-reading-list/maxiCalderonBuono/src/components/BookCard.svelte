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
	export let isDragabble: boolean = false;
	export let onDragStyles: boolean = false;
</script>

<div class="flex flex-col overflow-hidden w-[250px]" use:longpress on:long>
	<button
		class={`relative overflow-hidden group rounded-2xl ${
			onDragStyles ? 'animate-shake opacity-70' : 'opacity-100'
		}`}
		on:click={goToDetail}
	>
		{#if onDragStyles}
			<Icon
				icon="ic:round-move-down"
				class="absolute top-[50%] left-0 right-0 mx-auto text-5xl font-bold rounded-full bg-gray-900/40 p-2 z-10"
			/>
		{/if}
		{#if isDragabble}
			<Icon
				icon="mdi:drag"
				class="absolute top-2 right-2 z-10 text-3xl bg-indigo-400/80 rounded-full font-bold"
			/>
		{/if}
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

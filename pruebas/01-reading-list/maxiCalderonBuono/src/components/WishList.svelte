<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	import type { LibraryElement } from '../types';
	import { goto } from '$app/navigation';
	export let wishlist: LibraryElement[];

	function goToDetail(title: string) {
		goto('/search/' + title.toLowerCase());
	}

	function handelConsider(e: any) {
		console.log('consider');
	}

	function handleFinalize(e: any) {
		console.log('consider');
	}
</script>

<section
	class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20 mx-auto max-w-4xl"
	use:dndzone={{ items: wishlist }}
	on:consider={handelConsider}
	on:finalize={handleFinalize}
>
	{#each wishlist as { book }}
		<div class=" flex flex-col overflow-hidden">
			<div class="relative overflow-hidden group rounded-2xl" on:click={goToDetail(book.title)}>
				<div class="absolute left-0 top-0 h-16 w-16">
					<div
						class="absolute z-10 transform -rotate-45 bg-blue-200/90 text-center text-gray-800 font-semibold py-1 left-[-34px] top-[32px] w-[170px]"
					>
						{book.genre}
					</div>
				</div>
				<img
					class="h-[350px] w-full group-hover:scale-125 transition-all ease-in-out delay-75"
					src={book.cover}
					alt="Cover for {book.title}"
				/>
			</div>
			<div class="flex flex-col mt-2">
				<strong>{book.title}</strong>
				<span>{book.author.name}</span>
			</div>
		</div>
	{/each}
</section>

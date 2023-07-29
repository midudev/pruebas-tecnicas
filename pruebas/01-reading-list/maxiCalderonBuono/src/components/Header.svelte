<script lang="ts">
	import Avatar from './Avatar.svelte';
	import type { LibraryElement } from '../types';
	import Icon from '@iconify/svelte';
	import SearchBooks from './SearchBooks.svelte';
	// import Icon from '@iconify/svelte';

	// export let wishlist: LibraryElement[];
</script>

<header class="w-full h-20 py-4 px-5 lg:px-12 shadow-lg flex items-center justify-between gap-4">
	<h1
		class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone font-bold text-4xl hidden md:block"
	>
		ReadStack.
	</h1>

	<div class="flex gap-5 flex-1 justify-end items-center">
		<SearchBooks
			label="Busca tu libro favorito"
			id="search-form"
			action="Buscar"
			placeholder="Busca el título de tu libro..."
		/>

		<Avatar />
	</div>
</header>

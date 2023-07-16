<script lang="ts">
	import libraryData from '../lib/data/books.json';
	import type { Library } from '../types';

	let { library }: Library = libraryData;
</script>

<svelte:head>
	<title>ReadStack</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<section>
	<h1>LOS ÚLTIMOS LIBROS</h1>

	{#each library as { book }}
		<h2>{book.title}</h2>
	{/each}
</section>

<style>
	section {
		height: 100vh;
		display: grid;
		place-items: center;
	}
	h1 {
		width: 100%;
	}
</style>

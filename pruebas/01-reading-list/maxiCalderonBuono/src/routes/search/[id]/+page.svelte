<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	export let data;

	console.log(data);
</script>

<section
	class="max-w-5xl w-full mx-auto flex flex-col md:flex-row py-10 h-screen justify-center items-center gap-5"
	in:fly={{ y: 50, duration: 500 }}
	out:fly={{ duration: 500 }}
>
	<img src={data.cover} alt={data.title} class="object-cover h-96 rounded-xl mb-10 md:mb-0" />

	<div class="flex flex-col items-center justify-center md:items-start gap-10">
		<div class="flex flex-col mx-5 md:mx-0 gap-2">
			<h1 class="font-bold text-3xl">{data.title}</h1>
			<p class="italic text-xl opacity-70">{data.synopsis}</p>
			<p>Autor: <strong>{data.author.name}</strong></p>
			<p>Año: <strong>{data.year}</strong></p>
		</div>

		<a href="/" class="btn variant-filled font-bold rounded-lg p-2 mt-3 hover:bg-indigo-300"
			><Icon icon="ep:back" />
			<span>Go back</span>
		</a>
	</div>
</section>

<script lang="ts">
	export let data;

	console.log(data);
</script>

<section class="max-w-5xl w-full mx-auto flex py-10 h-screen justify-center items-center gap-5">
	<img src={data.cover} alt={data.title} class="object-cover h-96" />
	<div class="flex flex-col gap-2">
		<h1 class="font-bold text-3xl">{data.title}</h1>
		<p class="italic text-xl opacity-70">{data.synopsis}</p>
		<p>Autor: <strong>{data.author.name}</strong></p>
		<p>Año: <strong>{data.year}</strong></p>
	</div>
</section>

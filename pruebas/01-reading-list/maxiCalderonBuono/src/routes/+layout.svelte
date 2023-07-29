<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.postcss';
	import './styles.css';
</script>

<main class="w-full">
	<slot />
</main>
<footer class="mx-auto w-full text-center">
	Desarrollado con ❤️ por <a
		href="https://maxicalderon.dev"
		class="text-lime-200 font-bold underline">Maxi Calderón</a
	>
</footer>

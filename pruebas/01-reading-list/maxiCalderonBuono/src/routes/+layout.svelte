<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.postcss';
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
	<footer>
		Desarrollado con ❤️ por <a
			href="https://maxicalderon.dev"
			class="text-lime-200 font-bold underline">Maxi Calderón</a
		>
	</footer>
</div>

<style>
	.app {
		display: grid;
		place-items: center;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
	}
</style>

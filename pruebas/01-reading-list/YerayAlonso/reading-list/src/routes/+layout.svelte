<script>
  import Title from '$lib/components/Title.svelte'
  import '../app.postcss'
</script>

<svelte:head>
  <title>Mis lecturas</title>
</svelte:head>

<header>
  <Title />
</header>
<main>
  <slot />
</main>
<footer class="text-center fixed-bottom">
  <p>Yeray Alonso &copy; 2023</p>
</footer>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.800);
    color: theme(colors.gray.100);
    font-family: system-ui, sans-serif;
  }

  header {
    padding: 1rem;
    margin: 0 auto;
    max-width: 80rem;
  }

  main {
    padding: 1rem;
    margin: 0 auto;
    max-width: 80rem;
  }
</style>

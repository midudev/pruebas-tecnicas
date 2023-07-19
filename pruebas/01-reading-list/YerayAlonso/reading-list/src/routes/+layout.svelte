<script>
  import Title from '$lib/components/Title.svelte'
  import '../app.postcss'
</script>

<header>
  <Title />
</header>
<main>
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.800);
    color: theme(colors.gray.100);
    font-family: system-ui, sans-serif;
  }

  header {
    padding: 1rem;
    margin: 0 auto;
    max-width: 60rem;
  }

  main {
    padding: 1rem;
    margin: 0 auto;
    max-width: 60rem;
  }
</style>

<script>
  import '@fontsource-variable/roboto-slab';
</script>

<slot />

<style>
  :root {
    --primary: #27374d;
    --secondary: #526d82;
    --terciary: #9db2bf;
    --quaternary: #dde6ed;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    height: 100dvh;
    /* margin-inline: 15%; */
    max-width: 1200px;
    margin: auto;
    background-color: var(--primary);
    font-family: 'Roboto Slab Variable', sans-serif;
  }
</style>

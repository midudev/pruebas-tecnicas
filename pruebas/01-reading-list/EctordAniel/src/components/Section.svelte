<script lang="ts">
  import { fly } from "svelte/transition";

  export let sectionTitle: string;
</script>

<section transition:fly={{ x: 0, y: 0 }}>
  <h3>{sectionTitle}</h3>
  <slot />
</section>

<style>
  section {
    padding-top: 30px;
  }
  h3 {
    font-size: 24px;
  }
</style>

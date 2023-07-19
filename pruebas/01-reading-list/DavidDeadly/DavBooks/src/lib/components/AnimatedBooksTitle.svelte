<script lang="ts">
  import { fade } from 'svelte/transition';
  import { quadInOut } from 'svelte/easing';

  export let numBooks: number;
  export let headerType: 'h1' | 'h3';
  export let noun: {
    singular: string;
    plural: string;
  };
  export let booksTitle: string;
  export let noBooksTitle: string;

  const plural = new Intl.PluralRules('es');

  $: isOne = plural.select(numBooks) === 'one';
</script>

{#key numBooks}
  <svelte:element this={headerType} in:fade={{ easing: quadInOut }}>
    {#if numBooks}
      <span>{numBooks}</span>
      {isOne ? noun.singular : noun.plural}
      {booksTitle}
    {:else}
      {noBooksTitle}
    {/if}
  </svelte:element>
{/key}

<style>
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-style: italic;
    font-weight: bolder;
    font-size: 3.5rem;
    margin-block: 15px;
  }
</style>

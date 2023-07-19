<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import { getRandomMessage } from '$lib';

  export let messages: string[] = [];

  const timing = 5_000;
  const yMove = -20;

  let interval: NodeJS.Timer;
  let readdingMessage = getRandomMessage({ messages });

  onMount(() => {
    const getNewMsg = () => {
      const newMsg = getRandomMessage({
        messages,
        msgAvoid: readdingMessage,
      });

      readdingMessage = newMsg;
    };

    interval = setInterval(getNewMsg, timing);

    return () => clearInterval(interval);
  });
</script>

<h3>¡Lee!</h3>
{#if messages.length}
  {#key readdingMessage}
    <cite in:fly={{ y: yMove }}>{readdingMessage}</cite>
  {/key}
{/if}

<style>
  h3 {
    font-size: 3.5rem;
  }

  cite::after,
  cite::before {
    content: '"';
  }

  cite {
    font-style: oblique;
    display: block;
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    width: 40ch;
    margin: auto;
  }
</style>

<script lang="ts">
  import { getRandomMessage } from '$lib';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  export let messages: string[] = [];

  const timing = 5_000;
  const yMove = -20;
  let readdingMessage = getRandomMessage({ messages });

  let interval: NodeJS.Timer;
  onMount(() => {
    clearInterval(interval);
    const getNewMsg = () => {
      const newMsg = getRandomMessage({
        messages,
        msgAvoid: readdingMessage,
      });

      readdingMessage = newMsg;
    };
    interval = setInterval(getNewMsg, timing);
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

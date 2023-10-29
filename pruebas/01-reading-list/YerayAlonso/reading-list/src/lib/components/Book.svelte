<script>
  export let book
  export let isSelected
</script>

<img class="aspect-[329/499] h-full w-full object-cover max-w-full rounded" src={book.cover} alt="Portada del libro {book.title}" />
<div class="transition-all opacity-0 group-hover:opacity-100 absolute inset-0 z-10 bg-zinc-900/70 text-white flex items-center justify-center">
  <div class="rounded-full">
    {#if isSelected}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(220, 38, 38, 1)"
        ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11H7v-2h10v2z" /></svg
      >
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(22, 163, 74, 1)"
        ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg
      >
    {/if}
  </div>
</div>

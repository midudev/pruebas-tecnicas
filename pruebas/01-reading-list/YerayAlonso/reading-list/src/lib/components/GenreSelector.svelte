<script>
  export let genres
  export let selectedGenres
  export let action

  const isSelected = (genre) => selectedGenres.includes(genre)
</script>

{#if genres.length > 0}
  <h2>Géneros</h2>
  {#each genres as genre}
    <div>
      <input id={genre} type="checkbox" on:click={action(genre)} checked={isSelected(genre)} />
      <label for={genre}>{genre}</label>
    </div>
  {/each}
{/if}

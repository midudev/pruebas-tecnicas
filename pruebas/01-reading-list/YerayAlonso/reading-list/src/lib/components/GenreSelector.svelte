<script>
  export let genres
  export let selectedGenres

  const toggleSelectedGenre = (e) => {
    const genre = e.target.id
    selectedGenres = selectedGenres.includes(genre) ? selectedGenres.filter((g) => g !== genre) : [...selectedGenres, genre]
  }

  const isSelected = (genre) => selectedGenres.includes(genre)
</script>

{#if genres.length > 0}
  <h2>Géneros</h2>
  {#each genres as genre}
    <div>
      <input id={genre} type="checkbox" on:click={toggleSelectedGenre} checked={isSelected(genre)} />
      <label for={genre}>{genre}</label>
    </div>
  {/each}
{/if}

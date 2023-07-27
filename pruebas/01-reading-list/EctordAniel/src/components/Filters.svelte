<script lang="ts">
  import { genres, pages, filters } from "../stores/library";
</script>

<section>
  <fieldset>
    <label for="genre">Filtrar por género</label>
    <select id="genre" bind:value={$filters.genre}>
      <option value="">Todos</option>
      {#each genres as genre}
        <option value={genre}>{genre}</option>
      {/each}
    </select>
  </fieldset>
  <fieldset>
    <label for="pages">Filtrar por número de páginas</label>
    <div>
      <span>{pages.min}</span>
      <input
        id="pages"
        type="range"
        min={pages.min}
        max={pages.max}
        bind:value={$filters.page}
      />
      <span>{pages.max}</span>
    </div>
    <span class="info">libros desde {$filters.page} páginas</span>
  </fieldset>
</section>

<style>
  section {
    display: flex;
    margin-top: 8px;
    gap: 24px;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
  }

  label {
    font-weight: 500;
    font-size: 18px;
  }

  select {
    padding: 4px;
    width: 200px;
  }

  input {
    width: 200px;
    height: 24px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .info {
    margin-top: -10px;
  }
</style>

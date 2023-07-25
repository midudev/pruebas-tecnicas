<script lang="ts">
  import { library } from "../../../books.json";
  import { filter } from "../store/filter.store";

  const booklistGnere = new Set([...library.map(({ book }) => book.genre)]);

  const handleSelect = (e: Event) => {
    const target = e.currentTarget as HTMLSelectElement;
    filter.set(target.value);
  };
</script>

<form>
  <select name="" id="" on:change={handleSelect}>
    <option value=" " disabled selected>Selecciona un genero</option>
    {#each booklistGnere as genr (genr)}
      <option value={genr}>
        {genr}
      </option>
    {/each}
  </select>
</form>

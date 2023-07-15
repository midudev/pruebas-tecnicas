<script lang="ts">
  import type { Book } from "$lib/types/Book";

  export let wishListBooks: Book[];
</script>

<div class="list-wish-books">
  <h3>Lista de libros para leer</h3>
  <ul role="listbox" class="ul-books">
    {#each wishListBooks as { title }}
      <li role="listitem">
        <span>{title}</span>
      </li>
    {/each}
  </ul>
  <div />
</div>

<style>
  .list-wish-books {
    width: 25%;
    border: 1px solid red;
    padding: 16px;
  }

  .ul-books {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h3 {
    margin-top: 0;
  }
</style>

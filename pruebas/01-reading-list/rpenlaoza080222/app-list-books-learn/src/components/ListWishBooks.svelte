<script lang="ts">
  import type { Book } from "$lib/types/Book";
  import BookWishList from "./BookWishList.svelte";
  
  export let wishListBooks: Book[];
  export let removeBookFromWishList: Function;
</script>

<div class="list-wish-books">
  <h3>Lista de libros para leer</h3>
  <ul role="listbox" class="ul-books">
    {#each wishListBooks as book}
      <li role="listitem">
        <BookWishList {book} {removeBookFromWishList}  />
      </li>
    {/each}
  </ul>
</div>

<style>
  .list-wish-books {
    width: 25%;
    padding: 16px;
    background-color: #f2f2f2;
  }

  .ul-books {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0;
  }

  h3 {
    margin-top: 0;
    color:#333;
    font-size: 1.3rem;
  }
</style>

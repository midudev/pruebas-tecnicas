<script lang="ts">
  import booksLibrary from "$lib/books.json";
  import Book from "../components/Book.svelte";
  import type { Book as BookType } from "$lib/types/Book";
  import Filters from "../components/Filters.svelte";
  import ListWishBooks from "../components/ListWishBooks.svelte";
  let { library: books } = booksLibrary;

  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  let wishListBooks: BookType[] = [];

  function addBookToWishList(book: BookType) {
    const bookExistInWishList = wishListBooks.find(wb=> wb.ISBN === book.ISBN)
    if(bookExistInWishList) return
    wishListBooks = [...wishListBooks, book]
  }

  const genres = books.map(({ book }) => {
    return book.genre;
  });
  const authors = books.map(({ book }) => {
    return book.author;
  });
</script>

<div class="container">
  <h1>Lista de libros</h1>
  <Filters bookLength={books.length} />
  <div class="container-list-books">
    <div class="container-books">
      {#each books as { book }, i}
        <Book {book} {addBookToWishList} />
      {/each}
    </div>
    <ListWishBooks {wishListBooks}  />
  </div>
</div>

<style>
  h1 {
    text-align: left;
  }

  .container-list-books {
    display: flex;
    gap: 20px;
  }

  .container-books {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
    row-gap: 20px;
  }

  .container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
</style>

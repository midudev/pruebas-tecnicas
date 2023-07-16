<script lang="ts">
  import booksLibrary from "$lib/books.json";
  import Book from "../components/Book.svelte";
  import type { Book as BookType } from "$lib/types/Book";
  import Filters from "../components/Filters.svelte";
  import ListWishBooks from "../components/ListWishBooks.svelte";
  let { library: books } = booksLibrary;

  let wishListBooks: BookType[] = [];

  let searchText = "";

  let search = false;

  let filterListBooks: BookType[] = books;

  function filterBooks(searchText:string) {
    filterListBooks = searchText
      ? books.filter(({ book }: { book: BookType }) => {
          return book.title.toLowerCase().includes(searchText.toLowerCase());
        })
      : books;
  }

  function addBookToWishList(book: BookType) {
    const bookExistInWishList = wishListBooks.find(
      (wb) => wb.ISBN === book.ISBN
    );
    if (bookExistInWishList) return;
    wishListBooks = [...wishListBooks, book];
  }

  function removeBookFromWishList(book: BookType) {
    wishListBooks = wishListBooks.filter((b) => b.ISBN !== book.ISBN);
  }

  const genres = books.map(({ book }) => {
    return book.genre;
  });
  const authors = books.map(({ book }) => {
    return book.author;
  });
</script>

<div class="main">
  <div class="container">
    <h1>Lista de libros</h1>
    <Filters bookLength={filterListBooks.length} {searchText}  {filterBooks} />
    <div class="container-list-books">
      <div
        class="container-books"
        class:list-displayed={wishListBooks.length > 0}
      >
        {#each filterListBooks as { book }, i}
          <Book {book} {addBookToWishList} />
        {/each}
      </div>
      {#if wishListBooks.length > 0}
        <ListWishBooks {wishListBooks} {removeBookFromWishList} />
      {/if}
    </div>
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
    width: 100%;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
    row-gap: 20px;
    transition: all ease 10s;
  }

  .container-books.list-displayed {
    width: 80%;
  }

  .container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
</style>

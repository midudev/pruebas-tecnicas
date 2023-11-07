<script lang="ts">
  import booksLibrary from "$lib/books.json";
  import Book from "../lib/components/Book.svelte";
  import type { Book as BookType } from "$lib/types/Book";
  import Filters from "../lib/components/Filters.svelte";
  import ListWishBooks from "../lib/components/ListWishBooks.svelte";
  import { onMount, setContext } from "svelte";
  import {
    setBookwishList,
    getBookWishList,
    keyBooks,
  } from "$lib/contexts/booksContext";
  import NavBar from "$lib/components/NavBar.svelte";
  import { Button, Modal } from "flowbite-svelte";
  let { library: books } = booksLibrary;

  setBookwishList();

  const wishListBooks = getBookWishList();

  function storageListener(event: any) {
    console.log("Event Storage", event);
  }

  onMount(() => {
    if (localStorage.getItem(keyBooks)) {
      const booksStored = JSON.parse(localStorage.getItem(keyBooks) || "");
      $wishListBooks = booksStored;
    }
    window.addEventListener("storage", storageListener);
    return () => {
      window.removeEventListener("storage", storageListener);
    }
  });

  let searchText = "";

  let search = false;
  let open = true;

  let filterListBooks: BookType[] = books;

  let genre = "";

  let popupModal = false;
  let message = "";

  function filterBooks(searchText: string, genre: string) {
    let array = books;
    if (searchText) {
      array = searchText
        ? books.filter(({ book }: { book: BookType }) => {
            return book.title.toLowerCase().includes(searchText.toLowerCase());
          })
        : books;
    }
    if (genre) {
      array = array.filter(({ book }: { book: BookType }) => {
        return book.genre.toLowerCase().includes(genre.toLowerCase());
      });
    }
    filterListBooks = array;
  }

  function addBookToWishList(book: BookType) {
    const bookExistInWishList = $wishListBooks.find(
      (wb) => wb.ISBN === book.ISBN
    );
    if (bookExistInWishList) return;
    $wishListBooks = [...$wishListBooks, book];
    saveListBooks();
    message = "Ha sido agregado un libro";
    popupModal = true;
  }

  function removeBookFromWishList(book: BookType) {
    $wishListBooks = $wishListBooks.filter((b) => b.ISBN !== book.ISBN);
    saveListBooks();
    message = "Ha sido eliminado un libro";
    popupModal = true;
  }

  function toggleSideBar() {
    open = !open;
  }

  const genres = books.map(({ book }) => {
    return book.genre;
  });
  const genresSet = new Set(genres);
  const authors = books.map(({ book }) => {
    return book.author;
  });

  function saveListBooks() {
    localStorage.setItem(keyBooks, JSON.stringify($wishListBooks));
  }

  
</script>

<svelte:window on:storage={storageListener} />

<div class="main">
  <div class="flex flex-col h-[100vh]">
    <NavBar />

    <div class="w-[80%] mx-auto mt-[80px]">
      <Filters
        {genre}
        genres={genresSet}
        {searchText}
        {filterBooks}
        {open}
        {toggleSideBar}
      />
    </div>

    <div class="container-list-books pb-[40px] flex-col bg-gray-800 flex-1">
      <div class="w-[80%] mx-auto">
        <h3 class="text-white font-bold text-lg mt-[30px]">
          Resultado de la búsqueda {filterListBooks.length} libros
        </h3>
      </div>
      <div class="container-books h-fit">
        {#each filterListBooks as { book }, i}
          <Book {book} {addBookToWishList} />
        {/each}
      </div>
      <ListWishBooks {removeBookFromWishList} {open} {toggleSideBar} />
    </div>
  </div>
  <Modal bind:open={popupModal} size="xs" autoclose>
    <div class="text-center">
      <svg
        aria-hidden="true"
        class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        {message}
      </h3>
      <Button color="red" class="mr-2">Entendido</Button>
    </div>
  </Modal>
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
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 10px;
    row-gap: 20px;
    transition: width ease 10s;
  }

  .container-books.list-displayed {
    width: 80%;
  }

  .container {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  h1 {
    text-align: left;
  }

  .container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
</style>

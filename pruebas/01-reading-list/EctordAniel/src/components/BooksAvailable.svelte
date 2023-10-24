<script lang="ts">
  import { onDestroy } from "svelte";
  import { get } from "svelte/store";
  import BookCard from "./BookCard.svelte";
  import Dialog from "./Dialog.svelte";
  import Section from "./Section.svelte";
  import { availableList, readingList, filters } from "../stores/library";

  let dialogEl: HTMLDialogElement;
  let bookSelected: Book = null;
  let library: Library[] = [];
  let filteredLibrary: Library[] = [];

  const availableListUsubscribe = availableList.subscribe((value) => {
    library = value;
    const f = get(filters);
    filteredLibrary = f.genre
      ? library.filter((l) => l.book.genre === f.genre)
      : library;
    filteredLibrary = filteredLibrary.filter((l) => l.book.pages >= f.page);
  });

  const filtersUsubscribe = filters.subscribe((value) => {
    filteredLibrary = value.genre
      ? library.filter((l) => l.book.genre === value.genre)
      : library;
    filteredLibrary = filteredLibrary.filter((l) => l.book.pages >= value.page);
  });

  function handleClick(book: Book) {
    bookSelected = book;
    dialogEl.showModal();
  }

  function handleAdd() {
    const newReadingList = [...get(readingList), { book: bookSelected }];
    readingList.set(newReadingList);
    localStorage.setItem("storedReadingList", JSON.stringify(newReadingList));

    const newAvailableList = library.filter(
      (b) => b.book.ISBN !== bookSelected.ISBN
    );
    availableList.set(newAvailableList);
    localStorage.setItem(
      "storedAvailableList",
      JSON.stringify(newAvailableList)
    );
  }

  onDestroy(() => {
    availableListUsubscribe();
    filtersUsubscribe();
  });
</script>

<Section sectionTitle="Libros Populares">
  <span data-testid="available-books-counter"
    >{filteredLibrary.length}
    {filteredLibrary.length > 1
      ? "libros disponibles"
      : "libro disponible"}</span
  >
  <hr />
  <article data-testid="available-list">
    {#each filteredLibrary as { book }}
      <BookCard on:click={() => handleClick(book)} {book} />
    {/each}
  </article>
</Section>
<Dialog
  bind:dialogEl
  book={bookSelected}
  onConfirm={handleAdd}
  onConfirmText="Agregar a lecturas"
/>

<style>
  article {
    display: grid;
    grid-template-columns: repeat(auto-fill, 270px);
    gap: 32px;
    padding-top: 22px;
    justify-content: center;
  }
</style>

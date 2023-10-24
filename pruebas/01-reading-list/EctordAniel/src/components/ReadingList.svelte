<script lang="ts">
  import { onDestroy } from "svelte";
  import { get } from "svelte/store";
  import Section from "./Section.svelte";
  import BookCard from "./BookCard.svelte";
  import Dialog from "./Dialog.svelte";
  import { availableList, readingList, filters } from "../stores/library";

  let dialogEl: HTMLDialogElement;
  let bookSelected: Book = null;
  let library: Library[] = [];
  let filteredLibrary: Library[] = [];

  const readingListUnsubscribe = readingList.subscribe((value) => {
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

  function handleRemove() {
    const newReadingList = library.filter(
      (b) => b.book.ISBN !== bookSelected.ISBN
    );
    readingList.set(newReadingList);
    localStorage.setItem("storedReadingList", JSON.stringify(newReadingList));

    const newAvailableList = [...get(availableList), { book: bookSelected }];
    availableList.set(newAvailableList);
    localStorage.setItem(
      "storedAvailableList",
      JSON.stringify(newAvailableList)
    );
  }

  onDestroy(() => {
    readingListUnsubscribe();
    filtersUsubscribe();
  });
</script>

{#if filteredLibrary.length > 0}
  <Section sectionTitle="Continuar leyendo">
    <span
      >{filteredLibrary.length}
      {filteredLibrary.length > 1 ? "libros" : "libro"}</span
    >
    <hr />
    <article data-testid="reading-list">
      {#each filteredLibrary as { book }}
        <BookCard {book} on:click={() => handleClick(book)} />
      {/each}
    </article>
  </Section>
  <Dialog
    bind:dialogEl
    book={bookSelected}
    onConfirm={handleRemove}
    onConfirmText="Quitar de lecturas"
  />
{/if}

<style>
  article {
    overflow-x: auto;
    padding: 22px 20px;
    display: flex;
    gap: 32px;
  }
</style>

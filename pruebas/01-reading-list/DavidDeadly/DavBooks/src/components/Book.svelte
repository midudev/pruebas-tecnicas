<script lang="ts">
  import { booksStore } from '$lib';

  export let book: IBook;
  export let isReadingList: boolean;
  export let bookAction: IBooks.BookAction;

  let isAvaileble = !$booksStore.readingList.includes(book.ISBN);
  let aliveStyle: boolean;
  let deadStyle: boolean;

  $: {
    isAvaileble = !$booksStore.readingList.includes(book.ISBN);

    aliveStyle = isAvaileble || isReadingList;
    deadStyle = !isReadingList && !isAvaileble;
  }
</script>

<button
  class:action-btn={aliveStyle}
  class:no-action={deadStyle}
  on:click={() => bookAction(book.ISBN)}
>
  <img src={book.cover} alt="{book.title} cover" />
  {#if !isReadingList}
    <div class="book-info">
      <span class="pages">{book.pages} pag.</span>
      <p class="synopsis">{book.synopsis}</p>
      <span class="year">{book.year}</span>
      <span class="genre">{book.genre}</span>
    </div>
  {/if}
</button>

<style>
  .book-info {
    color: var(--primary);
    position: relative;
    text-align: center;
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 250ms ease-in;
  }

  .book-info > * {
    position: absolute;
  }

  .synopsis,
  .year,
  .genre {
    left: 50%;
    transform: translateX(-50%);
  }

  .pages,
  .synopsis,
  .year,
  .genre {
    font-weight: bolder;
  }

  .year,
  .pages {
    font-size: 30px;
  }

  .synopsis,
  .genre {
    width: 100%;
    padding-inline: 10px;
  }

  .pages {
    right: 1%;
  }

  .year {
    top: 70%;
  }

  .synopsis {
    top: 25%;
    font-size: 18px;
  }

  .genre {
    bottom: 0;
    font-size: 25px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: 250ms ease;
    transition-property: filter, transform;
  }

  .action-btn,
  .no-action {
    border: none;
    border-radius: 15px;
    background-color: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  .action-btn:hover img {
    filter: blur(1px) contrast(30%);
    transform: scale(1.01);
  }

  .no-action img {
    filter: blur(1px) contrast(30%);
  }

  .action-btn:hover .book-info,
  .no-action:hover .book-info {
    opacity: 1;
  }
</style>

<script lang="ts">
  export let book: FreeBook;
  export let showInfo: boolean;
  export let bookAction: IBooks.BookAction;

  let isFree = true;

  $: {
    // When book free is not defined
    // means we're being render by the ReadingList
    isFree = book.free === undefined || book.free === true;
  }
</script>

<li class="book">
  <button class:add-btn={isFree} class:no-free={!isFree} on:click={() => bookAction(book.ISBN)}>
    <img src={book.cover} alt="{book.title} cover" />
    {#if showInfo}
      <div class="book-info">
        <span class="pages">{book.pages} pag.</span>
        <p class="synopsis">{book.synopsis}</p>
        <span class="year">{book.year}</span>
        <span class="genre">{book.genre}</span>
      </div>
    {/if}
  </button>
</li>

<style>
  .book {
    width: var(--booksWidth);
    position: relative;
    display: grid;
    align-content: center;
    margin: auto;
  }

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

  .add-btn,
  .no-free {
    border: none;
    border-radius: 15px;
    background-color: transparent;
  }

  .add-btn:hover {
    cursor: pointer;
  }

  .add-btn:hover img {
    filter: blur(1px) contrast(30%);
    transform: scale(1.01);
  }

  .no-free img {
    filter: blur(1px) contrast(30%);
  }

  .no-free:hover {
    cursor: default;
  }

  .add-btn:hover .book-info,
  .no-free:hover .book-info {
    opacity: 1;
  }
</style>

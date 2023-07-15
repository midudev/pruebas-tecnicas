<script lang="ts">
  import { readingList } from '$lib/reading.store';

  export let book: IBook;
  export let showInfo: boolean;
</script>

<li class="book">
  <button on:click={() => $readingList.add(book)}>
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
    position: relative;
    text-align: center;
    color: green;
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
    color: var(--primary);
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
    height: auto;
    border-radius: 15px;
    transition: filter, transform 250ms ease;
  }

  button:hover {
    cursor: pointer;
  }

  button:hover img {
    filter: blur(1px) contrast(30%);
    transform: scale(1.01);
  }

  button:hover .book-info {
    opacity: 1;
  }
</style>

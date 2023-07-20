<script lang="ts">
  import type { Book } from "$lib/types/Book";
  export let book: Book;
  export let addBookToWishList: Function;
</script>

<div class="container-book">
  <div class="book">
    <img class="cover" src={book.cover} alt={book.title} />
    <div class="info">
      <span class="title">{book.title}</span>
      <span class="year"> Año: {book.year}</span>
    </div>
  </div>
  <button class="add-to-read" on:click={() => addBookToWishList(book)}>
    Añadir a la lista
  </button>
</div>

<style>
  .container-book {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 200px;
  }

  .add-to-read {
    padding: 12px 24px;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .book {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 200px;
  }

  .book * {
    box-sizing: border-box;
  }

  .cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 317 / 475;
  }

  .info {
    position: absolute;
    bottom: 0;
    display: none;
    height: 40%;
    width: 100%;
    background-color: black;
    padding: 10px 12px;
    transition: display 1s ease-in;
  }

  .info .title {
    font-size: 20px;
    color: yellow;
    line-height: 1.1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .info .year {
    font-size: 14px;
    color: white;
  }

  .book:hover .info {
    display: flex;
    flex-direction: column;
  }
</style>

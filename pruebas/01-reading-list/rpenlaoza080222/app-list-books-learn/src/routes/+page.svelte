<script>
  import booksLibrary from "$lib/books.json";
  import Book from "../components/Book.svelte";
  let { library: books } = booksLibrary;
  const genres = books.map(({ book }) => {
    return book.genre;
  });
  const genresSet = new Set(genres);
</script>


<div class="container">
  <h1>Lista de libros</h1>
  <div class="container-books">
    <div class="book-list">
      {#each books as { book }, i}
        <Book {book} />
      {/each}
    </div>
    <div class="book-wish-read" />
  </div>
</div>

<style>

  .container-books{
    display: flex;
    gap: 20px
  }
  .book-wish-read {
    width: 30%;
    border: 1px solid red;
  }
  .book-list {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
    row-gap: 20px;
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

<script>
  import booksLibrary from "$lib/books.json";
  import Book from "../components/Book.svelte"; 
  let { library: books } = booksLibrary;
  
</script>

<h1>Lista de libros</h1>
<div class="container">
  {#each books as { book }, i}
    <Book {book} />
  {/each}
</div>

<style>
  h1 {
    text-align: center;
  }

  .container {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    
  }
</style>

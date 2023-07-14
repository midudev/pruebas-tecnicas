<script lang="ts">
  import Books from './Books.svelte';

  export let readingBooks: IBook[];
</script>

<section>
  <h3>Lista de lectura</h3>
  <aside>
    <Books books={readingBooks} showBooksInfo={false} booksWidth="200px" />
  </aside>
</section>

<style>
  section {
    width: 35%;
    position: fixed;
    right: 5%;
    inset-block: 20px;
  }

  aside {
    background-color: var(--secondary);
    padding: 20px;
    border-radius: 10px;
    height: 78vh;
    max-width: 550px;
    margin-inline: auto;
    box-shadow: var(--quaternary) 0px 0px 10px 0px;
    overflow: scroll;
    overflow-x: hidden;
  }

  h3 {
    text-align: center;
    color: var(--quaternary);
    font-family: 'Roboto Slab Variable', sans-serif;
    font-style: italic;
    font-weight: bolder;
    font-size: 3.5rem;
    margin-block: 15px;
  }
</style>

<script lang="ts">
  import Books from '../components/Books.svelte';
  import ReadingList from '../components/ReadingList.svelte';
  import DavBooksIcon from '../components/icons/DavBooksIcon.svelte';

  export let data: { books: IBook[] };
</script>

<nav>
  <div class="icon">
    <DavBooksIcon width="150px" />
  </div>

  <h1>
    N° Libros: {data.books.length}
  </h1>
  <div class="filters">
    <label for="pages">
      <span>Filtrar por páginas</span>
      <input id="pages" type="range" disabled />
    </label>
    <label for="genre">
      <span>Filtrar por géneros</span>

      <select id="genre" disabled>
        <option value="No options" selected>Sin opciones por ahora</option>
      </select>
    </label>
  </div>
</nav>
<main>
  <section>
    <Books books={data.books} />
  </section>
  <ReadingList />
</main>

<style>
  main {
    display: flex;
    justify-content: space-between;
    padding-block: 2rem;
  }

  nav,
  section {
    width: 60%;
  }

  nav {
    display: flex;
    height: 150px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    color: var(--quaternary);
  }

  .icon {
    position: absolute;
    top: 20px;
    left: 0;
  }

  .filters {
    display: flex;
    width: 50%;
    justify-content: space-between;
  }

  select {
    padding: 10px;
    border-radius: 15px;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }

  span {
    display: inline-block;
    margin-bottom: 10px;
  }
</style>

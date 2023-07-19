<script lang="ts">
  import AnimatedBooksTitle from './AnimatedBooksTitle.svelte';
  import Filters from './Filters.svelte';
  import DavBooksIcon from './icons/DavBooksIcon.svelte';

  export let numAvaileblesBooks: number;
</script>

<nav>
  <div class="icon">
    <DavBooksIcon width="100px" />
  </div>

  <AnimatedBooksTitle
    noun={{
      singular: 'Libro',
      plural: 'Libros',
    }}
    headerType="h1"
    numBooks={numAvaileblesBooks}
    booksTitle="Disponibles"
    noBooksTitle="No hay libros disponibles"
  />
  <Filters on:filteredBooks />
</nav>

<style>
  nav {
    width: 60%;
    display: flex;
    margin-block: 25px;
    height: 150px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    color: var(--quaternary);
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
</style>

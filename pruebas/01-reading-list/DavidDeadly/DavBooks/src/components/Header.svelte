<script lang="ts">
  import Filters from './Filters.svelte';
  import DavBooksIcon from './icons/DavBooksIcon.svelte';

  export let numAvaileblesBooks: number = 0;

  const plural = new Intl.PluralRules('es');
  let isOne: boolean = false;
  $: isOne = plural.select(numAvaileblesBooks) === 'one';
</script>

<nav>
  <div class="icon">
    <DavBooksIcon width="100px" />
  </div>

  <h1>
    {numAvaileblesBooks}
    {isOne ? 'Libro' : 'Libros'} Disponibles
  </h1>
  <Filters on:filteredBooks />
</nav>

<style>
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

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

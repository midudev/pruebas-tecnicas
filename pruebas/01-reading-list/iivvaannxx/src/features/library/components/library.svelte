<script lang='ts' context='module'>

  import Grid from './layouts/grid.svelte'
  import VerticalList from './layouts/vertical-list.svelte'

  import GridBook from './items/grid-book.svelte'
  import VerticalListBook from './items/vertical-list-book.svelte'

  import { library } from '../store'
  import { searchResults, showSearchResults } from '$features/search'
  import { filter, filters } from '$features/filter'

  /** @brief Defines the allowed layouts for the library. */
  type Layout = 'grid' | 'vertical-list'

  /** @brief Maps each layout type to it's layout and item components. */
  const layouts = {

    grid: {

      layout: Grid,
      item: GridBook
    },

    'vertical-list': {

      layout: VerticalList,
      item: VerticalListBook
    }
  }

</script>

<script lang='ts'>

  export let layout: Layout = 'vertical-list'

  $: layoutData = layouts[layout]
  $: books = $showSearchResults ? $searchResults : $library
  $: filteredBooks = filter(books, $filters)

</script>

<h2>{ books.length } libros disponibles</h2>

<svelte:component this={ layoutData.layout }>

  {#each filteredBooks as book (book.ISBN)}

    <li class='p-4'>
      <svelte:component this={ layoutData.item } bookData={ book } />
    </li>

  {/each}

</svelte:component>

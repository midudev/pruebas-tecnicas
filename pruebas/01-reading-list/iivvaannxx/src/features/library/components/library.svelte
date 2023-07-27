<script lang='ts' context='module'>

  import { fade } from 'svelte/transition'

  import Grid from './layouts/grid.svelte'
  import GridBook from './items/grid-book.svelte'
  import VerticalList from './layouts/vertical-list.svelte'
  import VerticalListBook from './items/vertical-list-book.svelte'

  import { currentList } from '$features/booklist'
  import { filter, filters } from '$features/filter'
  import { searchResults, showSearchResults } from '$features/search'

  import { PrimaryButton, SecondaryButton } from '$lib'
  import { LayoutGridIcon, LayoutListIcon } from '$lib/icons'

  import { library, currentLayout, setCurrentLayout } from '../store'

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

  $: layoutData = layouts[$currentLayout]

  // First pass: Search. Second pass: Filter. Third pass: Remove those in read list.
  $: books = $showSearchResults ? $searchResults : $library
  $: filteredBooks = filter(books as BookArray, $filters)
  $: finalBooks = filteredBooks.filter(book => !($currentList.books.includes(book)))

  function setGridLayout () {

    setCurrentLayout('grid')
  }

  function setListLayout () {

    setCurrentLayout('vertical-list')
  }

</script>

<header class='h-16 w-full px-16 flex items-center justify-between'>

  <h2 class='text-xl font-light'>
    Mostrando { finalBooks.length }/{ $library.length } libros disponibles
  </h2>

  <div>

    <svelte:component

      this={ $currentLayout === 'vertical-list' ? PrimaryButton : SecondaryButton }

      onClick={ setListLayout }
      extraClasses='aspect-square scale-75'
    >
      <LayoutListIcon class='scale-150' />
    </svelte:component>

    <svelte:component

      this={ $currentLayout === 'grid' ? PrimaryButton : SecondaryButton }

      onClick={ setGridLayout }
      extraClasses='aspect-square scale-75'
    >
      <LayoutGridIcon class='scale-150' />
    </svelte:component>

  </div>

</header>

<hr class='mx-16 mt-4' />

{#key $currentLayout}

  <section class='mx-20' in:fade={ { duration: 350, delay: 700 } } out:fade={ { duration: 350 } }>

    <svelte:component this={ layoutData.layout }>

      {#each finalBooks as book (book.ISBN)}
        <svelte:component this={ layoutData.item } bookData={ book } />
      {/each}

    </svelte:component>

  </section>

{/key}

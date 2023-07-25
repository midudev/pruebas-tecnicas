<script lang='ts' context='module'>

  import Book from '../layouts/items/grid-book.svelte'

  import Grid from "../layouts/grid.svelte"
  import VerticalList from "../layouts/vertical-list.svelte"
  import HorizontalList from "../layouts/horizontal-list.svelte"

  import { booksData } from '../data';
  import { LibraryLayout } from '../types';

  import GridBook from "../layouts/items/grid-book.svelte";
  import VerticalListBook from "../layouts/items/vertical-list-book.svelte";
  import HorizontalListBook from "../layouts/items/horizontal-list-book.svelte";

  // Extract the library information.
  const { library } = booksData

  const layouts = {

    [LibraryLayout.Grid]: Grid,
    [LibraryLayout.VerticalList]: VerticalList,
    [LibraryLayout.HorizontalList]: HorizontalList,
  }

  const items = {

    [LibraryLayout.Grid]: GridBook,
    [LibraryLayout.VerticalList]: VerticalListBook,
    [LibraryLayout.HorizontalList]: HorizontalListBook,
  }

</script>

<script lang='ts'>

  export let layout: LibraryLayout = LibraryLayout.VerticalList

  $: layoutComponent = layouts[layout]
  $: layoutItem = items[layout]

</script>

<h2>{library.length} libros disponibles</h2>


<svelte:component this={layoutComponent}>

  {#each library as book (book.ISBN)}

    <li class='p-4'>
      <svelte:component this={layoutItem} bookData={book} />
    </li>

  {/each}

</svelte:component>

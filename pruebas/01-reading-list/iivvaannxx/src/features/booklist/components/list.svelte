<script lang='ts' context='module'>

  import { SecondaryButton } from '$lib'
  import Book from '$features/library/components/items/grid-book.svelte'

  import {

    allListNames,
    currentListName,
    currentList,
    setCurrentList,
    clearList

  } from '../store'

  // The event fired when the list type select changes.
  type ChangeEvent = Event & {

    currentTarget: EventTarget & HTMLSelectElement
  }

</script>

<script lang='ts'>

  export let name: string
  $: books = $currentList.books

  // Changes the currently visible list.
  function changeCurrentList (event: ChangeEvent) {

    setCurrentList(event.currentTarget.value)
  }

  // Clears the current book list.
  function clearCurrentList () {

    clearList($currentListName)
  }

</script>

<article class='w-full h-full p-4 space-y-4 overflow-auto'>

  <header class=' h-20 bg-blue-100'>

    <select

      value={ $currentList.displayName }
      on:change={ changeCurrentList }
    >
      {#each $allListNames as listName}
        <option value={ listName }>{ listName }</option>
      {/each}

    </select>

    <SecondaryButton onClick={ clearCurrentList }>
      Clear
    </SecondaryButton>

  </header>

  <ul aria-label={ name } class='w-full space-y-4 bg-red-100'>

    {#each books as book (book.ISBN)}

      <li class='w-full'>
        <Book bookData={ book } />
      </li>

    {/each}

  </ul>

</article>

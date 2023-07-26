<script lang='ts' context='module'>

  import { dndzone } from 'svelte-dnd-action'
  import { flip } from 'svelte/animate'

  import { allListNames, currentListName, currentList, setCurrentList, clearList } from '../store';
  import Book from '$features/library/components/items/grid-book.svelte';
  import SecondaryButton from '$lib/buttons/secondary.svelte';

</script>

<script lang='ts'>


  export let name: string

  export let category = 'any'
  export let classList = ''
  export let animationDuration = 200
  export let disable = false

  $: books = $currentList.books

  /** @brief The options of the drop-zone. */
  $: options = {

    items: books,

    type: category,
    flipDurationMs: animationDuration,
    dragDisabled: disable,

    dropTargetStyle: { },
    dropTargetClasses: 'outline-dashed outline-2 outline-red-400 bg-red-100 bg-opacity-40'.split(' '),
  }

  function handleDndConsider(e: any) {

    console.log(e)
	}

	function handleDndFinalize(e: any) {

		console.log(e)
	}

</script>

<article class='w-full h-full p-4 space-y-4 overflow-auto'>

  <header class=' h-20 bg-blue-100'>

    <select value={$currentList.displayName} on:change={(event) => setCurrentList(event.currentTarget.value)}>

      {#each $allListNames as listName}
        <option value={listName}>{listName}</option>
      {/each}

    </select>

    <SecondaryButton onClick={() => clearList($currentListName)}>
      Clear
    </SecondaryButton>

  </header>

  <ul

    aria-label={name}
    class='w-full space-y-4 bg-red-100'

    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >

    {#each books as book (book.ISBN)}

      <li class='w-full'>
        <Book bookData={book} />
      </li>

    {/each}

  </ul>

</article>

<script lang='ts' context='module'>

  import { dndzone } from 'svelte-dnd-action'
  import { flip } from 'svelte/animate'

  import { lists, createList, deleteList } from '../store';
  import Book from '$features/library/layouts/items/grid-book.svelte';

  deleteList('test')
  createList('test', [])

</script>

<script lang='ts'>

  export let name: string

  export let category = 'any'
  export let classList = ''
  export let animationDuration = 200
  export let disable = false

/*   $: books = $toReadList.books
 */
  /** @brief The options of the drop-zone. */
  $: options = {

    items: [],

    type: category,
    flipDurationMs: animationDuration,
    dragDisabled: disable,

    dropTargetStyle: { },
    dropTargetClasses: 'outline-dashed outline-2 outline-red-400 bg-red-100 bg-opacity-40'.split(' '),
  }

  function handleDndConsider(e) {

    console.log(e)
	}

	function handleDndFinalize(e) {

		console.log(e)
	}

</script>

<section

  use:dndzone={options}

  aria-label={name}
  class='w-full h-full space-y-4'

  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}
>


    <!-- {#each books as book(book.ISBN)}

      <Book {...book} />

    {/each} -->


</section>

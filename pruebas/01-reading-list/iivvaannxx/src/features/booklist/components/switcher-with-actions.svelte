<script lang='ts' context='module'>

  import { TrashIcon } from '$lib/icons'
  import { deleteList, setCurrentList } from '../store'

</script>

<script lang='ts'>

  export let name: string

  // Sets the currently displayed list.
  function setCurrent () {

    setCurrentList(name)
  }

  // Deletes this list from the store.
  function handleDelete () {

    deleteList(name)
  }

</script>

<div class='w-full flex justify-between gap-4'>

  <button

    type='button'

    on:click={ setCurrent }
    class='relative inline-flex flex-grow items-center px-2 py-2 bg-white-200 hover:bg-gray-100 text-gray-800 text-base font-medium rounded-md'
  >
    <slot name='icon' />

    <span class='ml-4'>
      { name }
    </span>

  </button>

  <div class='flex gap-4'>

    <button

      type='button'
      class='relative inline-flex items-center justify-center scale-90 px-2 py-2 aspect-square border-2 border-primary-700 bg-white text-primary-700 hover:bg-primary-50 text-sm font-medium rounded-md'

      on:click={ handleDelete }
    >
      <TrashIcon class='scale-110' />

    </button>

  </div>

</div>

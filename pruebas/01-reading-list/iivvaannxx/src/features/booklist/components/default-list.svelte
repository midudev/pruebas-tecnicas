<script lang='ts' context='module'>

  import { setCurrentList } from '../state/actions'

</script>

<script lang='ts'>

  /** @brief The name of the list. */
  export let name: string

</script>

<button

  type='button'

  on:click={ () => { setCurrentList(name) } }
  class='relative inline-flex w-full items-center px-2 py-2 bg-white-200 hover:bg-gray-100 text-gray-800 text-base font-medium rounded-md'
>
  <slot name='icon' />

  <span class='ml-4'>
    { name }
  </span>

</button>

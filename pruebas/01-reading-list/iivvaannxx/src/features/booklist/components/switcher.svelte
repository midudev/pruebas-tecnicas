<script lang='ts' context='module'>

  import { setCurrentList } from '../store'

</script>

<script lang='ts'>

  export let name: string

  function handleClick () {

    setCurrentList(name)
  }

</script>

<button

  type='button'

  on:click={ handleClick }
  class='relative inline-flex w-full items-center px-2 py-2 bg-white-200 hover:bg-gray-100 text-gray-800 text-base font-medium rounded-md'
>
  <slot name='icon' />

  <span class='ml-4'>
    { name }
  </span>

</button>

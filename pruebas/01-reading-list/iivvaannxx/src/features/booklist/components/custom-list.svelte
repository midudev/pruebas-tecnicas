<script lang='ts' context='module'>

  import { EditIcon, TrashIcon } from '$lib/icons'
  import { renameList, deleteList, setCurrentList } from '../state/actions'

</script>

<script lang='ts'>

  export let name: string

  let nameInput: HTMLInputElement
  let originalName = name

  let editing = false

  function handleEdit () {

    originalName = nameInput.value
    nameInput.focus()

    editing = true
  }

  $: {

    const callback = (editing)
      ? () => { nameInput?.focus() }
      : () => { nameInput?.blur() }

    callback()
  }

</script>

<div class='w-full flex justify-between gap-4'>

  <button

    type='button'

    on:click={ () => { setCurrentList(name) } }
    class='relative inline-flex flex-grow items-center px-2 py-2 bg-white-200 hover:bg-gray-100 text-gray-800 text-base font-medium rounded-md'
  >
    <slot name='icon' />

    <input

      type='text'
      class='ml-4 w-full'
      disabled = { !(editing) }

      on:change = { () => { renameList(originalName, nameInput.value) } }
      on:blur = { () => { editing = false } }

      bind:this={ nameInput }
      bind:value={ name }
    />

  </button>

  <div class='flex gap-4'>

    <button

      type='button'
      class='relative inline-flex items-center justify-center scale-90 px-2 py-2 aspect-square border-2 border-primary-700 bg-white text-primary-700 hover:bg-primary-50 text-sm font-medium rounded-md'

      disabled = { editing }
      on:click={ handleEdit }
    >
      <EditIcon class='scale-110' />

    </button>

    <button

      type='button'
      class='relative inline-flex items-center justify-center scale-90 px-2 py-2 aspect-square border-2 border-primary-700 bg-white text-primary-700 hover:bg-primary-50 text-sm font-medium rounded-md'

      disabled = { editing }
      on:click={ () => { deleteList(name) } }
    >
      <TrashIcon class='scale-110' />

    </button>

  </div>

</div>

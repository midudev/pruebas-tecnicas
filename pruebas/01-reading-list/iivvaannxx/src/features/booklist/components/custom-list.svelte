<script lang='ts' context='module'>

  import { tick } from 'svelte'

  import {

    EditIcon,
    TrashIcon,
    BookmarksIcon

  } from '$lib/icons'

  import {

    renameList,
    deleteList,
    setCurrentList

  } from '../state/actions'

  import { toast } from '$lib/utils'
  import { MAX_CUSTOM_LIST_NAME_LENGTH, MIN_CUSTOM_LIST_NAME_LENGTH } from '../lib/constants'

</script>

<script lang='ts'>

  export let name: string

  let nameInput: HTMLInputElement
  let originalName = name

  let editing = false

  async function handleEdit () {

    editing = true
    await tick()

    originalName = nameInput.value
    nameInput.focus()
    nameInput.select()
  }

  async function setNewName () {

    try {

      renameList(originalName, nameInput.value)

    } catch (error: any) {

      toast.error(error, 2500)
      name = originalName

    } finally {

      nameInput.blur()
    }
  }
</script>

<div class='w-full flex justify-between gap-4'>

  {#if editing}

    <div class = 'flex items-center text-base font-medium rounded-md px-2'>

      <BookmarksIcon class='mr-4 flex-shrink-0' />
      <input

        minlength={ MIN_CUSTOM_LIST_NAME_LENGTH }
        maxlength={ MAX_CUSTOM_LIST_NAME_LENGTH }

        type='text'
        class='w-full flex-grow px-1 py-2 select-none'
        disabled = { !(editing) }

        on:change = { setNewName }
        on:blur = { () => { editing = false } }

        bind:this={ nameInput }
        bind:value={ name }
      />

    </div>

  {:else}

    <button

      type='button'

      on:click={ () => { setCurrentList(name) } }
      class='relative inline-flex flex-grow items-center px-2 py-2 bg-white-200 hover:bg-gray-100 text-base font-medium rounded-md'
    >
      <BookmarksIcon class='mr-4' />
      <span class='select-none'>{ name }</span>

    </button>

  {/if}

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

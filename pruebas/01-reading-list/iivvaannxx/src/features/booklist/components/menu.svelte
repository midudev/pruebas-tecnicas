<script lang='ts' context='module'>

  import ListSwitcher from './switcher.svelte'
  import ListSwitcherWithActions from './switcher-with-actions.svelte'

  import { PrimaryButton } from '$lib'
  import { BookmarksIcon } from '$lib/icons'

  import { LISTS_ICONS, defaultListNames } from '../feature'
  import { customListNames, createCustomList, customListsIndices } from '../store'

</script>

<script lang='ts'>

  $: listNames = [...$customListNames]
  $: listNames.sort()

  function handleCreateList () {

    createCustomList([])
  }

</script>

<div class='w-full p-8 space-y-3'>

  <h3 class='text-base font-bold uppercase'>Listas</h3>

  <div class='flex flex-col w-full gap-2 py-2'>

    {#each defaultListNames as defaultList}

      <ListSwitcher name={ defaultList }>

        <svelte:fragment slot='icon'>
          <svelte:component this={ LISTS_ICONS[defaultList] } />
        </svelte:fragment>

      </ListSwitcher>

    {/each}

    <hr class='mx-6 my-4' />

    {#each listNames as listName}

      <ListSwitcherWithActions name={ listName }>

        <svelte:fragment slot='icon'>
          <BookmarksIcon />
        </svelte:fragment>

      </ListSwitcherWithActions>

    {/each}

    <PrimaryButton

      disabled={ $customListsIndices.length === 0 }
      extraClasses='mt-4'
      onClick={ handleCreateList }
    >

      <span class='uppercase text-center w-full font-bold'>
        Crear Lista
      </span>

    </PrimaryButton>

  </div>

</div>

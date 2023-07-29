<script lang='ts' context='module'>

  import DefaultList from './default-list.svelte'
  import CustomList from './custom-list.svelte'

  import { PrimaryButton } from '$lib/components'
  import { BookmarksIcon } from '$lib/icons'

  import { LISTS_ICONS } from '../lib/constants'
  import { createCustomList } from '../state/actions'

  import {

    defaultLists,
    customLists,

    canCreateMoreCustomLists

  } from '../state/store'

</script>

<div class='w-full p-8 space-y-3'>

  <h3 class='text-base font-bold uppercase'>Listas</h3>

  <div class='flex flex-col w-full gap-2 py-2'>

    {#each $defaultLists as defaultList}

      <DefaultList name={ defaultList }>

        <svelte:fragment slot='icon'>
          <svelte:component this={ LISTS_ICONS[defaultList] } />
        </svelte:fragment>

      </DefaultList>

    {/each}

    <hr class='mx-6 my-4' />

    {#each $customLists as customList}

      <CustomList name={ customList }>

        <svelte:fragment slot='icon'>
          <BookmarksIcon class='scale-125' />
        </svelte:fragment>

      </CustomList>

    {/each}

    <PrimaryButton

      disabled={ !($canCreateMoreCustomLists) }
      extraClasses='mt-4'

      onClick={ () => { createCustomList([]) } }
    >

      <span class='uppercase text-center w-full font-bold'>
        Crear Lista
      </span>

    </PrimaryButton>

  </div>

</div>

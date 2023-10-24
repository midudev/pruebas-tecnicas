<script lang='ts' context='module'>

  import DefaultList from './default-list.svelte'
  import CustomList from './custom-list.svelte'
  import NoListsBookImage from '../assets/images/no-lists-book.webp'

  import { PrimaryButton } from '$lib/components'
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

    {#if $customLists.length === 0}

      <img class='self-center' src={ NoListsBookImage } width='200' alt='Not found'>

      <p class='text-center text-gray-500 mt-4'>
        <span class='block'>No tienes niguna lista personalizada.</span>
        <span class='block'>¡Crea una!</span>
      </p>

    {:else}

      {#each $customLists as customList(customList)}
        <CustomList name={ customList } />
      {/each}

    {/if}

    <PrimaryButton

      disabled={ !($canCreateMoreCustomLists) }
      extraClasses='mt-4'

      onClick={ () => { createCustomList([]) } }
    >

      <span class='uppercase text-center w-full font-bold'>
        { $canCreateMoreCustomLists ? 'Crear lista' : 'No puedes crear más listas' }
      </span>

    </PrimaryButton>

  </div>

</div>

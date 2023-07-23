<script lang="ts">
  import Header from './core/components/Header.svelte'
  import Library from './core/components/Library.svelte'
  import Modal from './core/components/modals/Modal.svelte'
  import ReadingList from './core/components/ReadingList.svelte'
  import { stateUseCase } from './core/state'
  import { setAppState } from './core/store/app-state-store'
  import { modalStore } from './core/store/modal-store'
  import { beforeUpdate, onMount } from 'svelte'

  let modal: any

  beforeUpdate(() => {
    stateUseCase.subscribe(setAppState)

    window.onstorage = function (event) {
      stateUseCase.updateState(JSON.parse(event.newValue))
    }
  })

  onMount(() => {
    modalStore.set(modal)
  })
</script>

<main
  class="relative flex flex-col h-full w-full bg-light font-subjectivity xl:flex-row"
>
  <Header />
  <Library />
  <ReadingList />
  <Modal bind:this={modal} />
</main>

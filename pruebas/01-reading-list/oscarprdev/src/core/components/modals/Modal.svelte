<script lang="ts">
  import { onMount } from 'svelte'
  import type { OpenModal } from '../types'

  let dialog: HTMLDialogElement
  let slot: any
  let props: any

  export const openModal = ({ component, content }: OpenModal) => {
    dialog.showModal()
    slot = component
    props = content
  }

  export const closeModal = () => {
    dialog.close()
    slot = null
    props = null
  }

  onMount(() => {
    dialog = document.getElementById('dialog') as HTMLDialogElement
  })
</script>

<dialog
  id="dialog"
  data-modal-target="modal"
  class="backdrop:absolute backdrop:top-0 backdrop:left-0 backdrop:bg-dark backdrop-blur-sm backdrop:w-full backdrop:h-full backdrop:grid backdrop:place-items-center backdrop:z-1 open:animate-fade-in open:backdrop:animate-fade-in"
>
  <svelte:component this={slot} {...props} {closeModal} />
</dialog>

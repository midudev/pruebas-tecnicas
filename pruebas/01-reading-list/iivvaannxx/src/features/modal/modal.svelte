<script lang='ts' context='module'>

  import { isOpen } from './store'
  import { CloseIcon } from '$assets/icons';

</script>

<script lang='ts'>

  /** @brief Whether to show the modal or not. */
  export let show = false
  let dialog: HTMLDialogElement

  $: {

    if (dialog) {

      if (show) { dialog.showModal() }
      else { dialog.close() }
    }
  }

  $: show = $isOpen

  /** @brief Hides the modal window. */
  function hide () {

    show = false
  }

</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog class='flex-col fixed w-1/3 h-1/2 inset-0 rounded-xl border-none backdrop:bg-black backdrop:bg-opacity-30 open:animate-zoom-in open:backdrop:animate-fade-in'

  bind:this={dialog}
  on:close={hide}
  on:keypress={(e) => { if (e.key === 'Escape') hide() }}

  on:click|self={hide}
  on:click|stopPropagation
>

  <div class='flex flex-col h-full w-full'>

    <header class='h-16 flex flex-row p-4 justify-between'>

      <div class='h-full flex items-center ml-4'>
        <slot name='header' />
      </div>

      <div class='h-full flex items-center mr-4'>

        <button tabindex="0" on:click={hide}>
          <CloseIcon />
        </button>

      </div>

    </header>

    <hr />

    <div class='flex-1 p-4'>
      <slot name='content'/>
    </div>

  </div>


</dialog>

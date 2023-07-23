<script lang='ts' context='module'>

  import { isOpen, title, close } from '../store'
  import Header from './header.svelte';

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

</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog class='fixed w-1/3 h-1/2 inset-0 rounded-xl border-none backdrop:bg-black backdrop:bg-opacity-30 open:animate-zoom-in open:backdrop:animate-fade-in'

  bind:this={dialog}
  on:close={close}
  on:keypress={(e) => { if (e.key === 'Escape') close() }}

  on:click|self={close}
  on:click|stopPropagation
>

  <div class='h-full w-full'>

    <Header title={$title} onShouldClose={close} />

    <hr />

    <div class='flex-1 p-4'>
      <slot />
    </div>

  </div>

</dialog>

<script lang='ts' context='module'>

  import { slide } from 'svelte/transition'
  import { cubicInOut } from 'svelte/easing'

  import Toggle from './toggle.svelte'

</script>

<script lang='ts'>

  /** @brief The text to include next to the toggle. */
  export let label = ''
  export let toggled = false

  /** @brief The classes applied to the slot wrapper. */
  export let slotClass: string
  export let onToggle = (_: boolean) => { }

</script>

<div { ...$$restProps }>

  <div class='flex justify-between items-center w-full select-none'>

    <div class='inline-flex items-center'>
      <slot name='icon' />
      <span>{ label }</span>
    </div>

    <Toggle bind:toggled { onToggle } />

  </div>

  {#if toggled}

    <div class={ slotClass } transition:slide={ { duration: 400, easing: cubicInOut } }>
      <slot />
    </div>

  {/if}

</div>

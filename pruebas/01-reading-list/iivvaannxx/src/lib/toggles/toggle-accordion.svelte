<script lang='ts' context='module'>

  import { slide } from 'svelte/transition'
  import Toggle from './toggle.svelte';

</script>

<script lang='ts'>

  /** @brief The text to include next to the toggle. */
  export let label = ''
  export let toggled = false

	/** @brief The classes applied to the slot wrapper. */
	export let slotClass: string | undefined = undefined
	export let onToggle = (_: boolean) => { }

</script>

<div {...$$restProps}>

	<div class="flex justify-between items-center w-full select-none">

    <span>{label}</span>
		<Toggle bind:toggled onToggle={onToggle} />

	</div>

	{#if toggled}

	  <div class={slotClass} transition:slide>
		  <slot />
	  </div>

	{/if}

</div>

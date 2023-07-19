<script lang="ts">
  import { classNamesJoin } from '$lib/utils/classNamesJoin'
  import type { HTMLButtonAttributes } from 'svelte/elements'

  const variants = {
    text: 'hover:[text-shadow:#FC0_1px_0_10px]',
    transparent:
      'backdrop-blur-[2px] bg-dark-v2/50 hover:bg-dark-v2/80 duration-300 rounded-md h-fit grid place-content-center outline-none',
    default:
      'rounded-md bg-dark-v1 shadow-md hover:shadow-black/30 hover:shadow-lg py-[0.4rem] px-[0.8rem] border-tertiary border duration-300',
    gradient:
      'rounded-md p-[1px] flex w-fit h-fit justify-center items-center after:absolute after:bg-gradient-to-l after:from-secondary after:to-primary after:w-full after:rounded after:h-full after:bottom-0 after:left-0 after:opacity-0 after:duration-300 after:z-0 relative w-fit hover:after:opacity-100 shadow-md border-[1px] border-tertiary bg-dark-v1 hover:shadow-primary/10 duration-300'
  }

  export let variant: keyof typeof variants = 'default'

  export let props = {} as HTMLButtonAttributes

  let className = ''

  export { className as class }

  const classButton = classNamesJoin(className, variants[variant])
</script>

{#if variant.startsWith('gradient')}
  <button class={classButton} {...props} on:click>
    <span class="z-[1] bg-dark-v1 h-full w-full rounded py-[.4em] px-[.8em]">
      <slot />
    </span>
  </button>
{:else}
  <button class={classButton} {...props} on:click>
    <slot><!-- optional fallback --></slot>
  </button>
{/if}

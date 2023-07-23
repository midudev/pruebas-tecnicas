<script lang='ts' context='module'>

  import { CloseIcon } from '$assets/icons'
  import animatedDetails from 'svelte-animated-details'

  /** @brief The props of the Accordion component. */
  export interface Props {

    title: string

    open?: boolean
    contentClass?: string
  }

</script>

<script lang='ts'>

  export let {

    title,

    open = false,
    contentClass = ''

  } = { } as Props

</script>

<details

  bind:open use:animatedDetails={{ duration: 400 }}
  class='space-y-3 overflow-hidden'
>

  <summary class='flex items-center rounded-xl px-4 py-2 justify-between select-none transition-colors duration-200 hover:cursor-pointer hover:bg-gray-200 details-marker:hidden'>

    <span class='inline'>{title}</span>

    <span class='transition-transform duration-300 scale-75 {open ? 'rotate-0': 'rotate-135'}'>
      <CloseIcon />
    </span>

  </summary>

  <div class={contentClass}>
    <slot />
  </div>

  <hr class='mx-2 border-t-2 border-gray-300' />

</details>

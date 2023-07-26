<script lang='ts'>

  /** @brief Whether to disable the button or not. */
  export let disabled: boolean = false
  export let extraClasses: string = ''

  export let onClick: () => void = () => { }

</script>

<button

  type='button'
  { disabled }

  on:click={ onClick }
  class='text-white bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200 disabled:text-primary-700/40 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center { extraClasses }'
>

  <slot />

</button>

<script lang='ts'>

  /** @brief Whether to disable the button or not. */
  export let disabled: boolean = false
  export let extraClasses: string = ''

  export let onClick: () => void = () => { }

</script>

<button

  type='button'
  class='bg-white border-2 border-primary-700 text-primary-700 transition hover:bg-primary-50 active:bg-primary-100 disabled:hover:bg-white disabled:border-primary-700/40 disabled:text-primary-700/40 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center {extraClasses}'

  on:click={onClick}
  disabled={disabled}
>

  <slot />

</button>

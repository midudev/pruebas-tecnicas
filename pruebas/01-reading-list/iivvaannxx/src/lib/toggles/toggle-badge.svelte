<script lang='ts' context='module'>

  /** @brief Event fired when the toggle state changes. */
  export type ToggleEventHandler = (toggled: boolean) => void

</script>

<script lang='ts'>

  export let text: string
  export let toggled = false

  // Callback called whenewer the toggle is clicked.
  export let onToggle: ToggleEventHandler = (_) => { }

  $: conditionalClasses = toggled ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-300'

</script>

<label>

  <span
    class='text-center text-xs py-1.5 px-3 rounded-md capitalize transition select-none hover:cursor-pointer {conditionalClasses}'
  >{text}</span>

  <input

    class='hidden'
    type='checkbox'

    bind:checked={toggled}
    on:change={() => onToggle(toggled)}
  />

</label>

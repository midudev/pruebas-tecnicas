<script lang='ts' context='module'>

  /** @brief The props of the toggle. */
  export interface Props {

    text: string
    active?: boolean

    onToggle?: (active: boolean) => void
  }

</script>

<script lang='ts'>

  // Destructure and export all the properties of the Toggle.
  export let {

    text,

    active = false,
    onToggle = (_) => { }

  } = { } as Props

</script>

<label>

  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs capitalize transition-colors duration-300 select-none font-medium hover:cursor-pointer { active ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-300' }">{text}</span>
  <input bind:checked={active} on:change={() => onToggle(active)} type='checkbox' class='hidden' />

</label>

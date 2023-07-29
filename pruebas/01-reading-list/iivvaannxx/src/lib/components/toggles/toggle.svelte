<script lang='ts'>

  /** @brief The text to include next to the toggle. */
  export let label = ''
  export let toggled = false

  export let onToggle = (_: boolean) => {}

</script>

<label class='relative inline-flex items-center cursor-pointer'>

  <input

    type='checkbox'
    class='sr-only peer'

    bind:checked={ toggled }
    on:change={ () => { onToggle(toggled) } }
  />

  <div class='w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-empty after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600' />
  <span class='ml-3 text-sm font-medium text-gray-900'>{ label }</span>

</label>

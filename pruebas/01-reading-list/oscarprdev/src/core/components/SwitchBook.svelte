<script>
  import { CheckCircleIcon, CircleIcon, LoaderIcon } from 'svelte-feather-icons'

  let isDone = false

  const toggleStatus = () => {
    isDone = !isDone
  }
</script>

<label class="flex items-center">
  <input
    type="checkbox"
    checked={isDone}
    on:change={toggleStatus}
    class="hidden"
  />
  <span
    class="cursor-pointer relative inline-block w-12 h-8 rounded-full bg-switch transition-colors duration-300 ease-in-out"
  >
    <span
      class="absolute grid place-items-center top-1 left-1 w-6 h-6 rounded-full shadow-md transform translate-x-0 transition-transform duration-300 ease-in-out {isDone
        ? 'translate-x-4 bg-done'
        : 'bg-light'}"
    >
      {#if isDone}
        <CheckCircleIcon size="16" class="text-light text-center" />
      {/if}
    </span>
  </span>
  <span class="ml-3 text-sm font-medium {isDone ? 'text-done' : ''}"
    >{isDone ? 'Completado!' : 'Leyendo.. '}</span
  >
</label>

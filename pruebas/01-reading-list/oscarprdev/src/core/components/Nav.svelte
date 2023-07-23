<script>
  import { HomeIcon, BookOpenIcon, AwardIcon } from 'svelte-feather-icons'
  import { asideState } from '../store/aside-store'
  import { derived } from 'svelte/store'

  let homeSelected = derived(asideState, ($asideState) => !$asideState.isOpen)

  const readingListSelected = derived(
    asideState,
    ($asideState) => $asideState.isOpen
  )
</script>

<nav
  class="flex justify-center items-center gap-3 w-full xl:border-solid xl:border-r-nav xl:flex-col xl:h-5/6 xl:gap-10 xl:border-r-2"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <button
    class="cursor-pointer grid place-items-center w-14 h-14 rounded-full transition-bg-nav duration-500 {$homeSelected
      ? 'bg-nav'
      : ''}"
    on:click={() =>
      asideState.update(() => ({
        isOpen: false,
      }))}
  >
    <HomeIcon size="32" class={$homeSelected ? 'text-light' : 'text-icons'} />
  </button>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <button
    class="cursor-pointer grid place-items-center w-14 h-14 rounded-full transition-bg-nav duration-500 {$readingListSelected
      ? 'bg-nav'
      : ''}"
    on:click={() =>
      asideState.update(() => ({
        isOpen: true,
      }))}
  >
    <BookOpenIcon
      size="32"
      class={$readingListSelected ? 'text-light' : 'text-icons'}
    />
  </button>
</nav>

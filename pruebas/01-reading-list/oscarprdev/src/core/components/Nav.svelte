<script>
  import { HomeIcon, BookOpenIcon, ListIcon } from 'svelte-feather-icons'
  import { asideState } from '../store/aside-store'
  import { derived } from 'svelte/store'

  let homeSelected = derived(
    asideState,
    ($asideState) =>
      !$asideState.topBooksListIsOpen && !$asideState.readingListIsOpen
  )

  const readingListSelected = derived(
    asideState,
    ($asideState) => $asideState.readingListIsOpen
  )

  const topBooksListSelected = derived(
    asideState,
    ($asideState) => $asideState.topBooksListIsOpen
  )
</script>

<nav
  class="flex flex-col justify-center items-center gap-20 w-full h-5/6 border-solid border-r-2 border-r-nav"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="cursor-pointer grid place-items-center w-14 h-14 rounded-full transition-bg-nav duration-500 {$homeSelected
      ? 'bg-nav'
      : ''}"
    on:click={() =>
      asideState.update(() => ({
        readingListIsOpen: false,
        topBooksListIsOpen: false,
      }))}
  >
    <HomeIcon size="32" class={$homeSelected ? 'text-light' : 'text-icons'} />
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="cursor-pointer grid place-items-center w-14 h-14 rounded-full transition-bg-nav duration-500 {$readingListSelected
      ? 'bg-nav'
      : ''}"
    on:click={() =>
      asideState.update(() => ({
        readingListIsOpen: true,
        topBooksListIsOpen: false,
      }))}
  >
    <BookOpenIcon
      size="32"
      class={$readingListSelected ? 'text-light' : 'text-icons'}
    />
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="cursor-pointer grid place-items-center w-14 h-14 rounded-full transition-bg-nav duration-500 {$topBooksListSelected
      ? 'bg-nav'
      : ''}"
    on:click={() =>
      asideState.update(() => ({
        readingListIsOpen: false,
        topBooksListIsOpen: true,
      }))}
  >
    <ListIcon
      size="32"
      class={$topBooksListSelected ? 'text-light' : 'text-icons'}
    />
  </div>
</nav>

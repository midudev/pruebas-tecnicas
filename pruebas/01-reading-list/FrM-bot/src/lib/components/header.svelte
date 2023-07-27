<script>
  import { LocalRotes } from '$lib/utils/routes'
  import InputSearch from './InputSearch.svelte'
  import BookmarkMenu from './bookmarkMenu.svelte'
  import Link from './link.svelte'
</script>

<header class={'sticky top-0 z-20 p-2 duration-200 main-header'} id="main-header">
  <nav
    class="w-full flex justify-between items-center z-20 sm:gap-2 gap-2 lg:max-w-[90vw] xl:max-w-screen-content max-w-[95vw] m-auto"
  >
    <Link href={LocalRotes.home}>Bookie</Link>
    <ul class="flex gap-2 items-center">
      <li class="flex place-content-center">
        <InputSearch />
      </li>
      <li class="flex place-content-center">
        <BookmarkMenu />
      </li>
    </ul>
  </nav>
</header>

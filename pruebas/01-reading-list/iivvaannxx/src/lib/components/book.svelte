<script lang='ts' context='module'>

  import type { Book } from '$app/types'

</script>

<script lang='ts'>

  // Export all the properties of the Book type.
  export let {

    title, pages, genre,
    cover, synopsis, year,
    ISBN, author

  } = { } as Book

</script>

<div class="relative flex flex-col w-full aspect-cover shadow-sm rounded-xl">

  <img class="w-full h-full rounded-xl" src={cover} alt={title} />

  <div class='absolute flex items-end p-4 h-full w-full bottom-0 bg-black rounded-xl bg-opacity-0 hover:bg-opacity-40 transition duration-200'>
    <h4 class='text-white text-base font-bold uppercase'>{title}</h4>
  </div>

</div>

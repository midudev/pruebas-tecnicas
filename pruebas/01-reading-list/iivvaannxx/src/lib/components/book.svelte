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

<div class='p-6 text-base rounded-2xl text-gray-900 bg-red-400 max-w-xs flex justify-center items-center gap-4'>

  <img class='w-60 aspect-cover' src={cover} alt={title} title={title} />

  <h4 class='text-center font-bold text-lg'>{title}</h4>
  <h6 class='font-normal uppercase'>{author.name} ({year})</h6>

</div>

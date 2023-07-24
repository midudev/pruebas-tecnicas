<script lang='ts' context='module'>

  import type { Author } from '$types'
  import { InfoIcon } from '$assets/icons'

</script>

<script lang='ts'>

  // Export all the properties of the Book type.
  export let title: string
  export let pages: number
  export let genre: string
  export let cover: string
  export let synopsis: string
  export let year: number
  export let ISBN: string
  export let author: Author

</script>

<div class="relative flex flex-col w-full aspect-cover shadow-sm rounded-xl group">

  <img class="w-full h-full rounded-xl" src={cover} alt={title} />

  <div class='absolute h-full w-full'>
    <div class='h-full w-full bg-black rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-40'></div>
  </div>

  <div class='absolute flex items-center justify-center h-full w-full'>

    <button class='w-10 h-10 rounded-full flex items-center justify-center  transition-all duration-300 bg-white opacity-0 group-hover:opacity-100 hover:bg-black hover:text-white'>
      <InfoIcon />
    </button>

  </div>

</div>

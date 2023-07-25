<script lang='ts' context='module'>

import PrimaryButton from '$lib/buttons/primary.svelte'
import SecondaryButton from '$lib/buttons/secondary.svelte'
  import type { Book } from '$types'

  import { addBook, currentListName } from '$features/booklist';
  import { BookmarkIcon, InfoIcon } from '$assets/icons'

</script>

<script lang='ts'>

  export let bookData: Book

</script>

<article class='flex space-x-8 p-4'>

  <img class="w-44 aspect-cover rounded-xl" src={bookData.cover} alt={bookData.title} />

  <div class='flex-grow flex flex-col px-4 gap-2'>

    <h4 class='text-orange-400 font-bold text-2xl'>{bookData.title}</h4>
    <h6 class='uppercase text-base font-light mb-4'>{bookData.author.name}</h6>

    <p class='text-base'>{bookData.synopsis}</p>
    <p class='text-base'>Genre(s): <span class='capitalize'>{bookData.genre}</span></p>

  </div>

  <div class='w-60 bg-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-8'>

    <PrimaryButton onClick={() => addBook($currentListName, bookData)} extraClasses='w-3/4 h-12'>

      <span class='mr-4'>
        <BookmarkIcon />
      </span>

      <span class='text-lg flex-grow text-center uppercase'>Añadir</span>

    </PrimaryButton>

    <SecondaryButton extraClasses='w-3/4 h-12'>

      <span class='mr-4'>
        <InfoIcon />
      </span>

      <span class='text-base flex-grow text-center uppercase'>Detalles</span>

    </SecondaryButton>

  </div>

</article>

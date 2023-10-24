<script lang='ts' context='module'>

  import { PrimaryButton } from '$lib/components'
  import { addBook, currentListName } from '$features/booklist'

</script>

<script lang='ts'>

  /** @brief The exposed data of the book. */
  export let bookData: Book

</script>

<article class='relative flex flex-col w-80 aspect-cover rounded-xl items-center'>

  <div class='w-full h-full relative group duration-300'>

    <img class='w-full h-full rounded-xl transition duration-300 group-hover:cursor-pointer group-hover:grayscale group-hover:brightness-75' src={ bookData.cover } alt={ bookData.title } />

    <div class='flex opacity-0 w-[12rem] max-w-[15rem] min-w-[10rem] absolute transition duration-300 top-1/2 left-1/2 justify-center items-center group-hover:opacity-100 -translate-y-1/2 -translate-x-1/2'>

      <PrimaryButton onClick={ () => { addBook($currentListName, bookData) } } extraClasses='w-3/4 h-12'>
        <span class='text-lg flex-grow text-center uppercase'>Añadir</span>
      </PrimaryButton>

    </div>

  </div>

  <h4 class='text-primary-500 font-bold text-lg text-center mt-6 truncate'>{ bookData.title }</h4>
  <h6 class='uppercase text-base font-normal text-center mt-1'>{ bookData.author.name }</h6>

</article>

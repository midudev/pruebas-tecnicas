<script lang='ts' context='module'>

  import { PrimaryButton } from '$lib'
  import { addBook, currentListName } from '$features/booklist'

</script>

<script lang='ts'>

  /** @brief The exposed data of the book. */
  export let bookData: Book

</script>

<li class='p-4'>

  <article class='flex space-x-8 p-4'>

    <img class='w-44 flex-shrink-0 h-64 rounded-xl' src={ bookData.cover } alt={ bookData.title } />

    <div class='flex-grow flex flex-col px-4 gap-2'>

      <h4 class='text-primary-500 font-bold text-2xl'>{ bookData.title }</h4>
      <h6 class='uppercase text-base font-normal mb-4'>{ bookData.author.name }</h6>

      <p class='text-base font-light'>{ bookData.synopsis }</p>
      <div class='flex flex-grow'></div>

      <p class='text-base font-semibold text-primary-400 py-2'>
        <span class='block'>Género: <span class='capitalize text-sm text-black font-light'>{ bookData.genre }</span></span>
        <span class='block'>Año: <span class='capitalize text-sm text-black font-light'>{ bookData.year }</span></span>
        <span class='block'>ISBN: <span class='capitalize text-sm text-black font-light'>{ bookData.ISBN }</span></span>
      </p>

    </div>

    <div class='w-[12rem] max-w-[15rem] min-w-[10rem] flex items-center'>

      <PrimaryButton onClick={ () => { addBook($currentListName, bookData) } } extraClasses='w-3/4 h-12'>
        <span class='text-lg flex-grow text-center uppercase'>Añadir</span>
      </PrimaryButton>

    </div>

  </article>

</li>

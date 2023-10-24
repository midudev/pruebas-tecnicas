<script lang='ts' context='module'>

  import { BookmarksIcon } from '$lib/icons'
  import { DeleteButton, SecondaryButton } from '$lib/components'

  import { LISTS_ICONS } from '../lib/constants'
  import { clearList, removeBook } from '../state/actions'
  import { currentListName, currentList } from '../state/store'

  import EmptyListBook from '../assets/images/empty-list-book.webp'

</script>

<script lang='ts'>

  $: books = $currentList.books
  $: totalBooks = (books.length === 1)
    ? '1 libro'
    : `${books.length} libros`

  // The icon of the current list.
  $: icon = ($currentListName in LISTS_ICONS)
    ? LISTS_ICONS[$currentListName]
    : BookmarksIcon

  // Clears the current book list.
  function clearCurrentList () {

    clearList($currentListName)
  }

</script>

<article class='w-full h-full flex flex-col p-8 space-y-8 overflow-auto'>

  <header class='w-full flex flex-col px-10 items-center gap-4'>

    <h3 class='text-2xl font-semibold text-primary-500 text-center inline-flex whitespace-nowrap'>
      <svelte:component class='mr-4' this={ icon } />
      { $currentListName }
    </h3>

    <h5 class='text-lg font-bold uppercase mb-4'>{ totalBooks } </h5>

    <SecondaryButton extraClasses='w-2/3 scale-110 uppercase font-bold' onClick={ clearCurrentList }>
      Limpiar
    </SecondaryButton>

  </header>

  <hr class='mx-6 my-4' />

  {#if books.length === 0}

    <div class='w-full flex  flex-col flex-grow'>

      <img class='self-center' src={ EmptyListBook } width='200' alt='Lista vacía'>

      <p class='text-center text-gray-500 mt-4'>
        <span class='block'>No has añadido ningún libro.</span>
        <span class='block'>¿A qué estas esperando?</span>
      </p>

    </div>

  {:else}

    <ul class='w-full flex-grow relative'>

      {#each books as book (book.ISBN)}

        <li class='relative flex flex-col w-80 aspect-cover rounded-xl items-center scale-90'>

          <div class='w-full h-full relative group duration-300'>

            <img class='w-full h-full rounded-xl transition duration-300 group-hover:cursor-pointer group-hover:grayscale group-hover:brightness-75' src={ book.cover } alt={ book.title } />

            <div class='flex opacity-0 w-[12rem] max-w-[15rem] min-w-[10rem] absolute transition duration-300 top-1/2 left-1/2 justify-center items-center group-hover:opacity-100 -translate-y-1/2 -translate-x-1/2'>

              <DeleteButton onClick={ () => { removeBook($currentListName, book.ISBN) } } />

            </div>

          </div>

        </li>

      {/each}

    </ul>

  {/if}

</article>

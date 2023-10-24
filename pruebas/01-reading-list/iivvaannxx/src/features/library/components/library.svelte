<script lang='ts' context='module'>

  import { fade } from 'svelte/transition'
  import NotFoundBookImage from '../assets/images/not-found-book.webp'

  import Header from './header.svelte'
  import SwitchItem from './switchers/item.svelte'
  import SwitchLayout from './switchers/layout.svelte'

  import { currentList } from '$features/booklist'
  import { filter, filters } from '$features/filter'
  import { shouldSearch, performSearch, searchQuery } from '$features/search'

  import { library, currentLayout } from '../state/store'

</script>

<script lang='ts'>

  // First pass: Search. Second pass: Filter. Third pass: Remove those in read list.
  $: books = $shouldSearch ? performSearch($searchQuery) : $library
  $: filteredBooks = filter(books as BookArray, $filters)
  $: finalBooks = filteredBooks.filter(book => {

    return !($currentList.books.some(({ ISBN }) => ISBN === book.ISBN))
  })

</script>

<Header>
  Mostrando { finalBooks.length }/{ $library.length } libros disponibles
</Header>

{#if finalBooks.length === 0}

  <section class='mx-20 my-20 flex flex-col justify-center items-center'>
    <img src={ NotFoundBookImage } width='600' alt='Not found'>
    <h5 class='font-bold text-2xl text-gray-400 mt-4'>
      No tengo más libros para ofrecerte...
    </h5>
  </section>

{:else}

  {#key $currentLayout}

    <section class='mx-20' in:fade={ { duration: 350, delay: 700 } } out:fade={ { duration: 350 } }>

      <SwitchLayout type={ $currentLayout }>

        {#each finalBooks as book (book.ISBN)}
          <SwitchItem type={ $currentLayout } bookData={ book } />
        {/each}

      </SwitchLayout>

    </section>

  {/key}

{/if}

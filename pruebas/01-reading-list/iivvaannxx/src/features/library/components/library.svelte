<script lang='ts' context='module'>

  import { fade } from 'svelte/transition'

  import Header from './header.svelte'
  import SwitchItem from './switchers/item.svelte'
  import SwitchLayout from './switchers/layout.svelte'

  import { filter, filters } from '$features/filter'
  import { shouldSearch, performSearch, searchQuery } from '$features/search'

  import { library, currentLayout } from '../state/store'

</script>

<script lang='ts'>

  // First pass: Search. Second pass: Filter. Third pass: Remove those in read list.
  $: books = $shouldSearch ? performSearch($searchQuery) : $library
  $: filteredBooks = filter(books as BookArray, $filters)

</script>

<Header>
  Mostrando { filteredBooks.length }/{ $library.length } libros disponibles
</Header>

{#key $currentLayout}

  <section class='mx-20' in:fade={ { duration: 350, delay: 700 } } out:fade={ { duration: 350 } }>

    <SwitchLayout type={ $currentLayout }>

      {#each filteredBooks as book (book.ISBN)}
        <SwitchItem type={ $currentLayout } bookData={ book } />
      {/each}

    </SwitchLayout>

  </section>

{/key}

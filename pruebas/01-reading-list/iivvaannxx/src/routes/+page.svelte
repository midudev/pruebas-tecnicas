<script lang='ts' context='module'>

  import { fade } from 'svelte/transition'

  import { Library } from '$features/library'
  import { FilterMenu } from '$features/filter'
  import {

    BookList,
    BookListMenu,
    initializeBookListFeature

  } from '$features/booklist'

  // Initialize at the very start.
  initializeBookListFeature()

</script>

<aside class='sticky top-header w-sidebar h-sidebar col-start-1 border-r-2 overflow-y-auto'>

  <BookListMenu />
  <hr class='mx-6 -my-2 border-t-2' />
  <FilterMenu />

</aside>

<section class='col-start-2 overflow-y-auto p-6' in:fade>
  <Library />
</section>

<aside class='sticky top-header w-sidebar h-sidebar col-start-3 border-l-2'>
  <!--   <BookList />
 --></aside>

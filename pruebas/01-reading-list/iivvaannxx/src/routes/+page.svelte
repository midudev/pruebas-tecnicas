<script lang='ts' context='module'>

  import '../app.css'

  import { Library } from '$features/library'
  import { FilterMenu } from '$features/filter'
  import { SearchBar } from '$features/search'
  import { BookList, DEFAULT_LISTS } from '$features/booklist'

</script>

<header class='sticky top-0 row-start-1 w-full h-header bg-white z-10 border-b-2 p-4 grid grid-cols-3 items-center'
>
  <div>Logo</div>

  <div class="">
    <SearchBar />
  </div>

  <div class='justify-self-end'>Links</div>

</header>

<main class='grid grid-cols-main row-start-2 w-full'>

  <aside class='sticky top-header w-sidebar h-sidebar col-start-1 border-r-2'>
    <FilterMenu />
  </aside>

  <section class='col-start-2 overflow-y-auto p-6'>
    <Library />
  </section>

  <aside class='sticky top-header w-sidebar h-sidebar col-start-3 border-l-2'>
    <BookList name={ DEFAULT_LISTS.TO_READ } />
  </aside>

</main>

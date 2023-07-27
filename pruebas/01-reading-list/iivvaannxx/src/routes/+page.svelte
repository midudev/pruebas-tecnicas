<script lang='ts' context='module'>

  import '../app.css'

  import { GithubIcon } from '$lib/icons'

  import { Library } from '$features/library'
  import { FilterMenu } from '$features/filter'
  import { SearchBar } from '$features/search'
  import {

    BookList,
    BookListMenu,

    DEFAULT_LISTS,
    initializeBookListFeature

  } from '$features/booklist'

  // Initialize at the very start.
  initializeBookListFeature()

</script>

<header class='sticky top-0 row-start-1 w-full h-header bg-white z-10 border-b-2 p-4 grid grid-cols-3 items-center'
>
  <h1 class='ml-8 text-2xl'>

    <span class='font-regular'>
      good<span class='font-semibold text-primary-600'>reads</span>
    </span>

  </h1>

  <div class="">
    <SearchBar />
  </div>

  <div class='justify-self-end p-4'>

    <a
      target='_blank'
      rel='noopener noreferrer'
      title='See the code on GitHub'

      class='text-3xl text-black transition duration-200 hover:text-primary-500'
      href='https://github.com/iivvaannxx/pruebas-tecnicas/tree/main/pruebas/01-reading-list/iivvaannxx'
    >
      <GithubIcon />

    </a>

  </div>

</header>

<main class='grid grid-cols-main row-start-2 w-full'>

  <aside class='sticky top-header w-sidebar h-sidebar col-start-1 border-r-2 overflow-y-auto'>

    <BookListMenu />
    <hr class='mx-6 -my-2 border-t-2' />
    <FilterMenu />

  </aside>

  <section class='col-start-2 overflow-y-auto p-6'>
    <Library />
  </section>

  <aside class='sticky top-header w-sidebar h-sidebar col-start-3 border-l-2'>
    <BookList name={ DEFAULT_LISTS.TO_READ } />
  </aside>

</main>

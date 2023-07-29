<script lang='ts' context='module'>

  import '../app.css'
  import debounce from 'just-debounce-it'

  import { GithubIcon } from '$lib/icons'
  import { SearchBar, setSearchQuery } from '$features/search'

</script>

<header class='sticky top-0 row-start-1 w-full h-header bg-white z-10 border-b-2 p-4 grid grid-cols-3 items-center'>

  <h1 class='ml-8 text-2xl'>

    <span class='font-regular'>
      good<span class='font-semibold text-primary-600'>reads</span>
    </span>

  </h1>

  <div class="">
    <SearchBar onInput={ debounce(setSearchQuery, 200) } />
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

  <slot />

</main>

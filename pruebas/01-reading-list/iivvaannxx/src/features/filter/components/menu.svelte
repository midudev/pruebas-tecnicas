<script lang='ts' context='module'>

  import GenreFilter from './filters/genre.svelte'
  import PagesFilter from './filters/pages.svelte'

</script>

<div class='w-full p-8 space-y-6'>

  <h3 class='text-base font-bold uppercase'>Filtros</h3>

  <div class='flex flex-col gap-6 py-2'>

    <GenreFilter />
    <hr class='mx-6 my-4' />
    <PagesFilter />

  </div>

</div>

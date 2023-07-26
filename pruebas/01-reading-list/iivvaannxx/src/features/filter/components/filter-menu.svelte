<script lang='ts' context='module'>

  import GenreFilter from "./genre-filter.svelte";
  import PagesFilter from "./pages-filter.svelte";

</script>

<div class='w-full h-full p-4 space-y-6'>

  <h3>Filtros</h3>

  <div class='flex flex-col gap-10 pl-4 py-2'>

    <GenreFilter />
    <PagesFilter />

  </div>

</div>

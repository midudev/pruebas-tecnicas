<script lang="ts">
  import GenreFilter from '../filters/GenreFilter.svelte'
  import InputFilter from '../filters/InputFilter.svelte'
  import PagesFilter from '../filters/PagesFilter.svelte'
</script>

<section
  class="relative flex flex-col items-center gap-4 mt-2 xl:items-center xl:flex-row xl:border-nav xl:border-2 xl:py-2 xl:px-10 xl:w-fit rounded-xl xl:mt-4"
>
  <h2
    class="hidden xl:absolute xl:top-[-10px] xl:left-5 xl:block xl:bg-light xl:px-3"
  >
    Filtros
  </h2>
  <InputFilter />
  <div class="flex gap-4 items-center justify-center">
    <GenreFilter />
    <PagesFilter />
  </div>
</section>

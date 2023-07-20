<script lang="ts">
  import GenreFilter from '../filters/GenreFilter.svelte'
  import InputFilter from '../filters/InputFilter.svelte'
  import PagesFilter from '../filters/PagesFilter.svelte'
</script>

<section
  class="flex flex-col items-center gap-4 mt-2 xl:items-center xl:flex-row xl:mt-0"
>
  <InputFilter />
  <div class="flex gap-4 items-center justify-center">
    <GenreFilter />
    <PagesFilter />
  </div>
</section>

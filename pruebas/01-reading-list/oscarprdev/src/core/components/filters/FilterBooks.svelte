<script lang="ts">
  import GenreFilter from '../filters/GenreFilter.svelte'
  import InputFilter from '../filters/InputFilter.svelte'
  import PagesFilter from '../filters/PagesFilter.svelte'
</script>

<section class="flex gap-4 items-center">
  <InputFilter />
  <GenreFilter />
  <PagesFilter />
</section>

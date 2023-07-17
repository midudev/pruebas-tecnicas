<script lang="ts">
  import { type Writable } from 'svelte/store';
  import type { BooksFilters } from './types';
  import GenreFilter from './GenreFilter.svelte'
  import InputFilter from './InputFilter.svelte'
  import PagesFilter from './PagesFilter.svelte'

  export let filters: Writable<BooksFilters>;
</script>

<section class="flex gap-4 items-center">
  <InputFilter {filters} />
  <GenreFilter {filters} />
  <PagesFilter {filters} />
</section>

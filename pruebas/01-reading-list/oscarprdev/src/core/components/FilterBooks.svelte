<script lang="ts">
  import { type Writable } from 'svelte/store';
  import type { BooksFilters, PaginationState } from './types';
  import GenreFilter from './GenreFilter.svelte'
  import InputFilter from './InputFilter.svelte'
  import PagesFilter from './PagesFilter.svelte'

  export let filters: Writable<BooksFilters>;
  export let paginationState: Writable<PaginationState>

</script>

<section class="flex gap-4 items-center">
  <InputFilter {filters} />
  <GenreFilter {filters} {paginationState} />
  <PagesFilter {filters} {paginationState} />
</section>

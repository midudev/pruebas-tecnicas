<script lang="ts">
  import {SearchIcon} from 'svelte-feather-icons'
  import { writable, type Writable } from 'svelte/store';
  import type { BooksFilters } from './types'

  export let filters: Writable<BooksFilters>

    const onInputChange = (e: Event) => {
    const title = (e.target as HTMLInputElement).value.toLowerCase();
    filters.update(prev => ({ ...prev, title }));
  };
</script>

<section class="relative">
  <SearchIcon size="25" class="absolute left-2 top-2 text-iconsDark" />
  <input
    type="text"
    placeholder="Busca por título.."
    class="pl-12 rounded-full bg-light"
    on:input={onInputChange}
  />
</section>

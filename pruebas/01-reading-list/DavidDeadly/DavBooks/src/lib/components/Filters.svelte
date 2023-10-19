<script lang="ts">
  import { booksStore } from '$lib';
  import { NO_GENRES_FILTER } from '$lib/constants';
  import { useBookFilteredEvent } from '$lib/events/booksFiltered';
  import RangeInput from './RangeInput.svelte';
  import SelectInput from './SelectInput.svelte';

  const { sendBooksFiltered } = useBookFilteredEvent();

  const rangeInputId = 'pages';
  const selectInputId = 'genre';

  let maxPages: number = $booksStore.max;
  let genre: string = NO_GENRES_FILTER;
  $: sendBooksFiltered({ maxPages, genre });
</script>

<div class="filters">
  <label for={rangeInputId}>
    <RangeInput id={rangeInputId} bind:value={maxPages} />
  </label>

  <label for={selectInputId}>
    <SelectInput id={selectInputId} bind:value={genre} />
  </label>
</div>

<style>
  .filters {
    display: flex;
    width: 60%;
    justify-content: space-between;
  }

  label {
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }
</style>

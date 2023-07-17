<style>
  input[type='range']::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #e36064;
    cursor: pointer;
    -webkit-appearance: none;
  }
</style>

<script lang="ts">
    import { derived, type Writable } from 'svelte/store';
    import type { BooksFilters } from './types';
    import { appState } from '../store/store';
    import type { Book } from '../types'
  
    export let minValue = 0;
    export let maxValue = derived(appState, ($appState) => {
      const pagesArr = $appState.books.length > 0 && $appState.books.map((book: Book) => book.pages);
      return Math.max(...pagesArr);
    });
  
    export let filters: Writable<BooksFilters>;

    const onRangeChange = (e: Event) => {
        filters.update(prev => ({
            ...prev, 
            pages: Number((e.target as HTMLInputElement).value)
        }))
    }
</script>

<div class="range-slider">
  <label for="steps-range" class="block mb-2 text-sm font-medium text-center"
    >Páginas: {$filters.pages}</label
  >
  <input
    type="range"
    min={minValue}
    max={$maxValue}
    value={$maxValue / 2}
    on:input={onRangeChange}
    step="5"
    class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-overlayModal bg-opacity-60"
  />
</div>

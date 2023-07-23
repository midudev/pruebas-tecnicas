<script lang="ts">
  import { writable } from 'svelte/store'
  import { sortItems } from '../../features/reading-list/application/reading-list.usecase'
  import { readingListUsecase } from '../../features/reading-list'

  let dropdownIsOpen = writable(false)
  let sortItem = writable(null)

  const onSortSelectChanges = (item: string) => {
    sortItem.update(() => item)
    dropdownIsOpen.update(() => false)

    readingListUsecase.sortBooks(item)
  }

  const openDropdown = () => dropdownIsOpen.update((prev) => !prev)
</script>

<section class="relative xl:mr-7 xl:mt-4">
  <button
    data-dropdown-toggle="dropdown"
    class="text-light bg-dark font-medium rounded-full text-sm px-5 py-3 text-center inline-flex items-center"
    on:click={openDropdown}
  >
    {$sortItem || 'Ordena por: '}<svg
      class="w-2.5 h-2.5 ml-2.5 + {$dropdownIsOpen
        ? 'transform rotate-180'
        : ''}"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg></button
  >
  {#if $dropdownIsOpen}
    <div class="absolute z-10 rounded-2xl shadow w-44 bg-light">
      <ul
        class="py-4 text-sm bg-dark rounded-2xl mt-1"
        aria-labelledby="dropdownDefaultButton"
      >
        {#each sortItems as sortItem}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li on:click={() => onSortSelectChanges(sortItem)}>
            <p
              class="cursor-pointer block px-4 py-2 text-light hover:bg-nav hover:text-light"
            >
              {sortItem}
            </p>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</section>

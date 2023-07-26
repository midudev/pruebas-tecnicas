<script lang='ts' context='module'>

  export interface DropdownEntry {

    label: string
    onClick: () => void
  }

</script>

<script lang='ts'>

  export let items: DropdownEntry[]

</script>

<button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown divider <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg></button>


<!-- Dropdown menu -->
<div id="dropdownDivider" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">

  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">

    {#each items as { onClick, label } (label) }

      <li>
        <button on:click={onClick} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        </button>
      </li>

    {/each}

  </ul>

</div>

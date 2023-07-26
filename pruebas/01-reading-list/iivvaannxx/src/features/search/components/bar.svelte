<script lang='ts' context='module'>

  import debounce from 'just-debounce-it'

  import { SearchIcon } from '$lib/icons'
  import { setSearchQuery } from '../store'

</script>

<script lang='ts'>

  let query: string = ''
  const onInput = debounce(() => {
    setSearchQuery(query)
  }, 200)

</script>

<label

  for='search-bar'
  class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'

>Search</label
>
<div class='relative'>

  <div class='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
    <SearchIcon class='w-4 h-4 text-gray-500' />
  </div>

  <input

    id='search-bar'
    type='search'
    placeholder='Buscar libro...'
    bind:value={ query }
    on:input={ onInput }
    class='block w-full p-3 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
  />
</div>

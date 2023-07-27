<script lang='ts' context='module'>

  import { TagIcon } from '$lib/icons'
  import { ToggleBadge, ToggleAccordion } from '$lib'

  import { genres } from '$features/library'
  import {

    addGenreToFilter,
    removeGenreFromFilter,
    setFilterEnabled,
    filters

  } from '../../store'

</script>

<script lang='ts'>

  $: enabled = $filters.genre.enabled
  $: filterGenres = $filters.genre.data.genres

  // Invert the current value of the filter.
  function toggleGenreFilter () {

    setFilterEnabled('genre', !enabled)
  }

  // Add or remove a genre from the filter.
  function onGenreToggled (toggled: boolean, name: string) {

    const callback = toggled ? addGenreToFilter : removeGenreFromFilter
    callback(name)
  }

</script>

<ToggleAccordion

  label='Género'
  toggled={ enabled }
  onToggle={ toggleGenreFilter }
  slotClass=''
>

  <svelte:fragment slot='icon'>
    <TagIcon class='mr-4' />
  </svelte:fragment>

  <ul class='mt-4 p-4 flex flex-wrap gap-4'>

    {#each $genres as genre}

      <li>

        <ToggleBadge

          text={ genre }
          toggled={ filterGenres.includes(genre) }

          onToggle={ (toggled) => { onGenreToggled(toggled, genre) } }
        />

      </li>

    {/each}

  </ul>

</ToggleAccordion>

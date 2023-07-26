<script lang='ts' context='module'>

  import { ToggleBadge, ToggleAccordion }  from "$lib";
  import { genres } from "$features/library";

  import {

    addGenreToFilter, removeGenreFromFilter,
    setFilterEnabled, filters

  } from "../store";

</script>

<script lang='ts'>

  $: enabled = $filters.genre.enabled
  $: filterGenres = $filters.genre.data.genres

  // Invert the current value of the filter.
  function toggleGenreFilter() {

    setFilterEnabled('genre', !(enabled));
  }

  function onGenreToggled (toggled: boolean, name: string) {

    const callback = toggled
      ? addGenreToFilter
      : removeGenreFromFilter;

    callback(name);
  }

</script>

<ToggleAccordion

  label={'Género'}
  toggled={enabled}
  onToggle={toggleGenreFilter}
>

  <ul class='mt-2 p-4 flex flex-wrap justify-around gap-4'>

    {#each $genres as genre}

      <li>

        <ToggleBadge

          text={genre}

          toggled={filterGenres.includes(genre)}
          onToggle={toggled => onGenreToggled(toggled, genre)}
        />

      </li>

    {/each}

</ul>


</ToggleAccordion>

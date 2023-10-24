<script lang='ts' context='module'>

  import debounce from 'just-debounce-it'

  import { PagesIcon } from '$lib/icons'
  import { MinMaxSlider, ToggleAccordion } from '$lib/components'

  import { pageLimits } from '$features/library'
  import { filters } from '../../state/store'
  import { setPagesFilter, setFilterEnabled } from '../../state/actions'

</script>

<script lang='ts'>

  // Ensure that the default values of the filter are within the limits.
  setPagesFilter($pageLimits[0], $pageLimits[1])

  $: min = $filters.pages.data.min
  $: max = $filters.pages.data.max
  $: enabled = $filters.pages.enabled

  // Invert the current value of the filter.
  function togglePagesFilter () {

    setFilterEnabled('pages', !(enabled))
  }

</script>

<ToggleAccordion

  label='Por Páginas'
  toggled={ enabled }
  onToggle={ togglePagesFilter }
  slotClass='px-6 py-2 mt-8'
>

  <svelte:fragment slot='icon'>
    <PagesIcon class='mr-4' />
  </svelte:fragment>

  <MinMaxSlider

    min={ $pageLimits[0] }
    max={ $pageLimits[1] }
    valueMin={ min }
    valueMax={ max }
    minGap={ 100 }
    labelMin='Desde'
    labelMax='Hasta'
    onInput={ debounce(setPagesFilter, 300) }
  />

</ToggleAccordion>

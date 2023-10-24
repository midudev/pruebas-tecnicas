<script lang='ts' context='module'>

  import { PrimaryButton, SecondaryButton } from '$lib/components'

  import LayoutGridIcon from '../layouts/grid/icon.svelte'
  import LayoutListIcon from '../layouts/list/icon.svelte'

  import { currentLayout } from '../../state/store'
  import { setCurrentLayout } from '../../state/actions'

  import type { Layout } from '../../lib/types'

</script>

<script lang='ts'>

  export let type: Layout

  // Map each layout type to it's layout component.
  $: iconMap = {

    grid: LayoutGridIcon,
    list: LayoutListIcon
  }

</script>

<svelte:component

  this={ $currentLayout === type ? PrimaryButton : SecondaryButton }

  onClick={ () => { setCurrentLayout(type) } }
  extraClasses='aspect-square scale-75'
>
  <svelte:component this={ iconMap[type] } />
</svelte:component>

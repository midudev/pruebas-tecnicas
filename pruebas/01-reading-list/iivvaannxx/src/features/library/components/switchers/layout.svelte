<script lang='ts' context='module'>

  import GridLayout from '../layouts/grid/layout.svelte'
  import ListLayout from '../layouts/list/layout.svelte'

  import type { Layout } from '../../lib/types'

</script>

<script lang='ts'>

  export let type: Layout

  // Map each layout type to it's layout component.
  $: layoutMap = {

    grid: GridLayout,
    list: ListLayout
  }

</script>

<svelte:component this={ layoutMap[type] }>
  <slot />
</svelte:component>

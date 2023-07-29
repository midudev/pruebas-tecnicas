<script lang='ts' context='module'>

  import GridLayoutItem from '../layouts/grid/item.svelte'
  import ListLayoutItem from '../layouts/list/item.svelte'

  import type { Layout } from '../../lib/types'

</script>

<script lang='ts'>

  export let type: Layout
  export let bookData: Book

  // Map each layout type to it's item component.
  $: itemMap = {

    grid: GridLayoutItem,
    list: ListLayoutItem
  }

</script>

<svelte:component this={ itemMap[type] } { bookData } />

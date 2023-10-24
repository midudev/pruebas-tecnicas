<script lang='ts' context='module'>

  import { LAYOUTS } from '../lib/constants'
  import SwitchLayoutButton from './switchers/layout-button.svelte'

</script>

<header class='h-16 w-full px-16 flex items-center justify-between'>

  <h2 class='text-xl font-light'>
    <slot />
  </h2>

  <div class='flex items-center justify-center'>

    {#each LAYOUTS as layoutType}
      <SwitchLayoutButton type={ layoutType } />
    {/each}

  </div>

</header>

<hr class='mx-16 mt-4' />

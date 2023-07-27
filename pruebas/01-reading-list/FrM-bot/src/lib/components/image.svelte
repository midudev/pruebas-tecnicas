<script lang="ts">
  import { classNamesJoin } from '$lib/utils/classNamesJoin'
  import type { HTMLImgAttributes } from 'svelte/elements'
  export let props = {} as HTMLImgAttributes
  export let src = ''
  export let alt = ''
  let className = ''

  export { className as class }
  let classPicture = classNamesJoin(
    className,
    'rounded-md overflow-hidden hover:shadow-lg hover:shadow-black/20 duration-300 p-2 bg-gradient-to-r from-dark-v1 via-tertiary to-dark-v1 inline-block'
  )
</script>

<picture class={classPicture}>
  <img loading="lazy" class="rounded w-full" {src} {alt} {...props} />
</picture>

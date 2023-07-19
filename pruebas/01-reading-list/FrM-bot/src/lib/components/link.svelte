<script lang="ts">
  import { classNamesJoin } from '$lib/utils/classNamesJoin'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  const variants = {
    gradient:
      'border-2 py-[.2em] px-[.6em] rounded-md shadow-xl shadow-black/40 border-transparent [background:linear-gradient(to_right,rgb(var(--dark-v1)),rgb(var(--dark-v1)))_padding-box,linear-gradient(to_right,rgb(var(--dark-v1)),rgb(var(--primary)))_border-box]',
    default: '',
    text: 'hover:[text-shadow:white_2px_-2px] hover:text-white/30 duration-200',
    rounded: 'px-6 py-1 rounded-full grid place-content-center hover:bg-dark-v2 duration-200'
  }

  export let variant: keyof typeof variants = 'default'

  export let props = {} as HTMLAnchorAttributes
  export let href = ''

  let className = ''

  export { className as class }

  const classLink = classNamesJoin(className, variants[variant])

</script>

<a {...props} class={classLink} {href}>
  <slot />
</a>

<script lang="ts">
    import type { SVGAttributes } from 'svelte/elements'
    export let props = {} as SVGAttributes<any>
</script>

<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m.5 4.5 4-4 4 4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 8)"/>
</svg>
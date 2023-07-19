<script lang="ts">
    import type { SVGAttributes } from 'svelte/elements'
    export let props = {} as SVGAttributes<any>
</script>

<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 2)">
        <path d="m8.5 2.5-1.978-2-2.022 2"/>
        <path d="m6.5.5v9"/>
        <path d="m3.5 4.5h-1c-1.1045695 0-2 .8954305-2 2v7c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2v-7c0-1.1045695-.8954305-2-2-2h-1"/>
    </g>
</svg>
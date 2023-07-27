<script lang="ts">
    import type { SVGAttributes } from 'svelte/elements'
    export let props = {} as SVGAttributes<any>
</script>

<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" {...props}
	><g
		fill="none"
		fill-rule="evenodd"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		transform="translate(5 5)"><path d="m10.5 10.5-10-10z" /><path d="m10.5.5-10 10" /></g
	></svg
>

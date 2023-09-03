<script lang="ts">
	import { cn } from '~/lib/utils';
</script>

<svg
	{...$$props}
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class={cn('h-6 w-6', $$props.class)}
>
	<path
		fill-rule="evenodd"
		d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
		clip-rule="evenodd"
	/>
</svg>

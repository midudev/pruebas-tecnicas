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
		d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
		clip-rule="evenodd"
	/>
</svg>

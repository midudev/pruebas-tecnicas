<script lang="ts">
	import { cn } from '~/lib/utils';

	let className = '';

	export { className as class };
</script>

<button
	{...$$props}
	class={cn(
		'rounded p-1 text-slate-500 hover:bg-slate-800 hover:text-sky-200 focus:bg-slate-800 focus:text-sky-200',
		'transition-all duration-100 active:translate-y-px active:scale-x-[.98] active:scale-y-[.98] active:ring-0',
		'disabled:pointer-events-none disabled:opacity-50',
		className
	)}
	on:click
>
	<slot />
</button>

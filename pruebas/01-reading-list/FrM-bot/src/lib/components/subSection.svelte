<script lang="ts">
	import SectionSubTitleCard from "./sectionSubTitleCard.svelte";

	export let title = '';
	export let description = undefined as unknown as number | string;
	export let data: string[] = [];
</script>

{#if description || data}
	<div class="flex flex-wrap gap-2">
		<SectionSubTitleCard>
			{title}
		</SectionSubTitleCard>
		{#if description}
			<!-- content here -->
			<span class="bg-gradient-to-r from-tertiary/80 to-transparent p-2 border-l"
				>{description}</span
			>
		{:else if data?.length > 0}
			<!-- else content here -->
			{#each data as item}
				<span class="bg-gradient-to-r from-tertiary/80 to-transparent p-2 border-l">{item}</span>
			{/each}
		{:else}
			<slot />
		{/if}
	</div>
{/if}

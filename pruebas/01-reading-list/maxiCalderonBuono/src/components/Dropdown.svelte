<script lang="ts">
	export let label: string;
	export let identifier: string;
	export let value: string;
	export let options: { label: string; value: String }[];
</script>

<div role="region" aria-labelledby={identifier} class="w-[30%]">
	<label for={identifier}>{label}</label>
	<select class="select" id={identifier} bind:value>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>

<script lang="ts">
	import { genre, pages, title } from '../stores/filters.store';
	import { availableBooksCount } from '../stores/library.store';
</script>

<section class="mb-6 flex flex-col justify-between gap-3 lg:flex-row lg:items-center">
	<div>
		<h2 class="text-2xl font-bold">Libros disponibles</h2>
		<p class="text-sm font-semibold tabular-nums text-slate-500">
			<span class="text-sky-200 shadow-sky-400 text-shadow-md">{$availableBooksCount}</span> libros
		</p>
	</div>
	<div class="grid grid-cols-[1fr_auto_auto] items-center gap-4">
		<input
			type="text"
			class="w-full rounded-md bg-slate-900 px-4 text-sm font-medium leading-10 text-slate-300"
			placeholder="Busqueda por nombre"
			bind:value={$title}
		/>
		<fieldset>
			<select
				name="genre"
				class="rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-300"
				bind:value={$genre}
			>
				<option value="">Género</option>
				<option value="Fantasía">Fantasía</option>
				<option value="Zombies">Zombies</option>
				<option value="Terror">Terror</option>
				<option value="Ciencia ficción">Ciencia ficción</option>
			</select>
		</fieldset>
		<fieldset class="flex flex-col gap-1 text-slate-400">
			<p class="text-sm font-medium">Páginas</p>
			<input
				type="range"
				class="appearance-none rounded-xl bg-slate-900 accent-slate-600"
				min={$pages.min}
				max={$pages.max}
				bind:value={$pages.current}
			/>
			<p class="text-sm font-medium">
				máximo <span class="tabular-nums">{$pages.current}</span>
			</p>
		</fieldset>
	</div>
</section>

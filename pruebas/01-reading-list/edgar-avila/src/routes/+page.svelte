<script lang="ts">
	import type { Book, BookRecord } from '$lib/book';
	import books from '$lib/books.json';
	import { filterSelect, type FilterType } from '$lib/filter';
	import { librarySet } from '$lib/library';
	import Icon from '@iconify/svelte';
	import { RangeSlider, popup, toastStore } from '@skeletonlabs/skeleton';

	let filter: FilterType = 'all';
	let filterValue = '';
	const maxPages = 2000;
	let pagesLow = 0;
	let pagesHigh = maxPages;
	let filtered: BookRecord[] = books.library;
	let timeout: null | ReturnType<typeof setTimeout> = null;

	const toggleLibrary = (book: Book) => {
		if (!$librarySet.has(book.ISBN)) {
			$librarySet.add(book.ISBN);
		} else {
			$librarySet.delete(book.ISBN);
		}
		$librarySet = $librarySet;
	};

	const filterBooks = () => {
		filtered = books.library.filter((record: BookRecord) => {
			if (filter === 'all') return true;
			let passes = false;
			if (filter === 'library') {
				passes = $librarySet.has(record.book.ISBN);
			} else if (filter === 'year') {
				passes = record.book.year.toString().includes(filterValue);
			} else if (filter === 'author') {
				passes = record.book.author.name.toLowerCase().includes(filterValue.toLowerCase());
			} else if (filter === 'pages') {
				passes = record.book.pages >= pagesLow && record.book.pages <= pagesHigh;
			} else {
				passes = record.book[filter].toLowerCase().includes(filterValue.toLowerCase());
			}
			return passes;
		});
	};

	const debounce = (fn: any) => {
		if (timeout != null) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(fn, 500);
	};

	const changeFilter = () => {
		filterValue = '';
		filterBooks();
	};

	const showOtherAuthorBooks = (book: Book) => {
		toastStore.trigger({
			timeout: 5000,
			message: `Otros libros por ${book.author.name}: ${book.author.otherBooks
				.slice(0, 5)
				.map((b) => `"${b}"`)
				.join(', ')}`
		});
	};

	$: genreList = [...new Set(books.library.map((e) => e.book.genre))];
</script>

<div class="container px-4 sm:px-8 py-12 mx-auto">
	<h1 class="h1 text-center mb-8">Lista de Lectura</h1>

	<div class="mb-8 space-y-4">
		<select
			name="filterType"
			id="filterType"
			data-testid="filterType"
			class="select"
			bind:value={filter}
			on:change={changeFilter}
		>
			{#each filterSelect as filterEntry}
				<option value={filterEntry.value}>{filterEntry.label}</option>
			{/each}
		</select>
		{#if filter !== 'all' && filter !== 'library' && filter !== 'genre' && filter !== 'pages'}
			<input
				type="text"
				name="filter"
				data-testid="filter"
				class="input rounded p-2"
				placeholder="Filtro"
				bind:value={filterValue}
				on:input={() => debounce(filterBooks)}
			/>
		{/if}
		{#if filter === 'genre'}
			<select
				name="genreFilter"
				id="genreFilter"
				data-testid="genreFilter"
				class="select"
				bind:value={filterValue}
				on:change={filterBooks}
			>
				{#each genreList as genre}
					<option value={genre}>{genre}</option>
				{/each}
			</select>
		{/if}
		{#if filter === 'pages'}
			<RangeSlider
				name="range-slider"
				bind:value={pagesLow}
				max={maxPages}
				step={50}
				ticked
				on:change={filterBooks}
			>
				<div class="flex justify-between items-center">
					<div class="font-bold">Mínimo</div>
					<div class="text-xs">{pagesLow} / {maxPages}</div>
				</div>
			</RangeSlider>
			<RangeSlider
				name="range-slider"
				bind:value={pagesHigh}
				max={maxPages}
				step={50}
				ticked
				on:change={filterBooks}
			>
				<div class="flex justify-between items-center">
					<div class="font-bold">Máximo</div>
					<div class="text-xs">{pagesHigh} / {maxPages}</div>
				</div>
			</RangeSlider>
		{/if}
	</div>

	<div class="mb-4 text-right">
		<span class="badge variant-filled-success text-base cursor-pointer transition hover:scale-105"
			>Total: {books.library.length}</span
		>
		<span class="badge variant-filled-primary text-base cursor-pointer transition hover:scale-105"
			>Disponibles: {books.library.length - $librarySet.size}</span
		>
		<span class="badge variant-filled-secondary text-base cursor-pointer transition hover:scale-105"
			>Lista: {$librarySet.size}</span
		>
		<span class="badge variant-filled-tertiary text-base cursor-pointer transition hover:scale-105"
			>Filtrados: {filtered.length}</span
		>
	</div>

	<div class="book-list">
		{#each filtered as record}
			<div class="card overflow-hidden flex flex-col">
				<div class="relative card-img">
					<div class="absolute top-2 right-2">
						<button
							class={`badge-icon h-12 w-12 p-2 transition hover:scale-105 ${
								$librarySet.has(record.book.ISBN)
									? 'variant-filled-primary'
									: 'variant-filled-surface'
							}`}
							on:click={() => toggleLibrary(record.book)}
						>
							<Icon icon="ph:heart-fill" color="#ffffff" height={40} />
						</button>
					</div>
					<div class="absolute bottom-2 right-2 badge variant-filled-surface">
						{record.book.pages} Páginas
					</div>
					<img
						src={record.book.cover}
						alt={record.book.title}
						style="width: 100%; aspect-ratio: 3/4"
					/>
				</div>
				<div class="p-5 grow flex flex-col">
					<h4 class="text-center text-2xl">{record.book.title}</h4>
					<p class="mb-4">{record.book.synopsis}</p>
					<!-- <p class="mb-4 text-sm font-bold">ISBN: {record.book.ISBN}</p> -->
					<p class="flex justify-between mt-auto">
						<span class="badge variant-outline-surface">{record.book.genre}</span>
						<button
							class="italic text-sm hover:underline"
							on:click={() => showOtherAuthorBooks(record.book)}
						>
							{record.book.author.name}
						</button>
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.book-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, min-content));
		gap: 1.5rem;
		place-content: center;
	}
	:global(body) {
		display: flow-root;
	}
</style>

import { NO_GENRES_FILTER } from "$lib/constants";

export const filteredResultsByGenre = [
	{
		genre: NO_GENRES_FILTER,
		numBooks: 13
	},
	{
		genre: 'Fantasía',
		numBooks: 3
	},
	{
		genre: 'Ciencia ficción',
		numBooks: 5
	},
	{
		genre: 'Zombies',
		numBooks: 1
	},
	{
		genre: 'Terror',
		numBooks: 4
	}
];

export const filteredResultsByPages = [
	{
		maxPages: 1200,
		numBooks: 13
	},
	{
		maxPages: 500,
		numBooks: 10
	},
	{
		maxPages: 300,
		numBooks: 6
	},
	{
		maxPages: 220,
		numBooks: 2
	}
]
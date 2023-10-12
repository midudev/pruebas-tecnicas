"use client";

import { useId, useState } from "react";
import { useGenreFilter } from "../hooks/useGenreFilter";

export function GenreFilter() {
	const { genreFilter, changeFilter } = useGenreFilter();
	const genreFilterId = useId();

	const genresList = [
		"Todos",
		"Fantasía",
		"Ciencia ficción",
		"Zombies",
		"Terror",
	];

	const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		changeFilter(value);
	};

	function selectGenre() {
		genresList.map((genre) => {
			if (genre === genreFilter) {
				return (
					<option defaultValue={genre} key={genre} value={genre}>
						{genre}
					</option>
				);
			} else {
				return (
					<option key={genre} value={genre}>
						{genre}
					</option>
				);
			}
		});
	}

	return (
		<>
			<div className="flex flex-col w-auto">
				<label htmlFor={genreFilterId} className="font-bold text-sm pb-1">
					Filtrar por genero
				</label>
				<select
					className="border border-blue-500 focus:border-blue-500 ring-2 ring-blue-500 focus:ring-blue-500 rounded-md"
					name={genreFilterId}
					value={genreFilter}
					id={genreFilterId}
					onChange={selectChange}>
					{genresList.map((genre) => {
						return (
							<option key={genre} value={genre}>
								{genre}
							</option>
						);
					})}
				</select>
			</div>
		</>
	);
}

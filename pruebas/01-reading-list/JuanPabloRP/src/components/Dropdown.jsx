import PropTypes from 'prop-types';
import { useState } from 'react';

const Dropdown = ({ genres, genreSelected, setGenreSelected }) => {
	const [open, setOpen] = useState(false);
	//const [genreSelected, setGenreSelected] = useState('Todos');

	const handleOpen = () => setOpen(!open);

	const closeDropdown = () => setOpen(false);

	const handleGenreSelect = (e) => {
		setGenreSelected(e.target.value);
		closeDropdown();
	};

	return (
		<article>
			<h3 className="p-1 text-xl">Filtrar por género</h3>
			<button
				id="dropdownDefaultButton"
				data-dropdown-toggle="dropdown"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
				onClick={handleOpen}
			>
				{genreSelected}
				<svg
					className="w-2.5 h-2.5 ml-2.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>
			{/* Dropdown menu */}
			{open ? (
				<div
					id="dropdown"
					className="z-10 absolute mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
				>
					<ul
						className="py-2 text-sm text-gray-700 dark:text-gray-200"
						aria-labelledby="dropdownDefaultButton"
					>
						{genres.map ? (
							genres.map((genre) => (
								<li key={genre}>
									<option
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										onClick={handleGenreSelect}
									>
										{genre}
									</option>
								</li>
							))
						) : (
							<p>No hay generos</p>
						)}
					</ul>
				</div>
			) : null}
		</article>
	);
};

Dropdown.propTypes = {
	genres: PropTypes.array.isRequired,
	genreSelected: PropTypes.string.isRequired,
	setGenreSelected: PropTypes.func.isRequired,
};

export default Dropdown;

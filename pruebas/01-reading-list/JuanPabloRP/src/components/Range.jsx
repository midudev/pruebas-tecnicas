//import { useState } from 'react';
import PropTypes from 'prop-types';

const Range = ({ minPages, maxPages, pagesSelected, setPagesSelected }) => {
	const handleChange = (e) => setPagesSelected(e.target.value);

	return (
		<article>
			<p>
				<label htmlFor="default-range" className="p-1 text-xl">
					Filtrar por páginas
				</label>
			</p>
			<input
				id="default-range"
				type="range"
				min={minPages}
				max={maxPages}
				value={pagesSelected}
				className=" my-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				onChange={handleChange}
			/>
			<p className="opacity-40 pl-1"> {pagesSelected}</p>
		</article>
	);
};

Range.propTypes = {
	minPages: PropTypes.number.isRequired,
	maxPages: PropTypes.number.isRequired,
	pagesSelected: PropTypes.any.isRequired,
	setPagesSelected: PropTypes.func.isRequired,
};

export default Range;

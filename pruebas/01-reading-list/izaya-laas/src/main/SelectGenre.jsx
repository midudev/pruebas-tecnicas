import React from 'react';

const SelectGenre = () => {
	return (
		<>
			<label htmlFor="" className="block mb-0.5">
				Select genre
			</label>
			<select
				name="genres"
				className="px-2 py-0.5 border-black border rounded-lg w-full focus:outline-none bg-transparent text-black"
			>
				<option className="text-gray-300" selected value="any">
					any
				</option>
				<option value="">Terror</option>
				<option value="">Romance</option>
				<option value="">Fiction</option>
				<option value="">Cats</option>
				<option value="">Chickes</option>
			</select>
		</>
	);
};

export default SelectGenre;

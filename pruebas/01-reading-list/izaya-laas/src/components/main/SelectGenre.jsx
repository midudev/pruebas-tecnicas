const SelectGenre = ({ inputValue, handleChange }) => {
	console.log('render genre');
	return (
		<>
			<label htmlFor="" className="block mb-0.5">
				Select genre
			</label>
			<select
				name="genres"
				className="px-2 py-0.5 border-black border w-full focus:outline-none bg-transparent text-black rounded-tr-[15px_100px] rounded-br-[100px_10px] rounded-tl-[100px_10px] rounded-bl-[10px_100px]"
				value={inputValue}
				onChange={handleChange}
			>
				<option className="text-sm italic" value="any">
					any
				</option>
				<option className="text-sm italic" value="terror">
					Terror
				</option>
				<option className="text-sm italic" value="romance">
					Romance
				</option>
				<option className="text-sm italic" value="fiction">
					Fiction
				</option>
				<option className="text-sm italic" value="cats">
					Cats
				</option>
				<option className="text-sm italic" value="chickes">
					Chickes
				</option>
			</select>
		</>
	);
};

export default SelectGenre;

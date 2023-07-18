const SelectGenre = () => {
	return (
		<>
			<label htmlFor="" className="block mb-0.5">
				Select genre
			</label>
			<select
				name="genres"
				className="px-2 py-0.5 border-black border w-full focus:outline-none bg-transparent text-black rounded-tr-[15px_100px] rounded-br-[100px_10px] rounded-tl-[100px_10px] rounded-bl-[10px_100px]"
			>
				<option className="text-sm italic" selected value="any">
					any
				</option>
				<option className="text-sm italic" value="">
					Terror
				</option>
				<option className="text-sm italic" value="">
					Romance
				</option>
				<option className="text-sm italic" value="">
					Fiction
				</option>
				<option className="text-sm italic" value="">
					Cats
				</option>
				<option className="text-sm italic" value="">
					Chickes
				</option>
			</select>
		</>
	);
};

export default SelectGenre;

const RangePages = ({ inputValue, handleChange }) => {
	return (
		<>
			<span className="block mb-0.5">Range pages</span>
			<div className="flex justify-start w-full gap-x-2">
				<input
					type="text"
					placeholder="min"
					className="border-b border-black w-16 bg-[#00000003] text-center rounded-t-md rounded-bl-[20px_5px] rounded-br-[20px_2px]  focus:outline-none"
					name="min-pages"
					value={inputValue[0]}
					onChange={(e) => handleChange(e, 'min')}
				/>
				<span>-</span>
				<input
					type="text"
					placeholder="max"
					className="border-b border-black w-16 bg-[#00000003] text-center 
                  rounded-t-md rounded-bl-[20px_2px] rounded-br-[20px_5px] focus:outline-none"
					name="max-pages"
					value={inputValue[1]}
					onChange={(e) => handleChange(e, 'max')}
				/>
			</div>
		</>
	);
};

export default RangePages;

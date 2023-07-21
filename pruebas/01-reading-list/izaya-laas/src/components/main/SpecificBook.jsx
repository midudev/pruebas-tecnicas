const SpecificBook = ({ inputValue, handleChange }) => {
	return (
		<>
			<label className="block mb-0.5">Specific Book</label>
			<input
				type="text"
				className="px-2 py-0.5 border-black border w-full focus:outline-none rounded-tr-[15px_100px] rounded-br-[100px_10px] rounded-tl-[100px_10px] rounded-bl-[10px_100px]"
				placeholder="Git"
				value={inputValue}
				onChange={handleChange}
			/>
		</>
	);
};

export default SpecificBook;

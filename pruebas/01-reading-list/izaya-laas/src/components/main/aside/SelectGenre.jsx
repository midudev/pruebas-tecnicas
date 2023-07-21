import { genres } from '../../../database/books';

const SelectGenre = ({ inputValue, handleChange }) => {
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
				{genres.map(({ name, value }, index) => (
					<option className="text-sm italic" key={index} value={value}>
						{name}
					</option>
				))}
			</select>
		</>
	);
};

export default SelectGenre;

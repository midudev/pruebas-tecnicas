// import {
// 	filterOptions,
// 	handleExcludeBooks,
// } from '../../signals/inputs.signals';

const ExcludeBooks = ({ inputValue, handleChange }) => {
	console.log('Render exclude Books');
	return (
		<>
			<input
				type="checkbox"
				className="accent-black"
				name="exclude-books"
				value={inputValue}
				onChange={handleChange}
			/>
			<label htmlFor="">Exclude my books</label>
		</>
	);
};

export default ExcludeBooks;

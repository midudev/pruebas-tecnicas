import { effect } from '@preact/signals';
import { currentPath } from '../../signals/store';
import { computed } from '@preact/signals';

const isDisabled = computed(() => currentPath.value === '/my-books');

const ExcludeBooks = ({ inputValue, handleChange }) => {
	console.log('Render exclude Books');

	return (
		<>
			<input
				type="checkbox"
				className="accent-black"
				name="exclude-books"
				id="exclude-books"
				disabled={isDisabled}
				checked={inputValue}
				onChange={handleChange}
			/>
			<label
				htmlFor="exclude-books"
				className={`${isDisabled.value ? 'text-gray-400' : 'text-black'}`}
			>
				Exclude my books
			</label>
		</>
	);
};

export default ExcludeBooks;

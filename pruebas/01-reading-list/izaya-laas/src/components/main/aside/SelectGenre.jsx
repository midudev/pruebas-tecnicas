import { genres } from '../../../database/books';

const SelectGenre = ({ inputValue, handleChange }) => {
  return (
    <>
      <label htmlFor="" className="mb-0.5 block">
        Select genre
      </label>
      <select
        name="genres"
        className="w-full rounded-bl-[10px_100px] rounded-br-[100px_10px] rounded-tl-[100px_10px] rounded-tr-[15px_100px] border border-black bg-transparent px-2 py-0.5 text-black focus:outline-none"
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

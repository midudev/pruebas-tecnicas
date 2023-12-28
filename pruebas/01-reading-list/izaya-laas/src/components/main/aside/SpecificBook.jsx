const SpecificBook = ({ inputValue, handleChange }) => {
  return (
    <>
      <label className="mb-0.5 block">Specific Book</label>
      <input
        type="text"
        className="w-full rounded-bl-[10px_100px] rounded-br-[100px_10px] rounded-tl-[100px_10px] rounded-tr-[15px_100px] border border-black px-2 py-0.5 placeholder:text-gray-500 focus:outline-none"
        placeholder="Git"
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
};

export default SpecificBook;

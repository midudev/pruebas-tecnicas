const RangePages = ({ inputValue, handleChange }) => {
  return (
    <>
      <span className="mb-0.5 block">Range pages</span>
      <div className="flex w-full justify-start gap-x-2">
        <input
          type="text"
          placeholder="min"
          className="w-16 rounded-t-md rounded-bl-[20px_5px] rounded-br-[20px_2px] border-b border-black bg-[#00000003] text-center  placeholder:text-gray-500 focus:outline-none"
          name="min-pages"
          value={inputValue[0]}
          onChange={(e) => handleChange(e, 'min')}
        />
        <span>-</span>
        <input
          type="text"
          placeholder="max"
          className="w-16 rounded-t-md rounded-bl-[20px_2px] rounded-br-[20px_5px] border-b 
                  border-black bg-[#00000003] text-center placeholder:text-gray-500 focus:outline-none"
          name="max-pages"
          value={inputValue[1]}
          onChange={(e) => handleChange(e, 'max')}
        />
      </div>
    </>
  );
};

export default RangePages;

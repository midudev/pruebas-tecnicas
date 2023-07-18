const RangePages = () => {
	return (
		<>
			<span className="block mb-0.5">Range pages</span>
			<div className="flex justify-start w-full gap-x-2">
				<input
					type="text"
					placeholder="min"
					className="border-b border-black w-16 bg-[#00000003] text-center rounded-t-md rounded-bl-[20px_5px] rounded-br-[20px_2px]  focus:outline-none"
					name=""
					id=""
				/>
				<span>-</span>
				<input
					type="text"
					placeholder="max"
					className="border-b border-black w-16 bg-[#00000003] text-center 
                  rounded-t-md rounded-bl-[20px_2px] rounded-br-[20px_5px] focus:outline-none"
					name=""
					id=""
				/>
			</div>
		</>
	);
};

export default RangePages;

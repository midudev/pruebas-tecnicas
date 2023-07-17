const RangePages = () => {
	return (
		<>
			<span className="block mb-0.5">Range pages</span>
			<div className="flex justify-start w-full gap-x-2">
				<input
					type="text"
					placeholder="min"
					className="border-b border-black w-16 bg-gray-50 text-center rounded-lg"
					name=""
					id=""
				/>
				<span>-</span>
				<input
					type="text"
					placeholder="max"
					className="border-b border-black w-16 bg-gray-50 text-center 
                  rounded-lg"
					name=""
					id=""
				/>
			</div>
		</>
	);
};

export default RangePages;

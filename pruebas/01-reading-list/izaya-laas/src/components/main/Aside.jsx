import SpecificBook from './SpecificBook';
import RangePages from './RangePages';
import SelectGenre from './SelectGenre';
import ExcludeBooks from './ExcludeBooks';
import {
	filterOptions,
	handleGenre,
	handleExcludeBooks,
	handleRangePages,
	handleSpecificBook,
} from '../../signals/inputs.signals';

const Aside = () => {
	console.log('Aside render');
	return (
		<aside className="border-r-2 border-black pt-4 sticky top-8 w-[200px] rounded-tr-[5px_800px] rounded-br-[5px_800px] ">
			<div className="pb-1 bg-grated-pattern w-min mx-auto rounded-b-md">
				<h4 className="text-center text-lg mt-1 h-full bg-white">Filters</h4>
			</div>
			<form className="w-full text-md flex flex-col items-start px-4 mt-6 gap-y-4 font-handlee ">
				<div>
					<SpecificBook
						inputValue={filterOptions.value.specificBook}
						handleChange={handleSpecificBook}
					/>
				</div>
				<div className="w-full">
					<SelectGenre
						inputValue={filterOptions.value.genre}
						handleChange={handleGenre}
					/>
				</div>
				<div>
					<RangePages
						inputValue={filterOptions.value.pages}
						handleChange={handleRangePages}
					/>
				</div>
				<div className="flex gap-x-2">
					<ExcludeBooks
						inputValue={filterOptions.value.excludeBooks}
						handleChange={handleExcludeBooks}
					/>
				</div>
			</form>
		</aside>
	);
};

export default Aside;

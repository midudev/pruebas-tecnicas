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
} from '../../../signals/inputs.signals';

const Aside = () => {
	return (
		<aside className="sm:border-r-2 border-black pt-2 pb-4 sm:pt-4 z-10 sticky bottom-0 sm:top-8 w-full rounded-tr-[5px_800px] rounded-br-[5px_800px] bg-white border-t-2 sm:border-t-0">
			<div className="pb-1 bg-grated-pattern w-min mx-auto rounded-b-md hidden sm:block">
				<h4 className="text-center text-lg mt-1 h-full bg-white">Filters</h4>
			</div>
			<form className="w-full text-md flex flex-col items-start px-4 sm:mt-6 gap-y-6 h-full font-handlee text-sm sm:text-base">
				<div className="flex gap-x-6 w-full sm:gap-x-0 sm:flex-col sm:w-auto sm:gap-y-6">
					<div className="w-1/2 sm:w-full">
						<SpecificBook
							inputValue={filterOptions.value.specificBook}
							handleChange={handleSpecificBook}
						/>
					</div>
					<div className="w-1/2 sm:w-full">
						<SelectGenre
							inputValue={filterOptions.value.genre}
							handleChange={handleGenre}
						/>
					</div>
				</div>
				<div className="flex gap-x-6 w-full items-center sm:flex-col sm:gap-x-0 sm:gap-y-6">
					<div className="w-1/2 sm:w-full">
						<RangePages
							inputValue={filterOptions.value.pages}
							handleChange={handleRangePages}
						/>
					</div>
					<div className="flex gap-x-2 w-1/2 sm:w-full">
						<ExcludeBooks
							inputValue={filterOptions.value.excludeBooks}
							handleChange={handleExcludeBooks}
						/>
					</div>
				</div>
			</form>
		</aside>
	);
};

export default Aside;

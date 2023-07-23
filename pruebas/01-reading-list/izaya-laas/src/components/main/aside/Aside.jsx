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
import { signal } from '@preact/signals';

const isHiddenAside = signal(false);

const handleIsHiddenAside = () => {
  isHiddenAside.value = !isHiddenAside.value;
};

const Aside = () => {
  return (
    <aside
      className={`sticky bottom-0 z-10 h-max w-full rounded-br-[5px_800px] rounded-tl-[800px_5px] rounded-tr-[5px_800px] border-t-2 border-black bg-white pb-4 pt-2 transition-transform duration-500 sm:top-8  sm:h-auto sm:rounded-tl-none sm:border-r-2 sm:border-t-0 sm:pt-4 ${
        isHiddenAside.value
          ? 'h-[0] translate-y-full animate-[heightdown_500ms] sm:translate-y-0'
          : 'translate-y-0'
      }`}
    >
      <div
        className={`absolute left-1/2 top-0 z-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black p-0.5 transition-transform duration-500 sm:hidden ${
          isHiddenAside.value ? '' : 'rotate-180'
        }`}
        onClick={handleIsHiddenAside}
      >
        <img src="/public/up.svg" alt="down icon" className={`w-5 `} />
      </div>
      <div className="mx-auto hidden w-min rounded-b-md bg-grated-pattern pb-1 sm:block">
        <h4 className="mt-1 h-full bg-white text-center text-lg">Filters</h4>
      </div>
      <form className="text-md flex h-full w-full flex-col items-start gap-y-6 px-4 font-handlee text-sm sm:mt-6 sm:text-base">
        <div className="flex w-full gap-x-6 sm:w-auto sm:flex-col sm:gap-x-0 sm:gap-y-6">
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
        <div className="flex w-full items-center gap-x-6 sm:flex-col sm:gap-x-0 sm:gap-y-6">
          <div className="w-1/2 sm:w-full">
            <RangePages
              inputValue={filterOptions.value.pages}
              handleChange={handleRangePages}
            />
          </div>
          <div className="flex w-1/2 gap-x-2 sm:w-full">
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

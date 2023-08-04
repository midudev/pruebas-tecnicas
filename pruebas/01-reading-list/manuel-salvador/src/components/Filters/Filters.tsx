import GenreFilter from '@/components/Filters/GenreFilter';
import PagesFilter from './PagesFilter';
import SearchFilter from './SearchFilter';

export default function Filters() {
  return (
    <div className="flex flex-col items-center md:flex-row gap-12 mb-2 mt-8">
      <PagesFilter />
      <GenreFilter />
      <SearchFilter />
    </div>
  );
}

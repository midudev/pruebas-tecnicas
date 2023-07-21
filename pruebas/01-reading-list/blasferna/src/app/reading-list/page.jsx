import { ReadingList } from "@/components/book-list";
import FilterSection from "@/components/filter-section";

export default function ReadingListPage() {
  return (
    <>
      <FilterSection></FilterSection>
      <ReadingList></ReadingList>
    </>
  );
}

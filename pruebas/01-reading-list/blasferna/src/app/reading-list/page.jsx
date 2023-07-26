import { ReadingList } from "@/components/book-list";
import FilterSection from "@/components/filter-section";

export default function ReadingListPage() {
  return (
    <>
      <section>
        <FilterSection></FilterSection>
      </section>
      <section>
        <ReadingList></ReadingList>
      </section>
    </>
  );
}

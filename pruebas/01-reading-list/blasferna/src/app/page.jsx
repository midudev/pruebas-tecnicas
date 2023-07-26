import { AvailableList } from "@/components/book-list";
import FilterSection from "@/components/filter-section";

export default function HomePage() {
  return (
    <>
      <section>
        <FilterSection></FilterSection>
      </section>
      <section>
        <AvailableList></AvailableList>
      </section>
    </>
  );
}

import { AvailableList } from "@/components/book-list";
import FilterSection from "@/components/filter-section";

export default function Home() {
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

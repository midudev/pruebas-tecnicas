import DATA from "@/books.json"
import {ReadingList} from "@/components/book-list";
import Navigation from "@/components/navigation";

export default function ReadingListPage() {
  return (
    <>
      <Navigation></Navigation>
      <ReadingList data={DATA}></ReadingList>
    </>
  );
}

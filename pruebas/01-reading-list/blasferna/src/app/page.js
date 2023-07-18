import DATA from "@/books.json";
import { AvailableList } from "@/components/book-list";
import Navigation from "@/components/navigation";


export default function Home() {
  return (
    <>
      <Navigation></Navigation>
      <AvailableList data={DATA}></AvailableList>
    </>
  );
}

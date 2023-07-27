"use client";
import Book from "@/app/components/book";
import useStore from "@/app/store";
import { library } from "@/utils/get-library";
import { useSearchParams } from "next/navigation";
import filterLibrary from "@/utils/filter-library";

const LibrarySection = ({ library }: { library: library }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const genre = searchParams.get("genre") ?? "";
  const pages = searchParams.get("pages");
  const readingList = useStore((state) => state.readingList);
  const filteredLibrary = filterLibrary({
    library,
    genre,
    pages,
    readingList,
    search,
  });
  return (
    <section className="flex flex-wrap gap-x-6 gap-y-2">
      {filteredLibrary.map((item, index) => (
        <Book book={item.book} />
      ))}
    </section>
  );
};

export default LibrarySection;

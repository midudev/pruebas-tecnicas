import { useGlobalState } from "@/lib/globalContext";
import Book from "./Book";

const ReadingList = () => {
  const { data, addLibrary } = useGlobalState();
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.read.map((book) => (
        <Book key={book.ISBN} book={book} click={addLibrary} />
      ))}
    </div>
  );
};

export default ReadingList;

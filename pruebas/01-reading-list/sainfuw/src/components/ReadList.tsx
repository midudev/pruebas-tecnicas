import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ReadBook from "./ReadBook";

export default function ReadList() {
  const { readList } = useContext(AppContext);

  return (
    <aside className='max-w-[22%] items-center flex flex-col gap-3 bg-cyan-950 p-4'>
      <h1 className="text-4xl font-bold font-pp">Read List</h1>
      <ul className="flex flex-col mt-60">
        {readList.map((book) => <ReadBook key={book.title} book={book} />)}
      </ul>
    </aside>
  )
}
import { Reorder } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ReadBook from "./ReadBook";

export default function ReadList() {
  const { readList, setReadList } = useContext(AppContext);

  return (
    <aside className='max-w-[22%] items-center flex flex-col gap-3 bg-cyan-950 p-4'>
      <h1 className="text-4xl font-bold font-pp">Read List</h1>
      <Reorder.Group
        axis="y"
        onReorder={setReadList}
        values={readList}
        className="flex flex-col mt-56"
      >
        {readList.map((book) => (
          <ReadBook key={book.ISBN} book={book} />
        ))}
      </Reorder.Group>
    </aside>
  )
}
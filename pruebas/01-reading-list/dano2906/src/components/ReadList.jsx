import { useBooksStore } from "../stores/BookStore"

export default function ReadList() {
  const books = useBooksStore((state)=>state.books)
  return (
    <div className="w-1/4">
      <button className="text-white">Books</button>
       <h1>{JSON.stringify(books)}</h1>
    </div>
  )
}

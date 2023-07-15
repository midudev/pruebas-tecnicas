import { useEffect,useState } from "react";
import AvailableBooksSection from "./AvailableBooksSection";
import ReadList from "./ReadList";

export default function BooksSection() {
    const [books,setBooks] = useState(null);

     useEffect(()=>{
        const fetchBooks = async () => {
        const {library} = await (await fetch('books.json')).json();
        setBooks(library);
        }
        fetchBooks()
    },[])

  return (
    <section className="w-screen h-auto flex flex-row">
        <AvailableBooksSection books={books}/>
        <ReadList />
    </section>
  )
}

import { useContext} from "react"
import { BooksContext } from "../../context/BooksContextProvider"
import { useBooks } from "../../hooks/useBooks";
import CardBooks from "../Books/CardBooks";


function ListRender() {

  const { readingList, removeBook} = useContext(BooksContext);

  // usando el hook personalizado
  const dataBooks = useBooks(readingList);

  return (
    <div className=" mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-2 ">
      <CardBooks dataBooks={dataBooks} removeBook={removeBook} addRemove={true}/>
    </div>
      

  )
}

export default ListRender;

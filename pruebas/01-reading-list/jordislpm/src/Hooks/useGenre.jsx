import { useContext } from "react";
import { BooksAvailable } from "../context/contextBooks";


const useGenre = ()=>{
const [store, dispatch] = useContext(BooksAvailable)
const {listBooks, listRead} = store;



}
export default useGenre
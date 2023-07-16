import { useContext } from "react";
import { BooksAvailable } from "../context/context";

const books = useContext(BooksAvailable);

console.log(BooksAvailable);
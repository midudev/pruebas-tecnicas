import { useEffect, useState } from "react"
import { HowManyBooksAre } from "@typesFiles/General"

const singularBaseBookText = " Libro disponible: "
const pluralBaseBookText = " Libros disponibles: "
const singularBaseReadingListText = " Libro en la lista de lectura"
const pluralBaseReadingListText = " Libros en la lista de lectura"

export function useBooksAvailable(numberOfBooks : HowManyBooksAre) {
  const [textForBooks, setTextForBooks] = useState("");
  const [textForReadingList, setTextForReadingList] = useState("");

  useEffect(() => {
    if (numberOfBooks.numberOfAvailableBooks === 1) {
      setTextForBooks(`${numberOfBooks.numberOfAvailableBooks} ${singularBaseBookText}`)
    } else {
      setTextForBooks(`${numberOfBooks.numberOfAvailableBooks} ${pluralBaseBookText}`);
    }

    if (numberOfBooks.numberOfBooksInReadingList === 1) {
      setTextForReadingList(`${numberOfBooks.numberOfBooksInReadingList} ${singularBaseReadingListText}`)
    } else {
      setTextForReadingList(`${numberOfBooks.numberOfBooksInReadingList} ${pluralBaseReadingListText}`);
    }
  }, [numberOfBooks]);

  return {
    textForBooks,
    textForReadingList
  };
}

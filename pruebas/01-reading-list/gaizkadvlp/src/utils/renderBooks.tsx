import Libro from "../components/Libro";
import { Book } from "../interfaces/interfaces";

export const renderBooks = (lista:Book[]):any => {
    console.log("en el renderbooks de la funcion KE CREO KE NO ENTRA NUNCA!!!!")
    console.log(lista)
    lista.map((libro: Book) => {//TODO --> Crear una funcion
    return (
      <li className="libro" key={libro.ISBN}>
        <Libro libro = {libro} />
      </li>
    );
  });
}

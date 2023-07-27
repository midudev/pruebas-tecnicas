/*
- funcion que retorne la lista de libros filtrada
- funcion filtradora
- Funcion que retorne todos los libros
*/

// import React from "react";
// import { Book } from "../types";
// import getAllbooksUseCase from "../usecases/getAllBooks.usecase";

// const BookContext = React.createContext<Book[] | null>(getAllbooksUseCase());

// export const useBookContext = () => {
//   const context = React.useContext(BookContext);
//   if (!context) {
//     throw new Error(
//       "useBookContext debe ser utilizado dentro de un BookProvider"
//     );
//   }
//   return context;
// };

// const filter = (word: string): string => {
//   return word.toLowerCase();
// };

// const BookProvider: React.FC = ({ children }: any) => {

//     return (
//         <BookContext.Provider value={}>
//           {children}
//         </BookContext.Provider>
//       );
// };

// export default BookProvider;

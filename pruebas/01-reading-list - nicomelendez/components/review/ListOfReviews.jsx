import React, { useEffect, useState } from "react";
import Review from "./Review";
import useLibrary from "../../hooks/useLibrary";
import { getReviews } from "../../context/helpers/services/review/getReviews";

export default function ListOfReviews({ ISBN }) {
  const { getUserAuth } = useLibrary();
  const [reviews, setReview] = useState([]);
  const [contadorReview, setContador] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const reviewsPerPage = 3; // Cantidad de reviews por página

  useEffect(() => {
    async function fetchReviews() {
      const { respuesta, contador, listaDeReviews } = await getReviews(
        ISBN,
        currentPage
      ); // Pasar el número de página

      if (respuesta.status === "success") {
        setReview(listaDeReviews);
        setContador(contador);
      }
    }
    fetchReviews();
  }, [currentPage]); // Escuchar cambios en la página actual

  // Lógica para calcular la cantidad total de páginas
  const totalPages = Math.ceil(contadorReview / reviewsPerPage);

  // Función para ir a la página anterior
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Función para ir a la página siguiente
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full py-10 grid grid-cols-1 md:max-w-[700px] gap-y-6 place-content-evenly">
      <div className="text-center text-xl">
        <p>
          Número de reviews: <strong>{contadorReview}</strong>
        </p>
      </div>
      {reviews.length > 0
        ? reviews.map(({ id, user, description, rating }) => {
            if (user === getUserAuth()) return <></>;

            return (
              <Review
                key={id}
                user={user}
                description={description}
                rating={rating}
              />
            );
          })
        : null}

      {reviews.length > 0 ? (
        <div className="flex justify-between">
          <button
            className={`${
              currentPage === 1
                ? "bg-gray-300"
                : "bg-white  hover:bg-slate-300/90 cursor-pointer focus:ring-blue-300 focus:ring-4 focus:outline-none"
            } flex items-center shrink-0 shadow-sm rounded-lg px-5 py-3 text-black`}
            onClick={goToPrevPage}
            disabled={currentPage === 1} // Deshabilitar el botón si estamos en la primera página
          >
            Página anterior
          </button>
          <button
            onClick={goToNextPage}
            className={`${
              currentPage === totalPages
                ? "bg-gray-300"
                : "bg-white  hover:bg-slate-300/90 cursor-pointer focus:ring-blue-300 focus:ring-4 focus:outline-none"
            } flex items-center shrink-0 shadow-sm rounded-lg px-5 py-3 text-black`}
            disabled={currentPage === totalPages} // Deshabilitar el botón si estamos en la última página
          >
            Página siguiente
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

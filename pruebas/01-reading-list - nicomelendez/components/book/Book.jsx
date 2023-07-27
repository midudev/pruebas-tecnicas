import { renderRatingIcons } from "../utils/renderRatingIcons";
import useLibrary from "@/hooks/useLibrary";
import { toastSucess } from "@/context/helpers/toast/sucess.js";
import StatusBookIcon from "@/components/book/StatusBookIcon";
import { BookStatus } from "@/context/helpers/interfaces/types";

export default function Book({
  title,
  cover,
  genre,
  synopsis,
  ISBN,
  status,
  rating,
}) {
  const { changeStatusBook, changeRoute } = useLibrary();

  const handleAddBook = () => {
    toastSucess("✅ Libro agregado!");
    changeStatusBook(BookStatus.IN_LIBRARY, ISBN);
  };

  const handleDeleteBook = () => {
    toastSucess("✅ Libro quitado!");
    changeStatusBook(BookStatus.NOT_READ, ISBN);
  };

  return (
    <article className="group relative block bg-black max-w-[450px] h-[650px] rounded-r-3xl rounded-l-lg cursor-help">
      <img
        alt={`Portada de ${title}`}
        src={cover}
        className="absolute inset-0 aspect-[2000/3227] w-full h-full rounded-l-lg opacity-75 transition-opacity group-hover:blur-sm group-hover:opacity-20 rounded-r-3xl"
      />

      <div className="relative py-4 px-5 sm:px-10">
        <StatusBookIcon status={status} />

        <div className="translate-y-8 h-[500px] space-y-5 transform opacity-0 transition-all pt-6 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex justify-between items-center pb-5">
            <span className="bg-white text-black text-lg font-bold mr-2 px-3 py-1 rounded">
              {genre}
            </span>
            <div className="flex py-2 text-amber-500">
              {renderRatingIcons(rating, "h-5 w-5")}
            </div>
          </div>
          <h3 className="text-xl text-white font-bold">{title}</h3>
          <p className="text-xl text-white">{synopsis}</p>
          <div className="flex justify-between pt-10 items-center">
            {status === BookStatus.NOT_READ ? (
              <button
                onClick={handleAddBook}
                type="button"
                className="text-black cursor-pointer bg-white hover:shadow-lg hover:bg-slate-200/90 focus:ring-4 focus:outline-none focus:ring-blue-300  font-black rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Agregar
              </button>
            ) : (
              <button
                onClick={handleDeleteBook}
                type="button"
                className="text-black cursor-pointer bg-white hover:shadow-lg hover:bg-slate-200/90 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 font-black"
              >
                Quitar
              </button>
            )}
            <button
              onClick={() => {
                changeRoute(`/book?ISBN=${ISBN}`);
              }}
              type="button"
              className="text-black cursor-pointer bg-white hover:shadow-lg hover:bg-slate-200/90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-black rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

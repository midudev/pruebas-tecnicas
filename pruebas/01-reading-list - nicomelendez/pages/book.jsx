import { useRouter } from "next/router";
import Layout from "../layout/Layout";
import NoFound from "../components/utils/NoFound";
import ListOfReviews from "../components/review/ListOfReviews";
import AddReview from "../components/review/AddReview";
import RegistrarUsuario from "../components/auth/RegistrarUsuario";
import { BackIcon } from "../components/utils/Icons";
import StatusBook from "../components/book/StatusBook";
import { renderRatingIcons } from "../components/utils/renderRatingIcons";
import useLibrary from "../hooks/useLibrary";
import { BookStatus } from "../context/helpers/interfaces/types";
import { toastSucess } from "../context/helpers/toast/sucess";

export default function Book() {
  const { changeStatusBook, changeRoute, getUserAuth, searchBookForISBN } =
    useLibrary();

  const router = useRouter();
  const { ISBN } = router.query;

  const data = searchBookForISBN(ISBN);

  if (data == null) {
    return (
      <Layout title={`Libro no encotrado`}>
        <NoFound />
      </Layout>
    );
  }

  const handleDeleteBook = () => {
    toastSucess("✅ Libro quitado!");
    changeStatusBook(BookStatus.NOT_READ, ISBN);
  };

  const handleAddBook = () => {
    toastSucess("✅ Libro agregado!");
    changeStatusBook(BookStatus.IN_LIBRARY, ISBN);
  };

  const { status, stock, rating } = data;
  const { title, pages, genre, cover, synopsis, year, author } = data.book;

  return (
    <Layout title={`${title}`}>
      <main className="w-full flex flex-col justify-center items-center">
        <div className="flex w-full pb-10 mx-auto justify-center items-center">
          <button
            onClick={() => changeRoute("/")}
            className="text-black bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm p-4 text-center inline-flex items-center "
          >
            <BackIcon />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-y-10 xl:gap-y-0 lg:gap-x-14">
          <div className="flex flex-col mx-auto gap-y-8">
            <picture>
              <img
                className="aspect-[2000/3227] w-[350px] h-[500px] mx-auto rounded-r-3xl"
                src={cover}
                alt={`Portada de ${title}`}
                // style={{ viewTransitionName: `book-${ISBN}` }}
              />
            </picture>
            <StatusBook status={status} ISBN={ISBN} />

            {status === BookStatus.NOT_READ ? (
              <button
                onClick={handleAddBook}
                className="justify-center text-black bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-3 inline-flex items-center mr-2 gap-x-3"
              >
                Agregar a biblioteca
              </button>
            ) : (
              <button
                onClick={handleDeleteBook}
                className="justify-center text-black bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold  rounded-lg text-sm px-5 py-3 inline-flex items-center mr-2 gap-x-3"
              >
                Quitar de biblioteca
              </button>
            )}
          </div>

          <aside className="space-y-5 flex flex-col jus min-w-xl max-w-xl">
            <h2 className="text-xl md:text-3xl flex items-center gap-x-5 font-black">
              {title}
              <span className="text-black flex bg-white text-sm text-center md:text-lg font-bold px-4 py-2 rounded">
                {genre}
              </span>
            </h2>

            <div className="flex text-amber-500">
              {renderRatingIcons(rating, "h-6 w-6")}
            </div>
            <p>
              <strong className="text-black">Autor:</strong>{" "}
              <span className="font-semibold text-black">{author.name}</span>
            </p>
            <p>
              <strong className="text-black">Año:</strong>{" "}
              <span className="font-semibold text-black">{year}</span>
            </p>
            <p>
              <strong className="text-black">Paginas:</strong>{" "}
              <span className="font-semibold text-black">{pages}</span>
            </p>
            <p>{synopsis}</p>
            {getUserAuth() === null ? (
              <div className="md:px-10">
                <RegistrarUsuario isOpen={false} />
              </div>
            ) : (
              <AddReview ISBN={ISBN} />
            )}
            <ListOfReviews ISBN={ISBN} />
          </aside>
        </div>
      </main>
    </Layout>
  );
}

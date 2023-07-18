import { useBooks } from '../store/bookStore';

function Book(props) {
  const { addToReadingList, removeFromReadingList } = useBooks();
  const bookData = props;

  return (
    <article key={bookData.ISBN} className="p-6 flex flex-col bg-[#FDFDFD]">
      <div className="relative z-0">
        <img
          src={bookData.cover}
          alt={bookData.title}
          className="overflow-hidden aspect-[317/475] shadow-xl shadow-slate-300 rounded-r-md z-30 relative"
        />
        <div className="absolute top-0 left-0 pages bg-white w-full h-full flex border-slate-900 border-4 z-0"></div>
      </div>
      {bookData.isInReadingList == true ? (
        <button
          onClick={() => {
            const { isInReadingList, ...bookWithoutRD } = bookData;
            removeFromReadingList(bookWithoutRD);
          }}
          className="my-3 font-sans text-xs rounded-md bg-red-500 text-white p-2 flex flex-row justify-center items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12.427 17.256l-.427 -.256l-5 3v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v9" />
            <path d="M16 19h6" />
          </svg>
          Eliminar
        </button>
      ) : (
        <button
          onClick={() => addToReadingList(bookData)}
          className="my-3 z-20 font-sans text-xs rounded-md bg-green-700 text-white p-2 flex flex-row justify-center items-center gap-1 bg-gradient-to-b from-green-600 to-green-800 hover:from-green-800 hover:to-green-900 transition-colors ease-in-out duration-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12.357 17.214l-.357 -.214l-5 3v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6.5" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
          </svg>
          Agregar a lista de lectura
        </button>
      )}
      {bookData.isInReadingList != true ? (
        <div className="info">
          <h2 className=" text-lg font-serif text-slate-800 leading-6">
            {bookData.title}
          </h2>
          <span className="text-xs text-slate-600 font-sans font-light">
            {bookData.author.name}
          </span>
        </div>
      ) : null}
    </article>
  );
}

export default Book;

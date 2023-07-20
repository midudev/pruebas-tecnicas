import { Modal } from "flowbite-react";

export const ModalBook = ({ openModal, setOpenModal, book }) => {
  const { title, cover, genre, synopsis: description, year, author } = book;

  return (
    <Modal
      show={openModal === "dimissible"}
      size={"4xl"}
      onClose={() => setOpenModal(undefined)}
      dismissible
    >
      <header className="bg-neutral-900 border border-transparent border-b-neutral-800 p-5">
        <h1 className="text-rose-600 text-3xl">{title}</h1>
      </header>
      <Modal.Body className="bg-neutral-900">
        <div className="flex gap-4">
          <div className="w-1/3">
            <img
              src={cover}
              alt={`${title} book cover`}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6 w-2/3">
            <h3 className="text-rose-700 text-3xl">Synopsis:</h3>
            <p className="text-base leading-relaxed text-white">
              {description}
            </p>
            <div>
              <h3 className="text-rose-700 text-3xl">
                Author:{" "}
                <span className="text-white text-base">{author.name}</span>
              </h3>
              <h3 className="text-rose-700 text-3xl">
                Other Books:{" "}
                <span className="text-neutral-500 text-xs italic">
                  click to view in wikipedia.
                </span>
              </h3>
              <ul className="text-neutral-500 leading-relaxed">
                {author.otherBooks.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`https://es.wikipedia.org/wiki/${item}`}
                      target="_blank"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Modal.Body>
      <footer className="bg-neutral-900 border-t-neutral-800 border border-transparent p-5">
        <button
          className="bg-rose-700 text-white py-2 px-3 rounded-lg hover:bg-rose-600"
          onClick={() => setOpenModal(undefined)}
        >
          close
        </button>
      </footer>
    </Modal>
  );
};

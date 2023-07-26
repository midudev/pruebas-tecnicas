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
      <header className="border border-transparent border-b-neutral-800 bg-neutral-900 p-5">
        <h1 className="text-3xl text-rose-600">{title}</h1>
      </header>
      <Modal.Body className="bg-neutral-900">
        <div className="flex gap-4">
          <div className="hidden w-1/3 md:block">
            <img
              src={cover}
              alt={`${title} book cover`}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6 md:w-2/3">
            <h3 className="text-3xl text-rose-700">Synopsis:</h3>
            <p className="text-base leading-relaxed text-white">
              {description}
            </p>
            <div>
              <h3 className="text-3xl text-rose-700">
                Author:{" "}
                <span className="text-base text-white">{author.name}</span>
              </h3>
              <h3 className="text-3xl text-rose-700">
                Other Books:{" "}
                <span className="text-xs italic text-neutral-500">
                  click to view in wikipedia.
                </span>
              </h3>
              <ul className="leading-relaxed text-neutral-500">
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
      <footer className="border border-transparent border-t-neutral-800 bg-neutral-900 p-5">
        <button
          className="rounded-lg bg-rose-700 px-3 py-2 text-white hover:bg-rose-600"
          onClick={() => setOpenModal(undefined)}
        >
          close
        </button>
      </footer>
    </Modal>
  );
};

import { useState } from "react";
import { BookButtons } from "./BookButtons";
import { ModalBook } from "./ModalBook";
import useBookStore from "../store/store";

export const Book = ({ book, added }) => {
  const [openModal, setOpenModal] = useState();
  const { title, cover } = book;

  const handleRemove = () => {
    // remove the book from the reading list
    const current = JSON.parse(window.localStorage.getItem("current"));
    const newList = current.filter((item) => item.title !== title);
    window.localStorage.setItem("current", JSON.stringify(newList));
    useBookStore.setState({ current: newList });
  };

  const handleAdd = () => {
    // add book to the reading list
    const current = JSON.parse(window.localStorage.getItem("current")) || [];
    const exist = current.filter((item) => item.title == title)[0];
    if (exist) return;
    window.localStorage.setItem("current", JSON.stringify([...current, book]));
    useBookStore.setState({ current: [...current, book] });
  };

  return (
    <div className="relative w-48 h-72">
      <div
        className="w-full h-full border-2 border-dashed border-neutral-700 rounded-lg hover:border-neutral-500 hover:cursor-pointer transition-all"
        onClick={() => setOpenModal("dimissible")}
      >
        <img
          src={cover}
          alt={`${title} image`}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <BookButtons
        added={added}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
      />
      <ModalBook
        openModal={openModal}
        setOpenModal={setOpenModal}
        book={book}
      />
    </div>
  );
};

import { useState } from "react";
import { BookButtons } from "./BookButtons";
import { ModalBook } from "./ModalBook";
import { animated, useSpring } from "@react-spring/web";
import useBookStore from "../store/store";

export const Book = ({ book, added }) => {
  const [openModal, setOpenModal] = useState();
  const { title, cover } = book;
  const isActive = useBookStore((state) => state.current).find(
    (item) => item.title === title,
  );

  const springs = useSpring({
    from: { scale: 0.8 },
    to: { scale: 1 },
  });

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
    <>
      {(!isActive && !added) || added ? (
        <animated.div className="relative h-72 w-48" style={springs}>
          <div
            className="h-full w-full rounded-lg border-dashed border-neutral-700 transition-all hover:cursor-pointer hover:border-neutral-500"
            onClick={() => setOpenModal("dimissible")}
          >
            <img
              src={cover}
              alt={`${title} image`}
              className="h-full w-full rounded-lg object-cover"
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
        </animated.div>
      ) : (
        ""
      )}
    </>
  );
};

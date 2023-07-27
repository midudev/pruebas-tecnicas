import React, { useEffect } from "react";
import JSConfetti from "js-confetti";
import { EnBibliotecaIcon, LeidoIcon, LeyendoIcon } from "../utils/Icons";
import useLibrary from "../../hooks/useLibrary";
import { BookStatus } from "../../context/helpers/interfaces/types";
import { initialStateEfecto } from "../../context/helpers/store/initialStateEfecto";

export default function StatusBook({ ISBN, status }) {
  const { changeStatusBook, classes, changeClasses } = useLibrary();

  function handleBlioteca() {
    changeStatusBook(BookStatus.IN_LIBRARY, ISBN);
    changeClasses(initialStateEfecto);
  }

  function handleEnLectura() {
    changeStatusBook(BookStatus.READING, ISBN);
    changeClasses({
      ...initialStateEfecto,
      classButton1:
        "flex items-center justify-center w-10 h-10 bg-green-500 rounded-full lg:h-12 lg:w-12 shrink-0",
      classLogo1:
        "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-green-500",
    });
  }

  function handleLeido() {
    if (status !== BookStatus.READ) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    changeStatusBook(BookStatus.READ, ISBN);
    changeClasses({
      ...initialStateEfecto,
      classButton1:
        "flex items-center justify-center w-10 h-10 bg-green-500 rounded-full lg:h-12 lg:w-12 shrink-0",
      classButton2:
        "flex items-center justify-center w-10 h-10 bg-green-500 rounded-full lg:h-12 lg:w-12 shrink-0",
      classLogo1:
        "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-green-500",
      classLogo2:
        "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-green-500 after:border-4 after:inline-block",
    });
  }

  useEffect(() => {
    if (status === BookStatus.IN_LIBRARY) {
      handleBlioteca();
    }

    if (status === BookStatus.READING) {
      handleEnLectura();
    }

    if (status === BookStatus.READ) {
      handleLeido();
    }
  }, []);

  if (status !== BookStatus.NOT_READ) {
    return (
      <div className="flex flex-col">
        <h3 className="text-center text-xl font-black transition-all duration-150 ease-linear">
          {status}
        </h3>
        <ol className="flex items-center mx-auto px-5 pt-5 w-full">
          <li
            className={
              "transition-all duration-150 ease-linear " + classes.classLogo1
            }
          >
            <button
              onClick={handleBlioteca}
              className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full lg:h-12 lg:w-12 shrink-0"
            >
              <EnBibliotecaIcon />
            </button>
          </li>
          <li
            className={
              "transition-all duration-150 ease-linear " + classes.classLogo2
            }
          >
            <button
              onClick={handleEnLectura}
              className={
                "transition-all duration-150 ease-linear " +
                classes.classButton1
              }
            >
              <LeyendoIcon />
            </button>
          </li>
          <li
            className={
              "transition-all duration-150 ease-linear " + classes.classLogo3
            }
          >
            <button
              onClick={handleLeido}
              className={
                "transition-all duration-150 ease-linear " +
                classes.classButton2
              }
            >
              <LeidoIcon />
            </button>
          </li>
        </ol>
      </div>
    );
  } else {
    <></>;
  }
}

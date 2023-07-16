"use client";

import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const READING_LIST_STORAGE_KEY = "readingList";

const getReadingList = () => {
  return JSON.parse(localStorage.getItem(READING_LIST_STORAGE_KEY)) || [];
};

const isInReadingList = (isbn) => {
  const list = getReadingList();
  return list.includes(isbn);
};

const addToReadingList = (isbn) => {
  const list = getReadingList(isbn);
  list.push(isbn);
  localStorage.setItem(READING_LIST_STORAGE_KEY, JSON.stringify(list));
};

const removeFromReadingList = (isbn) => {
  const list = getReadingList(isbn);
  const newList = list.filter((element) => element !== isbn);
  localStorage.setItem(READING_LIST_STORAGE_KEY, JSON.stringify(newList));
};

export default function PlusButton({ isbn }) {
  const [inReadingList, setInReadinglist] = useState(false);
  const onClickHander = (adding) => {
    if (adding) {
      addToReadingList(isbn);
    } else {
      removeFromReadingList(isbn);
    }
    setInReadinglist(adding);
  };
  useEffect(() => {
    setInReadinglist(isInReadingList(isbn));
  }, []);
  
  return (
    <a
      href="#"
      onClick={() => onClickHander(!inReadingList)}
      className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-red-700 rounded hover:bg-red-800 focus:outline-none"
    >
      {inReadingList ? (
        <>
          <CheckIcon className="h-5 w-5"></CheckIcon>
          Quitar de la lista
        </>
      ) : (
        <>
          <PlusIcon className="h-5 w-5"></PlusIcon>
          Añadir a la lista
        </>
      )}
    </a>
  );
}

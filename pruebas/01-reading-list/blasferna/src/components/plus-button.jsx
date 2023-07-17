"use client";

import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import {
  addToReadingList,
  isInReadingList,
  removeFromReadingList,
} from "@/lib/books";
import LoadingMini from "@/components/loading-mini";

export default function PlusButton({ isbn }) {
  const [inReadingList, setInReadinglist] = useState(null);

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

  if (inReadingList === null) {
    return <LoadingMini></LoadingMini>;
  }

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

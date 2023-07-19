"use client";

import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import {
  addToReadingList,
  isInReadingList,
  getInReadingList,
  removeFromReadingList,
} from "@/lib/books";
import LoadingMini from "@/components/loading-mini";
import { useAppContext } from "@/context/store";

export default function PlusButton({ isbn }) {
  const { inReadingList, setInReadingList } = useAppContext();
  const [checked, setChecked] = useState(null)

  const onClickHander = (adding) => {
    if (adding) {
      addToReadingList(isbn);
    } else {
      removeFromReadingList(isbn);
    }
    setChecked(adding);
    setInReadingList(getInReadingList());
  };
  useEffect(() => {
    setChecked(isInReadingList(isbn));
  }, []);

  useEffect(() => {
    setChecked(isInReadingList(isbn));
  }, [inReadingList]);

  if (checked === null) {
    return <LoadingMini></LoadingMini>;
  }

  return (
    <a
      href="#"
      onClick={() => onClickHander(!checked)}
      className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-red-700 rounded hover:bg-red-800 focus:outline-none"
    >
      {checked ? (
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

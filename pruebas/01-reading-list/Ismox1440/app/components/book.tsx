"use client";
import React from "react";
import useStore from "../store";
import { Book } from "@/models/book";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import HoverCardBook from "./hover-card";
import Image from "next/image";

const Book = ({ book }: { book: Book }) => {
  const setBook = useStore((state) => state);
  const handleClick = () => {
    setBook.setBook(book);
    console.log(setBook);
  };
  return (
    <HoverCard>
      <HoverCardTrigger>
        <article
          onClick={handleClick}
          className="cursor-pointer rounded border transition-all h-fit w-[120px] hover:shadow-xl hover:-translate-y-1"
        >
          <Image
            className="w-full max-h-[170px] rounded"
            width={118}
            height={170}
            src={book.cover}
            alt={book.title}
          />
        </article>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit">
        <HoverCardBook book={book} />
      </HoverCardContent>
    </HoverCard>
  );
};

export default Book;

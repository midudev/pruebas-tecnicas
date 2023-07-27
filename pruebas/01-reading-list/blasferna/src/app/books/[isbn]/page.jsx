"use client";

import { useEffect } from "react";
import BookDetail from "@/components/book-detail";
import OtherBooks from "@/components/other-books";
import RelatedBooks from "@/components/related-books";
import { getByISBN } from "@/lib/books";

export default function BookInfoPage({ params }) {
  const { isbn } = params;
  const book = getByISBN(isbn);

  useEffect(() => {
    return () => {
      document.getElementById("wrapper").style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <div className="pb-5 text-white">
        <section className="mt-5 flex flex-col gap-5 md:flex-row">
          <BookDetail
            book={book}
            onLoadImageColor={(color) => {
              document.getElementById(
                "wrapper",
              ).style.backgroundColor = `${color}26`;
            }}
          ></BookDetail>
        </section>
        <section className="mt-8">
          <RelatedBooks book={book}></RelatedBooks>
        </section>
        <section className="mt-8">
          <OtherBooks book={book}></OtherBooks>
        </section>
      </div>
    </>
  );
}

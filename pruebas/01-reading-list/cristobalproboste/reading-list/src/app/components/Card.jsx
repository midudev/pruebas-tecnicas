"use client";
import Image from "next/image";
import Badge from "./Badge";
import ButtonBar from "./ButtonBar";
import { useState } from "react";

const Card = ({ book }) => {
  const { title, author, isbn, cover, genre, pages, synopsis } = book;
  const { name: authorName, otherBooks } = author;
  const [show, setShow] = useState(false);
  console.log(book);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center text-white sm:mx-2 "
      key={isbn}
    >
      <header className="relative h-full w-full">
        <Image
          src={cover}
          alt="Picture of the author"
          width={400}
          height={400}
          className="absolute top-0 h-full w-full md:rounded-2xl"
        />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-90 p-4 md:rounded-2xl">
          <div className="flex flex-row items-center">
            <h1 className="text-2xl font-extrabold">
              {title},
              <span className="ml-1 text-2xl font-light">{book.year}</span>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue ml-4 h-8 w-8 text-blue-500"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                stroke-width="0"
                fill="currentColor"
              ></path>
            </svg>
            <div className="flex-grow"></div>
            <button onClick={handleShow}>
              {show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 3.66a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4c.028 .028 .057 .054 .094 .083l.092 .064l.098 .052l.081 .034l.113 .034l.112 .02l.117 .006l.115 -.007l.114 -.02l.142 -.044l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -1.497 -1.32l-2.293 2.291v-5.584l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          <p>
            por<span className="font-semibold"> {authorName}</span>
          </p>
          <div className="flex flex-row space-x-2">
            <Badge text={genre} />
            <Badge text={`${pages} páginas`} />
          </div>
          {show && (
            <>
              <section>
                <h2 className="mt-2 text-xl font-semibold">Sinopsis</h2>
                <p className="mt-2">{synopsis}</p>
              </section>
              <section>
                <h2 className="mt-2 text-xl font-semibold">Más del author</h2>
                <ul>
                  {otherBooks.map((book) => (
                    <li>{book}</li>
                  ))}
                </ul>
              </section>
            </>
          )}
          <ButtonBar />
        </div>
      </header>
    </section>
  );
};

export default Card;

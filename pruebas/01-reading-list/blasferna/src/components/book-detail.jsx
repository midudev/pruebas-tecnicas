"use client";

import AddRmButton from "@/components/add-rm-button";
import Image from "next/image";
import { getAverageColor } from "@/lib/utils";

export default function BookDetail({ book, seeMore = false, onLoadImageColor=()=>{} }) {
  return (
    <>
      <div className="flex justify-center lg:flex-none lg:justify-start">
        <div className="relative h-[363px] w-[234px] overflow-hidden rounded">
          <Image
            src={book.cover}
            className="object-cover"
            fill={true}
            onLoad={(e)=>{
              const color = getAverageColor(e.target);
              onLoadImageColor(color);
            }}
            alt={book.title}
          ></Image>
        </div>
      </div>
      <div>
        <h1 className="mb-1 text-3xl font-medium">{book.title}</h1>
        <div className="mb-1 font-medium text-gray-300">{book.author.name}</div>
        <div className="text-md text-gray-400">{book.pages} páginas</div>

        <div className="mb-6 mt-6 ">
          <p className="max-h-[70px] overflow-hidden text-gray-50">
            {book.synopsis}
          </p>
        </div>

        <div className="flex items-center">
          <AddRmButton isbn={book.ISBN}></AddRmButton>
          {seeMore && (
            <a
              href={`/books/${book.ISBN}`}
              className="ml-2 inline-flex items-center rounded bg-gray-900/50 px-3 py-2 text-center text-sm font-medium text-white hover:bg-gray-950/50 focus:outline-none"
            >
              Ver más
            </a>
          )}
        </div>

        <div className="mt-6 flex items-center">
          <div className="w-[70px] text-[13px] font-medium uppercase text-gray-400">
            Género
          </div>
          <div className="text-[15px]">{book.genre}</div>
        </div>
        <div className="mt-1 flex items-center">
          <div className="w-[70px] text-[13px] font-medium uppercase text-gray-400">
            Año
          </div>
          <div className="text-[15px]">{book.year}</div>
        </div>
        <div className="mt-1 flex items-center">
          <div className="w-[70px] text-[13px] font-medium uppercase text-gray-400">
            ISBN
          </div>
          <div className="text-[15px]">{book.ISBN}</div>
        </div>
      </div>
    </>
  );
}

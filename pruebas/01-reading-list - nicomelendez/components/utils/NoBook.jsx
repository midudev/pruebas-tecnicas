import React from "react";
import { EnBibliotecaIcon, NoBookIcon } from "./Icons";
import Link from "next/link";

export default function NoBook() {
  return (
    <div className="flex flex-col py-10 px-4 start">
      <div className="text-center ">
        <NoBookIcon />

        <h1 className="mt-6 font-bold tracking-tight text-gray-900 text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500 text-xl">
          Aún no has agregado un libro a tu biblioteca
        </p>
        <Link
          href="/"
          className="inline-flex items-center shrink-0 rounded-lg bg-white px-5 py-3 text-black hover:shadow-lg hover:bg-slate-200/90 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mt-6"
        >
          <EnBibliotecaIcon /> &nbsp; Explorar biblioteca
        </Link>
      </div>
    </div>
  );
}

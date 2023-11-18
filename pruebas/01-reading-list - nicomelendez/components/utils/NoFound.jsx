import { EnBibliotecaIcon } from "./Icons";
import Link from "next/link";

export default function NoFound() {
  return (
    <section className="text-center space-y-10">
      <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Uh-oh!
      </p>
      <div className="flex mx-auto w-[500px] aspect-video">
        <iframe
          src="https://gifer.com/embed/Ag7R"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </div>
      <p className="mt-4 text-gray-500 text-xl">
        No pudimos encontrar el libro.
      </p>

      <Link
        href="/"
        className="inline-flex items-center shrink-0 rounded-lg bg-white px-5 py-3 text-black hover:shadow-lg hover:bg-slate-200/90 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mt-6"
      >
        <EnBibliotecaIcon /> &nbsp; Explorar biblioteca
      </Link>
    </section>
  );
}

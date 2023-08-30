import Image from "next/image";
import BooksNotyfi from "./BooksNotyfi";

export default function Header() {
  return (
    <header className="pt-5 bg-white border-gray-200 dark:bg-gray-800">
      <div className="flex justify-between max-w-screen-xl">
        <a href="#" className="left-0 flex items-center">
          <Image
            src="/Books.png"
            width={98}
            height={98}
            alt="Books"
            className="object-cover object-center w-full h-full"
          />
          <span className="self-center text-xl font-semibold text-gray-400 whitespace-nowrap dark:text-white">
            UL
          </span>
        </a>
        <div className="w-48">
          <BooksNotyfi />
        </div>
      </div>
    </header>
  );
}

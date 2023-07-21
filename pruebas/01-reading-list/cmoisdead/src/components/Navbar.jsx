import { AiFillNotification, AiOutlineSearch } from "react-icons/ai";

export const Navbar = () => {
  return (
    <header>
      <nav className="container mx-auto flex w-full justify-between rounded-b-lg bg-neutral-900/75 px-3 py-2">
        <a className="classic grow-0 font-bold text-rose-700" href="/">
          Library & Books
        </a>
        <ul className="flex grow-0 gap-4">
          <a href="#books">Books</a>
          <a href="#authors">Authors</a>
        </ul>
        <div className="hidden grow-0 content-center items-center gap-4 md:flex">
          <AiFillNotification />
          <AiOutlineSearch />
        </div>
      </nav>
    </header>
  );
};

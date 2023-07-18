import { AiFillNotification, AiOutlineSearch } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className="flex justify-between w-full container mx-auto py-2 bg-neutral-900/75 rounded-b-lg px-3">
      <a className="font-bold text-rose-700 classic grow-0" href="/">Library & Books</a>
      <ul className="flex gap-4 grow-0">
        <a href="#">Home</a>
        <a href="#">Authors</a>
        <a href="#">About</a>
      </ul>
      <div className="md:flex content-center items-center gap-4 grow-0 hidden">
        <AiFillNotification />
        <AiOutlineSearch />
      </div>
    </nav>
  );
};

import { AiFillNotification, AiOutlineSearch } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className="flex justify-between w-full container mx-auto py-2 bg-neutral-900/75 rounded-b-lg px-3">
      <div className="font-bold text-sky-700">DOOM</div>
      <ul className="flex gap-4">
        <a href="#">Home</a>
        <a href="#">Authors</a>
        <a href="#">About</a>
      </ul>
      <div className="flex content-center items-center gap-4">
        <AiFillNotification />
        <AiOutlineSearch />
      </div>
    </nav>
  );
};

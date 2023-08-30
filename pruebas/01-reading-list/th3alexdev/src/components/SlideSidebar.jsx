import { CloseIcon } from "./Icons";
import UserReadList from "./UserReadList";

export default function SlideSidebar({ showSidebar, toggleSidebar }) {
  return (
    <aside
      className={` sm:opacity-100 sm:block absolute px-3 py-12 sm:px-4 sm:py-7 sm:w-4/12 sm:max-w-[420px] h-screen  bg-sidebar  top-0 right-0 transition-transform overflow-auto ${
        showSidebar ? "sm:translate-x-0 opacity-100 z-50" : "sm:translate-x-full opacity-0 z-[-50]"
      }`}
    >
      <header className="sticky sm:relative flex justify-between mb-4 items-center">
        <h1 className="text-lg font-semibold h-max">Lista de Deseos</h1>
        <button onClick={toggleSidebar}>
          <CloseIcon />
        </button>
      </header>
      <main>
        <UserReadList />
      </main>
    </aside>
  );
}

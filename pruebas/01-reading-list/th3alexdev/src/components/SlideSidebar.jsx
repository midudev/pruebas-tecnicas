import { CloseIcon } from "./Icons";
import UserReadList from "./UserReadList";

export default function SlideSidebar({ showSidebar, toggleSidebar }) {
  return (
    <aside
      className={`bg-sidebar sm:block absolute top-0 sm:left-[99%] 2xl:left-full px-3 py-8 sm:px-4 sm:py-7 sm:w-5/12 lg:w-4/12 sm:max-w-[420px] h-screen sm:transition-transform transition-opacity overflow-auto z-50 ${
        showSidebar
          ? "opacity-100 sm:translate-x-[-100%]"
          : "opacity-0 sm:translate-x-0"
      }
      `}
    >
      <header className="sticky sm:relative flex justify-between mb-4 items-center px-2">
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

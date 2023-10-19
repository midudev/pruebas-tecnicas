import { CloseIcon } from "./Icons";
import UserReadList from "./UserReadList";

export default function SlideSidebar({ showSidebar, toggleSidebar }) {
  return (
    <aside
      className={`bg-sidebar w-full 6xs:block absolute top-0 6xs:left-[99%] 2xl:left-full px-3 py-8 6xs:px-4 6xs:py-7 6xs:w-5/12 lg:w-4/12 6xs:max-w-[420px] h-screen 6xs:transition-transform transition-opacity overflow-auto z-50 ${
        showSidebar
          ? "opacity-100 6xs:translate-x-[-100%]"
          : "opacity-0 6xs:translate-x-0"
      }
      `}
    >
      <header className="sticky 6xs:relative flex justify-between mb-4 items-center px-2">
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

import {
  BookIcon,
  CerrarSesionIcon,
  EnBibliotecaIcon,
  UserIcon,
} from "@/components/utils/Icons";
import LogoTipo from "@/components/utils/LogoTipo";
import useLibrary from "@/hooks/useLibrary";

export default function Nav() {
  const { changeRoute, getUserAuth, loginUser, resetFilteredBooks } =
    useLibrary();

  return (
    <header className="w-full sm:max-w-4xl lg:max-w-6xl xl:max-w-[1600px] mx-auto py-10">
      <nav className="flex flex-col gap-y-10 md:gap-y-0 items-center justify-between md:flex-row">
        <button
          className="cursor-pointer flex justify-center"
          onClick={() => {
            resetFilteredBooks();
            changeRoute("/");
          }}
        >
          <LogoTipo />
        </button>
        <div className="flex justify-center flex-col items-center gap-y-5 gap-x-0 md:flex-row md:gap-y-0 md:gap-x-5 md:justify-end">
          <button
            onClick={() => {
              changeRoute("/misLibros");
            }}
            className="flex items-center shrink-0 rounded-lg bg-white px-5 py-3 text-black hover:shadow-lg hover:bg-slate-200/90 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer "
          >
            <EnBibliotecaIcon />
            &nbsp; Biblioteca
          </button>
          {getUserAuth() === null ? (
            <button
              onClick={() => {
                changeRoute("/login");
              }}
              className="flex items-center shrink-0 rounded-lg bg-white px-5 py-3 text-black hover:shadow-lg hover:bg-slate-200/90 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
            >
              <UserIcon />
              &nbsp; Iniciar seisón
            </button>
          ) : (
            <button
              onClick={() => {
                loginUser(null);
              }}
              className="flex items-center shrink-0 rounded-lg bg-white px-5 py-3 text-black  shadow-sm hover:bg-slate-300/90 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
            >
              <CerrarSesionIcon />
              &nbsp; Cerrar sesión
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

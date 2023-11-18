import { EyeIcon, UserIcon } from "../utils/Icons";
import Swal from "sweetalert2";
import { login } from "../../context/helpers/services/auth/login";
import Cargando from "../utils/Cargando";
import useLibrary from "../../hooks/useLibrary";

export default function LoginUsuario() {
  const { loginUser, changeRoute, getCargando, changeCargando } = useLibrary();

  const handleLogin = async (e) => {
    e.preventDefault();
    changeCargando(true);
    const fields = Object.fromEntries(new window.FormData(e.target));
    const { username, clave } = fields;

    const { respuesta, usuario } = await login(username, clave);

    if (respuesta.status === "error") {
      changeCargando(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrectos",
      });
      return;
    }

    changeCargando(false);
    loginUser(usuario);
    changeRoute("/");
  };
  return (
    <div className="mx-auto w-full pb-5">
      <form onSubmit={handleLogin} className="mb-0 mt-6 space-y-4 rounded-lg">
        <h3 className="text-center text-2xl font-bold text-black sm:text-4xl">
          Ingresa a tu cuenta
        </h3>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Expresa y comparte tus otros lectores
        </p>

        <div>
          <label htmlFor="username" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="text"
              name="username"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Username"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <UserIcon />
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Clave
          </label>

          <div className="relative">
            <input
              type="password"
              name="clave"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Clave"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <EyeIcon />
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="flex justify-center text-center w-full rounded-lg bg-white px-5 py-3 text-sm font-medium text-black"
        >
          {!getCargando() ? "Iniciar sesión" : <Cargando />}
        </button>
      </form>
    </div>
  );
}

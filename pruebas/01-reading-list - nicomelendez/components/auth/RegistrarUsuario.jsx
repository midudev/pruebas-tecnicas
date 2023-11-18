import React, { useState } from "react";
import { EyeIcon, UserIcon } from "../utils/Icons";
import { register } from "../../context/helpers/services/auth/register";
import Swal from "sweetalert2";
import Cargando from "../utils/Cargando";
import useLibrary from "../../hooks/useLibrary";

export default function RegistrarUsuario({ isOpen }) {
  const [estado, setEstado] = useState(isOpen);

  const { loginUser, getCargando, changeCargando, changeRoute } = useLibrary();

  const handleLogin = async (e) => {
    e.preventDefault();
    changeCargando(true);
    const fields = Object.fromEntries(new window.FormData(e.target));
    const { username, clave } = fields;

    const { respuesta, usuario } = await register(username, clave);

    if (respuesta.status === "error") {
      changeCargando(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya existe un usuario con ese nombre, elige otro",
      });
      return;
    }
    changeCargando(false);
    loginUser(usuario);
    if (isOpen) {
      changeRoute("/");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-y-5">
      {!estado ? (
        <>
          <h2 className="text-2xl font-bold text-center">
            ¡Tu opinión importa!
          </h2>
          <button
            onClick={() => {
              setEstado(!estado);
            }}
            className="flex max-w-[170px] font-bold items-center gap-x-3 shrink-0 rounded-lg bg-white px-5 py-3 text-black hover:shadow-lg hover:bg-slate-300/90 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
          >
            <UserIcon />
            Registrarme
          </button>
        </>
      ) : (
        <></>
      )}

      {!estado ? (
        <></>
      ) : (
        <div className="mx-auto w-full pb-5">
          <form
            onSubmit={handleLogin}
            className="mb-0 mt-6 space-y-4 rounded-lg"
          >
            <h3 className="text-center text-2xl font-bold text-black sm:text-4xl">
              Únete a la comunidad
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
              {!getCargando() ? "Registrarme" : <Cargando />}
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

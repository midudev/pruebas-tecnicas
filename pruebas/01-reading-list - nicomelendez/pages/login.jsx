import Layout from "../layout/Layout";
import LoginUsuario from "../components/auth/LoginUsuario";
import { useState } from "react";
import RegistrarUsuario from "../components/auth/RegistrarUsuario";

export default function Login() {
  const [estado, setEstado] = useState(false);

  return (
    <Layout title={estado ? "Únete" : "Iniciar sesión"}>
      <section className="mx-auto w-full px-10 max-w-[500px]">
        {!estado ? <LoginUsuario /> : <RegistrarUsuario isOpen={true} />}
        <div className="text-center">
          <p>
            {!estado ? "¿No tienes una cuenta?," : "¿Tienes una cuenta?,"}{" "}
            <button
              onClick={() => setEstado(!estado)}
              className="font-bold hover:underline"
            >
              {!estado ? "Únete" : "Iniciar sesión"}
            </button>
          </p>
        </div>
      </section>
    </Layout>
  );
}

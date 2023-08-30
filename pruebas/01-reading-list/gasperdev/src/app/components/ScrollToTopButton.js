"use client";
import { useEffect, useState } from "react";
import { TopIcon } from "../utils/Icons";
export default function ScrollToTopButton() {
  // Instanciamos una variable de estado llamada isVisible (la cual inicialmente es falsa) que nos ayudará a determinar si el botón debe mostrarse o no.
  const [isVisible, setIsVisible] = useState(false);

  // Utilizamos el Hook useEffect para ejecutar una función cada vez que se renderiza nuestro componente.
  useEffect(() => {
    // Dentro de useEffect, declaramos una función handleScroll la cual se encarga de chequear la posición actual
    // del scroll vertical de nuestro documento. Si la posición es superior a 0, significa que el usuario ha hecho
    // scroll hacia abajo, por lo tanto actualizamos el estado de isVisible a true.
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    // Añadimos el listener del evento 'scroll' al objeto window. Cada vez que el usuario realiza scroll, ejecutamos nuestra
    // función handleScroll.
    window.addEventListener("scroll", handleScroll);

    // Finalmente, utilizando el mecanismo de limpieza de useEffect, nos aseguramos de eliminar el listener del evento
    // 'scroll' cuando nuestro componente sea desmontado.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // El array de dependencias vacío indica que useEffect solo se ejecutará una vez después del primer renderizado.

  // Esta función se encargará de hacer que la ventana desplace su scroll hasta la parte superior (top: 0)
  // cuando sea invocada.
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <div
        className={`flex items-end justify-end w-full ${
          isVisible ? "" : "hidden"
        }`}
      >
        <button
          className="fixed z-10 flex items-center justify-center font-medium text-purple-500 border border-purple-700 rounded-full cursor-pointer dark:text-white bg-slate-200 dark:bg-gray-900 hover:pb-10"
          onClick={handleScrollToTop}
        >
          <TopIcon />
        </button>
      </div>
    )
  );
}

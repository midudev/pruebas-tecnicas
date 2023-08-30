import { useEffect, useRef } from "react";

// Definimos nuestro Hook personalizado
export const useClickOutside = (callback) => {
  // Creamos una referencia que se usará para referenciar el elemento del DOM
  const ref = useRef(null);

  // Usamos useEffect para manejar los efectos secundarios
  useEffect(() => {
    // Definimos la función que manejará los clics fuera del elemento
    const handleClickOutside = (event) => {
      // Si el clic fue fuera del elemento, ejecutamos la función de callback
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    // Añadimos el detector de eventos al documento
    document.addEventListener("mousedown", handleClickOutside);

    // Devolvemos una función de limpieza que eliminará el detector de eventos
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]); // Pasamos callback como dependencia para que se ejecute cada vez que cambie

  // Devolvemos la referencia para que pueda ser usada por el componente
  return ref;
};

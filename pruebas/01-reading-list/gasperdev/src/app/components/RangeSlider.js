"use client";
import { useBooksData } from "../context/useBooks";
export default function RangeSlider() {
  // Usamos el Hook personalizado useBooksData para obtener el valor actual de pagesAllBooks y la función para actualizarlo, setPagesAllBooks. Este estado podría representar, por ejemplo, el número de páginas que el usuario ha seleccionado en un deslizador (slider)
  const { pagesAllBooks, setPagesAllBooks } = useBooksData();

  // Esta es una función que se ejecutará cuando el usuario interactúe con el deslizador
  const handleSliderChange = (event) => {
    // Actualizamos el número de páginas seleccionado con el valor actual del deslizador.
    // event.target.value obtiene el valor actual del elemento HTML que disparó el evento (en este caso, el deslizador).
    setPagesAllBooks(event.target.value);
  };

  return (
    <div className="flex w-full text-sm font-normal text-gray-900 rounded-lg bg-slate-200 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white ">
      <p className="py-2.5 px-4"> Paginas:</p>
      <input
        type="range"
        value={pagesAllBooks}
        max={2000}
        onChange={handleSliderChange}
        className="w-full h-2 mt-4 text-gray-900 bg-white rounded-lg appearance-none cursor-pointertext-sm"
      />
      <p className="py-2.5  px-4"> {pagesAllBooks}</p>
    </div>
  );
}

import { BooksProvider } from "@/context/BooksContext";
import { CoreProvider } from "@/context/CoreContext";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

/**
 * Componente App
 * @param {object} Component - Componente principal de la aplicación.
 * @param {object} pageProps - Propiedades de la página.
 * @returns {JSX.Element} - Elemento JSX que representa la aplicación principal.
 */
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      {/* Proveedor de contexto principal */}
      <CoreProvider>
        {/* Proveedor de contexto de libros */}
        <BooksProvider>
          {/* Componente principal */}
          <Component {...pageProps} />
        </BooksProvider>
      </CoreProvider>
    </ThemeProvider>
  );
}

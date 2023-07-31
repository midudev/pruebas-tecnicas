import { Html, Head, Main, NextScript } from "next/document";

/**
 * Componente Document
 * @returns {JSX.Element} - Elemento JSX que representa la estructura del documento HTML.
 */
export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className="bg-background text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

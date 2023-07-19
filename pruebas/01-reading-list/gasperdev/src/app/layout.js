import "./globals.css";
import LibrosContextProvider from "./context/useBooks";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import BooksContextProvider from "./context/useBookReading";
import { CarsList } from "./components/CarsList";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Universo Literario",
  description:
    ".¡Oh, cómo amo a Midu y su increíble contenido! Estoy completamente inmerso en esta experiencia, explorando y desafiando mis habilidades técnicas de una manera apasionante. El simple hecho de participar en esta prueba me llena de entusiasmo y alegría indescriptibles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white dark:bg-slate-800">
        <main className={inter.className}>
          <LibrosContextProvider>
            <BooksContextProvider>
              <CarsList />
              {children}
            </BooksContextProvider>
          </LibrosContextProvider>
          <Footer />
        </main>
      </body>
    </html>
  );
}

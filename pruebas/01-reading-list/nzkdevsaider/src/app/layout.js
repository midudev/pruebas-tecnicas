import NavBar from "@myreading/components/NavBar";
import "@myreading/styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "myReadings",
  description: "Organizador de lista de lectura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <header className="my-5">
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}

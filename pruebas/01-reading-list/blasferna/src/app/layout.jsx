import Navigation from "@/components/navigation";
import { AppProvider, FilterProvider } from "@/context/store";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BookBuddy",
  description: "Prueba técnica desarrollada por Blás Isaias Fernández para Midudev",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={`bg-gray-700 ${inter.className}`}>
        <div className="min-h-screen transition-all duration-300" id="wrapper">
          <FilterProvider>
            <AppProvider>
              <Navigation></Navigation>
              <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                {children}
              </main>
              {modal}
            </AppProvider>
          </FilterProvider>
        </div>
      </body>
    </html>
  );
}

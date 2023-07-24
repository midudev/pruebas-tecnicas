import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider, FilterProvider } from "@/context/store";
const inter = Inter({ subsets: ["latin"] });
import Navigation from "@/components/navigation";

export const metadata = {
  title: "BookBuddy",
  description: "App desarrollada como prueba técnica según requerimientos de midudev",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className="bg-gray-700">
        <FilterProvider>
          <AppProvider>
            <Navigation></Navigation>
            <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              {children}
            </main>
            {modal}
          </AppProvider>
        </FilterProvider>
      </body>
    </html>
  );
}

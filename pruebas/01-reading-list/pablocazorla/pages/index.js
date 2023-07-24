import Head from "next/head";
import { Montserrat } from "next/font/google";
import MainHeader from "@/components/mainHeader";
import BookList from "@/components/bookList";
import Filters from "@/components/filters";
import Tabs from "@/components/tabs";
import { useState, useEffect } from "react";
import BookListHeader from "@/components/bookListHeader";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <>
      <Head>
        <title>Lista de lectura de libros</title>
        <meta
          name="description"
          content="Listado de libros en el que puedes seleccionar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {rendered && (
        <main className={montserrat.className}>
          <MainHeader />
          <div className="container">
            <Tabs />
            <header className="book-list_header">
              <BookListHeader />
              <Filters />
            </header>

            <BookList />
          </div>
        </main>
      )}
    </>
  );
}

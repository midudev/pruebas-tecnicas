"use client";
import SideBarHeader from "@/components/Page/Sidebar";
import SnackBarComponent from "@/components/UI/SnackBar";
import { persister, store } from "@/store";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index" />
        <title>Trending Books</title>
        <meta name="description" content="App web for Trending Books " />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="Kevnnard" />
        <meta name="copyright" content="Kevnnard" />
        <meta
          name="keywords"
          content="nextjs, ts, redux, redux-toolkit, tailwindcss"
        />
        <link rel="icon" href="/images/logo/logo.png"></link>
      </head>
      <body className={inter.className}>
        {/* ↓↓ PROVEEDOR PARA ALMECENAR DATOS CENTRALIZADOS ↓↓ */}
        <Provider store={store}>
          {/* ↓↓ FUNCION PARA PERSISTIR DATOS EN EL STORAGE ↓↓ */}
          <PersistGate loading={false} persistor={persister}>
            {/* ↓↓ COMPONENTE DE SIDEBAR LISTA DE LIBROS POR LEER ↓↓ */}
            <SideBarHeader />
            {children}
            {/* ↓↓ COMPONENTE PARA NOTIFICAR ACCIONES DEL USUARIO - AGREGAR _ BORRAR ↓↓ */}
            <SnackBarComponent />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}

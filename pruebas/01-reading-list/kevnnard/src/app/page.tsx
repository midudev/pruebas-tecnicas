"use client";
import AllBooksComponent from "@/components/Page/AllBooks";
import Featured from "@/components/Page/Featured";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main>
      {/*  ↓↓ COMPONENTE PARA BANNER DE LIBRO DESTACADO UTILIZANDO EL ISBN PARA OBTENER SUS DATOS ↓↓ */}
      <Suspense fallback={<Loading />}>
        <Featured ISBN="978-0307743657" />
      </Suspense>
      {/* ↓↓ COMPONENTE PARA CATALOGO DE LIBROS DISPONIBLES  ↓↓ */}
      <Suspense fallback={<Loading />}>
        <AllBooksComponent />
      </Suspense>
    </main>
  );
}

import { Header, Sidebar } from "@/components/ui";
import React from "react";

/**
 * Componente MainLayout
 * @param {object} children - Componentes hijos que se mostrarán dentro del diseño principal.
 * @returns {JSX.Element} - Elemento JSX que representa el diseño principal de la aplicación.
 */
export default function MainLayout({ children }) {
  return (
    <div className="flex">
      {/* Barra lateral */}
      <Sidebar />

      <div className="w-full h-screen overflow-y-auto">
        {/* Encabezado */}
        <Header />

        {/* Contenido principal */}
        {children}
      </div>
    </div>
  );
}

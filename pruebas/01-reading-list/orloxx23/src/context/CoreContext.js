import { createContext, useState } from "react";

export const CoreContext = createContext();

/**
 * Componente CoreProvider
 * @param {object} children - Componentes hijos envueltos por el proveedor de contexto.
 * @returns {JSX.Element} - Elemento JSX que representa el proveedor de contexto principal.
 */
export const CoreProvider = ({ children }) => {
  // Estado del proveedor de contexto
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Función para alternar el estado del cajón (drawer)
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Proveedor de contexto principal
  return (
    <CoreContext.Provider value={{ toggleDrawer, drawerOpen }}>
      {children}
    </CoreContext.Provider>
  );
};

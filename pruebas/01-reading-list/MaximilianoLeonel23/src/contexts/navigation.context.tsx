import { createContext, useContext, useState } from "react";

export const NavigationContext = createContext<INavigationState | null>(null);

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context)
    throw new Error("useNavigationContext debe usarse con un provider");
  return context;
};

interface Props {
  children: React.ReactNode;
}

interface INavigationState {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NavigationProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavigationContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavigationContext.Provider>
  );
};

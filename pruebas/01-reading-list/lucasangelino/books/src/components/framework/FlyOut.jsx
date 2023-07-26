import React, { useState, useContext } from "react";
import { MenuIcon } from "./icons/index";

const FlyOutContext = React.createContext();
FlyOutContext.displayName = "FlyOutContext";

export const FlyOut = ({ children, className }) => {
  const [open, toggle] = useState(false);

  return (
    <FlyOutContext.Provider value={{ open, toggle }}>
      <div
        className={`slow absolute right-2 top-2 flex flex-col gap-1 items-end ${className}`}
      >
        {children}
      </div>
    </FlyOutContext.Provider>
  );
};

const Toggle = () => {
  const { open, toggle } = useContext(FlyOutContext);
  return (
    <button
      className={`rounded-full ${
        open ? "rounded-br-none " : ""
      } bg-slate-100 duration-200`}
      onClick={() => toggle(!open)}
    >
      <MenuIcon />
    </button>
  );
};
const List = ({ children }) => {
  const { open } = useContext(FlyOutContext);
  return (
    open && (
      <ul className={`bg-gray-100 p-2 rounded-xl rounded-tr-none`}>
        {children}
      </ul>
    )
  );
};

const Item = ({ children, handleClick }) => {
  return (
    <li className="hover:cursor-pointer" onClick={handleClick}>
      {children}
    </li>
  );
};

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;

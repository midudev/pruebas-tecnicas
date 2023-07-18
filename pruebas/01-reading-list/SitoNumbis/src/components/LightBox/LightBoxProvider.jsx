/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const LightBoxContext = createContext();

/**
 * 
 * @param {object} lightBoxState 
 * @param {object} action 
 * @returns 
 */
const lightBoxReducer = (lightBoxState, action) => {
  switch (action.type) {
    case "set": {
      const { id } = action;
      return { id };
    }
    case "remove":
      return {};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const LightBoxProvider = ({ children }) => {
  const [lightBoxState, setLightBoxState] = useReducer(lightBoxReducer, {});

  const value = { lightBoxState, setLightBoxState };
  return (
    <LightBoxContext.Provider value={value}>
      {children}
    </LightBoxContext.Provider>
  );
};

LightBoxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useLightBox = () => {
  const context = useContext(LightBoxContext);
  if (context === undefined)
    throw new Error("lightBoxContext must be used within a Provider");
  return context;
};

export { LightBoxProvider, useLightBox };

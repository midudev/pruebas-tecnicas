/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useReducer } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const ModeContext = createContext();

const modeReducer = (modeState, action) => {
  switch (action.type) {
    case "toggle": {
      return {
        mode: !modeState.mode,
      };
    }
    case "set":
      return {
        mode: action.to,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const ModeProvider = ({ children }) => {
  const [modeState, setModeState] = useReducer(modeReducer, {
    mode: true,
  });

  const value = { modeState, setModeState };
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

ModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useMode = () => {
  const context = useContext(ModeContext);
  if (context === undefined)
    throw new Error("modeContext must be used within a Provider");
  return context;
};

export { ModeProvider, useMode };

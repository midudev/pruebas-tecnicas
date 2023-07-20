/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer, useContext } from "react";

// prop-types is a filters for typechecking of props
import PropTypes from "prop-types";

const FiltersContext = createContext();

/**
 *
 * @param {object} filtersState
 * @param {object} action
 * @returns
 */
const filtersReducer = (filtersState, action) => {
  const { type } = action;
  switch (type) {
    case "reset": {
      return {
        genre: "",
        title: "",
        pages: 0,
      };
    }
    case "set-filter": {
      const { filter, value } = action;
      filtersState[filter] = value;
      return {
        ...filtersState,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const FiltersProvider = ({ children }) => {
  const [filtersState, setFiltersState] = useReducer(filtersReducer, {
    pages: 0, // current pages filter
    genre: "", // current genre filter
    title: "", // current title filter
  });

  const value = { filtersState, setFiltersState };
  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useFilters = () => {
  const context = useContext(FiltersContext);
  if (context === undefined)
    throw new Error("filtersContext must be used within a Provider");
  return context;
};

export { FiltersProvider, useFilters };

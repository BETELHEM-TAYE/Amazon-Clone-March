import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer, initialState } from "../../utility/reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

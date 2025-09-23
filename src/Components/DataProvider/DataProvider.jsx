import { createContext, useReducer } from "react";

//create context to provide a value
export let DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    //data context returns state and despatch
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

import {createContext, useReducer} from "react";
import PropTypes from 'prop-types';
// import { reducer, intialState } from "../../utility/reducer";
export const DataContext = createContext()


 export const DataProvider =({children,reducer,intialState})=> {
    return(
        <DataContext.Provider value ={useReducer(reducer, intialState)}>
{children}
        </DataContext.Provider>
    )
 }

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
  reducer: PropTypes.func.isRequired,
  intialState: PropTypes.object.isRequired,
};



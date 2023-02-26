import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { actionTypes } from "../State/ProductState/actionTypes";
import {
  initialstate,
  ProductReducer,
} from "../State/ProductState/ProductReducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialstate);
  console.log(state);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data })
      )
      .catch((error) => dispatch({ type: actionTypes.FETCHING_ERROR }));
  }, []);

  const value = {
    state,
    dispatch,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};
export default ProductProvider;

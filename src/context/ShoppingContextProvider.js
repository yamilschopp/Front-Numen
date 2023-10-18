import { createContext, useState, useReducer, useEffect } from "react";
import { ShoppingReducer, MenuInitialState } from "@/Reducer/ShoppingReducer";
import { TYPES } from "@/Actions/ShoppingActions";
import axios from "axios";


export const ShoppingContext = createContext()


const ShoppingContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(ShoppingReducer, MenuInitialState);
 
    const { products, cart } = state;
    

  // solicitud de datos a db.json mediante async/away

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:4000/products",
      cart: "http://localhost:4000/cart",
    };
    const responseProducts = await axios.get(ENDPOINTS.products),
      responseCart = await axios.get(ENDPOINTS.cart);

    const productsList = responseProducts.data,
      cartItems = responseCart.data;

    const data = {
      products: productsList,
      cart: cartItems,
    };

    dispatch({ type: TYPES.READ_STATE, payload: data });
  };

  useEffect(() => {
  
    updateState();
  }, []);

  const data = {state, updateState}
  return (
   <ShoppingContext.Provider value ={data}>
    {children}
   </ShoppingContext.Provider>
  )
}


export default ShoppingContextProvider




 

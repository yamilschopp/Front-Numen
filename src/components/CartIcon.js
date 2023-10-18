import Image from "next/image";
import { ShoppingContext } from "@/context/ShoppingContextProvider";
import { useContext, useEffect, useState } from "react";
import ShoppingCart from "./SoppingCart/ShoppingCart";



const CartIcon = () => {
  
const data = useContext(ShoppingContext);


const {state, updateState} = data;
const {cart} = state;



let counter = cart.reduce((count, item) => count + item.quantity, 0)

function handleClickAnywhere() {
  updateState()
 }

 useEffect(() => {
  
  document.addEventListener('click', handleClickAnywhere);
  
  return () => {
    document.removeEventListener('click', handleClickAnywhere);
  
  };
  
},[]);
  
  

  return (
    <div className=" flex justify-end mr-3 p-8 z-90">
        <p className="bg-red-600 flex z-40 pb-0.5 pl-1 items-center absolute text-white text-s font-bold
         rounded-full w-[20px] h-[20px]">{counter}</p>
       <Image className="z-39 absolute border-2 border-red-700 rounded-full p-1"
        src="/images/cart-icon.png"
        alt = "cartwidget"
        width="50"
        height="50"
      />
      </div>
  )
}

export default CartIcon
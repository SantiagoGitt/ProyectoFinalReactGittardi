import { createContext } from "react"
import React from 'react'
import { useState } from "react"

export const CartContext = createContext();

export const ProviderCarrito = ({children}) => {
    const [Cart, setCart]= useState([]);
    const isInCart= (id) => Cart.find((Datos) => Datos.id === id);
    const addToCart= (Datos, count)=> {
        console.log(Datos,producto)
    };
  return (
    <CartContext.Provider value={{ Cart}}>
     {children}   
    </CartContext.Provider>
  )
}

export default ProviderCarrito
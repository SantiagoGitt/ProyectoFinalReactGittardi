import { createContext } from "react"
import React from 'react'
import { useState } from "react"
import { act } from "react-dom/test-utils";

export const CartContext = createContext();

const ProviderCarrito = ({children}) => {
    const [Cart, setCart]= useState([]);
    console.log(Cart)
    const isInCart= (id) => Cart.find((Item) => Item.id === id)? true:false;
    const addToCart= (Item, initial)=> {
        if (isInCart(Item.id)){
          setCart(
            Cart.map((Datos)=>{return Datos.id === Item.id ? {...Datos,initial: (Datos.initial += initial)} : Datos;}));
          }
          
          else {setCart([...Cart, {...Item, initial}])}
    };
const ClearCart = () =>{
  setCart([])
};

const GetTotalPrice = () => {
  return Cart.reduce((prev, act) => prev + act.initial * act.precio,0 );
};

const removeItem = (idToRemove) =>{
  let newCart= Cart.filter(ItemInCart=>(ItemInCart.id !== idToRemove))
  setCart(newCart);
};
  return (
    <CartContext.Provider value={{ Cart, addToCart, ClearCart, removeItem, GetTotalPrice}}>
     {children}   
    </CartContext.Provider>
  )
}

export default ProviderCarrito
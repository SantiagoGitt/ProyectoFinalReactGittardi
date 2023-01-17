import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/Context';
import { Link } from "react-router-dom";
import "./Cart.css"


const Cart = () => {
    const {Cart, GetTotalPrice, getTotalItemCount, removeItem}= useContext(CartContext)
  return (
    <section className="container">
    <div >{Cart.map((item=>(
        <>
        <div key={item.id}>
        <h1>{item.nombre}</h1>
        <img src={item.img}/>
        <h1>${item.precio}</h1>
        <h1>Precio Total ${GetTotalPrice()}</h1>
        <h1>Cantidad de items: {getTotalItemCount()}</h1>

        </div></>
        )))}
                <Link to="/Checkout">Checkout</Link>
    </div></section>
  )
}

export default Cart
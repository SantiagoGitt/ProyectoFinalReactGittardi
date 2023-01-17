import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/Context';
import { Link } from "react-router-dom";


const Cart = () => {
    const {Cart, GetTotalPrice}= useContext(CartContext)
  return (
    <div >{Cart.map((item=>(
        <>
        <div key={item.id}>
        <h1>{item.nombre}</h1>
        <img src={item.img}/>
        <h1>${item.precio}</h1>
        <h1>Precio Total ${GetTotalPrice()}</h1>
        <Link to="/Checkout">Checkout</Link>
        </div></>
        )))}
    </div>
  )
}

export default Cart
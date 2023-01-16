import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Context'


const Cart = () => {
    const {Cart, GetTotalPrice}= useContext(CartContext)
  return (
    <div>{Cart.map((item=>(
        <>
        <h1>{item.nombre}</h1>
        <h1>{item.img}</h1>
        <h1>${item.precio}</h1>
        <h1>Precio Total ${GetTotalPrice()}</h1></>)))}
    </div>
  )
}

export default Cart
import React from 'react'
import CartWidget from './CartWidget'
import { useState } from 'react';

const bar=document.getElementById("#1")
const NavBar=()=>{
const[Carrito, SetCarrito] =useState([]); 
const onAdd= (productos) =>{
  const existe = Carrito.find(x => x.id === productos.id);
  if (existe){
    SetCarrito(Carrito.map(x => x.id === productos.id ? {...existe, qty:existe.qty +1} : x));
  }
  else{
    SetCarrito([...Carrito, { ...productos, qty: 1}]);
  }
};
return(
<div>
<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#!">Fravega</a>
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#"></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Heladeras</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Ventiladores</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Microondas</a>
  <CartWidget onAdd={onAdd} Carrito={Carrito}></CartWidget>
  </li>
  </ul>
  </nav>
</div>
)
}

export default NavBar
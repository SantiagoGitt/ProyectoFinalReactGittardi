import React from 'react'
import CartWidget from './CartWidget'

const bar=document.getElementById("#1")
const NavBar=()=>{
return(
<div>
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
    <a class="nav-link disabled">Microondas</a>
  <CartWidget></CartWidget>
  </li>
  </ul>
</div>
)
}

export default NavBar
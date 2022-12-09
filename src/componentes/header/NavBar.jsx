import React from 'react'



const bar=document.getElementById("#1")
const NavBar=()=>{

return(
<div>
<nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#!">Fravega</a>
  <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#"></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Heladeras</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Ventiladores</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Microondas</a>

  </li>
  </ul>
  </nav>
</div>
)
}

export default NavBar
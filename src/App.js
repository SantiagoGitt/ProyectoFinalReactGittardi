import { useState } from 'react';
import './App.css';
import NavBar from './componentes/header/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import datos from './componentes/ItemListContainer/productos'
import Producto from './componentes/main/Producto';


function App() {
  const{productos} = datos;

  return (
    <div>
      <div>
     <NavBar></NavBar>
     </div>
     <section>
     <ItemListContainer productos={productos}></ItemListContainer></section>
     </div>
  );
}

export default App;

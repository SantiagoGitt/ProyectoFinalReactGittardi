import { useState } from 'react';
import './App.css';
import NavBar from './componentes/header/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import datos from './componentes/ItemListContainer/productos'
import Producto from './componentes/main/Producto';
import CartWidget from './componentes/header/CartWidget';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemListContainer/ItemDetailContainer';


function App() {
  const{productos} = datos;
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
  return (
  <BrowserRouter>
    <div>
      <div>
     <NavBar></NavBar>
     </div>
     <Routes>
      <Route path="/" element={<ItemListContainer productos={productos}/>}/>
      <Route path="/Detail" element={<ItemDetailContainer/>}/>


      </Routes>
     </div>
  </BrowserRouter>
  );
}

export default App;

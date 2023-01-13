
import './App.css';
import NavBar from './componentes/header/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import datos from './componentes/ItemListContainer/Datos'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { ItemDetailContainer } from './componentes/ItemListContainer/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
  <div className='container--app'>
    <BrowserRouter>
      <div>
     <NavBar></NavBar>
     </div>
     <Routes>
      <Route path="/" element={<ItemListContainer datos={datos}/>}/>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
      <Route path="/Detail" element={<ItemDetailContainer/>}/>
      <Route path="/datos/:IdDatos" element={<ItemDetailContainer/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

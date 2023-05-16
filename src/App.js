
import './App.css';
import NavBar from './componentes/header/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import datos from './componentes/ItemListContainer/Datos'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { ItemDetailContainer } from './componentes/Items/ItemDetailContainer/ItemDetailContainer';
import ProviderCarrito from "./componentes/cart/context/Context";
import Cart from './componentes/cart/Cart';
import  CheckoutForm  from './componentes/cart/checkout/CheckoutForm';
import  Gracias  from './componentes/cart/Gracias/Gracias';


function App() {
  return (
<ProviderCarrito>
  <div className='container--app'>
    <BrowserRouter>
      <div>
     <NavBar></NavBar>
     </div>
     <Routes>
      <Route path="/" element={<ItemListContainer datos={datos}/>}/>
      <Route path="/categoria/:idCategory" element={<ItemListContainer/>}/>
      <Route path="/Detail" element={<ItemDetailContainer/>}/>
      <Route path="/items/:IdDatos" element={<ItemDetailContainer/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/CheckoutForm" element={<CheckoutForm/>}/>
      <Route path="/Gracias" element={<Gracias/>}/>


      </Routes>
      </BrowserRouter>
    </div>
    </ProviderCarrito>
  );
}

export default App;

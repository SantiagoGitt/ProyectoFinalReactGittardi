import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/header/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <div>
     <NavBar></NavBar>
     </div>
     <section>
     <ItemListContainer></ItemListContainer></section>
     </div>
  );
}

export default App;

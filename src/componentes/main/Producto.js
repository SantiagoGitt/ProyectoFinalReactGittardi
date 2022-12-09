import react from 'react'
import productos from '../ItemListContainer/productos'

function Producto(props){
    const {Producto,onAdd}= props;
    return(
        <div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src={productos.img} alt={productos.name}></img>
                <div class="card-body">
                <h1>{productos.name}</h1>
                <p class="card-text">precio: {productos.precio}</p>
                <a onClick={onAdd} class="btn btn-primary">Añadir</a>
                </div>
            </div>
          
            </div>
    )

}

export default Producto
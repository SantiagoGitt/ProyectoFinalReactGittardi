import react from 'react'
import productos from '../ItemListContainer/productos'

function Producto(props){
    const {productos,onAdd}= props;
    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={productos.img} alt={productos.nombre}></img>
                <div className="card-body">
                <h1>{productos.nombre}</h1>
                <p className="card-text">precio: {productos.precio}</p>
                <a onClick={onAdd} className="btn btn-primary">Añadir</a>
                </div>
            </div>
          
            </div>
    )

}

export default Producto
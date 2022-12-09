import react from 'react'
import productos from '../ItemListContainer/productos'

function Producto(props){
    const {producto,onAdd}= props;
    return(
        <div className='row'>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={producto.img} alt={producto.nombre}></img>
                <div className="card-body">
                <h1>{producto.nombre}</h1>
                <p className="card-text">precio: {producto.precio}</p>
                <button onClick={()=> onAdd(producto)} className="btn btn-primary">Añadir</button>
                </div>
            </div>
          
            </div>
    )

}

export default Producto
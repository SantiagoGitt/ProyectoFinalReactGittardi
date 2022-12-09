import React from 'react'
import Producto from '../main/Producto';

function ItemListContainer(datos){
const{productos, onAdd} = datos;       
return(
    <div>
        <main>
            <h2>Heladeras</h2>
            <div>
            {productos.map((producto)=>(
            <Producto key={producto.id} producto={producto} onAdd={onAdd}></Producto>
            ))}
            </div>
        </main>
    </div>
)}

export default ItemListContainer
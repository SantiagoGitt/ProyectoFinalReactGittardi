import React from 'react'
import { useState } from 'react';
import Producto from '../main/Producto';
import getItem from '../MockApi/mockService';
import datos from './productos';

function ItemListContainer(datos){
const[Bienes, setBienes] = useState([]);
getItem().then((respuesta)=> setBienes(respuesta))
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
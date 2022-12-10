import React from "react";
import { getSingleItem } from "../MockApi/mockService";
import { useState } from 'react';
import Producto from '../main/Producto';
import datos from './productos';



function ItemDetailContainer(datos){
    const[Bien, setBien] = useState([]);
    getSingleItem().then((respuesta)=> setBien(respuesta))
    const{productos} = datos;       
    return(
        <div>
                <h2>{productos.nombre}</h2>
                <img src={productos.img}/>
                <h4>${productos.precio}</h4>
        </div>
    );}
export default ItemDetailContainer
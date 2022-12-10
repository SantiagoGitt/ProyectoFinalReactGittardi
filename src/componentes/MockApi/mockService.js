import React from "react";
import datos from "../ItemListContainer/productos";


function getItem(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(datos);
        }, 2000);
    });
}

export function getSingleItem(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(datos[2])
        }, 2000);
    });
}

export default getItem
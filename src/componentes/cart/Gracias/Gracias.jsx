import React from "react";
import { useParams } from "react-router-dom";

function Gracias() {
 const{idOrden}= useParams()
  return (
    <div>
      <h1>Gracias!</h1>
      <p>Se generó la orden n°:{idOrden} correctamente! Regrasa Pronto!</p>
    </div>
  );
}

export default Gracias;
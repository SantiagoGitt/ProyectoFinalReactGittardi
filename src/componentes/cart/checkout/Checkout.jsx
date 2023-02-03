import React from 'react';
import { Link } from "react-router-dom";

export const Checkout = () => {
  
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="form-group mb-3">
          <label> First Name</label>
          <input type="text" name="Nombre" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label> Apellido</label>
          <input type="text" name="Apellido" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label> Telefono</label>
          <input type="text" name="Telefono" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label> Mail</label>
          <input type="text" name="Mail" className="form-control" />
        <Link to="/Gracias">Finalizar Compra</Link>
        </div>
      </div>
    </div>
  )
}
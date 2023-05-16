import React, { useContext, useState } from "react";
import InputForm from "./Input";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/Context";
import { createBuyOrder } from '../../Services/Firebase'

function CheckoutForm() {
  const [buyerData, setBuyerData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const {Cart, GetTotalPrice, ClearCart}= useContext(CartContext)
  let navigate = useNavigate()

  function handleInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    const newBuyerData = { ...buyerData };
    newBuyerData[nameInput] = value;
    setBuyerData(newBuyerData);
  }
  function handleCheckoutForm() {
    const order = {
      buyer: buyerData,
      items: Cart,
      total: GetTotalPrice(),
    };
    createBuyOrder(order).then((id) =>{
     
      if (id){
        ClearCart()
        return navigate(`/gracias/${id}`)
      }
    })
  }
  function onSubmit(evt) {
    evt.preventDefault();
    setBuyerData({
      name: "",
      email: "",
      phone: "",
    });
    handleCheckoutForm()
  }

  return (
    <div>
      <h1>Genera tu orden de compra</h1>
      <form>
        <InputForm
          value={buyerData.name}
          name="name"
          title="Nombre completo"
          onChange={handleInputChange}
        />
        <InputForm
          value={buyerData.email}
          name="email"
          title="Email"
          onChange={handleInputChange}
        />
        <InputForm
          value={buyerData.phone}
          name="phone"
          title="Tel"
          onChange={handleInputChange}
        />

        <button disabled={buyerData.phone === '' || buyerData.name === '' || buyerData.email === ''} onClick={onSubmit}>finalizar compra</button>
      </form>
    </div>
  );
}

export default CheckoutForm;

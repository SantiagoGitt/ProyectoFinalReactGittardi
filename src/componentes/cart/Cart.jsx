import { useContext } from 'react';
import { CartContext, ClearCart } from './context/Context';
import { useNavigate } from "react-router-dom";
import { createBuyOrder } from '../Services/Firebase'
import  CheckoutForm  from './checkout/CheckoutForm';


const Cart = () => {
  const {Cart, GetTotalPrice}= useContext(CartContext)
  let navigate = useNavigate()
  function handleCheckout(buyerData) {
    const order = {
      buyer: buyerData,
      items: Cart,
      total: GetTotalPrice(),
    };
    createBuyOrder(order).then((id) =>{
      if (order)
      return navigate(`/gracias/${id}`)
    })
  }
console.log(Cart, 'cart')
  return (
    <div>{Cart.map((item=>(
        <>
        <div class='card' key={item.id}>
        <h1 className='card--tittle'>{item.nombre}</h1>
        <img className='card--img' src={item.img} alt={item.nombre}/>
        <h1 className='card--price' >${item.precio}</h1>
        <h1>Precio Total ${GetTotalPrice()}</h1>
        </div>
        <CheckoutForm class="container" onCheckout={handleCheckout} /></>
        )))}
    </div>
  )
}

export default Cart
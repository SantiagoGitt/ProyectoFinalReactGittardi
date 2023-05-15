import { useContext } from 'react';
import { CartContext, ClearCart} from './context/Context';
import { useNavigate } from "react-router-dom";
import { createBuyOrder } from '../Services/Firebase'
import  CheckoutForm  from './checkout/CheckoutForm';
import removeItem from './context/Context'


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
    <div>{Cart.map(item=>(
        <>
        <div class='card' key={item.id}>
        <button onclick={removeItem}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-x-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"/>
</svg></button>
        <h1 className='card--tittle'>{item.nombre}</h1>
        <img className='card--img' src={item.img} alt={item.nombre}/>
        <h1 className='card--price' >${item.precio}</h1>
        </div>

        </>))}
      <h1>Precio Total ${GetTotalPrice()}</h1>
      <CheckoutForm class="container" onCheckout={handleCheckout} />
     </div>
  )
}

export default Cart
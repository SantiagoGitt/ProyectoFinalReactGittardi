import { Link } from "react-router-dom";
import  ItemCount  from "../ItemListContainer/ItemCount/ItemCount";
import "./Item.css"
import { useContext } from "react";
import { CartContext } from "../cart/context/Context";

const Item = ({ Datos }) => {
	const {addToCart}= useContext(CartContext);
	const handleAddToCart = (initial) => {addToCart(Datos, initial)}
	return (
		<div className='card'>
			<h3 className='card--title'>{Datos.nombre}</h3>
			<img className='card--img' src={Datos.img} alt={Datos.nombre} />
			<div className='card--price'>$ {Datos.precio}</div>
			<ItemCount onAddToCart={handleAddToCart} stock={Datos.stock} />
			<Link className='card--more' to={`/items/${Datos.id}`}>
				Ver Mas
			</Link>
		</div>
	);
};

export default Item
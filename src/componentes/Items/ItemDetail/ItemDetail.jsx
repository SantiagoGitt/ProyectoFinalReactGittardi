import { Link } from "react-router-dom";
import { useContext } from "react";
import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";
import { CartContext } from "../../cart/context/Context";


export const ItemDetail = ({ itemFiltered }) => {
	const {addToCart}= useContext(CartContext);

	const handleAddToCart = (initial) => {addToCart(itemFiltered, initial)}
	return (
	<div class="container">
		<section className='card'>
			<h3 className='card--tittle'>{itemFiltered.nombre}</h3>
			<img
				className='card--img'
				src={itemFiltered.img}
				alt={itemFiltered.nombre}
			/>
			<div className='card--price'>
				Price $ {itemFiltered.precio}
			</div>
			<div className='itemDetail--stock'>Stock {itemFiltered.stock}</div>
			<ItemCount onAddToCart={handleAddToCart} stock={itemFiltered.stock} />
		</section>
	</div>
	);
};

export default ItemDetail
import { Link } from "react-router-dom";
import { useContext } from "react";
import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";
import { CartContext } from "../../cart/context/Context";


export const ItemDetail = ({ itemFiltered }) => {
	const {addToCart}= useContext(CartContext);

	const handleAddToCart = (initial) => {addToCart(itemFiltered, initial)}
	return (
		<section className='container--itemDetail'>
			<h3 className='itemDetail--title'>{itemFiltered.nombre}</h3>
			<img
				className='itemDetail--img'
				src={itemFiltered.img}
				alt={itemFiltered.nombre}
			/>
			<div className='itemDetail--price'>
				Price $ {itemFiltered.precio}
			</div>
			<div className='itemDetail--stock'>Stock {itemFiltered.stock}</div>
			<ItemCount onAddToCart={handleAddToCart} stock={itemFiltered.stock} />
		</section>
	);
};

export default ItemDetail
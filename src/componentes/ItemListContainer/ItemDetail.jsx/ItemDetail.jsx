import { Link } from "react-router-dom";
import Datos from "../Datos";
import { ItemCount } from "../ItemCount/ItemCount";
import "./item.css";

const ItemDetail = ({ DatosFiltered }) => {
	return (
		<section className='container--itemDetail'>
			<h3 className='itemDetail--title'>{DatosFiltered.nombre}</h3>
			<img
				className='itemDetail--img'
				src={DatosFiltered.img}
				alt={DatosFiltered.nombre}
			/>
			<div className='itemDetail--price'>
				Price $ {DatosFiltered.precio}
			</div>
			<div className='itemDetail--stock'>Stock {DatosFiltered.stock}</div>
			<ItemCount stock={DatosFiltered.stock} />
		</section>
	);
};

export default ItemDetail
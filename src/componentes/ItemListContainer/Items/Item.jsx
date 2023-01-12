import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import "./item.css";
import Datos from "../Datos"

export const Item = ({ Datos }) => {
	return (
		<div className='card'>
			<h3 className='card--title'>{Datos.nombre}</h3>
			<img className='card--img' src={Datos.img} alt={Datos.nombre} />
			<div className='card--price'>$ {Datos.price}</div>
			<ItemCount stock={Datos.stock} />
			<Link className='card--more' to={`/items/${Datos.id}`}>
				Ver Mas
			</Link>
		</div>
	);
};
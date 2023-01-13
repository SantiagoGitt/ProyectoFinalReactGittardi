import { Link } from "react-router-dom";
import  ItemCount  from "../ItemCount/ItemCount";
import "./Item.css"

const Item = ({ Datos }) => {
	return (
		<div className='card'>
			<h3 className='card--title'>{Datos.nombre}</h3>
			<img className='card--img' src={Datos.img} alt={Datos.nombre} />
			<div className='card--price'>$ {Datos.precio}</div>
			<ItemCount stock={Datos.stock} />
			<Link className='card--more' to={`/items/${Datos.id}`}>
				Ver Mas
			</Link>
		</div>
	);
};

export default Item
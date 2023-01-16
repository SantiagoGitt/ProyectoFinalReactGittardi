import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Items/Item"
import Datos from "../Datos";
import Loading from "../../Loading/Loading";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
	const [itemFiltered, setItemFiltered] = useState(null);
	const [loading, setLoading] = useState(true);

	const { IdDatos } = useParams();
	useEffect(() => {
		setLoading(true);

		getItem(IdDatos)
			.then((response) => setItemFiltered(response))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	}, [IdDatos]);

	const getItem = (valueToFilter) => {
		return new Promise((resolve) => {
			resolve(Datos.find((Datos) => Datos.id === valueToFilter));
		});
	};


	return loading ? <Loading /> : <ItemDetail itemFiltered={itemFiltered} />;
};
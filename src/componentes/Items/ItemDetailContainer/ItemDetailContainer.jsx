import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail"
import  { getItems} from "../../Services/Firebase";
import Datos from "../../ItemListContainer/Datos";

export const ItemDetailContainer = () => {
	const [itemFiltered, setItemFiltered] = useState(null);
	const [loading, setLoading] = useState(true);

	const { IdDatos } = useParams();

	useEffect(() => {
		setLoading(true);
		getItems(IdDatos)
			.then((response) => setItemFiltered(response))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	}, [IdDatos]);

	const getItems = (valueToFilter) => {
		return new Promise((resolve) => {
			resolve(Datos.find((Datos) => Datos.id === valueToFilter));
		});
	};


	return loading ? <Loading /> : <ItemDetail itemFiltered={itemFiltered} />;
};
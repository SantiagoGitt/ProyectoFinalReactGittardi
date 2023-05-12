import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Items/Item"
import Datos from "./Datos";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";
import { getItem } from "../Services/Firebase";


export const ItemListContainer = () => {
	const { idCategory } = useParams();
	const [loading, setLoading] = useState(true);
	const [myProducts, setMyProducts] = useState();

	useEffect(() => {
		setLoading(true);
		getItems(idCategory)
			.then((response) => setMyProducts(response))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 3000)
			);
	}, [idCategory]);
	const getItems = (valueToFilter) => {
		return new Promise((resolve) => {
			if (valueToFilter === undefined) {
				resolve(Datos);
			} else {
				resolve(
					Datos.filter((datos) => datos.categoria === valueToFilter)
				);
			}
		});
	};
	return loading ? (
		<Loading />
	) : (
		<section className='container--ItemListContainer'>
			<h2 className='itemListContainer--title'>
				{idCategory === undefined ? "home" : idCategory}
			</h2>
			<div className='container--cards'>
				{myProducts.map((Datos) => (
					<Item key={Datos.id} Datos={Datos} />
				))}
			</div>
		</section>
        );
    };


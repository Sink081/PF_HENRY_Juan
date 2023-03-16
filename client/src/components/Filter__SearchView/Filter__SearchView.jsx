import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter__SearchView.module.css";

import {
	getSubCategories,
	getZonas,
	getTradesCategories,
	allFilters,
	getTradesFilter,
} from "../../redux/actions/actions";

export default function Filter__SearchView() {
	const dispatch = useDispatch();
	const { tradesCategories, tradesSubCategories, zones, filters } = useSelector(
		(state) => state
	);

	const [filtersActive, setFiltersActive] = useState(filters);

	useEffect(() => {
		dispatch(getZonas());
		dispatch(getTradesCategories());
	}, [dispatch]);

	useEffect(() => {
		dispatch(allFilters(filtersActive));
		dispatch(
			getTradesFilter(
				filtersActive.city,
				filtersActive.category,
				filtersActive.subcategory,
				filtersActive.epagos
			)
		);
	}, [filtersActive]);

	useEffect(() => {
		if (filtersActive.category !== "default") {
			dispatch(getSubCategories(filtersActive.category));
		}
	}, [filtersActive.category]);

	function formHandlerChange(e) {
		const { name, value } = e.target;
		if (name === "category") {
			setFiltersActive({
				...filtersActive,
				category: value,
				subcategory: "default",
			});
		} else if (name === "zone") {
			setFiltersActive({ ...filtersActive, city: value });
		} else if (name === "epagos") {
			setFiltersActive({ ...filtersActive, epagos: value });
		} else if (name === "subcategory") {
			setFiltersActive({ ...filtersActive, subcategory: value });
		}
	}

	return (
		<div className={styles.filterSearchView}>
			<form action="">
				<div>
					<p>Filtrar por Categoria:</p>
					<select
						name="category"
						onChange={(e) => {
							formHandlerChange(e);
						}}
					>
						<option value="default" selected={filters.category === "default"}>
							Todas
						</option>
						{tradesCategories.map((x) => (
							<option value={x} key={x} selected={filters.category === x}>
								{x}
							</option>
						))}
					</select>
				</div>
				{filters.category !== "default" ? (
					<div>
						<p>Agregar Subcategoria:</p>
						<select
							name="subcategory"
							onChange={(e) => {
								formHandlerChange(e);
							}}
						>
							<option
								value="default"
								selected={filters.subcategory === "default"}
							>
								Todas
							</option>
							{tradesSubCategories.map((x) => (
								<option value={x} key={x} selected={filters.subcategory === x}>
									{x}
								</option>
							))}
						</select>
					</div>
				) : null}
				<div>
					<p>Filtrar por Zona:</p>
					<select
						name="zone"
						onChange={(e) => {
							formHandlerChange(e);
						}}
					>
						<option value="default">Todas</option>
						{zones.map((x) => (
							<option value={x} key={x} selected={filters.city === x}>
								{x}
							</option>
						))}
					</select>
				</div>

				<div>
					<p>Filtrar por Medio de pago:</p>
					<select
						name="epagos"
						onChange={(e) => {
							formHandlerChange(e);
						}}
					>
						<option value="default" selected={filters.epagos === "default"}>
							Todos
						</option>
						<option
							value={"Efectivo/Tarjetas"}
							selected={filters.epagos === "Efectivo/Tarjetas"}
						>
							Acepta tarjeta y efectivo
						</option>
						<option
							value={"Sólo tarjetas"}
							selected={filters.epagos === "Sólo tarjetas"}
						>
							Sólo tarjetas
						</option>
						<option
							value={"Sólo efectivo"}
							selected={filters.epagos === "Sólo efectivo"}
						>
							Sólo efectivo
						</option>
					</select>
				</div>
			</form>
		</div>
	);
}

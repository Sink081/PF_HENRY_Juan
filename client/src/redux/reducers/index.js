import {
	GET_TRADES,
	GET_REVIEWS,
	GET_TRADES_CATEGORIES,
	GET_TRADES_SUBCATEGORIES,
	ADD_AMOUNT,
	SUBSTRACT_AMOUNT,
	TRADES_FILTERS,
	GET_DELIVERY_ZONES,
	GET_ALL_PRODUCTS,
	SET_FILTER_CATEGORY_COMMERCE,
	SET_CARRITO,
	DELETE_ITEM_CART,
	POST_PAYMENT,
	HANDLER_TRADES_FILTERS,
	GET_PRODUCT_BY_ID,
	CURRENT_CLIENT,
	PRODUCT_FILTERS,
	GET_USER,
	GET_PRODUCT,
	ARMADO_CARRITO,
	GET_ORDERS_CLIENT,
	EDIT_CLIENT,
	GET_ORDERS_BY_COMMERCE,
	PUT_ORDER_STATUS_PAYMENT,
	UPDATE_PRODUCT,
	POST_PRODUCT,
	UPDATE_COMMERCE,
	GET_TRADES_BY_NAME,
	GET_TRADES_SUPERADMINS_CATEGORIES
	
} from "../actions/types";

const initialState = {
	product: [],
	products: [],
	productsFilter: [],
	allCommerces: [],
	filterCommerce: [],
	tradesCategories: [],
	tradesSubCategories: [],
	feedback: [],
	zones: [],
	filters: {
		city: "default",
		category: "default",
		subcategory: "default",
		epagos: "default",
	},
	carritos: {},
	mercadoPago: "",
	currentClient: {},
	currentTradeBoss: {},
	currentTrade: {},
	currentPageProducts: 1,
	currentPageTrades: 1,
	currentPage: 1,
	ordersCommerces: [],
	superCategories: []
};

function dateTransform(date) {
	const [year, month, day] = date.split("T")[0].split("-");
	return `${day}/${month}/${year}`;
}

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCT_BY_ID:
			return {
				...state,
				product: action.payload,
			};
		case GET_ALL_PRODUCTS:
			let result;
			if (typeof action.payload === "string") {
				result = [];
			} else {
				result = action.payload;
			}
			return {
				...state,
				products: result,
			};
		case PRODUCT_FILTERS:
			return {
				...state,
				products: action.payload,
			};
		case GET_USER:
			return {
				...state,
				users: action.payload,
			};
		case GET_TRADES_CATEGORIES:
			return {
				...state,
				tradesCategories: action.payload,
			};
		case GET_TRADES:
			return {
				...state,
				allCommerces: action.payload,
			};
		case GET_REVIEWS:
			return {
				...state,
				feedback: action.payload,
			};
		case TRADES_FILTERS:
			return {
				...state,
				allCommerces: action.payload,
			};
		case GET_TRADES_SUBCATEGORIES:
			return {
				...state,
				tradesSubCategories: action.payload,
			};
		case GET_DELIVERY_ZONES:
			return {
				...state,
				zones: action.payload,
			};
		case HANDLER_TRADES_FILTERS:
			return {
				...state,
				filters: action.payload,
			};

		case SET_CARRITO:
			const carritosCopy = state.carritos;

			const value = action.payload.idCommerce;
			const product = action.payload.producto;

			if (carritosCopy[value]) {
				const index = carritosCopy[value].data.findIndex(
					(x) => x.id === product.id
				);
				let total = 0;
				if (index === -1) {
					product.cantidad = 1;
					const data = [...carritosCopy[value].data, product];
					data.forEach((x) => (total += x.price * x.cantidad));
					carritosCopy[value] = {
						data: data,
						total,
					};

					return {
						...state,
						carritos: { ...carritosCopy },
					};
				} else {
					carritosCopy[value].data[index].cantidad += 1;

					carritosCopy[value].data.forEach(
						(x) => (total += x.price * x.cantidad)
					);

					carritosCopy[value].total = total;

					return {
						...state,
						carritos: { ...carritosCopy },
					};
				}
			} else {
				product.cantidad = 1;

				carritosCopy[value] = {
					data: [product],
					total: product.price,
				};

				return {
					...state,
					carritos: { ...carritosCopy },
				};
			}

		case ADD_AMOUNT:
			const carritosCopy2 = state.carritos;
			const idProduct = action.payload.idProduct;
			const idCommerce = action.payload.idCommerce;

			console.log(idProduct, idCommerce);

			const indexAdd = carritosCopy2[idCommerce].data.findIndex(
				(x) => x.id === idProduct
			);
			console.log(indexAdd);
			console.log(carritosCopy2[idCommerce].data);

			carritosCopy2[idCommerce].data[indexAdd].cantidad += 1;

			carritosCopy2[idCommerce].total +=
				carritosCopy2[idCommerce].data[indexAdd].price;

			return {
				...state,
				carritos: { ...carritosCopy2 },
			};

		case SUBSTRACT_AMOUNT:
			const carritosCopy3 = state.carritos;
			const idProduct2 = action.payload.idProduct;
			const idCommerce2 = action.payload.idCommerce;

			const indexAdd2 = carritosCopy3[idCommerce2].data.findIndex(
				(x) => x.id === idProduct2
			);
			console.log(carritosCopy3[idCommerce2].data);

			if (carritosCopy3[idCommerce2].data[indexAdd2].cantidad > 1) {
				carritosCopy3[idCommerce2].data[indexAdd2].cantidad -= 1;

				carritosCopy3[idCommerce2].total -=
					carritosCopy3[idCommerce2].data[indexAdd2].price;

				return {
					...state,
					carritos: { ...carritosCopy3 },
				};
			}
			return {
				...state,
			};
		case DELETE_ITEM_CART:
			const carritosCopy4 = state.carritos;
			const idProduct3 = action.payload.idProduct;
			const idCommerce3 = action.payload.idCommerce;

			const total3 = carritosCopy4[idCommerce3].data.find(
				(x) => x.id === idProduct3
			);

			const resultTotal =
				carritosCopy4[idCommerce3].total - total3.cantidad * total3.price;

			const resultData = carritosCopy4[idCommerce3].data.filter(
				(x) => x.id !== idProduct3
			);

			const obj = { data: resultData, total: resultTotal };

			return {
				...state,
				carritos: { ...state.carritos, [idCommerce3]: { ...obj } },
			};

		case POST_PAYMENT:
			return {
				...state,
				mercadoPago: action.payload,
			};

		case CURRENT_CLIENT:
			return {
				...state,
				currentClient: { ...state.currentClient, ...action.payload },
			};

		case GET_ORDERS_CLIENT: {
			const copyData = action.payload.data;
			const orders = copyData.map((x) => ({
				...x,
				createdAt: dateTransform(x.createdAt),
			}));
			return {
				...state,
				currentClient: { ...state.currentClient, orders: orders },
			};
		}
		case SET_FILTER_CATEGORY_COMMERCE:
			const allProductos = state.products;
			const categorySelected = action.payload.category;

			if (categorySelected === "todas") {
				return {
					...state,
					productsFilter: allProductos,
				};
			}

			const resFilter = allProductos.filter(
				(x) => x.category === categorySelected
			);

			return {
				...state,
				productsFilter: resFilter,
			};

		case GET_PRODUCT:
			const resFastFilter = state.products.filter((x) =>
				x.name.toUpperCase().includes(action.payload.toUpperCase())
			);

			console.log(resFastFilter);
			return {
				...state,
				productsFilter: resFastFilter,
			};
		case ARMADO_CARRITO:
			return {
				...state,
				carritos: action.payload,
			};

		case EDIT_CLIENT: {
			return {
				...state,
				currentClient: { ...state.currentClient, ...action.payload.body },
			};
		}
		case "CURRENT_TRADEBOSS": {
			return {
				...state,
				currentTradeBoss: action.payload,
			};
		}
		case "CURRENT_TRADE": {
			return {
				...state,
				currentTrade: action.payload,
			};
		}
		case GET_ORDERS_BY_COMMERCE: {
			const copyData = action.payload;
			const orders = copyData.map((x) => ({
				...x,
				createdAt: dateTransform(x.createdAt),
			}));
			console.log(orders, action.payload);
			return {
				...state,
				ordersCommerces: orders,
			};
		}
		case PUT_ORDER_STATUS_PAYMENT: {
			const ordersCommerceCopy = state.ordersCommerces;
			const index = ordersCommerceCopy.findIndex(
				(x) => x.orderId === action.payload.orderId
			);
			if (index !== -1) {
				ordersCommerceCopy[index] = {
					...ordersCommerceCopy[index],
					...action.payload.data,
				};
			}
			return {
				...state,
				ordersCommerces: [...ordersCommerceCopy],
			};
		}
		case "CURRENT_PAGE_PRODUCTS": {
			return {
				...state,
				currentPageProducts: action.payload,
			};
		}
		case "CURRENT_PAGE_TRADES": {
			return {
				...state,
				currentPageTrades: action.payload,
			};
		}
		case UPDATE_PRODUCT: {
			const copyProducts = state.products;
			console.log(action.payload, copyProducts);
			const index = copyProducts.findIndex((x) => x._id === action.payload.id);
			console.log(index);
			if (index !== -1) {
				copyProducts[index] = action.payload;
			}

			return {
				...state,
				products: [...copyProducts],
			};
		}
		case POST_PRODUCT: {
			return {
				...state,
				products: [...state.products, action.payload],
			};
		}
		case UPDATE_COMMERCE: {
			return {
				...state,
				currentTrade: { ...state.currentTrade, ...action.payload.body },
			}
		}
		case GET_TRADES_BY_NAME: {
			return {
				...state,
				filterCommerce: [...state.filterCommerce, action.payload],
			};
		}
		case GET_TRADES_SUPERADMINS_CATEGORIES: {
			return {
				...state,
				superCategories: [...state.superCategories, action.payload]
			};
		}
		default:
			return state;
	}
}

	

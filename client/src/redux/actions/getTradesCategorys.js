import axios from "axios";
import { GET_TRADES_SUPERADMINS_CATEGORIES } from "./types";

export function getTradesCategory() {
	return async function (dispatch) {
		const category = await axios.get(`superadmins/trades/categories`);
		return dispatch({ type: GET_TRADES_SUPERADMINS_CATEGORIES, payload: category.data });
	};
}

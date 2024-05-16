import { getAllCars } from "./actions.js";
import { actions } from "./cars.slice.js";

const allActions = {
	...actions,
	getAllCars,
};

export { reducer } from "./cars.slice.js";
export { allActions as actions };

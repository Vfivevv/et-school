import { createForm, getPrice } from "./actions.js";
import { actions } from "./form.slice.js";

const allActions = {
	...actions,
	createForm,
	getPrice,
};

export { reducer } from "./form.slice.js";
export { allActions as actions };

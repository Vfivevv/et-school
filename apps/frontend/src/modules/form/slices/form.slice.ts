import { createSlice } from "@reduxjs/toolkit";

import { DataStatus } from "~/libs/enums/enums.js";
import { type ValueOf } from "~/libs/types/types.js";
import {
	type Form,
	type FormCar,
	type FormCarAddons,
	type FormDate,
	type FormPrice,
} from "~/modules/form/forms.js";

import { createForm, getPrice } from "./actions.js";

type State = {
	addons: FormCarAddons;
	car: FormCar;
	dataStatus: ValueOf<typeof DataStatus>;
	date: FormDate;
	form: Form;
	price: FormPrice;
	priceStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
	addons: {
		additionalInsurance: false,
		childSeat: 0,
		ownDriver: false,
	},
	car: {
		carId: null,
		image: "",
		name: "",
		rentPrice: 0,
	},
	dataStatus: DataStatus.IDLE,
	date: {
		office: "",
		returnDate: "",
		startDate: "",
	},
	form: {
		address: null,
		city: null,
		country: null,
		driverLicense: null,
		email: "",
		firstName: "",
		isRullesAccepted: false,
		lastName: "",
		phone: "",
	},
	price: {
		price: 0,
	},
	priceStatus: DataStatus.IDLE,
};

const { actions, name, reducer } = createSlice({
	extraReducers(builder) {
		builder.addCase(getPrice.fulfilled, (state, action) => {
			state.price = action.payload;
			state.priceStatus = DataStatus.FULFILLED;
		});
		builder.addCase(getPrice.pending, (state) => {
			state.priceStatus = DataStatus.PENDING;
		});
		builder.addCase(getPrice.rejected, (state) => {
			state.priceStatus = DataStatus.REJECTED;
		});
		builder.addCase(createForm.fulfilled, (state) => {
			state.form = initialState.form;
			state.car = initialState.car;
			state.date = initialState.date;
			state.addons = initialState.addons;
			state.dataStatus = DataStatus.FULFILLED;
		});
		builder.addCase(createForm.pending, (state) => {
			state.dataStatus = DataStatus.PENDING;
		});
		builder.addCase(createForm.rejected, (state) => {
			state.dataStatus = DataStatus.REJECTED;
		});
	},
	initialState,
	name: "form",
	reducers: {
		resetAddons: (state) => {
			state.addons = initialState.addons;
		},
		resetCar: (state) => {
			state.car = initialState.car;
		},
		resetDate: (state) => {
			state.date = initialState.date;
		},
		resetForm: (state) => {
			state.form = initialState.form;
		},
		updateAddons: (state, action) => {
			state.addons = {
				...state.addons,
				...action.payload,
			};
		},
		updateCar: (state, action) => {
			state.car = {
				carId: action.payload.id,
				image: action.payload.image,
				name: action.payload.name,
				rentPrice: action.payload.rentPrice,
			};
		},
		updateDate: (state, action) => {
			state.date = {
				...state.date,
				...action.payload,
			};
		},
		updateForm: (state, action) => {
			state.form = {
				...state.form,
				...action.payload,
			};
		},
	},
});

export { actions, name, reducer };

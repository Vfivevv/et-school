import { createSlice } from "@reduxjs/toolkit";

import { DataStatus } from "~/libs/enums/enums.js";
import { type ValueOf } from "~/libs/types/types.js";
import { type CarResponseDto } from "~/modules/cars/cars.js";

import { getAllCars } from "./actions.js";

type State = {
	cars: [] | CarResponseDto[];
	dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
	cars: [],
	dataStatus: DataStatus.IDLE,
};

const { actions, name, reducer } = createSlice({
	extraReducers(builder) {
		builder.addCase(getAllCars.fulfilled, (state, action) => {
			state.cars = action.payload;
			state.dataStatus = DataStatus.FULFILLED;
		});
		builder.addCase(getAllCars.pending, (state) => {
			state.dataStatus = DataStatus.PENDING;
		});
		builder.addCase(getAllCars.rejected, (state) => {
			state.cars = [];
			state.dataStatus = DataStatus.REJECTED;
		});
	},
	initialState,
	name: "car",
	reducers: {},
});

export { actions, name, reducer };

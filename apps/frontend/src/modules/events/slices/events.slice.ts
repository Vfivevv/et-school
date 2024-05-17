import { type EventResponseDto, type EventUserResponseDto } from "@car/shared";
import { createSlice } from "@reduxjs/toolkit";

import { DataStatus } from "~/libs/enums/enums.js";
import { type ValueOf } from "~/libs/types/types.js";

import { getAllEvents, getEventUsers } from "./actions.js";

type State = {
	dataStatus: ValueOf<typeof DataStatus>;
	events: [] | EventResponseDto[];
	users: [] | EventUserResponseDto[];
	usersTotal: number;
};

const initialState: State = {
	dataStatus: DataStatus.IDLE,
	events: [],
	users: [],
	usersTotal: 0,
};

const { actions, name, reducer } = createSlice({
	extraReducers(builder) {
		builder.addCase(getAllEvents.fulfilled, (state, action) => {
			state.events = action.payload;
			state.dataStatus = DataStatus.FULFILLED;
		});
		builder.addCase(getAllEvents.pending, (state) => {
			state.dataStatus = DataStatus.PENDING;
		});
		builder.addCase(getAllEvents.rejected, (state) => {
			state.events = [];
			state.dataStatus = DataStatus.REJECTED;
		});
		builder.addCase(getEventUsers.fulfilled, (state, action) => {
			state.users = action.payload.items;
			console.log(state.users)
			state.usersTotal = action.payload.total;
			state.dataStatus = DataStatus.FULFILLED;
		});
		builder.addCase(getEventUsers.pending, (state) => {
			state.dataStatus = DataStatus.PENDING;
		});
		builder.addCase(getEventUsers.rejected, (state) => {
			state.users = [];
			state.dataStatus = DataStatus.REJECTED;
		});
	},
	initialState,
	name: "event",
	reducers: {},
});

export { actions, name, reducer };

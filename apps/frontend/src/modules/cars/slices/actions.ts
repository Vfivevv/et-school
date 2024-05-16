import { createAsyncThunk } from "@reduxjs/toolkit";

import { type AsyncThunkConfig } from "~/libs/types/types.js";
import { type CarResponseDto } from "~/modules/cars/cars.js";

import { carApi } from "../cars.js";
import { name as sliceName } from "./cars.slice.js";

const getAllCars = createAsyncThunk<
	CarResponseDto[],
	undefined,
	AsyncThunkConfig
>(`${sliceName}/get-cars`, async () => {
	return await carApi.getAllCars();
});

export { getAllCars };

import { createAsyncThunk } from "@reduxjs/toolkit";

import { type AsyncThunkConfig } from "~/libs/types/types.js";
import {
	type FormPrice,
	type FormPriceRequestDto,
	type FormRequestDto,
} from "~/modules/form/forms.js";

import { name as sliceName } from "./form.slice.js";

const createForm = createAsyncThunk<any, FormRequestDto, AsyncThunkConfig>(
	`${sliceName}/create-form`,
	async (payload, { extra }) => {
		const { formApi } = extra;

		return await formApi.createForm(payload);
	},
);

const getPrice = createAsyncThunk<
	FormPrice,
	FormPriceRequestDto,
	AsyncThunkConfig
>(`${sliceName}/get-price`, async (payload, { extra }) => {
	const { formApi } = extra;

	return await formApi.getPrice(payload);
});

export { createForm, getPrice };

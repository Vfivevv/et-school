import { config } from "~/libs/modules/config/config.js";
import { http } from "~/libs/modules/http/http.js";
import { storage } from "~/libs/modules/storage/storage.js";

import { CarApi } from "./cars-api.js";

const carApi = new CarApi({
	baseUrl: config.ENV.API.ORIGIN_URL,
	http,
	storage,
});

export { type CarResponseDto } from "./libs/types/types.js";
export { carApi };
export { actions, reducer } from "./slices/cars.js";

import { config } from "~/libs/modules/config/config.js";
import { http } from "~/libs/modules/http/http.js";
import { storage } from "~/libs/modules/storage/storage.js";

import { EventApi } from "./events-api.js";

const eventApi = new EventApi({
	baseUrl: config.ENV.API.ORIGIN_URL,
	http,
	storage,
});

export { type EventResponseDto } from "./libs/types/types.js";
export { eventApi };
export { actions, reducer } from "./slices/events.js";

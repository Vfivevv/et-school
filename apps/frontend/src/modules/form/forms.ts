import { config } from "~/libs/modules/config/config.js";
import { http } from "~/libs/modules/http/http.js";
import { storage } from "~/libs/modules/storage/storage.js";

import { FormApi } from "./forms-api.js";

const formApi = new FormApi({
	baseUrl: config.ENV.API.ORIGIN_URL,
	http,
	storage,
});

export {
	type Form,
	type FormCar,
	type FormCarAddons,
	type FormDate,
	type FormPrice,
	type FormPriceRequestDto,
	type FormRequestDto,
} from "./libs/types/types.js";
export { formApi };
export {
	formCarParametersValidationSchema,
	formInformationParametersValidationSchema,
	formParametersValidationSchema,
} from "./libs/validation-schemas/validation-schemas.js";
export { actions, reducer } from "./slices/form.js";

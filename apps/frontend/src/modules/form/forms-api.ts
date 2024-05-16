import { APIPath, ContentType } from "~/libs/enums/enums.js";
import { BaseHTTPApi } from "~/libs/modules/api/api.js";
import { type HTTP } from "~/libs/modules/http/http.js";
import { type Storage } from "~/libs/modules/storage/storage.js";
import {
	type FormPrice,
	type FormPriceRequestDto,
	type FormRequestDto,
} from "~/modules/form/forms.js";

import { FormsApiPath } from "./libs/enums/enums.js";

type Constructor = {
	baseUrl: string;
	http: HTTP;
	storage: Storage;
};

class FormApi extends BaseHTTPApi {
	public constructor({ baseUrl, http, storage }: Constructor) {
		super({ baseUrl, http, path: APIPath.FORMS, storage });
	}

	public async createForm(payload: FormRequestDto): Promise<any> {
		const response = await this.load(
			this.getFullEndpoint(FormsApiPath.ROOT, {}),
			{
				contentType: ContentType.JSON,
				hasAuth: false,
				method: "POST",
				payload: JSON.stringify(payload),
			},
		);

		return await response.json<any>();
	}

	public async getPrice(payload: FormPriceRequestDto): Promise<FormPrice> {
		const response = await this.load(
			this.getFullEndpoint(FormsApiPath.PRICE, {}),
			{
				contentType: ContentType.JSON,
				hasAuth: false,
				method: "POST",
				payload: JSON.stringify(payload),
			},
		);

		return await response.json<FormPrice>();
	}
}

export { FormApi };

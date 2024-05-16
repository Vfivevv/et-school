import { APIPath } from "~/libs/enums/enums.js";
import { BaseHTTPApi } from "~/libs/modules/api/api.js";
import { type HTTP } from "~/libs/modules/http/http.js";
import { type Storage } from "~/libs/modules/storage/storage.js";
import { type CarResponseDto } from "~/modules/cars/cars.js";

import { CarsApiPath } from "./libs/enums/enums.js";

type Constructor = {
	baseUrl: string;
	http: HTTP;
	storage: Storage;
};

class CarApi extends BaseHTTPApi {
	public constructor({ baseUrl, http, storage }: Constructor) {
		super({ baseUrl, http, path: APIPath.CARS, storage });
	}

	public async getAllCars(): Promise<CarResponseDto[]> {
		const response = await this.load(
			this.getFullEndpoint(CarsApiPath.ROOT, {}),
			{
				hasAuth: true,
				method: "GET",
			},
		);

		return await response.json<CarResponseDto[]>();
	}
}

export { CarApi };

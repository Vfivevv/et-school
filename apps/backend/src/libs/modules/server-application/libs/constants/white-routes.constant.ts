import { FormsApiPath } from "@car/shared";

import { APIPath } from "~/libs/enums/enums.js";
import { AuthApiPath } from "~/modules/auth/auth.js";
import { EventsApiPath } from "~/modules/cars copy/events.js";
import { CarsApiPath } from "~/modules/cars/cars.js";

const WHITE_ROUTES = [
	`${APIPath.AUTH}${AuthApiPath.SIGN_UP}`,
	`${APIPath.AUTH}${AuthApiPath.SIGN_IN}`,
	`${APIPath.AUTH}${AuthApiPath.FORGOT_PASSWORD}`,
	`${APIPath.AUTH}${AuthApiPath.UPDATE_PASSWORD}`,
	`${APIPath.CARS}${CarsApiPath.ROOT}`,
	`${APIPath.CARS}${CarsApiPath.$ID}`,
	`${APIPath.FORMS}${FormsApiPath.ROOT}`,
	`${APIPath.FORMS}${FormsApiPath.PRICE}`,
	`${APIPath.EVENTS}${EventsApiPath.ROOT}`,
	`${APIPath.EVENTS}${EventsApiPath.$ID}`,
	`${APIPath.EVENTS}${EventsApiPath.USER}`,
	`${APIPath.EVENTS}${EventsApiPath.USERS}`,
];

export { WHITE_ROUTES };

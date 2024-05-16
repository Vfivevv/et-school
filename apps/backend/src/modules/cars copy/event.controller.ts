import { APIPath } from "~/libs/enums/enums.js";
import {
	type APIHandlerOptions,
	type APIHandlerResponse,
	BaseController,
} from "~/libs/modules/controller/controller.js";
import { HTTPCode } from "~/libs/modules/http/http.js";
import { type Logger } from "~/libs/modules/logger/logger.js";

import {
	type EventGetByIdRequestDto,
	type EventService,
	EventsApiPath,
} from "./events.js";
import { eventParametersValidationSchema } from "./libs/validation-schemas/validation-schemas.js";

class EventController extends BaseController {
	private eventService: EventService;

	public constructor(logger: Logger, eventService: EventService) {
		super(logger, APIPath.EVENTS);

		this.eventService = eventService;

		this.addRoute({
			handler: () => {
				return this.findAll();
			},
			method: "GET",
			path: EventsApiPath.ROOT,
		});

		this.addRoute({
			handler: (options) => {
				return this.findById(
					options as APIHandlerOptions<{
						params: EventGetByIdRequestDto;
					}>,
				);
			},
			method: "GET",
			path: EventsApiPath.$ID,
			validation: {
				params: eventParametersValidationSchema,
			},
		});
	}

	private async findAll(): Promise<APIHandlerResponse> {
		return {
			payload: await this.eventService.findAll(),
			status: HTTPCode.OK,
		};
	}

	private async findById(
		options: APIHandlerOptions<{
			params: {
				id: number;
			};
		}>,
	): Promise<APIHandlerResponse> {
		return {
			payload: await this.eventService.findById(options.params.id),
			status: HTTPCode.OK,
		};
	}
}

export { EventController };

import { logger } from "~/libs/modules/logger/logger.js";

import { EventController } from "./event.controller.js";
import { EventModel } from "./event.model.js";
import { EventService } from "./event.service.js";
import { EventUserModel } from "./event-users.model.js";
import { EventRepository } from "./events.repository.js";

const eventRepository = new EventRepository(EventModel, EventUserModel);
const eventService = new EventService(eventRepository);
const eventController = new EventController(logger, eventService);

export { eventController };
export { EventEntity } from "./event.entity.js";
export { EventModel } from "./event.model.js";
export { type EventService } from "./event.service.js";
export { type EventRepository } from "./events.repository.js";
export { EventErrorMessage } from "./libs/enums/enums.js";
export { EventsApiPath } from "./libs/enums/enums.js";
export { type EventGetByIdRequestDto } from "./libs/types/types.js";

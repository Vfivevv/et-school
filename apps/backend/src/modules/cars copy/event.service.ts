import { HTTPCode } from "~/libs/modules/http/http.js";
import { type Service } from "~/libs/types/types.js";

import { EventEntity } from "./event.entity.js";
import { type EventRepository } from "./events.repository.js";
import { EventErrorMessage } from "./libs/enums/enums.js";
import { EventError } from "./libs/exceptions/exceptions.js";
import {
	type EventRequestDto,
	type EventResponseDto,
	type EventUserRequestDto,
	type EventUserResponseDto,
} from "./libs/types/types.js";

class EventService implements Service {
	private eventRepository: EventRepository;

	public constructor(eventRepository: EventRepository) {
		this.eventRepository = eventRepository;
	}

	public async create(payload: EventRequestDto): Promise<EventResponseDto> {
		const event = await this.eventRepository.create(
			EventEntity.initializeNew({
				description: payload.description,
				eventDate: payload.eventDate,
				organizer: payload.organizer,
				title: payload.title,
			}),
		);

		return event.toObject();
	}

	public async delete(eventId: number): Promise<boolean> {
		const event = await this.eventRepository.find(eventId);

		if (!event) {
			throw new EventError({
				message: EventErrorMessage.EVENT_NOT_FOUND,
				status: HTTPCode.NOT_FOUND,
			});
		}

		return await this.eventRepository.delete(eventId);
	}

	public async find(eventId: number): Promise<EventResponseDto | null> {
		const event = await this.eventRepository.find(eventId);

		return event?.toObject() ?? null;
	}

	public async findAll(): Promise<EventResponseDto[]> {
		const events = await this.eventRepository.findAll();

		return events.map((event) => event.toObject());
	}

	public async findById(eventId: number): Promise<EventResponseDto | null> {
		const event = await this.eventRepository.findById(eventId);

		if (!event) {
			throw new EventError({
				message: EventErrorMessage.EVENT_NOT_FOUND,
				status: HTTPCode.NOT_FOUND,
			});
		}

		return event.toObject();
	}

	public async update(
		event: number,
		user: EventUserRequestDto,
	): Promise<EventUserResponseDto | null> {
		const { dateOfBirth, email, fullName, source, title } = user;

		const updateEvent = await this.eventRepository.update(event, {
			dateOfBirth,
			email,
			fullName,
			source,
			title,
		});

		return updateEvent?.toObject() ?? null;
	}
}

export { EventService };

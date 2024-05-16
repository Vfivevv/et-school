import { RelationName } from "~/libs/enums/enums.js";
import { type Repository } from "~/libs/types/types.js";

import { EventEntity } from "./event.entity.js";
import { type EventModel } from "./event.model.js";
import { type EventUserModel } from "./event-users.model.js";
import { type EventUserRequestDto } from "./libs/types/types.js";

class EventRepository implements Repository<EventEntity> {
	private eventModel: typeof EventModel;
	private eventUserModel: typeof EventUserModel;
	public constructor(
		eventModel: typeof EventModel,
		eventUserModel: typeof EventUserModel,
	) {
		this.eventModel = eventModel;
		this.eventUserModel = eventUserModel;
	}

	public async create(entity: EventEntity): Promise<EventEntity> {
		const { description, eventDate, organizer, title } = entity.toNewObject();

		const event = await this.eventModel
			.query()
			.insert({
				description,
				eventDate,
				organizer,
				title,
			})
			.withGraphJoined(`[${RelationName.EVENT_USERS}]`)
			.returning("*")
			.execute();

		return EventEntity.initialize({
			createdAt: event.createdAt,
			description: event.description,
			eventDate: event.eventDate,
			id: event.id,
			organizer: event.organizer,
			title: event.title,
			updatedAt: event.updatedAt,
			users: [],
		});
	}

	public async delete(carId: number): Promise<boolean> {
		return Boolean(await this.eventModel.query().deleteById(carId).execute());
	}

	public async find(userId: number): Promise<EventEntity | null> {
		const event = await this.eventModel
			.query()
			.findById(userId)
			.withGraphJoined(`[${RelationName.EVENT_USERS}]`)
			.execute();

		return event
			? EventEntity.initialize({
					createdAt: event.createdAt,
					description: event.description,
					eventDate: event.eventDate,
					id: event.id,
					organizer: event.organizer,
					title: event.title,
					updatedAt: event.updatedAt,
					users: event.eventUsers,
				})
			: null;
	}

	public async findAll(): Promise<EventEntity[]> {
		const events = await this.eventModel
			.query()
			.withGraphJoined(`[${RelationName.EVENT_USERS}]`)
			.execute();

		return events.map((event) => {
			return EventEntity.initialize({
				createdAt: event.createdAt,
				description: event.description,
				eventDate: event.eventDate,
				id: event.id,
				organizer: event.organizer,
				title: event.title,
				updatedAt: event.updatedAt,
				users: event.eventUsers,
			});
		});
	}
	public async findById(id: number): Promise<EventEntity | null> {
		const event = await this.eventModel
			.query()
			.findById(id)
			.withGraphJoined(`[${RelationName.EVENT_USERS}]`)
			.execute();

		return event
			? EventEntity.initialize({
					createdAt: event.createdAt,
					description: event.description,
					eventDate: event.eventDate,
					id: event.id,
					organizer: event.organizer,
					title: event.title,
					updatedAt: event.updatedAt,
					users: event.eventUsers,
				})
			: null;
	}

	public async update(
		eventId: number,
		user: EventUserRequestDto,
	): Promise<EventEntity | null> {
		const { dateOfBirth, email, fullName, source } = user;

		await this.eventUserModel
			.query()
			.insert({
				dateOfBirth,
				email,
				fullName,
				source,
			})
			.execute();

		const event = await this.eventModel
			.query()
			.findById(eventId)
			.withGraphJoined(`[${RelationName.EVENT_USERS}]`)
			.execute();

		return event
			? EventEntity.initialize({
					createdAt: event.createdAt,
					description: event.description,
					eventDate: event.eventDate,
					id: event.id,
					organizer: event.organizer,
					title: event.title,
					updatedAt: event.updatedAt,
					users: event.eventUsers,
				})
			: null;
	}
}

export { EventRepository };

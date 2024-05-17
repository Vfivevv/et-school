import {
	type EventResponseDto,
	type ValueOf,
	configureString,
} from "@car/shared";

import { Button } from "~/libs/components/components.js";
import { AppRoute } from "~/libs/enums/app-route.enum.js";

import styles from "./styles.module.css";

type Properties = {
	event: EventResponseDto;
};

const EventCard: React.FC<Properties> = ({ event }: Properties) => {
	const eventUsersRoute = configureString(AppRoute.EVENT, {
		id: String(event.id),
	});

	return (
		<li className={styles["card"]} key={event.id}>
			<h3>{event.title}</h3>
			<p>{event.description}</p>
			<p>{new Date(event.eventDate).toLocaleDateString()}</p>
			<p>Organized by: {event.organizer}</p>
			<div className={styles["button-container"]}>
				<Button href={AppRoute.EVENT_REGISTRATION} label="Registration" />
				<Button
					href={eventUsersRoute as ValueOf<typeof AppRoute>}
					label="View"
				/>
			</div>
		</li>
	);
};

export { EventCard };

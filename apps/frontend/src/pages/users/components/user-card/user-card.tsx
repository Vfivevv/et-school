import { type EventResponseDto, type EventUserResponseDto } from "@car/shared";

import { Button } from "~/libs/components/components.js";
import { AppRoute } from "~/libs/enums/app-route.enum.js";

import styles from "./styles.module.css";

type Properties = {
	user: EventUserResponseDto;
};

const UserCard: React.FC<Properties> = ({ user }: Properties) => {
	return (
		<li className={styles["card"]} key={user.id}>
			<h3>{user.fullName}</h3>
			<p>{user.email}</p>
			<p>{new Date(user.dateOfBirth).toLocaleDateString()}</p>
			<p>How did you know about us? {user.source}</p>
		</li>
	);
};

export { UserCard };

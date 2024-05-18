import { type EventUserResponseDto } from "@car/shared";

import styles from "./styles.module.css";

type Properties = {
	user: EventUserResponseDto;
};

const UserCard: React.FC<Properties> = ({ user }: Properties) => {
	return (
		<li className={styles["card"]} key={user.id}>
			<h3 className={styles["title"]}>{user.fullName}</h3>
			<p>{user.email}</p>
		</li>
	);
};

export { UserCard };

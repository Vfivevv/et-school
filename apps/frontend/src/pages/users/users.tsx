import { useParams } from "react-router-dom";

import {
	useAppDispatch,
	useAppSelector,
	useCallback,
	useEffect,
	useState,
} from "~/libs/hooks/hooks.js";
import { actions as eventsActions } from "~/modules/events/cars.js";

import { UserCard } from "./components/components.js";
import styles from "./styles.module.css";

const Users: React.FC = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const { users } = useAppSelector((state) => state.events);

	useEffect(() => {
		void dispatch(
			eventsActions.getEventUsers({
				count: 12,
				eventId: Number(id),
				page: 1,
				search: "",
			}),
		);
	}, [dispatch, id]);

	return (
		<div className={styles["container"]}>
			{users.length === 0 ? (
				<p>No registered users</p>
			) : (
				<ul className={styles["list-container"]}>
					{users.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</ul>
			)}
		</div>
	);
};

export { Users };

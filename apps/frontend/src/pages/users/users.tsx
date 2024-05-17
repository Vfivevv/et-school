import { useParams } from "react-router-dom";

import {
	useAppDispatch,
	useAppSelector,
	useCallback,
	useEffect,
	useState,
} from "~/libs/hooks/hooks.js";
import { actions as eventsActions } from "~/modules/events/events.js";

import { UserCard } from "./components/components.js";
import { MagicNumber } from "./libs/enums/enums.js";
import styles from "./styles.module.css";

const Users: React.FC = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const { users } = useAppSelector((state) => state.events);
	const [searchTerm, setSearchTerm] = useState<string>("");

	const handleSearchChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>): void => {
			setSearchTerm(event.target.value);
		},
		[],
	);
	useEffect(() => {
		void dispatch(
			eventsActions.getEventUsers({
				count: MagicNumber.PAGE_COUNT,
				eventId: Number(id),
				page: MagicNumber.DEFAULT_PAGE,
				search: searchTerm,
			}),
		);
	}, [dispatch, id, searchTerm]);

	return (
		<div className={styles["container"]}>
			<input
				className={styles["input"]}
				onChange={handleSearchChange}
				placeholder="Search users..."
				type="text"
				value={searchTerm}
			/>
			{users.length === MagicNumber.EMPTY_ARRAY ? (
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

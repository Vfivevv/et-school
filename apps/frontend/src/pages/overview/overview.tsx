import { useNavigate, useSearchParams } from "react-router-dom";

import { Button } from "~/libs/components/components.js";
import { type AppRoute } from "~/libs/enums/enums.js";
import {
	useAppDispatch,
	useAppSelector,
	useCallback,
	useEffect,
	useState,
} from "~/libs/hooks/hooks.js";
import { type ValueOf } from "~/libs/types/types.js";
import { actions as eventsActions } from "~/modules/events/events.js";

import { EventCard } from "./components/components.js";
import styles from "./styles.module.css";

const Overview: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
	const [queryParameters] = useSearchParams();
	const { events } = useAppSelector((state) => state.events);
	const currentPage = 1;

	const handleSort = useCallback(() => {
		setSortOrder((previousSortOrder) =>
			previousSortOrder === "asc" ? "desc" : "asc",
		);
		const searchParameters = new URLSearchParams(queryParameters);
		searchParameters.set("sortOrder", sortOrder === "asc" ? "desc" : "asc");
		navigate(`?${searchParameters.toString()}`);
	}, [navigate, queryParameters, sortOrder]);

	useEffect(() => {
		const searchParameters = new URLSearchParams(queryParameters);
		const sortOrderParameter = searchParameters.get("sortOrder") || "asc";
		const sortByParameter = searchParameters.get("sortBy") || "title";
		void dispatch(
			eventsActions.getAllEvents({
				page: currentPage,
				sortBy: sortByParameter,
				sortOrder: sortOrderParameter as "asc" | "desc",
			}),
		);
	}, [dispatch, queryParameters, currentPage, sortOrder]);

	return (
		<div className={styles["container"]}>
			<div className={styles["button-container"]}>
				<Button
					className={styles["button"]}
					href={
						`?sortOrder=${sortOrder}&page=${currentPage}&sortBy=title` as ValueOf<
							typeof AppRoute
						>
					}
					label="Sort by Title"
				/>
				<Button
					className={styles["button"]}
					href={
						`?sortOrder=${sortOrder}&page=${currentPage}&sortBy=eventDate` as ValueOf<
							typeof AppRoute
						>
					}
					label="Sort by Date"
				/>
				<Button
					className={styles["button"]}
					href={
						`?sortOrder=${sortOrder}&page=${currentPage}&sortBy=organizer` as ValueOf<
							typeof AppRoute
						>
					}
					label="Sort by Organizer"
				/>
				<Button
					className={styles["button"]}
					label={`Sort ${sortOrder === "asc" ? "desc" : "asc"}`}
					onClick={handleSort}
				/>
			</div>
			<ul className={styles["list-container"]}>
				{events.map((event) => (
					<EventCard event={event} key={event.id} />
				))}
			</ul>
		</div>
	);
};

export { Overview };

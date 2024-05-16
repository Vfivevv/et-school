import { type CarResponseDto } from "@car/shared";

import { DataStatus } from "~/libs/enums/enums.js";
import {
	useAppDispatch,
	useAppSelector,
	useCallback,
	useInView,
} from "~/libs/hooks/hooks.js";
import { actions as formActions } from "~/modules/form/forms.js";

import { Card } from "../card/card.js";
import { Loader } from "../components.js";
import styles from "./styles.module.css";

type Properties = {
	cars: CarResponseDto[];
};

const AutoPark: React.FC<Properties> = ({ cars }: Properties) => {
	const dispatch = useAppDispatch();
	const carDataStatus = useAppSelector(({ cars }) => {
		return cars.dataStatus;
	});

	const isLoading = carDataStatus === DataStatus.PENDING;
	const { inView, ref } = useInView({
		threshold: 0.05,
		triggerOnce: true,
	});

	const handleClick = useCallback(
		(car: CarResponseDto) => {
			return () => {
				dispatch(formActions.updateCar(car));
			};
		},
		[dispatch],
	);

	return (
		<div className={styles["container"]} ref={ref}>
			<h2 className={styles["title"]}>Our Auto Park</h2>
			{isLoading ? (
				<Loader size="large" />
			) : (
				<div className={`${styles["list"]} ${inView && styles["active"]}`}>
					{cars.map((car) => (
						<Card car={car} key={car.id} onClick={handleClick(car)} />
					))}
				</div>
			)}
		</div>
	);
};

export { AutoPark };

import { AppTitle } from "~/libs/enums/enums.js";
import {
	useAppDispatch,
	useAppForm,
	useAppSelector,
	useAppTitle,
	useCallback,
	useEffect,
	useState,
} from "~/libs/hooks/hooks.js";
import {
	type CarResponseDto,
	actions as carsActions,
} from "~/modules/cars/cars.js";
import { type FormCar, actions as formActions } from "~/modules/form/forms.js";

import { Card } from "./libs/components/card/card.js";
import { CarReservationModal } from "./libs/components/modal/car-reservation-modal.js";
import styles from "./styles.module.css";

const ReservationCar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const dispatch = useAppDispatch();
	const { cars } = useAppSelector((state) => state.cars);
	useEffect(() => {
		void dispatch(carsActions.getAllCars());
	}, [dispatch]);

	const { reset } = useAppForm<FormCar>({
		defaultValues: {
			carId: null,
			image: "",
			name: "",
		},
	});

	const handleFormSubmit = useCallback(
		(car: CarResponseDto): void => {
			dispatch(formActions.updateCar(car));
			setIsOpen(true);
		},
		[dispatch],
	);

	const handleClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	const handleResetForm = useCallback(() => {
		void dispatch(formActions.resetCar());
		void dispatch(formActions.resetAddons());
		reset();
	}, [reset, dispatch]);

	useAppTitle(AppTitle.RESERVATION);

	return (
		<div className={styles["container"]}>
			<section className={styles["form-wrapper"]}>
				<h2 className={styles["title"]}>Select your car</h2>
				<form action="" className={styles["form"]}>
					<ul className={styles["list"]}>
						{cars.map((car) => (
							<li key={car.id}>
								<Card
									car={car}
									onReset={handleResetForm}
									onSubmit={handleFormSubmit}
								/>
							</li>
						))}
					</ul>
				</form>
				<CarReservationModal isOpen={isOpen} onClose={handleClose} />
			</section>
		</div>
	);
};

export { ReservationCar };

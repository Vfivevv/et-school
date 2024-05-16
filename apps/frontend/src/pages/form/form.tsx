import { ReservationBanner } from "~/libs/components/components.js";
import { AppRoute } from "~/libs/enums/enums.js";
import {
	useCallback,
	useLocation,
	useNavigate,
	useResetScroll,
	useState,
} from "~/libs/hooks/hooks.js";

import {
	ReservationCar,
	ReservationDate,
	ReservationInformation,
	ReservationInformationModal,
} from "./components/components.js";
import styles from "./styles.module.css";

const Form: React.FC = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClose = useCallback(() => {
		setIsOpen(false);
		navigate(AppRoute.ROOT);
	}, [navigate]);

	const handleOpen = useCallback(() => {
		setIsOpen(true);
	}, []);

	const handleScreenRender = (screen: string): React.ReactNode => {
		switch (screen) {
			case AppRoute.RESERVATION_DATE: {
				return <ReservationDate />;
			}

			case AppRoute.RESERVATION_CAR: {
				return <ReservationCar />;
			}

			case AppRoute.RESERVATION_INFROMATION: {
				return <ReservationInformation onOpenModal={handleOpen} />;
			}
		}

		return null;
	};

	useResetScroll();

	return (
		<div className={styles["container"]}>
			<ReservationBanner />
			{handleScreenRender(pathname)}
			<ReservationInformationModal isOpen={isOpen} onClose={handleClose} />
		</div>
	);
};

export { Form };

import { AppRoute } from "~/libs/enums/enums.js";
import { useCallback, useNavigate, useState } from "~/libs/hooks/hooks.js";

import { ReservationInformation } from "./components/components.js";
import styles from "./styles.module.css";

const Form: React.FC = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	// const handleClose = useCallback(() => {
	// 	setIsOpen(false);
	// 	navigate(AppRoute.ROOT);
	// }, [navigate]);

	const handleOpen = useCallback(() => {
		setIsOpen(true);
	}, []);

	return (
		<div className={styles["container"]}>
			123
			<ReservationInformation onOpenModal={handleOpen} />;
		</div>
	);
};

export { Form };

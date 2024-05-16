import { Button, Modal } from "~/libs/components/components.js";
import { AppRoute } from "~/libs/enums/enums.js";

import styles from "./styles.module.css";

type Properties = {
	isOpen: boolean;
	onClose: () => void;
};

const ReservationInformationModal: React.FC<Properties> = ({
	isOpen,
	onClose,
}: Properties) => {
	return (
		<Modal
			className={styles["edit-modal"]}
			isCentered
			isOpen={isOpen}
			onClose={onClose}
		>
			<section className={styles["container"]}>
				<h2 className={styles["title"]}>Thank you!</h2>
				<p className={styles["text"]}>We'll contact you as soon as possible!</p>
				<Button
					className={styles["button"]}
					href={AppRoute.ROOT}
					label="Back to main"
					size="default"
					type="submit"
				/>
			</section>
		</Modal>
	);
};

export { ReservationInformationModal };

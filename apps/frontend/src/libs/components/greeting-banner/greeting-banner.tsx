import { AppRoute } from "~/libs/enums/app-route.enum.js";

import { Button } from "../button/button.js";
import styles from "./styles.module.css";

const GreetingBanner: React.FC = () => {
	return (
		<div className={styles["container"]}>
			<section className={styles["introduce"]}>
				<span className={styles["notice-text"]}>Plan your trip now</span>
				<h2 className={styles["title"]}>
					Save <span className={styles["selected-text"]}>big</span> with our car
					rental
				</h2>
				<p className={styles["text"]}>
					Rent the car of your dreams. Unbeatable prices, unlimited miles,
					flexible pick-up options and much more
				</p>
				<div className={styles["button-wrapper"]}>
					<Button
						className={styles["button"]}
						href={AppRoute.ABOUT_US}
						iconName="arrowNext"
						label="Learn more"
						size="default"
						style="black"
					/>
					<Button
						className={styles["button"]}
						href={AppRoute.RESERVATION_DATE}
						iconName="checked"
						label="Book ride"
						size="default"
						style="red"
					/>
				</div>
			</section>
			<div className={styles["image-container"]} />
		</div>
	);
};

export { GreetingBanner };

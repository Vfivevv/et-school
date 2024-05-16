import { Carousel } from "~/libs/components/components.js";

import { OUR_TEAM } from "../../libs/constants/constants.js";
import styles from "./styles.module.css";

const OurTeam: React.FC = () => {
	return (
		<div className={styles["container"]}>
			<h2 className={styles["title"]}>Our Team</h2>
			<Carousel data={OUR_TEAM} />
		</div>
	);
};

export { OurTeam };

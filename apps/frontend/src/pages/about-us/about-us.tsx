import { AppTitle } from "~/libs/enums/enums.js";
import { useAppTitle, useResetScroll } from "~/libs/hooks/hooks.js";

import { OurTeam, WelcomeBlock } from "./components/components.js";
import styles from "./styles.module.css";

const AboutUs: React.FC = () => {
	useAppTitle(AppTitle.ABOUT_US);
	useResetScroll();

	return (
		<section className={styles["container"]}>
			<WelcomeBlock />
			<OurTeam />
		</section>
	);
};

export { AboutUs };

import { AppTitle } from "~/libs/enums/enums.js";
import { useAppTitle } from "~/libs/hooks/hooks.js";

import { rules } from "./libs/constants/constants.js";
import styles from "./styles.module.css";

const Rules: React.FC = () => {
	useAppTitle(AppTitle.RULES);

	return (
		<section className={styles["container"]}>
			<h2 className={styles["title"]}>Terms and conditions</h2>
			{rules.map((rule, index) => (
				<div className={styles["rule"]} key={index}>
					<h2 className={styles["rule-title"]}>{rule.section}</h2>
					<p>{rule.content}</p>
				</div>
			))}
		</section>
	);
};

export { Rules };

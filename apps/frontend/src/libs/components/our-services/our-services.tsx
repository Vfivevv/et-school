import { OUR_SERVICES_ITEM as OurServicesItem } from "~/libs/constants/constants.js";
import { useInView } from "~/libs/hooks/hooks.js";

import { Icon } from "../components.js";
import styles from "./styles.module.css";

const OurServices: React.FC = () => {
	const { inView, ref } = useInView({
		threshold: 0.05,
		triggerOnce: true,
	});

	return (
		<div className={styles["container"]}>
			<section className={styles["describtion"]}>
				<h2 className={styles["describtion-title"]}>Our Services</h2>
				<p className={styles["describtion-text"]}>
					We Provide many of the best servises for you and you will get the best
					benefits here
				</p>
			</section>
			<ul className={styles["list"]} ref={ref}>
				{OurServicesItem.map(({ icon, title, value }) => {
					return (
						<li
							className={`${styles["list-item"]} ${inView && styles["active"]}`}
							key={title}
						>
							<Icon className={styles["icon"]} name={icon} />
							<h3 className={styles["list-title"]}>{title}</h3>
							<p className={styles["list-text"]}>{value}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export { OurServices };

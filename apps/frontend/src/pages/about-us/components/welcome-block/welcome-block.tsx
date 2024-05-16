import firstImage from "~/assets/img/welcome-block-first.svg";
import secondImage from "~/assets/img/welcome-block-second.svg";
import { Icon, Image } from "~/libs/components/components.js";
import { useInView } from "~/libs/hooks/hooks.js";

import styles from "./styles.module.css";

const WelcomeBlock: React.FC = () => {
	const { inView, ref } = useInView({
		threshold: 0.05,
		triggerOnce: true,
	});

	return (
		<div className={styles["container"]} ref={ref}>
			<div
				className={`${styles["content"]} ${inView && styles["active-left"]}`}
			>
				<section className={styles["description"]}>
					<h2 className={styles["title"]}>Welcome to visit us</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
						laudantium, natus non incidunt cumque quidem cum repellendus nostrum
						neque eum eaque illum impedit sequi recusandae mollitia saepe
						facilis debitis. Doloribus?
					</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</section>
				<Image
					alt="content image"
					className={styles["image"]}
					src={firstImage}
				/>
			</div>
			<div
				className={`${styles["content"]} ${styles["reverse"]} ${inView && styles["active-right"]}`}
			>
				<section className={styles["description"]}>
					<h2 className={styles["title"]}>About Us</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
						laudantium, natus non incidunt cumque quidem cum repellendus nostrum
						neque eum eaque illum impedit sequi recusandae mollitia saepe
						facilis debitis. Doloribus?
					</p>
					<ul className={styles["list"]}>
						<li className={styles["item"]}>
							<Icon className={styles["icon"]} name="fillChecked" />
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</li>
						<li className={styles["item"]}>
							<Icon className={styles["icon"]} name="fillChecked" />
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</li>
						<li className={styles["item"]}>
							<Icon className={styles["icon"]} name="fillChecked" />
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</li>
					</ul>
				</section>
				<Image
					alt="content image"
					className={styles["image"]}
					src={secondImage}
				/>
			</div>
		</div>
	);
};

export { WelcomeBlock };

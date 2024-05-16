import { type AppRoute } from "~/libs/enums/enums.js";
import { useInView } from "~/libs/hooks/hooks.js";
import { type ValueOf } from "~/libs/types/types.js";

import { Button, Icon, Link } from "../components.js";
import styles from "./styles.module.css";

const AboutUs: React.FC = () => {
	const { inView, ref } = useInView({
		threshold: 0.05,
		triggerOnce: true,
	});

	return (
		<div className={styles["container"]} ref={ref}>
			<div
				className={`${styles["about-wrapper"]} ${inView && styles["active-left"]}`}
			>
				<section className={styles["content"]}>
					<h2 className={styles["title"]}>What Do You Know About Us</h2>
					<p className={styles["text"]}>
						Vestibulum id odio a erat gravida sollicitudin. Quisque porttitor
						turpis sit amet dolor imperdiet, et molestie tellus suscipit. Ut nec
						odio nisl. Quisque malesuada tortor non erat fermentum, sed
						sollicitudin nisl sodales. Pellentesque faucibus viverra massa,
						vitae tempus nisi venenatis eu. Proin mauris tellus, egestas ac
						tempor vitae, luctus lobortis nisl. Vivamus convallis gravida quam
					</p>
					<Button
						className={styles["link"]}
						href="/"
						label="OUR COMPANY"
						size="default"
						style="primary"
					/>
				</section>
				<div
					className={`${styles["image-container"]} ${inView && styles["active-right"]}`}
				/>
			</div>
			<section
				className={`${styles["feedback"]} ${inView && styles["active-top"]}`}
			>
				<h2 className={styles["title"]}>
					HAVE A QUESTIONS? FEEL FREE TO ASK...
				</h2>
				<Link
					className={styles["link"]}
					to={"tel:+380999999999" as ValueOf<typeof AppRoute>}
				>
					<Icon className={styles["phone"]} name="phone" />
					+380 (99) 99 99 999
				</Link>
				<Button
					className={styles["button"]}
					href="/"
					iconName="letter"
					label="Feedback"
					size="default"
					style="secondary"
				/>
			</section>
		</div>
	);
};

export { AboutUs };

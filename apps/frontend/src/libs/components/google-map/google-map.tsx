import { useInView } from "~/libs/hooks/hooks.js";

import styles from "./styles.module.css";

const GoogleMap: React.FC = () => {
	const { inView, ref } = useInView({
		threshold: 0.05,
		triggerOnce: true,
	});

	return (
		<div className={styles["container"]}>
			<iframe
				className={styles["map"]}
				height="450"
				// allowfullscreen=""
				loading="lazy"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35718.510369349744!2d25.927531963905448!3d48.28757565096515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473408e5ddf64a09%3A0x5142633465c70997!2z0LLRg9C70LjRhtGPINCg0YPRgdGM0LrQsCwgMTgwLCDQp9C10YDQvdGW0LLRhtGWLCDQp9C10YDQvdGW0LLQtdGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA1ODAwMA!5e0!3m2!1suk!2sua!4v1714403673402!5m2!1suk!2sua"
				width="600"
				// referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	);
};

export { GoogleMap };

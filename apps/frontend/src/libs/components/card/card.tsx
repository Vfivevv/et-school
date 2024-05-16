import { type CarResponseDto } from "@car/shared";

import { AppRoute } from "~/libs/enums/app-route.enum.js";

import { Icon } from "../icon/icon.js";
import { Image } from "../image/image.js";
import { Link } from "../link/link.js";
import styles from "./styles.module.css";

type Properties = {
	car: CarResponseDto;
	onClick: () => void;
};

const Card: React.FC<Properties> = ({ car, onClick }: Properties) => {
	return (
		<Link
			className={styles["container"]}
			onClick={onClick}
			to={AppRoute.RESERVATION_CAR}
		>
			<Image alt="car" className={styles["image"]} src={car.image} />
			<section className={styles["content"]}>
				<h2 className={styles["title"]}>{car.name}</h2>
				<ul>
					<li className={styles["item-content"]}>
						<Icon className={styles["icon"]} name="carDoor" />
						<p>{car.numberOfDoors} seat</p>
					</li>
					<li className={styles["item-content"]}>
						<Icon className={styles["icon"]} name="climateControl" />
						<p>{car.climateControl} A/C</p>
					</li>
					<li className={styles["item-content"]}>
						<Icon className={styles["icon"]} name="trunk" />
						<p>{car.trunkVolume} L</p>
					</li>
				</ul>
				<p className={styles["price"]}>
					from&nbsp;
					<span>
						<span className={styles["select-price"]}>${car.rentPrice}</span>
						/day
					</span>
				</p>
			</section>
		</Link>
	);
};

export { Card };

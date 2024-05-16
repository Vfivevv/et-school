import { type CarResponseDto } from "@car/shared";

import { Button, Icon, Image } from "~/libs/components/components.js";
import { useCallback } from "~/libs/hooks/hooks.js";

import styles from "./styles.module.css";

type Properties = {
	car: CarResponseDto;
	onReset: () => void;
	onSubmit: (car: CarResponseDto) => void;
};

const Card: React.FC<Properties> = ({ car, onReset, onSubmit }: Properties) => {
	const handleFormSubmit = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>): void => {
			event.preventDefault();
			onSubmit(car);
		},
		[onSubmit, car],
	);

	return (
		<div className={styles["container"]}>
			<Image alt="car" className={styles["image"]} src={car.image} />
			<section className={styles["content"]}>
				<div className={styles["common-info"]}>
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
				</div>

				<ul className={styles["car-modifications"]}>
					{car.cdPlayer && (
						<li className={styles["car-modification-item"]}>
							<Icon className={styles["checked"]} name="checked" />
							CD Player
						</li>
					)}
					{car.climateControl && (
						<li className={styles["car-modification-item"]}>
							<Icon className={styles["checked"]} name="checked" />
							Climate Control{" "}
						</li>
					)}
					{car.navigationSystem && (
						<li className={styles["car-modification-item"]}>
							<Icon className={styles["checked"]} name="checked" />
							Navigation System{" "}
						</li>
					)}
					{car.parkingSensors && (
						<li className={styles["car-modification-item"]}>
							<Icon className={styles["checked"]} name="checked" />
							Parking Sensors{" "}
						</li>
					)}
					{car.panoramicRoof && (
						<li className={styles["car-modification-item"]}>
							<Icon className={styles["checked"]} name="checked" />
							Panoramic Roof{" "}
						</li>
					)}
				</ul>

				<div className={styles["button-container"]}>
					<Button
						label="Next stage"
						onClick={handleFormSubmit}
						size="default"
						type="submit"
					/>
					<Button
						className={styles["button"]}
						label="Reset"
						onClick={onReset}
						size="default"
						style="secondary"
					/>
				</div>
			</section>
		</div>
	);
};

export { Card };

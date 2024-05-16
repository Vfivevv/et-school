import {
	AboutUs,
	AutoPark,
	Carousel,
	GoogleMap,
	GreetingBanner,
	OurServices,
} from "~/libs/components/components.js";
import {
	useAppDispatch,
	useAppSelector,
	useEffect,
} from "~/libs/hooks/hooks.js";
import { actions as carsActions } from "~/modules/cars/cars.js";

import styles from "./styles.module.css";

const Overview: React.FC = () => {
	const dispatch = useAppDispatch();
	const { cars } = useAppSelector((state) => state.cars);

	useEffect(() => {
		void dispatch(carsActions.getAllCars());
	}, [dispatch]);

	const data = [
		{
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbm7S8wMFkE0iG8e1eRGnNCoaUJg7G1ilEQrym6b7WKwFFO2lxweYcrbJGdJJ8y4H6BRA&usqp=CAU",
			name: "John Morgan",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbm7S8wMFkE0iG8e1eRGnNCoaUJg7G1ilEQrym6b7WKwFFO2lxweYcrbJGdJJ8y4H6BRA&usqp=CAU",
			name: "Ellie Anderson",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbm7S8wMFkE0iG8e1eRGnNCoaUJg7G1ilEQrym6b7WKwFFO2lxweYcrbJGdJJ8y4H6BRA&usqp=CAU",
			name: "Nia Adebayo",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbm7S8wMFkE0iG8e1eRGnNCoaUJg7G1ilEQrym6b7WKwFFO2lxweYcrbJGdJJ8y4H6BRA&usqp=CAU",
			name: "Rigo Louie",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			img: null,
			name: "Mia Williams",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	];

	return (
		<div className={styles["container"]}>
			<GreetingBanner />
			<OurServices />
			<AutoPark cars={cars} />
			<Carousel data={data} />
			<AboutUs />
			<GoogleMap />
		</div>
	);
};

export { Overview };

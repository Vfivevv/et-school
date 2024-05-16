import {
	Button,
	Checkbox,
	Image,
	Input,
	Loader,
	Navigate,
} from "~/libs/components/components.js";
import { AppRoute, AppTitle, DataStatus } from "~/libs/enums/enums.js";
import { getDays } from "~/libs/helpers/helpers.js";
import {
	useAppDispatch,
	useAppForm,
	useAppSelector,
	useAppTitle,
	useCallback,
	useEffect,
} from "~/libs/hooks/hooks.js";
import {
	type Form,
	type FormPriceRequestDto,
	actions as formActions,
	formInformationParametersValidationSchema,
} from "~/modules/form/forms.js";

import { ARRAY_LENGHT } from "../libs/constants/array-length.constant.js";
import styles from "./styles.module.css";

type Properties = {
	onOpenModal: () => void;
};

const ReservationInformation: React.FC<Properties> = ({
	onOpenModal,
}: Properties) => {
	useAppTitle(AppTitle.RESERVATION);
	const dispatch = useAppDispatch();
	const { addons, car, date, price } = useAppSelector((state) => state.forms);
	const { user } = useAppSelector((state) => state.auth);
	const days = getDays(date.startDate, date.returnDate);
	const isFinishDataForm = date.startDate && date.returnDate;
	const priceDataStatus = useAppSelector(({ forms }) => {
		return forms.priceStatus;
	});
	const isPriceLoading = priceDataStatus === DataStatus.PENDING;

	const { control, errors, getValues, handleSubmit, reset } = useAppForm<Form>({
		defaultValues: {
			address: "",
			city: "",
			country: "",
			driverLicense: "",
			email: user ? user.email : "",
			firstName: user ? user.firstName : "",
			isRullesAccepted: false,
			lastName: user ? user.lastName : "",
			phone: user?.phoneNumber ?? "",
		},
		validationSchema: formInformationParametersValidationSchema,
	});

	const handleInputChange = useCallback(
		(formData: Form): void => {
			void dispatch(
				formActions.updateDate({
					address: formData.address,
					city: formData.city,
					country: formData.country,
					driverLicense: formData.driverLicense,
					email: formData.email,
					firstName: formData.firstName,
					lastName: formData.lastName,
					phone: formData.phone,
				}),
			);

			if (Object.keys(errors).length === ARRAY_LENGHT.EMPTY) {
				const payload = {
					...getValues(),
					...date,
					...car,
					...addons,
					...price,
				};
				void dispatch(formActions.createForm(payload));
				onOpenModal();
			}
		},
		[addons, car, date, dispatch, errors, getValues, onOpenModal, price],
	);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			void handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	const handleResetForm = useCallback(() => {
		void dispatch(formActions.resetForm());
		reset();
	}, [dispatch, reset]);

	useEffect(() => {
		const payload: FormPriceRequestDto = {
			additionalInsurance: addons.additionalInsurance,
			childSeat: addons.childSeat,
			days,
			ownDriver: addons.ownDriver,
			price: car.rentPrice,
		};
		void dispatch(formActions.getPrice(payload));
	}, [dispatch, date, car, addons, days]);

	if (!isFinishDataForm) {
		return <Navigate replace to={AppRoute.RESERVATION_DATE} />;
	}

	return (
		<div className={styles["container"]}>
			<section className={styles["form-wrapper"]}>
				<h2 className={styles["title"]}>Checkout</h2>
				<form action="" className={styles["form"]} onSubmit={handleFormSubmit}>
					<div className={styles["content"]}>
						<h3>Checkout</h3>
						<Image alt="Your car" className={styles["image"]} src={car.image} />
						<section>
							<h4>Rate</h4>
							<p>Days: {days}</p>
							{isPriceLoading ? (
								<div className={styles["price-container"]}>
									<p>Price: </p>
									<Loader className={styles["price-loader"]} size="micro" />
								</div>
							) : (
								<div className={styles["price-container"]}>
									<p>Price: {price.price} $</p>
								</div>
							)}
						</section>
					</div>
					<div className={styles["content"]}>
						<h4>Information</h4>
						<Input
							control={control}
							errors={errors}
							label="First name *"
							name="firstName"
							placeholder="Enter your name"
							type="text"
						/>
						<Input
							control={control}
							errors={errors}
							label="Last name *"
							name="lastName"
							placeholder="Enter your last name"
							type="text"
						/>
						<Input
							control={control}
							errors={errors}
							label="Phone *"
							name="phone"
							placeholder="Enter your phone"
							type="text"
						/>
						<Input
							control={control}
							errors={errors}
							label="Email *"
							name="email"
							placeholder="Enter your email"
							type="text"
						/>
						<Input
							control={control}
							errors={errors}
							label="Country (optional)"
							name="country"
							placeholder="Enter your country"
							type="text"
						/>
						<Input
							control={control}
							errors={errors}
							label="City (optional)"
							name="city"
							placeholder="Enter your city"
							type="text"
						/>
						<Input
							control={control}
							errors={errors}
							label="Address (optional)"
							name="address"
							placeholder="Enter your address"
							type="text"
						/>
						<Input
							control={control}
							errors={errors}
							label="Driver License number (optional)"
							name="driverLicense"
							placeholder="Enter your nubmer of driver license"
							type="text"
						/>
						<Checkbox
							className={styles["checkbox"]}
							control={control}
							errors={errors}
							label="I have read and agree to the website terms and conditions *"
							name="isRullesAccepted"
							to={AppRoute.RULES}
						/>
						<div className={styles["btn-wrapper"]}>
							<Button
								className={styles["button"]}
								label="Reset"
								onClick={handleResetForm}
								size="default"
								style="secondary"
							/>
							<Button
								className={styles["button"]}
								label="Send form"
								size="default"
								type="submit"
							/>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
};

export { ReservationInformation };

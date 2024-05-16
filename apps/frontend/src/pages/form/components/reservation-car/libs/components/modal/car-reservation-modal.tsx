import { type FormCarAddons } from "@car/shared";

import {
	Button,
	Checkbox,
	Icon,
	Input,
	Modal,
} from "~/libs/components/components.js";
import { AppRoute } from "~/libs/enums/enums.js";
import {
	useAppDispatch,
	useAppForm,
	useAppSelector,
	useCallback,
	useEffect,
	useNavigate,
} from "~/libs/hooks/hooks.js";
import {
	actions as formActions,
	formCarParametersValidationSchema,
} from "~/modules/form/forms.js";
import { ARRAY_LENGHT } from "~/pages/form/components/libs/constants/array-length.constant.js";

import styles from "./styles.module.css";

type Properties = {
	isOpen: boolean;
	onClose: () => void;
};

const CarReservationModal: React.FC<Properties> = ({
	isOpen,
	onClose,
}: Properties) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const carData = useAppSelector((state) => state.forms.addons);

	const { control, errors, handleSubmit, register, reset } =
		useAppForm<FormCarAddons>({
			defaultValues: {
				additionalInsurance: carData.additionalInsurance,
				childSeat: carData.childSeat,
				ownDriver: carData.ownDriver,
			},
			validationSchema: formCarParametersValidationSchema,
		});

	useEffect(() => {
		reset({
			additionalInsurance: carData.additionalInsurance,
			childSeat: carData.childSeat,
			ownDriver: carData.ownDriver,
		});
	}, [carData, reset]);

	const handleInputChange = useCallback(
		(formData: FormCarAddons): void => {
			void dispatch(
				formActions.updateAddons({
					additionalInsurance: formData.additionalInsurance,
					childSeat: formData.childSeat,
					ownDriver: formData.ownDriver,
				}),
			);

			if (Object.keys(errors).length === ARRAY_LENGHT.EMPTY) {
				onClose();
				navigate(AppRoute.RESERVATION_INFROMATION);
			}
		},
		[dispatch, errors, navigate, onClose],
	);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			void handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	return (
		<Modal
			className={styles["edit-modal"]}
			isCentered
			isOpen={isOpen}
			onClose={onClose}
		>
			<form className={styles["container"]} onSubmit={handleFormSubmit}>
				<ul className={styles["list-wrapper"]}>
					<h2 className={styles["title"]}>Optional addon</h2>
					<li className={styles["car-modification-item"]}>
						<Icon className={styles["checked"]} name="checked" />
						Own driver
						<Checkbox
							control={control}
							errors={errors}
							hasVisuallyHiddenLabel
							label="Own driver"
							name="ownDriver"
						/>
					</li>
					<li className={styles["car-modification-item"]}>
						<Icon className={styles["checked"]} name="checked" />
						<Input
							control={control}
							errors={errors}
							inputMode="numeric"
							label="Child seat"
							name="childSeat"
							placeholder="Child seat"
							register={register}
							type="number"
						/>
					</li>
					<li className={styles["car-modification-item"]}>
						<Icon className={styles["checked"]} name="checked" />
						Additional insurancer
						<Checkbox
							control={control}
							errors={errors}
							hasVisuallyHiddenLabel
							label="Additional insurance"
							name="additionalInsurance"
						/>
					</li>
				</ul>
				<div className={styles["btn-wrapper"]}>
					<Button
						className={styles["button"]}
						label="Next stage"
						size="default"
						type="submit"
					/>
				</div>
			</form>
		</Modal>
	);
};

export { CarReservationModal };

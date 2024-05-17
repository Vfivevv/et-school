import { type EventUserRequestDto } from "@car/shared";

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
import { actions as eventsActions } from "~/modules/events/events.js";
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
	const dispatch = useAppDispatch();

	const { control, errors, getValues, handleSubmit, reset } =
		useAppForm<EventUserRequestDto>({
			defaultValues: {
				dateOfBirth: "",
				email: "",
				fullName: "",
				source: "",
			},
			validationSchema: formInformationParametersValidationSchema,
		});

	const handleInputChange = useCallback(
		(formData: EventUserRequestDto): void => {
			void dispatch(
				formActions.updateDate({
					dateOfBirth: formData.dateOfBirth,
					email: formData.email,
					fullName: formData.fullName,
					source: formData.source,
				}),
			);

			if (Object.keys(errors).length === ARRAY_LENGHT.EMPTY) {
				const payload = {
					...getValues(),
				};
				void dispatch(eventsActions.createForm(payload));
				onOpenModal();
			}
		},
		[dispatch, errors, getValues, onOpenModal],
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

	return (
		<div className={styles["container"]}>
			<section className={styles["form-wrapper"]}>
				<h2 className={styles["title"]}>Checkout</h2>
				<form action="" className={styles["form"]} onSubmit={handleFormSubmit}>
					<div className={styles["content"]}>
						<h4>Information</h4>
						<Input
							control={control}
							errors={errors}
							label="Full name *"
							name="fullName"
							placeholder="Enter your name"
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
							label="Date of birth *"
							name="dateOfBirth"
							placeholder="Enter your date of birth"
							type="date"
						/>
						<Input
							control={control}
							errors={errors}
							label="Source *"
							name="source"
							placeholder="Enter your source"
							type="text"
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

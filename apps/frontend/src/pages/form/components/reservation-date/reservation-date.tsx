import { Button, Input, Select } from "~/libs/components/components.js";
import { AppRoute, AppTitle } from "~/libs/enums/enums.js";
import { getTomorrowDateString } from "~/libs/helpers/helpers.js";
import {
	useAppDispatch,
	useAppForm,
	useAppTitle,
	useCallback,
	useMemo,
	useNavigate,
} from "~/libs/hooks/hooks.js";
import {
	type FormDate,
	actions as formActions,
	formParametersValidationSchema,
} from "~/modules/form/forms.js";

import { ARRAY_LENGHT, OUR_OFFICE } from "../libs/constants/constants.js";
import styles from "./styles.module.css";

const ReservationDate: React.FC = () => {
	useAppTitle(AppTitle.RESERVATION);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { control, errors, handleSubmit, reset, watch } = useAppForm<FormDate>({
		defaultValues: {
			office: "",
			returnDate: "",
			startDate: "",
		},
		validationSchema: formParametersValidationSchema,
	});

	const startDate = watch("startDate");
	const returnDate = watch("returnDate");

	const officeOption = useMemo(() => {
		return OUR_OFFICE.map((item) => ({
			label: item,
			value: item,
		}));
	}, []);

	const handleInputChange = useCallback(
		(formData: FormDate): void => {
			void dispatch(
				formActions.updateDate({
					office: formData.office,
					returnDate: formData.returnDate,
					startDate: formData.startDate,
				}),
			);

			if (Object.keys(errors).length === ARRAY_LENGHT.EMPTY) {
				navigate(AppRoute.RESERVATION_CAR);
			}
		},
		[dispatch, errors, navigate],
	);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			void handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	const handleResetForm = useCallback(() => {
		void dispatch(formActions.resetDate());
		reset();
	}, [reset, dispatch]);

	return (
		<div className={styles["container"]}>
			<section className={styles["form-wrapper"]}>
				<h2 className={styles["title"]}>Reserve your vehicle</h2>
				<form action="" className={styles["form"]} onSubmit={handleFormSubmit}>
					<div className={styles["content"]}>
						<h4>Pick up</h4>
						<Input
							control={control}
							errors={errors}
							label="Start date"
							maxDate={getTomorrowDateString(returnDate)}
							minDate={getTomorrowDateString(new Date())}
							name="startDate"
							placeholder="Choise start day"
							type="date"
						/>
						<Input
							control={control}
							errors={errors}
							label="Return date"
							minDate={getTomorrowDateString(startDate)}
							name="returnDate"
							placeholder="Choise return day"
							type="date"
						/>
					</div>
					<div className={styles["content"]}>
						<h4>Return</h4>
						<Select
							control={control}
							errors={errors}
							label="place to pick up the car*"
							name="office"
							options={officeOption}
							placeholder="Place to pick up the car"
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
								label="Next stage"
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

export { ReservationDate };

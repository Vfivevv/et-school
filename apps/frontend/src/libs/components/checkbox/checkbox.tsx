import {
	type Control,
	type FieldErrors,
	type FieldPath,
	type FieldValues,
} from "react-hook-form";

import { getValidClassNames } from "~/libs/helpers/helpers.js";
import { useFormController } from "~/libs/hooks/hooks.js";

import styles from "./styles.module.css";
import { AppRoute } from "~/libs/enums/enums.js";
import { ValueOf } from "~/libs/types/types.js";

type Properties<T extends FieldValues> = {
	className?: string | undefined;
	control: Control<T, null>;
	errors: FieldErrors<T>;
	hasVisuallyHiddenLabel?: boolean;
	isDisabled?: boolean | undefined;
	to?: ValueOf<typeof AppRoute>;
	label: string;
	name: FieldPath<T>;
};

const Checkbox = <T extends FieldValues>({
	className,
	control,
	errors,
	hasVisuallyHiddenLabel,
	isDisabled,
	label,
	to,
	name,
}: Properties<T>): JSX.Element => {
	const { field } = useFormController({ control, name });
	const error = errors[name]?.message;
	const hasError = Boolean(error);

	const inputClasses = getValidClassNames(
		className,
		styles["input"],
		hasError && styles["error-input"],
	);
	const labelClasses = getValidClassNames(
		styles["checkbox-label"],
		hasVisuallyHiddenLabel && "visually-hidden",
	);

	return (
		<label className={styles["checkbox-container"]}>
			{to ? (
				<a href={to} className={labelClasses}>
					{label}
				</a>
			) : (
				<span className={labelClasses}>{label}</span>
			)}
			<input
				{...field}
				checked={Boolean(field.value)}
				className={inputClasses}
				disabled={isDisabled}
				type="checkbox"
			/>
			{hasError && <span className={styles["error"]}>{error as string}</span>}
		</label>
	);
};

export { Checkbox };

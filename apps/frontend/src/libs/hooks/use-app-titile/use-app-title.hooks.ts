import { useEffect } from "~/libs/hooks/hooks.js";

const useAppTitle = (title?: string): void => {
	useEffect(() => {
		document.title = (title ? title + " | " : "") + "Rent Car";
	}, [title]);
};

export { useAppTitle };

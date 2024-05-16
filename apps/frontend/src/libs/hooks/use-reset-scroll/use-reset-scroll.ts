import { useEffect } from "../hooks.js";

const ZERO = 0;

const useResetScroll = (): void => {
	useEffect(() => {
		window.scrollTo(ZERO, ZERO);
	}, []);
};

export { useResetScroll };

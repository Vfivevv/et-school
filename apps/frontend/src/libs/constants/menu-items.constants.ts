import { AppRoute } from "~/libs/enums/enums.js";

import { type MenuItem } from "../types/types.js";

const MENU_ITEMS: MenuItem[] = [
	{
		href: AppRoute.ROOT,
		label: "Main",
	},
	{
		href: AppRoute.ABOUT_US,
		label: "About us",
	},
];

export { MENU_ITEMS };

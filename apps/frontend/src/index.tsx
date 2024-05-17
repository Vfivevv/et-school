import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "~/assets/css/styles.css";
import {
	App,
	Notification,
	RouterProvider,
	StoreProvider,
} from "~/libs/components/components.js";
import { AppRoute } from "~/libs/enums/enums.js";
import { store } from "~/libs/modules/store/store.js";

import { NotFound } from "./pages/not-found/not-found.js";
import { Overview } from "./pages/overview/overview.js";
import { Users } from "./pages/users/users.js";

createRoot(document.querySelector("#root") as HTMLElement).render(
	<StrictMode>
		<Notification />
		<StoreProvider store={store.instance}>
			<RouterProvider
				routes={[
					{
						children: [
							{
								element: <Overview />,
								path: AppRoute.ROOT,
							},
							{
								element: <Users />,
								path: AppRoute.EVENT,
							},
							{
								element: <Users />,
								path: AppRoute.EVENT,
							},
						],
						element: <App />,
						path: AppRoute.ROOT,
					},
					{ element: <NotFound />, path: AppRoute.ANY },
				]}
			/>
		</StoreProvider>
	</StrictMode>,
);

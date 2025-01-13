import { useState, useEffect } from "react";

export const useCurrentRoute = () => {
	const [route, setRoute] = useState(window.location.pathname);

	useEffect(() => {
		const handleRouteChange = () => {
			setRoute(window.location.pathname);
		};

		window.addEventListener("popstate", handleRouteChange);

		return () => {
			window.removeEventListener("popstate", handleRouteChange);
		};
	}, []);

	return route;
};

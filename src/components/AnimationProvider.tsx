"use client";

import { AnimatePresence } from "framer-motion";
import React, { use } from "react";

export default function AnimationProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const windowSize = useWindowSize();
	React.useEffect(() => {
		document
			.getElementById("root")
			?.style.setProperty("--size", `${windowSize.width}`);
	}, [windowSize]);

	return children;
}

function useWindowSize() {
	const [windowSize, setWindowSize] = React.useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	React.useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}

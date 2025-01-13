import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";
import Menu from "./components/menu";

import About from "./pages/about";
import Works from "./pages/works";

function App() {
	const location = useLocation();
	const windowSize = useWindowSize();

	useEffect(() => {
		document
			.getElementById("root")
			?.style.setProperty("--size", `${windowSize.width}`);
	}, [windowSize]);

	return (
		<>
			<AnimatePresence>
				<Menu />
				<Routes location={location} key={location.pathname}>
					<Route index element={<Works />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<div />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;

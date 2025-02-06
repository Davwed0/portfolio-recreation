import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";
import Menu from "./components/menu";

// Page imports
import About from "./pages/about";
import Works from "./pages/works";
import Contact from "./pages/contact";

// Route configuration
const routes = [
	{ path: "/", element: <Works /> },
	{ path: "/about", element: <About /> },
	{ path: "/contact", element: <Contact /> },
];

function App() {
	const location = useLocation();
	const { width } = useWindowSize();

	useEffect(() => {
		document.documentElement.style.setProperty("--size", `${width}`);
	}, [width]);

	return (
		<main className="relative">
			<Menu />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					{routes.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
				</Routes>
			</AnimatePresence>
		</main>
	);
}

export default App;

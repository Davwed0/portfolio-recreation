import { Route, Routes, useLocation } from "react-router-dom";
import WorksPage from "./pages/WorksPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { AnimatePresence } from "framer-motion";
import Menu from "./components/Menu";

function App() {
	const location = useLocation();

	return (
		<>
			<AnimatePresence mode="wait">
				<Menu />
				<Routes location={location} key={location.pathname}>
					<Route index element={<div />} />
					<Route path="/about" element={<div />} />
					<Route path="/contacts" element={<div />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;

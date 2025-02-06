import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { clsx } from "clsx";
import { TitleText } from "./titleText";
import * as animations from "./animations";

const menuItems = [
	{ path: "/", text: "Works," },
	{ path: "/about", text: "About," },
	{ path: "/contact", text: "Contact" },
];

export default function Menu() {
	const { pathname } = useLocation();

	const defaultStyle =
		"text-[1rem] font-semibold text-[--color] hover:text-gray-900 h-fit";
	const selectedStyle =
		"user-select-none pointer-events-none select-none font-bold";

	return (
		<nav className="fixed w-[calc(100%-2rem)] grid gap-x-4 grid-cols-[repeat(16,minmax(0,1fr))] h-[9rem] overflow-hidden z-50">
			<motion.div
				className={clsx(
					defaultStyle,
					pathname === "/" && selectedStyle,
					"col-span-5 origin-top-right text-right"
				)}
				layoutId="/"
				variants={animations.scalingAnimation}
				initial={pathname === "/" ? "goFat" : "goSmol"}
				animate={pathname === "/" ? "goFat" : "goSmol"}
				exit={pathname === "/" ? "goFat" : "goSmol"}
				key="/">
				<Link to="/">
					<TitleText text="Works," word={pathname === "/"} index={0} />
				</Link>
			</motion.div>
			<motion.div className="col-span-auto flex flex-row gap-x-1">
				{menuItems.slice(1).map((item, index) => (
					<motion.div
						key={item.path}
						className={clsx(
							defaultStyle,
							pathname === item.path && selectedStyle,
							index === 0 && "col-span-5 origin-top-left text-left"
						)}
						layoutId={item.path}
						variants={animations.scalingAnimation}
						initial={pathname === item.path ? "goFat" : "goSmol"}
						animate={pathname === item.path ? "goFat" : "goSmol"}
						exit={pathname === item.path ? "goFat" : "goSmol"}>
						{item.path === "/contact" ? (
							<a href="mailto:filbert.tejalaksana@gmail.com" target="_blank">
								<TitleText
									text={item.text}
									word={pathname === item.path}
									index={index + 1}
								/>
							</a>
						) : (
							<Link to={item.path}>
								<TitleText
									text={item.text}
									word={pathname === item.path}
									index={index + 1}
								/>
							</Link>
						)}
					</motion.div>
				))}
			</motion.div>
		</nav>
	);
}

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useCurrentRoute } from "../hooks/useCurrentRoute";
import { clsx } from "clsx";
import { TitleText } from "./TitleText";
import * as animations from "./animations";

export default function Menu() {
	const currentRoute = useCurrentRoute();

	const defaultStyle =
		"text-[1rem] font-semibold text-[--color] hover:text-gray-900 h-fit";
	const selectedStyle =
		"user-select-none pointer-events-none select-none font-bold";

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setTimeout(() => {
			window.history.pushState({}, "", href);
			window.dispatchEvent(new PopStateEvent("popstate"));
		}, 500);
	};

	return (
		<div className="fixed w-[calc(100%-2rem)] grid gap-x-4 grid-cols-[repeat(16,minmax(0,1fr))] h-[9rem] overflow-hidden z-50">
			<motion.div
				className={clsx(
					defaultStyle,
					currentRoute == "/" && selectedStyle,
					"col-span-5 origin-top-right text-right"
				)}
				layoutId="/"
				variants={animations.scalingAnimation}
				initial={currentRoute == "/" ? "goFat" : "goSmol"}
				animate={currentRoute == "/" ? "goFat" : "goSmol"}
				exit={currentRoute == "/" ? "goFat" : "goSmol"}
				key="/">
				<a onClick={(e) => handleClick(e, "/")}>
					<TitleText text="Works," word={currentRoute == "/"} index={0} />
				</a>
			</motion.div>
			<motion.div className="col-span-auto flex flex-row gap-x-1">
				<motion.div
					className={clsx(
						defaultStyle,
						currentRoute == "/about" && selectedStyle,
						"col-span-5 origin-top-left text-left"
					)}
					layoutId="/about"
					variants={animations.scalingAnimation}
					initial={currentRoute == "/about" ? "goFat" : "goSmol"}
					animate={currentRoute == "/about" ? "goFat" : "goSmol"}
					exit={currentRoute == "/about" ? "goFat" : "goSmol"}
					key="/about">
					<a onClick={(e) => handleClick(e, "/about")}>
						<TitleText
							text="About,"
							word={currentRoute == "/about"}
							index={1}
						/>
					</a>
				</motion.div>
				<motion.div
					className={clsx(
						defaultStyle,
						currentRoute == "/contact" && selectedStyle
					)}
					layoutId="/contact"
					variants={animations.scalingAnimation}
					initial={currentRoute == "/contact" ? "goFat" : "goSmol"}
					animate={currentRoute == "/contact" ? "goFat" : "goSmol"}
					exit={currentRoute == "/contact" ? "goFat" : "goSmol"}
					key="/contact">
					<a onClick={(e) => handleClick(e, "/contact")}>
						<TitleText
							text="Contact"
							word={currentRoute == "/contact"}
							index={2}
						/>
					</a>
				</motion.div>
			</motion.div>
		</div>
	);
}

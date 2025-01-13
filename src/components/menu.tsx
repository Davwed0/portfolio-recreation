import React from "react";
import { motion } from "framer-motion";
import { useCurrentRoute } from "../hooks/useCurrentRoute";
import { clsx } from "clsx";
import { TitleText } from "./TitleText";
import * as colors from "tailwindcss/colors";

const scalingAnimation = {
	goFat: {
		fontSize: "8.8rem",
		lineHeight: "7.6rem",
		"--color": colors.gray[900],
	},
	goSmol: {
		fontSize: "1rem",
		lineHeight: "1.4rem",
		"--color": colors.gray[400],
	},
};

const transition = {
	duration: 0.6,
	ease: [0.83, 0, 0.17, 1],
};

const defaultStyle =
	"text-[1rem] font-semibold text-[--color] hover:text-gray-900 h-fit";
const selectedStyle =
	"user-select-none pointer-events-none select-none font-bold";

export default function Menu() {
	const currentRoute = useCurrentRoute();

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		window.history.pushState({}, "", href);
		// window.dispatchEvent(new PopStateEvent("popstate"));
	};

	return (
		<div className="fixed grid grid-cols-[repeat(16,minmax(0,1fr))] gap-x-4 w-full space-x-1 h-[8rem] overflow-hidden z-50">
			<motion.div
				className={clsx(
					defaultStyle,
					currentRoute == "/" && selectedStyle,
					"col-span-5 origin-top-right text-right"
				)}
				layout
				layoutId="/"
				variants={scalingAnimation}
				initial={currentRoute == "/" ? "goFat" : "goSmol"}
				animate={currentRoute == "/" ? "goFat" : "goSmol"}
				transition={transition}
				key="/">
				<a href={"/"} onClick={(e) => handleClick(e, "/")}>
					<TitleText
						text="Works,"
						href="/"
						word={currentRoute == "/"}
						index={0}
					/>
				</a>
			</motion.div>
			<motion.div className="col-span-auto flex flex-row">
				<motion.div
					className={clsx(
						defaultStyle,
						currentRoute == "/about" && selectedStyle,
						"col-span-5 origin-top-right text-right"
					)}
					layout
					layoutId="/about"
					variants={scalingAnimation}
					initial={currentRoute == "/about" ? "goFat" : "goSmol"}
					animate={currentRoute == "/about" ? "goFat" : "goSmol"}
					transition={transition}
					key="/about">
					<a href={"/about"} onClick={(e) => handleClick(e, "/about")}>
						<TitleText
							text="About,"
							href="/about"
							word={currentRoute == "/about"}
							index={0}
						/>
					</a>
				</motion.div>
				<motion.div
					className={clsx(
						defaultStyle,
						currentRoute == "/contact" && selectedStyle
					)}
					layout
					layoutId="/contact"
					variants={scalingAnimation}
					initial={currentRoute == "/contact" ? "goFat" : "goSmol"}
					animate={currentRoute == "/contact" ? "goFat" : "goSmol"}
					transition={transition}
					key="/contact">
					<a href={"/contact"} onClick={(e) => handleClick(e, "/contact")}>
						<TitleText
							text="Contact"
							href="/contact"
							word={currentRoute == "/contact"}
							index={0}
						/>
					</a>
				</motion.div>
			</motion.div>
		</div>
	);
}

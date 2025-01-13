"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import * as colors from "tailwindcss/colors";
import { usePathname } from "next/navigation";
import { TitleText } from "@/components/TitleText";

export default function Menu() {
	const path = usePathname();
	const [route, setRoute] = React.useState(path);

	useEffect(() => {
		setRoute(path);
	}, [path]);

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

	const defaultStyle = `text-[1rem] font-semibold text-[--color] hover:text-gray-900 h-fit`;
	const selectedStyle =
		"user-select-none pointer-events-none select-none font-bold";

	const transition = {
		duration: 0.6,
		ease: [0.83, 0, 0.17, 1],
	};

	return (
		<div className="fixed grid grid-cols-[repeat(16,minmax(0,1fr))] gap-x-4 w-full space-x-1 h-[8rem] overflow-hidden z-50">
			<motion.div
				className={clsx(
					defaultStyle,
					path == "/" && selectedStyle,
					"col-span-5 origin-top-right text-right"
				)}
				variants={scalingAnimation}
				initial={path == "/" ? "goFat" : "goSmol"}
				animate={path == "/" ? "goFat" : "goSmol"}
				transition={transition}
				key="/">
				<TitleText text="Works," href="/" word={true} index={0} />
			</motion.div>
			<motion.div className="col-span-auto flex flex-row">
				<motion.div
					className={clsx(
						defaultStyle,
						path == "/about" && selectedStyle,
						"col-span-5 origin-top-right text-right"
					)}
					variants={scalingAnimation}
					initial={path == "/about" ? "goFat" : "goSmol"}
					animate={path == "/about" ? "goFat" : "goSmol"}
					transition={transition}
					key="/about">
					<TitleText
						text="About,"
						href="/about"
						word={path == "/about"}
						index={0}
					/>
				</motion.div>
				<motion.div
					className={clsx(defaultStyle, path == "/contact" && selectedStyle)}
					variants={scalingAnimation}
					initial={path == "/contact" ? "goFat" : "goSmol"}
					animate={path == "/contact" ? "goFat" : "goSmol"}
					transition={transition}
					key="/contact">
					<TitleText
						text="Contact"
						href="/contact"
						word={path == "/contact"}
						index={0}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
}

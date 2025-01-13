"use client";

import { delay, motion } from "framer-motion";
import React from "react";

export function AnimatedBoxes({ index }: { index: number }) {
	const animation = {
		initial: { translateY: "200%" },
		animate: {
			translateY: "0%",
		},
	};

	const transition = {
		ease: [0.76, 0, 0.24, 1],
		duration: 1.2,
		staggerChildren: 0.05,
	};

	return (
		<>
			<motion.div
				key={`left-${index}`}
				initial="initial"
				animate="animate"
				transition={transition}
				className="mb-4 flex flex-row gap-2 h-1/2">
				<motion.div className="w-1/3 flex flex-row gap-5">
					{[0, 1].map((i) => (
						<motion.div
							key={i}
							variants={animation}
							transition={transition}
							className={`bg-gray-200 w-full`}></motion.div>
					))}
				</motion.div>
				<motion.div className="w-1/4"></motion.div>
				<motion.div className="w-3/5 flex flex-row gap-5">
					{[2, 3, 4, 5].map((i) => (
						<motion.div
							key={i}
							variants={animation}
							transition={transition}
							className={`bg-gray-200 w-full`}></motion.div>
					))}
				</motion.div>
			</motion.div>
		</>
	);
}

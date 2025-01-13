import { motion } from "framer-motion";

export function TitleText({
	text,
	href,
	word = false,
	index,
}: {
	text: string;
	href: string;
	word?: boolean;
	index: number;
}) {
	const animation = {
		word: {
			start: { translateY: "100%" },
			end: { translateY: "0%" },
		},
		character: {
			start: { translateY: "200%" },
			end: {
				translateY: "0%",
			},
		},
	};

	const transition = {
		word: {
			ease: [0.76, 0, 0.24, 1],
			duration: 0.8,
			staggerChildren: 0.05,
		},
		character: {
			ease: [0.61, 1, 0.88, 1],
			duration: 0.4,
		},
	};

	return (
		<div className={`${word ? "" : "overflow-hidden"}`}>
			<motion.div
				initial="start"
				animate="end"
				variants={animation.word}
				transition={{
					...transition.word,
					delay: index * 0.2,
				}}
				className="inline-flex">
				{word
					? text.split("").map((char, charIndex) => (
							<motion.div
								key={charIndex}
								variants={animation.character}
								transition={{
									...transition.character,
								}}>
								{char}
							</motion.div>
					  ))
					: text}
			</motion.div>
		</div>
	);
}

import { motion } from "framer-motion";
import * as animations from "./animations";

export function TitleText({
	text,
	word = false,
	index,
}: {
	text: string;
	word?: boolean;
	index: number;
}) {
	return (
		<div className={`${word ? "" : "overflow-hidden"}`}>
			<motion.div
				initial="start"
				animate="end"
				variants={animations.textRevealAnimation.word}
				transition={{
					...animations.textRevealTransition.word,
					delay: index * 0.2,
				}}
				className="inline-flex">
				{word
					? text.split("").map((char, charIndex) => (
							<motion.div
								key={charIndex}
								variants={animations.textRevealAnimation.character}
								transition={{
									...animations.textRevealTransition.character,
								}}>
								{char}
							</motion.div>
					  ))
					: text}
			</motion.div>
		</div>
	);
}

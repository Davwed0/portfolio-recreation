import { motion } from "framer-motion";
import * as animations from "./animations";

export function TitleText({
	text,
	word = false,
}: {
	text: string;
	word?: boolean;
	index: number;
}) {
	return (
		<motion.div className={`${word ? "" : "overflow-hidden"}`}>
			<motion.div
				initial="initial"
				animate="animate"
				variants={animations.textRevealAnimation.word}
				transition={animations.textRevealTransition.word}
				className="inline-flex">
				{word
					? text.split("").map((char, charIndex) => (
							<motion.div
								key={charIndex}
								variants={animations.textRevealAnimation.character}
								transition={animations.textRevealTransition.character}>
								{char}
							</motion.div>
					  ))
					: text}
			</motion.div>
		</motion.div>
	);
}

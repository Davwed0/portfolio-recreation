import { motion } from "framer-motion";
import * as animation from "../components/animations";

const clients = {
	"Angus Emmerson": [
		"(01) ",
		" a video editor based in Los Angeles, specialized in immersive",
	],
	"Pebble": [
		"effects and sound design. (02) ",
		" an all-electric travel trailer that’s bringing an",
	],
	"Mooders": [
		"iPhone-like experience to RVing. (03) ",
		" a music and sound design agency based",
	],
	"Theud": [
		"in France. (04) ",
		" a creative director mainly working in the music industry with",
	],
	"Storm": [
		"various rappers and artists. (05) ",
		" a production company specialized in",
	],
	"Denise": [
		"commercials, music videos, and brand content. (06) ",
		" an efficient multifaceted",
	],
	"Firm": [
		"company supporting brands in the production of content. (07) ",
		" a visual studio",
	],
	"ATCK": [
		"dedicated to film post-production based in Paris. (08) ",
		" a creative production house based in Paris.",
	],
};

const itemVariants = {
	initial: {},
	animate: {},
};

const containerVariants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.05,
			delayChildren: 0.5,
		},
	},
};

export default function AboutPage() {
	return (
		<>
			<div className="absolute top-0 left-0 pt-[45vh] p-4 grid grid-cols-[repeat(16,minmax(0,1fr))] grid-rows-8 gap-y-[20vh] gap-x-4 w-full space-x-1 overflow-hidden h-full">
				<div className="col-start-1 col-span-4"></div>
				<motion.div
					className="sticky col-start-6 col-span-6"
					variants={containerVariants}
					initial="initial"
					animate="animate">
					{Object.entries(clients).map(([client, data], index) => (
						<motion.div
							className="flex justify-start text-nowrap text-[0.8rem] tracking-wide font-semibold overflow-hidden"
							key={`client_${index}_text`}
							variants={itemVariants}>
							<motion.span
								initial="initial"
								animate="animate"
								exit="exit"
								className="pr-1"
								variants={animation.textRevealAnimation.slideIn}
								transition={animation.textRevealTransition.slideIn}>
								{data[0]}
							</motion.span>

							<motion.span
								layout="position"
								transition={{ delay: animation.scalingDuration }}
								layoutId={`client_name_${client.replace(" ", "_")}_text`}
								key={`client_name_${client.replace(" ", "_")}_text`}
								className="text-[0.8rem] tracking-wide uppercase font-semibold px-1">
								{client}
							</motion.span>

							<motion.span
								initial="initial"
								animate="animate"
								exit="exit"
								className="pr-1"
								variants={animation.textRevealAnimation.slideIn}
								transition={animation.textRevealTransition.slideIn}>
								{data[1]}
							</motion.span>
						</motion.div>
					))}
				</motion.div>
				<motion.div className="col-start-13"></motion.div>
			</div>
		</>
	);
}

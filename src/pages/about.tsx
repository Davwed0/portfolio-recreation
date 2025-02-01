import { motion, AnimatePresence } from "framer-motion";
import * as animation from "../components/animations";
import clients from "../clients.json";

export default function AboutPage() {
	return (
		<div className="absolute top-0 left-0 p-4 pt-[45vh] w-[calc(100%-2rem)] space-x-1 h-full flex flex-col scroll-pt-40">
			<motion.div
				className="fixed grid grid-cols-[repeat(16,minmax(0,1fr))] gap-x-4 z-50 w-[calc(100%-2rem)]"
				initial="initial"
				animate="animate"
				exit="exit">
				{clients.map((client) => (
					<motion.div className="flex flex-row col-start-6 col-span-2 text-nowrap text-[0.8rem] tracking-wide font-semibold ">
						<motion.span variants={animation.textRevealAnimation.slideIn}>
							{client.text[0]}
						</motion.span>
						<motion.div
							layout="position"
							layoutId={`layout_${client.id}_text`}
							key={`layout_${client.id}_text`}
							className="flex justify-between items-center text-[0.8rem] tracking-wide uppercase font-semibold px-1">
							{client.name}
						</motion.div>
						<motion.span variants={animation.textRevealAnimation.slideIn}>
							{client.text[1]}
						</motion.span>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

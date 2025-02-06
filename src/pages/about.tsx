import { motion } from "framer-motion";
import * as animation from "../components/animations";
import clients from "../clients.json";

export default function AboutPage() {
	return (
		<div className="absolute pt-[45vh]">
			<motion.div
				variants={animation.textRevealAnimation.slideInContainer}
				animate="visible"
				initial="hidden"
				exit="exit"
				className="fixed grid grid-cols-[repeat(16,minmax(0,1fr))] gap-x-4 w-[calc(100%-2rem)] z-50">
				{["Bio", "Selected clients", "Awwwards", "CSSDA", "FWA"].map(
					(text, index) => (
						<motion.div
							key={text}
							variants={animation.textRevealAnimation.slideIn}
							className={`relative -top-8 text-[0.8rem] text-[#9ca3af] tracking-wide uppercase font-semibold ${
								index === 0
									? "col-start-1 col-span-3 text-left"
									: index === 1
									? "col-start-6 col-span-6"
									: index === 2
									? "col-start-[14] col-span-1"
									: "col-span-1"
							}`}>
							{text}
						</motion.div>
					)
				)}
			</motion.div>
			<motion.div
				variants={animation.textRevealAnimation.slideInContainer}
				animate="visible"
				initial="hidden"
				exit="exit"
				className="fixed grid grid-cols-[repeat(16,minmax(0,1fr))] gap-x-4 w-[calc(100%-2rem)] z-50">
				{[
					"Creative developer focused on animations",
					"and user interactions, to create immersive",
					"online experiences. Based in Lyon (69 la",
					"trik), France.",
				].map((text, index) => (
					<motion.div className="overflow-clip col-span-3 col-start-1">
						<motion.div
							className={`text-[0.8rem] tracking-wide font-semibold`}
							variants={animation.textRevealAnimation.slideIn}
							style={{
								gridRowStart: index + 1,
							}}>
							{text}
						</motion.div>
					</motion.div>
				))}

				{clients.map((client, index) => (
					<>
						<motion.div
							className={`flex flex-row col-start-6 col-span-12 text-nowrap text-[0.8rem] tracking-wide font-semibold overflow-clip`}
							style={{
								gridRowStart: index + 1,
							}}>
							<motion.span variants={animation.textRevealAnimation.slideIn}>
								{client.text[0]}
							</motion.span>
							<motion.div
								layout="position"
								layoutId={`layout_${client.id}_text`}
								key={`layout_${client.id}_text`}
								className="sticky flex justify-between items-center text-[0.8rem] tracking-wide uppercase font-semibold px-1">
								{client.name}
							</motion.div>
							<motion.span variants={animation.textRevealAnimation.slideIn}>
								{client.text[1]}
							</motion.span>
						</motion.div>
						{client.awards.map((award, i) => (
							<motion.div
								className="text-[0.8rem] tracking-wide uppercase font-semibold"
								variants={animation.textRevealAnimation.slideIn}
								style={{
									gridRowStart: index + 1,
									gridColumnStart: 14 + i,
								}}>
								{award}
							</motion.div>
						))}
					</>
				))}
			</motion.div>
		</div>
	);
}

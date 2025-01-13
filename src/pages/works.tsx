import { motion, useScroll, useTransform } from "framer-motion";
import * as animation from "../components/animations";

const clients = [
	"Angus Emmerson",
	"Pebble",
	"Mooders",
	"Theud",
	"Storm",
	"Denise",
	"Firm",
	"ATCK",
];

// Array of possible aspect ratios
const aspectRatios = ["16/9", "9/16", "4/3", "3/4"];

export default function Works() {
	return (
		<>
			<div className="absolute top-0 left-0 pt-[45vh] p-4 grid grid-cols-[repeat(16,minmax(0,1fr))] grid-rows-8 gap-y-[20vh] gap-x-4 w-full space-x-1 overflow-hidden h-full">
				{/* Left side boxes */}
				<motion.div className="sticky col-start-1 col-span-5 flex flex-col gap-[20vh]">
					{clients.map((client, index) => (
						<motion.div
							className="w-full flex flex-row gap-4"
							key={`client_${index}`}>
							{[...Array(Math.floor(Math.random() * 2) + 2).keys()].map((i) => (
								<motion.div
									key={`${client}_${i}_showcase`}
									variants={animation.fadeIn}
									initial="initial"
									animate="animate"
									exit="exit"
									className={`bg-gray-200 w-full`}
									style={{
										aspectRatio: aspectRatios[Math.floor(Math.random() * 4)],
									}}
								/>
							))}
						</motion.div>
					))}
				</motion.div>

				{/* Center client names */}
				<motion.div className="sticky col-start-6 col-span-3">
					{clients.map((client, index) => (
						<motion.div
							variants={animation.fadeIn}
							initial="initial"
							animate="animate"
							exit="exit"
							key={`client_name_${index}`}
							className="text-[0.8rem] tracking-wide uppercase font-semibold">
							{client}
						</motion.div>
					))}
				</motion.div>

				{/* Right side boxes */}
				<motion.div className="sticky col-start-9 col-span-7"></motion.div>
			</div>
		</>
	);
}

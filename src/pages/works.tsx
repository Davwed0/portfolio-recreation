import { motion } from "framer-motion";
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

const aspectRatios = [9 / 16, 3 / 4];

export default function Works() {
	return (
		<>
			<div className="absolute top-0 left-0 pt-[45vh] p-4 grid grid-cols-[repeat(16,minmax(0,1fr))] grid-rows-8 gap-y-[20vh] gap-x-4 w-full space-x-1 overflow-hidden h-full">
				<motion.div className="sticky col-start-1 col-span-4 flex flex-col gap-[20vh]">
					{clients.map((client, index) => (
						<motion.div
							className="w-full flex flex-row gap-4"
							key={`client_${index}`}
							variants={animation.boxAnimation}
							initial="initial"
							animate="animate"
							exit="exit">
							{[...Array(Math.floor(Math.random() * 2) + 2).keys()].map((i) => (
								<motion.div
									key={`${client}_${i}_showcase`}
									variants={animation.boxAnimation}
									className={`w-full h-[20rem]`}>
									<div
										className="w-full bg-gray-200"
										style={{
											height: `${
												100 * aspectRatios[Math.floor(Math.random() * 2)]
											}%`,
										}}
									/>
								</motion.div>
							))}
						</motion.div>
					))}
				</motion.div>

				<motion.div className="sticky col-start-6 col-span-3 flex flex-col">
					{clients.map((client, index) => (
						<motion.span
							layout="position"
							layoutId={`client_name_${client.replace(" ", "_")}_text`}
							key={`client_name_${client.replace(" ", "_")}_text`}
							className="text-[0.8rem] tracking-wide uppercase font-semibold">
							{client}
						</motion.span>
					))}
				</motion.div>

				<motion.div className="sticky col-start-9 col-span-8 flex flex-col gap-[20vh]">
					{clients.map((client, index) => (
						<motion.div
							className="w-full flex flex-row gap-4"
							key={`client_${index}`}
							variants={animation.boxAnimation}
							initial="initial"
							animate="animate"
							exit="exit">
							{[...Array(Math.floor(Math.random() * 4) + 3).keys()].map((i) => (
								<motion.div
									key={`${client}_${i}_showcase`}
									variants={animation.boxAnimation}
									className={`w-full h-[20rem]`}>
									<div
										className="w-full bg-gray-200"
										style={{
											height: `${
												100 * aspectRatios[Math.floor(Math.random() * 2)]
											}%`,
										}}
									/>
								</motion.div>
							))}
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
}

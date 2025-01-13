import { motion } from "framer-motion";

export function AnimatedBoxes({ index }: { index: number }) {
	const transition = {
		ease: [0.76, 0, 0.24, 1],
		duration: 1.2,
		staggerChildren: 0.05,
	};

	const animation = {
		initial: {
			opacity: "100%",
			translateY: "200%",
			transition: transition,
		},
		animate: {
			opacity: "100%",
			translateY: "0%",
			transition: transition,
		},
		exit: {
			opacity: "0%",
			translateY: "0%",
			transition: {
				ease: "linear",
				duration: 0.3,
				staggerChildren: 0,
			},
		},
	};

	return (
		<>
			<motion.div className="flex flex-row order-1 col-span-5 gap-4">
				{[0, 1].map((i) => (
					<motion.div
						key={`client_card_${index}_${i}`}
						variants={animation}
						className={`bg-gray-200 w-full`}></motion.div>
				))}
			</motion.div>
			<motion.div className="flex flex-row order-3 col-span-9 gap-4">
				{[2, 3, 4, 5].map((i) => (
					<motion.div
						key={`client_card_${index}_${i}`}
						variants={animation}
						className={`bg-gray-200 w-full`}></motion.div>
				))}
			</motion.div>
		</>
	);
}

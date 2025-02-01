"use client";

import { motion } from "framer-motion";
import * as animation from "../components/animations";
import Lenis from "lenis";
import { useRef, useEffect } from "react";

import clients from "../clients.json";
const aspectRatios = [16 / 9, 1, 16 / 9, 3 / 4, 16 / 9, 1];

export default function Works() {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		window.scrollTo(0, 0);

		lenisRef.current = new Lenis({});

		function raf(time: number) {
			lenisRef.current?.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenisRef.current?.destroy();
		};
	}, []);

	const clientRefs = useRef<(HTMLDivElement | null)[]>([]);

	const handleScrollTo = (index: number) => {
		const rect = clientRefs.current[index];

		if (rect) {
			const rectTop = rect.getBoundingClientRect().top + window.scrollY;
			const windowHeight = window.innerHeight;
			const scrollPosition = rectTop - windowHeight / 2 + rect.offsetHeight / 4;

			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		}
	};

	return (
		<div className="absolute top-0 left-0 p-4 pt-[45vh] w-[calc(100%-2rem)] space-x-1 h-full flex flex-col scroll-pt-40 pb-[45vh]">
			<motion.div className="fixed grid grid-cols-[repeat(16,minmax(0,1fr))] gap-x-4 z-50 w-[calc(100%-2rem)]">
				<motion.div className="flex flex-col col-start-6 col-span-2">
					{clients.map((client) => (
						<motion.div
							layout="position"
							layoutId={`layout_${client.id}_text`}
							key={`layout_${client.id}_text`}
							className="flex justify-between items-center text-[0.8rem] tracking-wide uppercase font-semibold user-select-none select-none"
							onClick={() => {
								handleScrollTo(clients.indexOf(client));
							}}>
							{client.name}
							<motion.span className="ml-2">◄</motion.span>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			{clients.map((client, index) => (
				<motion.div
					id={client.id}
					key={`client_${index}`}
					className="grid gap-x-4 w-full grid-cols-[repeat(16,minmax(0,1fr))] relative pb-24 mb-24"
					variants={animation.boxAnimation}
					initial="initial"
					animate="animate"
					exit="exit">
					{aspectRatios.map((aspectRatio, i) => (
						<>
							<motion.div
								ref={(el: HTMLDivElement | null) =>
									(clientRefs.current[index] = el)
								}
								key={`${client}_left_${i}`}
								variants={animation.boxAnimation}
								className={`w-full aspect-square col-start-${
									i < 2 ? i * 2 + 1 : i * 2 + 5
								} col-span-2 relative`}>
								<div
									className="bg-gray-200 h-full"
									style={{
										height: `${100 / aspectRatio}%`,
									}}
								/>
							</motion.div>
							{i == client.rowIndex && (
								<motion.span
									className={`origin-top-left bottom-0 absolute text-5xl col-start-${
										i < 2 ? i * 2 + 1 : i * 2 + 5
									} font-semibold`}
									initial="initial"
									animate="animate"
									exit="exit"
									variants={animation.textRevealAnimation.slideIn}
									transition={animation.textRevealTransition.slideIn}>
									0{index + 1}
								</motion.span>
							)}
						</>
					))}
				</motion.div>
			))}
			<div className="grid gap-x-4 w-full grid-cols-[repeat(16,minmax(0,1fr))] relative pb-24 mb-24"></div>
		</div>
	);
}

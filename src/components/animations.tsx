export const fadeInTransition = {
	ease: "linear",
	duration: 0.3,
};

export const fadeIn = {
	initial: {
		opacity: 0,
		transition: fadeInTransition,
	},
	animate: {
		opacity: 1,
		transition: fadeInTransition,
	},
	exit: {
		opacity: 0,
		transition: fadeInTransition,
	},
};

export const boxTransition = {
	ease: [0.76, 0, 0.24, 1],
	duration: 1.2,
	staggerChildren: 0.05,
};

export const boxAnimation = {
	initial: {
		opacity: 1,
		translateY: "200%",
		transition: boxTransition,
	},
	animate: {
		opacity: 1,
		translateY: "0%",
		transition: boxTransition,
	},
	exit: {
		opacity: 0,
		translateY: "0%",
		transition: {
			ease: "linear",
			duration: 0.3,
			staggerChildren: 0,
		},
	},
};

export const textRevealTransition = {
	word: {
		ease: [0.76, 0, 0.24, 1],
		duration: 0.8,
		staggerChildren: 0.1,
	},
	character: {
		ease: [0.61, 1, 0.88, 1],
		duration: 0.4,
	},
	slideIn: {
		ease: [0.61, 1, 0.88, 1],
		duration: 0.6,
	},
};

export const textRevealAnimation = {
	word: {
		start: {
			translateY: "100%",
			transition: textRevealTransition.word,
		},
		end: {
			translateY: "0%",
			transition: textRevealTransition.word,
		},
	},
	character: {
		start: {
			translateY: "200%",
			transition: textRevealTransition.character,
		},
		end: {
			translateY: "0%",
			transition: textRevealTransition.character,
		},
	},
	slideIn: {
		initial: {
			translateY: "200%",
			opacity: 0,
			transition: textRevealTransition.slideIn,
		},
		animate: {
			translateY: ["200%", "200%", "0%"],
			opacity: [0, 0, 1],
			transition: textRevealTransition.slideIn,
		},
		exit: {
			translateY: "-200%",
			opacity: 0,
			transition: textRevealTransition.slideIn,
		},
	},
};

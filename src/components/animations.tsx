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
	staggerChildren: 0.1,
};

export const boxAnimation = {
	initial: {
		opacity: 1,
		translateY: "100vh",
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

export const scalingDuration = 0.6;

export const scalingTransition = {
	duration: scalingDuration,
	ease: [0.76, 0, 0.24, 1],
};

export const scalingAnimation = {
	goFat: {
		fontSize: "8.8rem",
		lineHeight: "7rem",
		"--color": "#111827",
		transition: scalingTransition,
	},
	goSmol: {
		fontSize: "1.3rem",
		lineHeight: "2rem",
		"--color": "#9ca3af",
		transition: scalingTransition,
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
		duration: 0.2,
		staggerChildren: 0.06,
	},
};

export const textRevealAnimation = {
	word: {
		initial: {
			translateY: "100%",
		},
		animate: {
			translateY: "0%",
		},
	},
	character: {
		initial: {
			translateY: "100%",
		},
		animate: {
			translateY: "0%",
		},
	},
	slideInContainer: {
		hidden: {
			y: "-100vy",
		},
		visible: {
			y: 0,
			transition: {
				when: "afterChildren",
				staggerChildren: 0.01,
				ease: [0.61, 1, 0.88, 1],
			},
		},
		exit: {
			y: "100vy",
			transition: {
				staggerChildren: 0.005,
				ease: [0.61, 1, 0.88, 1],
			},
		},
	},
	slideIn: {
		hidden: {
			y: -20,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
		},
		exit: {
			y: 20,
			opacity: 0,
		},
	},
};

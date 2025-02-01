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
		lineHeight: "6rem",
		"--color": "#111827",
		transition: scalingTransition,
	},
	goSmol: {
		fontSize: "1.3rem",
		lineHeight: "1rem",
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
	slideIn: {
		initial: {
			translateY: "200%",
			opacity: 0,
			transition: textRevealTransition.slideIn,
		},
		animate: {
			translateY: "0%",
			opacity: 1,
			transition: textRevealTransition.slideIn,
		},
		exit: {
			translateY: "-200%",
			opacity: 0,
			transition: { ...textRevealTransition.slideIn, delay: 0 },
		},
	},
};

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

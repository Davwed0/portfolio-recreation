import { AnimatedBoxes } from "@/components/AnimatedBox";
import clsx from "clsx";

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

export default function Works() {
	return (
		<div>
			<div className="fixed top-[40%] left-1/3 z-10 w-1/6">
				{clients.map((client, index) => (
					<div
						key={client.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}
						className="text-[0.8rem] tracking-wide uppercase font-semibold">
						{client}
					</div>
				))}
			</div>
			<div className="fixed top-[40%] left-0 h-screen w-full overflow-y-hidden px-4">
				{clients.map((client, index) => (
					<AnimatedBoxes key={client} index={index} />
				))}
			</div>
		</div>
	);
}

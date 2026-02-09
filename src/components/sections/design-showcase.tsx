import { cn } from "@/lib/utils";
import Marquee from "../magicui/marquee";
import Image from "next/image";

const projects = [
	{
		img: "carepulseadmin",
		url: "",
	},
	{
		img: "Allune",
		url: "https://allune.vercel.app",
	},
	{
		img: "carepulse",
		url: "",
	},
	{
		img: "clinicasonorite",
		url: "https://clinica-sonotire.vercel.app",
	},
	{
		img: "customizesuacamiseta",
		url: "https://criesuacamiseta.vercel.app",
	},
	{
		img: "mojito",
		url: "https://site-de-coqueteis.vercel.app",
	},
	{
		img: "powerprih",
		url: "https://powerprih.com",
	},
	{
		img: "sankoi",
		url: "https://sankoi.netlify.app",
	},
	{
		img: "whytec",
		url: "",
	},
	{
		img: "voecomabuzz",
		url: "https://voe-com-a-buzz33.vercel.app",
	},
];

const firstRow = projects.slice(0, projects.length / 2);
const secondRow = projects.slice(projects.length / 2);

export default function DesignShowcase() {
	return (
		<section id="about" className="container relative z-10 py-44 md:py-52">
			<h2 className="mx-auto mb-20 text-balance text-center text-[clamp(1.7rem,6vw,5rem)] font-medium leading-[1.1] tracking-[-0.07em]">
			Creating digital experiences <br /> that leave a lasting impact.
			</h2>
			<div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
				<Marquee
					// pauseOnHover
					className="[--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
				>
					{firstRow.map((project) => (
						<ReviewCard key={project.url} {...project} />
					))}
				</Marquee>
				<Marquee
					reverse
					// pauseOnHover
					className="[--duration:30s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
				>
					{secondRow.map((project) => (
						<ReviewCard key={project.url} {...project} />
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
			</div>
		</section>
	);
}

const ReviewCard = ({
	img,
	url,
	square = false,
}: {
	img: string;
	url: string;
	square?: boolean;
}) => {
	return (
		<div
			className={cn(
				square
					? "size-[200px] lg:size-[280px]"
					: "h-[200px] w-[282px] lg:h-[280px] lg:w-[394px]",
				"pointer relative overflow-hidden rounded-xl border bg-neutral-950 p-2 lg:p-4"
			)}
		>
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className="absolute inset-0 z-10"
			></a>
			<Image
				alt="Projects"
				src={`/img/projects/design/${img}.jpg`}
				className="h-full w-full rounded-lg object-cover opacity-85"
				width={square ? 200 : 282}
				height={280}
			/>
		</div>
	);
};

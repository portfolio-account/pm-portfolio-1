import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS}`;

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	// const { data, error } = useSWR(url, fetcher);
	const projects = [
		{
			index: 1,
			title: "HyperLite and Hyperpro Mapping Device",
			description: "Both are mapping devices that can collect data in the form of LiDAR data and SV data, providing centimeter-level accuracy for mapping purposes."
		},
		{
			index: 2,
			title: "Roadmentor Marketplace",
			description: "You can buy the latest LiDAR, video, and image data from San Francisco, with plans to add new cities soon. This service is owned by Hyperspec AI."
		},
		{
			index: 3,
			title: "Roadmentor AI and ML Tools",
			description: "Roadmentor Marketplace is useful for processing ROS 1 and ROS 2 data. It enables automatic creation of bounding box annotations, road markings, and model building. Additionally, it supports data segmentation and allows for exporting data for various other uses. This service is owned by Hyperspec AI."
		},
		{
			index: 4,
			title: "HD Maps for Autonomous Vehicles",
			description: "Civil Maps offers a unique and robust approach to real-time localization and navigation with our lightweight Fingerprint Base Map. I have delivered HD maps for various cities in Germany and the USA. This service is now owned by Luminar, which acquired Civil Maps."
		},
		{
			index: 5,
			title: "Robot Delivery",
			description: "Worked on developing robot delivery maps, enhancing navigation and efficiency for autonomous delivery systems. This service is now owned by Luminar, which acquired Civil Maps."
		},
		{
			index: 6,
			title: "2D Maps for Uber",
			description: "As a team manager, I handled the creation and quality control of 2D maps for all cities in the USA, successfully delivering maps for nearly every city across the country."
		},
		{
			index: 7,
			title: "India Maps and POIs",
			description: "Managed the maps team responsible for creating maps and Points of Interest (POIs) for India, overseeing a team of 80 professionals."
		}
	];

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>

					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Go to projects page"
						ref={btnRef}
						className="btn"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<button aria-label="See more projects">More projects</button>
					</Link>
				</div>
			</section>
		</LazyMotion>
	);
}

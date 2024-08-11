"use client";

import { Suspense, useState } from "react";
// import useSWR from "swr";
import { ErrorBoundary } from "react-error-boundary";
import { HeadingDivider, Loader } from "components";
import { Filter } from "./components/Filter";
// import { fetcher } from "utils/fetcher";
import Error from "../error";
import { Projects } from "./components/Projects";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_ALL_PROJECTS}`;

export default function Page() {
	const [category, setCategory] = useState(undefined);
	const filterUrl = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_PROJECTS}${category}${process.env.NEXT_PUBLIC_SANITY_PROJECT_BY_CATEGORY}`;

	const fetchUrl = category ? filterUrl : url;
	// const { data, error } = useSWR(fetchUrl, fetcher);
	const data = [
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
	
	const filteredProjects = data;

	const onClick = (catName) => setCategory(catName);

	return (
		<div className="container-md">
			<section id="projects" className="section">
				<HeadingDivider title="Relevant projects" />

				<Filter onClick={onClick} />

				<Suspense
					fallback={
						<div className="flex-center">
							<Loader />
						</div>
					}
				>
					<ErrorBoundary FallbackComponent={Error}>
						{filteredProjects === undefined ? (
							// Loading state
							<div className="flex-center">
								<Loader />
							</div>
						) : filteredProjects.length === 0 ? (
							// Empty state
							<div className="flex-center">
								<h3 className="text-2xl">No projects found in {category} category</h3>
							</div>
						) : (
							<Projects projects={filteredProjects} />
						)}
					</ErrorBoundary>
				</Suspense>
			</section>
		</div>
	);
}

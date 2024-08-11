"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
						Saket Sonekar is a seasoned Product Manager with over 11 years of experience in product management, operations, and digital transformation. He has a strong background in launching innovative AI and vision products, with notable expertise in autonomous vehicle mapping and high-definition maps. At Civil Maps, Saket led the development and deployment of HD maps at scale and was instrumental in creating essential tools to enhance product functionality. His role involved managing the complete product lifecycle, from development to launch, and driving impactful results through cross-functional collaboration and data-driven strategies.
As the first hire for Hyperspec AI in India, Saket established and scaled the operations team, significantly contributing to the company&apos;s growth and efficiency. His accomplishments include launching a hardware product and a software product, showcasing his ability to handle complex projects. Saket also holds a product management certification from ISB Hyderabad, further solidifying his expertise in the field. Passionate about leveraging technology to address complex business challenges, Saket is dedicated to driving innovation and achieving excellence in the digital landscape.

						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}

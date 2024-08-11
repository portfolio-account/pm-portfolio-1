const author = "Saker Sonekar";
const description =
	`Saket Sonekar is a seasoned Product Manager with over 11 years of experience in product management, operations, and digital transformation. He has a strong background in launching innovative AI and vision products, with notable expertise in autonomous vehicle mapping and high-definition maps. At Civil Maps, Saket led the development and deployment of HD maps at scale and was instrumental in creating essential tools to enhance product functionality. His role involved managing the complete product lifecycle, from development to launch, and driving impactful results through cross-functional collaboration and data-driven strategies.
	As the first hire for Hyperspec AI in India, Saket established and scaled the operations team, significantly contributing to the company's growth and efficiency. His accomplishments include launching a hardware product and a software product, showcasing his ability to handle complex projects. Saket also holds a product management certification from ISB Hyderabad, further solidifying his expertise in the field. Passionate about leveraging technology to address complex business challenges, Saket is dedicated to driving innovation and achieving excellence in the digital landscape.
	`;
const url = "https://saketsonekar.com/";
export const AppMetadata = {
	metadataBase: new URL("https://saketsonekar.com/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Saker Sonekar",
		"Saker Sonekar - product manager",
		"Product manager",
		"operations manager"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
		],
		locale: "en-US",
		type: "website"
	}
};

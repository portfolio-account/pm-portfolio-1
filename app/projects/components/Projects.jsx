import { ProjectItem } from "../../sections";

export function Projects({ projects }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
			{projects
				?.sort((a, b) => a.index - b.index)
				?.map((project, index) => (
					<ProjectItem key={project.index} project={project} index={index} />
				))}
		</div>
	);
}

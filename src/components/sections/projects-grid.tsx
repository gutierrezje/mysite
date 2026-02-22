"use client"

import { Section } from "@/components/layout/section"
import { ProjectCard } from "@/components/shared/project-card"
import { WipCard } from "@/components/shared/wip-card"
import { useTheme } from "@/hooks/use-theme"
import type { Project } from "@/lib/constants"

export function ProjectsGrid({ projects }: { projects: Project[] }) {
	const { theme } = useTheme()

	const wipProjects = projects.filter((p) => p.inProgress)
	const regularProjects = projects.filter((p) => !p.inProgress)

	const gridClass =
		theme === "phantom"
			? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
			: theme === "moss"
				? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [&>*:nth-child(1)]:sm:col-span-2 [&>*:nth-child(4)]:lg:col-span-2"
				: theme === "grove"
					? "columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid"
					: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"

	return (
		<Section id="projects">
			<div className="mb-10">
				<h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight md:text-4xl">
					Projects
				</h2>
				<p className="mt-2 text-muted-foreground">
					A selection of things I&apos;ve built and shipped.
				</p>
			</div>

			{wipProjects.length > 0 && (
				<div className="mb-10">
					<h3 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-muted-foreground">
						Currently Working On
					</h3>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{wipProjects.map((project) => (
							<WipCard key={project.title} project={project} />
						))}
					</div>
				</div>
			)}

			<div className={gridClass}>
				{regularProjects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</Section>
	)
}

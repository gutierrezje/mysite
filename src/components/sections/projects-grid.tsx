"use client"

import { Section } from "@/components/layout/section"
import { ProjectCard } from "@/components/shared/project-card"
import { useTheme } from "@/hooks/use-theme"
import { PROJECTS } from "@/lib/constants"

export function ProjectsGrid() {
	const { theme } = useTheme()

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
			<div className={gridClass}>
				{PROJECTS.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</Section>
	)
}

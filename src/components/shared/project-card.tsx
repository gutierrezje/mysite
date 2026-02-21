"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/lib/constants"

export function ProjectCard({ project }: { project: Project }) {
	return (
		<a href={project.href} className="group block">
			<Card className="h-full transition-all canopy:hover:-translate-y-1 canopy:hover:shadow-lg moss:hover:shadow-[6px_6px_0_oklch(0.78_0.22_145)] moss:border-2 grove:hover:rotate-[0.5deg] grove:hover:scale-[1.02] grove:hover:shadow-lg phantom:border-[var(--neon-dim)] phantom:hover:border-[var(--neon)] phantom:hover:shadow-[0_0_20px_var(--neon-dim)]">
				<CardHeader>
					<CardTitle className="font-[family-name:var(--font-heading)] text-lg group-hover:text-primary transition-colors">
						{project.title}
					</CardTitle>
					<CardDescription>{project.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-1.5">
						{project.tags.map((tag) => (
							<Badge key={tag} variant="outline" className="text-xs font-mono">
								{tag}
							</Badge>
						))}
					</div>
				</CardContent>
			</Card>
		</a>
	)
}

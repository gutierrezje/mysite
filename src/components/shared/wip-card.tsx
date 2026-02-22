"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/lib/constants"

export function WipCard({ project }: { project: Project }) {
	return (
		<a href={project.href} className="group block">
			<Card className="relative h-full border-dashed transition-all canopy:hover:-translate-y-1 canopy:hover:shadow-lg moss:hover:shadow-[6px_6px_0_oklch(0.78_0.22_145)] moss:border-2 moss:border-dashed grove:hover:rotate-[0.5deg] grove:hover:scale-[1.02] grove:hover:shadow-lg phantom:border-[var(--neon-dim)] phantom:hover:border-[var(--neon)] phantom:hover:shadow-[0_0_20px_var(--neon-dim)]">
				<div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground">
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
					</span>
					WIP
				</div>
				<CardHeader>
					<CardTitle className="pr-14 font-[family-name:var(--font-heading)] text-lg group-hover:text-primary transition-colors">
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

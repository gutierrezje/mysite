import { Section } from "@/components/layout/section"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const PLACEHOLDER_POSTS = [
	{
		title: "Building a Distributed KV Store with Raft",
		date: "Coming soon",
		description: "How I implemented consensus from scratch in Go.",
	},
	{
		title: "WebGL Shaders for Terrain Generation",
		date: "Coming soon",
		description: "Noise functions, LOD, and real-time rendering techniques.",
	},
	{
		title: "Why I Switched to Biome",
		date: "Coming soon",
		description: "Replacing ESLint + Prettier with a single fast tool.",
	},
]

export function BlogPreview() {
	return (
		<Section id="blog">
			<div className="mb-10">
				<h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight md:text-4xl">
					Blog
				</h2>
				<p className="mt-2 text-muted-foreground">Thoughts on engineering, tools, and craft.</p>
			</div>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{PLACEHOLDER_POSTS.map((post) => (
					<Card key={post.title} className="opacity-60">
						<CardHeader>
							<CardDescription className="text-xs">{post.date}</CardDescription>
							<CardTitle className="font-[family-name:var(--font-heading)] text-base">
								{post.title}
							</CardTitle>
							<CardDescription>{post.description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</Section>
	)
}

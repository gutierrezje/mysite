export type Project = {
	title: string
	description: string
	tags: string[]
	href: string
	featured?: boolean
}

export type Social = {
	label: string
	href: string
	icon: "github" | "linkedin" | "twitter"
}

export const PROJECTS: Project[] = [
	{
		title: "3D Terrain Generator",
		description:
			"Real-time procedural terrain generation using WebGL shaders and Perlin noise. Interactive camera controls and dynamic LOD system.",
		tags: ["Three.js", "WebGL", "TypeScript"],
		href: "#",
		featured: true,
	},
	{
		title: "LeetCode Tracker",
		description:
			"Personal dashboard for tracking LeetCode progress with heatmap visualization and spaced-repetition review scheduling.",
		tags: ["Next.js", "PostgreSQL", "Chart.js"],
		href: "#",
		featured: true,
	},
	{
		title: "DevLog CLI",
		description:
			"Command-line tool for maintaining a developer journal. Markdown-based with Git integration and automatic tagging.",
		tags: ["Rust", "CLI", "Markdown"],
		href: "#",
	},
	{
		title: "Neural Style Transfer",
		description:
			"Web app that applies artistic neural style transfer to uploaded images using a pre-trained TensorFlow model.",
		tags: ["Python", "TensorFlow", "React"],
		href: "#",
	},
	{
		title: "Distributed KV Store",
		description:
			"Fault-tolerant distributed key-value store implementing Raft consensus. Benchmarked at 50k ops/sec.",
		tags: ["Go", "gRPC", "Raft"],
		href: "#",
		featured: true,
	},
	{
		title: "Portfolio Site",
		description:
			"This site — built with Next.js 15, Tailwind v4, and three switchable design themes. You're looking at it.",
		tags: ["Next.js", "Tailwind", "TypeScript"],
		href: "#",
	},
]

export const SKILLS: string[] = [
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Go",
	"Rust",
	"Python",
	"PostgreSQL",
	"Three.js",
	"WebGL",
	"Docker",
	"AWS",
	"Git",
	"Linux",
	"Tailwind CSS",
	"GraphQL",
]

export const SOCIALS: Social[] = [
	{ label: "GitHub", href: "https://github.com/jesus", icon: "github" },
	{ label: "LinkedIn", href: "https://linkedin.com/in/jesus", icon: "linkedin" },
	{ label: "Twitter", href: "https://twitter.com/jesus", icon: "twitter" },
]

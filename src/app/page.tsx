import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { PageContent } from "@/components/layout/page-content"
import { ActivityHeatmap } from "@/components/sections/activity-heatmap"
import { BlogPreview } from "@/components/sections/blog-preview"
import { Hero } from "@/components/sections/hero"
import { ProjectsGrid } from "@/components/sections/projects-grid"

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<PageContent>
					<ProjectsGrid />
					<BlogPreview />
					<ActivityHeatmap />
				</PageContent>
			</main>
			<Footer />
		</>
	)
}

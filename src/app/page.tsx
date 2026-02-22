import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { PageContent } from "@/components/layout/page-content"
import { ActivityHeatmap } from "@/components/sections/activity-heatmap"
import { BlogPreview } from "@/components/sections/blog-preview"
import { Hero } from "@/components/sections/hero"
import { ProjectsGrid } from "@/components/sections/projects-grid"
import { fetchActivity } from "@/lib/activity"
import { getPosts } from "@/lib/blog"
import { GITHUB_USERNAME, LEETCODE_USERNAME } from "@/lib/constants"
import { fetchProjects } from "@/lib/github"

export default async function Home() {
	const [projects, posts, activity] = await Promise.all([
		fetchProjects(),
		Promise.resolve(getPosts()),
		fetchActivity(GITHUB_USERNAME, LEETCODE_USERNAME),
	])

	return (
		<>
			<Header />
			<main>
				<Hero />
				<PageContent>
					<ProjectsGrid projects={projects} />
					<BlogPreview posts={posts} />
					<ActivityHeatmap activity={activity} />
				</PageContent>
			</main>
			<Footer />
		</>
	)
}

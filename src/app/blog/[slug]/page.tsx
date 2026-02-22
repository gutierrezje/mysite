import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Badge } from "@/components/ui/badge"
import { getPost, getPosts } from "@/lib/blog"

export async function generateStaticParams() {
	return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const post = getPost(slug)
	if (!post) return {}
	return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const post = getPost(slug)

	if (!post) notFound()

	return (
		<main className="mx-auto max-w-2xl px-4 py-16">
			<div className="mb-8">
				<p className="mb-2 text-xs font-mono text-muted-foreground">{post.date}</p>
				<h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight md:text-4xl">
					{post.title}
				</h1>
				{post.description && (
					<p className="mt-3 text-lg text-muted-foreground">{post.description}</p>
				)}
				{post.tags.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-1.5">
						{post.tags.map((tag) => (
							<Badge key={tag} variant="outline" className="text-xs font-mono">
								{tag}
							</Badge>
						))}
					</div>
				)}
			</div>

			<article className="prose prose-neutral dark:prose-invert max-w-none">
				<MDXRemote source={post.content} />
			</article>
		</main>
	)
}

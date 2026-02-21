import { SocialLinks } from "@/components/shared/social-links"

export function Footer() {
	return (
		<footer className="border-t border-border/50 bg-background">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
				<p className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} Jesus. Built with Next.js &amp; Tailwind.
				</p>
				<SocialLinks />
			</div>
		</footer>
	)
}

import { SocialLinks } from "@/components/shared/social-links"

const NAV_ITEMS = [
	{ label: "Projects", href: "#projects" },
	{ label: "Blog", href: "#blog" },
	{ label: "Activity", href: "#activity" },
]

export function Header() {
	return (
		<header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md phantom:bg-[oklch(0.05_0.01_150/0.85)] phantom:border-[var(--neon-dim)] phantom:shadow-[0_1px_12px_var(--neon-dim)]">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
				<a
					href="/"
					className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground"
				>
					Jesus
				</a>
				<nav className="flex items-center gap-6">
					{NAV_ITEMS.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							{item.label}
						</a>
					))}
					<SocialLinks className="ml-2 hidden sm:flex" />
				</nav>
			</div>
		</header>
	)
}

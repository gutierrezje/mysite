"use client"

import { useTheme } from "@/hooks/use-theme"
import { THEMES, type Theme } from "./theme-provider"

const labels: Record<Theme, string> = {
	canopy: "Canopy",
	moss: "Moss",
	grove: "Grove",
	phantom: "Phantom",
}

const icons: Record<Theme, string> = {
	canopy: "🌿",
	moss: "🪨",
	grove: "🌳",
	phantom: "💀",
}

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()

	return (
		<div className="fixed bottom-6 right-6 z-50 flex items-center gap-1 rounded-full border border-border bg-card/90 p-1 shadow-lg backdrop-blur-md">
			{THEMES.map((t) => (
				<button
					type="button"
					key={t}
					onClick={() => setTheme(t)}
					className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
						theme === t
							? "bg-primary text-primary-foreground shadow-sm"
							: "text-muted-foreground hover:text-foreground"
					}`}
				>
					<span className="text-sm" aria-hidden="true">
						{icons[t]}
					</span>
					{labels[t]}
				</button>
			))}
		</div>
	)
}

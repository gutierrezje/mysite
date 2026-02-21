"use client"

import type { ReactNode } from "react"
import { useTheme } from "@/hooks/use-theme"

/**
 * Wraps page content below the hero.
 * In Phantom theme, adds a solid background so content
 * scrolls over the hero composition cleanly.
 */
export function PageContent({ children }: { children: ReactNode }) {
	const { theme } = useTheme()

	if (theme === "phantom") {
		return <div className="relative z-10 bg-background">{children}</div>
	}

	return <>{children}</>
}

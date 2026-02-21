"use client"

import { createContext, useEffect } from "react"

export type Theme = "phantom"

export const ThemeContext = createContext<{ theme: Theme }>({ theme: "phantom" })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", "phantom")
	}, [])

	return <ThemeContext.Provider value={{ theme: "phantom" }}>{children}</ThemeContext.Provider>
}

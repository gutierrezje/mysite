import type { Metadata } from "next"
import { DM_Sans, Fraunces, Space_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css"

const fraunces = Fraunces({
	variable: "--font-fraunces",
	subsets: ["latin"],
	display: "swap",
})

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	display: "swap",
})

const spaceMono = Space_Mono({
	variable: "--font-space-mono",
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "Jesus — Developer Portfolio",
	description: "Software engineer, builder, and creative developer.",
}


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" data-theme="phantom" suppressHydrationWarning>
			<body className={`${fraunces.variable} ${dmSans.variable} ${spaceMono.variable} antialiased`}>
				<ThemeProvider>
					<TooltipProvider>
						{children}
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}

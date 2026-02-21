import type { ReactNode } from "react"

export function Section({
	id,
	children,
	className,
}: {
	id?: string
	children: ReactNode
	className?: string
}) {
	return (
		<section id={id} className={`mx-auto max-w-6xl px-6 py-20 ${className ?? ""}`}>
			{children}
		</section>
	)
}

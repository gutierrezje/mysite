"use client"

/**
 * Synthwave banded sun — a semicircle with horizontal stripe cutouts.
 * Positioned behind the skull at the horizon line.
 */
export function NeonSun({ className }: { className?: string }) {
	const r = 120
	const cx = 150
	const cy = 148
	// Horizontal bands — gap positions (y values within the circle)
	const bands = [70, 90, 108, 122, 134, 143]

	return (
		<svg
			viewBox="0 0 300 160"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden="true"
		>
			<defs>
				{/* Clip to top half only (sun rising from horizon) */}
				<clipPath id="sun-half">
					<rect x="0" y="0" width="300" height="148" />
				</clipPath>
				{/* Horizontal stripe mask — bands cut out of the circle */}
				<mask id="sun-bands">
					<rect width="300" height="160" fill="white" />
					{bands.map((y) => (
						<rect key={y} x="0" y={y} width="300" height="5" fill="black" />
					))}
				</mask>
				{/* Glow filter */}
				<filter id="sun-glow" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
					<feMerge>
						<feMergeNode in="blur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
			<g clipPath="url(#sun-half)">
				{/* Outer glow */}
				<circle
					cx={cx}
					cy={cy}
					r={r + 20}
					fill="var(--neon)"
					opacity="0.06"
					filter="url(#sun-glow)"
				/>
				{/* Main sun disc with band cutouts */}
				<circle cx={cx} cy={cy} r={r} fill="var(--neon)" opacity="0.15" mask="url(#sun-bands)" />
				{/* Brighter inner core */}
				<circle
					cx={cx}
					cy={cy}
					r={r * 0.7}
					fill="var(--neon)"
					opacity="0.08"
					mask="url(#sun-bands)"
				/>
			</g>
		</svg>
	)
}

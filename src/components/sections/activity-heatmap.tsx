"use client"

import { Section } from "@/components/layout/section"

const WEEKS = 20
const DAYS = 7

// Generate deterministic placeholder data
function generateHeatmapData(): number[][] {
	const data: number[][] = []
	for (let w = 0; w < WEEKS; w++) {
		const week: number[] = []
		for (let d = 0; d < DAYS; d++) {
			// Simple pseudo-random based on position
			const seed = (w * 7 + d * 13 + 42) % 17
			week.push(seed < 4 ? 0 : seed < 8 ? 1 : seed < 12 ? 2 : seed < 15 ? 3 : 4)
		}
		data.push(week)
	}
	return data
}

const heatmapData = generateHeatmapData()

const INTENSITY_CLASSES = [
	"bg-muted",
	"bg-primary/20",
	"bg-primary/40",
	"bg-primary/65",
	"bg-primary",
]

export function ActivityHeatmap() {
	return (
		<Section id="activity">
			<div className="mb-10">
				<h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight md:text-4xl">
					Activity
				</h2>
				<p className="mt-2 text-muted-foreground">
					Contribution heatmap — synced from GitHub (placeholder).
				</p>
			</div>
			<div className="overflow-x-auto rounded-lg border border-border bg-surface p-4">
				<div className="flex gap-1">
					{heatmapData.map((week, wi) => (
						<div key={`w-${wi}`} className="flex flex-col gap-1">
							{week.map((level, di) => (
								<div
									key={`d-${wi}-${di}`}
									className={`size-3 rounded-sm ${INTENSITY_CLASSES[level]} transition-colors`}
									title={`Week ${wi + 1}, Day ${di + 1}: Level ${level}`}
								/>
							))}
						</div>
					))}
				</div>
				<div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
					<span>Less</span>
					{INTENSITY_CLASSES.map((cls, i) => (
						<div key={`legend-${i}`} className={`size-3 rounded-sm ${cls}`} />
					))}
					<span>More</span>
				</div>
			</div>
		</Section>
	)
}

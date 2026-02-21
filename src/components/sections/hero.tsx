"use client"

import { NeonSun } from "@/components/shared/neon-sun"
import { SkillBadge } from "@/components/shared/skill-badge"
import { WireframeSkull } from "@/components/shared/wireframe-skull"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { SKILLS } from "@/lib/constants"

export function Hero() {
	return <HeroPhantom />
}

function HeroPhantom() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden pb-16 md:pb-24">
			{/* ── Layer 0: Starfield ── */}
			<div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
				<PhantomStarfield />
			</div>

			{/* ── Layer 1: Banded sun — behind skull, at horizon ── */}
			<div className="pointer-events-none absolute left-1/2 top-[11%] z-[1] w-[500px] -translate-x-1/2 md:top-[7%] md:w-[700px] lg:w-[800px]">
				<NeonSun />
			</div>

			{/* ── Layer 2: Wireframe skull ── */}
			<div
				className="pointer-events-none absolute left-1/2 top-[5%] z-[2] w-[260px] -translate-x-1/2 md:top-[2%] md:w-[360px] lg:w-[420px]"
				style={{ animation: "phantom-flicker 4s ease-in-out infinite" }}
			>
				<WireframeSkull />
			</div>

			{/* ── Layer 3: Horizon line ── */}
			<div
				className="pointer-events-none absolute left-0 right-0 top-[52%] z-[3] h-px md:top-[48%]"
				style={{
					background:
						"linear-gradient(90deg, transparent, var(--neon) 15%, var(--neon) 85%, transparent)",
					boxShadow: "0 0 20px 4px var(--neon-glow), 0 0 60px 10px var(--neon-dim)",
				}}
			/>

			{/* ── Layer 4: Animated perspective grid (below horizon) ── */}
			<div className="pointer-events-none absolute inset-x-0 top-[52%] bottom-0 z-[2] overflow-hidden md:top-[48%]">
				<div
					className="absolute inset-x-[-50%] top-0 bottom-[-20%]"
					style={{
						backgroundImage: "linear-gradient(to bottom, var(--neon-dim) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
						transform: "perspective(420px) rotateX(58deg)",
						transformOrigin: "top center",
						animation: "phantom-grid-scroll 3s linear infinite",
					}}
				/>
				<div
					className="absolute inset-x-[-50%] top-0 bottom-[-20%]"
					style={{
						backgroundImage: "linear-gradient(to right, var(--neon) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
						transform: "perspective(420px) rotateX(58deg)",
						transformOrigin: "top center",
						animation: "phantom-grid-scroll 3s linear infinite",
						maskImage:
							"linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.92) 18%, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 0.72) 78%, transparent 100%)",
						WebkitMaskImage:
							"linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.92) 18%, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 0.72) 78%, transparent 100%)",
					}}
				/>
			</div>

			{/* ── Layer 5: Scanline overlay ── */}
			<div
				className="pointer-events-none absolute inset-0 z-[4] opacity-[0.035]"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, transparent, transparent 2px, var(--neon) 2px, var(--neon) 4px)",
				}}
			/>

			{/* ── Layer 6: Bottom fade ── */}
			<div
				className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[35%]"
				style={{
					background: "linear-gradient(to top, var(--background) 5%, transparent)",
				}}
			/>

			{/* ── Layer 7: Content ── */}
			<div className="relative z-10 px-6 text-center">
				<h1
					className="font-[family-name:var(--font-heading)] text-5xl font-bold uppercase leading-none tracking-[0.15em] md:text-7xl lg:text-8xl"
					style={{
						color: "var(--neon)",
						textShadow:
							"0 0 10px var(--neon-glow), 0 0 40px var(--neon-dim), 0 0 80px var(--neon-dim)",
						animation: "phantom-pulse 3s ease-in-out infinite",
					}}
				>
					Jesus
				</h1>
				<p
					className="mt-3 font-mono text-xs uppercase tracking-[0.5em] md:text-sm"
					style={{ color: "var(--neon-glow)" }}
				>
					Software Engineer
				</p>
				<p className="mx-auto mt-5 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
					Building in the void between systems programming, creative code, and the bleeding edge of
					the web.
				</p>
				<div className="mt-6 flex justify-center gap-3">
					<Button
						size="lg"
						className="border border-[var(--neon)] bg-transparent font-mono uppercase tracking-widest text-[color:var(--neon)] shadow-[0_0_12px_var(--neon-glow)] hover:bg-[var(--neon)] hover:text-[var(--background)] hover:shadow-[0_0_24px_var(--neon-glow)]"
						asChild
					>
						<a href="#projects">Projects</a>
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="border-[var(--neon-dim)] font-mono uppercase tracking-widest text-muted-foreground hover:border-[var(--neon)] hover:text-[color:var(--neon)]"
						asChild
					>
						<a href="#blog">Blog</a>
					</Button>
				</div>
			</div>
		</section>
	)
}

/** Scattered dots simulating a starfield behind the composition */
function PhantomStarfield() {
	// Deterministic pseudo-random spread to avoid visible linear bands.
	const hash = (seed: number) => {
		const v = Math.sin(seed * 127.1 + 311.7) * 43758.5453123
		return v - Math.floor(v)
	}

	const stars = Array.from({ length: 68 }, (_, i) => {
		const id = i + 1
		const x = hash(id * 1.73)
		const y = hash(id * 9.13)
		const sizeNoise = hash(id * 21.37)
		const alphaNoise = hash(id * 41.93)
		const delayNoise = hash(id * 77.29)

		return {
			x: (x * 100).toFixed(1),
			// Keep stars above horizon (horizon is at ~48-52% depending on viewport)
			y: (2 + y ** 1.35 * 42).toFixed(1),
			size: sizeNoise > 0.88 ? 3 : sizeNoise > 0.55 ? 2 : 1,
			opacity: 0.12 + alphaNoise * 0.45,
			delay: delayNoise * 4,
		}
	})

	return (
		<>
			{stars.map((s, i) => (
				<div
					key={`star-${i}-${s.x}-${s.y}`}
					className="absolute rounded-full"
					style={{
						left: `${s.x}%`,
						top: `${s.y}%`,
						width: s.size,
						height: s.size,
						background: "var(--neon)",
						opacity: s.opacity,
						animation: `phantom-pulse ${2 + s.delay}s ease-in-out infinite`,
						animationDelay: `${s.delay}s`,
					}}
				/>
			))}
		</>
	)
}

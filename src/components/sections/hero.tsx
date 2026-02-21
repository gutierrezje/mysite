"use client"

import { NeonSun } from "@/components/shared/neon-sun"
import { SkullR3F } from "@/components/shared/skull-r3f"
import { Button } from "@/components/ui/button"

export function Hero() {
	return <HeroPhantom />
}

function HeroPhantom() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden pb-16 md:pb-24">
			{/* ── Layer 0: Banded sun — anchored to horizon ── */}
			<div className="pointer-events-none absolute bottom-[48%] left-1/2 z-[0] w-[500px] -translate-x-1/2 md:bottom-[52%] md:w-[700px] lg:w-[800px]">
				<NeonSun />
			</div>

			{/* ── Layer 1: Mountain silhouettes ── */}
			<div className="pointer-events-none absolute inset-x-0 top-[28%] z-[1] h-[24%] md:top-[24%] md:h-[24%]">
				<PhantomMountains />
			</div>

			{/* ── Layer 2: 3D canvas (skull + starfield) — in front of mountains, behind text ── */}
			<div
				className="absolute inset-0 z-[2]"
				style={{ animation: "phantom-flicker 4s ease-in-out infinite" }}
			>
				<SkullR3F className="size-full" />
			</div>

			{/* ── Layer 3: Horizon line ── */}
			<div
				className="pointer-events-none absolute left-0 right-0 top-[52%] z-[3] h-px md:top-[48%]"
				style={{
					background:
						"linear-gradient(90deg, transparent, var(--foreground) 15%, var(--foreground) 85%, transparent)",
					opacity: 0,
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


function PhantomMountains() {
	return (
		<svg
			viewBox="0 0 1200 500"
			preserveAspectRatio="none"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="size-full"
			aria-hidden="true"
		>
			<defs>
				{/* Glow filter for back-lit mountains */}
				<filter id="mountain-glow" x="-20%" y="-20%" width="140%" height="140%">
					<feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
					<feMerge>
						<feMergeNode in="blur" />
						<feMergeNode in="blur" />
					</feMerge>
				</filter>
			</defs>

			{/* ── Left range — with back-lit glow ── */}
			<path
				d="M0 280 L40 260 L80 220 L110 190 L140 160 L170 180 L200 150 L230 170 L260 200 L300 240 L340 280 L400 340 L480 420 L540 500"
				stroke="var(--neon)"
				strokeWidth="3"
				opacity="0.3"
				fill="none"
				filter="url(#mountain-glow)"
			/>
			<path
				d="M0 500 L0 280 L40 260 L80 220 L110 190 L140 160 L170 180 L200 150 L230 170 L260 200 L300 240 L340 280 L400 340 L480 420 L540 500 Z"
				fill="var(--background)"
			/>

			{/* ── Middle-left range — with back-lit glow ── */}
			<path
				d="M340 500 L370 400 L400 340 L430 280 L460 300 L490 260 L510 290 L530 320 L560 370 L600 430 L640 500"
				stroke="var(--neon)"
				strokeWidth="3"
				opacity="0.3"
				fill="none"
				filter="url(#mountain-glow)"
			/>
			<path
				d="M340 500 L370 400 L400 340 L430 280 L460 300 L490 260 L510 290 L530 320 L560 370 L600 430 L640 500 Z"
				fill="var(--background)"
			/>

			{/* ── Middle-right range — with back-lit glow ── */}
			<path
				d="M560 500 L600 430 L640 370 L670 320 L690 290 L710 260 L740 300 L770 280 L800 340 L830 400 L860 500"
				stroke="var(--neon)"
				strokeWidth="3"
				opacity="0.3"
				fill="none"
				filter="url(#mountain-glow)"
			/>
			<path
				d="M560 500 L600 430 L640 370 L670 320 L690 290 L710 260 L740 300 L770 280 L800 340 L830 400 L860 500 Z"
				fill="var(--background)"
			/>

			{/* ── Right range — with back-lit glow ── */}
			<path
				d="M660 500 L720 420 L800 340 L860 280 L900 240 L940 200 L970 170 L1000 150 L1030 180 L1060 160 L1090 190 L1120 220 L1160 260 L1200 280"
				stroke="var(--neon)"
				strokeWidth="3"
				opacity="0.3"
				fill="none"
				filter="url(#mountain-glow)"
			/>
			<path
				d="M660 500 L720 420 L800 340 L860 280 L900 240 L940 200 L970 170 L1000 150 L1030 180 L1060 160 L1090 190 L1120 220 L1160 260 L1200 280 L1200 500 Z"
				fill="var(--background)"
			/>
		</svg>
	)
}

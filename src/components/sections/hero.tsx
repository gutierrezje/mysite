export function Hero() {
	return (
		<section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
			{/* ── Content ── */}
			<div className="relative z-10 max-w-2xl">
				<h1 className="font-display text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
					<span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
						Jesus Gutierrez
					</span>
				</h1>

				<p className="mx-auto mt-4 max-w-md font-mono text-sm tracking-[0.25em] text-zinc-400 uppercase">
					Software Engineer
				</p>

				<p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-zinc-400">
					I'm a software engineer with a background in computer science and mathematics. I work
					across developer tools, backend systems, and web applications. I tinker with AI and GPU
					programming, with a particular interest in reliability and thoughtful system design.
				</p>
			</div>
		</section>
	)
}

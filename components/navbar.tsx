"use client";

import { navLinks } from "@/lib/data";
import { useState } from "react";

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 h-14 backdrop-blur-md bg-bg/80 border-b border-05 border-border-gold">
			<div className="max-w-[900px] mx-auto h-full px-4 md:px-0 flex items-center justify-between">
				<a
					href="#"
					className="font-mono text-sm tracking-wider text-gold hover:text-gold-l transition-colors"
				>
					<img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
				</a>
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-text hover:text-gold-l transition-colors"
						>
							{link.label}
						</a>
					))}
				</div>
				<button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="md:hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-text hover:text-gold-l transition-colors"
					aria-label="Toggle menu"
				>
					{mobileMenuOpen ? "Close" : "Menu"}
				</button>
			</div>

			{mobileMenuOpen && (
				<div className="md:hidden absolute top-14 left-0 right-0 bg-bg/95 backdrop-blur-md border-b border-05 border-border-gold">
					<div className="flex flex-col items-center gap-6 py-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMobileMenuOpen(false)}
								className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-text hover:text-gold-l transition-colors"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}

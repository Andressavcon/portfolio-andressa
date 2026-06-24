import { heroData } from "@/lib/data";

export function Hero() {
	return (
		<section className="min-h-[92vh] flex flex-col justify-center px-8 pt-24">
			<div className="max-w-[900px] mx-auto w-full">
				<div className="flex items-center gap-4 mb-8">
					<span className="w-8 h-[1px] bg-gold" />
					<span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
						{heroData.eyebrow}
					</span>
				</div>

				<h1 className="font-serif text-[clamp(3.2rem,7vw,5.8rem)] font-light leading-[1.1] mb-6">
					<span className="block">{heroData.name.first}</span>
					<span className="block italic text-gold-l">{heroData.name.last}</span>
				</h1>

				<p className="font-serif text-xl md:text-2xl italic text-text mb-4">
					{heroData.tagline}
				</p>

				<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-d mb-10">
					{heroData.subTagline}
				</p>

				<p
					className="max-w-[560px] border-l border-gold-d pl-6 text-muted-text leading-relaxed mb-10 [&_strong]:text-gold-l [&_strong]:font-normal"
					dangerouslySetInnerHTML={{ __html: heroData.description }}
				/>

				<div className="flex flex-wrap gap-4">
					<a
						href="#projects"
						className="inline-flex items-center px-6 py-3 border border-05 border-gold text-gold font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-gold hover:text-bg transition-colors"
					>
						Ver meu trabalho
					</a>
					<a
						href="#contact"
						className="inline-flex items-center px-6 py-3 border border-05 border-border2 text-muted-text font-mono text-[11px] uppercase tracking-[0.2em] hover:border-gold hover:text-gold-l transition-colors"
					>
						Entrar em Contato
					</a>
				</div>
			</div>
		</section>
	);
}

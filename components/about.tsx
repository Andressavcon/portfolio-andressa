import { aboutData } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-[900px] mx-auto">
        <div className="section-label mb-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            About
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light mb-12">
          Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
          <div className="space-y-6">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-text leading-relaxed [&_strong]:text-gold-l [&_strong]:font-normal"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          <div className="space-y-6">
            {aboutData.stats.map((stat, index) => (
              <div
                key={index}
                className="border-l border-gold-d pl-5"
              >
                <div className="font-serif text-[2.5rem] font-light text-gold-l leading-none mb-1">
                  {stat.number}
                </div>
                <div className="font-mono text-[11px] text-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

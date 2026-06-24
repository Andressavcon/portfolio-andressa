import { workData } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="py-24 px-8">
      <div className="max-w-[900px] mx-auto">
        <div className="section-label mb-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Experiência
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light mb-12">
          Experiência
        </h2>

        <div className="border-l border-border-gold pl-8 space-y-12">
          {workData.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[calc(2rem+3.5px)] top-1 w-[7px] h-[7px] rounded-full bg-gold" />

              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold mb-2">
                {job.company}
              </div>

              <h3 className="font-serif text-[1.55rem] font-light mb-1">
                {job.role}
              </h3>

              <div className="font-mono text-[11px] text-dim mb-6">
                {job.period}
              </div>

              <ul className="space-y-3">
                {job.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex gap-3">
                    <span className="text-gold-d flex-shrink-0">—</span>
                    <span
                      className="text-sm text-muted-text leading-relaxed [&_strong]:text-text [&_strong]:font-normal"
                      dangerouslySetInnerHTML={{ __html: bullet.text }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

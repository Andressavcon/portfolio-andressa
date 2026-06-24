import { educationData } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-24 px-8">
      <div className="max-w-[900px] mx-auto">
        <div className="section-label mb-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Formação
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light mb-12">
          Formação Acadêmica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-surface border border-05 border-border-gold p-5"
            >
              <div className="font-mono text-[11px] text-dim mb-2">
                {edu.period}
              </div>
              <h3 className="font-serif text-lg font-light mb-1">
                {edu.title}
              </h3>
              <p className="text-muted-text text-sm">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

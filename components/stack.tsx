import { stackData } from "@/lib/data";

export function Stack() {
  return (
    <section id="stack" className="py-24 px-8">
      <div className="max-w-[900px] mx-auto">
        <div className="section-label mb-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Stack
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light mb-12">
          Expertise Técnica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stackData.map((group, index) => (
            <div
              key={index}
              className="bg-surface border border-05 border-border-gold p-5 hover:border-border2 transition-colors"
            >
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`font-mono text-[11px] px-2 py-1 border border-05 ${
                      tag.primary
                        ? "border-gold-d text-gold-l"
                        : "border-border-gold text-muted-text bg-surface2"
                    }`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

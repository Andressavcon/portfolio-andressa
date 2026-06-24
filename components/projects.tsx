import { projectsData } from "@/lib/data";

export function Projects() {
  const featuredProject = projectsData.find((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-[900px] mx-auto">
        <div className="section-label mb-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Projetos
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light mb-12">
          Projetos em Destaque
        </h2>

        {featuredProject && (
          <div className="border border-05 border-gold-d p-6 md:p-8 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
                  {featuredProject.badge}
                </div>
                <h3 className="font-serif text-[1.6rem] font-light mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed mb-6">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="font-mono text-[11px] px-2 py-1 border border-05 border-border-gold text-muted-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {featuredProject.stats && (
                <div className="flex md:flex-col gap-6 md:gap-4 md:text-right md:min-w-[165px]">
                  {featuredProject.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="font-serif text-[1.9rem] font-light text-gold-l leading-none">
                        {stat.number}
                      </div>
                      <div className="font-mono text-[10px] text-dim">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-surface border border-05 border-border-gold p-5 hover:border-border2 transition-colors"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
                {project.badge}
              </div>
              <h3 className="font-serif text-lg font-light mb-3">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-l transition-colors"
                  >
                    {project.title} ↗
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-muted-text text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="font-mono text-[10px] px-2 py-1 border border-05 border-border-gold text-muted-text"
                  >
                    {tag}
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

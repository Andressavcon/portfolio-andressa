import { contactData } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-[900px] mx-auto">
        <div className="section-label mb-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light mb-4">
              {contactData.headline.line1}
              <br />
              <span className="italic text-gold-l">
                {contactData.headline.line2}
              </span>
            </h2>
            <p className="text-muted-text leading-relaxed">
              {contactData.subtext}
            </p>
          </div>

          <div className="space-y-3">
            {contactData.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 bg-surface border border-05 border-border-gold p-4 hover:border-gold hover:text-gold-l transition-colors group"
              >
                <span className="font-mono text-sm text-gold group-hover:text-gold-l w-6">
                  {link.icon}
                </span>
                <span className="font-mono text-sm text-muted-text group-hover:text-gold-l transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

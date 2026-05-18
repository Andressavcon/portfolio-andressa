import { footerData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-05 border-border-gold">
      <div className="max-w-[900px] mx-auto text-center">
        <p className="font-mono text-[11px] text-dim">{footerData.text}</p>
      </div>
    </footer>
  );
}

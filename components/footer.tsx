import { Linkedin, Instagram } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Servi\u00e7os", href: "#servicos" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* Big CTA */}
        <div className="mb-16 border-2 border-foreground/10 p-10 text-center lg:p-16">
          <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {"Bora construir algo que "}
            <span className="text-accent">{"funciona"}</span>
            {"?"}
          </h3>
          <a
            href="#contato"
            className="mt-8 inline-block border-2 border-accent bg-accent px-8 py-3 text-xs font-bold uppercase tracking-widest text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
          >
            {"Come\u00e7ar conversa"}
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-8 border-t-2 border-foreground/10 pt-8 sm:flex-row">
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-bold uppercase tracking-widest text-foreground"
          >
            {"STATE"}
            <span className="animate-blink text-accent">{"."}</span>
          </a>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + copy */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/stateit-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/stateit.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground/40">
              {"\u00a9 2026"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

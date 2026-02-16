import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            state<span className="text-accent">.</span>
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <a
            href="#sobre"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Servi{"ç"}os
          </a>
          <a
            href="#abordagem"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Abordagem
          </a>
          <a
            href="#contato"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Contato
          </a>
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 sm:justify-end">
          <p className="text-xs text-muted-foreground">
            {"© 2026 State. Todos os direitos reservados."}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/stateit-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

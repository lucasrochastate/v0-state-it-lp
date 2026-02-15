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

        <p className="text-xs text-muted-foreground">
          {"© 2026 State. Todos os direitos reservados."}
        </p>
      </div>
    </footer>
  )
}

import { ArrowRight, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contato"
      className="border-t border-border/50 px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-medium tracking-widest text-accent uppercase">
              {"Contato"}
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {"Tem um projeto em mente? Chama a gente."}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {
                "Pode ser uma d\u00favida, um projeto novo ou s\u00f3 uma ideia. A gente responde r\u00e1pido e sem compromisso."
              }
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{"Email"}</p>
                  <p className="text-sm text-foreground">
                    {"contato@stateit.tech"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {"Onde estamos"}
                  </p>
                  <p className="text-sm text-foreground">
                    {"100% remoto, baseados no Brasil"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-muted-foreground"
                >
                  {"Nome"}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Como podemos te chamar?"
                  className="rounded-md border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-muted-foreground"
                >
                  {"Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  className="rounded-md border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-muted-foreground"
                >
                  {"Mensagem"}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Conta pra gente o que voc\u00ea precisa..."
                  className="resize-none rounded-md border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                {"Enviar"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

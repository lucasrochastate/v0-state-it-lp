import { ArrowRight, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contato"
      className="border-b-2 border-foreground/10 px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              {"Contato"}
            </p>
            <h2 className="text-3xl font-bold uppercase leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              {"Tem um projeto em mente? "}
              <span className="text-accent">{"Chama."}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {"Pode ser uma d\u00favida, um projeto novo ou s\u00f3 uma ideia. A gente responde r\u00e1pido e sem compromisso."}
            </p>

            {/* Info */}
            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-accent/30">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {"Email"}
                  </p>
                  <p className="text-sm text-foreground">
                    {"contato@stateit.tech"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-accent/30">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {"Localiza\u00e7\u00e3o"}
                  </p>
                  <p className="text-sm text-foreground">
                    {"100% remoto, baseados no Brasil"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="border-2 border-foreground/10 p-8 lg:p-10">
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              {"Manda uma mensagem"}
            </p>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {"Nome"}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Como podemos te chamar?"
                  className="border-2 border-foreground/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 transition-colors focus:border-accent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {"Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  className="border-2 border-foreground/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 transition-colors focus:border-accent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {"Mensagem"}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Conta pra gente o que voc\u00ea precisa..."
                  className="resize-none border-2 border-foreground/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 transition-colors focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 border-2 border-accent bg-accent py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
              >
                {"Enviar"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

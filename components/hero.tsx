export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden border-b-2 border-foreground/10 px-6 pb-16 pt-32 lg:px-10">
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Horizontal scan line */}
        <div
          className="absolute left-0 h-px w-full animate-[scanH_8s_linear_infinite]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, hsl(var(--accent) / 0) 30%, hsl(var(--accent) / 0.5) 50%, hsl(var(--accent) / 0) 70%, transparent 100%)",
            boxShadow: "0 0 20px 2px hsl(var(--accent) / 0.15)",
          }}
        />

        {/* Vertical scan line */}
        <div
          className="absolute top-0 h-full w-px animate-[scanV_10s_linear_infinite]"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, hsl(var(--accent) / 0) 30%, hsl(var(--accent) / 0.4) 50%, hsl(var(--accent) / 0) 70%, transparent 100%)",
            boxShadow: "0 0 20px 2px hsl(var(--accent) / 0.1)",
          }}
        />

        {/* Pulsing intersection dots */}
        <div className="absolute inset-0">
          {[
            { top: "20%", left: "20%", delay: "0s" },
            { top: "40%", left: "60%", delay: "2s" },
            { top: "60%", left: "40%", delay: "4s" },
            { top: "80%", left: "80%", delay: "1s" },
            { top: "30%", left: "90%", delay: "3s" },
            { top: "70%", left: "10%", delay: "5s" },
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 animate-[dotPulse_4s_ease-in-out_infinite] bg-accent"
              style={{
                top: dot.top,
                left: dot.left,
                animationDelay: dot.delay,
              }}
            />
          ))}
        </div>

        {/* Corner brackets */}
        <div className="absolute left-6 top-24 h-16 w-16 border-l-2 border-t-2 border-accent/15 lg:left-10" />
        <div className="absolute bottom-24 right-6 h-16 w-16 border-b-2 border-r-2 border-accent/15 lg:right-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* Huge heading */}
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-bold uppercase leading-[0.95] tracking-tight text-foreground">
          {"Seu software"}
          <br />
          {"pode ser "}
          <span className="text-accent">{"melhor"}</span>
          {"."}
        </h1>

        {/* Sub text + CTA row */}
        <div className="mt-10 flex flex-col gap-8 border-t-2 border-foreground/10 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            {"A gente ajuda times a construir produtos r\u00e1pidos, seguros e eficientes. Sem enrola\u00e7\u00e3o, sem jarg\u00e3o. S\u00f3 trabalho bem-feito."}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="border-2 border-accent bg-accent px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
            >
              {"Tenho um projeto"}
            </a>
            <a
              href="#servicos"
              className="border-2 border-foreground/20 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-foreground transition-all hover:border-accent hover:text-accent"
            >
              {"O que fazemos"}
            </a>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground/40">
          <span>{"Engenharia"}</span>
          <span>{"/"}</span>
          <span>{"Seguran\u00e7a"}</span>
          <span>{"/"}</span>
          <span>{"Dados"}</span>
          <span>{"/"}</span>
          <span>{"DevSecOps"}</span>
          <span>{"/"}</span>
          <span>{"Consultoria"}</span>
          <span>{"/"}</span>
          <span>{"AppSec"}</span>
        </div>
      </div>
    </section>
  );
}

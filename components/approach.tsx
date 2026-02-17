const steps = [
  {
    number: "01",
    title: "Entender",
    description:
      "A gente come\u00e7a ouvindo. Mapeamos sua arquitetura, processos e o que mais d\u00f3i pra priorizar o que importa.",
  },
  {
    number: "02",
    title: "Planejar",
    description:
      "Plano de a\u00e7\u00e3o realista. Foco no que vai gerar impacto de verdade. Nada de roadmap de fantasia.",
  },
  {
    number: "03",
    title: "Executar",
    description:
      "M\u00e3o na massa junto com seu time. Entregas incrementais, feedback cont\u00ednuo, zero surpresas.",
  },
  {
    number: "04",
    title: "Manter",
    description:
      "N\u00e3o sumimos depois. Ajudamos a manter tudo rodando e passamos o conhecimento pro time.",
  },
];

export function Approach() {
  return (
    <section
      id="abordagem"
      className="border-b-2 border-foreground/10 px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            {"Como funciona"}
          </p>
          <h2 className="max-w-lg text-3xl font-bold uppercase leading-[1.15] tracking-tight text-foreground sm:text-4xl">
            {"Quatro etapas. Sem mist\u00e9rio."}
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid gap-px border-2 border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-card lg:p-10"
            >
              {/* Big number */}
              <span className="font-mono text-5xl font-bold text-accent/20 transition-colors group-hover:text-accent lg:text-6xl">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-foreground">
                {step.title}
              </h3>

              {/* Accent bar */}
              <div className="mt-4 h-0.5 w-8 bg-accent/30 transition-all group-hover:w-12 group-hover:bg-accent" />

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

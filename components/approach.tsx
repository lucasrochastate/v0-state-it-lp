const steps = [
  {
    number: "01",
    title: "Entender",
    description:
      "A gente come\u00e7a ouvindo. Mapeamos sua arquitetura, processos e os pontos que mais doem pra priorizar o que importa.",
  },
  {
    number: "02",
    title: "Planejar",
    description:
      "Montamos um plano de a\u00e7\u00e3o realista \u2014 sem roadmap de fantasia. Foco no que vai gerar impacto de verdade.",
  },
  {
    number: "03",
    title: "Executar",
    description:
      "M\u00e3o na massa junto com seu time. Entregas incrementais, feedback cont\u00ednuo e nada de surpresas.",
  },
  {
    number: "04",
    title: "Manter",
    description:
      "N\u00e3o sumimos depois da entrega. Ajudamos a manter tudo rodando e passamos o conhecimento pro time.",
  },
]

export function Approach() {
  return (
    <section id="abordagem" className="border-t border-border/50 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-widest text-accent uppercase">
            {"Como funciona"}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {"Sem mist\u00e9rio. Quatro etapas e pronto."}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {"Nosso processo \u00e9 direto: entender o problema, planejar a solu\u00e7\u00e3o, executar e garantir que funcione no longo prazo."}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative flex flex-col gap-4">
              {index < steps.length - 1 && (
                <div className="absolute left-0 top-5 hidden h-px w-full bg-border lg:block" />
              )}
              <span className="font-mono text-2xl font-bold text-accent">
                {step.number}
              </span>
              <h3 className="text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

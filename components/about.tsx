export function About() {
  return (
    <section
      id="sobre"
      className="border-t border-border/50 px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-medium tracking-widest text-accent uppercase">
              {"Quem somos"}
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {
                "C\u00f3digo bom \u00e9 c\u00f3digo seguro e eficiente. Simples assim."
              }
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {"A "}
              <span className="font-medium text-foreground">{"State"}</span>
              {
                " surgiu de um grupo de mentes criativas que cansaram de ver seguran\u00e7a e eficiência sendo tratadas como algo \u00e0 parte. Pra gente, n\u00e3o faz sentido entregar software sem pensar em seguran\u00e7a, eficiência e qualidade desde o come\u00e7o."
              }
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {
                "Trabalhamos lado a lado com times de produto e engenharia, ajudando de verdade \u2014 sem jarg\u00e3o corporativo, sem relat\u00f3rio que ningu\u00e9m l\u00ea. S\u00f3 trabalho bem-feito que funciona na pr\u00e1tica."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

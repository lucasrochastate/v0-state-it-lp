export function About() {
  return (
    <section
      id="sobre"
      className="border-b-2 border-foreground/10 px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Label */}
        <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          {"Sobre a State"}
        </p>

        {/* Two column */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Big statement */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold uppercase leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {
                "A gente cansou de ver seguran\u00e7a e qualidade sendo tratadas como "
              }
              <span className="text-accent">{"algo \u00e0 parte"}</span>
              {"."}
            </h2>
          </div>

          {/* Body text */}
          <div className="flex flex-col justify-end gap-6 lg:col-span-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              {
                "Pra gente, n\u00e3o faz sentido entregar software sem pensar em seguran\u00e7a, efici\u00eancia e qualidade desde o come\u00e7o. \u00c9 assim que a State trabalha."
              }
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {
                "Trabalhamos junto com seu time, sem jarg\u00e3o corporativo, sem relat\u00f3rio que ningu\u00e9m l\u00ea. S\u00f3 trabalho que funciona na pr\u00e1tica."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

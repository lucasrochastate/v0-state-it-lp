"use client";

import {
    Code2,
    Lock,
    GitBranch,
    ServerCog,
    ChartNoAxesColumnDecreasing,
    Shield,
  } from "lucide-react";
  
  const portfolio = [
    {
      icon: Code2,
      title: "Pless",
      description:
        "Soluções Soluções Estratégicas para Operações de Alta Performance",
    },
    {
      icon: ServerCog,
      title: "VibePass",
      description:
        "App de controle de acesso e gerenciamento de eventos",
    },
    {
      icon: Lock,
      title: "Sevness Sylaby",
      description:
        "A mais promissora plataforma de e-learning de idiomas do brasil",
    },
    {
      icon: GitBranch,
      title: "FSB",
      description:
        "Ressignificando a comunicação com eficiência e impacto.",
    },
    {
      icon: ChartNoAxesColumnDecreasing,
      title: "Alpha Sec",
      description:
        "Soluções de segurança da informação para empresas de tecnologia.",
    },
    {
      icon: Shield,
      title: "Governança de Dados",
      description:
        "Ajudamos na definição de papéis e responsabilidades, políticas e padrões para garantir a qualidade e segurança dos dados.",
    },
  ];
  
  export function Portfolio() {
    // Duplicar os itens para criar um loop infinito suave
    const duplicatedPortfolio = [...portfolio, ...portfolio];
  
    return (
      <section
        id="portfolio"
        className="border-t border-border/50 px-6 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-xs font-medium tracking-widest text-accent uppercase">
              {"Portfólio"}
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {
                "Alguns dos nossos projetos com nossos parceiros."
              }
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {
                "Nossa equipe trabalha com paixão e dedicação para entregar resultados alta qualidade, eficiência e segurança."
              }
            </p>
          </div>
  
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-4 hover:[animation-play-state:paused]">
              {duplicatedPortfolio.map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="group flex min-w-[320px] flex-col gap-4 rounded-lg border border-border bg-background p-8 transition-colors hover:bg-secondary/50 sm:min-w-[360px]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary">
                    <project.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
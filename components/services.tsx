import {
  Code2,
  Lock,
  GitBranch,
  ServerCog,
  ChartNoAxesColumnDecreasing,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code2,
    number: "01",
    title: "Engenharia de Software",
    description:
      "Arquitetura, code review e desenvolvimento. Software de qualidade do come\u00e7o ao fim.",
  },
  {
    icon: ServerCog,
    number: "02",
    title: "Consultoria T\u00e9cnica",
    description:
      "Apoio pra decis\u00f5es de arquitetura e seguran\u00e7a. Um segundo par de olhos quando precisa.",
  },
  {
    icon: Lock,
    number: "03",
    title: "AppSec",
    description:
      "Seguran\u00e7a em apps, APIs e microsservi\u00e7os. Achamos as vulnerabilidades antes dos outros.",
  },
  {
    icon: GitBranch,
    number: "04",
    title: "DevSecOps",
    description:
      "SAST, DAST e SCA direto na CI/CD. Seguran\u00e7a que roda junto com o deploy.",
  },
  {
    icon: ChartNoAxesColumnDecreasing,
    number: "05",
    title: "An\u00e1lise de Dados",
    description:
      "Extra\u00e7\u00e3o, modelagem e visualiza\u00e7\u00e3o. Dashboards pra tomada de decis\u00e3o.",
  },
  {
    icon: Shield,
    number: "06",
    title: "Governan\u00e7a de Dados",
    description:
      "Pap\u00e9is, pol\u00edticas e padr\u00f5es pra garantir qualidade e seguran\u00e7a dos dados.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="border-b-2 border-foreground/10 px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              {"O que fazemos"}
            </p>
            <h2 className="max-w-2xl text-3xl font-bold uppercase leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              {"Do c\u00f3digo \u00e0 produ\u00e7\u00e3o, com seguran\u00e7a no caminho todo."}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {"Cobrimos o ciclo inteiro: da arquitetura at\u00e9 garantir que tudo est\u00e1 protegido."}
          </p>
        </div>

        {/* Service list */}
        <div className="flex flex-col">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col gap-4 border-t-2 border-foreground/10 py-8 transition-colors hover:bg-card sm:flex-row sm:items-center sm:gap-8 lg:px-6"
            >
              {/* Number */}
              <span className="shrink-0 font-mono text-sm text-muted-foreground/30">
                {service.number}
              </span>

              {/* Icon */}
              <service.icon className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />

              {/* Title */}
              <h3 className="min-w-[220px] shrink-0 text-sm font-bold uppercase tracking-wider text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

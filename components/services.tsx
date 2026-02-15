import {
  Code2,
  Lock,
  Search,
  FileCode,
  GitBranch,
  ServerCog,
  Database,
  ChartBar,
  ChartBarIncreasingIcon,
  ChartNoAxesColumnDecreasing,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Engenharia de Software",
    description:
      "Arquitetura, code review e desenvolvimento. Desenvolvimento de software de alta qualidade.",
  },
  {
    icon: ServerCog,
    title: "Consultoria T\u00e9cnica",
    description:
      "Apoio para decis\u00f5es de arquitetura e seguran\u00e7a. Um segundo par de olhos quando o time precisa.",
  },
  {
    icon: Lock,
    title: "AppSec",
    description:
      "An\u00e1lise de seguran\u00e7a em apps, APIs e microsservi\u00e7os. Achamos as vulnerabilidades antes dos outros.",
  },
  {
    icon: GitBranch,
    title: "DevSecOps",
    description:
      "Automa\u00e7\u00e3o com SAST, DAST e SCA direto na CI/CD. Seguran\u00e7a que roda junto com o deploy.",
  },
  {
    icon: Database,
    title: "Análise de Dados",
    description:
      "Análise de dados para tomada de decisão. Extração, transformação e carga de dados.",
  },
  {
    icon: ChartNoAxesColumnDecreasing,
    title: "Ciência de Dados",
    description: "Dashboards e visualizações de dados para tomada de decisão.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="border-t border-border/50 px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-widest text-accent uppercase">
            {"O que fazemos"}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {
              "Do c\u00f3digo \u00e0 produ\u00e7\u00e3o, com seguran\u00e7a no caminho todo."
            }
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {
              "Cobrimos o ciclo inteiro: desde pensar na arquitetura at\u00e9 garantir que o que foi pro ar est\u00e1 protegido."
            }
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-secondary/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary">
                <service.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {service.title}
              </h3>
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

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Servi\u00e7os", href: "#servicos" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-foreground/10 bg-background">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#" className="text-lg font-bold uppercase tracking-widest text-foreground">
          {"STATE"}
          <span className="animate-blink text-accent">{"."}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden border-2 border-accent bg-accent px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-accent-foreground transition-all hover:bg-transparent hover:text-accent md:inline-block"
        >
          {"Bora conversar"}
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-50 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile fullscreen */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-background md:hidden">
          <div className="flex flex-1 flex-col items-start justify-center gap-4 px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-bold uppercase tracking-widest text-foreground hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 h-0.5 w-16 bg-accent" />
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 border-2 border-accent px-8 py-3 text-sm font-bold uppercase tracking-widest text-accent hover:bg-accent hover:text-accent-foreground"
            >
              {"Bora conversar"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

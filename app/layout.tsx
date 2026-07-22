import React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stateit.tech"),
  title: "State | Engenharia, Segurança e Dados",
  description:
    "Consultoria especializada em engenharia de software, segurança e dados.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "State | Consultoria em Tecnologia",
    description:
      "A gente ajuda times a construir produtos rápidos, seguros e eficientes.",
    url: "https://stateit.tech",
    siteName: "State",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "State | Consultoria em Tecnologia",
    description:
      "A gente ajuda times a construir produtos rápidos, seguros e eficientes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

"use client";

import { motion } from "framer-motion";
import { Binary, Boxes, Globe2 } from "lucide-react";
import { SectionShell } from "@/components/section-shell";

const tiers = [
  {
    icon: Globe2,
    title: "warrantconnect.com",
    description: "Hub principal que organiza a navegação e apresenta o ecossistema digital.",
  },
  {
    icon: Boxes,
    title: "Subdomínios",
    description: "Camadas especializadas para aplicação, APIs, autenticação, arquivos, docs e status.",
  },
  {
    icon: Binary,
    title: "Microserviços",
    description: "Serviços independentes que sustentam performance, escalabilidade e governança.",
  },
];

export function Architecture() {
  return (
    <SectionShell
      eyebrow="Arquitetura"
      title="Fluxo simples, infraestrutura profunda"
      description="O portal principal apresenta a base do ecossistema, enquanto os subdomínios distribuem responsabilidades e os microserviços garantem a operação de forma desacoplada."
    >
      <div className="panel overflow-hidden p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div key={tier.title} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
                  <tier.icon size={24} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                  {tier.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{tier.description}</p>
              </motion.div>
              {index < tiers.length - 1 ? (
                <div className="pointer-events-none hidden md:block">
                  <div className="absolute right-[-36px] top-1/2 h-px w-16 -translate-y-1/2 bg-gradient-to-r from-cyan/60 to-transparent" />
                  <div className="absolute right-[-38px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan shadow-neon" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

"use client";

import { motion } from "framer-motion";
import { Activity, CheckCircle2, ServerCog, Waypoints } from "lucide-react";
import { SectionShell } from "@/components/section-shell";

const indicators = [
  { icon: Activity, label: "API Status", value: "Online" },
  { icon: ServerCog, label: "Infraestrutura", value: "Estável" },
  { icon: Waypoints, label: "Serviços", value: "Operacionais" },
];

export function StatusPanel() {
  return (
    <SectionShell
      id="status"
      eyebrow="Status"
      title="Visibilidade operacional em tempo real"
      description="Indicadores claros reforçam confiabilidade, prontidão e transparência para equipes internas, parceiros e integradores."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-mint/30 bg-mint/10 text-mint">
              <CheckCircle2 size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Health overview</p>
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                Todos os sistemas centrais respondendo normalmente
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            {["API Gateway", "Auth Cluster", "File Distribution", "Documentation Portal"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="text-sm text-slate-200">{item}</span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-mint">
                    <span className="h-2.5 w-2.5 rounded-full bg-mint shadow-[0_0_18px_rgba(110,255,198,0.8)]" />
                    Operacional
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="panel flex flex-col justify-between p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan">
                <indicator.icon size={22} />
              </div>
              <div className="mt-10">
                <p className="text-sm text-slate-400">{indicator.label}</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
                  {indicator.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

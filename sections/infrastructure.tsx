"use client";

import {
  CloudCog,
  Component,
  DatabaseZap,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import { FeatureTile } from "@/components/feature-tile";
import { SectionShell } from "@/components/section-shell";

const features = [
  {
    icon: Component,
    title: "Microservices",
    description: "Serviços independentes e desacoplados para evolução contínua, deploys rápidos e manutenção previsível.",
  },
  {
    icon: CloudCog,
    title: "Cloud Infrastructure",
    description: "Base preparada para workloads distribuídos, automação operacional e provisionamento moderno.",
  },
  {
    icon: ShieldCheck,
    title: "Security Layer",
    description: "Autenticação central, controle de acesso e superfícies protegidas em toda a malha digital.",
  },
  {
    icon: TimerReset,
    title: "High Availability",
    description: "Monitoramento contínuo, resiliência operacional e foco em uptime para serviços críticos.",
  },
  {
    icon: DatabaseZap,
    title: "Scalable APIs",
    description: "Gateways preparados para tráfego crescente, integrações múltiplas e consumo confiável de dados.",
  },
];

export function Infrastructure() {
  return (
    <SectionShell
      id="infraestrutura"
      eyebrow="Infraestrutura"
      title="Arquitetura robusta para ambientes de missão crítica"
      description="A plataforma foi desenhada para operar como uma camada central de conectividade, observabilidade e segurança, unificando experiências internas e externas."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {features.slice(0, 4).map((feature) => (
            <FeatureTile key={feature.title} {...feature} />
          ))}
        </div>
        <div className="panel relative overflow-hidden p-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(91,140,255,0.18),transparent_55%,rgba(110,255,198,0.12))]" />
          <div className="relative">
            <span className="chip">Core systems</span>
            <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
              Uma fundação pronta para crescimento contínuo
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              WarrantConnect centraliza fluxos críticos em uma experiência única, tornando a
              operação mais previsível para times de produto, engenharia e integrações externas.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Camada central de autenticação e autorização",
                "Integração padronizada entre frontends, APIs e storage",
                "Visibilidade operacional com status e observabilidade",
                "Escalabilidade orientada a serviços independentes",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-mint shadow-[0_0_18px_rgba(110,255,198,0.8)]" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <FeatureTile {...features[4]} />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

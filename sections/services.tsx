"use client";

import { AppWindow, BookText, Files, KeyRound, Router, ShieldAlert } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    icon: AppWindow,
    service: "APP",
    description: "Interface principal da plataforma para gestão operacional e experiência central do usuário.",
    href: "https://app.warrantconnect.com",
    domain: "app.warrantconnect.com",
  },
  {
    icon: Router,
    service: "API",
    description: "Gateway de APIs da infraestrutura com roteamento moderno, segurança e alta disponibilidade.",
    href: "https://api.warrantconnect.com",
    domain: "api.warrantconnect.com",
  },
  {
    icon: KeyRound,
    service: "AUTH",
    description: "Sistema de autenticação central com controle de acesso, sessões seguras e identidade unificada.",
    href: "https://auth.warrantconnect.com",
    domain: "auth.warrantconnect.com",
  },
  {
    icon: Files,
    service: "FILES",
    description: "Armazenamento e distribuição de arquivos com foco em performance, confiabilidade e escala.",
    href: "https://files.warrantconnect.com",
    domain: "files.warrantconnect.com",
  },
  {
    icon: BookText,
    service: "DOCS",
    description: "Documentação da plataforma com referências técnicas, fluxos de integração e guias para equipes.",
    href: "https://docs.warrantconnect.com",
    domain: "docs.warrantconnect.com",
  },
  {
    icon: ShieldAlert,
    service: "STATUS",
    description: "Monitoramento da infraestrutura com indicadores de saúde, incidentes e disponibilidade dos serviços.",
    href: "https://status.warrantconnect.com",
    domain: "status.warrantconnect.com",
  },
];

export function Services() {
  return (
    <SectionShell
      id="servicos"
      eyebrow="Serviços"
      title="Um hub central para cada camada da operação digital"
      description="Cada subdomínio atua como um ponto especializado da infraestrutura, mantendo governança, consistência visual e acesso rápido para times, aplicações e integrações."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.service} {...service} />
        ))}
      </div>
    </SectionShell>
  );
}

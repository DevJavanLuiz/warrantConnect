"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const ParticleBackground = dynamic(
  () => import("@/components/particle-background").then((mod) => mod.ParticleBackground),
  { ssr: false },
);

const metrics = [
  { label: "Microservices", value: "06+" },
  { label: "Serviços ativos", value: "24/7" },
  { label: "Escalabilidade", value: "Global" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      <ParticleBackground />
      <div className="section-wrap">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative">
            <span className="chip">Infraestrutura digital conectada</span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-8 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-white md:text-7xl"
            >
              Infraestrutura Digital Conectada para APIs, aplicações e serviços de alta
              disponibilidade.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              WarrantConnect é uma infraestrutura digital que conecta serviços, APIs e
              aplicações através de uma arquitetura moderna baseada em microserviços.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="#servicos" className="cta-primary">
                Explorar serviços
                <ArrowRight size={18} />
              </Link>
              <Link href="https://docs.warrantconnect.com" className="cta-secondary">
                Documentação
              </Link>
            </motion.div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.32 + index * 0.08 }}
                  className="panel px-5 py-4"
                >
                  <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,231,255,0.22),transparent_55%)] blur-3xl" />
            <div className="panel relative overflow-hidden p-6 md:p-8">
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan/10 to-transparent" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between rounded-[24px] border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan">
                      <Workflow size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Arquitetura</p>
                      <p className="font-medium text-white">Hub central com microsserviços</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-semibold text-mint">
                    Online
                  </span>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 flex items-center gap-3 text-cyan">
                      <Sparkles size={18} />
                      <span className="text-sm font-medium text-slate-200">Serviços orquestrados</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {["app", "api", "auth", "files", "docs", "status"].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300"
                        >
                          {item}.warrantconnect.com
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-azure/15 to-cyan/10 p-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-mint">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                          Segurança, observabilidade e escala
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-200">
                          Camadas centralizadas de autenticação, monitoramento e distribuição
                          garantem uma operação confiável em toda a plataforma.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

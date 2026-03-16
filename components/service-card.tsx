"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  service: string;
  description: string;
  href: string;
  domain: string;
};

export function ServiceCard({
  icon: Icon,
  service,
  description,
  href,
  domain,
}: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="group panel relative overflow-hidden p-6 shadow-glow"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan shadow-neon">
        <Icon size={24} />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
            {service}
          </h3>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-300">
            {domain}
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-300">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition group-hover:text-white"
      >
        Acessar
        <ArrowUpRight size={16} />
      </Link>
    </motion.article>
  );
}

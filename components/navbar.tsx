"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Infraestrutura", href: "#infraestrutura" },
  { label: "Serviços", href: "#servicos" },
  { label: "Documentação", href: "https://docs.warrantconnect.com" },
  { label: "Status", href: "#status" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 px-4 pt-4"
    >
      <div className="section-wrap">
        <div className="panel flex items-center justify-between gap-6 px-5 py-4 md:px-6">
          <Link href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan/10 shadow-neon">
              <span className="font-[family-name:var(--font-display)] text-lg font-bold text-cyan">
                W
              </span>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.3em] text-white">
                WARRANTCONNECT
              </p>
              <p className="text-xs text-slate-400">Digital infrastructure hub</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="#servicos" className="cta-primary hidden md:inline-flex">
              Explorar serviços
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

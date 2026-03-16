"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type FeatureTileProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureTile({ icon: Icon, title, description }: FeatureTileProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.24 }}
      className="panel p-6"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-mint">
        <Icon size={22} />
      </div>
      <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="text-sm leading-6 text-slate-300">{description}</p>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  top: `${(index * 17) % 100}%`,
  duration: 10 + (index % 5) * 2,
  delay: index * 0.3,
}));

export function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan/80 shadow-[0_0_18px_rgba(67,231,255,0.8)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            y: [0, -30, 14, 0],
            x: [0, 16, -10, 0],
            opacity: [0.2, 1, 0.45, 0.2],
            scale: [1, 1.4, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

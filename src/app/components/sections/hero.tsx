"use client";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
      <div
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-obsidian via-transparent to-obsidian" />
      <div className="absolute inset-0 z-10 bg-radial-gradient(circle, transparent 20%, #0d0b09 100%)" />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/40 rounded-full z-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: -1000,
            x: Math.random() * 100 - 50,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: "100%",
          }}
        />
      ))}
      <div className="relative z-30 text-center max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="font-ui text-[10px] tracking-[0.5em] text-gold-dim uppercase block mb-6">
            Version 0.3
          </span>

          <h1 className="font-display text-7xl md:text-9xl text-parchment mb-4 leading-tight">
            THE ATLAS <br />
            <span className="text-gold">SIX</span>
          </h1>

          <p className="font-body italic text-xl md:text-2xl text-parchment/80 mb-12 max-w-2xl mx-auto">
            A story-driven fantasy RPG forged from real friendship
          </p>

          <div className="h-px w-64 bg-linear-to-r from-transparent via-gold/30 to-transparent mx-auto mb-12" />

          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="secondary">Meet the Party</Button>
            <Button
              variant="primary"
              href="https://github.com/Passion-Over-Pain/the-atlas-six"
              target="_blank"
            >
              Join the Waitlist
            </Button>
            <Button
              variant="ghost"
              href="https://github.com/Passion-Over-Pain/the-atlas-six"
              target="_blank"
            >
              Docs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

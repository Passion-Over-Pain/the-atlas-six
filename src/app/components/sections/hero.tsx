"use client";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { useEffect, useState, useMemo } from "react";
import { handleStarAction } from "@/app/actions";

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: `${i * 5 + Math.random() * 2}%`, // Distributed spacing
      xOffset: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 5,
      size: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsian">
      {/* Background Layers */}
      <div
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-obsidian via-transparent to-obsidian" />

      {/*Performance: Only map particles if mounted to prevent mismatch */}
      {isMounted &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-[#E2B808] rounded-full z-20 pointer-events-none"
            initial={{ opacity: 0, y: "10vh" }}
            animate={{
              opacity: [0, 0.4, 0],
              y: "-110vh",
              x: p.xOffset,
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            style={{
              left: p.left,
              bottom: "-5%",
              width: p.size,
              height: p.size,
            }}
          />
        ))}

      <div className="relative z-30 text-center max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="font-ui text-[10px] tracking-[0.5em] text-gold/60 uppercase block mb-6">
            Version 0.3
          </span>

          <h1 className="font-display text-7xl md:text-9xl text-[#f5f2ed] mb-4 leading-tight">
            THE ATLAS <br />
            <span className="text-gold">SIX</span>
          </h1>

          <p className="font-body italic text-xl md:text-2xl text-[#f5f2ed]/80 mb-12 max-w-2xl mx-auto">
            A story-driven fantasy RPG forged from real friendship
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="secondary" href="/#characters">
              Meet the Party
            </Button>
            <Button variant="primary" onClick={handleStarAction}>
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

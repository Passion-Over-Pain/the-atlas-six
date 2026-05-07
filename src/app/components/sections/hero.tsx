"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { useEffect, useMemo, useState, memo } from "react";
import Image from "next/image";
import { handleStarAction } from "@/app/actions";

type ParticleData = {
  id: number;
  left: string;
  xOffset: number;
  duration: number;
  delay: number;
  size: number;
};

const FloatingParticles = memo(
  ({ particles }: { particles: ParticleData[] }) => {
    return (
      <>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#E2B808] pointer-events-none will-change-transform"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: -1200,
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
      </>
    );
  },
);

FloatingParticles.displayName = "FloatingParticles";

export const Hero = () => {
  const [showParticles, setShowParticles] = useState(false);

  const particles = useMemo<ParticleData[]>(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${i * 7 + Math.random() * 4}%`,
      xOffset: Math.random() * 80 - 40,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 4,
      size: Math.random() * 2 + 1,
    }));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-obsidian">
      {/* Background */}
      <Image
        src="/hero-bg.webp"
        alt="Atlas Six Background"
        fill
        priority
        quality={85}
        className="object-cover opacity-40"
      />

      <div className="absolute inset-0 z-10 bg-linear-to-b from-obsidian via-transparent to-obsidian" />

      {showParticles && (
        <div className="absolute inset-0 z-20">
          <FloatingParticles particles={particles} />
        </div>
      )}

      <div className="relative z-30 max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <span className="mb-6 block font-ui text-[10px] uppercase tracking-[0.5em] text-gold/60">
            Version 0.3
          </span>

          <h1 className="font-display text-7xl leading-tight text-[#f5f2ed] md:text-9xl">
            THE ATLAS <br />
            <span className="text-gold">SIX</span>
          </h1>

          <p className="mx-auto mb-12 mt-6 max-w-2xl font-body text-xl italic text-[#f5f2ed]/80 md:text-2xl">
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

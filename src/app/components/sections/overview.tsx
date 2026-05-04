"use client";
import { OverviewCard } from "@/app/components/features/overview-card";
import { FEATURES } from "@/app/constants/features";
import { motion, Variants } from "framer-motion";

export const WorldOverview = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="overview" className="relative py-24 px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20">
        {/* LEFT COLUMN: Narrative & Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <header>
            <span className="font-ui text-[10px] tracking-[0.4em] text-gold-dim uppercase mb-4 block">
              The World Awaits
            </span>
            <h2 className="font-display text-5xl text-parchment leading-tight">
              FIVE KINGDOMS. <br />
              <span className="text-gold">ONE WAR.</span>
            </h2>
          </header>

          <p className="font-body text-xl text-parchment/80 leading-relaxed mt-6">
            The Atlas Six is a desktop fantasy RPG built without a game engine:
            forged in raw JavaScript, Electron.js, and friendship. It weaves
            branching narratives with tactical combat, cozy settings, and
            off-the-top weirdness and madness.
          </p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 p-8 border-l-2 border-gold/30 bg-white/2"
          >
            <span className="font-ui text-[14px] tracking-[0.3em] text-gold uppercase block mb-4">
              ✦ A Note from the Developer
            </span>
            <p className="font-body text-lg text-parchment/70 italic leading-relaxed">
              &quot;This game exists because I had a crazy idea and even crazier
              people to back it up. Why no game engine, you ask? Just for the
              fun of it.&quot; — Tino
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Feature Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <OverviewCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

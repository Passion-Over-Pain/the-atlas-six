"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { CHARACTERS } from "@/app/constants/characters";
import Image from "next/image";

export const Characters = () => {
  // Active character index
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const activeChar = CHARACTERS[activeIndex];
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Embla carousel setup (vertical on desktop, horizontal on mobile)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: isMobile ? "x" : "y",
    containScroll: "trimSnaps",
    loop: true,
  });

  // Sync active index with carousel position
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Attach Embla select event + initial sync
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Reinitialize carousel when switching axis
  useEffect(() => {
    emblaApi?.reInit();
  }, [isMobile, emblaApi]);

  // Handle manual selection (click on thumbnail)
  const handleCharacterChange = (index: number) => {
    setActiveIndex(index);
    emblaApi?.scrollTo(index);
  };

  return (
    <section className="relative min-h-screen py-24 px-12 bg-obsidian overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-5xl text-parchment tracking-widest uppercase"
          >
            Meet Your <span className="text-gold">Party</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body italic text-parchment/50 mt-4"
          >
            They came from different kingdoms. They have every reason to
            distrust each other. And yet - here they are.
          </motion.p>
        </div>

        {/* ===== MAIN GRID (Bio | Portrait | Selector) ===== */}
        <div className="grid lg:grid-cols-[1.5fr_2fr_0.5fr] gap-12 items-start">
          {/* LEFT: Character Bio */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChar.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center h-full"
            >
              <span className="font-ui text-gold-dim tracking-[0.3em] text-xs mb-2">
                {activeChar.class}
              </span>

              <h3 className="font-display text-6xl text-parchment mb-6">
                {activeChar.name}
              </h3>

              <p className="font-body text-xl text-parchment/70 leading-relaxed">
                {activeChar.bio}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CENTER: Character Portrait */}
          <div className="relative h-fit flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChar.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full relative min-h-160"
              >
                <Image
                  src={activeChar.portrait}
                  alt={activeChar.name}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%) pointer-events-none" />
          </div>

          {/* RIGHT: Character Selector (Embla Carousel) */}
          <div className="h-full py-10">
            <div className="embla overflow-hidden h-full w-fit" ref={emblaRef}>
              <div
                className={`embla__container flex ${
                  isMobile ? "flex-row gap-4" : "flex-col gap-6"
                }`}
              >
                {CHARACTERS.map((char, index) => (
                  <button
                    key={char.id}
                    onClick={() => handleCharacterChange(index)}
                    className={`cursor-pointer flex justify-center align-center embla__slide relative shrink-0 transition-all duration-500 border-2 overflow-hidden ${
                      index === activeIndex
                        ? "border-gold scale-100 z-10 shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                        : "border-white/5 opacity-40 grayscale hover:opacity-100 hover:grayscale-0"
                    }`}
                  >
                    <img
                      src={char.thumbnail}
                      alt={char.name}
                      className="w-24 h-fit object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== STATS + QUOTE ===== */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white/2 border border-white/5 p-8 grid grid-cols-2 md:grid-cols-6 gap-8 relative"
        >
          {/* Background label */}
          <div className="absolute -top-4 right-8 bg-gold px-4 py-1 text-obsidian font-ui text-[10px] tracking-widest font-bold">
            Background: {activeChar.species}
          </div>

          {/* Stats grid */}
          {Object.entries(activeChar.stats).map(([key, val]) => (
            <div key={key} className="flex flex-col items-center gap-2">
              <div className="relative w-8 h-8 opacity-70 mb-1">
                <Image
                  src={`/icons/${key.toLowerCase()}.svg`}
                  alt={key}
                  fill
                  className="object-contain"
                />
              </div>

              <span className="font-ui text-[10px] tracking-tighter text-parchment/40">
                {key}
              </span>

              <span className="font-display text-xl text-gold-light">
                {val}
              </span>
            </div>
          ))}

          {/* Character quote */}
          <div className="col-span-full mt-6 border-t border-white/5 pt-6 text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeChar.quote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-body italic text-parchment/60 text-lg"
              >
                &quot;{activeChar.quote}&quot;
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

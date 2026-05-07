"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FEATURES } from "@/app/constants/gameplay";

export const GameplayShowcase = () => {
  const [activeId, setActiveId] = useState(FEATURES[0].id);

  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.35,
  });

  const activeFeature = useMemo(
    () => FEATURES.find((f) => f.id === activeId)!,
    [activeId],
  );

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !isInView) return;

    if (video.getAttribute("src") !== activeFeature.videoSrc) {
      video.src = activeFeature.videoSrc;
      video.load();
    }

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    return () => {
      video.pause();
    };
  }, [activeFeature, isInView]);

  return (
    <section
      id="gameplay"
      ref={sectionRef}
      className="relative bg-[#0b0c10] px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 text-center">
          <span className="mb-4 block font-ui text-[10px] uppercase tracking-[0.5em] text-gold/60">
            System overview
          </span>

          <h2 className="font-display text-5xl uppercase tracking-tighter text-parchment md:text-6xl">
            The <span className="text-gold">gameplay</span>
          </h2>
        </header>

        <div className="mb-8 grid overflow-hidden rounded-sm border border-gold/10 bg-black/40 shadow-2xl lg:grid-cols-2">
          {/* VIDEO */}
          <div className="relative aspect-video overflow-hidden border-r border-gold/10 bg-black">
            <motion.video
              key={activeFeature.id}
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="none"
              poster={activeFeature.thumbnail}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col justify-center p-12">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              <span className="mb-4 block font-ui text-xs uppercase tracking-widest text-gold">
                {activeFeature.tagline}
              </span>

              <h3 className="mb-6 font-display text-4xl uppercase text-parchment">
                {activeFeature.title}
              </h3>

              <p className="font-serif text-lg leading-relaxed text-parchment/70">
                {activeFeature.description}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {FEATURES.map((feature) => {
            const active = activeId === feature.id;

            return (
              <button
                key={feature.id}
                onClick={() => setActiveId(feature.id)}
                className={`group relative cursor-pointer rounded-sm border transition-all duration-300 ${
                  active
                    ? "border-gold bg-gold/5"
                    : "border-gold/10 grayscale hover:grayscale-0"
                }`}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    fill
                    loading="lazy"
                    src={feature.thumbnail}
                    alt={feature.title}
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h4
                    className={`text-[11px] uppercase tracking-widest ${
                      active ? "text-gold" : "text-parchment/60"
                    }`}
                  >
                    {feature.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

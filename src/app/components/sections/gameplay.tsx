"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FEATURES } from "@/app/constants/gameplay";

export const GameplayShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.3,
  });
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Update source ONLY if different
    if (video.src !== window.location.origin + activeFeature.videoSrc) {
      video.src = activeFeature.videoSrc;
    }

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [activeFeature, isInView]);

  return (
    <section
      id="gameplay"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 bg-[#0b0c10]"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <span className="font-ui text-[10px] tracking-[0.5em] text-gold/60 uppercase block mb-4">
            System overview
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-parchment uppercase tracking-tighter">
            The <span className="text-gold"> gameplay</span>
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-0 border border-gold/10 bg-black/40 overflow-hidden rounded-sm mb-8 shadow-2xl">
          {/* VIDEO */}
          <div className="relative aspect-video bg-black overflow-hidden border-r border-gold/10">
            <motion.video
              ref={videoRef}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              muted
              loop
              playsInline
              poster={activeFeature.thumbnail}
            />
          </div>

          {/* TEXT */}
          <div className="p-12 flex flex-col justify-center">
            <motion.div
              key={activeFeature.id}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <span className="text-gold font-ui text-xs tracking-widest uppercase mb-4 block">
                {activeFeature.tagline}
              </span>
              <h3 className="text-4xl font-display text-parchment mb-6 uppercase">
                {activeFeature.title}
              </h3>
              <p className="text-lg text-parchment/70 font-serif leading-relaxed mb-8">
                {activeFeature.description}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature)}
              className={`cursor-pointer relative group border rounded-sm transition-all duration-500
              ${
                activeFeature.id === feature.id
                  ? "border-gold bg-gold/5"
                  : "border-gold/10 grayscale hover:grayscale-0"
              }`}
            >
              <div className="aspect-4/3 relative overflow-hidden">
                <Image
                  fill
                  src={feature.thumbnail}
                  alt={feature.title}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h4
                  className={`text-[11px] uppercase tracking-widest ${
                    activeFeature.id === feature.id
                      ? "text-gold"
                      : "text-parchment/60"
                  }`}
                >
                  {feature.title}
                </h4>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

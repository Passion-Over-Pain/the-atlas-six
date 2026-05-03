"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NON_STAR_FRIENDS } from "@/app/constants/non-star-friends";
import { Button } from "@/app/components/ui/button";

interface Supporter {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface Particle {
  id: number;
  width: string;
  height: string;
  top: string;
  left: string;
  delay: string;
}

export const CommunitySection = () => {
  const [supporters, setSupporters] = useState<Supporter[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  const repoOwner = "Passion-Over-Pain";
  const repoName = "the-atlas-six";

  const handleStarAction = () => {
    const backendUrl =
      "https://portfolio-backend-pi-three.vercel.app/api/auth/login";
    const intent = "star";
    window.location.href = `${backendUrl}?intent=${intent}&repoOwner=${repoOwner}&repoName=${repoName}`;
  };

  useEffect(() => {
    setMounted(true);
    // Generate stable particle data once on mount
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      width: Math.random() * 3 + "px",
      height: Math.random() * 3 + "px",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      delay: Math.random() * 5 + "s",
    }));
    setParticles(newParticles);

    const fetchStars = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/stargazers`,
        );
        const data = await res.json();
        const combined = [
          ...NON_STAR_FRIENDS,
          ...(Array.isArray(data) ? data : []),
        ];
        setSupporters(combined);
      } catch (err) {
        console.error("Failed to fetch stars", err);
      }
    };
    fetchStars();
  }, []);

  return (
    <section
      id="community"
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 60% 80% at 30% 50%, rgba(180, 120, 40, 0.05) 0%, transparent 60%), 
                     radial-gradient(ellipse 40% 60% at 80% 60%, rgba(100, 60, 20, 0.04) 0%, transparent 50%), 
                     linear-gradient(180deg, #0b0c10, rgba(26, 20, 12, 0.95), #0b0c10)`,
      }}
    >
      {/* Particles only render if mounted to prevent hydration mismatch */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {mounted &&
          particles.map((p) => (
            <div
              key={p.id}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: p.width,
                height: p.height,
                top: p.top,
                left: p.left,
                animationDelay: p.delay,
              }}
            />
          ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-20">
          <span className="font-ui text-[10px] tracking-[0.5em] text-gold/60 uppercase block mb-4">
            The crazy cool people
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-parchment uppercase tracking-tighter">
            Our <span className="text-gold">Community</span>
          </h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body italic text-parchment/50 mt-4"
          >
            Friends, playtesters, mentors, and the kind souls who starred the
            repo.
          </motion.p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-20 gap-x-12 justify-items-center">
          {supporters.map((s, i) => (
            <motion.a
              key={s.login + i}
              href={s.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 10) * 0.05 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-[0_0_30px_rgba(218,165,32,0.1)]">
                  <img
                    src={s.avatar_url}
                    alt={s.login}
                    className="w-full h-full rounded-full transition-all duration-700 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-obsidian border border-gold rounded-full p-2 shadow-xl z-20 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-4 h-4 text-gold fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
              <span className="mt-8 font-ui text-[10px] tracking-widest text-gold opacity-60 group-hover:opacity-100 transition-opacity uppercase">
                @{s.login}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Button onClick={handleStarAction} variant="primary">
            Join Waitlist
          </Button>
          <p className="font-body text-xl text-parchment/90 leading-relaxed space-y-8 my-4">
            Join the community of seekers and help us reach the stars.
          </p>
        </div>
      </div>
    </section>
  );
};

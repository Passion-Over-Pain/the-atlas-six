import React from "react";

interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const OverviewCard = ({
  icon,
  title,
  description,
}: OverviewCardProps) => {
  return (
    <div className="p-8 border border-white/5 bg-white/2 flex flex-col gap-4 text-left">
      <div className="text-gold w-10 h-10 mb-2">{icon}</div>
      <h3 className="font-display text-gold-light text-sm tracking-[0.2em] uppercase">
        {title}
      </h3>
      <p className="font-body text-parchment/60 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

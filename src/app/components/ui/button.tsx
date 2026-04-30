import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = ({
  variant = "primary",
  children,
  className = "",
  href,
  target,
  rel,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-block cursor-pointer px-8 py-3 font-ui tracking-widest text-xs uppercase transition-all duration-300 active:scale-95 text-center";

  const variants = {
    primary:
      " [clip-path:polygon(15%_0,100%_0,85%_100%,0%_100%)] bg-gold text-obsidian hover:bg-gold-light font-bold shadow-[0_0_15px_rgba(201,168,76,0.3)]",
    secondary:
      "border border-gold/50 bg-transparent text-gold hover:bg-gold/10 hover:border-gold",
    ghost: "text-parchment/60 hover:text-gold hover:bg-white/5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

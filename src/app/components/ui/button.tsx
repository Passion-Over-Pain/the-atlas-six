import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  href?: string;
}

export const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "cursor-pointer px-8 py-3 font-ui tracking-widest text-xs uppercase transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      " [clip-path:polygon(15%_0,100%_0,85%_100%,0%_100%)] bg-gold text-obsidian hover:bg-gold-light font-bold shadow-[0_0_15px_rgba(201,168,76,0.3)]",
    secondary:
      "border border-gold/50 bg-transparent text-gold hover:bg-gold/10 hover:border-gold",
    ghost: "text-parchment/60 hover:text-gold hover:bg-white/5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      href={props.href}
      {...props}
    >
      {children}
    </button>
  );
};

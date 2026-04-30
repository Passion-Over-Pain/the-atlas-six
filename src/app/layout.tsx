import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "The Atlas Six | Indie RPG",
  description: "A story-driven fantasy RPG forged from real friendship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${dmSans.variable} bg-obsidian text-parchment antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

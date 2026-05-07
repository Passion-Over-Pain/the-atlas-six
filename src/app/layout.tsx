import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import StructuredData from "@/app/components/StructuredData";

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
  metadataBase: new URL("https://the-atlas-six.vercel.app"),
  title: {
    default: "The Atlas Six | Indie Fantasy RPG",
    template: "%s | The Atlas Six",
  },
  description:
    "An atmospheric, story-driven RPG featuring tactical turn-based combat and a recursive event engine. Forged from friendship, defined by your choices.",
  keywords: [
    "The Atlas Six game",
    "Indie RPG 2026",
    "Turn-based fantasy game",
    "Dark Souls aesthetic RPG",
    "Story-driven choice game",
    "Gwent inspired card games",
    "Electron JS game",
  ],
  authors: [{ name: "Tinotenda Mhedziso" }],
  creator: "Tinotenda Mhedziso",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://the-atlas-six.vercel.app",
    siteName: "The Atlas Six",
    title: "The Atlas Six | A New Legacy in Dark Fantasy",
    description:
      "Experience a tactical RPG where narrative choices ripple through a recursive world engine.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Atlas Six Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Atlas Six RPG",
    description:
      "Tactical combat meets deep narrative. An indie RPG built on JavaScript.",
    images: ["/og.png"],
  },
  manifest: "/site.webmanifest",
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
        suppressHydrationWarning
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

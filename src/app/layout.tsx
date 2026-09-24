import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Cursor from "@/components/interactive/Cursor";
import SmoothScroll from "@/components/interactive/SmoothScroll";
import Background from "@/components/three/Background";
import { seo } from "@/constants/constants";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.defaultTitle,
  description: seo.defaultDescription,
  keywords: [...seo.keywords],
  authors: [{ name: seo.person.fullName, url: seo.siteUrl }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: seo.siteUrl,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    siteName: `${seo.person.fullName} — Portfolio`,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
  },
  other: { "geo.region": "CA-ON" },
};

export const viewport: Viewport = {
  themeColor: "#07080C",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-CA"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Lets scroll-reveal styles apply only when JS runs */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-ink-950"
        >
          Skip to content
        </a>
        <Background />
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <div className="grain" aria-hidden />
        <Cursor />
      </body>
    </html>
  );
}

import type { AppProps } from "next/app";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "../styles/globals.css";

const sans = Geist({ subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${sans.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
          --font-serif: ${serif.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

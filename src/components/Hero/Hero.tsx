import Link from "next/link";
import React from "react";
import { Section, SectionText } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents";
import { BsFileEarmarkPdf } from "react-icons/bs";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <Section row nopadding className="relative pt-12 sm:pt-16 md:pt-8 md:pb-8" style={{ marginTop: "-40px" }}>
      {/* Background: static SVG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <HeroBackground />
      </div>

      <div className="w-full min-w-0 sm:w-4/5 sm:flex sm:flex-col sm:mx-auto md:w-full md:flex md:flex-col md:mx-auto animate-[bounceIn_1.5s_ease] relative z-0">
        <h2 className="font-extrabold text-2xl leading-8 max-w-full bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent mb-3 py-6 pb-2 sm:text-[28px] sm:leading-8 sm:py-4 sm:pb-2 md:text-[56px] md:leading-[56px] md:py-10 md:pb-3 break-words">
          Hello there!
          <br />
          I am Priyanshu.
        </h2>
        <SectionText>
          Full Stack Software Engineer building scalable, cloud-native systems
          with Go, React.js, AWS, and Azure. Based in Toronto.
          <br />
          <Link href="#about" className="text-[#F46737]">
            Find out more.
          </Link>
        </SectionText>
        <Button
          onClick={() =>
            window.open("/Priyanshu-Patel-Resume.pdf", "_blank")
          }
        >
          <BsFileEarmarkPdf size="2rem" className="mr-1.5 inline" />
          My Resume
        </Button>
      </div>
    </Section>
  );
}

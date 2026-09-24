import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { seo, skills } from "@/constants/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: seo.person.fullName,
  givenName: seo.person.firstName,
  familyName: seo.person.lastName,
  jobTitle: seo.person.jobTitle,
  email: seo.person.email,
  url: seo.siteUrl,
  image: `${seo.siteUrl}/images/dp.png`,
  sameAs: [seo.social.github, seo.social.linkedin, seo.social.instagram],
  worksFor: { "@type": "Organization", name: seo.company },
  alumniOf: { "@type": "Organization", name: seo.school },
  knowsAbout: [...skills.languages, ...skills.frameworks, ...skills.devOpsTools, ...skills.concepts],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

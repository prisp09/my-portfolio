import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import About from "../components/About/About";
import ExperienceEducation from "../components/ExperienceEducation/ExperienceEducation";
import Layout from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { seo, skills } from "../constants/constants";

function getJsonLdPerson() {
  const knowsAbout = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.devOpsTools,
    ...skills.concepts,
  ];
  return {
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
    worksFor: {
      "@type": "Organization",
      name: seo.company,
    },
    alumniOf: {
      "@type": "Organization",
      name: seo.school,
    },
    knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
  };
}

export default function Home() {
  const jsonLd = getJsonLdPerson();

  return (
    <Layout>
      <Head>
        <title>{seo.defaultTitle}</title>
        <meta name="description" content={seo.defaultDescription} />
        <link rel="canonical" href={seo.siteUrl} />
        <meta name="keywords" content={seo.keywords.join(", ")} />
        <meta name="author" content={seo.person.fullName} />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CA-ON" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.siteUrl} />
        <meta property="og:title" content={seo.defaultTitle} />
        <meta property="og:description" content={seo.defaultDescription} />
        <meta property="og:site_name" content={`${seo.person.fullName} — Portfolio`} />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:image" content={`${seo.siteUrl}/images/dp.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.defaultTitle} />
        <meta name="twitter:description" content={seo.defaultDescription} />
        <meta name="twitter:image" content={`${seo.siteUrl}/images/dp.png`} />

        {/* Structured data for recruiters & search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Section>
        <Hero />
      </Section>
      <About />
      <ExperienceEducation />
      <Technologies />
      <Projects />
    </Layout>
  );
}

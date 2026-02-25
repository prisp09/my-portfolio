import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import About from "../components/About/About";
import ExperienceEducation from "../components/ExperienceEducation/ExperienceEducation";
import Layout from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Priyanshu&apos;s Portfolio</title>
        <meta
          name="description"
          content="This page contains the portfolio of Priyanshu Patel, highlighting his skills and projects."
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

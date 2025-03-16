import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import Layout from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import UpButton from '../components/UpButton/UpButton';
import Head from 'next/head';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Priyanshu's Portforlio</title>
        <meta name="Priyanshu Patel's Portforlio." content="This page contains the portfolio of Priyanshu Patel, highlighting his skills and projects." />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <UpButton />
      <About />
      <Technologies />
      <Projects />
    </Layout>
  );
};

export default Home;

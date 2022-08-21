import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import Layout from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import UpButton from '../components/UpButton/UpButton';


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <UpButton>Scroll up!</UpButton>
      <About />
      <Technologies />
      <Projects />
    </Layout>
  );
};

export default Home;

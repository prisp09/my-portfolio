import Link from 'next/link';
import React from 'react';

import { Section, SectionText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionTitle2 } from './HeroStyles';
import { BsFileEarmarkPdf } from 'react-icons/bs';

const Hero = (props) => (
  <Section row nopadding style={{marginTop: '-40px'}}>
    <LeftSection>
      <SectionTitle2 main center>
      Hello there!
      <br />
      I am Priyanshu.
      </SectionTitle2>
      <SectionText>
        Welcome to my portfolio website!
        <br />
        Let me start of by introducing myself, briefly.
        <br />
        My name is Priyanshu Patel and I am a recent graduate from York University, currently looking for a software developer/engineer position.
        <a href="#about" style={{ color: "#F46737" }}> Find out more.</a>
      </SectionText>
      <Button onClick={() => window.open('/Priyanshu_Patel_Resume.pdf','_blank')}><BsFileEarmarkPdf size="2rem" style={{marginRight: '6px'}}/>My Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
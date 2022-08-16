import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { BsFileEarmarkPdf } from 'react-icons/bs';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        MY PURPOSE!
      </SectionText>
      <Button onClick={() => window.location = '/Priyanshu_Patel_Resume.pdf'}>My Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './AboutStyles';

const About = () => (
<Section id="about">
    <SectionDivider />
    <br />
    <br />
    
    <SectionTitle>About</SectionTitle>
    <LeftSection>
        <SectionText>
            Hi my name is Priyanshu!
        </SectionText>
    </LeftSection>
</Section>
);

export default About;
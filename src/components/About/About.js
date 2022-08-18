import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img, Divi} from './AboutStyles';

const About = () => (
<Section id="about">
    <SectionDivider />
    <br />
    <br />

    <SectionTitle>About</SectionTitle>
    <Divi>
        <Img src="images/dp.png" />
    </Divi>

    <LeftSection>
        <SectionText>
            My name is Priyanshu and I am a motivated BSc. Computer Science graduate from York University 
            that comes with a wide array of industry applicable skillset. At the moment, I am pursuing a career
            in backend development while strengthening my grasp of frontend to become an elite full-stack!
            Currently working on new projects to show off my skills! 😎
            <br />
            Other than coding, I enjoy mountain biking🚵, exploring🌵 and playing video games🎮!    
        </SectionText>
    </LeftSection>
</Section>
);

export default About;
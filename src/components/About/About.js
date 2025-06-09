import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img, Divi } from './AboutStyles';

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
                Full Stack Software Engineer with 2+ years of professional experience designing and deploying robust web applications with a backend emphasis. Proven expertise in Go (Gin-Gonic), PostgreSQL, and modern frontends using React.js and TypeScript. Experienced in containerizing applications with Docker and integrating Azure Communication Services into scalable backend systems. Known for solving real-world problems, winning hackathons, and delivering open-source solutions. Eager to thrive in small, collaborative teams building clean, maintainable, production-grade software.

                😎
                <br /><br />
                Other than coding, I enjoy mountain biking🚵, exploring🌵 and hitting the gym💪!
            </SectionText>
        </LeftSection>
    </Section>
);

export default About;
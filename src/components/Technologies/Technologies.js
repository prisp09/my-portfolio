import React from 'react';
import { BiCodeCurly, BiLibrary, BiWrench, BiGitPullRequest } from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { DiEclipse, DiReact, DiJava, DiPython, DiJavascript, DiMongodb, DiHtml5, DiCss3, DiAndroid, DiHeroku } from 'react-icons/di';
import { BsDot, BsShieldLock } from 'react-icons/bs';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { VscTerminalBash} from 'react-icons/vsc';
import { BiDollar, BiCodeAlt } from 'react-icons/bi';
import { SiExpress, SiSpringboot, SiJunit5, SiApachemaven, SiNetlify } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { GiTreeBeehive } from 'react-icons/gi';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Skills & Technologies</SectionTitle>
    {/* <SectionText>
    For a software engineer/developer it is essential to actively keep learning and acquiring new skills so they can keep up with the fast-paced environment of the tech industry.
    Therefore, I am open and flexible when it comes to learning new skills.<br/>
    Over the course of my tech journey so far, I have accumulated a wide array of industry applicable skill-set that make me job ready. Some of them are as follows:<br/>
    </SectionText> */}
    <List style={{marginTop: "10px"}}>
      <ListItem>
        <ListContainer>
          <ListTitle><BiCodeCurly size="2rem"/> Languages</ListTitle>
          <ListParagraph>

            <DiJava size="2rem" style={{position: "relative", top:"4px"}}/>Java
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <DiJavascript size="2rem" style={{position: "relative", top:"4px"}}/>JavaScript
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <DiPython  size="2rem" style={{position: "relative", top:"4px"}}/>Python
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <br />
            <AiOutlineConsoleSql size="2rem" style={{position: "relative", top:"4px"}}/> SQL(MySQL, Postgres)
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/><br />
            <DiMongodb size="2rem" style={{position: "relative", top:"4px"}}/>MongoDB(MQL)
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <VscTerminalBash size="2rem" style={{position: "relative", top:"4px"}}/>Shell & Bash
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <br />
            <BiDollar size="2rem" style={{position: "relative", top:"4px"}}/>C
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <DiHtml5 size="2rem" style={{position: "relative", top:"4px"}}/>HTML5
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <DiCss3  size="2rem" style={{position: "relative", top:"4px"}}/>CSS3

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle><BiLibrary size="2rem"/> Frameworks 
            <br/> or Libraries</ListTitle>
          <ListParagraph>
            <DiReact size="2rem" style={{position: "relative", top:"4px"}}/>React.js
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <SiExpress size="2rem" style={{position: "relative", top:"4px"}}/> Express.js
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/><br />
            <SiSpringboot size="2rem" style={{position: "relative", top:"4px"}}/> SpringBoot
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <FaNodeJs size="2rem" style={{position: "relative", top:"4px"}}/> Node.js
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/><br/>
            <TbBrandNextjs size="2rem" style={{position: "relative", top:"4px"}}/> Next.js
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <SiJunit5 size="2rem" style={{position: "relative", top:"4px"}}/> JUnit
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <BsShieldLock size="2rem" style={{position: "relative", top:"4px"}}/> Bcrypt

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle><BiWrench size="2rem"/> Tools</ListTitle>
          <ListParagraph>
            <BiGitPullRequest size="2rem" style={{position: "relative", top:"4px"}}/> Github
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <DiEclipse size="2rem" style={{position: "relative", top:"4px"}}/>Eclipse
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <BiCodeAlt size="2rem" style={{position: "relative", top:"4px"}}/> VSCode
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/><br />
            <DiAndroid size="2rem" style={{position: "relative", top:"4px"}}/> Android Studio
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <SiApachemaven size="2rem" style={{position: "relative", top:"4px"}}/> Maven
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/><br />
            <SiNetlify size="2rem" style={{position: "relative", top:"4px"}}/> Netlify
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/>
            <GiTreeBeehive size="2rem" style={{position: "relative", top:"4px"}}/> Beekeeper Studio
            <BsDot size="2rem" style={{position: "relative", top:"4px"}}/><br />
            <DiHeroku size="2rem" style={{position: "relative", top:"4px"}}/>Heroku

          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

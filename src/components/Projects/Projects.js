import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ExternalLinks2,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { isNil } from "lodash";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Projects</SectionTitle>
    {/* <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <span>
                <br />
              </span>
              <HeaderThree title={"true"}>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList style={{ marginTop: "4px" }}>
              <ExternalLinks href={visit} target={"_blank"}>
                Code
              </ExternalLinks>
              <ExternalLinks2 href={source} target={"_blank"}>
                Source
              </ExternalLinks2>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer> */}
    <SectionText>Under construction! ⚠️🚧<br />Check back later for updates!</SectionText>
  </Section>
);

export default Projects;

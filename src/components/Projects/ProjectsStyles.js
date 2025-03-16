import styled from "styled-components";
import { isNil } from "lodash";

export const Img = styled.img`
  position: relative;
  width: 400px;
  object-fit: cover;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 650px;
  &:hover {
    box-shadow: 3px 3px 30px rgba(80, 78, 78, 1);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 400;
  padding: 0.5rem 0;
  font-size: ${(props) => (!isNil(props.title) ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0ff57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #212d45;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #b133ff;
  }
`;

export const ExternalLinks2 = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #212d45;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #ff622e;
  }
`;

export const TagList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 2rem 4.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2rem 1rem;
  }
`;
export const Tag = styled.li`
  color: #00ffff;
  opacity: 80%;
  font-size: 1.5rem;
`;

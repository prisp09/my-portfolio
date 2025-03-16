import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SectionText } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Cell</LinkTitle>
          <LinkItem href="tel:647-568-9541" target={"_blank"}>+1 647-568-9541</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:priyanshu.sanjay.patel@gmail.com" target={"_blank"}>priyanshu.sanjay.patel@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn></LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="https://goo.gl/maps/j2b5xKNKJqNquDok6" target={"_blank"}>North York, ON, Canada.</LinkItem>
        </LinkColumn>
        <LinkColumn>

        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
          It's not a bug. It's a surpise feature! ✨
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/prisp09" target={"_blank"}>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/priyanshu-sanjay-patel/" target={"_blank"}>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://instagram.com/pri.s.p" target={"_blank"}>
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

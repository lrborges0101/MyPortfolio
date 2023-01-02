import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiTiktok } from "react-icons/si";

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:+351910514902' >910 514 902</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>E-Mail</LinkTitle>
      <LinkItem href='mailto:leoloco40@gmail.com'>leoloco40@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>If you weren't born with natural gifts then you need to try 500 times harder</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/lrborges0101'>
              <AiFillGithub size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://linkedin.com'>
              <AiFillLinkedin size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://www.tiktok.com/@leoonardo480'>
              <SiTiktok size='3rem' />
            </SocialIcons>
            </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

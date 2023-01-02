import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiTiktok } from "react-icons/si";
import { DiAtom } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
        <Container>
          <Div1>
            <Link href='/'>
              <a style={{display:'flex', alignItems:'center', color:'white', marginBottom:'20px'}} >
                  <DiAtom size='3rem'/><span style={{fontSize:'3rem'}}> Portfolio</span>
              </a>
            </Link>
          </Div1>
          <Div2>
            <Link href='#projects'>
              <NavLink>Projects</NavLink>
            </Link>
            <Link href='#tech'>
              <NavLink>Technologies</NavLink>
            </Link>
            <Link href='#about'>
              <NavLink>About</NavLink>
            </Link>
          </Div2>
          <Div3>
            <SocialIcons href='https://github.com/lrborges0101'>
              <AiFillGithub size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://linkedin.com'>
              <AiFillLinkedin size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://www.tiktok.com/@leoonardo480'>
              <SiTiktok size='3rem' />
            </SocialIcons>
          </Div3>
        </Container>
);

export default Header;

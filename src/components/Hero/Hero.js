import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br/>
        Welcome To My Portfolio

      </SectionTitle>
        <SectionText>
          My name is Leonardo Borges, i'm seeking a front-end developer position where I can utilize my skills in HTML, CSS, and React.JS to design and develop engaging and user-friendly websites.
        </SectionText>
        <Button><a style={{color:'white'}} href='mailto:leoloco40@gmail.com'>Learn More</a></Button>
    </LeftSection>
  </Section>
);

export default Hero;
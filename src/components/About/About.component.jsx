import React from "react";

import {
  AboutContainer,
  Head,
  Photo,
  Text,
  Context,
  Content,
  SocialContainer,
  Linkedin,
  Github,
  Steam,
  Spotify,
} from "./About.style";

import cesar from "../../assets/images/cesar.png";
import cesarpb from "../../assets/images/cesarpb.png";

export const About = () => (
  <AboutContainer>
    <Head>About</Head>
    <Context>
      <Photo>
        <img src={cesar} alt=""></img>
        <img src={cesarpb} alt=""></img>
      </Photo>
      <Content>
        <Text>
          I am a Full Stack developer with previous experience in marketing and
          business management. My goal is to develop and bring to life great
          world-changing ideas.
        </Text>
        <Text>Working with: Node, React, Javascript</Text>
        <SocialContainer>
          <Linkedin />
          <Github />
          <Steam />
          <Spotify />
        </SocialContainer>
      </Content>
    </Context>
  </AboutContainer>
);

export default About;

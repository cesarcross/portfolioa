import React from "react";

import {
  IntroContainer,
  Content,
  Title,
  Text,
  IntroButton,
} from "./Intro.style";

export const Sample = () => (
  <IntroContainer>
    <Content>
      <Title>
        Hello, I'm <Text>Cesar Corregiari</Text>
        I'm a Full Stack developer
      </Title>
      <IntroButton>Check my work</IntroButton>
    </Content>
  </IntroContainer>
);

export default Sample;

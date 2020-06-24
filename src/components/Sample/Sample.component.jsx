import React from "react";

import {
  SampleContainer,
  Photo,
  Title,
  Text,
  Dash,
  SocialContainer,
  Linkedin,
  Github,
  Steam,
  Spotify,
} from "./Sample.style";

import cesar from "../../assets/images/cesar.png";
import dash from "../../assets/images/dash.jpg";

export const Sample = () => (
  <SampleContainer>
    <Title>HELLO I'M CESAR</Title>
    <Photo>
      <img src={cesar} alt=""></img>
    </Photo>
    <Text>
      I am am android that can see through walls, read in green and make tasty
      cupcakes. You can hire me to send memes, build applications, invest in
      bitcoin, walk your dog and join protests.
    </Text>
    <Text>
      Bought a new game? Why havent you told me? I can tell if a game is good or
      not just by his case. Do you live in Arizona? I can work as an air
      conditioner too. Lets drive an icecream trailer and spread joy while
      everyone is locked at home
    </Text>
    <SocialContainer>
      <Linkedin />
      <Github />
      <Steam />
      <Spotify />
    </SocialContainer>
    <Title>Enjoy a nice contemplative JOHNNY picture below</Title>
    <Dash>
      <img src={dash} alt=""></img>
    </Dash>
  </SampleContainer>
);

export default Sample;

import styled from "styled-components";

import { FaSpotify, FaLinkedin, FaSteam, FaGithubAlt } from "react-icons/fa";

export const AboutContainer = styled.div`
  /* border: 2px solid green; */
  background: #fff;
  margin: 30px auto;
`;

export const Head = styled.h3`
  font-size: 2.5rem;
`;

export const Context = styled.div`
  justify-content: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Content = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Photo = styled.div`
  /* border: 2px solid yellow; */

  img {
    width: 200px;
    /* border: 2px solid #fbd46d; */
  }
`;

export const Text = styled.p`
  /* border: 2px solid blue; */
  color: black;
  width: 300px;
  margin: 20px auto;
`;

export const SocialContainer = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 25px;
  color: #0779e4;
  margin-right: 5px;
`;

export const Github = styled(FaGithubAlt)`
  font-size: 25px;
  color: #0779e4;
  margin-right: 5px;
`;

export const Steam = styled(FaSteam)`
  font-size: 25px;
  color: #0779e4;
  margin-right: 5px;
`;

export const Spotify = styled(FaSpotify)`
  font-size: 25px;
  color: #0779e4;
  margin-right: 5px;
`;

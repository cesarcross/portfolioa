import styled from "styled-components";

import { FaSpotify, FaLinkedin, FaSteam, FaGithubAlt } from "react-icons/fa";

export const SampleContainer = styled.div`
  /* border: 2px solid green; */
  background: #2f2519;
`;

export const Photo = styled.div`
  /* border: 2px solid yellow; */

  img {
    width: 200px;
    border: 2px solid #fbd46d;
  }
`;

export const Title = styled.h3`
  /* border: 2px solid blue; */
  color: #79d70f;
  padding-top: 20px;
`;

export const Text = styled.p`
  /* border: 2px solid blue; */
  color: #79d70f;
  width: 300px;
  margin: 10px auto;
`;

export const SocialContainer = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  justify-content: center;
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 25px;
  color: #f4ea8e;
  margin-right: 5px;
`;

export const Github = styled(FaGithubAlt)`
  font-size: 25px;
  color: #f4ea8e;
  margin-right: 5px;
`;

export const Steam = styled(FaSteam)`
  font-size: 25px;
  color: #f4ea8e;
  margin-right: 5px;
`;

export const Spotify = styled(FaSpotify)`
  font-size: 25px;
  color: #f4ea8e;
  margin-right: 5px;
`;

export const Dash = styled.div`
  img {
    width: 100%;
  }
`;

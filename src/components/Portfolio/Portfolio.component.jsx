import React from "react";

import {
  PortfolioContainer,
  Head,
  Dash,
  Content,
  Project,
} from "./Portfolio.style";

import uva from "../../assets/images/uva.png";
import bistro from "../../assets/images/bistro.png";
import quitanda from "../../assets/images/quitanda.png";
import veganmkt from "../../assets/images/veganmkt.png";
import daleship from "../../assets/images/daleship.png";

export const Portfolio = () => (
  <PortfolioContainer>
    <Head>PROJECTS</Head>
    <Dash>_________</Dash>
    <Content>
      <Project>
        <a
          href="https://restauranteuva.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={uva} alt="Restaurante Uva" />
        </a>
      </Project>
      <Project>
        <a
          href="https://bistro327.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bistro} alt="Bistro 327" />
        </a>
      </Project>
      <Project>
        <a
          href="https://quitandavegana.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={quitanda} alt="Quitanda Vegana" />
        </a>
      </Project>
      <Project>
        <a
          href="https://https://daleship.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={daleship} alt="Daleship" />
        </a>
      </Project>
      <Project>
        <a
          href="http://vegan-marketplace.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={veganmkt} alt="Vegan Marketplace" />
        </a>
      </Project>
    </Content>
  </PortfolioContainer>
);

export default Portfolio;

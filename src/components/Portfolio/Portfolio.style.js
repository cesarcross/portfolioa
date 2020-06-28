import styled from "styled-components";

export const PortfolioContainer = styled.div`
  /* border: 2px solid green; */
  background: #fff;
`;

export const Head = styled.h3`
  font-size: 2.5rem;
`;

export const Title = styled.h3`
  /* border: 2px solid blue; */
  color: black;
  padding-top: 20px;
`;

// export const Text = styled.p`
//   /* border: 2px solid blue; */
//   color: #79d70f;
//   width: 300px;
//   margin: 10px auto;
// `;

export const Dash = styled.p``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Project = styled.li`
  list-style-type: none;

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

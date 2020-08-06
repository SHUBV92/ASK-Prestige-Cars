import styled from "styled-components";

export const Container = styled.div`
  background: grey;
  /* background: linear-gradient(110deg, #d4af37 60%, #fdcd3b 60%); */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  opacity: 04;

  h1 {
    color: gold;
    font-size: 50px;
  }

  h3 {
    color: white;
    font-size: 20px;
  }

  @media only screen and (min-width: 768px) {
    padding: 10%;
  }

  @media only screen and (min-width: 992px) {
    padding: 10%;
  }

  @media only screen and (min-width: 1200px) {
    padding: 10%;
  }
`;

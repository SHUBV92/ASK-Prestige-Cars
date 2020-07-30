import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  text-align: center;
  z-index: 1.3;

  @media only screen and (min-width: 768px) {
    padding-left: 100px;
    /* padding-top: 10px; */
    padding-right: 100px;
  }

  @media only screen and (min-width: 768px) {
    .appStyle {
    }
  }
`;

export const AppStyle = styled.div`
  /* Sizing */
  @media only screen and (min-width: 768px) {
    position: fixed;
    width: 100%;
    height: 200px;
    z-index: 0.2;
    margin-top: 50px;
    /* Styling */
    background: lightgrey;
    background: linear-gradient(
      180deg,
      grey -1%,
      lightgrey 55%
    );
  }
`;

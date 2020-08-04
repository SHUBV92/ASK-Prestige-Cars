/* Extra small devices (phones, 600px and down) */
/* Small devices (portrait tablets and large phones, 600px and up) */
/* Medium devices (landscape tablets, 768px and up) */
/* Large devices (laptops/desktops, 992px and up) */
/* Extra large devices (large laptops and desktops, 1200px and up) */

import styled from "styled-components";

export const Container = styled.div`

/* Container Styles */
  border-radius: 10px;
  background: linear-gradient(
    110deg,
    #f6f6f6 60%,
    #ffff 60%
  );
/* Text Style */
  p {
    padding: 20px;
  }
/* Styles for screens larger then 600px */
  @media only screen and (min-width: 600px) {
    padding: 100px;
  }

  h3 {
    font-family: Gothamlight;
  }

  .icon {
    font-size: 50px;
    /* padding: 10px; */
    padding-top: 20px;
  }
`;

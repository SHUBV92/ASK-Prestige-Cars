import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #f6f6f6; */
  background: linear-gradient(
    110deg,
    #f6f6f6 60%,
    #ffff 60%
  );

  p {
    padding: 20px;
    /* text-shadow: 2px 2px gold; */
    
  }

  @media only screen and (min-width: 600px) {
    padding: 100px;
  }

  h3 {
    font-family: Gothamlight;
  }

  .icon {
    font-size: 50px;
    padding: 10px;
  }
`;

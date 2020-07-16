import React from "react";
import Business from "../Business/Business";
import { Container } from "./Intro.styles";

const Intro = () => {
  return (
    <Container>
      <h1>About Us</h1>

      <p>Executive minicab service</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna
        aliqua. Fames ac turpis egestas maecenas.
        Orci sagittis eu volutpat odio facilisis
        mauris. Vestibulum mattis ullamcorper
        velit sed ullamcorper morbi tincidunt
        ornare massa. Viverra suspendisse potenti
        nullam ac. Augue interdum velit euismod in
        pellentesque. Duis ultricies lacus sed
        turpis tincidunt. Augue lacus viverra
        vitae congue eu consequat ac felis. Neque
        ornare aenean euismod elementum nisi quis
        eleifend.
      </p>
      <h3>Get In Touch with us</h3>
      <h4> +07907039195 </h4>
      <hr />
      {/* <img src={require(`../../assets/logo.jpeg`)} /> */}
      {/* <h2>Testimonials</h2>
      <p>
        "Had a great experience with ASK Prestige"
      </p> */}

      <Business />
    </Container>
  );
};

export default Intro;

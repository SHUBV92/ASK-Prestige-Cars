import React from "react";
import Business from "../Business/Business";
import { Container } from "./Intro.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faChevronCircleDown, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";


const Intro = () => {
  return (
    <Container id="about">
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
      {/* <link href="info@askprestigecars.co.uk"> */}
      <FontAwesomeIcon
        className="icon"
        icon={faEnvelope}
      />
      {/* </link> */}
      <br />
      <h3>Get In Touch with us</h3>
      <h4> +44 7907039195 </h4>
      <h5>info@askprestigecars.co.uk</h5>
      <hr />
      
      {/* <img src={require(`../../assets/logo.jpeg`)} /> */}
      {/* <h2>Testimonials</h2>
      <p>
        "Had a great experience with ASK Prestige"
      </p> */}
      <h4></h4>
      <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="services"
              activClass="some-active-class"
            >
      <FontAwesomeIcon
        className="icon"
        icon={faAngleDown}
      />
      </Link>

    </Container>
  );
};

export default Intro;

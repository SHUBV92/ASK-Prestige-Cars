import React from "react";
import Business from "../Business/Business";
import { Container } from "./Intro.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faChevronCircleDown,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
import {
  useSpring,
  animated,
} from "react-spring";

const Intro = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={props}>
    <Container id="about">
      <h1>About Us</h1>

      <p>Executive minicab service</p>
      <p>
        ASK Prestige Cars is an executive minicab
        company committed to delivering quality
        service to its wide range of clients. We
        are a team of dedicated people who strive
        to offer a safe, efficient and reliable
        executive minicab service. We provide our
        service 24 hours a day, 7 days a week and
        365 days a year to cover your
        transportation needs. Whatever the event,
        function or route, our friendly and
        knowledgeable drivers will make sure that
        you are comfortable throughout your
        journey with us. We promise to provide
        with a memorable experience with our
        quality of service.
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
    </animated.div>
  );
};

export default Intro;

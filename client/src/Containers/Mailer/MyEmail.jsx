import React from "react";
import { Email, Item, A } from "react-html-email";

const MyEmail = ({ name, children }) => {
  return (
    <Email title="link">
      <Item>
        Hello {name}
        <A
          style={{ paddingLeft: 10 }}
          href="https://mailtrap.io"
        >
          Click me!
        </A>
      </Item>

      <Item>{children}</Item>
    </Email>
  );
};

export default MyEmail;

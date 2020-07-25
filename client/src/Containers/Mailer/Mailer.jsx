import React, { Component } from "react";
import axios from "axios";

import MyEmail from "./Email";
import { renderEmail } from "react-html-email";

const Mailer = (props) => {
  const handleSubmit = (event) => {
    const messageHtml = renderEmail(
      <MyEmail name={props.name}>
        {props.pickUp}
      </MyEmail>
    );

    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: {
        name: props.name,
        email: props.email,
        messageHtml: messageHtml,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Email sent!");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert(
          "Oops, something went wrong. Try again"
        );
      }
    });
  };

  console.log(props.bookings.pickUp);
  return <div><button onClick={handleSubmit}>Book</button></div>;
};
export default Mailer;

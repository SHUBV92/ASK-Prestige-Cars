import React, { Component } from "react";
import axios from "axios";

import MyEmail from "./MyEmail.jsx";
import { renderEmail } from "react-html-email";

class Mailer extends Component {
  constructor(props) {
    super();
    this.state = {
      name: null,
      email: null,
      phone: null,
    };
    //  this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(
      this
    );
    console.log("State: ", this.state);
  }

  // handleChange = event => {
  //   event.preventdefault.value();
  //   this.setState({
  //     name: event.target.value,
  //     email: event.target.value,
  //     phone: event.target.value
  //   });
  //   console.log(event.target);
  // };

  handleSubmit(event) {
    const messageHtml = renderEmail(
      <MyEmail name={this.props.pickUp}>
        {this.props.name}
      </MyEmail>
    );
    console.log("message", messageHtml);

    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: {
        name: this.props.name,
        email: this.props.email,
        // messageHtml: messageHtml
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Email sent!");
        // this.resetForm();
        console.log("axios data", response.data.msg)
      } else if (response.data.msg === "fail") {
        alert(
          "Oops, something went wrong. Try again"
        );
        console.log("axios data", response.data.msg)

      }
    });
    console.log("Axios Used")
  }

  render() {
    return (
      <div className="Container">
        <div className="head">
          <h1>
            <span>Make a Booking </span>
          </h1>
        </div>
        {/* <form Method="post" action="/send"> */}

        <input
          value={this.props.bookings.pickUp}
        />
        <p>
          <button
            type="submit"
            // onClick={this.handleChange}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </p>
        {/* </form> */}
      </div>
    );
  }
}

export default Mailer;

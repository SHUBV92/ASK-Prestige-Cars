// Packages
import React, { Component } from "react";
import Axios from "axios";

// Imported Components
import MyEmail from "./MyEmail.jsx";
import { renderEmail } from "react-html-email";

// Mailer Class Component
class Mailer extends Component {
  constructor(props) {
    super();
    this.state = {
      name: null,
      email: null,
      phone: null,
    };
    this.handleSubmit = this.handleSubmit.bind(
      this
    );
  }

  handleSubmit(event) {
    console.log("State: ", this.state);

    console.log(" Mailer", this.props.bookings);

    const messageHtml = renderEmail(
      <MyEmail name={this.props.pickUp}>
        {this.props.name}
      </MyEmail>
    );
    // console.log("message", messageHtml);

    // Send the booking to the backend

    console.log(
      "Data",
      this.props.bookings[0].pickUp
    );
    const url = "http://localhost:8000/send";
    const details = {
      // pickUp: this.props.bookings[0].pickUp,
      // destination: this.props.bookings[0]
      //   .destination,
      pickUp: "EastHam",
      destination: "Barking"
    };
    console.log(JSON.stringify(details));

    // Axios.post(url , details)
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => console.log("Unauthorised", err))

    fetch(url, {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json"
      },
    body: JSON.stringify({pickUp: "EastHam",
    destination: "Barking"}),
    })
      .then((response) =>
        console.log("response", response.json())
      )
      .then((data) => console.log("data", data));
    };
  // }
  render() {
    return (
      <div className="Container">
        <div className="head"></div>
        {/* <input
          value={this.props.bookings.pickUp}
        /> */}
        <p>
          <button
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </p>
      </div>
    );
  }
}

export default Mailer;

// axios({
//   method: "POST",
//   url: "http://localhost:8000/send",
//   data: {
//     pickUp: this.props.bookings.pickUp,
//     destination: this.props.bookings.destination,
//     // messageHtml: messageHtml
//   },
// }).then((response) => {
//   console.log('hit');
//   if (response.data.msg === "success") {
//     console.log("Email sent!");
//     // this.resetForm();
//     console.log(
//       "axios data",
//       response.data.msg
//     );
//   } else if (response.data.msg === "fail") {
//     console.log(
//       "Oops, something went wrong. Try again"
//     );
//     console.log(
//       "axios data",
//       response.data.msg
//     );
//   }
// });
// console.log("Axios Used");

// handleChange = event => {
//   event.preventdefault.value();
//   this.setState({
//     name: event.target.value,
//     email: event.target.value,
//     phone: event.target.value
//   });
//   console.log(event.target);
// };

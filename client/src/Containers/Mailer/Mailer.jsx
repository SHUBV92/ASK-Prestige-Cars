import React, { Component } from "react";
import axios from "axios";

import MyEmail from '../Test/Email'
import { MyEmail, renderEmail } from 'react-html-email'

class Mailer extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      phone: null,
      message: null,
      favourite: null
    };  this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    console.log('State: ',this.state)
  }

  handleChange = event => {
    //event.preventdefault.value();
    this.setState({
      name: event.target.value,
      email: event.target.value,
      phone: event.target.value,
      message: event.target.value,
      favourite: event.target.value

    });
    console.log(event.target);
  };

  handleSubmit (event)  {
    const messageHtml = renderEmail(
      <MyEmail name={this.state.name}>
        {this.state.message}
      </MyEmail>
    );

    axios({
      method: "POST",
      url: "http://localhost:8000/send",
      data: {
        name: this.state.name,
        email: this.state.email,
        messageHtml: messageHtml
      }
    }).then(response => {
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

  componentDidUpdate(){
    console.log(this.state)
  }

  render() {
    return (
      <div className="Container">
        <div className="head">
          <h1>
            <span>Contact </span> For Candles
          </h1>
        </div>
        <form Method="post" action="/send">
         
           
          <p>
            <button
              type="submit"
              onClick={this.handleChange}
            >
              Submit
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default Mailer;

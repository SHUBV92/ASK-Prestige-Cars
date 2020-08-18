const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();
const server = require("http").createServer(app);
// const creds = require("./config");
const smtpTransport = require("nodemailer-smtp-transport");
const cors = require("cors");

app.use(cors());

server.listen(process.env.PORT || 8000);

app.use(
  express.static(
    path.join(__dirname, "../client")
  )
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({ extended: true })
);
app.get("/", function (req, res) {
  res.sendFile(
    path.join(
      __dirname,
      "../client",
      "public/index.html"
    )
  );
});

// Nodemailer
app.get("/", (req, res) => {
  res.send("Send Your Email to /send");
});

app.post("/send", (req, res) => {

  console.log("Send");
  res.send({ text: "Got the Request" })
  console.log(req.body.pickUp);

  const output = `
      <h1>Booking Details</h1>
      <p>
          <ul>
          <li>Name: </li>
          <li>Contact Number: </li>
          <li>Pick up Address: ${req.body.pickUp} </li>
          <li>Destination Address: ${req.body.destination} </li>
          <li>Date: ${req.body.date} </li>
          <li>Chosen Car: </li>
          <li>Passengers: </li>
          <li>Luggage: ${req.body.luggage}</li>
          <li>Children: </li>
          <li>Booster Seat: Yes </li>
          <ul>
      <p>
      `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "shubv1992@gmail.com",
      pass: "P@$$word1234",
    },
  });

  let mailOptions = {
    from: "shubv1992@gmail.com",
    to: "askpcltd@gmail.com",
    subject: "Contact Request",
    text: "Hello",
    html: output,
  };
  transporter.sendMail(
    mailOptions,
    (error, info) => {
      if (error) {
        return console.log(
          "NodeMailer Error",
          error
        );
      }
      // res.send("Send your Email");
      // res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");
      // res.header(
      // "Access-Control-Allow-Headers")

      console.log(
        "Message sent: %s",
        info.messageId
      );
      const date = new Date();
      console.log(
        "Time:",
        `${date.getHours()}:${date.getMinutes()}`
      );
      console.log(
        "Preview URL: %s",
        nodemailer.getTestMessageUrl(info)
      );
      res.render("contact", {
        msg: "Email has been sent",
      });
    }
  );
});

// //   Google Distance Matrix
// router.post('/', (req, res,next) => {

//     const origins = req.body.origins
//     const destinations = req.body.destinations
//     const mode = req.body.travelMode

//     distance.matrix(origins, destinations, mode, function(err, distances){
//         if(!err)
//             res.json(distance.rows)
//     })
// })

// const router = require('express').Router()
// const distance = require('google-distance-matrix')
// module.exports = router

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const server = require("http").createServer(app);
const smtpTransport = require("nodemailer-smtp-transport");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

// app.use(
//   express.static(path.join(__dirname, "client"))
// );

// production mode 
console.log("Environment", process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build/index.html')))
};  
//  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}
server.listen(port, (req, res) => { console.log(`server listening on port: ${port}`)});

app.use(
  bodyParser.urlencoded({ extended: false })
);

app.get("*", function (req, res) {
  console.log(process.env.PUBLIC_URL, __dirname);

  return res.sendFile(
    path.join(
      __dirname,
      "client/public/index.html"
    )
  );
});

// Nodemailer
app.post("/send", (req, res) => {
  console.log("Send");
  res.send({ text: "Got the Request" });
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

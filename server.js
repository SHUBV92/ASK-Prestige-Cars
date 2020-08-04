const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
// const creds = require("./config");
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport')


// const router = require('express').Router()
// const distance = require('google-distance-matrix')
// module.exports = router


server.listen(process.env.PORT || 8000)

// app.use(express.static(path.join(__dirname, "client/build")));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.get("/", function(req, res) {  
//   res.sendFile(path.join(__dirname, "client/build", "index.html"))});


  // Nodemailer
app.get("/", (req, res) => {
    res.send("Send Your Email to /send");
  });

  const transporter = nodemailer.createTransport(smtpTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "shubs virk",  
      pass: "P@$$word1234"
      // user: creds.USER,
      // pass: creds.PASS
    }
  }));
  app.get("/send", (req, res) => {
    console.log("Send" )
    res.send("Dont Send your Email");

    const output = `
      <h1>Conatct Request</h1>
      <p>
          <ul>
              <li>Name: ${req.body.name}</li>
              <li>Email: ${req.body.email}</li>
              <li>Phone: ${req.body.phone}</li>  
          <ul>
      <p>
      
      `;
  
   
    const mailOptions = {
      from: 'shubv1992@gmail.com>',
      to: "shubinder92@gmail.com",
      subject: "Contact Request",
      text: "Hello",
      // html: output
    };
    transporter.sendMail(
      mailOptions,
      (error, info) => {
        if (error) {
          return console.log(error);
        }
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
          msg: "Email has been sent"
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
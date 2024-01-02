const express = require("express");
const app = express();
const con = require("../model/connection");
const nodemailer = require("nodemailer");
const mailgen = require("mailgen");
const { Admin_email, Admin_pass } = require("../routes/env");

function login(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  con.query("SELECT * FROM login WHERE email =?", [email], (err, result) => {
    if (result.length > 0) {
      if (password == result[0].password) {
        console.log("login successfull");
        res.json("logged-in");
      } else {
        res.json("incorrect password");
      }
    } else {
      res.json("no-recored found");
    }
  });
}

function SendIncorrectPasswordMail(req, res) {
  // var UserFullName="";
  var email = req.body.email;
  // con.query("SELECT * FROM login WHERE email =?", [
  //   email
  // ],(result)=>{
  //   if (result.length > 0) {

  //   }
  // });
  let config = {
    service: "gmail",
    auth: {
      user: Admin_email,
      pass: Admin_pass,
    },
  };

  const transporter = nodemailer.createTransport(config);

  let mailGenrator = new mailgen({
    theme: "default",
    product: {
      name: "mailgen",
      link: "https://mailgen.js/",
    },
  });
  let response = {
    body: {
      name: "Gaurav Choundiye",
      intro: "If you enter 5 time wrong  password your account should be block",
      table: {
        data: [
          {
            item: "You enter 5 time wrong  password",
            description: "5 times  your account should be block",
          },
        ],
      },
    },
  };

  let mail = mailGenrator.generate(response);

  let Message = {
    from: Admin_email,
    to: email,
    subject: "Warning from NullClass",
    text: "Your enter password is wrong if you enter five time password your account will be block for one hour",
    html: "<h3><b>Your enter password is wrong if you enter five time wrong password then your account will be block for one hour</b></h3>",
  };

  transporter
    .sendMail(Message)
    .then(() => {
      return res.status(201).json({
        msg: "you recieve a email",
      });
    })
    .catch((error) => {
      return res.status(501).json({ error });
    });
}

module.exports = {
  login: login,
  SendIncorrectPasswordMail: SendIncorrectPasswordMail,
};

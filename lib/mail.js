"use server";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import fs from "fs";

export async function sendmail(formData) {
  const email = process.env.EMAIL;
  const pass = process.env.PASSWORD;
  const res = process.env.RES;

  // const name = formData.get("name");

  // const service = formData.get("service");
  // const inquiry_email = formData.get("inquiry_email");

  const formObject = Object.fromEntries(formData.entries());

  const { name, inquiry_email, company, budget, message } = formObject;
  const subject = "Manasa Studios: contact request";
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // Office 365 server
    port: 587, // secure SMTP
    // secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
    //service: "Godaddy",
    auth: {
      user: email,
      pass: pass,
    },
    // tls: {
    //   ciphers: "SSLv3",
    // },
    // requireTLS: true,
  });

  //validating connection
  try {
    if (!name || !inquiry_email || !company || !budget || !message) {
      throw new Error(
        "Form not submitted correctly, please try again later. If the issue persists, please contact us as communications@manasastudios.com"
      );
    }
    const testResult = await transporter.verify();
    console.log("connection to STMP server", testResult);
  } catch (error) {
    console.log(error, "error");
    //return NextResponse.json({ message: error.response }, { status: 500 });
    return JSON.parse(JSON.stringify({ error: error.response, status: 500 }));
  }

  // const mailOptions = {
  //   from: email,
  //   to: inquiry_email,
  //   subject: "Thank You For Contacting Manasa Studios",
  //   html: htmlFile,
  //   attachments: [
  //     {
  //       filename: "image-1.png",
  //       path: "./public/images/image-1.png",
  //       cid: "image-1.png",
  //     },
  //     {
  //       filename: "image-2.png",
  //       path: "./public/images/image-2.png",
  //       cid: "image-2.png",
  //     },
  //     {
  //       filename: "image-3.png",
  //       path: "./public/images/image-3.png",
  //       cid: "image-3.png",
  //     },
  //   ],
  // };

  //attachImagesToEmail(transporter, mailOptions);

  //sending the emails
  try {
    const sendResult = await transporter.sendMail({
      from: email,
      to: "nawwafhusain@outlook.com",
      subject: subject,
      html: `<h1> ${subject} </h1>
    <p> ${message}</p>

    <ul><li>Budget: ${budget}</li>
    <li>Email: ${inquiry_email}</li></ul>
    <p> From: ${name} </p>`,
    });
    // .then(async () => {
    //   await transporter.sendMail(mailOptions);
    // });

    return JSON.parse(
      JSON.stringify({ success: "sent successfully", status: 200 })
    );

    // if (sendResult) {
    //   transporter.sendMail({
    //     from: email,
    //     to: "mattijouett@gmail.com", // Change to your recipient
    //     subject: subject,
    //     html: `<h1> ${subject} </h1>
    //   <p> ${message}</p>

    //   <ul><li>Budget: ${budget}</li>
    //   <li>Email: ${inquiry_email}</li></ul>
    //   <p> From: ${name} </p>`,
    //   });
    //   return { success: "Email sent" };
    // } else {
    //   throw error;
    // }
  } catch (error) {
    //return NextResponse.json({ error: error.response, status: 500 });
    console.log(error, "error");
    return JSON.parse(JSON.stringify({ error: error.response, status: 500 }));
  }
}

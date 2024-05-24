"use server";
import nodemailer from "nodemailer";
import toast from "react-hot-toast";

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
    host: "smtpout.secureserver.net", // Office 365 server
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

  try {
    if (!name || !inquiry_email || !company || !budget || !message) {
      throw new Error(
        "Form not submiatted, please try again later. If the issue persists, please contact us as communications@manasastudios.com"
      );
    }
    const testResult = await transporter.verify();
    console.log(testResult, "testResult");
  } catch (error) {
    console.log(error, "error");
    return error;
  }

  try {
    const sendResult = await transporter.sendMail({
      from: email,
      to: "nawwafhusain@outlook.com", // Change to your recipient
      subject: subject,
      html: `<h1> ${subject} </h1>
    <p> ${message}</p>

    <ul><li>Budget: ${budget}</li>
    <li>Email: ${inquiry_email}</li></ul>
    <p> From: ${name} </p>`,
    });

    if (sendResult) {
      transporter.sendMail({
        from: email,
        to: "mattijouett@gmail.com", // Change to your recipient
        subject: subject,
        html: `<h1> ${subject} </h1>
      <p> ${message}</p>
  
      <ul><li>Budget: ${budget}</li>
      <li>Email: ${inquiry_email}</li></ul>
      <p> From: ${name} </p>`,
      });
      return { success: "Email sent" };
    } else {
      throw error;
    }
  } catch (error) {
    return { error: error };
    console.log(error, "error");
  }
}

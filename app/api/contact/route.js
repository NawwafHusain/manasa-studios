import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;
const res = process.env.RES;

async function sendEmail(data) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: pass,
      },
    });

    const mailOptions = {
      from: email,
      to: res,
      subject: "Manasa Academy: contact request",
      text: data,
      html: `<h1> New Contact Request </h1>
    <p> ${data.name} is intreseted in the ${service} package </p>
    <p> Email: ${data.email} </p>`,
    };
    console.log(mailOptions, "inside sendEmail");

    //sending mail to my self
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve(info.response);
      }
    });

    //TODO: send follow up email to client with calendly call link
  });
}

export async function POST(req) {
  try {
    console.log(JSON(req.body), "here");
    if (!body.email || body.email == "") {
      throw error("Email is required");
    }

    await sendEmail(body);

    return new NextResponse(JSON.stringify({ error: "Email is required" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse({ status: 500, body: { error: error.message } });
  }
}

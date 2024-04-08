import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

function sendEmail(emailBody) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: pass,
    },
  });

  const mailOptions = {
    from: email,
    to: email,
    subject: "Manasa Academy: contact request",
    text: emailBody,
    html: `<h1> New Contact Request </h1>
    <p> Please Scedule a call with ${emailBody}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export async function POST(req) {
  try {
    const body = await req.json();

    const { email } = body;
    if (!email || email == "") {
      throw error("Email is required");
    }

    sendEmail(email);
    return NextResponse.json({ status: 200, body: { message: "email sent" } });
  } catch (error) {
    return new NextResponse({ status: 500, body: { error: error.message } });
  }
}

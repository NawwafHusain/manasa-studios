"use server";
import nodemailer from "nodemailer";
import toast from "react-hot-toast";

export async function sendmail(formData) {
  const email = process.env.EMAIL;
  const pass = process.env.PASSWORD;
  const res = process.env.RES;

  const name = formData.get("name");

  const service = formData.get("service");
  const inquiry_email = formData.get("inquiry_email");

  const subject = "Manasa Studios: contact request";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: pass,
    },
  });

  try {
    const testResult = await transporter.verify();
    console.log(testResult, "testResult");
  } catch (error) {
    console.log(error, "error");
    return error;
  }

  try {
    const sendResult = await transporter.sendMail({
      from: email,
      to: res,
      subject: subject,
      html: `<h1> ${subject} </h1>
    <p> ${name} Is inquiring about the ${service} Package. Contact them on ${inquiry_email}</p>
    <p> From:  </p>`,
    });

    if (sendResult) {
      return { success: "Email sent" };
    } else {
      throw error;
    }
  } catch (error) {
    return { error: error };
    console.log(error, "error");
  }
}

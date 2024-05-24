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

  console.log(name, "namemessage");

  const subject = "Manasa Studios: contact request";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: pass,
    },
  });

  try {
    if (!name || !inquiry_email || !company || !budget || !message) {
      throw new Error(
        "Form not submmitted, please try again later. If the issue presists, please contact us as communications@manasastudios.com"
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
      to: res,
      subject: subject,
      html: `<h1> ${subject} </h1>
    <p> ${name} Is inquiring about the ${budget} Package. Contact them on ${inquiry_email}</p>
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

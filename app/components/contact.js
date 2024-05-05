"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { sendmail } from "@/lib/mail";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitedWithenTwoMinutes, setSubmitedWithenTwoMinutes] =
    useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (email != "" && name != "" && service != "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, name, service]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const res = sendmail(formData);
    console.log(res, "res");

    toast.promise(res, {
      loading: "Sending...",
      success: "Your message has been sent",
      error: "Something went wrong, please try again later",
    });

    setIsSubmitting(false);
    setSubmitedWithenTwoMinutes(true);
    setTimeout(() => {
      setSubmitedWithenTwoMinutes(false);
      setEmail("");
      setName("");
      setService("");
      setIsValid(false);
    }, 120000);
  };
  return (
    <section
      className=" px-4 lg:px-16 relative overflow-x-clip xl:h-[100vh] flex justify-center items-center"
      id="contact"
    >
      <div className="w-full lg:h-[40rem] h-[30rem] cards rounded-3xl flex justify-center flex-col items-center lg:gap-8 gap-2 relative ">
        <div className="absolute w-full h-full top-0 left-0 overflow-clip rounded-3xl">
          <Image
            src={"/images/3dBlobsRot.png"}
            fill
            className="object-cover "
            alt="3d blobs"
          />
        </div>

        <h1 className="lg:text-7xl font-bold text-white relative lg:text-left text-center text-5xl mt-5 lg:mt-0">
          Book a Call
        </h1>
        <p className="text-1xl font-normal text-white relative lg:text-left text-center lg:mb-0 mb-8">
          We&apos;ll get back to you ASAP!
        </p>
        <div className="lg:w-[50%] w-full h-auto relative">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 w-full"
          >
            <div className=" w-full flex flex-col lg:flex-row lg:gap-8 gap-2 justify-between">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="flex-1 lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
                onChange={(e) => setName(e.target.value)}
              />
              <select
                name="service"
                placeholder="service"
                defaultValue=""
                className="lg:w-[40%] lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Package</option>
                <option value="Web Design">Design package</option>
                <option value="Web Development">Development Package</option>
                <option value="Complete">Complete Package</option>
                <option value="Not Sure">I&quot;m not sure</option>
              </select>
            </div>
            <input
              type="email"
              name="inquiry_email"
              placeholder="Email"
              className="w-full lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={` text-sm lg:text-lg  right-1  bg-slate-300 lg:rounded-full rounded-3xl py-4 w-[25%] lg:w-[20%]  ${
                isValid ? "hover:bg-slate-400" : "opacity-70"
              }`}
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

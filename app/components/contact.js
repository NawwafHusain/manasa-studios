"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { sendmail } from "@/lib/mail";

export default function Contact() {
  //states
  const [form, setForm] = useState({
    name: "",
    inquiry_email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitedWithenTwoMinutes, setSubmitedWithenTwoMinutes] =
    useState(false);
  const [isValid, setIsValid] = useState(false);

  //Refs
  const formRef = useRef();

  const checkFormValidity = () => {
    const allFieldsFilled = Object.values(form).every(
      (value) => value.trim() !== ""
    );
    setIsValid(allFieldsFilled);
  };

  useEffect(() => {
    checkFormValidity();
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const res = sendmail(formData);
    console.log(res, "res");

    toast
      .promise(res, {
        loading: "Sending...",
        success: "Your message has been sent",
        error: "Something went wrong, please try again later",
      })
      .then((success) => {
        if (success) {
          formRef.current.reset();
        } else {
          console.log("error");
        }
      });

    setIsSubmitting(false);
    setSubmitedWithenTwoMinutes(true);
    setTimeout(() => {
      setSubmitedWithenTwoMinutes(false);
      setForm({
        name: "",
        inquiry_email: "",
        company: "",
        budget: "",
        message: "",
      });
      setIsValid(false);
    }, 120000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <section
      className=" px-4 lg:px-16 relative overflow-x-clip xl:h-min mt-40 flex justify-center items-center"
      id="contact"
    >
      <div className="w-full lg:h-[50rem] h-[70vh] cards rounded-3xl flex justify-center flex-col items-center lg:gap-8 gap-2 relative ">
        <div className="absolute w-full h-full top-0 left-0 overflow-clip rounded-3xl">
          <Image
            src={"/images/3dBlobsRot.png"}
            fill
            className="object-cover opacity-70"
            alt="3d blobs"
          />
        </div>

        <h1 className="lg:text-7xl font-bold text-white relative lg:text-left text-center text-5xl mt-5 lg:mt-0">
          Book a Call
        </h1>
        <p className="text-1xl font-normal text-white relative lg:text-left text-center lg:mb-0 mb-8">
          We&apos;ll get back to you withen 24 hours!
        </p>
        <div className="lg:w-[50%] w-full h-auto relative">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 w-full"
            ref={formRef}
          >
            <div className=" w-full flex flex-col lg:flex-row lg:gap-8 gap-2 justify-between">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="flex-1 lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
                onChange={handleChange}
              />
              <select
                name="budget"
                placeholder="budget"
                defaultValue=""
                className="lg:w-[40%] lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
                onChange={handleChange}
              >
                <option value="">Budget</option>
                <option value="under 1000">under $1000</option>
                <option value="3000">$1000 - $3000</option>
                <option value="5000">$3000 - $5000 </option>
                <option value="over 5000">over $5000</option>
              </select>
            </div>
            <input
              type="email"
              name="inquiry_email"
              placeholder="Email"
              className="w-full lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Company or Brand Name"
              className="w-full lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Please let us know how we can help you"
              className="w-full h-32 lg:rounded-[2rem] rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
              rows="6"
              onChange={handleChange}
            ></textarea>

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

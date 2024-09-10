"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
// import { toast } from "react-hot-toast";
import { sendmail } from "@/lib/mail";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Contact() {
  //react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitedWithenTwoMinutes, setSubmitedWithenTwoMinutes] =
    useState(false);

  // //Refs
  const formRef = useRef();

  const handleSubmitFunction = async (formData) => {
    setIsSubmitting(true);
    console.log(formData, "formData");

    const res = sendmail(formData);
    console.log(res, "res");

    toast
      .promise(res, {
        loading: "Sending...",
        success: (data) => {
          if (data.status === 200) {
            return "Message sent successfully";
          } else {
            throw new Error(data);
          }
        },
        error: (data) => {
          console.log(data);
          return `Something went wrong, please try again later or contact us as communications@manasastudios.com`;
        },
      })
      .then((success, error) => {
        if (success) {
          formRef.current.reset();
        } else {
          console.log("error", error``);
        }
      });

    try {
    } catch (error) {}

    setIsSubmitting(false);
    setSubmitedWithenTwoMinutes(true);
    setTimeout(() => {
      setSubmitedWithenTwoMinutes(false);
    }, 120000);
  };

  return (
    <section
      className=" px-4 lg:px-16 relative overflow-x-clip xl:h-min h-max mt-40 flex justify-center items-center"
      id="contact"
    >
      <div className="w-full  h-max cards rounded-3xl flex justify-center flex-col items-center lg:gap-8 gap-2 relative ">
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
            onSubmit={handleSubmit(handleSubmitFunction)}
            className="flex flex-col items-center gap-4 w-full"
            ref={formRef}
          >
            <div
              className={`${
                Object.keys(errors).length !== 0 &&
                errors.constructor === Object
                  ? "flex-1 bg-white rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm w-full"
                  : "hidden"
              } `}
            >
              {errors.name && (
                <span className="text-red-500 text-sm">
                  Name is required
                  <br />
                </span>
              )}
              {errors.budget && (
                <span className="text-red-500 text-sm">
                  Budget is required
                  <br />
                </span>
              )}
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Email is required
                  <br />
                </span>
              )}
              {errors.message && (
                <span className="text-red-500 text-sm">
                  Message is required <br />
                </span>
              )}
            </div>
            <div className=" w-full flex flex-col lg:flex-row lg:gap-8 gap-2 justify-between ">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="flex-1 lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
                {...register("name", {
                  required: true,
                })}
              />

              <select
                name="budget"
                placeholder="budget"
                defaultValue="budget"
                className="lg:w-[40%] lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
                {...register("budget", {
                  required: true,
                  pattern: /^(?!.*\bBudget\b).*/,
                })}
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
              name="email"
              placeholder="Email"
              className="w-full lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
              {...register("email", { required: true })}
            />

            <input
              type="text"
              name="company"
              placeholder="Company or Brand Name"
              className="w-full lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
              {...register("company")}
            />

            <textarea
              name="message"
              placeholder="Please let us know how we can help you"
              className="w-full h-32 lg:rounded-[2rem] rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
              rows="6"
              {...register("message", { required: true })}
            ></textarea>

            <button
              className={` text-sm lg:text-lg  right-1  bg-slate-300 lg:rounded-full rounded-3xl py-4 w-[25%] lg:w-[20%] hover:bg-slate-400
              `}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

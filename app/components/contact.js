"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitedWithenTwoMinutes, setSubmitedWithenTwoMinutes] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!submitedWithenTwoMinutes) {
      setIsSubmitting(true);
      setSubmitedWithenTwoMinutes(true);
      const data = { email: email };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        toast.success("we will contact you soon!");
        setIsSubmitting(false);
        setTimeout(() => {
          setSubmitedWithenTwoMinutes(false);
        }, 20000);
      } else {
        toast.error(res.error);
      }
    } else {
      toast.error(
        "Cannot submit multiple times, Please try again after 2 minutes"
      );
    }
  };
  return (
    <section className="pt-40 px-4 relative mt-16 overflow-x-clip" id="contact">
      <div className="w-full lg:h-[40rem] h-[30rem] cards rounded-3xl flex justify-center flex-col items-center gap-8 relative ">
        <div className="absolute w-full h-full top-0 left-0 overflow-clip rounded-3xl">
          <Image
            src={"/images/3dBlobsRot.png"}
            fill
            className="object-cover "
            alt="3d blobs"
          />
        </div>

        <h1 className="lg:text-7xl font-bold text-white relative lg:text-left text-center text-8xl">
          Book a Call
        </h1>
        <p className="text-3xl font-normal text-white relative lg:text-left text-center">
          We&apos;ll get back to you ASAP!
        </p>
        <div className="lg:w-[50%] w-full h-auto relative">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full lg:rounded-full rounded-3xl lg:px-8 py-4 lg:text-xl px-4 text-sm "
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={`absolute top-[50%] text-sm lg:text-lg -translate-y-[50%] right-1 hover:bg-slate-400 bg-slate-300 lg:rounded-full rounded-3xl h-[90%] w-[25%] lg:w-[20%] ${
                isSubmitting && "disabled"
              }`}
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
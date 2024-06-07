"use client";
import React from "react";

export default function NewsLetterInput() {
  return (
    <form className="w-full flex flex-col items-end mt-4">
      <input
        type="email"
        placeholder="Example@mail.com"
        className="w-full lg:h-[5vh] h-[6vh]  rounded-full pl-5"
      />
      <button className=" px-10 lg:py-[1vh] py-[1vh] lg:mt-4 mt-2 bg-primary text-white border-2 border-white rounded-full ">
        Subscribe
      </button>
    </form>
  );
}

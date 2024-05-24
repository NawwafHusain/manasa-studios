"use client";
import React from "react";

export default function NewsLetterInput() {
  return (
    <form className="w-full flex flex-col items-end mt-4">
      <input
        type="email"
        placeholder="Example@mail.com"
        className="w-full h-12 rounded-full pl-5"
      />
      <button className=" px-10 py-2 mt-4  bg-primary text-white border-2 border-white rounded-full ">
        Subscribe
      </button>
    </form>
  );
}

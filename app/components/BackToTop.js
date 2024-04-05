"use client";
import React from "react";

export default function BackToTop() {
  const scroll = () => {
    const section = document.querySelector("#hero");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button
      className="border-0 bg-transparent text-white opacity-70 hover:opacity-100"
      onClick={scroll}
    >
      BACK TO TOP
    </button>
  );
}

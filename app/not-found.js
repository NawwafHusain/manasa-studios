import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function custom404() {
  return (
    <div className="w-full h-[90vh]  mt-24 pb-10 relative flex flex-col justify-center items-center gap-2 text-white">
      <Image
        src="/images/astro.png"
        alt="404 astronaut"
        width={100}
        height={100}
        className="astro"
      />
      <h1 className="text-[15rem]">404</h1>
      <h2 className="text-8xl">You Seem Lost...</h2>
      <p className="text-3xl font-thin">Dont worry we will take you home</p>
      <Link
        href="/"
        className="text-2xl py-5 px-8 border-2 border-white rounded-full mt-4 hover:text-black hover:bg-white"
      >
        Take me home
      </Link>
    </div>
  );
}

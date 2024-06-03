import React from "react";
import BackToTop from "./BackToTop";
import Image from "next/image";
import Link from "next/link";
import NewsLetterInput from "./NewsLetterInput";

export default function Footer() {
  return (
    <footer className="w-[100vw] h-[100vh] xl:h-[50vh] min-h-max px-4 grid xl:grid-cols-[35%_9%_9%_9%_14%_20%] grid-cols-[40%_60%] xl:grid-rows-[70%_30%] grid-rows-[30%_16.6%_16.6%_16.6%_20%] xl:gap-4 gap-2 relative mb-10 xl:px-16 md:px-4 mt-4 justify-items-center items-center">
      <div className="foot-cards w-full h-max rounded-[2rem]  xl:cols-start-1 xl:col-span-1 xl:row-span-2 xl:row-start-1 cols-start-1 col-span-2 row-span-1 row-start-1 flex flex-col justify-between items-start">
        <Image
          src="/images/PrimaryWhite.png"
          width={300}
          height={300}
          className="mt-5 hidden xl:block"
        />
        <Image
          src="/images/PrimaryWhite.png"
          width={200}
          height={200}
          className="mt-5 xl:hidden block"
        />
        <div>
          <h3 className="xl:text-2xl  text-white">
            Transforming the Digital Landscape
          </h3>
          <p className="xl:text-lg text-white font-thin">
            With every line of code and pixel-perfect design, we aim to push the
            boundaries of what&apos;s possible, setting new standards for
            digital presence and connectivity
          </p>
        </div>
      </div>
      <div className="foot-cards w-full h-max rounded-[2rem] min-h-max xl:cols-start-2 xl:col-span-4 xl:row-span-1 xl:row-start-1 cols-start-1 col-span-2 row-span-2 row-start-5 flex flex-col justify-center items-start">
        <h3 className="lg:text-[2vw] text-[4.5vw] text-white">
          Subscribe to our newsletter
        </h3>
        <p className="text-white font-thin lg:text-[1.1vw] text-[4vw]">
          {" "}
          Stay upto date with all our offers, emerging trends and new tools in
          the market!
        </p>
        <NewsLetterInput />
      </div>
      <div className="foot-cards w-full h-full rounded-[2rem] xl:cols-start-2 xl:col-span-1 xl:row-span-1 xl:row-start-2 cols-start-1 col-span-1 row-span-1 row-start-2 flex justify-center items-center">
        <a href={"https://www.instagram.com/manasa.studios/"} target="_blank">
          {" "}
          <Image src="/images/instagram.png" width={50} height={50} />{" "}
        </a>
      </div>
      <div className="foot-cards w-full h-full rounded-[2rem] xl:cols-start-3 xl:col-span-1 xl:row-span-1 xl:row-start-2 cols-start-1 col-span-1 row-span-1 row-start-3 flex justify-center items-center">
        <a href={"mailto:communications@manasastudios.com"}>
          <Image src="/images/mail.png" width={50} height={50} />{" "}
        </a>
      </div>
      <div className="foot-cards w-full h-full rounded-[2rem] xl:cols-start-4 xl:col-span-1 xl:row-span-1 xl:row-start-2 cols-start-1 col-span-1 row-span-1 row-start-4 flex justify-center items-center">
        <a href={"www.instagram.com/manasa.studios"}>
          {" "}
          <Image src="/images/whatsapp.png" width={50} height={50} />{" "}
        </a>
      </div>
      <div className="foot-cards w-full h-full rounded-[2rem] xl:cols-start-6 xl:col-span-1 xl:row-span-2 xl:row-start-1 cols-start-2 col-span-1 row-span-3 row-start-2  flex flex-col items-start justify-center ">
        <h4 className="text-lg text-white mb-4">Quick Links</h4>
        <ul className="text-gray-400 w-full gap-2 flex flex-col">
          <li className="hover:text-white"> FAQ</li>
          <li className="hover:text-white"> Privacy Policy</li>
          <li className="hover:text-white">Cookie Policy</li>
          <li className="hover:text-white"> Site Map</li>
        </ul>
      </div>
      <div className="py-10 xl:py-0 col-span-2 xl:col-span-1">
        <BackToTop />
      </div>
    </footer>
  );
}

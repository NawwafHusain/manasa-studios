import React from "react";
import BackToTop from "./BackToTop";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-[100vw] h-[50vh] grid grid-cols-[35%_9%_9%_9%_14%_20%] grid-rows-[70%_30%] gap-4 relative mb-10 px-16 mt-4 justify-items-center items-center">
      <div className="foot-cards w-full h-full rounded-[2rem]  cols-start-1 col-span-1 row-span-2 row-start-1 flex flex-col justify-between items-start">
        <Image
          src="/images/primaryWhite.png"
          width={300}
          height={300}
          className="mt-5"
        />
        <div>
          <h3 className="text-2xl text-white">
            Transforming the Digital Landscape
          </h3>
          <p className="text-lg text-white font-thin">
            With every line of code and pixel-perfect design, we aim to push the
            boundaries of what's possible, setting new standards for digital
            presence and connectivity
          </p>
        </div>
      </div>
      <div className="foot-cards w-full h-full rounded-[2rem]  cols-start-2 col-span-4 row-span-1 row-start-1 flex justify-center items-center"></div>
      <div className="foot-cards w-full h-full rounded-[2rem]  cols-start-3 col-span-1 row-span-1 row-start-2 flex justify-center items-center">
        <a href={"https://www.instagram.com/manasa.studios/"} target="_blank">
          {" "}
          <Image src="/images/instagram.png" width={50} height={50} />{" "}
        </a>
      </div>
      <div className="foot-cards w-full h-full rounded-[2rem]  cols-start-4 col-span-1 row-span-1 row-start-2 flex justify-center items-center">
        <a href={"mailto:communications@manasastudios.com"}>
          <Image src="/images/mail.png" width={50} height={50} />{" "}
        </a>
      </div>
      <div className="foot-cards w-full h-full rounded-[2rem]  cols-start-5 col-span-1 row-span-1 row-start-2 flex justify-center items-center">
        <a href={"www.instagram.com/manasa.studios"}>
          {" "}
          <Image src="/images/whatsapp.png" width={50} height={50} />{" "}
        </a>
      </div>
      <div className="foot-cards w-full h-full rounded-[2rem]  cols-start-6 col-span-1 row-span-2 row-start-1  flex flex-col items-start justify-center ">
        <h4 className="text-lg text-white mb-4">Quick Links</h4>
        <ul className="text-gray-400 w-full gap-2 flex flex-col">
          <li className="hover:text-white"> Faq</li>
          <li className="hover:text-white"> Privacy Policy</li>
          <li className="hover:text-white">Cookie Policy</li>
          <li className="hover:text-white"> Site Map</li>
        </ul>
      </div>
      <BackToTop />
    </footer>
  );
}

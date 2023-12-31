"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Nav() {
  const navRef = useRef();
  const navTwoRef = useRef();
  const triggerRef = useRef();
  const root = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.to(navRef.current, {
        y: 0,
        duration: 1,
        delay: 0.75,
        opacity: 1,
      });
      gsap.to(navRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 5%",
          end: "top 0%",
          //scrub: true,
          duration: 1.5,
          //markers: true,
          toggleActions: "play none none reverse",
          ease: "power1.inOut",
        },
        backdropFilter: "blur(100px)",
        width: "50%",
      });
      gsap.to(navTwoRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 5%",
          end: "top 0%",
          //scrub: true,
          duration: 1.5,
          //markers: true,
          toggleActions: "play none none reverse",
          ease: "power1.inOut",
        },
        opacity: 1,
      });
    },
    { scope: root }
  );

  return (
    <>
      <div
        className="top-0 left-0 w-screen p-10 h-28 z-10 sticky flex justify-center items-center"
        ref={root}
      >
        <div
          className="w-full h-20 rounded-full nav flex justify-between items-center px-10 sticky z-60"
          ref={navRef}
        >
          <div
            className="nav2 absolute top-0 left-0 rounded-full h-full w-full flex justify-between items-center px-10  "
            ref={navTwoRef}
          >
            <Image
              src="/images/LogoBlack.png"
              width={80}
              height={66}
              className="object-contain"
              alt="Manasa Studios Logo white version"
            />
            <ul className="flex gap-2">
              <li className=" nav-button2 rounded-full flex justify-center items-center">
                Services
              </li>
              <li className=" nav-button2 rounded-full flex justify-center items-center">
                Projects
              </li>
              <li className=" nav-button2 rounded-full flex justify-center items-center">
                Methadology
              </li>
              <li className=" nav-button2 rounded-full flex justify-center items-center">
                Contact
              </li>
            </ul>
          </div>
          <Image
            src="/images/LogoWhite.png"
            width={80}
            height={66}
            className="object-contain"
            alt="Manasa Studios Logo white version"
          />
          <ul className="flex gap-2">
            <li className=" nav-button rounded-full flex justify-center items-center">
              Services
            </li>
            <li className=" nav-button rounded-full flex justify-center items-center">
              Projects
            </li>
            <li className=" nav-button rounded-full flex justify-center items-center">
              Methadology
            </li>
            <li className=" nav-button rounded-full flex justify-center items-center">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={triggerRef}
        className="w-10 h-10 bg-transparent absolute top-15 left-15"
      ></div>
    </>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);

  const card = useRef([]);
  const title = useRef([]);
  const root = useRef();

  useGSAP(() => {
    const isMobile = window.innerWidth <= 768; // assuming 768px is your mobile breakpoint

    gsap.to(title.current, {
      scrollTrigger: {
        trigger: root.current,
        start: "top 50%",
        end: "100% 60%",

        //markers: true,
        toggleActions: "play reverse play reverse",
      },
      duration: 1,
      stagger: 0.1,
      x: 0,
      ease: "power4.out",
      delay: 0,
      opacity: 1,
      marginLeft: 0,
      touchAction: "play reverse play reverse",
    });

    gsap.to(card.current, {
      scrollTrigger: {
        trigger: root.current,
        start: "top 50%",
        end: "100% 60%",

        //markers: true,
        toggleActions: "play reverse play reverse",
      },
      duration: 1,
      stagger: 0.1,
      x: 0,
      ease: "none",
      delay: 0,
      opacity: 1,
      touchAction: "play reverse play reverse",
    });

    //title sharing ref with the rest
  });

  return (
    <section
      className="lg:pt-40 pt-20 px-8 lg:px-16 relative  overflow-x-clip"
      id="projects"
      ref={root}
    >
      <h1
        className="text-white text-6xl text-center lg:text-left lg:text-7xl -translate-x-[20%] opacity-0"
        ref={title}
      >
        Projects
      </h1>
      <div className="flex lg:flex-wrap flex-col gap-4 flex-1 min-h-[70rem] lg:max-h-[90rem] lg:mt-0 mt-5">
        <div
          ref={(e) => {
            card.current[0] = e;
          }}
          className=" translate-x-[20%] opacity-0 bg-white lg:w-[50%] rounded-3xl overflow-clip p-10 h-max relative flex justify-center items-center hover:-translate-y-1 transition-all duration-500 cursor-pointer"
        >
          <div className="absolute lg:hidden left-0 top-0 w-full bg-gradient-to-b from-black to-transparent z-[3] pt-5 pl-5 h-32 from-10%">
            <h1 className="text-3xl text-white">
              Clothing by Twelve [Logo and Branding]{" "}
            </h1>
          </div>
          <Image
            src={"/images/twelve/7.jpg"}
            fill
            className="object-cover hover:scale-110 transition-all duration-500 hover:cursor-default lg:object-center object-right"
            alt="tweleve logo"
          />
          <h1 className="text-5xl  relative w-[60%] hidden lg:block">
            Clothing by Tweleve [Logo and branding]
          </h1>
          <div className="w-full h-[20rem]"></div>
        </div>
        <div
          ref={(e) => {
            card.current[1] = e;
          }}
          className=" translate-x-[20%] opacity-0 cards lg:w-[50%] lg:h-[50rem] h-[30rem] rounded-3xl overflow-clip p-10 relative hover:-translate-y-1 transition-all duration-500 cursor-pointer"
        >
          <div className="absolute left-0 top-0 w-full bg-gradient-to-b from-black to-transparent z-10 pt-5 pl-5 h-32 from-10%">
            <h1 className="text-3xl text-white">
              Manasa Academy (in Development)
            </h1>
          </div>
          <Image
            src={"/images/manasaAcademy.png"}
            fill
            className="object-cover object-top hover:object-bottom transition-all duration-500 hover:cursor-default "
            alt="tweleve logo"
          />
        </div>
        <div
          ref={(e) => {
            card.current[2] = e;
          }}
          className=" translate-x-[20%] opacity-0 cards lg:w-[50%] lg:h-[30rem] h-[30rem] rounded-3xl overflow-clip p-10 relative hover:-translate-y-1 transition-all duration-500 cursor-pointer"
        >
          <Image
            src={"/images/corinna/corinnaCoachingOne.com.png"}
            fill
            className="object-cover object-top hover:object-bottom transition-all duration-500 hover:cursor-default"
            alt="tweleve logo"
          />
          <div className="absolute left-0 top-0 w-full bg-gradient-to-b from-black to-transparent z-10 pt-5 pl-5 lg:h-32 h-52 from-10%">
            <h1 className="text-[2rem]  text-white relative">
              Corinna Coaching [Web Design + Development]
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

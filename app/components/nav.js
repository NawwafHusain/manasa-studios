"use client";
import React, { useEffect, useState } from "react";
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
  const [isOpened, setIsOpened] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const isMobile = window.innerWidth <= 768; // assuming 768px is your mobile breakpoint

      gsap.to(navRef.current, {
        y: 0,
        duration: 1,
        delay: 0.5,
        opacity: 1,
      });
      {
        /*sizing scrollTrigger */
      }
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
        width: isMobile ? "100%" : "50%",
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

  const listAnimation = () => {
    gsap.from(".list-item", {
      stagger: 0.1,
      opacity: 0,
      y: 100,
      delay: 0.5,
    });
  };

  useEffect(() => {
    isOpened ? listAnimation() : null;
  }, [isOpened]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpened(false);
    }
  };

  return (
    <>
      <div
        className={`top-0 left-0 max-w-[1920] w-full lg:p-8 p-4 h-28   min-h-28 z-10 sticky flex justify-center items-center overflow-x-clip`}
        ref={root}
      >
        <div
          className={`w-full lg:h-20 h-full rounded-[3rem] nav flex justify-between  items-center
           pr-10 pl-4 sticky z-60 transition-all duration-500 `}
          ref={navRef}
        >
          {/*mobile list*/}
          <div
            className={`w-full ${
              isOpened ? "h-[97vh] bg-white" : "h-0 bg-transparent"
            } absolute top-0 left-0 pr-4 z-0 rounded-[2rem] transition-all duration-500  overflow-clip flex flex-col justify-between`}
          >
            <ul
              className={`flex flex-col justify-center items-center gap-4 text-3xl font-bold flex-1 `}
            >
              <li
                className=" list-item"
                onClick={() => scrollToSection("services")}
              >
                Services
              </li>
              <li
                className=" list-item"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </li>
              <li
                className=" list-item"
                onClick={() => scrollToSection("methadology")}
              >
                Methadology
              </li>
              <li
                className=" list-item"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </li>
            </ul>
          </div>
          <div
            className={`nav2 absolute top-0 left-0 rounded-[3rem] h-full w-full flex justify-between lg:items-center pr-10 pl-4 items-center `}
            ref={navTwoRef}
          >
            <Image
              src="/images/SubMarkBlack.png"
              width={66}
              height={66}
              className="object-contain"
              alt="Manasa Studios Logo white version"
            />
            <Image
              src={isOpened ? "/images/close.png" : "/images/hamburger.png"}
              width={40}
              height={40}
              className="object-contain lg:hidden"
              onClick={() => setIsOpened(!isOpened)}
              alt="Menu Button"
            />
            {/*Desktop Menu */}
            <ul className="lg:flex gap-2 hidden">
              <li
                className=" nav-button2 rounded-full flex justify-center items-center"
                onClick={() => scrollToSection("services")}
              >
                Services
              </li>
              <li
                className=" nav-button2 rounded-full flex justify-center items-center"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </li>
              <li
                className=" nav-button2 rounded-full flex justify-center items-center"
                onClick={() => scrollToSection("methadology")}
              >
                Methadology
              </li>
              <li
                className=" nav-button2 rounded-full flex justify-center items-center"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </li>
            </ul>
          </div>
          <Image
            src="/images/SubMarkWhite.png"
            width={66}
            height={66}
            className="object-contain"
            alt="Manasa Studios Logo white version  z-"
          />
          <Image
            src="/images/hamburgerWhite.png"
            width={40}
            height={40}
            className="object-contain lg:hidden z-"
            alt="Manasa Studios Logo white version "
          />

          {/*desktop Menu */}
          <ul className="lg:flex gap-2 hidden">
            <li
              className=" nav-button rounded-full flex justify-center items-center"
              onClick={() => scrollToSection("services")}
            >
              Services
            </li>
            <li
              className=" nav-button rounded-full flex justify-center items-center"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <li
              className=" nav-button rounded-full flex justify-center items-center"
              onClick={() => scrollToSection("methadology")}
            >
              Methodology
            </li>
            <li
              className=" nav-button rounded-full flex justify-center items-center"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={triggerRef}
        className="w-10 h-10  absolute top-24 left-15"
      ></div>
    </>
  );
}

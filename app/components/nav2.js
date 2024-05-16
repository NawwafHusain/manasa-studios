"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Nav2() {
  //refs
  const triggerRef = useRef();
  const navRef = useRef();
  const listItemRef = useRef([]);

  //useStates
  const [isOpened, setIsOpened] = useState(false);
  const [logo, setLogo] = useState("/images/PrimaryWhite.png");
  const [menuButton, setMenuButton] = useState("/images/hamburgerWhite.png");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = () => {
    setIsOpened((prev) => !prev);
    console.log(isOpened);
  };

  useEffect(() => {
    if (isScrolled) {
      setMenuButton("/images/hamburger.png");
      setLogo("/images/PrimaryBlack.png");

      for (let i = 0; i < listItemRef.current.length; i++) {
        listItemRef.current[i].style.backgroundColor = "black";
        listItemRef.current[i].style.color = "white";
      }
    } else {
      setMenuButton("/images/hamburgerWhite.png");
      setLogo("/images/PrimaryWhite.png");

      for (let i = 0; i < listItemRef.current.length; i++) {
        listItemRef.current[i].style.backgroundColor = "";
        listItemRef.current[i].style.color = "";
      }
    }
  }, [isScrolled]);

  useEffect(() => {
    if (isOpened) {
      setMenuButton("/images/close.png");
      setLogo("/images/PrimaryBlack.png");

      navRef.current.style.background = "white";
    } else if (isScrolled) {
      setMenuButton("/images/hamburger.png");
      setLogo("/images/PrimaryBlack.png");
      navRef.current.style.background = "white";
    } else {
      setMenuButton("/images/hamburgerWhite.png");
      setLogo("/images/PrimaryWhite.png");
      navRef.current.style.background = "";
    }
  }, [isOpened]);

  useGSAP(() => {
    const isMobile = window.innerWidth <= 1200; // assuming 1024px is your ipad breakpoint

    gsap.to(navRef.current, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
      delay: 0.2,
    });

    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 5%",
        end: "top 0%",
        //scrub: true,
        duration: isMobile ? 0.5 : 1.5,
        //markers: true,
        toggleActions: "play none none reverse",
        ease: "power1.inOut",
        onEnter: () => {
          setTimeout(() => {
            setIsScrolled(true);
          }, 500);
        },
        onEnterBack: () => {
          setTimeout(() => {
            setIsScrolled(false);
          }, 500);
        },
      },
      background: "white",
      width: isMobile ? "" : "50%",
    });
  });

  const listAnimation = () => {
    gsap.from(".list-item", {
      stagger: 0.1,
      opacity: 0,
      y: 100,
      delay: 0.3,
    });
  };

  useEffect(() => {
    isOpened ? listAnimation() : null;
  }, [isOpened]);

  return (
    <section className="xl:w-[calc(100vw-4rem)] fixed z-50 flex justify-center">
      <nav
        className={`sticky top-5 xl:rounded-full rounded-[3rem] ${
          isOpened ? "h-[95vh]" : "h-20"
        }  py-2 overflow-y-visible  w-[calc(100vw-5rem)]   xl:h-20 mt-5 z-50 nav opacity-0 translate-y-[-100%] pl-4 pr-8 flex xl:flex-row flex-col justify-between items-center xl:items-center transition-all duration-500`}
        ref={navRef}
      >
        {" "}
        <div className="flex items-center justify-between w-full">
          <Image
            src={logo}
            width={125}
            height={66}
            className="object-contain"
            alt="Manasa Studios Logo white version"
          />
          <Image
            src={menuButton}
            width={40}
            height={40}
            className="object-contain xl:hidden"
            alt="Manasa Studios Logo white version"
            onClick={handleMenu}
          />
          {/*desktop Menu */}
          <ul className={`xl:flex gap-2 hidden w-max `}>
            <li
              className=" nav-button rounded-full flex justify-center items-center"
              onClick={() => scrollToSection("services")}
              ref={(e) => {
                listItemRef.current[0] = e;
              }}
            >
              Services
            </li>
            <li
              className=" nav-button rounded-full flex justify-center items-center"
              onClick={() => scrollToSection("projects")}
              ref={(e) => {
                listItemRef.current[1] = e;
              }}
            >
              Projects
            </li>
            <li
              className=" nav-button rounded-full flex justify-center items-center"
              onClick={() => scrollToSection("methadology")}
              ref={(e) => {
                listItemRef.current[2] = e;
              }}
            >
              Methodology
            </li>
            <li
              className=" nav-button rounded-full flex justify-center items-center"
              onClick={() => scrollToSection("contact")}
              ref={(e) => {
                listItemRef.current[3] = e;
              }}
            >
              Contact
            </li>
          </ul>
        </div>
        {/*Mobile Menu */}
        <ul
          className={`xl:hidden flex flex-col justify-center items-center gap-4 text-3xl font-bold overflow-y-clip ${
            isOpened ? "h-full" : "h-0"
          } transition-all duration-500`}
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
          <li className=" list-item" onClick={() => scrollToSection("contact")}>
            Contact
          </li>
        </ul>
      </nav>

      {/*scrollTrigger Ref*/}
      <div
        ref={triggerRef}
        className="w-10 h-10  absolute top-24 left-15"
      ></div>
    </section>
  );
}
